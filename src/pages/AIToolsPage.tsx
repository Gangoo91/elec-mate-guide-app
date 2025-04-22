
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/navigation/BackButton";
import AIToolsGrid from "@/components/apprentices/AIToolsGrid";

const AIToolsPage = () => {
  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <BackButton />
        <PageHeader 
          title="AI Learning Tools"
          description="Access our suite of AI-powered assistants to help with electrical diagnostics, regulatory compliance, and technical planning."
          hideBackButton={true} // Add this prop to hide the built-in back button
        />
        <div className="space-y-6">
          <AIToolsGrid />
        </div>
      </div>
    </MainLayout>
  );
};

export default AIToolsPage;
