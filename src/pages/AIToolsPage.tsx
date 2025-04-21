
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import AILearningTools from "@/components/apprentices/AILearningTools";
import BackButton from "@/components/navigation/BackButton";

const AIToolsPage = () => {
  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <BackButton />
        <PageHeader 
          title="AI Learning Tools"
          description="Access our AI-powered assistants to help with technical diagnostics and regulatory compliance."
          hideBackButton={true} // Add this prop to hide the built-in back button
        />
        <div className="space-y-6">
          <AILearningTools />
        </div>
      </div>
    </MainLayout>
  );
};

export default AIToolsPage;
