
import React from 'react';

interface QuestionOption {
  option: string;
  isSelected: boolean;
  isCorrect?: boolean;
  showResult: boolean;
  onSelect: () => void;
}

const QuestionOption: React.FC<QuestionOption> = ({ 
  option, 
  isSelected, 
  isCorrect, 
  showResult, 
  onSelect 
}) => (
  <div 
    className={`p-3 rounded-lg cursor-pointer border transition-colors ${
      isSelected 
        ? showResult 
          ? isCorrect 
            ? "bg-green-900/20 border-green-500/50" 
            : "bg-red-900/20 border-red-500/50"
          : "bg-[#353a2c] border-[#FFC900]/50" 
        : "bg-[#22251e] border-[#FFC900]/20 hover:bg-[#353a2c]"
    }`}
    onClick={onSelect}
  >
    <p className="text-[#FFC900]/80">{option}</p>
  </div>
);

interface QuestionCardProps {
  question: string;
  options: string[];
  selectedAnswer: string | null;
  correctAnswer: string;
  showExplanation: boolean;
  onAnswerSelect: (answer: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  options,
  selectedAnswer,
  correctAnswer,
  showExplanation,
  onAnswerSelect,
}) => {
  return (
    <div>
      <p className="text-[#FFC900]/90 mb-4">{question}</p>
      <div className="space-y-3 mb-6">
        {options.map((option, index) => (
          <QuestionOption
            key={index}
            option={option}
            isSelected={selectedAnswer === option}
            isCorrect={option === correctAnswer}
            showResult={showExplanation}
            onSelect={() => onAnswerSelect(option)}
          />
        ))}
      </div>
    </div>
  );
};
