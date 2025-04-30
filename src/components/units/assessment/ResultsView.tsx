
import React from 'react';
import { Button } from '@/components/ui/button';

interface ResultsViewProps {
  score: number;
  totalQuestions: number;
  onReset: () => void;
  unitId?: string;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  score,
  totalQuestions,
  onReset,
  unitId
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  return (
    <div className="text-center py-6">
      <h3 className="text-xl font-semibold text-[#FFC900] mb-4">
        Assessment Complete
      </h3>
      
      <div className="flex justify-center mb-6">
        <div className="bg-[#353a2c] rounded-full w-28 h-28 flex items-center justify-center">
          <div className="text-center">
            <p className="text-2xl font-bold text-[#FFC900]">
              {score}/{totalQuestions}
            </p>
            <p className="text-[#FFC900]/70">
              {percentage}%
            </p>
          </div>
        </div>
      </div>
      
      <p className="text-[#FFC900]/80 mb-6">
        {percentage >= 70 
          ? "Well done! You've successfully completed this assessment." 
          : "You might want to review the content again and try once more."}
      </p>
      
      <div className="flex justify-center">
        <Button
          onClick={onReset}
          className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700] px-6 py-3 rounded font-medium"
        >
          Take Quiz Again
        </Button>
      </div>
    </div>
  );
};
