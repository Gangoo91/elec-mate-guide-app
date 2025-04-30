
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";
import { Button } from "@/components/ui/button";
import { FormativeAssessment } from "@/components/units/FormativeAssessment";
import { preventiveMaintenanceSections } from '@/data/units/sections/maintenance/preventiveMaintenance';

const PreventiveMaintenanceSectionPage = () => {
  const { sectionId } = useParams();
  const navigate = useNavigate();
  const [showQuiz, setShowQuiz] = useState(false);
  
  // Handle back navigation
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/maintenance-practices/preventive');
  };

  useEffect(() => {
    // If the section is the assessment section, show quiz
    if (sectionId === 'assessment') {
      setShowQuiz(true);
    }
  }, [sectionId]);

  // Get the current section data
  const currentSection = sectionId ? preventiveMaintenanceSections[sectionId] : null;
  
  if (!currentSection) {
    return (
      <MainLayout>
        <div className="container px-4 py-8">
          <PageHeader 
            title="Section Not Found"
            description="The requested section could not be found."
            customBackAction={handleBackClick}
          />
          <div className="mt-8 text-center">
            <p className="text-[#FFC900]/80 mb-6">
              Sorry, we couldn't find the section you're looking for.
            </p>
            <Button
              onClick={handleBackClick}
              className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]"
            >
              Return to Preventive Maintenance
            </Button>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title={currentSection.title}
          description={currentSection.description}
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          {currentSection.content}
          
          {sectionId === 'assessment' && (
            <div id="maintenance-quiz" className="mt-8 pt-8 border-t border-[#FFC900]/20">
              <h3 className="text-2xl font-semibold text-[#FFC900] mb-6">
                Preventive Maintenance Assessment
              </h3>
              <p className="text-[#FFC900]/80 mb-6">
                Test your understanding of preventive maintenance principles and practices.
              </p>
              <FormativeAssessment 
                questions={currentSection.questions}
                questionsToShow={5}
                unitId="maintenance"
              />
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default PreventiveMaintenanceSectionPage;
