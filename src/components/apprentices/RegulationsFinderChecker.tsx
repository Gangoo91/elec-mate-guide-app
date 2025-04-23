
import React, { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { FileCheck, FileSearch, ChevronDown, ChevronUp } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useErrorHandler } from "@/hooks/useErrorHandler";
import { ScrollArea } from "@/components/ui/scroll-area";

const RegulationsFinderChecker: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<'find' | 'check'>('find');
  const [showResponse, setShowResponse] = useState(true);
  const { handleError } = useErrorHandler();

  const handleQueryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    if (!newQuery.trim()) {
      setResponse('');
    }
  };

  const handleQuery = async () => {
    if (!query.trim()) {
      toast.error("Please enter a query about electrical regulations");
      return;
    }

    setIsLoading(true);
    setResponse('');
    setShowResponse(true);
    
    try {
      console.log("Sending request to regulations-assistant with mode:", mode);
      const { data, error } = await supabase.functions.invoke('regulations-assistant', {
        body: JSON.stringify({ 
          query,
          mode
        })
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
      toast.success(mode === 'find' ? "Regulations found" : "Regulations checked");
      
    } catch (err) {
      console.error("Error in RegulationsFinderChecker:", err);
      handleError(err, "Failed to process your regulations request");
      setResponse("I apologize, but I couldn't process your regulations query at the moment. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20">
      <CardHeader className="flex flex-col items-center">
        <div className="flex items-center gap-2 mb-4">
          <FileCheck className="h-6 w-6 text-[#FFC900]" />
          <CardTitle className="text-[#FFC900]">BS 7671 Regulations Assistant</CardTitle>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#FFC900]/80">Find</span>
            <Switch 
              checked={mode === 'check'}
              onCheckedChange={(checked) => setMode(checked ? 'check' : 'find')}
              className="data-[state=checked]:bg-[#FFC900]"
            />
            <span className="text-sm text-[#FFC900]/80">Check</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Textarea 
            placeholder={
              mode === 'find' 
                ? "Search for specific BS 7671 regulations (e.g., 'What are the requirements for RCD protection in domestic installations?')" 
                : "Describe your installation to check compliance with BS 7671 (e.g., 'I have a consumer unit installation with...')"
            }
            value={query}
            onChange={handleQueryChange}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/50 min-h-[120px]"
          />
          <Button 
            onClick={handleQuery} 
            disabled={isLoading}
            className="w-full bg-[#FFC900] text-black hover:bg-[#FFF200]"
          >
            {mode === 'find' ? <FileSearch className="h-4 w-4 mr-2" /> : <FileCheck className="h-4 w-4 mr-2" />}
            {isLoading 
              ? (mode === 'find' ? 'Searching...' : 'Checking...') 
              : (mode === 'find' ? 'Find Regulations' : 'Check Compliance')
            }
          </Button>

          {response && (
            <div className="mt-4">
              <Button
                variant="outline"
                onClick={() => setShowResponse(!showResponse)}
                className="w-full mb-2 bg-[#2C2F24] border-[#FFC900]/10 text-[#FFC900] hover:bg-[#FFC900]/10"
              >
                {showResponse ? (
                  <>
                    Hide Response <ChevronUp className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Show Response <ChevronDown className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
              
              {showResponse && (
                <ScrollArea className="h-[300px] rounded-lg border border-[#FFC900]/10">
                  <div className="p-4 bg-[#2C2F24]">
                    <h4 className="font-semibold mb-3 text-[#FFC900] text-lg">
                      {mode === 'find' ? 'Regulation Details' : 'Compliance Assessment'}
                    </h4>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-[#FFC900]/90 leading-relaxed whitespace-pre-line text-base">
                        {response}
                      </p>
                    </div>
                  </div>
                </ScrollArea>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RegulationsFinderChecker;
