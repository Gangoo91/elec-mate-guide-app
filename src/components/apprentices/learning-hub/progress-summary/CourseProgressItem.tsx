
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';

interface UnitData {
  unitNumber: string;
  title: string;
  description: string;
  path: string;
  progress?: {
    completed: number;
    total: number;
    timeSpent?: number;
    estimatedTime?: number;
    lastActivity?: Date;
  };
}

interface CourseProgressItemProps {
  unit: UnitData;
  onDelete?: (unitNumber: string) => void;
}

const CourseProgressItem = ({ unit, onDelete }: CourseProgressItemProps) => {
  const unitProgress = unit.progress ? Math.round((unit.progress.completed / unit.progress.total) * 100) : 0;
  
  // Function to handle course deletion with confirmation
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, unitNumber: string) => {
    e.stopPropagation();
    if (onDelete) {
      onDelete(unitNumber);
    }
  };
  
  return (
    <div className="flex items-center justify-between bg-[#22251e]/70 p-2 rounded-lg border border-[#FFC900]/10">
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-[#FFC900]/80">{unit.unitNumber}</span>
          {onDelete && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-6 w-6 p-0 text-[#FFC900]/60 hover:text-[#FFC900] hover:bg-red-500/10"
              onClick={(e) => handleDelete(e, unit.unitNumber)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Remove course</span>
            </Button>
          )}
        </div>
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-[#FFC900]">{unit.progress?.completed || 0}/{unit.progress?.total || 0}</span>
          <span className="text-xs text-[#FFC900]">{unitProgress}%</span>
        </div>
        <Progress 
          value={unitProgress} 
          className="h-1.5" 
          indicatorClassName={unitProgress > 75 ? "bg-green-500" : unitProgress > 25 ? "bg-amber-500" : "bg-red-500"}
        />
      </div>
    </div>
  );
};

export default CourseProgressItem;
