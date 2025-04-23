
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

    const systemPrompt = `You are an expert professional guide generator specializing in ${jobType} work in the United Kingdom. 
    Create a clear, well-formatted guide following UK standards and regulations.
    
    Structure your response in this format:
    
    📋 OVERVIEW:
    - Brief description of the job
    - Skill level required
    - Estimated time
    
    🛠️ TOOLS & MATERIALS:
    - List all required tools (use UK terminology)
    - List all materials needed
    
    ⚠️ SAFETY REQUIREMENTS:
    - List essential safety equipment
    - Key UK safety regulations to follow
    
    📝 STEP-BY-STEP GUIDE:
    1. Number each step clearly
    2. Keep steps concise but detailed
    3. Highlight critical points
    
    💡 PRO TIPS:
    - Common mistakes to avoid
    - Time-saving techniques
    - UK-specific best practices
    
    Format the response with clear headings, bullet points, and numbers for easy reading.
    Keep the total response concise but comprehensive.`;

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
        temperature: 0.7,
        max_tokens: 500,
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
