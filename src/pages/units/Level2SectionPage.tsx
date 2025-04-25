
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";
import { sections202 } from "@/data/units/sections/unit202Sections";
import { sections203 } from "@/data/units/sections/unit203Sections";
import { sections204 } from "@/data/units/sections/unit204Sections";
import { sections210 } from "@/data/units/sections/unit210Sections";

const Level2SectionPage = () => {
  const { unitId, sectionId } = useParams();
  const navigate = useNavigate();
  
  // Get the appropriate sections based on the unitId
  const getSectionContent = () => {
    if (!unitId || !sectionId) return null;
    
    switch (unitId) {
      case "202":
        return sections202[sectionId];
      case "203":
        return sections203[sectionId];
      case "204":
        return sections204[sectionId];
      case "210":
        return sections210[sectionId];
      default:
        return null;
    }
  };
  
  const sectionContent = getSectionContent();
  
  const handleBackClick = () => {
    if (unitId) {
      navigate(`/apprentices/study-materials/city-guilds/level-2/core-units/${unitId}`);
    } else {
      navigate('/apprentices/study-materials/city-guilds/level-2/core-units');
    }
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

export default Level2SectionPage;
