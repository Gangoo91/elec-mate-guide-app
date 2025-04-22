
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
    const { query, mode = 'find' } = await req.json();
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

    if (!openAIApiKey) {
      // For development/testing purposes, provide a mock response if API key is not available
      console.log('WARNING: OpenAI API key not configured, using mock response');
      
      const mockResponse = mode === 'find' 
        ? `This is a mock regulations finder response for: "${query}"
        
BS 7671 Regulation 411.3.2 states that for all circuits, a protective device must disconnect the circuit within the required time.

Regulation 522.6.201 requires that all electrical installations near water must have additional protection with an RCD.

For more specific guidance, please consult a current copy of BS 7671.

NOTE: This is a mock response. Please configure the OpenAI API key for actual regulatory information.`
        : `This is a mock compliance check response for: "${query}"

Evaluation:
Based on standard UK regulations, the described installation would need to comply with several key areas.

Compliance Issues:
- Consumer units must be metal construction in domestic premises (Amendment 3 BS 7671:2008)
- RCD protection required for all socket outlets (Reg 411.3.3)

Recommendations:
1. Verify the installation meets current 18th Edition requirements
2. Ensure proper documentation is maintained

NOTE: This is a mock response. Please configure the OpenAI API key for actual compliance checks.`;

      return new Response(JSON.stringify({ response: mockResponse }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Received query:', query, 'Mode:', mode);

    let systemPrompt;
    if (mode === 'find') {
      systemPrompt = `You are an expert on UK electrical regulations, particularly BS 7671 (IET Wiring Regulations).
                     Search your knowledge base and provide specific regulations related to the user's query.
                     Format your response with regulation numbers and direct quotes where applicable.
                     Provide explanations in clear, concise language appropriate for apprentice electricians.
                     Focus on UK electrical standards only.
                     If you're unsure about any specific regulation, clearly state that.`;
    } else {
      systemPrompt = `You are an expert on UK electrical compliance and regulations.
                     Evaluate the described installation or scenario against current UK electrical regulations (BS 7671).
                     Identify any potential compliance issues or violations.
                     Provide specific references to relevant regulations.
                     Suggest corrective actions if needed.
                     Format your response in clear sections: Evaluation, Compliance Issues (if any), and Recommendations.`;
    }

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
    console.error('Error in Regulations Assistant:', error);
    
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
