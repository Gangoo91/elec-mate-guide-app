
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
      // For development/testing purposes, provide a mock response if API key is not available
      console.log('WARNING: OpenAI API key not configured, using mock response');
      const mockResponse = `This is a mock response since the OpenAI API key is not configured.
      
For your query about "${query}":

1. Start by checking the power supply to ensure it's properly connected.
2. Inspect the circuit components for any visible damage or loose connections.
3. Test the device with a multimeter to verify voltage readings.
4. Consider consulting with a licensed electrician for further diagnostics.

PLEASE NOTE: This is a mock response. For real assistance, please configure the OpenAI API key.`;

      return new Response(JSON.stringify({ response: mockResponse }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Received query:', query);

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
            content: `You are an AI electrical diagnostic assistant specializing in helping apprentice electricians. 
                     Provide clear, concise, and professional technical guidance.
                     Format your responses in a structured way with numbered steps when applicable.
                     Always prioritize safety and mention when a licensed electrician should be consulted.
                     Keep responses focused and under 200 words.` 
          },
          { role: 'user', content: query }
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('OpenAI API error:', error);
      throw new Error('Failed to get response from OpenAI');
    }

    const data = await response.json();
    console.log('Received response from OpenAI');
    const assistantResponse = data.choices[0].message.content;

    return new Response(JSON.stringify({ response: assistantResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in AI Diagnostic Assistant:', error);
    
    // Provide a fallback response for errors
    const errorResponse = `Sorry, I encountered an issue while processing your request. 
    
This could be due to:
1. API configuration issues
2. Network connectivity problems
3. Server limitations

Please try again later or contact support if the issue persists.`;
    
    return new Response(JSON.stringify({ 
      response: errorResponse,
      error: error.message 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
