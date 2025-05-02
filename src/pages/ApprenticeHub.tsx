
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ApprenticeHubHeader from '@/components/apprentices/hub/ApprenticeHubHeader';
import ApprenticeHubTabs from '@/components/apprentices/hub/ApprenticeHubTabs';

const ApprenticeHub = () => {
  const [activeTab, setActiveTab] = useState('learning');
  const navigate = useNavigate();
  
  console.log("ApprenticeHub - Component loaded");
  
  const handleCardClick = (path: string) => {
    console.log("ApprenticeHub - Navigating to:", path);
    navigate(path);
  };

  return (
    <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
      <ApprenticeHubHeader />
      <ApprenticeHubTabs 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onCardClick={handleCardClick}
      />
    </div>
  );
};

export default ApprenticeHub;
