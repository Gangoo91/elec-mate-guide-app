
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Helper logging function for enhanced debugging
const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[CHECK-SUBSCRIPTION] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  logStep("Function started");

  try {
    // Use the service role key to perform writes (upsert) in Supabase
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    const stripeKey = Deno.env.get("Stripe_Payment_Key");
    if (!stripeKey) throw new Error("Stripe secret key missing");
    
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) throw new Error("No authorization header provided");
    
    logStep("Authenticating user with token");
    
    const token = authHeader.replace("Bearer ", "");
    const { data: userData, error: userError } = await supabase.auth.getUser(token);
    if (userError) throw new Error(`Authentication error: ${userError.message}`);
    const user = userData.user;
    if (!user?.email) throw new Error("User not authenticated or email not available");
    logStep("User authenticated", { userId: user.id, email: user.email });

    const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });
    
    logStep("Searching for Stripe customer", { email: user.email });
    const customers = await stripe.customers.list({ email: user.email, limit: 1 });
    
    if (customers.data.length === 0) {
      logStep("No customer found, updating database with unsubscribed state");
      await supabase.from("subscribers").upsert({
        email: user.email,
        user_id: user.id,
        stripe_customer_id: null,
        subscribed: false,
        subscription_tier: null,
        subscription_end: null,
        price_id: null,
        billing_period: null,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'email' });
      
      return new Response(JSON.stringify({ subscribed: false }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    const customerId = customers.data[0].id;
    logStep("Found customer", { customerId });
    
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: "active",
      limit: 1,
      expand: ['data.items.data.price']
    });
    
    logStep("Found subscriptions", { count: subscriptions.data.length });
    
    let subscribed = false;
    let subscriptionTier = null;
    let subscriptionEnd = null;
    let priceId = null;
    let billingPeriod = null;
    
    if (subscriptions.data.length > 0) {
      // We have an active subscription
      subscribed = true;
      const subscription = subscriptions.data[0];
      subscriptionEnd = new Date(subscription.current_period_end * 1000).toISOString();
      
      // Get the price ID and determine subscription tier
      priceId = subscription.items.data[0]?.price.id;
      
      // Map from price ID to plan name based on our known values
      if (priceId === "price_1RGIaQ2RKw5t5RAmh7lzac0R" || priceId === "price_1RGIbj2RKw5t5RAm8xkaH5I2") {
        subscriptionTier = "Apprentice";
      } else if (priceId === "price_1RGIdw2RKw5t5RAmEWjKbGx1" || priceId === "price_1RGId02RKw5t5RAm2iGQJ9xU") {
        subscriptionTier = "Electrician";
      } else if (priceId === "price_1RGIgX2RKw5t5RAma3zfsmAc" || priceId === "price_1RGIhM2RKw5t5RAmhTfWgGLO") {
        subscriptionTier = "Employer";
      }
      
      // Get billing period from the price
      const interval = subscription.items.data[0]?.price.recurring?.interval;
      billingPeriod = interval === 'year' ? 'yearly' : 'monthly';
      
      logStep("Active subscription found", { 
        subscriptionTier, 
        billing_period: billingPeriod, 
        subscriptionEnd,
        priceId 
      });
    } else {
      logStep("No active subscription found");
    }
    
    // Update the database with subscription status
    logStep("Updating database");
    await supabase.from("subscribers").upsert({
      email: user.email,
      user_id: user.id,
      stripe_customer_id: customerId,
      subscribed: subscribed,
      subscription_tier: subscriptionTier,
      subscription_end: subscriptionEnd,
      price_id: priceId,
      billing_period: billingPeriod,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'email' });
    
    logStep("Database updated successfully");
    
    // Return subscription data
    logStep("Returning subscription data");
    return new Response(JSON.stringify({
      subscribed: subscribed,
      subscription_tier: subscriptionTier,
      subscription_end: subscriptionEnd,
      price_id: priceId,
      billing_period: billingPeriod
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
