
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import BackButton from "@/components/navigation/BackButton";
import LearningHub from "@/components/apprentices/LearningHub";
import PageHeader from "@/components/layout/PageHeader";

const LearningHubPage = () => {
  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <div className="mb-4">
          <BackButton />
        </div>
        <PageHeader 
          title="Electrical Apprentice Learning Hub"
          description="Access UK City & Guilds and EAL qualifications, study materials, and resources for your electrical apprenticeship."
          hideBackButton={true}
        />
        <LearningHub />
      </div>
    </MainLayout>
  );
};

export default LearningHubPage;
