
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
  const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "";
  const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

  try {
    const { user_id } = await req.json();
    if (!user_id) {
      throw new Error("user_id is required");
    }

    console.log(`Creating or verifying profile for user: ${user_id}`);

    // Check if profile exists
    const { data: existingProfile, error: checkError } = await supabaseClient
      .from('profiles')
      .select('id')
      .eq('id', user_id)
      .maybeSingle();

    if (checkError) {
      console.error(`Error checking profile: ${JSON.stringify(checkError)}`);
      throw checkError;
    }

    // Create profile if it doesn't exist
    if (!existingProfile) {
      console.log(`No profile found, creating new profile for user: ${user_id}`);
      
      const { error: insertError } = await supabaseClient
        .from('profiles')
        .insert([{ 
          id: user_id,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }]);

      if (insertError) {
        console.error(`Error creating profile: ${JSON.stringify(insertError)}`);
        throw insertError;
      }
      
      console.log(`Successfully created profile for user: ${user_id}`);
    } else {
      console.log(`Found existing profile for user: ${user_id}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(`Error in handle-new-user function: ${errorMessage}`);
    
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});
