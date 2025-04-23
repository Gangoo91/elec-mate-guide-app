
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import "https://deno.land/x/xhr@0.1.0/mod.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { installationType, additionalContext } = await req.json()
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY')

    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured')
    }

    const systemPrompt = `You are an expert UK electrical inspector with extensive knowledge of BS 7671 and all related standards. 
    Create a detailed, well-structured inspection and testing checklist for electrical installations.
    
    Format your response in a clear, professional manner with:
    1. Main sections with clear headings using markdown (##)
    2. Numbered steps within each section
    3. Clear pass/fail criteria where relevant
    4. References to specific BS 7671 regulations where applicable
    
    Focus on UK standards and regulations, ensuring all guidance is fully compliant with current requirements.`

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
          { role: 'user', content: `Generate a comprehensive inspection and testing checklist for a ${installationType} installation. ${additionalContext}` }
        ],
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to generate checklist')
    }

    const data = await response.json()
    const checklist = data.choices[0].message.content

    return new Response(JSON.stringify({ checklist }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
