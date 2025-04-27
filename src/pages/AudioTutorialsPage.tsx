
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import AudioTutorialsList from "@/components/audio/AudioTutorialsList";
import { useNavigate } from 'react-router-dom';

const AudioTutorialsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/learning-hub');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Audio Tutorials"
          description="Listen and learn from our comprehensive collection of electrical tutorials, perfect for on-the-go learning."
          customBackAction={handleBackClick}
        />
        <AudioTutorialsList />
      </div>
    </MainLayout>
  );
};

export default AudioTutorialsPage;
