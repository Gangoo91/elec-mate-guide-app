
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/navigation/BackButton";
import LearningHub from "@/components/apprentices/LearningHub";

const LearningHubPage = () => {
  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <BackButton />
        <PageHeader 
          title="Learning Hub"
          description="Access comprehensive learning resources, AI assistants, and training events to support your electrical apprenticeship journey."
          hideBackButton={true}
        />
        <LearningHub />
      </div>
    </MainLayout>
  );
};

export default LearningHubPage;
