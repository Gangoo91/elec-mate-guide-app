
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";
import { sections301 } from "@/data/units/sections/unit301Sections";

const SectionPage = () => {
  const { unitId, sectionId } = useParams();
  const navigate = useNavigate();
  
  const sectionContent = sections301[sectionId || ""];
  
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
