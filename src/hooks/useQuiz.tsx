
import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { useErrorHandler } from "@/hooks/useErrorHandler";

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  category: string;
}

export const useQuiz = (timeLimit: number) => {
  const [timeRemaining, setTimeRemaining] = useState(timeLimit);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const { user } = useAuth();
  const { handleError } = useErrorHandler();

  const fetchQuestions = async () => {
    try {
      const { count, error: countError } = await supabase
        .from('safety_quiz_questions')
        .select('*', { count: 'exact', head: true });

      if (countError) throw countError;
      
      if (!count || count === 0) {
        setLoading(false);
        return;
      }

      const totalQuestions = count;
      const questionIndices = new Set<number>();
      const questionLimit = Math.min(5, totalQuestions);
      
      while (questionIndices.size < questionLimit) {
        const randomIndex = Math.floor(Math.random() * totalQuestions);
        questionIndices.add(randomIndex);
      }

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
          unit_id: "safety",
          user_id: user.id,
          score: answeredQuestions,
          total_questions: totalQuestions,
          time_taken: timeTaken
        });

      if (error) throw error;

      toast({
        title: "Quiz Submitted",
        description: `You answered ${answeredQuestions} out of ${totalQuestions} questions.`,
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

  useEffect(() => {
    fetchQuestions();
  }, []);

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

  return {
    timeRemaining,
    selectedAnswers,
    setSelectedAnswers,
    quizSubmitted,
    questions,
    loading,
    handleSubmit,
    handleRetry
  };
};
