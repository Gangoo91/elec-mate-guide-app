
import React from 'react';
import UnitCard from "@/components/level2/UnitCard";
import { Badge } from "@/components/ui/badge";
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

interface FeaturedUnitsProps {
  units: UnitData[];
  onDeleteCourse?: (unitNumber: string) => void;
}

const FeaturedUnits = ({ units, onDeleteCourse }: FeaturedUnitsProps) => {
  const isMobile = useIsMobile();
  
  if (units.length === 0) {
    return (
      <section>
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <h2 className="text-lg md:text-xl font-semibold text-[#FFC900]">Continue Learning</h2>
        </div>
        
        <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6 text-center">
          <p className="text-[#FFC900]/80">No active courses. Explore qualifications to start learning.</p>
        </div>
      </section>
    );
  }
  
  return (
    <section>
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <h2 className="text-lg md:text-xl font-semibold text-[#FFC900]">Continue Learning</h2>
        <Badge variant="outline" className="bg-[#FFC900]/10 text-[#FFC900] text-xs md:text-sm">
          {units.length} Active Courses
        </Badge>
      </div>

      <div className="grid grid-cols-1 gap-3 md:gap-4">
        {units.map((unit, index) => (
          <UnitCard
            key={index}
            unitNumber={unit.unitNumber}
            title={unit.title}
            description={isMobile ? (unit.description.length > 80 ? unit.description.substring(0, 80) + '...' : unit.description) : unit.description}
            path={unit.path}
            progress={unit.progress}
            difficulty={unit.difficulty}
            onDelete={onDeleteCourse ? () => onDeleteCourse(unit.unitNumber) : undefined}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedUnits;
