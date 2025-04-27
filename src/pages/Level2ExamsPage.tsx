
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";

const Level2ExamsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-2');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Level 2 Mock Exams"
          description="Practice assessments to help you prepare for your Level 2 qualification examinations."
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h3 className="text-[#FFC900] font-medium text-xl mb-4">Available Mock Exams</h3>
          <p className="text-[#FFC900]/70">
            Test your knowledge with our collection of mock exams designed to simulate the real Level 2 qualification exams.
          </p>
          <div className="mt-6">
            <p className="text-[#FFC900]/90">Exams coming soon...</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Level2ExamsPage;
