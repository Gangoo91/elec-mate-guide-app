
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
    const { installationType, additionalContext } = await req.json();
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

    if (!openAIApiKey) {
      // For development/testing purposes, provide a mock response if API key is not available
      console.log('WARNING: OpenAI API key not configured, using mock response');
      const mockChecklist = `# Safety Checklist for ${installationType.toUpperCase()} Installation
      
## Pre-Installation Checks
- [ ] 1. Verify power is isolated and locked off
- [ ] 2. Test for absence of voltage
- [ ] 3. Check all tools and equipment for damage
- [ ] 4. Review installation plans and specifications
- [ ] 5. Ensure appropriate PPE is available and worn

## During Installation
- [ ] 6. Follow manufacturer's installation instructions
- [ ] 7. Use correct cable sizes according to BS 7671
- [ ] 8. Maintain proper segregation of circuits
- [ ] 9. Label all circuits clearly
- [ ] 10. Ensure proper mechanical protection for cables

## Post-Installation Testing
- [ ] 11. Complete continuity testing of protective conductors
- [ ] 12. Perform insulation resistance tests
- [ ] 13. Verify polarity throughout installation
- [ ] 14. Check operation of RCDs where installed
- [ ] 15. Complete required certification documentation

${additionalContext ? `\n## Additional Considerations for ${additionalContext}\n- [ ] Special provisions have been made for the specified requirements` : ''}

NOTE: This is a mock checklist. Please configure the OpenAI API key for actual safety checklists.`;

      return new Response(JSON.stringify({ checklist: mockChecklist }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const systemPrompt = `You are an expert electrical safety inspector who creates detailed safety checklists for electrical installations.
                          Create a comprehensive safety checklist for a ${installationType} electrical installation, 
                          focusing on UK electrical standards and regulations (especially BS 7671).
                          
                          The checklist should:
                          1. Be structured in clear sections (e.g., Pre-Installation, During Installation, Post-Installation)
                          2. Include specific items that must be checked with checkboxes
                          3. Include references to relevant regulations where appropriate
                          4. Incorporate any specific concerns or details provided: ${additionalContext || "None specified"}
                          
                          Format the checklist in a clean, readable way with clear section headers and numbered items.`;

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
          { role: 'user', content: `Generate a safety checklist for ${installationType} electrical installation.` }
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`OpenAI API error: ${JSON.stringify(error)}`);
    }

    const data = await response.json();
    const checklist = data.choices[0].message.content;

    return new Response(JSON.stringify({ checklist }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in safety checklist generator:', error);
    
    // Provide a fallback response for errors
    const errorChecklist = `# Error Generating Safety Checklist
    
Sorry, we encountered a technical issue while generating your safety checklist.

This could be due to:
1. API configuration issues
2. Network connectivity problems
3. Server limitations

In the meantime, please ensure you follow these basic safety procedures:
- [ ] Isolate power before working on any electrical installation
- [ ] Test for absence of voltage before proceeding
- [ ] Use appropriate PPE at all times
- [ ] Follow all relevant BS 7671 regulations
- [ ] Complete proper testing and certification

Please try again later or contact support if the issue persists.`;
    
    return new Response(JSON.stringify({ 
      checklist: errorChecklist,
      error: error.message 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
