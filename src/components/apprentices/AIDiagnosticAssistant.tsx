
import React, { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const AIDiagnosticAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleDiagnosticQuery = async () => {
    if (!query.trim()) {
      toast.error("Please enter a query");
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-diagnostic-assistant', {
        body: JSON.stringify({ query })
      });

      if (error) throw error;

      setResponse(data.response);
      toast.success("Diagnostic assistance retrieved");
    } catch (err) {
      console.error(err);
      toast.error("Failed to get diagnostic assistance");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20">
      <CardHeader>
        <CardTitle className="text-[#FFC900]">AI Diagnostic Assistant</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Textarea 
            placeholder="Describe your technical challenge or electrical issue..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/50"
          />
          <Button 
            onClick={handleDiagnosticQuery} 
            disabled={isLoading}
            className="w-full bg-[#FFC900] text-black hover:bg-[#FFF200]"
          >
            {isLoading ? 'Getting Assistance...' : 'Get Diagnostic Help'}
          </Button>
          {response && (
            <div className="mt-4 p-3 bg-[#2C2F24] rounded text-[#FFC900]/80">
              <h4 className="font-semibold mb-2">Diagnostic Response:</h4>
              <p>{response}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AIDiagnosticAssistant;
