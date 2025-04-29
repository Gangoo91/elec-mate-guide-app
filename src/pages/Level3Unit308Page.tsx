
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { unit308 } from '@/data/units/unit308';
import SectionCard from "@/components/units/SectionCard";

const Level3Unit308Page = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/core-units');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title={`Unit 308 - ${unit308.title}`}
          description={unit308.description}
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h3 className="text-[#FFC900] font-medium text-xl mb-4">Unit Content</h3>
          <div className="space-y-6">
            {unit308.sections.map((section, index) => (
              <div key={index} className="border-t border-[#FFC900]/20 pt-4 first:border-t-0 first:pt-0">
                <h4 className="text-[#FFC900] font-medium text-lg mb-3">{section.title}</h4>
                <div className="text-[#FFC900]/80 space-y-2">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Level3Unit308Page;
