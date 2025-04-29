
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
    <div className="sticky top-16 z-10 bg-[#2a2d24] p-4 rounded-lg shadow-lg mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center gap-2">
          <Timer className="h-5 w-5 text-[#FFC900]" />
          <span className="text-[#FFC900] text-lg">Time: {formatTime(timeRemaining)}</span>
        </div>
        {timeRemaining < 60 && !quizSubmitted && (
          <div className="flex items-center gap-2 text-[#FFC900]">
            <AlertTriangle className="h-5 w-5" />
            <span className="text-sm md:text-base">Less than 1 minute left!</span>
          </div>
        )}
      </div>
    </div>
  );
};
