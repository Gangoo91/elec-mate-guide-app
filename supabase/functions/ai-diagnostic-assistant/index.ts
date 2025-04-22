
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { query } = await req.json();
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

    if (!openAIApiKey) {
      throw new Error("OpenAI API key not configured");
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
      console.error('OpenAI API error:', error);
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
      error: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
