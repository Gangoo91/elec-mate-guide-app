
import React, { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { CircuitBoard } from "lucide-react";
import { useErrorHandler } from "@/hooks/useErrorHandler";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface FormattedSection {
  title: string;
  content: string;
}

const AIDiagnosticAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | FormattedSection[]>('');
  const [isLoading, setIsLoading] = useState(false);
  const { handleError } = useErrorHandler();

  const formatResponse = (rawResponse: string): FormattedSection[] => {
    const sections = [
      { title: "Problem Analysis", key: "problem", icon: "🔍" },
      { title: "Possible Causes", key: "causes", icon: "⚡" },
      { title: "Recommended Solutions", key: "solutions", icon: "🛠" },
      { title: "Safety Precautions", key: "safety", icon: "⚠️" }
    ];

    return sections.map(section => {
      const sectionContent = rawResponse.split(`[${section.key}]`)[1]?.split('[')[0]?.trim();
      return sectionContent ? {
        title: `${section.icon} ${section.title}`,
        content: sectionContent
      } : null;
    }).filter(Boolean) as FormattedSection[];
  };

  const handleDiagnosticQuery = async () => {
    if (!query.trim()) {
      toast.error("Please describe the electrical issue you're experiencing");
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-diagnostic-assistant', {
        body: JSON.stringify({ query })
      });

      if (error) throw error;
      
      if (data.response) {
        const formattedSections = formatResponse(data.response);
        setResponse(formattedSections.length > 0 ? formattedSections : data.response);
        toast.success("Diagnostic analysis complete", {
          description: "Detailed insights are now available"
        });
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

  const renderFormattedResponse = () => {
    if (!response) return null;
    
    if (typeof response === 'string') {
      return (
        <div className="mt-4 p-4 bg-[#2C2F24] rounded-lg">
          <h4 className="font-semibold mb-2 text-[#FFC900]">Technical Analysis:</h4>
          <p className="text-[#FFC900]/80 whitespace-pre-wrap">{response}</p>
        </div>
      );
    }
    
    return (
      <div className="mt-4 space-y-2">
        {(response as FormattedSection[]).map((section, index) => (
          <Collapsible key={index} className="bg-[#2C2F24] rounded-lg overflow-hidden">
            <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-[#FFC900] hover:bg-[#353824] transition-colors">
              <span className="font-semibold">{section.title}</span>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 pt-0 text-[#FFC900]/80">
              <p className="whitespace-pre-wrap">{section.content}</p>
            </CollapsibleContent>
          </Collapsible>
        ))}
        
        <div className="mt-4 p-3 bg-[#2C2F24] rounded-lg border border-[#FFC900]/20">
          <p className="text-sm text-[#FFC900]/50">
            ℹ️ Note: This is an AI-generated analysis. Always consult a qualified electrician for complex electrical issues.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <CircuitBoard className="h-6 w-6 text-[#FFC900]" />
        <h2 className="text-xl font-semibold text-[#FFC900]">Electrical Fault Finder</h2>
      </div>
      
      <div className="space-y-4">
        <p className="text-[#FFC900]/70">
          Provide a detailed description of the electrical issue you're facing for AI-powered diagnosis.
        </p>

        <Textarea 
          placeholder="Describe symptoms, measurements, unusual behaviors, specific circuit or equipment details..."
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
          {isLoading ? 'Analyzing...' : 'Get Fault Analysis'}
        </Button>
        
        {response && renderFormattedResponse()}
      </div>
    </div>
  );
};

export default AIDiagnosticAssistant;
