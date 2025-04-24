
import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Timer, AlertTriangle } from "lucide-react";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

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

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const { data, error } = await supabase
        .from('safety_quiz_questions')
        .select('id, question, options, category')
        .limit(5)
        .order('RANDOM()');

      if (error) throw error;

      setQuestions(data.map(q => ({
        ...q,
        options: q.options as string[]
      })));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching questions:', error);
      toast({
        title: "Error loading quiz",
        description: "Failed to load quiz questions. Please try again.",
        variant: "destructive"
      });
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
    setQuizSubmitted(true);
    
    try {
      const timeTaken = timeLimit - timeRemaining;
      const totalQuestions = questions.length;
      const answeredQuestions = Object.keys(selectedAnswers).length;

      const { error } = await supabase
        .from('quiz_attempts')
        .insert({
          unit_id: unitId,
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
      console.error('Error submitting quiz:', error);
      toast({
        title: "Error submitting quiz",
        description: "Failed to save your results. Please try again.",
        variant: "destructive"
      });
    }
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
