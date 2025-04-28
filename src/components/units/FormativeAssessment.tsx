
import React, { useState, useEffect } from 'react';
import { QuestionCard } from './assessment/QuestionCard';
import { ExplanationPanel } from './assessment/ExplanationPanel';
import { ResultsView } from './assessment/ResultsView';

export interface AssessmentQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

interface FormativeAssessmentProps {
  questions: AssessmentQuestion[];
  questionsToShow?: number;
  unitId?: string;
}

export const FormativeAssessment: React.FC<FormativeAssessmentProps> = ({ 
  questions, 
  questionsToShow = 3,
  unitId
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState<AssessmentQuestion[]>([]);
  const [answeredQuestions, setAnsweredQuestions] = useState<number>(0);

  useEffect(() => {
    selectRandomQuestions();
  }, []);

  const selectRandomQuestions = () => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setCurrentQuestions(shuffled.slice(0, questionsToShow));
    setAnsweredQuestions(0);
  };

  const handleAnswerSelect = (answer: string) => {
    if (showExplanation) return;
    setSelectedAnswer(answer);
  };

  const handleCheck = () => {
    if (!selectedAnswer) return;
    setShowExplanation(true);
    
    const currentQuestion = currentQuestions[0];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    setAnsweredQuestions(prev => prev + 1);
    
    if (currentQuestions.length <= 1) {
      setCompleted(true);
    } else {
      setCurrentQuestions(prev => prev.slice(1));
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleReset = () => {
    selectRandomQuestions();
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setCompleted(false);
  };

  if (completed) {
    return (
      <ResultsView
        score={score}
        totalQuestions={questionsToShow}
        onReset={handleReset}
        unitId={unitId}
      />
    );
  }

  const currentQuestion = currentQuestions[0];

  if (!currentQuestion) {
    return <div>Loading questions...</div>;
  }

  return (
    <div className="bg-[#2a2d24] p-6 rounded-lg my-6">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg text-[#FFC900]">
          {unitId ? `Unit ${unitId} Assessment` : 'Quick Check'}
        </h4>
        <span className="text-sm text-[#FFC900]/70">
          Question {answeredQuestions + 1} of {questionsToShow}
        </span>
      </div>

      <QuestionCard
        question={currentQuestion.question}
        options={currentQuestion.options}
        selectedAnswer={selectedAnswer}
        correctAnswer={currentQuestion.correctAnswer}
        showExplanation={showExplanation}
        onAnswerSelect={handleAnswerSelect}
      />

      {showExplanation && (
        <ExplanationPanel explanation={currentQuestion.explanation} />
      )}

      <div className="flex justify-between">
        {!showExplanation ? (
          <button 
            onClick={handleCheck}
            disabled={!selectedAnswer}
            className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700] px-4 py-2 rounded disabled:bg-[#FFC900]/30"
          >
            Check Answer
          </button>
        ) : (
          <button 
            onClick={handleNext}
            className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700] px-4 py-2 rounded"
          >
            {currentQuestions.length > 1 ? "Next Question" : "See Results"}
          </button>
        )}
      </div>
    </div>
  );
};
