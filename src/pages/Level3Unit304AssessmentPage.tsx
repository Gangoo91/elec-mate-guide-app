
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { SafetyQuiz } from "@/components/units/SafetyQuiz";

const Level3Unit304AssessmentPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/304');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Unit 304 Assessment"
          description="Testing your knowledge of electrical inspection, testing and commissioning"
          customBackAction={handleBackClick}
        />
        
        <Card className="bg-[#22251e] border-[#FFC900]/20 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-[#FFC900] mb-4">Assessment Instructions</h2>
            <div className="text-[#FFC900]/80 space-y-4">
              <p>
                This assessment tests your understanding of electrical inspection, testing and commissioning 
                procedures according to BS 7671 regulations.
              </p>
              <p>
                You will have 30 minutes to complete the assessment. Answer all questions to the best of 
                your ability. A score of 70% or higher is required to pass.
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Answer each question carefully</li>
                <li>Read all options before selecting your answer</li>
                <li>Some questions may have multiple correct answers</li>
                <li>You can review your answers before submitting</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-8">
          <SafetyQuiz unitId="304" timeLimit={1800} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Level3Unit304AssessmentPage;
