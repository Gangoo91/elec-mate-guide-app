
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";
import SectionNavigation from '@/components/moet/SectionNavigation';
import SectionNotFound from '@/components/moet/SectionNotFound';
import { powerSystemsSectionsData } from '@/data/moet/powerSystemsData';

const PowerSystemsSectionPage = () => {
  const { sectionId = "" } = useParams<{ sectionId: string }>();
  const navigate = useNavigate();
  
  // Get the section data based on the section ID
  const section = powerSystemsSectionsData[sectionId];
  
  // Get all section IDs for navigation
  const sectionKeys = Object.keys(powerSystemsSectionsData).sort();
  const currentSectionIndex = sectionKeys.indexOf(sectionId);
  const prevSection = currentSectionIndex > 0 ? sectionKeys[currentSectionIndex - 1] : null;
  const nextSection = currentSectionIndex < sectionKeys.length - 1 ? sectionKeys[currentSectionIndex + 1] : null;
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/power-systems');
  };
  
  const navigateToSection = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/power-systems/${sectionId}`);
  };

  // If section not found, display the "not found" component
  if (!section) {
    return <SectionNotFound handleBackClick={handleBackClick} />;
  }

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title={section.title}
          description={section.description || ""}
          customBackAction={handleBackClick}
        />
        <div className="mt-8">
          <div className="mb-12">
            <LessonContent title={section.title}>
              {section.content}
            </LessonContent>
          </div>
          
          <div className="mb-8">
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

export default PowerSystemsSectionPage;
