
import React, { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { BookOpen } from "lucide-react";

const RegulationsAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegulationQuery = async () => {
    if (!query.trim()) {
      toast.error("Please enter a query about electrical regulations");
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('regulations-assistant', {
        body: JSON.stringify({ query })
      });

      if (error) throw error;

      setResponse(data.response);
      toast.success("Regulation guidance retrieved");
    } catch (err) {
      console.error(err);
      toast.error("Failed to get regulation guidance");
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
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/50"
          />
          <Button 
            onClick={handleRegulationQuery} 
            disabled={isLoading}
            className="w-full bg-[#FFC900] text-black hover:bg-[#FFF200]"
          >
            {isLoading ? 'Getting Guidance...' : 'Get Regulation Help'}
          </Button>
          {response && (
            <div className="mt-4 p-3 bg-[#2C2F24] rounded text-[#FFC900]/80">
              <h4 className="font-semibold mb-2">Regulation Guidance:</h4>
              <p className="whitespace-pre-wrap">{response}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RegulationsAssistant;
