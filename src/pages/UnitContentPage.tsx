
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { unitContent } from "@/data/unitContent";
import SectionCard from "@/components/units/SectionCard";

const UnitContentPage = () => {
  const navigate = useNavigate();
  const { unitId } = useParams<{ unitId: string }>();
  
  const extractedUnitId = unitId ? unitId.replace('unit-', '') : '';
  
  console.log("UnitContentPage - unitId:", unitId);
  console.log("UnitContentPage - extractedUnitId:", extractedUnitId);
  console.log("Available units:", Object.keys(unitContent));
  
  const currentUnit = extractedUnitId && unitContent[extractedUnitId] ? unitContent[extractedUnitId] : null;
  console.log("Current unit found:", !!currentUnit);
  
  const handleBackClick = () => {
    if (extractedUnitId && (extractedUnitId === "301" || extractedUnitId === "302" || extractedUnitId === "303" || extractedUnitId === "304" || extractedUnitId === "305" || extractedUnitId === "308")) {
      navigate('/apprentices/study-materials/city-guilds/level-3');
    } else {
      navigate('/apprentices/study-materials/city-guilds/level-2/core-units');
    }
  };

  if (!extractedUnitId || !currentUnit) {
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

  const isLevel3 = ["301", "302", "303", "304", "305", "308"].includes(extractedUnitId);

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title={`Unit ${extractedUnitId} - ${currentUnit.title}`}
          description={currentUnit.description}
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8">
          {currentUnit.sections.map((section, index) => {
            // Create section IDs in the format "1.1", "1.2", etc. to match sections202 format
            const sectionId = `${index + 1}.${index + 1}`;
            
            return (
              <SectionCard
                key={index}
                sectionId={sectionId}
                unitId={extractedUnitId}
                title={section.title}
                description={section.title}
                isLevel3={isLevel3}
              />
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};

export default UnitContentPage;
