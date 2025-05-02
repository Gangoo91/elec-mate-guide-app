
import React from 'react';
import { Calendar } from "lucide-react";
import TutorHubCard from './TutorHubCard';
import { useNavigate } from 'react-router-dom';

const AssessmentsTab: React.FC<{
  onCardClick?: (path: string) => void
}> = ({ onCardClick }) => {
  const navigate = useNavigate();
  
  const handleCardClick = (path: string) => {
    console.log("AssessmentsTab - Handling card click for:", path);
    if (onCardClick) {
      onCardClick(path);
    } else {
      navigate(path);
    }
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <TutorHubCard
        title="Create Assessments"
        description="Build custom tests and quizzes"
        content="Create formative and summative assessments for your students."
        path="/tutors/create-assessments"
        onClick={handleCardClick}
      />
      
      <TutorHubCard
        title="Grade Assessments"
        description="Review and mark student work"
        content="Access, review, and provide feedback on student assessments."
        path="/tutors/grade-assessments"
        onClick={handleCardClick}
      />
      
      <TutorHubCard
        title="Assessment Calendar"
        description="Schedule and manage deadlines"
        icon={<Calendar className="h-6 w-6 text-primary mb-2" />}
        content="Plan and organize assessment schedules for different student groups."
        path="/tutors/assessment-calendar"
        onClick={handleCardClick}
      />
    </div>
  );
};

export default AssessmentsTab;
