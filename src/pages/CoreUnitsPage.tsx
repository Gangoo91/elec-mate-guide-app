
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/navigation/BackButton";
import ProgressTracker from '@/components/study/ProgressTracker';
import CoreUnitsList from '@/pages/study/nvq2/CoreUnitsList';

const CoreUnitsPage = () => {
  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <div className="mb-4">
          <BackButton />
        </div>
        
        <PageHeader 
          title="Core Units - NVQ Level 2"
          description="Essential units for NVQ Level 2 Electrical Installation"
          hideBackButton={true}
        />
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Progress Tracker */}
          <div className="mb-8">
            <ProgressTracker courseId="nvq-level-2" />
          </div>
          
          {/* Core Units List */}
          <CoreUnitsList />
        </div>
      </div>
    </MainLayout>
  );
};

export default CoreUnitsPage;
