
import React from 'react';

interface ExplanationPanelProps {
  explanation: string;
}

export const ExplanationPanel: React.FC<ExplanationPanelProps> = ({ explanation }) => (
  <div className="bg-[#353a2c] p-4 rounded-lg mb-6 animate-fade-in">
    <h5 className="text-[#FFC900] font-medium mb-2">Explanation:</h5>
    <p className="text-[#FFC900]/80 text-sm">{explanation}</p>
  </div>
);
