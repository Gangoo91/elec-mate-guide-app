
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface QuizTimerProps {
  timeRemaining: number;
  quizSubmitted: boolean;
}

export const QuizTimer: React.FC<QuizTimerProps> = ({ timeRemaining, quizSubmitted }) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Calculate percentage of time remaining
  const getProgressValue = (timeRemaining: number, totalTime: number = 600) => {
    return (timeRemaining / totalTime) * 100;
  };

  // Determine the appropriate color class based on time remaining
  const getIndicatorClass = () => {
    if (timeRemaining < 60) return 'bg-red-500';
    if (timeRemaining < 180) return 'bg-orange-500';
    return 'bg-[#FFC900]';
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[#FFC900]/80 text-sm">Time Remaining</span>
        <span className={`font-medium text-lg ${timeRemaining < 60 ? 'text-red-500' : 'text-[#FFC900]'}`}>
          {quizSubmitted ? "Completed" : formatTime(timeRemaining)}
        </span>
      </div>
      <Progress 
        value={getProgressValue(timeRemaining)} 
        className="h-2 bg-[#353a2c]" 
        indicatorClassName={getIndicatorClass()}
      />
    </div>
  );
};
