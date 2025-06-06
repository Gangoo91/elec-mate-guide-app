
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { SafetyQuiz } from "@/components/units/SafetyQuiz";

const Level3Unit301AssessmentPage = () => {
  const navigate = useNavigate();
  
  // Add custom back navigation function
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/301');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Unit 301 Assessment"
          description="Test your knowledge of Environmental Technology Systems"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-[#FFC900] mb-4">Environmental Technology Assessment</h2>
              <p className="text-[#FFC900]/80 mb-6">
                This assessment will test your understanding of renewable energy technologies, sustainability principles, and environmental considerations in electrical installations. The questions are randomly selected from a pool of 50 questions to ensure a fresh experience each time.
              </p>
              <SafetyQuiz unitId="301" timeLimit={900} questionsToShow={10} />
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Level3Unit301AssessmentPage;

