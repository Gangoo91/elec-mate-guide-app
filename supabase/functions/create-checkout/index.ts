
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Initialize Supabase with anon key (reading auth info only)
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    // Get the current user via JWT
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) throw new Error("Missing authorization header");
    const token = authHeader.replace("Bearer ", "");
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    if (authError) throw new Error(authError.message);
    if (!user?.email) throw new Error("Authenticated user not found");
    // Stripe instance
    const stripe = new Stripe(Deno.env.get("Stripe_Payment_Key")!, { apiVersion: "2023-10-16" });
    // Check if the customer exists in Stripe
    const customers = await stripe.customers.list({ email: user.email, limit: 1 });
    let customerId: string | undefined = undefined;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    }
    // Pricing details: default to a monthly premium plan, customize as you grow!
    const priceId = Deno.env.get("STRIPE_PRICE_ID") || undefined;
    // fallback: example product, should be updated for your project
    const lineItems = [
      priceId
        ? { price: priceId, quantity: 1 }
        : {
            price_data: {
              currency: "gbp",
              product_data: { name: "Elec-Mate Premium Subscription" },
              unit_amount: 699,
              recurring: { interval: "month" },
            },
            quantity: 1,
          },
    ];
    const url = req.headers.get("origin") || "http://localhost:3000";
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : user.email,
      line_items: lineItems as any,
      mode: "subscription",
      success_url: `${url}/dashboard?checkout=success`,
      cancel_url: `${url}/dashboard?checkout=cancel`,
    });

    return new Response(
      JSON.stringify({ url: session.url }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
    );
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return new Response(JSON.stringify({ error: msg }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500
    });
  }
});
