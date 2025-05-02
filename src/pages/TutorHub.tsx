
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import TutorHubHeader from '@/components/tutors/hub/TutorHubHeader';
import TutorHubTabs from '@/components/tutors/hub/TutorHubTabs';

const TutorHub = () => {
  const [activeTab, setActiveTab] = useState('teaching');
  const navigate = useNavigate();
  const location = useLocation();
  
  // Set active tab based on current location
  useEffect(() => {
    if (location.pathname.includes('/tutors/teaching') || location.pathname.includes('/tutors/lesson') || location.pathname.includes('/tutors/demonstration')) {
      setActiveTab('teaching');
    } else if (location.pathname.includes('/tutors/student') || location.pathname.includes('/tutors/class') || location.pathname.includes('/tutors/off-the-job')) {
      setActiveTab('students');
    } else if (location.pathname.includes('/tutors/assessment') || location.pathname.includes('/tutors/grade')) {
      setActiveTab('assessments');
    }
  }, [location.pathname]);
  
  console.log("TutorHub - Component loaded, current path:", location.pathname);
  
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
