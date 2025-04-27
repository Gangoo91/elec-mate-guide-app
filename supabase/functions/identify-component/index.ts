
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import "https://deno.land/x/xhr@0.1.0/mod.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const formData = await req.formData()
    const image = formData.get('image')
    
    if (!image || !(image instanceof File)) {
      throw new Error('No image provided')
    }

    // Convert image to base64
    const arrayBuffer = await image.arrayBuffer()
    const base64Image = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)))

    // Call OpenAI API for image analysis
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: 'You are an expert in identifying electrical components. Analyze the image and match it to one of these component IDs: rcbo, consumer-unit, socket-outlet, mcb, rcd, junction-box, metal-conduit, metal-clad-switch. Only respond with the exact component ID, nothing else.',
          },
          {
            role: 'user',
            content: [
              { type: 'text', text: 'What electrical component is shown in this image?' },
              { type: 'image_url', url: `data:image/jpeg;base64,${base64Image}` }
            ],
          },
        ],
      }),
    })

    const data = await response.json()
    const componentId = data.choices[0].message.content.trim().toLowerCase()

    return new Response(
      JSON.stringify({ componentId }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  }
})
