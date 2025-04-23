
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
    const { prompt, jobType } = await req.json();
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

    if (!openAIApiKey) {
      throw new Error("OpenAI API key not configured");
    }

    const systemPrompt = `You are an expert professional guide generator specializing in ${jobType} work. 
    Create a detailed, step-by-step guide for the user's specific task. 
    Focus on:
    1. Clear, actionable instructions
    2. Safety considerations
    3. Required tools and materials
    4. Common mistakes to avoid
    5. Professional best practices
    Provide a comprehensive guide that a novice could follow, but with depth that a professional would appreciate.`;

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
          { role: 'user', content: prompt }
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("OpenAI API error:", error);
      throw new Error("Failed to generate job guide");
    }

    const data = await response.json();
    const explanation = data.choices[0].message.content;

    // For now, we'll use a placeholder image URL
    // In a real implementation, you would use DALL-E or another image generation service
    const imageUrl = "https://placeholder.co/600x400?text=Job+Guide+(Demo)";

    return new Response(JSON.stringify({ 
      response: explanation,
      imageUrl: imageUrl 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in how-to-generator:', error);
    return new Response(JSON.stringify({ 
      error: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
