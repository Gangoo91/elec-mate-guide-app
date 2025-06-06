
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[CREATE-CHECKOUT] ${step}${detailsStr}`);
};

serve(async (req: Request) => {
  // Log start of request processing
  logStep("Request received", { 
    method: req.method,
    headers: Object.fromEntries(req.headers),
    url: req.url
  });

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");
    
    // Initialize Supabase with anon key (reading auth info only)
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    // Get the current user via JWT
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      logStep("Missing authorization header");
      throw new Error("Missing authorization header");
    }
    
    const token = authHeader.replace("Bearer ", "");
    logStep("Authenticating user with token");
    
    // Use the JWT to get the user
    const { data: authData, error: authError } = await supabase.auth.getUser(token);
    
    if (authError) {
      logStep("Authentication failed", { error: authError.message });
      throw new Error(authError?.message || "Authentication failed");
    }
    
    if (!authData?.user) {
      logStep("No user found in auth data");
      throw new Error("No authenticated user found");
    }
    
    const user = authData.user;
    logStep("User authenticated", { id: user.id, email: user.email });
    
    if (!user.email) {
      logStep("Email missing from authenticated user");
      throw new Error("Authenticated user email not found");
    }

    // Stripe instance
    const stripeKey = Deno.env.get("Stripe_Payment_Key");
    if (!stripeKey) {
      logStep("Stripe key is missing");
      throw new Error("Stripe secret key not configured");
    }
    
    const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });
    logStep("Stripe initialized with API version 2023-10-16");

    // Get price_id from POST body
    let price_id;
    try {
      const body = await req.json();
      price_id = body.price_id;
      logStep("Received request with price_id", { price_id });
      
      if (!price_id) {
        logStep("No price_id provided in request body");
        throw new Error("Price ID is required");
      }
    } catch (parseError) {
      logStep("Error parsing request body", { error: parseError });
      throw new Error("Invalid request format or missing price_id");
    }

    // Check if the customer exists in Stripe
    logStep("Checking for existing customer", { email: user.email });
    const customers = await stripe.customers.list({ email: user.email, limit: 1 });
    let customerId: string | undefined = undefined;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
      logStep("Found existing customer", { customerId });
    } else {
      logStep("No existing customer found, will create new customer");
    }

    const lineItems = [
      { price: price_id, quantity: 1 }
    ];

    // Get the URL origin from request headers or default to localhost
    const url = req.headers.get("origin") || "http://localhost:3000";
    logStep("Creating checkout session", { 
      customerId: customerId || "new customer", 
      customerEmail: customerId ? "using existing" : user.email,
      lineItems, 
      successUrl: `${url}/subscription/success`,
      cancelUrl: `${url}/subscription?checkout=cancel`
    });
    
    // Create checkout session with expanded options for better compatibility
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : user.email,
      line_items: lineItems,
      mode: "subscription",
      success_url: `${url}/subscription/success`,
      cancel_url: `${url}/subscription?checkout=cancel`,
      payment_method_types: ['card'],
      allow_promotion_codes: true,
      billing_address_collection: 'auto',
      client_reference_id: user.id,
      locale: 'auto',
      ui_mode: 'hosted',  // Explicitly set to hosted mode
      metadata: {
        user_id: user.id,
        subscription_plan: price_id,
        app_version: "1.0.0",
        timestamp: new Date().toISOString(),
      },
    });

    if (!session.url) {
      logStep("No URL returned in checkout session", { session });
      throw new Error("Stripe session created but no URL was returned");
    }

    logStep("Checkout session created successfully", { 
      sessionId: session.id, 
      url: session.url,
      expiresAt: session.expires_at
    });

    // Return the checkout session URL with CORS headers
    return new Response(
      JSON.stringify({ 
        url: session.url,
        sessionId: session.id,
        status: "success" 
      }),
      { 
        headers: { 
          ...corsHeaders, 
          "Content-Type": "application/json",
          "Cache-Control": "no-cache, no-store" 
        },
        status: 200 
      }
    );
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    logStep("ERROR", { message: msg });
    return new Response(
      JSON.stringify({ 
        error: msg,
        status: "error" 
      }),
      {
        headers: { 
          ...corsHeaders, 
          "Content-Type": "application/json",
          "Cache-Control": "no-cache, no-store"
        },
        status: 500
      }
    );
  }
});
