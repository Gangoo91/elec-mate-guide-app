
import React from 'react';
import { Progress } from "@/components/ui/progress";

interface OverallProgressProps {
  completedSections: number;
  totalSections: number;
  completionPercentage: number;
}

const OverallProgress = ({ completedSections, totalSections, completionPercentage }: OverallProgressProps) => {
  return (
    <div>
      <div className="flex justify-between mb-1 text-sm">
        <span className="text-[#FFC900]/80">Overall Completion</span>
        <span className="text-[#FFC900]">{completedSections}/{totalSections} sections ({completionPercentage}%)</span>
      </div>
      <Progress 
        value={completionPercentage} 
        className="h-2" 
        indicatorClassName={completionPercentage > 75 ? "bg-green-500" : completionPercentage > 25 ? "bg-amber-500" : "bg-red-500"}
      />
      <div className="mt-1 text-xs text-[#FFC900]/60 flex justify-end">
        <span>Counts toward off-the-job training</span>
      </div>
    </div>
  );
};

export default OverallProgress;
