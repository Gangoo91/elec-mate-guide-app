
import React from 'react';

interface ExplanationPanelProps {
  explanation: string;
}

export const ExplanationPanel: React.FC<ExplanationPanelProps> = ({
  explanation,
}) => {
  return (
    <div className="bg-[#22251e] p-4 rounded-lg mb-6 border border-[#FFC900]/20">
      <h4 className="text-md font-medium text-[#FFC900] mb-2">Explanation</h4>
      <p className="text-[#FFC900]/80 text-sm">{explanation}</p>
    </div>
  );
};
