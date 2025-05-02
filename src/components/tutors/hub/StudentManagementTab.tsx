
import React from 'react';
import { CheckSquare, Users } from "lucide-react";
import TutorHubCard from './TutorHubCard';

const StudentManagementTab: React.FC<{
  onCardClick: (path: string) => void
}> = ({ onCardClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <TutorHubCard
        title="Student Progress"
        description="Track apprentice development"
        content="Monitor individual and group progress through qualifications and milestones."
        path="/tutors/student-progress"
        onClick={onCardClick}
      />
      
      <TutorHubCard
        title="Off-the-Job Hours"
        description="Monitor training requirements"
        icon={<CheckSquare className="h-6 w-6 text-primary mb-2" />}
        content="Monitor and verify apprentice off-the-job training hours and activities."
        path="/tutors/off-the-job-monitoring"
        onClick={onCardClick}
      />
      
      <TutorHubCard
        title="Class Management"
        description="Organize learning groups"
        icon={<Users className="h-6 w-6 text-primary mb-2" />}
        content="Create and manage student groups, schedule sessions and track attendance."
        path="/tutors/class-management"
        onClick={onCardClick}
      />
    </div>
  );
};

export default StudentManagementTab;
