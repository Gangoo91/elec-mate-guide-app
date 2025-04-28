
import React from 'react';
import { Timer, AlertTriangle } from "lucide-react";

interface QuizTimerProps {
  timeRemaining: number;
  quizSubmitted: boolean;
}

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const QuizTimer = ({ timeRemaining, quizSubmitted }: QuizTimerProps) => {
  return (
    <div className="flex items-center justify-between bg-[#2a2d24] p-3 rounded-lg">
      <div className="flex items-center gap-2">
        <Timer className="h-5 w-5 text-[#FFC900]" />
        <span className="text-[#FFC900]">Time Remaining: {formatTime(timeRemaining)}</span>
      </div>
      {timeRemaining < 60 && !quizSubmitted && (
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-[#FFC900]" />
          <span className="text-[#FFC900]">Less than 1 minute remaining!</span>
        </div>
      )}
    </div>
  );
};
