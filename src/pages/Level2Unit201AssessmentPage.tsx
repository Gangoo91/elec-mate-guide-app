
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { SafetyQuiz } from "@/components/units/SafetyQuiz";

const Level2Unit201AssessmentPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-2/201');
  };
  
  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Unit 201 - Health and Safety Assessment"
          description="Test your knowledge of health and safety in building services engineering."
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8">
          <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
            <p className="text-[#FFC900]/80 mb-6">
              This assessment contains 10 questions randomly selected from a pool of 50 questions
              to test your understanding of health and safety concepts and practices in building
              services engineering. You'll have 10 minutes to complete the assessment.
            </p>
            
            <SafetyQuiz unitId="201" timeLimit={600} questionsToShow={10} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Level2Unit201AssessmentPage;
