
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
    const { prompt, diagramType } = await req.json();
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    const systemPrompt = `You are an expert electrical engineer specializing in creating wiring diagrams and explaining them.
                          Based on the user's request, provide:
                          1. A clear, detailed textual explanation of the wiring diagram (focusing on ${diagramType} systems)
                          2. Instructions on how to implement this wiring in real life
                          3. Any safety considerations or requirements specific to UK electrical standards
                          
                          Keep your response under 250 words, structured in clear sections.`;

    // First, get the textual explanation
    const responseText = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: prompt }
        ],
      }),
    });

    if (!responseText.ok) {
      const error = await responseText.json();
      throw new Error(`OpenAI API error: ${JSON.stringify(error)}`);
    }

    const dataText = await responseText.json();
    const explanation = dataText.choices[0].message.content;

    // For a real implementation, you would use DALL-E or another image generation service
    // to create a diagram based on the prompt. For now, we'll return a placeholder.
    // This is where you would make another API call to generate an image

    // Mock image URL for demonstration purposes
    const imageUrl = "https://placeholder.co/600x400?text=Wiring+Diagram+(Placeholder)";

    return new Response(JSON.stringify({ 
      response: explanation,
      imageUrl: imageUrl 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in wiring diagram generator:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
