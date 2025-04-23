
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
    const { query, mode = 'find' } = await req.json();
    
    // Try to get API key from multiple possible environment variable names
    const getOpenAIKey = () => {
      const possibleKeys = ['OPENAI_API_KEY', 'openai_api_key', 'OpenAI API'];
      
      for (const keyName of possibleKeys) {
        const key = Deno.env.get(keyName);
        if (key) {
          console.log(`Found API key using name: ${keyName}`);
          return key;
        }
      }
      
      return null;
    };
    
    const openAIApiKey = getOpenAIKey();
    
    if (!openAIApiKey) {
      console.error('OpenAI API key not found under any expected names');
      
      // Log all available environment variables (keys only, not values)
      const envVars = Deno.env.toObject();
      console.log('Available environment variables:', Object.keys(envVars));
      
      return new Response(JSON.stringify({ 
        response: "OpenAI API key is not configured. Please contact support." 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      });
    }

    return await processOpenAIRequest(openAIApiKey, query, mode, corsHeaders);
  } catch (error) {
    console.error('Error in Regulations Assistant:', error);
    
    return new Response(JSON.stringify({ 
      response: "I apologize, but I encountered an issue processing your request. Please try again later.",
      error: error.message 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500
    });
  }
});

async function processOpenAIRequest(apiKey, query, mode, corsHeaders) {
  console.log('Processing query:', query, 'Mode:', mode);

  let systemPrompt;
  if (mode === 'find') {
    systemPrompt = `You are an expert on UK electrical regulations, particularly BS 7671 (IET Wiring Regulations).
      Provide comprehensive and detailed information about electrical regulations.
      Format your response with:
      - Specific regulation numbers
      - Direct quotes from BS 7671
      - Practical explanations
      - Context for apprentice electricians`;
  } else {
    systemPrompt = `You are a professional electrical inspector specializing in BS 7671 compliance.
      Evaluate electrical installations against current UK regulations.
      Provide:
      - Detailed compliance assessment
      - Specific regulation references
      - Potential improvements or corrections
      - Safety recommendations`;
  }

  try {
    console.log('Making request to OpenAI API');
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: query }
        ],
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('OpenAI API error response:', error);
      throw new Error(`OpenAI API returned an error: ${JSON.stringify(error)}`);
    }

    const data = await response.json();
    console.log('Successfully received response from OpenAI');
    const assistantResponse = data.choices[0].message.content;

    return new Response(JSON.stringify({ response: assistantResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('OpenAI API request failed:', error);
    throw error;
  }
}
