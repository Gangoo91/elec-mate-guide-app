
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
    const { jobDescription } = await req.json()
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY')

    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured')
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are an experienced electrical contractor specializing in job estimation. Provide detailed cost breakdowns for electrical work in GBP, including materials, labor hours, and total costs. Your estimates should be comprehensive and consider all aspects of the job.\n\nFormat your response with clear sections:\n\n1. SUMMARY: Brief overview of the job scope and total cost range.\n\n2. MATERIALS BREAKDOWN: Itemized list of all materials needed with individual costs.\n\n3. LABOUR ESTIMATE: Detail the required hours, skill levels, and associated costs.\n\n4. TOTAL COST: Clear final estimate with breakdown.\n\n5. NOTES: Important considerations that could affect pricing (age of property, access issues, regulations).\n\nUse clear formatting with section headers, bullet points for lists, and bold for important figures. Ensure your response is easy to read, thorough, and professionally formatted. Take time to consider all aspects of the job before responding."
          },
          {
            role: "user",
            content: jobDescription
          }
        ],
        temperature: 0.7,
        max_tokens: 1500
      })
    })

    const data = await response.json()
    return new Response(JSON.stringify({ estimate: data.choices[0].message.content }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
