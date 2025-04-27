
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import MilestoneList from "@/components/apprentices/progress/MilestoneList";
import PageHeader from "@/components/layout/PageHeader";
import { useNavigate } from 'react-router-dom';

const ProgressTrackingPage = () => {
  const navigate = useNavigate();

  const handleBackNavigation = () => {
    navigate('/apprentices');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8">
        <PageHeader 
          title="Progress Tracking"
          description="Track your apprenticeship journey, milestones, and achievements"
          customBackAction={handleBackNavigation}
        />
        
        <div className="max-w-4xl mx-auto mt-6">
          <MilestoneList />
        </div>
      </div>
    </MainLayout>
  );
};

export default ProgressTrackingPage;
