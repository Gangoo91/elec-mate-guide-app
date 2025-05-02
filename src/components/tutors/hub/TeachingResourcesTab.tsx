
import React from 'react';
import { FileText, Book, Video } from "lucide-react";
import TutorHubCard from './TutorHubCard';
import { useNavigate } from 'react-router-dom';

const TeachingResourcesTab: React.FC<{
  onCardClick?: (path: string) => void
}> = ({ onCardClick }) => {
  const navigate = useNavigate();
  
  const handleCardClick = (path: string) => {
    console.log("TeachingResourcesTab - Handling card click for:", path);
    if (onCardClick) {
      onCardClick(path);
    } else {
      navigate(path);
    }
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <TutorHubCard
        title="Teaching Resources"
        description="Access materials for your classes"
        content="Find presentations, handouts, and teaching materials."
        icon={<FileText className="h-6 w-6 text-primary mb-2" />}
        path="/tutors/teaching-resources"
        onClick={handleCardClick}
      />
      
      <TutorHubCard
        title="Lesson Plans"
        description="Create and manage lesson plans"
        content="Structured guides for teaching sessions with learning objectives."
        icon={<Book className="h-6 w-6 text-primary mb-2" />}
        path="/tutors/lesson-plans"
        onClick={handleCardClick}
      />
      
      <TutorHubCard
        title="Demonstration Guides"
        description="Step-by-step practical demonstrations"
        content="Visual guides for demonstrating practical skills to students."
        icon={<Video className="h-6 w-6 text-primary mb-2" />}
        path="/tutors/demonstration-guides"
        onClick={handleCardClick}
      />
    </div>
  );
};

export default TeachingResourcesTab;
