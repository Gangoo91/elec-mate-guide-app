
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
    const { installationType, additionalContext } = await req.json();
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    const systemPrompt = `You are an expert electrical safety inspector who creates detailed safety checklists for electrical installations.
                          Create a comprehensive safety checklist for a ${installationType} electrical installation, 
                          focusing on UK electrical standards and regulations (especially BS 7671).
                          
                          The checklist should:
                          1. Be structured in clear sections (e.g., Pre-Installation, During Installation, Post-Installation)
                          2. Include specific items that must be checked with checkboxes
                          3. Include references to relevant regulations where appropriate
                          4. Incorporate any specific concerns or details provided: ${additionalContext || "None specified"}
                          
                          Format the checklist in a clean, readable way with clear section headers and numbered items.`;

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
          { role: 'user', content: `Generate a safety checklist for ${installationType} electrical installation.` }
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`OpenAI API error: ${JSON.stringify(error)}`);
    }

    const data = await response.json();
    const checklist = data.choices[0].message.content;

    return new Response(JSON.stringify({ checklist }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in safety checklist generator:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
