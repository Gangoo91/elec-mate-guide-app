
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { CircleCheck, Star } from "lucide-react";

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface QuizProps {
  contentId: string;
  title: string;
  questions: Question[];
}

const InteractiveQuiz = ({ contentId, title, questions }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const { toast } = useToast();
  const { user } = useAuth();

  const handleAnswerSelect = async (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
    setShowExplanation(true);
    
    const isCorrect = optionIndex === questions[currentQuestion].correct;
    if (isCorrect) {
      setScore(score + 1);
      toast({
        title: "Correct! 🎉",
        description: "Well done! Keep going!",
      });
    } else {
      toast({
        title: "Not quite right",
        description: "Check the explanation and try the next question!",
        variant: "destructive",
      });
    }

    // Save progress
    if (user) {
      const { error } = await supabase
        .from('user_progress')
        .upsert({
          user_id: user.id,
          content_id: contentId,
          progress: {
            completed: currentQuestion === questions.length - 1,
            score: score + (isCorrect ? 1 : 0),
            total_questions: questions.length,
            last_question: currentQuestion
          }
        });

      if (error) {
        console.error('Error saving progress:', error);
      }
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20 shadow-lg">
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-[#FFC900] text-2xl">{title}</CardTitle>
          <div className="flex items-center gap-2">
            <Star className="text-[#FFC900] h-5 w-5" />
            <span className="text-[#FFC900]">
              {score}/{questions.length}
            </span>
          </div>
        </div>
        <div className="w-full bg-[#FFC900]/10 h-2 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#FFC900] transition-all duration-300"
            style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
          />
        </div>
      </CardHeader>
      <CardContent>
        {currentQuestion < questions.length ? (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <span className="text-[#FFC900]/60 text-sm">
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            
            <p className="text-[#FFC900] text-xl font-medium leading-relaxed mb-6">
              {questions[currentQuestion].question}
            </p>
            
            <div className="grid gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`w-full justify-start p-6 text-left relative group transition-all duration-200 ${
                    selectedAnswer === null 
                      ? 'hover:border-[#FFC900] hover:bg-[#FFC900]/5'
                      : selectedAnswer === index 
                        ? index === questions[currentQuestion].correct
                          ? 'border-green-500 bg-green-500/10 text-green-500'
                          : 'border-red-500 bg-red-500/10 text-red-500'
                        : index === questions[currentQuestion].correct && showExplanation
                          ? 'border-green-500 bg-green-500/10 text-green-500'
                          : 'border-[#FFC900]/20 opacity-50'
                  }`}
                  onClick={() => !selectedAnswer && handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 flex items-center justify-center rounded-full border 
                      ${selectedAnswer === null 
                        ? 'border-[#FFC900]/40 text-[#FFC900]/40 group-hover:border-[#FFC900] group-hover:text-[#FFC900]' 
                        : ''}`}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1">{option}</span>
                    {selectedAnswer !== null && index === questions[currentQuestion].correct && (
                      <CircleCheck className="h-5 w-5 text-green-500" />
                    )}
                  </div>
                </Button>
              ))}
            </div>
            
            {showExplanation && (
              <div className="mt-6 p-6 border border-[#FFC900]/20 rounded-lg bg-[#FFC900]/5">
                <h4 className="text-[#FFC900] font-medium mb-2">Explanation</h4>
                <p className="text-[#FFC900]/70 leading-relaxed">
                  {questions[currentQuestion].explanation}
                </p>
                {currentQuestion < questions.length - 1 && (
                  <Button
                    className="mt-4 w-full"
                    onClick={nextQuestion}
                  >
                    Next Question
                  </Button>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-8">
            <h3 className="text-[#FFC900] text-2xl font-bold mb-4">Quiz Complete! 🎉</h3>
            <p className="text-[#FFC900]/70 text-lg mb-4">
              You scored {score} out of {questions.length}
            </p>
            <p className="text-[#FFC900]/60">
              {score === questions.length 
                ? "Perfect score! Excellent work!" 
                : "Keep practicing to improve your score!"}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default InteractiveQuiz;
