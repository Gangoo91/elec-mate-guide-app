
import React, { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { CircuitBoard, WifiOff, Wifi } from "lucide-react";
import { useErrorHandler } from "@/hooks/useErrorHandler";

const AIDiagnosticAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'unknown' | 'connected' | 'failed'>('unknown');
  const [isVerifying, setIsVerifying] = useState(false);
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
      
      if (data.response) {
        setResponse(data.response);
        toast.success("Diagnostic analysis complete");
      } else {
        throw new Error("No response received from server");
      }
    } catch (err) {
      console.error("Error:", err);
      handleError(err, "Unable to process diagnostic query. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const verifyApiConnection = async () => {
    setIsVerifying(true);
    setConnectionStatus('unknown');
    
    try {
      const { data, error } = await supabase.functions.invoke('ai-diagnostic-assistant', {
        body: JSON.stringify({ query: 'API connection test', isConnectionTest: true })
      });

      if (error) throw error;
      
      // If we got any response, consider the connection working
      if (data) {
        setConnectionStatus('connected');
        toast.success("API connection verified successfully");
      } else {
        throw new Error("No response received during connection test");
      }
    } catch (err) {
      console.error("API Connection Error:", err);
      setConnectionStatus('failed');
      handleError(err, "API connection verification failed. The OpenAI API key may be invalid or missing.");
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <CircuitBoard className="h-6 w-6 text-[#FFC900]" />
          <h2 className="text-xl font-semibold text-[#FFC900]">AI Diagnostic Assistant</h2>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={verifyApiConnection} 
          disabled={isVerifying}
          className="border-[#FFC900]/30 text-[#FFC900] hover:bg-[#FFC900]/10"
        >
          {connectionStatus === 'connected' ? (
            <Wifi className="h-4 w-4 mr-2 text-green-500" />
          ) : connectionStatus === 'failed' ? (
            <WifiOff className="h-4 w-4 mr-2 text-red-500" />
          ) : (
            <Wifi className="h-4 w-4 mr-2" />
          )}
          {isVerifying ? 'Verifying...' : 'Verify API Connection'}
        </Button>
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

        {connectionStatus === 'failed' && (
          <div className="mt-4 p-4 bg-[#2C2F24] border border-red-500/30 rounded-lg">
            <h4 className="font-semibold mb-2 text-red-400">API Connection Issue</h4>
            <p className="text-[#FFC900]/80">
              The connection to the OpenAI API could not be established. This might be due to:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Missing or invalid OpenAI API key in Supabase settings</li>
                <li>Exceeded API quota or usage limits</li>
                <li>Network connectivity issues</li>
              </ul>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIDiagnosticAssistant;
