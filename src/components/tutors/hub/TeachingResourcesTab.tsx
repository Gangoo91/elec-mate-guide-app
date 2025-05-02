
import React from 'react';
import { GraduationCap, School, BookOpen } from "lucide-react";
import TutorHubCard from './TutorHubCard';

const TeachingResourcesTab: React.FC<{
  onCardClick: (path: string) => void
}> = ({ onCardClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <TutorHubCard
        title="Teaching Resources"
        description="Access curriculum materials"
        icon={<GraduationCap className="h-6 w-6 text-primary mb-2" />}
        content="Access your teaching materials, lesson plans, and presentation slides."
        path="/tutors/teaching-resources"
        onClick={onCardClick}
      />
      
      <TutorHubCard
        title="Lesson Plans"
        description="Structured teaching guides"
        icon={<School className="h-6 w-6 text-primary mb-2" />}
        content="Access and customize lesson plans for Level 2 and Level 3 qualifications."
        path="/tutors/lesson-plans"
        onClick={onCardClick}
      />
      
      <TutorHubCard
        title="Demonstration Guides"
        description="Practical teaching aids"
        icon={<BookOpen className="h-6 w-6 text-primary mb-2" />}
        content="Step-by-step guides for demonstrating electrical concepts and techniques."
        path="/tutors/demonstration-guides"
        onClick={onCardClick}
      />
    </div>
  );
};

export default TeachingResourcesTab;
