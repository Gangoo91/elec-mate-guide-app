
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";
import SectionNavigation from "@/components/moet/SectionNavigation";
import { electricalMaintenanceSections } from "@/data/moet/electricalMaintenanceSections";

const ElectricalMaintenanceSectionPage = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-skills/electrical-maintenance');
  };
  
  // Get current section data
  const currentSection = electricalMaintenanceSections[sectionId || ""];
  
  if (!currentSection) {
    return (
      <MainLayout>
        <div className="container px-4 py-8">
          <PageHeader 
            title="Section Not Found"
            description="The requested section could not be found"
            customBackAction={handleBackClick}
          />
          <div className="mt-8">
            <p className="text-[#FFC900]/80">
              Please return to the Electrical Maintenance page and select a valid section.
            </p>
          </div>
        </div>
      </MainLayout>
    );
  }
  
  // Find previous and next sections for navigation
  const allSectionIds = Object.keys(electricalMaintenanceSections);
  const currentIndex = allSectionIds.indexOf(sectionId || "");
  const prevSection = currentIndex > 0 ? allSectionIds[currentIndex - 1] : null;
  const nextSection = currentIndex < allSectionIds.length - 1 ? allSectionIds[currentIndex + 1] : null;
  
  const navigateToSection = (newSectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/moet/core-skills/electrical-maintenance/${newSectionId}`);
    window.scrollTo(0, 0);
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title={currentSection.title}
          description={`Electrical Maintenance - ${currentSection.title}`}
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

export default ElectricalMaintenanceSectionPage;
