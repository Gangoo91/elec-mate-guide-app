
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";

const Level2SimplifiedPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-2');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Level 2 Simplified Learning"
          description="Easy-to-understand modules with practical examples and step-by-step guides."
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h3 className="text-[#FFC900] font-medium text-xl mb-4">Simplified Learning Content</h3>
          <p className="text-[#FFC900]/70">
            This section contains simplified explanations of complex electrical concepts,
            designed to make learning easier for Level 2 electrical apprentices.
          </p>
          <div className="mt-6">
            <p className="text-[#FFC900]/90">Content coming soon...</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Level2SimplifiedPage;
