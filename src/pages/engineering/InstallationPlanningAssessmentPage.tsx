
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { SafetyQuiz } from "@/components/units/SafetyQuiz";
import { installationPlanningQuestions } from '@/data/moet/installationPlanningData';

const InstallationPlanningAssessmentPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/engineering-operations/installation-planning');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Installation Planning Assessment"
          description="Test your knowledge on electrical installation planning principles"
          customBackAction={handleBackClick}
        />
        <div className="mt-8">
          <SafetyQuiz 
            unitId="Installation Planning" 
            timeLimit={600} 
            questionsToShow={10} 
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default InstallationPlanningAssessmentPage;
