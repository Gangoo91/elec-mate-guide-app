
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
    <Card className="bg-[#2a2d24] p-4">
      <h4 className="text-[#FFC900] font-medium mb-3">{question}</h4>
      <RadioGroup
        disabled={disabled}
        value={selectedAnswer}
        onValueChange={onAnswerChange}
      >
        <div className="space-y-2">
          {options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem 
                value={option} 
                id={`q${id}-option${index}`}
                className="border-[#FFC900]"
              />
              <Label 
                htmlFor={`q${id}-option${index}`}
                className="text-[#FFC900]/80"
              >
                {option}
              </Label>
            </div>
          ))}
        </div>
      </RadioGroup>
    </Card>
  );
};
