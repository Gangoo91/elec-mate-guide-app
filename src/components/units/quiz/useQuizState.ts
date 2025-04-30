
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { AssessmentQuestion } from './types';
import { getQuestionSet } from './utils/getQuestionSet';

export const useQuizState = (
  unitId: string, 
  timeLimit: number, 
  questionsToShow: number, 
  providedQuestions?: AssessmentQuestion[]
) => {
  const [timeRemaining, setTimeRemaining] = useState(timeLimit);
  const [isActive, setIsActive] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizKey, setQuizKey] = useState(Date.now()); // Key to force re-render
  const [currentQuestions, setCurrentQuestions] = useState<AssessmentQuestion[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [results, setResults] = useState<{ score: number; total: number } | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0 && isActive) {
      setIsActive(false);
      setQuizSubmitted(true);
      handleSubmitQuiz();
      toast({
        title: "Time's up!",
        description: "Your quiz has been automatically submitted.",
        variant: "destructive"
      });
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeRemaining, toast]);

  useEffect(() => {
    if (hasStarted && currentQuestions.length === 0) {
      setCurrentQuestions(getQuestionSet(unitId, questionsToShow, providedQuestions));
    }
  }, [hasStarted, unitId, questionsToShow, providedQuestions]);

  const handleStart = () => {
    setIsActive(true);
    setHasStarted(true);
  };

  const handleAnswerSelect = (questionIndex: number, answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answer
    }));
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    setShowExplanation(false);
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmitQuiz = () => {
    let score = 0;
    
    // Calculate score
    currentQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        score++;
      }
    });
    
    setResults({
      score,
      total: currentQuestions.length
    });
    
    setQuizSubmitted(true);
    setIsActive(false);

    // Send toast notification with results
    toast({
      title: "Quiz Completed",
      description: `You scored ${score} out of ${currentQuestions.length}`,
      variant: score / currentQuestions.length >= 0.7 ? "default" : "destructive"
    });
  };

  const handleRetake = () => {
    // Reset all quiz states
    setTimeRemaining(timeLimit);
    setQuizSubmitted(false);
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setResults(null);
    setIsActive(true);
    setCurrentQuestions(getQuestionSet(unitId, questionsToShow, providedQuestions));
    setShowExplanation(false);
    // Update key to force re-render of the component
    setQuizKey(Date.now());
  };

  const handleCheckAnswer = () => {
    setShowExplanation(true);
  };

  return {
    timeRemaining,
    isActive,
    hasStarted,
    quizSubmitted,
    quizKey,
    currentQuestions,
    selectedAnswers,
    currentQuestionIndex,
    results,
    showExplanation,
    handleStart,
    handleAnswerSelect,
    handleNextQuestion,
    handlePreviousQuestion,
    handleSubmitQuiz,
    handleRetake,
    handleCheckAnswer
  };
};
