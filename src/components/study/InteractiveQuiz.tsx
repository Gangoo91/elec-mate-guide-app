
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

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
    
    if (optionIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
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
            score: score + (optionIndex === questions[currentQuestion].correct ? 1 : 0),
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
    <Card className="bg-[#22251e] border-[#FFC900]/20">
      <CardHeader>
        <CardTitle className="text-[#FFC900]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {currentQuestion < questions.length ? (
          <div className="space-y-4">
            <p className="text-[#FFC900] text-lg mb-4">
              {questions[currentQuestion].question}
            </p>
            <div className="grid gap-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`w-full justify-start p-4 text-left ${
                    selectedAnswer === index 
                      ? index === questions[currentQuestion].correct
                        ? 'border-green-500 bg-green-500/10'
                        : 'border-red-500 bg-red-500/10'
                      : 'border-[#FFC900]/20'
                  }`}
                  onClick={() => !selectedAnswer && handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </Button>
              ))}
            </div>
            
            {showExplanation && (
              <div className="mt-4 p-4 border border-[#FFC900]/20 rounded-lg">
                <p className="text-[#FFC900]/70">
                  {questions[currentQuestion].explanation}
                </p>
                {currentQuestion < questions.length - 1 && (
                  <Button
                    className="mt-4"
                    onClick={nextQuestion}
                  >
                    Next Question
                  </Button>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-[#FFC900] text-xl mb-4">Quiz Complete!</h3>
            <p className="text-[#FFC900]/70">
              You scored {score} out of {questions.length}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default InteractiveQuiz;
