import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { query, isConnectionTest } = await req.json();
    
    // Log environment info for debugging
    console.log("Checking for OpenAI API key...");
    
    // Enhanced key retrieval with detailed logging
    const keyVariants = [
      'OPENAI_API_KEY',
      'OpenAI API',
      'OPENAI_KEY',
      'OPENAI_SECRET',
      'OPEN_AI_KEY'
    ];

    let openAIApiKey = null;
    for (const variant of keyVariants) {
      const key = Deno.env.get(variant);
      console.log(`Checking variant ${variant}:`, key ? 'Key found' : 'No key');
      if (key) {
        openAIApiKey = key;
        break;
      }
    }

    if (!openAIApiKey) {
      console.error("CRITICAL: No OpenAI API key found through any method");
      return new Response(JSON.stringify({ 
        response: "Cannot find OpenAI API key. Please verify the secret in Supabase project settings."
      }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // If this is just a connection test, we'll do a lightweight API call
    if (isConnectionTest) {
      console.log("Performing API connection test...");
      
      try {
        // Make a minimal API call to verify connectivity
        const response = await fetch('https://api.openai.com/v1/models', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${openAIApiKey}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('OpenAI API connection test failed:', JSON.stringify(errorData, null, 2));
          
          if (errorData.error?.type === "insufficient_quota") {
            return new Response(JSON.stringify({ 
              error: "API quota exceeded",
              details: "Your OpenAI API account has insufficient quota."
            }), {
              headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            });
          }
          
          throw new Error(`Failed to connect to OpenAI API: ${errorData.error?.message || 'Unknown error'}`);
        }

        // Connection successful
        return new Response(JSON.stringify({ 
          status: "connected",
          message: "Successfully connected to OpenAI API"
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      } catch (apiError) {
        console.error('OpenAI API connection test error:', apiError);
        throw apiError;
      }
    }

    // Regular diagnostic query processing
    console.log("Processing diagnostic query:", query);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openAIApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { 
              role: 'system', 
              content: `You are an advanced electrical diagnostic AI assistant for UK professional electricians.
                       Format your responses clearly using this structure:
                       
                       📋 INITIAL ASSESSMENT
                       • Brief overview of the issue
                       • Potential root causes
                       
                       🔍 DETAILED ANALYSIS
                       • Technical breakdown of the fault
                       • UK regulations and standards relevant to this issue
                       
                       📊 RECOMMENDED TESTS
                       • Required measurements and readings
                       • Specific test procedures (following UK standards)
                       
                       🛠️ SOLUTION STEPS
                       1. Step-by-step troubleshooting guide
                       2. Required tools and equipment
                       3. Safety measures (BS7671 compliant)
                       
                       ⚠️ SAFETY NOTES
                       • Critical safety considerations
                       • PPE requirements
                       • UK-specific compliance notes
                       
                       Use proper UK terminology and reference relevant BS7671 regulations.
                       Keep responses professional and concise.`
            },
            { role: 'user', content: query }
          ],
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('OpenAI API error:', JSON.stringify(error, null, 2));
        throw new Error(`Failed to get response from OpenAI: ${error.error?.message || 'Unknown error'}`);
      }

      const data = await response.json();
      console.log('Received technical analysis from OpenAI');
      
      return new Response(JSON.stringify({ 
        response: data.choices[0].message.content 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } catch (apiError) {
      console.error('OpenAI API call failed:', apiError);
      throw apiError;
    }
  } catch (error) {
    console.error('Error in AI Diagnostic Assistant:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      response: "An error occurred while generating the diagnostic response. Please try again with a different query."
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
