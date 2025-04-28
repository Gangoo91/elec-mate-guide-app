
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import SectionCard from "@/components/units/SectionCard";
import { unit301 } from '@/data/units/unit301';
import { unit302 } from '@/data/units/unit302';
import { unit303 } from '@/data/units/unit303';
import { unit304 } from '@/data/units/unit304';
import { unit305 } from '@/data/units/unit305';
import { unit308 } from '@/data/units/unit308';

const Level3UnitContentPage = () => {
  const { unitId } = useParams<{unitId: string}>();
  const navigate = useNavigate();
  
  // Get the unit content based on the unitId
  const getUnitContent = () => {
    switch(unitId) {
      case '301': return unit301;
      case '302': return unit302;
      case '303': return unit303;
      case '304': return unit304;
      case '305': return unit305;
      case '308': return unit308;
      default: return null;
    }
  };
  
  const unitContent = getUnitContent();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/core-units');
  };
  
  if (!unitContent) {
    return (
      <MainLayout>
        <div className="container px-4 py-8">
          <PageHeader 
            title="Unit Not Found" 
            description="Sorry, we couldn't find the content for this unit" 
            customBackAction={handleBackClick}
          />
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title={`${unitContent.title}`} 
          description={unitContent.description} 
          customBackAction={handleBackClick}
        />
        
        <div className="space-y-8 mt-8">
          {unitContent.sections.map((section, index) => (
            <div key={index} className="bg-[#22251e] rounded-lg p-6 border border-[#FFC900]/20">
              <h3 className="text-xl font-medium text-[#FFC900] mb-4">
                {section.title}
              </h3>
              <div>
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Level3UnitContentPage;
