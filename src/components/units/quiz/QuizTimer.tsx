
import React, { useEffect, useState } from 'react';
import { Timer, AlertTriangle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface QuizTimerProps {
  timeRemaining: number;
  quizSubmitted: boolean;
  timeLimit: number;
}

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const QuizTimer = ({ timeRemaining, quizSubmitted, timeLimit }: QuizTimerProps) => {
  const [progressPercentage, setProgressPercentage] = useState(100);
  
  useEffect(() => {
    setProgressPercentage((timeRemaining / timeLimit) * 100);
  }, [timeRemaining, timeLimit]);
  
  // Determine color based on time remaining
  const getTimerColor = () => {
    if (timeRemaining < 60) return "text-red-500";
    if (timeRemaining < 300) return "text-orange-400";
    return "text-[#FFC900]";
  };
  
  const getProgressColor = () => {
    if (timeRemaining < 60) return "bg-red-500";
    if (timeRemaining < 300) return "bg-orange-400";
    return "bg-[#FFC900]";
  };

  return (
    <div className="sticky top-16 z-10 bg-[#2a2d24] p-4 rounded-lg shadow-lg mb-6">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Timer className={`h-5 w-5 ${getTimerColor()}`} />
            <span className={`${getTimerColor()} text-lg font-medium`}>
              Time: {formatTime(timeRemaining)}
            </span>
          </div>
          
          {timeRemaining < 60 && !quizSubmitted && (
            <div className="flex items-center gap-2 text-red-500">
              <AlertTriangle className="h-5 w-5" />
              <span className="text-sm md:text-base font-medium">Less than 1 minute left!</span>
            </div>
          )}
        </div>
        
        <Progress 
          value={progressPercentage} 
          className="h-2 bg-gray-700"
          indicatorClassName={getProgressColor()}
        />
      </div>
    </div>
  );
};
