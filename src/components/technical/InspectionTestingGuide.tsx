import React, { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ClipboardList, Search, CheckCircle, AlertCircle, InfoIcon } from "lucide-react";
import { useErrorHandler } from "@/hooks/useErrorHandler";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LoadingSpinner from "@/components/LoadingSpinner";

const InspectionTestingGuide: React.FC = () => {
  const [installationType, setInstallationType] = useState('');
  const [checklist, setChecklist] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { handleError } = useErrorHandler();

  const generateChecklist = async () => {
    if (!installationType.trim()) {
      toast.error("Please enter the installation type");
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('safety-checklist-generator', {
        body: JSON.stringify({ 
          installationType,
          additionalContext: "Ensure compliance with BS 7671 and current UK regulations" 
        })
      });

      if (error) throw error;
      
      if (data.checklist) {
        setChecklist(data.checklist);
        toast.success("Checklist generated successfully");
      } else {
        throw new Error("No checklist received");
      }
    } catch (err) {
      console.error("Error:", err);
      handleError(err, "Unable to generate checklist. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const formatChecklist = (checklist: string) => {
    return checklist
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('## ')) {
          return `<h2 class="text-xl font-bold mt-4 mb-2 text-[#FFC900] flex items-center">
            <InfoIcon className="mr-2 text-[#FFC900]" /> ${line.replace('## ', '')}
          </h2>`;
        }
        
        if (/^\d+\./.test(line.trim())) {
          return `<li class="flex items-start mb-2">
            <CheckCircle className="mr-2 mt-1 text-green-500 flex-shrink-0" /> 
            <span>${line.replace(/^\d+\.\s*/, '')}</span>
          </li>`;
        }
        
        if (line.toLowerCase().includes('pass/fail')) {
          return `<div class="bg-[#2C2F24] border border-[#FFC900]/20 p-3 rounded-md my-2 flex items-center">
            <AlertCircle className="mr-2 text-yellow-500" /> 
            <span class="text-[#FFC900]/90">${line}</span>
          </div>`;
        }
        
        if (line.includes('BS 7671')) {
          return `<div class="text-sm text-[#FFC900]/70 italic my-2 flex items-center">
            <InfoIcon className="mr-2 text-[#FFC900]/50" /> 
            ${line}
          </div>`;
        }
        
        return line ? `<p class="mb-2 text-[#FFC900]/90">${line}</p>` : '';
      })
      .filter(line => line.trim() !== '')
      .join('');
  };

  return (
    <div>
      <CardHeader className="flex flex-row items-center gap-2">
        <ClipboardList className="h-6 w-6 text-[#FFC900]" />
        <CardTitle className="text-[#FFC900]">Inspection & Testing Guide</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="relative">
          <Textarea 
            placeholder="Enter the type of installation (e.g., domestic rewire, commercial installation, industrial three-phase)"
            value={installationType}
            onChange={(e) => setInstallationType(e.target.value)}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/50 min-h-[80px] pr-10"
          />
          <Search className="absolute right-3 top-3 h-5 w-5 text-[#FFC900]/40" />
        </div>

        <Button 
          onClick={generateChecklist} 
          disabled={isLoading}
          className="w-full bg-[#FFC900] text-black hover:bg-[#FFF200] h-12 text-base font-medium"
        >
          {isLoading ? (
            <>
              <LoadingSpinner size="sm" className="mr-2" />
              Generating Guide...
            </>
          ) : (
            <>
              <ClipboardList className="h-5 w-5 mr-2" />
              Generate
            </>
          )}
        </Button>
        
        {checklist && (
          <Card className="mt-6 bg-[#2C2F24] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <div 
                className="prose prose-invert max-w-none text-[#FFC900]/90 space-y-4"
                dangerouslySetInnerHTML={{ 
                  __html: formatChecklist(checklist)
                }} 
              />
            </CardContent>
          </Card>
        )}
      </CardContent>
    </div>
  );
};

export default InspectionTestingGuide;
