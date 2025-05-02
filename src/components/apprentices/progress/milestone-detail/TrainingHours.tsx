
import { useState } from 'react';
import { Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Milestone } from "../types";

interface TrainingHoursProps {
  milestone: Milestone;
  onSaveHours: (hours: number) => void;
}

export const TrainingHours = ({ milestone, onSaveHours }: TrainingHoursProps) => {
  const [trainingHours, setTrainingHours] = useState<string>(
    milestone.training_hours?.toString() || ''
  );

  const handleHoursUpdate = () => {
    if (!trainingHours) return;
    
    const hours = parseFloat(trainingHours);
    if (isNaN(hours)) return;
    
    onSaveHours(hours);
  };

  return (
    <div className="p-4 bg-[#22251e]/80 rounded-md border border-[#FFC900]/20">
      <h4 className="text-sm font-medium mb-2 text-[#FFC900] flex items-center gap-2">
        <Timer className="h-4 w-4" />
        Off-the-Job Training Hours
      </h4>
      <div className="flex items-end gap-2">
        <div className="flex-1">
          <Input
            type="number" 
            min="0"
            step="0.5"
            value={trainingHours}
            onChange={(e) => setTrainingHours(e.target.value)}
            placeholder="Record training hours"
            className="bg-[#22251e] border-[#FFC900]/30 text-[#FFC900]"
          />
        </div>
        <Button 
          variant="outline"
          size="sm"
          className="border-[#FFC900]/30 text-[#FFC900] hover:text-[#FFC900] hover:bg-[#FFC900]/10"
          onClick={handleHoursUpdate}
        >
          Save Hours
        </Button>
      </div>
      <p className="text-xs text-[#FFC900]/60 mt-2">
        Record the time spent on this off-the-job training activity
      </p>
    </div>
  );
};
