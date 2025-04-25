
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";
import { sections301 } from "@/data/units/sections/unit301Sections";
import { sections302 } from "@/data/units/sections/unit302Sections";
import { sections303 } from "@/data/units/sections/unit303Sections";
import { sections304 } from "@/data/units/sections/unit304Sections";
import { sections305 } from "@/data/units/sections/unit305Sections";
import { sections308 } from "@/data/units/sections/unit308Sections";

const SectionPage = () => {
  const { unitId, sectionId } = useParams();
  const navigate = useNavigate();
  
  // Get the appropriate sections based on the unitId
  const getSectionContent = () => {
    if (!unitId || !sectionId) return null;
    
    switch (unitId) {
      case "301":
        return sections301[sectionId];
      case "302":
        return sections302[sectionId];
      case "303":
        return sections303[sectionId];
      case "304":
        return sections304[sectionId];
      case "305":
        return sections305[sectionId];
      case "308":
        return sections308[sectionId];
      default:
        return null;
    }
  };
  
  const sectionContent = getSectionContent();
  
  const handleBackClick = () => {
    navigate(`/apprentices/study-materials/city-guilds/level-3/${unitId}`);
  };

  if (!sectionContent) {
    return (
      <MainLayout>
        <div className="container px-4 py-8">
          <PageHeader 
            title="Section Not Found"
            description="Sorry, we couldn't find the content for this section"
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
          title={sectionContent.title}
          description={sectionContent.description}
          customBackAction={handleBackClick}
        />
        <div className="mt-8">
          <LessonContent title="Learning Content">
            {sectionContent.content}
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default SectionPage;
