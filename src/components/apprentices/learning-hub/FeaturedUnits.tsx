
import React from 'react';
import UnitCard from "@/components/level2/UnitCard";

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
}

const FeaturedUnits = ({ units }: FeaturedUnitsProps) => {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-[#FFC900]">Continue Learning</h2>
        <Badge variant="outline" className="bg-[#FFC900]/10 text-[#FFC900]">
          {units.length} Active Courses
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {units.map((unit, index) => (
          <UnitCard
            key={index}
            unitNumber={unit.unitNumber}
            title={unit.title}
            description={unit.description}
            path={unit.path}
            progress={unit.progress}
            difficulty={unit.difficulty}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedUnits;

// Import for Badge
import { Badge } from "@/components/ui/badge";
