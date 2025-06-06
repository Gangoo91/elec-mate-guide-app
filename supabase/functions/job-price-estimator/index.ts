
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
            content: `You are an experienced electrical contractor specializing in job estimation. 
Format your estimates in clear sections using markdown:

# Summary
Brief job scope and total cost range

# Materials
* Item 1 - £XX
* Item 2 - £XX

# Labour
* Hours required: XX
* Rate per hour: £XX
* Total labour cost: £XX

# Total Cost
Final estimate with clear breakdown

# Important Notes
- Note 1
- Note 2

Use bullet points for lists and numbers for costs. Keep formatting consistent and clean.`
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

