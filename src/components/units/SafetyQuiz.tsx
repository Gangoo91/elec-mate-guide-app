
import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Timer, AlertTriangle } from "lucide-react";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { useErrorHandler } from "@/hooks/useErrorHandler";

interface SafetyQuizProps {
  unitId: string;
  timeLimit: number; // in seconds
}

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  category: string;
}

export const SafetyQuiz = ({ unitId, timeLimit }: SafetyQuizProps) => {
  const [timeRemaining, setTimeRemaining] = useState(timeLimit);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const { user } = useAuth();
  const { handleError } = useErrorHandler();

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      // Get the total count of questions first
      const { count, error: countError } = await supabase
        .from('safety_quiz_questions')
        .select('*', { count: 'exact', head: true });

      if (countError) throw countError;
      
      if (!count || count === 0) {
        setLoading(false);
        return;
      }

      // Generate 5 random unique indices within the count range
      const totalQuestions = count;
      const questionIndices = new Set<number>();
      const questionLimit = Math.min(5, totalQuestions);
      
      while (questionIndices.size < questionLimit) {
        const randomIndex = Math.floor(Math.random() * totalQuestions);
        questionIndices.add(randomIndex);
      }

      // Fetch questions using the random offsets
      const promises = Array.from(questionIndices).map(index => {
        return supabase
          .from('safety_quiz_questions')
          .select('id, question, options, category')
          .range(index, index)
          .single();
      });

      const results = await Promise.all(promises);
      const validResults = results
        .filter(result => !result.error && result.data)
        .map(result => ({
          ...result.data,
          options: result.data.options as string[]
        }));

      setQuestions(validResults);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching questions:', error);
      handleError(error, "Failed to load quiz questions. Please try again.");
      setLoading(false);
    }
  };

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

  const handleSubmit = async () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You need to be logged in to submit quiz results.",
        variant: "destructive"
      });
      return;
    }

    setQuizSubmitted(true);
    
    try {
      const timeTaken = timeLimit - timeRemaining;
      const totalQuestions = questions.length;
      const answeredQuestions = Object.keys(selectedAnswers).length;

      const { error } = await supabase
        .from('quiz_attempts')
        .insert({
          unit_id: unitId,
          user_id: user.id,
          score: answeredQuestions,
          total_questions: totalQuestions,
          time_taken: timeTaken
        });

      if (error) throw error;

      toast({
        title: "Quiz Submitted",
        description: `You answered ${answeredQuestions} out of ${totalQuestions} questions in ${formatTime(timeTaken)}.`,
      });
    } catch (error) {
      handleError(error, "Failed to save your results. Please try again.");
    }
  };

  const handleRetry = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setTimeRemaining(timeLimit);
    setLoading(true);
    fetchQuestions();
  };

  if (loading) {
    return (
      <div className="text-center p-4">
        <p className="text-[#FFC900]">Loading quiz questions...</p>
      </div>
    );
  }
  
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
        
        {!quizSubmitted ? (
          <Button 
            type="submit"
            className="mt-6 w-full bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]"
          >
            Submit Quiz
          </Button>
        ) : (
          <Button 
            type="button"
            onClick={handleRetry}
            className="mt-6 w-full bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]"
          >
            Try Another Quiz
          </Button>
        )}
      </form>
    </div>
  );
};

