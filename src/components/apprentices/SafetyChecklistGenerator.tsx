
import React, { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ShieldCheck } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const SafetyChecklistGenerator: React.FC = () => {
  const [installationType, setInstallationType] = useState('residential');
  const [additionalContext, setAdditionalContext] = useState('');
  const [checklist, setChecklist] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateChecklist = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('safety-checklist-generator', {
        body: JSON.stringify({ 
          installationType,
          additionalContext 
        })
      });

      if (error) throw error;

      setChecklist(data.checklist);
      toast.success("Safety checklist generated");
    } catch (err) {
      console.error(err);
      toast.error("Failed to generate safety checklist");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20">
      <CardHeader className="flex flex-row items-center gap-2">
        <ShieldCheck className="h-6 w-6 text-[#FFC900]" />
        <CardTitle className="text-[#FFC900]">Safety Checklist Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="installation-type" className="text-[#FFC900]">Installation Type</Label>
            <Select 
              value={installationType} 
              onValueChange={setInstallationType}
            >
              <SelectTrigger id="installation-type" className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
                <SelectValue placeholder="Select installation type" />
              </SelectTrigger>
              <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
                <SelectItem value="residential" className="text-[#FFC900] focus:bg-[#FFC900]/10 focus:text-[#FFC900]">Residential</SelectItem>
                <SelectItem value="commercial" className="text-[#FFC900] focus:bg-[#FFC900]/10 focus:text-[#FFC900]">Commercial</SelectItem>
                <SelectItem value="industrial" className="text-[#FFC900] focus:bg-[#FFC900]/10 focus:text-[#FFC900]">Industrial</SelectItem>
                <SelectItem value="outdoor" className="text-[#FFC900] focus:bg-[#FFC900]/10 focus:text-[#FFC900]">Outdoor</SelectItem>
                <SelectItem value="specialLocation" className="text-[#FFC900] focus:bg-[#FFC900]/10 focus:text-[#FFC900]">Special Location</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Textarea 
            placeholder="Add any specific details about the installation or safety concerns..."
            value={additionalContext}
            onChange={(e) => setAdditionalContext(e.target.value)}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/50"
          />
          
          <Button 
            onClick={handleGenerateChecklist} 
            disabled={isLoading}
            className="w-full bg-[#FFC900] text-black hover:bg-[#FFF200]"
          >
            {isLoading ? 'Generating Checklist...' : 'Generate Safety Checklist'}
          </Button>
          
          {checklist && (
            <div className="mt-4 p-3 bg-[#2C2F24] rounded">
              <h4 className="font-semibold mb-2 text-[#FFC900]">Safety Checklist:</h4>
              <div className="text-[#FFC900]/80 whitespace-pre-wrap">{checklist}</div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SafetyChecklistGenerator;
