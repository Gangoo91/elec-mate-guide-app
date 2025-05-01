
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, Trophy, Clock } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";

interface UnitData {
  unitNumber: string;
  title: string;
  description: string;
  path: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  progress?: {
    completed: number;
    total: number;
    timeSpent?: number;
    estimatedTime?: number;
    lastActivity?: Date;
  };
}

interface ProgressSummaryCardProps {
  units: UnitData[];
}

const ProgressSummaryCard = ({ units }: ProgressSummaryCardProps) => {
  const isMobile = useIsMobile();
  
  // Calculate overall progress statistics
  const activeCourses = units.length;
  const completedSections = units.reduce((total, unit) => total + (unit.progress?.completed || 0), 0);
  const totalSections = units.reduce((total, unit) => total + (unit.progress?.total || 0), 0);
  const completionPercentage = totalSections > 0 ? Math.round((completedSections / totalSections) * 100) : 0;
  
  // Calculate time statistics
  const totalTimeSpent = units.reduce((total, unit) => total + (unit.progress?.timeSpent || 0), 0);
  const hours = Math.floor(totalTimeSpent / 60);
  const minutes = totalTimeSpent % 60;
  
  // Count units by difficulty
  const beginnerUnits = units.filter(unit => unit.difficulty === 'beginner').length;
  const intermediateUnits = units.filter(unit => unit.difficulty === 'intermediate').length;
  const advancedUnits = units.filter(unit => unit.difficulty === 'advanced').length;

  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20 mb-4">
      <CardContent className={`${isMobile ? 'p-3' : 'p-6'}`}>
        <div className="flex items-center justify-between mb-3">
          <h2 className={`text-[#FFC900] ${isMobile ? 'text-lg' : 'text-xl'} font-semibold flex items-center gap-2`}>
            <Trophy className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} />
            Learning Progress
          </h2>
          <Badge variant="outline" className="bg-[#FFC900]/10 text-[#FFC900]">
            {activeCourses} Active Course{activeCourses !== 1 ? 's' : ''}
          </Badge>
        </div>
        
        <div className="space-y-3">
          <div>
            <div className="flex justify-between mb-1 text-sm">
              <span className="text-[#FFC900]/80">Overall Completion</span>
              <span className="text-[#FFC900]">{completedSections}/{totalSections} sections ({completionPercentage}%)</span>
            </div>
            <Progress 
              value={completionPercentage} 
              className="h-2" 
              indicatorClassName={completionPercentage > 75 ? "bg-green-500" : completionPercentage > 25 ? "bg-amber-500" : "bg-red-500"}
            />
          </div>
          
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
          
          <div className={`grid ${isMobile ? 'grid-cols-3 text-xs' : 'grid-cols-3 text-sm'} gap-2 mt-2`}>
            <div className="flex flex-col items-center bg-green-500/10 text-green-500 py-1 px-2 rounded-md">
              <span>Beginner</span>
              <span className="font-semibold">{beginnerUnits}</span>
            </div>
            <div className="flex flex-col items-center bg-amber-500/10 text-amber-500 py-1 px-2 rounded-md">
              <span>Intermediate</span>
              <span className="font-semibold">{intermediateUnits}</span>
            </div>
            <div className="flex flex-col items-center bg-red-500/10 text-red-500 py-1 px-2 rounded-md">
              <span>Advanced</span>
              <span className="font-semibold">{advancedUnits}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressSummaryCard;
