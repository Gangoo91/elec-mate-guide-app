
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[CUSTOMER-PORTAL] ${step}${detailsStr}`);
};

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const stripeKey = Deno.env.get("Stripe_Payment_Key");
    if (!stripeKey) throw new Error("Stripe secret key missing");
    
    // Service role key to lookup users
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) throw new Error("No authorization header provided");
    const token = authHeader.replace("Bearer ", "");
    const { data: { user }, error: userError } = await supabase.auth.getUser(token);
    if (userError) throw new Error(`Authentication error: ${userError.message}`);
    if (!user?.email) throw new Error("User not authenticated or email not available");
    logStep("User authenticated", { userId: user.id, email: user.email });

    const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });
    
    // Try to find customer by email
    const customers = await stripe.customers.list({ email: user.email, limit: 1 });
    
    // If no customer exists, create one
    let customerId;
    if (customers.data.length === 0) {
      const newCustomer = await stripe.customers.create({
        email: user.email,
        metadata: {
          user_id: user.id
        }
      });
      customerId = newCustomer.id;
      logStep("Created new Stripe customer", { customerId });
    } else {
      customerId = customers.data[0].id;
      logStep("Found existing Stripe customer", { customerId });
    }

    // Create a return URL that includes a cache-busting parameter
    const origin = req.headers.get("origin") || "http://localhost:3000";
    const timestamp = Date.now();
    const returnUrl = `${origin}/profile?t=${timestamp}`;
    
    // Create a billing portal session
    logStep("Creating portal session", { customerId, returnUrl });
    
    try {
      const portalSession = await stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: returnUrl,
      });
      
      logStep("Portal session created successfully", { 
        sessionId: portalSession.id, 
        url: portalSession.url 
      });
      
      return new Response(
        JSON.stringify({ url: portalSession.url }),
        { 
          headers: { ...corsHeaders, "Content-Type": "application/json" }, 
          status: 200 
        }
      );
    } catch (portalError: any) {
      // Check if this is a portal configuration missing error
      if (portalError.message?.includes("configuration") && portalError.message?.includes("not been created")) {
        logStep("Portal configuration missing, using manual subscription management");
        
        // FALLBACK: Get subscription info directly instead of using customer portal
        const subscriptions = await stripe.subscriptions.list({
          customer: customerId,
          status: 'all',
          limit: 10,
          expand: ['data.default_payment_method']
        });
        
        // Return a special response with subscription data instead of a portal URL
        return new Response(
          JSON.stringify({
            bypass_portal: true,
            subscription_data: {
              subscriptions: subscriptions.data.map(sub => ({
                id: sub.id,
                status: sub.status,
                current_period_end: sub.current_period_end,
                cancel_at_period_end: sub.cancel_at_period_end,
                plan: sub.items.data[0]?.price.nickname || 'Unknown Plan',
                amount: sub.items.data[0]?.price.unit_amount,
                currency: sub.items.data[0]?.price.currency,
                interval: sub.items.data[0]?.price.recurring?.interval
              }))
            }
          }),
          { 
            headers: { ...corsHeaders, "Content-Type": "application/json" }, 
            status: 200 
          }
        );
      }
      
      // For other errors
      logStep("Portal creation error", { 
        message: portalError.message,
        type: portalError.type,
        code: portalError.code
      });
      
      // Re-throw with a more helpful message
      throw portalError;
    }
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    logStep("ERROR", { message: msg });
    return new Response(JSON.stringify({ error: msg }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500
    });
  }
});
