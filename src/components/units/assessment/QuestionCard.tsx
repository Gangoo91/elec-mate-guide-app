
import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface QuestionCardProps {
  question: string;
  options: string[];
  selectedAnswer: string | null;
  correctAnswer?: string;
  showExplanation?: boolean;
  onAnswerSelect: (answer: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  options,
  selectedAnswer,
  correctAnswer,
  showExplanation = false,
  onAnswerSelect,
}) => {
  return (
    <div className="bg-[#353a2c] rounded-lg p-5 mb-6">
      <h3 className="text-lg text-[#FFC900] mb-4">{question}</h3>
      
      <div className="space-y-3">
        {options.map((option, index) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = showExplanation && option === correctAnswer;
          const isWrong = showExplanation && isSelected && option !== correctAnswer;
          
          return (
            <div 
              key={index}
              className={`
                p-3 rounded-lg border cursor-pointer flex items-center gap-3
                ${isSelected ? 'border-[#FFC900]' : 'border-[#FFC900]/30'}
                ${isCorrect ? 'bg-green-900/10 border-green-500/30' : ''}
                ${isWrong ? 'bg-red-900/10 border-red-500/30' : ''}
                ${!showExplanation ? 'hover:bg-[#22251e]/50' : ''}
              `}
              onClick={() => !showExplanation && onAnswerSelect(option)}
            >
              {showExplanation && isCorrect && (
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
              )}
              {showExplanation && isWrong && (
                <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
              )}
              <span className={`
                ${isCorrect ? 'text-green-400' : ''}
                ${isWrong ? 'text-red-400' : ''}
                ${isSelected && !showExplanation ? 'text-[#FFC900]' : 'text-[#FFC900]/90'}
              `}>
                {option}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
