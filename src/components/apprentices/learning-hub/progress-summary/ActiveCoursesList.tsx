
import React from 'react';
import CourseProgressItem from './CourseProgressItem';

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

interface ActiveCoursesListProps {
  units: UnitData[];
  onDeleteCourse?: (unitNumber: string) => void;
}

const ActiveCoursesList = ({ units, onDeleteCourse }: ActiveCoursesListProps) => {
  if (units.length === 0) {
    return null;
  }
  
  return (
    <div className="mt-4 space-y-2">
      <h3 className="text-[#FFC900]/90 text-sm font-medium">Active Courses:</h3>
      <div className="space-y-2">
        {units.map((unit, index) => (
          <CourseProgressItem 
            key={index} 
            unit={unit} 
            onDelete={onDeleteCourse}
          />
        ))}
      </div>
    </div>
  );
};

export default ActiveCoursesList;
