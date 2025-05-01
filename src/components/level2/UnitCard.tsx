
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock } from 'lucide-react';
import ProgressTracker from './ProgressTracker';

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
  };
}

const UnitCard = ({ unitNumber, title, description, path, progress }: UnitCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (path) {
      console.log("UnitCard - Navigating to:", path);
      navigate(path);
    }
  };
  
  return (
    <div 
      className="bg-secondary border border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer p-6 rounded-lg"
      onClick={handleClick}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-2">
          <h3 className="text-primary font-medium text-xl">
            {unitNumber}
          </h3>
          {progress && (
            <span className="ml-auto bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
              {Math.round((progress.completed / progress.total) * 100)}% Complete
            </span>
          )}
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
      </div>
    </div>
  );
};

export default UnitCard;
