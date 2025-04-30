
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";
import SectionNavigation from "@/components/moet/SectionNavigation";
import { faultFindingSections } from "@/data/moet/faultFindingSections";
import SectionNotFound from "@/components/moet/SectionNotFound";

const FaultFindingSectionPage = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-skills/fault-finding');
  };
  
  // Get current section data
  const currentSection = faultFindingSections[sectionId || ""];
  
  if (!currentSection) {
    return <SectionNotFound handleBackClick={handleBackClick} />;
  }
  
  // Find previous and next sections for navigation
  const allSectionIds = Object.keys(faultFindingSections);
  const currentIndex = allSectionIds.indexOf(sectionId || "");
  const prevSection = currentIndex > 0 ? allSectionIds[currentIndex - 1] : null;
  const nextSection = currentIndex < allSectionIds.length - 1 ? allSectionIds[currentIndex + 1] : null;
  
  const navigateToSection = (newSectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/moet/core-skills/fault-finding/${newSectionId}`);
    window.scrollTo(0, 0);
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title={currentSection.title}
          description={`Fault Finding - ${currentSection.title}`}
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title={currentSection.title}>
            {currentSection.content}
          </LessonContent>
          
          <div className="mt-8 pt-8 border-t border-[#FFC900]/20">
            <SectionNavigation 
              prevSection={prevSection}
              nextSection={nextSection}
              navigateToSection={navigateToSection}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default FaultFindingSectionPage;
