
import React from 'react';
import { Check, AlertTriangle } from 'lucide-react';

interface QuizExplanationProps {
  selectedAnswer: string;
  correctAnswer: string;
  explanation: string;
}

export const QuizExplanation: React.FC<QuizExplanationProps> = ({
  selectedAnswer,
  correctAnswer,
  explanation
}) => {
  const isCorrect = selectedAnswer === correctAnswer;
  
  return (
    <div className="mt-4 p-4 bg-[#353a2c] rounded-lg border border-[#FFC900]/30">
      <div className="flex items-start gap-2 mb-2">
        <div className="mt-1">
          {isCorrect ? (
            <Check className="h-5 w-5 text-green-500" />
          ) : (
            <AlertTriangle className="h-5 w-5 text-red-500" />
          )}
        </div>
        <div>
          <h5 className="font-medium text-[#FFC900]">
            {isCorrect ? "Correct!" : "Incorrect"}
          </h5>
          <p className="text-[#FFC900]/80 mt-1">
            {explanation}
          </p>
          {!isCorrect && (
            <p className="text-[#FFC900] mt-2">
              Correct answer: {correctAnswer}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
