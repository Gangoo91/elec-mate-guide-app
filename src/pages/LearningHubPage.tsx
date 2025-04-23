
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import BackButton from "@/components/navigation/BackButton";
import LearningHub from "@/components/apprentices/LearningHub";

const LearningHubPage = () => {
  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8">
        <BackButton />
        <LearningHub />
      </div>
    </MainLayout>
  );
};

export default LearningHubPage;
