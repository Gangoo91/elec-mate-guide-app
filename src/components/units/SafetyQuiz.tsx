
import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Timer, AlertTriangle } from "lucide-react";
import { Label } from "@/components/ui/label";

interface SafetyQuizProps {
  unitId: string;
  timeLimit: number; // in seconds
}

export const SafetyQuiz = ({ unitId, timeLimit }: SafetyQuizProps) => {
  const [timeRemaining, setTimeRemaining] = useState(timeLimit);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  
  // Format time remaining into minutes and seconds
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  
  // Countdown timer effect
  useEffect(() => {
    if (timeRemaining > 0 && !quizSubmitted) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
      
      return () => clearInterval(timer);
    } else if (timeRemaining === 0 && !quizSubmitted) {
      handleSubmit();
    }
  }, [timeRemaining, quizSubmitted]);
  
  const handleSubmit = () => {
    setQuizSubmitted(true);
    // Here you would typically send the results to your backend
    console.log('Quiz submitted with answers:', selectedAnswers);
  };
  
  // Temporary questions - in practice these would come from your backend
  const questions = [
    {
      id: 1,
      question: "What is the first step before starting any electrical work?",
      options: [
        "Put on safety boots",
        "Check for live circuits",
        "Conduct a risk assessment",
        "Call your supervisor"
      ]
    },
    {
      id: 2,
      question: "When should you replace your safety equipment?",
      options: [
        "Every year",
        "When it shows signs of wear or damage",
        "Every 6 months",
        "When your supervisor tells you to"
      ]
    },
    // Add more questions as needed
  ];
  
  return (
    <div className="space-y-6">
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
      
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
        <div className="space-y-4">
          {questions.map((q) => (
            <Card key={q.id} className="bg-[#2a2d24] p-4">
              <h4 className="text-[#FFC900] font-medium mb-3">{q.question}</h4>
              <RadioGroup
                disabled={quizSubmitted}
                value={selectedAnswers[q.id]}
                onValueChange={(value) => {
                  setSelectedAnswers(prev => ({
                    ...prev,
                    [q.id]: value
                  }));
                }}
              >
                <div className="space-y-2">
                  {q.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem 
                        value={option} 
                        id={`q${q.id}-option${index}`}
                        className="border-[#FFC900]"
                      />
                      <Label 
                        htmlFor={`q${q.id}-option${index}`}
                        className="text-[#FFC900]/80"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </Card>
          ))}
        </div>
        
        {!quizSubmitted && (
          <Button 
            type="submit"
            className="mt-6 w-full bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]"
          >
            Submit Quiz
          </Button>
        )}
      </form>
    </div>
  );
};
