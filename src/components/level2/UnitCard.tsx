
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock, CheckCircle, X } from 'lucide-react';
import ProgressTracker from './ProgressTracker';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface UnitCardProps {
  unitNumber: string;
  title: string;
  description: string;
  path?: string;
  progress?: {
    completed: number;
    total: number;
    timeSpent?: number; // Time spent in minutes
    estimatedTime?: number; // Estimated time in minutes
    lastActivity?: Date; // Last activity date
  };
  isRequired?: boolean;
  onDelete?: () => void;
}

const UnitCard = ({ 
  unitNumber, 
  title, 
  description, 
  path, 
  progress, 
  isRequired = true,
  onDelete
}: UnitCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (path) {
      console.log("UnitCard - Navigating to:", path);
      navigate(path);
    }
  };
  
  const completionPercentage = progress ? Math.round((progress.completed / progress.total) * 100) : 0;
  const isCompleted = progress && progress.completed === progress.total;
  
  return (
    <div 
      className={`bg-secondary border ${isCompleted ? 'border-green-500/50' : 'border-primary/20 hover:border-primary/50'} transition-all duration-300 cursor-pointer p-6 rounded-lg`}
      onClick={handleClick}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-2">
          <h3 className="text-primary font-medium text-xl">
            {unitNumber}
          </h3>
          <div className="flex gap-2 ml-auto">
            {isRequired && (
              <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary text-xs">
                Required
              </Badge>
            )}
            {onDelete && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-6 w-6 p-0 text-primary/60 hover:text-primary hover:bg-red-500/10"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete();
                }}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Remove course</span>
              </Button>
            )}
          </div>
        </div>
        
        <h4 className="text-foreground font-medium text-lg mb-3">
          {title}
        </h4>
        
        <p className="text-primary/70 text-sm mb-4">
          {description}
        </p>

        {progress?.timeSpent && (
          <div className="text-xs text-primary/60 mb-4 flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>Training time: {Math.floor(progress.timeSpent / 60)}h {progress.timeSpent % 60}m</span>
            
            {progress.lastActivity && (
              <span className="ml-auto text-xs opacity-70">
                Last activity: {new Date(progress.lastActivity).toLocaleDateString()}
              </span>
            )}
          </div>
        )}
        
        {progress && (
          <ProgressTracker 
            completedSections={progress.completed}
            totalSections={progress.total}
            timeSpent={progress.timeSpent}
            estimatedTime={progress.estimatedTime}
            className="mt-auto"
          />
        )}
        
        {!progress && (
          <div className="mt-auto flex items-center text-xs text-primary/60">
            <BookOpen className="h-3 w-3 mr-1" />
            Start learning
          </div>
        )}
        
        {isCompleted && (
          <div className="mt-2 flex items-center justify-center bg-green-500/10 text-green-500 py-1 px-2 rounded-md text-xs">
            <CheckCircle className="h-3 w-3 mr-1" />
            Unit Complete
          </div>
        )}
      </div>
    </div>
  );
};

export default UnitCard;
