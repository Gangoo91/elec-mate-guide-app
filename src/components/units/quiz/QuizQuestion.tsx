
import React from 'react';
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface QuizQuestionProps {
  id: string;
  question: string;
  options: string[];
  selectedAnswer?: string;
  onAnswerChange: (value: string) => void;
  disabled: boolean;
}

export const QuizQuestion = ({
  id,
  question,
  options,
  selectedAnswer,
  onAnswerChange,
  disabled
}: QuizQuestionProps) => {
  return (
    <Card className="bg-[#2a2d24] p-4 md:p-6 shadow-lg">
      <h4 className="text-[#FFC900] font-medium mb-4 text-lg md:text-xl">{question}</h4>
      <RadioGroup
        disabled={disabled}
        value={selectedAnswer}
        onValueChange={onAnswerChange}
        className="space-y-3"
      >
        {options.map((option, index) => (
          <div 
            key={index} 
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-[#353a2c] transition-colors"
          >
            <RadioGroupItem 
              value={option} 
              id={`q${id}-option${index}`}
              className="border-[#FFC900] mt-1"
            />
            <Label 
              htmlFor={`q${id}-option${index}`}
              className="text-[#FFC900]/80 cursor-pointer flex-1 text-base md:text-lg"
            >
              {option}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </Card>
  );
};
