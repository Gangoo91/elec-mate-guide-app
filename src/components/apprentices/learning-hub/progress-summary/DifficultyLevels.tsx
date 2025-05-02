
import React from 'react';
import { useIsMobile } from "@/hooks/use-mobile";

interface DifficultyLevelsProps {
  beginnerCount: number;
  intermediateCount: number;
  advancedCount: number;
}

const DifficultyLevels = ({ beginnerCount, intermediateCount, advancedCount }: DifficultyLevelsProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`grid ${isMobile ? 'grid-cols-3 text-xs' : 'grid-cols-3 text-sm'} gap-2 mt-2`}>
      <div className="flex flex-col items-center bg-green-500/10 text-green-500 py-1 px-2 rounded-md">
        <span>Beginner</span>
        <span className="font-semibold">{beginnerCount}</span>
      </div>
      <div className="flex flex-col items-center bg-amber-500/10 text-amber-500 py-1 px-2 rounded-md">
        <span>Intermediate</span>
        <span className="font-semibold">{intermediateCount}</span>
      </div>
      <div className="flex flex-col items-center bg-red-500/10 text-red-500 py-1 px-2 rounded-md">
        <span>Advanced</span>
        <span className="font-semibold">{advancedCount}</span>
      </div>
    </div>
  );
};

export default DifficultyLevels;
