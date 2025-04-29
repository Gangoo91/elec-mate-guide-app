
import React, { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ClipboardList } from "lucide-react";
import { useErrorHandler } from "@/hooks/useErrorHandler";

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
        toast.success("Inspection checklist generated successfully");
      } else {
        throw new Error("No checklist received");
      }
    } catch (err) {
      console.error("Error:", err);
      handleError(err, "Unable to generate inspection checklist. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <ClipboardList className="h-6 w-6 text-[#FFC900]" />
        <h2 className="text-xl font-semibold text-[#FFC900]">Inspection & Testing Guide</h2>
      </div>
      
      <div className="space-y-4">
        <p className="text-[#FFC900]/70">
          Generate inspection and testing checklists for electrical installations based on the installation type.
        </p>

        <Textarea 
          placeholder="Enter installation type (e.g., domestic, commercial, industrial, fire alarm)..."
          value={installationType}
          onChange={(e) => setInstallationType(e.target.value)}
          className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/50 min-h-[100px]"
        />

        <Button 
          onClick={generateChecklist} 
          disabled={isLoading}
          className="w-full bg-[#FFC900] text-black hover:bg-[#FFF200]"
        >
          <ClipboardList className="h-4 w-4 mr-2" />
          {isLoading ? 'Generating...' : 'Generate Inspection Checklist'}
        </Button>
        
        {checklist && (
          <div className="mt-4 p-4 bg-[#2C2F24] rounded-lg">
            <h4 className="font-semibold mb-2 text-[#FFC900]">Inspection Checklist:</h4>
            <div className="text-[#FFC900]/80 whitespace-pre-wrap">{checklist}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InspectionTestingGuide;
