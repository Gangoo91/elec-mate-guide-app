
import React from 'react';
import { Button } from '@/components/ui/button';

interface QuizIntroductionProps {
  unitId: string;
  questionsToShow: number;
  timeLimit: number;
  onStart: () => void;
}

export const QuizIntroduction: React.FC<QuizIntroductionProps> = ({
  unitId,
  questionsToShow,
  timeLimit,
  onStart
}) => {
  return (
    <div className="text-center py-8">
      <h3 className="text-xl font-medium text-[#FFC900] mb-4">
        {unitId === "installation-planning" ? "Installation Planning Assessment" : `Unit ${unitId} Assessment`}
      </h3>
      <p className="text-[#FFC900]/80 mb-6">
        This assessment contains {questionsToShow} questions randomly selected from a pool of questions to test your knowledge.
        You'll have {Math.floor(timeLimit / 60)} minutes to complete the assessment.
      </p>
      <Button
        onClick={onStart}
        className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700] px-6 py-3 rounded font-medium"
      >
        Begin Assessment
      </Button>
    </div>
  );
};
