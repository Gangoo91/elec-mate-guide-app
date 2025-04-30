
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";
import SectionContent from "@/components/units/SectionContent";

const MOETAssessmentPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet');
  };

  const assessmentSections = [
    {
      title: "Practical Observations",
      description: "8-hour observation in real-work environment with focus on safety procedures, tool handling, and maintenance tasks",
      path: "/apprentices/study-materials/city-guilds/moet/assessment/practical-observations"
    },
    {
      title: "Technical Interviews",
      description: "Knowledge assessment, project discussion, problem-solving scenarios, and safety awareness verification",
      path: "/apprentices/study-materials/city-guilds/moet/assessment/technical-interviews"
    },
    {
      title: "Portfolio Review",
      description: "Assessment of project documentation, maintenance records, risk assessments, and personal development evidence",
      path: "/apprentices/study-materials/city-guilds/moet/assessment/portfolio-review"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="MOET End Point Assessment"
          description="Final assessment requirements and preparation guidelines"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          {assessmentSections.map((section, index) => (
            <SectionContent
              key={index}
              title={section.title}
              description={section.description}
              path={section.path}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default MOETAssessmentPage;
