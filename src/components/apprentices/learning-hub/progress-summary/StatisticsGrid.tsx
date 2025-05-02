
import React from 'react';
import { BookOpen, Award, Clock, Trophy } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";

interface StatisticsGridProps {
  activeCourses: number;
  completedSections: number;
  hours: number;
  minutes: number;
  completionPercentage: number;
}

const StatisticsGrid = ({ activeCourses, completedSections, hours, minutes, completionPercentage }: StatisticsGridProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-4'} gap-2 mt-3`}>
      <div className="bg-[#22251e]/70 p-3 rounded-lg border border-[#FFC900]/10 flex flex-col items-center">
        <BookOpen className="h-4 w-4 mb-1 text-[#FFC900]" />
        <span className="text-xs text-[#FFC900]/70">Active</span>
        <span className="text-lg font-semibold text-[#FFC900]">{activeCourses}</span>
      </div>
      
      <div className="bg-[#22251e]/70 p-3 rounded-lg border border-[#FFC900]/10 flex flex-col items-center">
        <Award className="h-4 w-4 mb-1 text-[#FFC900]" />
        <span className="text-xs text-[#FFC900]/70">Completed</span>
        <span className="text-lg font-semibold text-[#FFC900]">{completedSections}</span>
      </div>
      
      <div className="bg-[#22251e]/70 p-3 rounded-lg border border-[#FFC900]/10 flex flex-col items-center">
        <Clock className="h-4 w-4 mb-1 text-[#FFC900]" />
        <span className="text-xs text-[#FFC900]/70">Time Spent</span>
        <span className="text-lg font-semibold text-[#FFC900]">{hours}h {minutes}m</span>
      </div>
      
      {!isMobile && (
        <div className="bg-[#22251e]/70 p-3 rounded-lg border border-[#FFC900]/10 flex flex-col items-center">
          <Trophy className="h-4 w-4 mb-1 text-[#FFC900]" />
          <span className="text-xs text-[#FFC900]/70">Progress</span>
          <span className="text-lg font-semibold text-[#FFC900]">{completionPercentage}%</span>
        </div>
      )}
    </div>
  );
};

export default StatisticsGrid;
