
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { SafetyQuiz } from "@/components/units/SafetyQuiz";

const Level3Unit303AssessmentPage = () => {
  const navigate = useNavigate();
  
  // Add custom back navigation function
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/303');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Unit 303 Assessment"
          description="Test your knowledge of Electrical Fault Diagnosis and Rectification"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-[#FFC900] mb-4">Fault Diagnosis Assessment</h2>
              <p className="text-[#FFC900]/80 mb-6">
                This assessment will test your understanding of electrical fault diagnosis techniques,
                common electrical faults, and fault rectification procedures. The questions are
                randomly selected from a pool of 50 questions to ensure a fresh experience each time.
              </p>
              <SafetyQuiz unitId="303" timeLimit={900} questionsToShow={10} />
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Level3Unit303AssessmentPage;
