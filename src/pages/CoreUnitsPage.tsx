
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/navigation/BackButton";
import CoreUnitsUnits from "@/pages/study/nvq2/CoreUnitsUnits";

const CoreUnitsPage = () => {
  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <div className="mb-4">
          <BackButton />
        </div>
        
        <PageHeader 
          title="NVQ Level 2 Core Units"
          description="Master the fundamentals with interactive lessons, quizzes, and video content"
          hideBackButton={true}
        />

        <CoreUnitsUnits />
      </div>
    </MainLayout>
  );
};

export default CoreUnitsPage;
