
import React from 'react';
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/hooks/useQuiz";
import { QuizTimer } from "./quiz/QuizTimer";
import { QuizQuestion } from "./quiz/QuizQuestion";

interface SafetyQuizProps {
  unitId: string;
  timeLimit: number;
}

export const SafetyQuiz = ({ timeLimit }: SafetyQuizProps) => {
  const {
    timeRemaining,
    selectedAnswers,
    setSelectedAnswers,
    quizSubmitted,
    questions,
    loading,
    handleSubmit,
    handleRetry
  } = useQuiz(timeLimit);

  if (loading) {
    return (
      <div className="text-center p-4">
        <p className="text-[#FFC900]">Loading quiz questions...</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <QuizTimer 
        timeRemaining={timeRemaining}
        quizSubmitted={quizSubmitted}
      />
      
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
        <div className="space-y-4">
          {questions.map((q) => (
            <QuizQuestion
              key={q.id}
              id={q.id}
              question={q.question}
              options={q.options}
              selectedAnswer={selectedAnswers[q.id]}
              onAnswerChange={(value) => {
                setSelectedAnswers(prev => ({
                  ...prev,
                  [q.id]: value
                }));
              }}
              disabled={quizSubmitted}
            />
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
