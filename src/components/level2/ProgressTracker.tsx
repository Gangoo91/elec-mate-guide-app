
import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

interface ProgressTrackerProps {
  completedSections: number;
  totalSections: number;
  className?: string;
}

const ProgressTracker = ({ completedSections, totalSections, className = '' }: ProgressTrackerProps) => {
  const progressPercentage = (completedSections / totalSections) * 100;
  
  return (
    <div className={`mt-4 ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-primary/80">Your progress</span>
        <span className="text-sm font-medium text-primary/80">{completedSections}/{totalSections} complete</span>
      </div>
      <Progress value={progressPercentage} className="h-2 bg-secondary" />
      
      <div className="mt-4 grid grid-cols-5 gap-1">
        {Array.from({ length: totalSections }).map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            {index < completedSections ? (
              <CheckCircle className="h-4 w-4 text-green-500" />
            ) : (
              <Circle className="h-4 w-4 text-primary/30" />
            )}
            <span className="text-xs text-primary/60 mt-1">{index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;
