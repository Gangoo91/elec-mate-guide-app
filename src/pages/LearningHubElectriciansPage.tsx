
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import BackButton from "@/components/navigation/BackButton";
import ElectriciansLearningHub from "@/components/electricians/ElectriciansLearningHub";
import PageHeader from "@/components/layout/PageHeader";

const LearningHubElectriciansPage = () => {
  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <div className="mb-4">
          <BackButton />
        </div>
        <PageHeader 
          title="Electricians Learning Hub"
          description="Access professional study materials and practice exams for continuing education and skill development."
          hideBackButton={true}
        />
        <ElectriciansLearningHub />
      </div>
    </MainLayout>
  );
};

export default LearningHubElectriciansPage;
