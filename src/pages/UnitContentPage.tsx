
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { ContentSection } from "@/components/units/ContentSection";
import { unitContent } from "@/data/unitContent";

const UnitContentPage = () => {
  const navigate = useNavigate();
  const { unitId } = useParams<{ unitId: string }>();
  
  const currentUnit = unitContent[unitId || ""];
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-2/core-units');
  };

  if (!currentUnit) {
    return (
      <MainLayout>
        <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
          <PageHeader 
            title="Unit Not Found"
            description="Sorry, we couldn't find content for this unit"
            customBackAction={handleBackClick}
          />
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title={`Unit ${unitId} - ${currentUnit.title}`}
          description={currentUnit.description}
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8">
          {currentUnit.sections.map((section, index) => (
            <ContentSection 
              key={index} 
              title={section.title} 
              content={section.content} 
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default UnitContentPage;
