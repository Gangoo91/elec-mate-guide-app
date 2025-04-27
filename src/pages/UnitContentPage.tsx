
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { unitContent } from '@/data/unitContent';

const UnitContentPage = () => {
  const { unitId } = useParams<{ unitId: string }>();
  const navigate = useNavigate();
  
  // Get unit data based on unitId
  const getUnitData = () => {
    if (unitId && unitContent[unitId]) {
      return unitContent[unitId];
    } else {
      return { title: "Unit Not Found", description: "The requested unit could not be found." };
    }
  };
  
  const unit = getUnitData();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-2/core-units');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title={`Unit ${unitId} - ${unit.title || ''}`}
          description={unit.description || ''}
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h3 className="text-[#FFC900] font-medium text-xl mb-4">Unit Content</h3>
          <div className="text-[#FFC900]/70">
            {unit.sections && unit.sections.length > 0 ? (
              <div className="space-y-6">
                {unit.sections.map((section, index) => (
                  <div key={index} className="border-t border-[#FFC900]/20 pt-4 first:border-t-0 first:pt-0">
                    <h4 className="text-[#FFC900] font-medium text-lg mb-2">{section.title}</h4>
                    <div className="text-[#FFC900]/80">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>Detailed content for Unit {unitId} will be displayed here.</p>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default UnitContentPage;
