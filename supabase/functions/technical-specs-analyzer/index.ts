
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
    const { specsText } = await req.json();
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

    if (!openAIApiKey) {
      // For development/testing purposes, provide a mock response if API key is not available
      console.log('WARNING: OpenAI API key not configured, using mock response');
      const mockAnalysis = `# Technical Specifications Analysis

## Key Specifications Summary
This appears to be specifications for an electrical device with the following characteristics:
- Voltage rating: 220-240V AC
- Current rating: 13A
- IP rating: IP44 (suitable for outdoor use with protection against water splashes)
- Insulation class: Class I (requires earth connection)

## Standards Compliance
These specifications appear to comply with UK electrical standards, including:
- BS 1363 for UK plugs and sockets
- BS EN 60529 for IP ratings
- Relevant parts of the 18th Edition IET Wiring Regulations

## Potential Issues
- The working temperature range should be verified for the intended application
- Ensure the IP rating is sufficient for the installation environment
- Verify compatibility with existing systems before installation

## Recommendations
This equipment would be suitable for standard UK domestic and light commercial applications where a moderate level of water protection is required.

NOTE: This is a mock analysis. Please configure the OpenAI API key for actual technical analysis.`;

      return new Response(JSON.stringify({ analysis: mockAnalysis }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const systemPrompt = `You are an expert electrical engineer who can analyze technical specifications and datasheets.
                          Review the provided technical specifications and provide an analysis that includes:
                          
                          1. A summary of the key specifications in an easy-to-understand format
                          2. Whether the specs comply with UK electrical standards (if applicable)
                          3. Any potential issues, concerns, or special considerations
                          4. Recommendations for appropriate use cases
                          
                          Structure your analysis in clear sections with appropriate headers.`;

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
          { role: 'user', content: specsText }
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`OpenAI API error: ${JSON.stringify(error)}`);
    }

    const data = await response.json();
    const analysis = data.choices[0].message.content;

    return new Response(JSON.stringify({ analysis }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in technical specs analyzer:', error);
    
    // Provide a fallback response for errors
    const errorAnalysis = `# Error in Technical Specifications Analysis

Sorry, we encountered a technical issue while analyzing your specifications.

This could be due to:
1. API configuration issues
2. Network connectivity problems
3. Server limitations

In the meantime, please ensure you:
- Review the manufacturer's documentation carefully
- Verify compliance with relevant UK electrical standards
- Consult with a qualified professional if uncertain about specifications

Please try again later or contact support if the issue persists.`;
    
    return new Response(JSON.stringify({ 
      analysis: errorAnalysis,
      error: error.message 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
