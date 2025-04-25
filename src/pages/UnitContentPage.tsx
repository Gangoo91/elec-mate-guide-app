
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { ContentSection } from "@/components/units/ContentSection";
import { unitContent } from "@/data/unitContent";
import { useToast } from "@/components/ui/use-toast";

const UnitContentPage = () => {
  const navigate = useNavigate();
  const { unitId } = useParams<{ unitId: string }>();
  
  // Remove toast-related code
  
  // Extract the unit number from the URL parameter
  // This handles both formats: /unit-301 and /301
  const extractedUnitId = unitId ? unitId.replace('unit-', '') : '';
  
  console.log("UnitContentPage - unitId:", unitId);
  console.log("UnitContentPage - extractedUnitId:", extractedUnitId);
  console.log("Available units:", Object.keys(unitContent));
  
  // Get the current unit content
  const currentUnit = extractedUnitId && unitContent[extractedUnitId] ? unitContent[extractedUnitId] : null;
  console.log("Current unit found:", !!currentUnit);
  
  // Remove useEffect with toast logic
  
  const handleBackClick = () => {
    // Check if this is a level 3 unit
    if (extractedUnitId && (extractedUnitId === "301" || extractedUnitId === "302" || extractedUnitId === "303" || extractedUnitId === "304" || extractedUnitId === "305" || extractedUnitId === "308")) {
      navigate('/apprentices/study-materials/city-guilds/level-3');
    } else {
      // For level 2 units
      navigate('/apprentices/study-materials/city-guilds/level-2/core-units');
    }
  };

  if (!extractedUnitId || !currentUnit) {
    console.log("Unit not found or unitId is undefined, navigating back");
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
          title={`Unit ${extractedUnitId} - ${currentUnit.title}`}
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

