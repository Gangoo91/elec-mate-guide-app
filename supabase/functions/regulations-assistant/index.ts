
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
    const { query, mode = 'find' } = await req.json();
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    console.log('Received query:', query, 'Mode:', mode);

    let systemPrompt;
    if (mode === 'find') {
      systemPrompt = `You are an expert on UK electrical regulations, particularly BS 7671 (IET Wiring Regulations).
                     Search your knowledge base and provide specific regulations related to the user's query.
                     Format your response with regulation numbers and direct quotes where applicable.
                     Provide explanations in clear, concise language appropriate for apprentice electricians.
                     Focus on UK electrical standards only.
                     If you're unsure about any specific regulation, clearly state that.`;
    } else {
      systemPrompt = `You are an expert on UK electrical compliance and regulations.
                     Evaluate the described installation or scenario against current UK electrical regulations (BS 7671).
                     Identify any potential compliance issues or violations.
                     Provide specific references to relevant regulations.
                     Suggest corrective actions if needed.
                     Format your response in clear sections: Evaluation, Compliance Issues (if any), and Recommendations.`;
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
    console.error('Error in Regulations Assistant:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
