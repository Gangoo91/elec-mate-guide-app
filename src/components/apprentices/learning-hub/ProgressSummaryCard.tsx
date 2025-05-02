
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";

// Import our new components
import OverallProgress from './progress-summary/OverallProgress';
import ActiveCoursesList from './progress-summary/ActiveCoursesList';
import StatisticsGrid from './progress-summary/StatisticsGrid';
import DifficultyLevels from './progress-summary/DifficultyLevels';

interface UnitData {
  unitNumber: string;
  title: string;
  description: string;
  path: string;
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
  onDeleteCourse?: (unitNumber: string) => void;
}

const ProgressSummaryCard = ({ units, onDeleteCourse }: ProgressSummaryCardProps) => {
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
  
  // Count units by difficulty (placeholder counts for now)
  const beginnerUnits = 0;
  const intermediateUnits = 0;
  const advancedUnits = 0;

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
          <OverallProgress 
            completedSections={completedSections}
            totalSections={totalSections}
            completionPercentage={completionPercentage}
          />
          
          {units.length > 0 && (
            <ActiveCoursesList 
              units={units}
              onDeleteCourse={onDeleteCourse}
            />
          )}
          
          <StatisticsGrid 
            activeCourses={activeCourses}
            completedSections={completedSections}
            hours={hours}
            minutes={minutes}
            completionPercentage={completionPercentage}
          />
          
          <DifficultyLevels 
            beginnerCount={beginnerUnits}
            intermediateCount={intermediateUnits}
            advancedCount={advancedUnits}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressSummaryCard;
