
import React, { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { CircuitBoard, AlertCircle } from "lucide-react";
import { useErrorHandler } from "@/hooks/useErrorHandler";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const AIDiagnosticAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [useApiKey, setUseApiKey] = useState(true);
  const { handleError } = useErrorHandler();

  const handleDiagnosticQuery = async () => {
    if (!query.trim()) {
      toast.error("Please enter a query");
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-diagnostic-assistant', {
        body: JSON.stringify({ 
          query,
          useApiKey
        })
      });

      if (error) {
        console.error("Error calling function:", error);
        throw error;
      }

      console.log("Response from function:", data);
      setResponse(data.response || "No response from the AI assistant. Please try again.");
      
      // Only show success toast if we got an actual response
      if (data.response) {
        toast.success("Diagnostic assistance retrieved");
      }
    } catch (err) {
      console.error("Caught error:", err);
      handleError(err, "Failed to get diagnostic assistance. Please try again.");
      
      // Set a user-friendly response even when there's an error
      setResponse("I'm sorry, but I couldn't process your request at the moment. This might be due to API configuration or network issues. Please try again later.");
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
          Describe your electrical issue or technical challenge, and our AI will provide diagnostic guidance and potential solutions.
        </p>

        <Textarea 
          placeholder="Describe your technical challenge or electrical issue..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/50 min-h-[120px]"
        />
        
        <div className="flex items-center space-x-2 mb-2">
          <Switch 
            id="use-api" 
            checked={useApiKey} 
            onCheckedChange={setUseApiKey} 
            className="data-[state=checked]:bg-[#FFC900]" 
          />
          <Label htmlFor="use-api" className="text-[#FFC900]/70">
            Use OpenAI API (turn off if no API key configured)
          </Label>
        </div>

        <Button 
          onClick={handleDiagnosticQuery} 
          disabled={isLoading}
          className="w-full bg-[#FFC900] text-black hover:bg-[#FFF200]"
        >
          <CircuitBoard className="h-4 w-4 mr-2" />
          {isLoading ? 'Getting Assistance...' : 'Get Diagnostic Help'}
        </Button>
        
        {response && (
          <div className="mt-4 p-4 bg-[#2C2F24] rounded-lg">
            <h4 className="font-semibold mb-2 text-[#FFC900]">Diagnostic Response:</h4>
            <p className="text-[#FFC900]/80 whitespace-pre-wrap">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIDiagnosticAssistant;
