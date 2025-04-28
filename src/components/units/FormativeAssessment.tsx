
import React, { useState, useEffect } from 'react';

interface AssessmentQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

interface FormativeAssessmentProps {
  questions: AssessmentQuestion[];
  questionsToShow?: number;
}

export const FormativeAssessment = ({ questions, questionsToShow = 3 }: FormativeAssessmentProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState<AssessmentQuestion[]>([]);

  useEffect(() => {
    // Randomly select questions when the component mounts
    selectRandomQuestions();
  }, []);

  const selectRandomQuestions = () => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setCurrentQuestions(shuffled.slice(0, questionsToShow));
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
      <div className="bg-[#2a2d24] p-6 rounded-lg my-6">
        <h4 className="text-xl text-[#FFC900] mb-4">Assessment Complete!</h4>
        <p className="text-[#FFC900]/80 mb-6">
          You scored {score} out of {questionsToShow}.
          {score === questionsToShow 
            ? " Perfect! You've mastered this concept."
            : score > questionsToShow / 2
              ? " Good job! Review the questions you missed to improve your understanding."
              : " You might want to review this section again to strengthen your knowledge."}
        </p>
        <button 
          onClick={handleReset}
          className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700] px-4 py-2 rounded"
        >
          Try New Questions
        </button>
      </div>
    );
  }

  const currentQuestion = currentQuestions[0];

  if (!currentQuestion) {
    return <div>Loading questions...</div>;
  }

  return (
    <div className="bg-[#2a2d24] p-6 rounded-lg my-6">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg text-[#FFC900]">Quick Check</h4>
        <span className="text-sm text-[#FFC900]/70">
          Question {questionsToShow - currentQuestions.length + 1} of {questionsToShow}
        </span>
      </div>

      <p className="text-[#FFC900]/90 mb-4">{currentQuestion.question}</p>

      <div className="space-y-3 mb-6">
        {currentQuestion.options.map((option, index) => (
          <div 
            key={index}
            className={`p-3 rounded-lg cursor-pointer border transition-colors ${
              selectedAnswer === option 
                ? showExplanation 
                  ? option === currentQuestion.correctAnswer 
                    ? "bg-green-900/20 border-green-500/50" 
                    : "bg-red-900/20 border-red-500/50"
                  : "bg-[#353a2c] border-[#FFC900]/50" 
                : "bg-[#22251e] border-[#FFC900]/20 hover:bg-[#353a2c]"
            }`}
            onClick={() => handleAnswerSelect(option)}
          >
            <p className="text-[#FFC900]/80">{option}</p>
          </div>
        ))}
      </div>

      {showExplanation && (
        <div className="bg-[#353a2c] p-4 rounded-lg mb-6 animate-fade-in">
          <h5 className="text-[#FFC900] font-medium mb-2">Explanation:</h5>
          <p className="text-[#FFC900]/80 text-sm">{currentQuestion.explanation}</p>
        </div>
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
