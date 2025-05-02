
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import TutorHubHeader from '@/components/tutors/hub/TutorHubHeader';
import TutorHubTabs from '@/components/tutors/hub/TutorHubTabs';

const TutorHub = () => {
  const [activeTab, setActiveTab] = useState('teaching');
  const navigate = useNavigate();
  
  console.log("TutorHub - Component loaded");
  
  const handleCardClick = (path: string) => {
    console.log("TutorHub - Navigating to:", path);
    navigate(path);
  };

  return (
    <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
      <TutorHubHeader />
      <TutorHubTabs 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onCardClick={handleCardClick}
      />
    </div>
  );
};

export default TutorHub;
