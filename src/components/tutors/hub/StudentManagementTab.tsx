
import React from 'react';
import { Users, Clock, BarChart } from "lucide-react";
import TutorHubCard from './TutorHubCard';
import { useNavigate } from 'react-router-dom';

const StudentManagementTab: React.FC<{
  onCardClick?: (path: string) => void
}> = ({ onCardClick }) => {
  const navigate = useNavigate();
  
  const handleCardClick = (path: string) => {
    console.log("StudentManagementTab - Handling card click for:", path);
    if (onCardClick) {
      onCardClick(path);
    } else {
      navigate(path);
    }
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <TutorHubCard
        title="Student Progress"
        description="Track individual and group progress"
        content="Monitor student performance through qualifications and milestones."
        icon={<BarChart className="h-6 w-6 text-primary mb-2" />}
        path="/tutors/student-progress"
        onClick={handleCardClick}
      />
      
      <TutorHubCard
        title="Off-the-Job Monitoring"
        description="Track apprentice training hours"
        content="Monitor and validate apprentices' off-the-job training hours."
        icon={<Clock className="h-6 w-6 text-primary mb-2" />}
        path="/tutors/off-the-job-monitoring"
        onClick={handleCardClick}
      />
      
      <TutorHubCard
        title="Class Management"
        description="Manage class groups and attendance"
        content="Organize student groups, track attendance, and manage timetables."
        icon={<Users className="h-6 w-6 text-primary mb-2" />}
        path="/tutors/class-management"
        onClick={handleCardClick}
      />
    </div>
  );
};

export default StudentManagementTab;
