
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { SafetyQuiz } from "@/components/units/SafetyQuiz";

const Level3Unit305AssessmentPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/305');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Unit 305 Assessment - Electrical Systems Design" 
          description="Test your knowledge of electrical systems design concepts and methodologies." 
          customBackAction={handleBackClick}
        />
        
        <SafetyQuiz 
          unitId="305"
          timeLimit={1800} // 30 minutes
          questionsToShow={15}
        />
      </div>
    </MainLayout>
  );
};

export default Level3Unit305AssessmentPage;
