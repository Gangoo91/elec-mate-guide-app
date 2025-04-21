
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const diagnosticResponses = {
  'circuit breaker': 'If a circuit breaker keeps tripping: 1) Identify which circuit is affected 2) Unplug devices on that circuit 3) Check for signs of overloading 4) Reset breaker 5) If it trips again immediately, call a licensed electrician',
  'outlet not working': 'For a non-working outlet: 1) Test if GFCI needs resetting 2) Check if breaker is tripped 3) Verify if other outlets nearby work 4) Test with a different device 5) If still not working, consult an electrician',
  'flickering lights': 'Flickering lights could indicate: 1) Loose bulb 2) Loose wiring connection 3) Circuit overload 4) Voltage fluctuations. Start by checking bulb connections and ensuring circuit isn\'t overloaded',
  'voltage testing': 'When testing voltage: 1) Always use proper PPE 2) Ensure meter is rated appropriately 3) Verify meter operation first 4) Maintain safe working distance 5) Follow proper testing procedures',
  'default': 'For this type of electrical issue, please: 1) Ensure power is off before inspection 2) Document symptoms thoroughly 3) Check for obvious damage 4) Test with proper equipment if safe 5) When in doubt, consult a licensed electrician'
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { query } = await req.json();
    
    // Simple keyword matching for common issues
    const response = Object.entries(diagnosticResponses).find(([key]) => 
      query.toLowerCase().includes(key))?.[1] || diagnosticResponses.default;

    return new Response(JSON.stringify({ response }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in AI Diagnostic Assistant:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
