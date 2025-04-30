
import React from 'react';
import { QuizTimer } from './quiz/QuizTimer';
import { QuizQuestion } from './quiz/QuizQuestion';
import { QuizIntroduction } from './quiz/QuizIntroduction';
import { QuizResults } from './quiz/QuizResults';
import { QuizExplanation } from './quiz/QuizExplanation';
import { QuizNavigation } from './quiz/QuizNavigation';
import { QuizProgressHeader } from './quiz/QuizProgressHeader';
import { QuizProps } from './quiz/types';
import { useQuizState } from './quiz/useQuizState';

export const SafetyQuiz: React.FC<QuizProps> = ({ 
  unitId, 
  timeLimit = 600,
  questionsToShow = 10,
  questions
}) => {
  const {
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
  } = useQuizState(unitId, timeLimit, questionsToShow, questions);

  const currentQuestion = currentQuestions[currentQuestionIndex];

  return (
    <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6" key={quizKey}>
      {!hasStarted ? (
        <QuizIntroduction 
          unitId={unitId}
          questionsToShow={questionsToShow}
          timeLimit={timeLimit}
          onStart={handleStart}
        />
      ) : (
        <>
          {isActive && !quizSubmitted && (
            <QuizTimer 
              timeRemaining={timeRemaining}
              quizSubmitted={quizSubmitted}
              timeLimit={timeLimit}
            />
          )}
          
          {!quizSubmitted && currentQuestion && (
            <div className="mb-8">
              <QuizProgressHeader 
                currentQuestionIndex={currentQuestionIndex}
                totalQuestions={currentQuestions.length}
                answeredCount={Object.keys(selectedAnswers).length}
              />
              
              <QuizQuestion
                id={`${currentQuestionIndex}`}
                question={currentQuestion.question}
                options={currentQuestion.options}
                selectedAnswer={selectedAnswers[currentQuestionIndex]}
                onAnswerChange={(answer) => handleAnswerSelect(currentQuestionIndex, answer)}
                disabled={showExplanation}
              />
              
              {showExplanation && (
                <QuizExplanation
                  selectedAnswer={selectedAnswers[currentQuestionIndex]}
                  correctAnswer={currentQuestion.correctAnswer}
                  explanation={currentQuestion.explanation}
                />
              )}
              
              <QuizNavigation 
                currentQuestionIndex={currentQuestionIndex}
                totalQuestions={currentQuestions.length}
                onPrevious={handlePreviousQuestion}
                onNext={handleNextQuestion}
                onCheck={handleCheckAnswer}
                onSubmit={handleSubmitQuiz}
                showExplanation={showExplanation}
                hasSelectedAnswer={!!selectedAnswers[currentQuestionIndex]}
              />
            </div>
          )}
          
          {quizSubmitted && results && (
            <QuizResults 
              score={results.score}
              total={results.total}
              onRetake={handleRetake}
              questions={currentQuestions}
              userAnswers={selectedAnswers}
            />
          )}
        </>
      )}
    </div>
  );
};
