
import React from 'react';
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/hooks/useQuiz";
import { QuizTimer } from "./quiz/QuizTimer";
import { QuizQuestion } from "./quiz/QuizQuestion";
import { Card } from "@/components/ui/card";

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
  
  const answeredQuestions = Object.keys(selectedAnswers).length;
  const totalQuestions = questions.length;

  return (
    <div className="space-y-4 px-2 md:px-0">
      <QuizTimer 
        timeRemaining={timeRemaining}
        quizSubmitted={quizSubmitted}
      />
      
      <Card className="bg-[#2a2d24] p-4 mb-4 border-[#FFC900]/20">
        <p className="text-[#FFC900] text-lg">
          Progress: {answeredQuestions} of {totalQuestions} questions answered
        </p>
      </Card>
      
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
        <div className="space-y-6">
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
        
        <div className="sticky bottom-4 mt-8 px-2 md:px-0">
          {!quizSubmitted ? (
            <Button 
              type="submit"
              className="w-full bg-[#FFC900] text-[#151812] hover:bg-[#e5b700] py-6 text-lg font-medium shadow-lg"
              disabled={answeredQuestions < totalQuestions}
            >
              {answeredQuestions < totalQuestions 
                ? `Answer all questions to submit (${totalQuestions - answeredQuestions} remaining)`
                : "Submit Quiz"
              }
            </Button>
          ) : (
            <Button 
              type="button"
              onClick={handleRetry}
              className="w-full bg-[#FFC900] text-[#151812] hover:bg-[#e5b700] py-6 text-lg font-medium shadow-lg"
            >
              Try Another Quiz
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};
