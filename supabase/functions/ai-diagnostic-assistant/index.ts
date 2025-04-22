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
    const { query } = await req.json();
    
    // Comprehensive environment variable logging
    console.log("All Environment Variables:", JSON.stringify(
      Object.fromEntries(
        Object.entries(Deno.env.toObject()).filter(([key]) => 
          key.includes('OPENAI') || key.includes('API')
        )
      ), 
      null, 2
    ));
    
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
        error: "API key configuration failed", 
        response: "Cannot find OpenAI API key. Please verify the secret in Supabase project settings.",
        keyVariantsChecked: keyVariants
      }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Validate key format (basic check)
    if (!openAIApiKey.startsWith('sk-')) {
      console.error("VALIDATION: API key does not start with expected 'sk-' prefix");
      return new Response(JSON.stringify({ 
        error: "Invalid API key format", 
        response: "The OpenAI API key appears to be incorrectly formatted. Please regenerate your key.",
      }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log("Processing diagnostic query:", query);

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
            content: `You are an advanced electrical diagnostic AI assistant for professional electricians and skilled apprentices.
                     Provide detailed technical analysis considering:
                     - Circuit analysis and load calculations
                     - Relevant electrical codes and standards
                     - Specific component specifications
                     - Testing procedures and required measurements
                     - Safety considerations and potential hazards
                     
                     Use professional electrical terminology and assume the user has technical knowledge.
                     Format responses with clear sections for:
                     1. Initial Analysis
                     2. Technical Recommendations
                     3. Required Tests/Measurements
                     4. Safety Considerations
                     
                     Keep responses focused and under 300 words.`
          },
          { role: 'user', content: query }
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('OpenAI API error:', JSON.stringify(error, null, 2));
      throw new Error(`Failed to get response from OpenAI: ${JSON.stringify(error)}`);
    }

    const data = await response.json();
    console.log('Received technical analysis from OpenAI');
    
    return new Response(JSON.stringify({ 
      response: data.choices[0].message.content 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
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
