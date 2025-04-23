
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
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

    if (!openAIApiKey) {
      console.error('OpenAI API key not configured');
      return new Response(JSON.stringify({ 
        response: "OpenAI API key is not configured. Please contact support." 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      });
    }

    console.log('Received query:', query, 'Mode:', mode);

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

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
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
      console.error('OpenAI API error:', error);
      throw new Error('Failed to get response from OpenAI');
    }

    const data = await response.json();
    const assistantResponse = data.choices[0].message.content;

    return new Response(JSON.stringify({ response: assistantResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
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
