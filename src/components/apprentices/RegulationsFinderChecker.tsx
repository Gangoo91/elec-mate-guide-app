
import React, { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { FileCheck, FileSearch } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useErrorHandler } from "@/hooks/useErrorHandler";

const RegulationsFinderChecker: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<'find' | 'check'>('find');
  const { handleError } = useErrorHandler();

  const handleQuery = async () => {
    if (!query.trim()) {
      toast.error("Please enter a query about electrical regulations");
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('regulations-assistant', {
        body: JSON.stringify({ 
          query,
          mode // Pass the mode to the backend
        })
      });

      if (error) throw error;

      setResponse(data.response);
      toast.success(mode === 'find' ? "Regulations found" : "Regulations checked");
    } catch (err) {
      console.error("Error in RegulationsFinderChecker:", err);
      handleError(err, "Failed to process your regulations request");
      
      // Set a user-friendly response even when there's an error
      setResponse("I'm sorry, but I couldn't process your regulations query at the moment. This might be due to API configuration or network issues. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <FileCheck className="h-6 w-6 text-[#FFC900]" />
        <h2 className="text-xl font-semibold text-[#FFC900]">Regulations Finder & Checker</h2>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {mode === 'find' ? 
            <FileSearch className="h-5 w-5 text-[#FFC900]" /> : 
            <FileCheck className="h-5 w-5 text-[#FFC900]" />
          }
          <span className="text-[#FFC900]/80">
            {mode === 'find' ? 'Find Regulations' : 'Check Compliance'}
          </span>
        </div>
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

      <div className="space-y-4">
        <Textarea 
          placeholder={
            mode === 'find' 
              ? "Search for specific UK electrical regulations..." 
              : "Describe your installation to check compliance..."
          }
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
          <div className="mt-4 p-4 bg-[#2C2F24] rounded-lg">
            <h4 className="font-semibold mb-2 text-[#FFC900]">Results:</h4>
            <p className="text-[#FFC900]/80 whitespace-pre-wrap">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegulationsFinderChecker;
