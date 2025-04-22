
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
    const { query, useApiKey = true } = await req.json();
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

    console.log(`Processing query: "${query}", useApiKey: ${useApiKey}`);
    
    // If API key is not configured or the user chose not to use it
    if (!openAIApiKey || !useApiKey) {
      console.log('Using mock response (no API key or user chose not to use it)');
      
      const mockResponse = generateMockResponse(query);
      
      return new Response(JSON.stringify({ response: mockResponse }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Using OpenAI API for response');

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

function generateMockResponse(query: string): string {
  // List of common electrical problems and their diagnostic responses
  const commonProblems = [
    {
      keywords: ["circuit breaker", "trips", "tripping"],
      response: `For your circuit breaker tripping issue:

1. First, disconnect all appliances from the affected circuit
2. Check for signs of overload (too many devices on one circuit)
3. Look for damaged wiring or short circuits that might be causing the trips
4. Reset the breaker and gradually reconnect appliances to identify which one might be causing the issue
5. If it continues to trip with minimal load, consult a licensed electrician as you may have a serious wiring fault

SAFETY NOTE: Circuit breakers trip as a safety mechanism - persistent issues should always be addressed by a professional.`
    },
    {
      keywords: ["lights", "flickering", "dim", "flash"],
      response: `Regarding your flickering lights issue:

1. Check if the flickering affects all lights or just one fixture
2. For isolated flickering, inspect the bulb for proper seating and try replacing it
3. If multiple lights flicker, check connections in your electrical panel
4. Look for loose neutral connections which commonly cause flickering
5. Voltage fluctuations from high-draw appliances may also cause this symptom

SAFETY NOTE: If flickering persists after checking these items, consult a licensed electrician as it could indicate a serious wiring issue that poses a fire hazard.`
    },
    {
      keywords: ["outlet", "socket", "not working", "dead"],
      response: `For your non-functioning outlet:

1. First check if the outlet is on a circuit with a tripped breaker or blown fuse
2. Test if the outlet is on a GFCI circuit and reset the GFCI if needed
3. Turn off power to the outlet and inspect for loose connections
4. Check if the outlet is controlled by a wall switch that might be turned off
5. Test the outlet with a multimeter to verify if voltage is present

SAFETY NOTE: Always turn off power at the breaker before inspecting electrical outlets. If you're uncomfortable working with electrical components, consult a licensed electrician.`
    },
    {
      keywords: ["switch", "not working", "unresponsive"],
      response: `For your unresponsive light switch:

1. Check if the circuit breaker for that switch is tripped
2. Verify the light bulb hasn't burned out (try a known working bulb)
3. Turn off power and inspect the switch for loose wire connections
4. Look for signs of damage or burning on the switch
5. Test for continuity with a multimeter if you have one available

SAFETY NOTE: Always turn off power at the breaker before removing switch plates or inspecting electrical components. If you're not comfortable with electrical work, please consult a licensed electrician.`
    },
    {
      keywords: ["three-way", "3-way", "switch", "multiple switches"],
      response: `For your 3-way switch issue:

1. Confirm both switches are properly wired with traveler wires correctly connected
2. Check for loose connections at both switch locations
3. Verify that the common terminal is connected to the power source at one switch and the light fixture at the other
4. Look for signs of damaged wires or switches
5. Test both switches with a multimeter in continuity mode

SAFETY NOTE: 3-way switch wiring can be complex. If you're not familiar with electrical work, please consult a licensed electrician to avoid creating safety hazards.`
    },
    {
      keywords: ["hot", "overheating", "warm", "heat"],
      response: `For your overheating electrical component:

1. Immediately turn off power to the overheating device/circuit as this is a serious fire hazard
2. Check for signs of discoloration or melting on outlets, switches or panels
3. Ensure the circuit isn't overloaded with too many high-amperage devices
4. Look for loose connections which can generate heat
5. Verify that wire gauge is appropriate for the amperage of the circuit

SAFETY NOTE: Overheating electrical components require immediate attention from a licensed electrician as they present significant fire risks. Do not continue to use the affected circuit until it's been professionally inspected.`
    }
  ];

  // Default response if no specific match is found
  let response = `For your query about "${query}":

1. Start by checking all electrical connections to ensure they're secure
2. Inspect the circuit at the panel to verify the breaker hasn't tripped
3. Test the equipment with a multimeter to check for proper voltage and continuity
4. Look for any visible damage to wiring or components
5. Document all symptoms thoroughly before calling a professional

SAFETY NOTE: When in doubt, always consult with a licensed electrician rather than attempting complex electrical repairs yourself.`;

  // Check for keyword matches
  for (const problem of commonProblems) {
    if (problem.keywords.some(keyword => query.toLowerCase().includes(keyword))) {
      response = problem.response;
      break;
    }
  }

  return response;
}
