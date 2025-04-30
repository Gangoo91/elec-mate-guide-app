
import React from 'react';
import { Button } from '@/components/ui/button';

interface QuizNavigationProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
  onCheck: () => void;
  onSubmit: () => void;
  showExplanation: boolean;
  hasSelectedAnswer: boolean;
}

export const QuizNavigation: React.FC<QuizNavigationProps> = ({
  currentQuestionIndex,
  totalQuestions,
  onPrevious,
  onNext,
  onCheck,
  onSubmit,
  showExplanation,
  hasSelectedAnswer
}) => {
  return (
    <div className="flex justify-between mt-6">
      <Button
        onClick={onPrevious}
        disabled={currentQuestionIndex === 0}
        variant="outline"
        className="border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
      >
        Previous
      </Button>
      
      <div className="flex gap-3">
        {!showExplanation && hasSelectedAnswer && (
          <Button
            onClick={onCheck}
            className="bg-[#353a2c] text-[#FFC900] hover:bg-[#454e36]"
          >
            Check Answer
          </Button>
        )}
        
        {currentQuestionIndex < totalQuestions - 1 ? (
          <Button
            onClick={onNext}
            className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]"
          >
            Next
          </Button>
        ) : (
          <Button
            onClick={onSubmit}
            className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]"
          >
            Submit Quiz
          </Button>
        )}
      </div>
    </div>
  );
};
