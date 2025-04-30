
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface QuizProgressHeaderProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  answeredCount: number;
}

export const QuizProgressHeader: React.FC<QuizProgressHeaderProps> = ({
  currentQuestionIndex,
  totalQuestions,
  answeredCount
}) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h4 className="text-lg text-[#FFC900]">
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </h4>
      
      <div className="flex items-center gap-2">
        <span className="text-sm text-[#FFC900]/70">
          {answeredCount} of {totalQuestions} answered
        </span>
        <Progress 
          value={(answeredCount / totalQuestions) * 100}
          className="w-24 h-2 bg-gray-700"
          indicatorClassName="bg-green-500"
        />
      </div>
    </div>
  );
};
