
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { SafetyQuiz } from "@/components/units/SafetyQuiz";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Level2Unit201AssessmentPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-2/201');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Unit 201 Assessment"
          description="Health and Safety in Building Services Engineering"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8">
          <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6 mb-8">
            <h3 className="text-[#FFC900] font-medium text-xl mb-4">Assessment Instructions</h3>
            <p className="text-[#FFC900]/80 mb-4">
              This assessment consists of 10 questions randomly selected from a pool of 50 questions.
              The questions cover key topics from Unit 201 - Health and Safety in Building Services Engineering.
            </p>
            <p className="text-[#FFC900]/80 mb-4">
              You will have 15 minutes to complete the assessment. Read each question carefully and select
              the most appropriate answer from the options provided.
            </p>
            <div className="bg-[#353a2c] p-4 rounded-lg">
              <p className="text-[#FFC900] font-medium">Topics covered include:</p>
              <ul className="list-disc list-inside text-[#FFC900]/80 mt-2 space-y-1">
                <li>Health and Safety Legislation</li>
                <li>Hazard Identification and Risk Assessment</li>
                <li>Safe Working Practices</li>
                <li>Electrical Safety</li>
                <li>Personal Protective Equipment</li>
                <li>Fire Safety</li>
              </ul>
            </div>
          </div>
          
          <SafetyQuiz 
            unitId="201"
            timeLimit={900} // 15 minutes
            questionsToShow={10}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Level2Unit201AssessmentPage;
