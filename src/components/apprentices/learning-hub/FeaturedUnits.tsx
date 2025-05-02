
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ArrowRight } from 'lucide-react';

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

interface FeaturedUnitsProps {
  units: UnitData[];
  onCardClick: (path: string) => void;
  onDeleteCourse?: (unitNumber: string) => void;
}

const FeaturedUnits = ({ units, onCardClick, onDeleteCourse }: FeaturedUnitsProps) => {
  if (units.length === 0) {
    return (
      <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6 text-center">
        <h3 className="text-[#FFC900] text-lg mb-2">No Active Courses</h3>
        <p className="text-[#FFC900]/70 mb-4">
          You haven't started any courses yet. Explore our available courses to begin your learning journey.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-[#FFC900]/90 text-lg font-medium mb-4">Continue Learning</h2>
      <div className="grid grid-cols-1 gap-4">
        {units.map((unit, index) => (
          <Card 
            key={index}
            className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer relative"
            onClick={() => onCardClick(unit.path)}
          >
            {onDeleteCourse && (
              <button 
                className="absolute top-2 right-2 text-[#FFC900]/50 hover:text-[#FFC900] z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteCourse(unit.unitNumber);
                }}
              >
                <X className="h-4 w-4" />
              </button>
            )}
            <CardContent className="p-4">
              <div className="mb-2">
                <span className="text-xs text-[#FFC900]/50">{unit.unitNumber}</span>
              </div>
              <h3 className="text-[#FFC900] font-medium mb-2">{unit.title}</h3>
              <p className="text-[#FFC900]/70 text-sm mb-4">{unit.description}</p>
              
              {unit.progress && (
                <div className="flex items-center justify-between text-sm mt-4">
                  <div className="flex items-center">
                    <div className="h-2 w-24 bg-[#FFC900]/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#FFC900]" 
                        style={{ width: `${(unit.progress.completed / unit.progress.total) * 100}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-xs text-[#FFC900]/70">
                      {unit.progress.completed}/{unit.progress.total} complete
                    </span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-[#FFC900] hover:text-[#FFC900] hover:bg-[#FFC900]/10 p-0"
                  >
                    <span className="mr-1">Continue</span>
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedUnits;
