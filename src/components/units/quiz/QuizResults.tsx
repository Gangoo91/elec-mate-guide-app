
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { QuizDetailedResults } from './QuizDetailedResults';
import { AssessmentQuestion } from './types';

interface QuizResultsProps {
  score: number;
  total: number;
  onRetake: () => void;
  questions?: AssessmentQuestion[];
  userAnswers?: Record<number, string>;
}

export const QuizResults: React.FC<QuizResultsProps> = ({ 
  score, 
  total, 
  onRetake, 
  questions = [],
  userAnswers = {}
}) => {
  const percentage = Math.round((score / total) * 100);
  const [showDetailedResults, setShowDetailedResults] = useState(false);
  
  return (
    <div className="text-center py-8">
      <h3 className="text-2xl font-medium text-[#FFC900] mb-4">
        Quiz Results
      </h3>
      
      <div className="flex justify-center mb-6">
        <div className="bg-[#353a2c] rounded-full w-32 h-32 flex items-center justify-center">
          <div className="text-center">
            <p className="text-3xl font-bold text-[#FFC900]">
              {score}/{total}
            </p>
            <p className="text-[#FFC900]/70">
              {percentage}%
            </p>
          </div>
        </div>
      </div>
      
      <p className="text-[#FFC900]/80 mb-6">
        {score >= total * 0.7 
          ? "Well done! You've successfully completed this assessment." 
          : "You might want to review the unit content again and try once more."}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button
          onClick={onRetake}
          className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700] px-6 py-3 rounded font-medium"
        >
          Take Quiz Again
        </Button>
        
        {questions.length > 0 && (
          <Button
            onClick={() => setShowDetailedResults(!showDetailedResults)}
            variant="outline"
            className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10 px-6 py-3 rounded font-medium"
          >
            {showDetailedResults ? "Hide Detailed Results" : "Show Detailed Results"}
          </Button>
        )}
      </div>
      
      {showDetailedResults && questions.length > 0 && (
        <QuizDetailedResults 
          questions={questions} 
          userAnswers={userAnswers}
          score={score}
          total={total}
        />
      )}
    </div>
  );
};
