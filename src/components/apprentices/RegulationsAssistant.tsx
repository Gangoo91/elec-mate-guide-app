
import React, { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { BookOpen } from "lucide-react";
import { useErrorHandler } from "@/hooks/useErrorHandler";

const RegulationsAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { handleError } = useErrorHandler();

  const handleRegulationQuery = async () => {
    if (!query.trim()) {
      toast.error("Please enter a query about electrical regulations");
      return;
    }

    setIsLoading(true);
    setResponse(''); // Clear previous response
    
    try {
      console.log("Sending request to regulations-assistant");
      const { data, error } = await supabase.functions.invoke('regulations-assistant', {
        body: JSON.stringify({ query })
      });

      if (error) {
        console.error("Supabase function error:", error);
        throw error;
      }

      if (!data || !data.response) {
        console.error("Invalid response format:", data);
        throw new Error("Invalid response received from regulations assistant");
      }

      setResponse(data.response);
      toast.success("Regulation guidance retrieved");
    } catch (err) {
      console.error("Error in RegulationsAssistant:", err);
      handleError(err, "Failed to get regulation guidance");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20">
      <CardHeader className="flex flex-row items-center gap-2">
        <BookOpen className="h-6 w-6 text-[#FFC900]" />
        <CardTitle className="text-[#FFC900]">UK Regulations Compliance Assistant</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Textarea 
            placeholder="Ask about UK electrical regulations, BS 7671, or compliance requirements..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/50 min-h-[100px]"
          />
          <Button 
            onClick={handleRegulationQuery} 
            disabled={isLoading}
            className="w-full bg-[#FFC900] text-black hover:bg-[#FFF200]"
          >
            {isLoading ? 'Getting Guidance...' : 'Get Regulation Help'}
          </Button>
          {response && (
            <div className="mt-4 p-4 bg-[#2C2F24] rounded-lg border border-[#FFC900]/10">
              <h4 className="font-semibold mb-3 text-[#FFC900] text-lg">Regulation Guidance</h4>
              <div className="prose prose-invert max-w-none">
                <p className="text-[#FFC900]/90 leading-relaxed whitespace-pre-line text-base">
                  {response}
                </p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
