
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import ARLearningView from "@/components/apprentices/ARLearningView";
import BackButton from "@/components/navigation/BackButton";

const ARLearningPage = () => {
  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <div className="mb-4">
          <BackButton />
        </div>
        <PageHeader 
          title="AR Learning Experience"
          description="Explore electrical components in 3D to enhance your understanding of their structure and function."
          hideBackButton={true}
        />
        
        <div className="mt-6">
          <ARLearningView />
        </div>
      </div>
    </MainLayout>
  );
};

export default ARLearningPage;
