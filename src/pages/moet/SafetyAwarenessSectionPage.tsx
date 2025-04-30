
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";
import { FormativeAssessment } from "@/components/units/FormativeAssessment";
import { safetyAwarenessSections } from "@/data/moet/safetyAwarenessSections";

const SafetyAwarenessSectionPage = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/behaviours/safety-awareness');
  };

  // Find the section by ID
  const section = safetyAwarenessSections.find(s => s.id === sectionId);

  if (!section) {
    return (
      <MainLayout>
        <div className="container px-4 py-8">
          <PageHeader 
            title="Section Not Found"
            description="The requested section could not be found"
            customBackAction={handleBackClick}
          />
          <div className="mt-8 text-center">
            <p className="text-[#FFC900]/80">
              The section you're looking for doesn't exist. Please go back and select a valid section.
            </p>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title={`${section.id} - ${section.title}`}
          description={section.description}
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          {section.content}
          
          {section.quiz && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#FFC900] mb-4">Quick Check</h3>
              <FormativeAssessment questions={section.quiz} />
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default SafetyAwarenessSectionPage;
