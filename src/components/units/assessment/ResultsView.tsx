
import React from 'react';

interface ResultsViewProps {
  score: number;
  totalQuestions: number;
  onReset: () => void;
  unitId?: string;
}

export const ResultsView: React.FC<ResultsViewProps> = ({ score, totalQuestions, onReset, unitId }) => (
  <div className="bg-[#2a2d24] p-6 rounded-lg my-6">
    <h4 className="text-xl text-[#FFC900] mb-4">Assessment Complete!</h4>
    <p className="text-[#FFC900]/80 mb-6">
      You scored {score} out of {totalQuestions}.
      {score === totalQuestions 
        ? " Perfect! You've mastered this concept."
        : score > totalQuestions / 2
          ? " Good job! Review the questions you missed to improve your understanding."
          : " You might want to review this section again to strengthen your knowledge."}
    </p>
    <button 
      onClick={onReset}
      className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700] px-4 py-2 rounded"
    >
      {unitId ? "Try Again" : "Try New Questions"}
    </button>
  </div>
);
