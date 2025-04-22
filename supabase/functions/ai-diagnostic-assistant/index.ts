
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { query, isConnectionTest } = await req.json();
    
    // Log environment info for debugging
    console.log("Checking for OpenAI API key...");
    
    // Enhanced key retrieval with detailed logging
    const keyVariants = [
      'OPENAI_API_KEY',
      'OpenAI API',
      'OPENAI_KEY',
      'OPENAI_SECRET',
      'OPEN_AI_KEY'
    ];

    let openAIApiKey = null;
    for (const variant of keyVariants) {
      const key = Deno.env.get(variant);
      console.log(`Checking variant ${variant}:`, key ? 'Key found' : 'No key');
      if (key) {
        openAIApiKey = key;
        break;
      }
    }

    if (!openAIApiKey) {
      console.error("CRITICAL: No OpenAI API key found through any method");
      return new Response(JSON.stringify({ 
        response: "Cannot find OpenAI API key. Please verify the secret in Supabase project settings."
      }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // If this is just a connection test, we'll do a lightweight API call
    if (isConnectionTest) {
      console.log("Performing API connection test...");
      
      try {
        // Make a minimal API call to verify connectivity
        const response = await fetch('https://api.openai.com/v1/models', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${openAIApiKey}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('OpenAI API connection test failed:', JSON.stringify(errorData, null, 2));
          
          if (errorData.error?.type === "insufficient_quota") {
            return new Response(JSON.stringify({ 
              error: "API quota exceeded",
              details: "Your OpenAI API account has insufficient quota."
            }), {
              headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            });
          }
          
          throw new Error(`Failed to connect to OpenAI API: ${errorData.error?.message || 'Unknown error'}`);
        }

        // Connection successful
        return new Response(JSON.stringify({ 
          status: "connected",
          message: "Successfully connected to OpenAI API"
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      } catch (apiError) {
        console.error('OpenAI API connection test error:', apiError);
        throw apiError;
      }
    }

    // Regular diagnostic query processing
    console.log("Processing diagnostic query:", query);

    try {
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
              content: `You are an advanced electrical diagnostic AI assistant for professional electricians and skilled apprentices.
                       Provide detailed technical analysis considering:
                       - Circuit analysis and load calculations
                       - Relevant electrical codes and standards
                       - Specific component specifications
                       - Testing procedures and required measurements
                       - Safety considerations and potential hazards
                       
                       Use professional electrical terminology and assume the user has technical knowledge.
                       Format responses with clear sections for:
                       1. Initial Analysis
                       2. Technical Recommendations
                       3. Required Tests/Measurements
                       4. Safety Considerations
                       
                       Keep responses focused and under 300 words.`
            },
            { role: 'user', content: query }
          ],
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('OpenAI API error:', JSON.stringify(error, null, 2));
        
        // Check for quota exceeded error
        if (error.error?.code === "insufficient_quota") {
          return new Response(JSON.stringify({ 
            response: `# Electrical Diagnostic Analysis

### Initial Analysis
This appears to be an issue related to ${query}. Such electrical problems typically stem from circuit overloads, faulty components, or improper wiring.

### Technical Recommendations
1. Perform a full circuit inspection
2. Check for any signs of overheating or damage
3. Verify all connections are properly secured
4. Consider replacing components that show signs of wear

### Required Tests/Measurements
- Continuity testing across the circuit
- Voltage measurements at key points
- Resistance readings of suspected components

### Safety Considerations
Always disconnect power before conducting any tests or repairs.

*Note: This is an offline response. Our AI service is currently experiencing high demand. For critical issues, please consult with a qualified electrician.*`
          }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }
        
        throw new Error(`Failed to get response from OpenAI: ${JSON.stringify(error)}`);
      }

      const data = await response.json();
      console.log('Received technical analysis from OpenAI');
      
      return new Response(JSON.stringify({ 
        response: data.choices[0].message.content 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } catch (apiError) {
      console.error('OpenAI API call failed:', apiError);
      
      // Provide a useful fallback response
      return new Response(JSON.stringify({ 
        response: `# Electrical Diagnostic Analysis

### Initial Analysis
Based on your query about "${query}", this could involve several possible causes including circuit overloads, faulty components, or wiring issues.

### Technical Recommendations
1. Inspect the affected circuit thoroughly
2. Test all components with a multimeter
3. Look for signs of overheating or physical damage
4. Verify proper installation according to regulations

### Required Tests/Measurements
- Voltage and current measurements
- Continuity testing
- Insulation resistance testing where appropriate

### Safety Considerations
Always ensure power is disconnected before performing any diagnostic work or repairs.

*Note: This is a fallback response while our AI service is temporarily unavailable. For critical issues, please consult with a qualified electrician.*`
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error('Error in AI Diagnostic Assistant:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      response: "An error occurred while generating the diagnostic response. Please try again with a different query."
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
