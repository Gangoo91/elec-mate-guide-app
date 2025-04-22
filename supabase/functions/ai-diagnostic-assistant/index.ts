
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
    
    // More detailed environment variable logging
    console.log("Environment Variables:", JSON.stringify(Deno.env.toObject(), null, 2));
    
    // Try multiple ways to retrieve the OpenAI API key
    const openAIApiKey = 
      Deno.env.get('OPENAI_API_KEY') || 
      Deno.env.get('OpenAI API') || 
      Deno.env.get('OPENAI_KEY');
    
    console.log("OpenAI API Key Retrieval Methods:", {
      directKey: !!Deno.env.get('OPENAI_API_KEY'),
      alternateKey: !!Deno.env.get('OpenAI API'),
      fallbackKey: !!Deno.env.get('OPENAI_KEY')
    });

    if (!openAIApiKey) {
      console.error("No OpenAI API key found through any retrieval method");
      return new Response(JSON.stringify({ 
        error: "API key not configured", 
        response: "The OpenAI API key is not properly configured. Please check the Supabase secrets and ensure the key is set correctly."
      }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log("Processing technical query:", query);

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

