
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { systemOperationsQuizData } from '@/data/moet/systemOperationsData';
import { toast } from "sonner";

const SystemOperationsAssessmentPage = () => {
  const navigate = useNavigate();
  const [currentAnswers, setCurrentAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/engineering-operations/system-operations');
  };

  const handleAnswerChange = (questionIndex: number, value: string) => {
    setCurrentAnswers(prev => ({ ...prev, [questionIndex]: value }));
  };

  const handleSubmit = () => {
    // Calculate score
    let correctCount = 0;
    systemOperationsQuizData.forEach((question, index) => {
      if (currentAnswers[index] === question.correctAnswer) {
        correctCount++;
      }
    });
    
    setScore(correctCount);
    setIsSubmitted(true);
    
    // Show toast with the score
    toast.success(`You scored ${correctCount} out of ${systemOperationsQuizData.length}!`);
  };

  const handleRetry = () => {
    setCurrentAnswers({});
    setIsSubmitted(false);
    setScore(0);
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="System Operations Assessment"
          description="Test your knowledge of system operations"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          {systemOperationsQuizData.map((question, questionIndex) => (
            <Card key={questionIndex} className="p-6 bg-[#22251e] border-[#FFC900]/20">
              <h3 className="text-lg font-medium text-[#FFC900] mb-4">
                {questionIndex + 1}. {question.question}
              </h3>
              
              <RadioGroup
                value={currentAnswers[questionIndex] || ""}
                onValueChange={(value) => handleAnswerChange(questionIndex, value)}
                disabled={isSubmitted}
                className="space-y-3"
              >
                {question.answers.map((answer, answerIndex) => {
                  const answerKey = String.fromCharCode(65 + answerIndex); // A, B, C, D...
                  const isSelected = currentAnswers[questionIndex] === answerKey;
                  const isCorrect = isSubmitted && answerKey === question.correctAnswer;
                  const isWrong = isSubmitted && isSelected && !isCorrect;
                  
                  return (
                    <div key={answerKey} className="flex items-start space-x-2">
                      <RadioGroupItem
                        id={`q${questionIndex}-${answerKey}`}
                        value={answerKey}
                        className={isCorrect ? "text-green-500 border-green-500" : isWrong ? "text-red-500 border-red-500" : ""}
                      />
                      <Label
                        htmlFor={`q${questionIndex}-${answerKey}`}
                        className={`${isCorrect ? "text-green-500" : isWrong ? "text-red-500" : "text-[#FFC900]/80"}`}
                      >
                        {answerKey}. {answer}
                      </Label>
                    </div>
                  );
                })}
              </RadioGroup>
              
              {isSubmitted && (
                <div className="mt-4 p-3 bg-[#2a2d24] rounded-md text-[#FFC900]/70">
                  <p className="font-medium text-[#FFC900]">Explanation:</p>
                  <p>{question.explanation}</p>
                </div>
              )}
            </Card>
          ))}
          
          <div className="mt-6">
            {!isSubmitted ? (
              <Button 
                onClick={handleSubmit} 
                className="w-full py-6 bg-[#FFC900] hover:bg-[#e5b700] text-[#22251e] font-semibold text-lg"
                disabled={Object.keys(currentAnswers).length !== systemOperationsQuizData.length}
              >
                Submit Answers
              </Button>
            ) : (
              <div className="space-y-4">
                <div className="text-center p-6 bg-[#2a2d24] rounded-md">
                  <h3 className="text-xl font-bold text-[#FFC900] mb-2">Your Score</h3>
                  <p className="text-3xl font-bold text-[#FFC900]">{score} / {systemOperationsQuizData.length}</p>
                  <p className="mt-2 text-[#FFC900]/70">
                    {score === systemOperationsQuizData.length ? "Perfect! Excellent understanding of system operations!" : 
                     score >= systemOperationsQuizData.length * 0.7 ? "Good job! You have a solid understanding of system operations." :
                     "Keep studying! Review the content to improve your understanding."}
                  </p>
                </div>
                
                <Button 
                  onClick={handleRetry} 
                  className="w-full py-6 bg-[#FFC900] hover:bg-[#e5b700] text-[#22251e] font-semibold text-lg"
                >
                  Retry Quiz
                </Button>
                <Button 
                  onClick={handleBackClick} 
                  variant="outline" 
                  className="w-full py-6 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
                >
                  Back to System Operations
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SystemOperationsAssessmentPage;
