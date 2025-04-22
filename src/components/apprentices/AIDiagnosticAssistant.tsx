
import React, { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { CircuitBoard } from "lucide-react";
import { useErrorHandler } from "@/hooks/useErrorHandler";

const AIDiagnosticAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { handleError } = useErrorHandler();

  const handleDiagnosticQuery = async () => {
    if (!query.trim()) {
      toast.error("Please enter your diagnostic query");
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-diagnostic-assistant', {
        body: JSON.stringify({ query })
      });

      if (error) throw error;

      setResponse(data.response);
      toast.success("Diagnostic analysis complete");
    } catch (err) {
      console.error("Error:", err);
      handleError(err, "Unable to process diagnostic query. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <CircuitBoard className="h-6 w-6 text-[#FFC900]" />
        <h2 className="text-xl font-semibold text-[#FFC900]">AI Diagnostic Assistant</h2>
      </div>
      
      <div className="space-y-4">
        <p className="text-[#FFC900]/70">
          Describe the technical issue or diagnostic challenge you're facing, and receive professional-level electrical analysis and solutions.
        </p>

        <Textarea 
          placeholder="Detail the technical specifications, symptoms, and any relevant measurements or observations..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/50 min-h-[120px]"
        />

        <Button 
          onClick={handleDiagnosticQuery} 
          disabled={isLoading}
          className="w-full bg-[#FFC900] text-black hover:bg-[#FFF200]"
        >
          <CircuitBoard className="h-4 w-4 mr-2" />
          {isLoading ? 'Analyzing...' : 'Get Technical Analysis'}
        </Button>
        
        {response && (
          <div className="mt-4 p-4 bg-[#2C2F24] rounded-lg">
            <h4 className="font-semibold mb-2 text-[#FFC900]">Technical Analysis:</h4>
            <p className="text-[#FFC900]/80 whitespace-pre-wrap">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIDiagnosticAssistant;
