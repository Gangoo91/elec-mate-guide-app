
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { sections308 } from '@/data/units/sections/unit308';
import { FormativeAssessment } from "@/components/units/FormativeAssessment";
import { careerAwarenessQuestions } from '@/data/units/sections/unit308/questions/careerAwarenessQuestions';

const Unit308SectionPage = () => {
  const { sectionId = '1.1' } = useParams<{ sectionId: string }>();
  const navigate = useNavigate();
  
  const section = sections308[sectionId];
  
  if (!section) {
    navigate('/apprentices/study-materials/city-guilds/level-3/308');
    return null;
  }
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/308');
  };

  // Filter questions relevant to this section
  const getRelevantQuestions = () => {
    const sectionNumber = sectionId.split('.')[0]; // Extract the main section number (e.g., "1" from "1.1")
    
    // For demo purposes, filter questions based on section
    return careerAwarenessQuestions.filter((question) => {
      // Select questions that have keywords matching the current section
      const questionText = question.question.toLowerCase();
      
      switch (sectionNumber) {
        case '1': // Roles
          return questionText.includes('role') || questionText.includes('electrician') || 
                 questionText.includes('responsibilities') || questionText.includes('manager');
        case '2': // Career Pathways
          return questionText.includes('career') || questionText.includes('cpd') || 
                 questionText.includes('qualification') || questionText.includes('progression');
        case '3': // Professional Bodies
          return questionText.includes('niceic') || questionText.includes('napit') || 
                 questionText.includes('eca') || questionText.includes('jib') || 
                 questionText.includes('professional bod') || questionText.includes('registration');
        case '4': // Employer Expectations
          return questionText.includes('professional') || questionText.includes('conduct') || 
                 questionText.includes('communication') || questionText.includes('customer');
        case '5': // Health and Safety
          return questionText.includes('health and safety') || questionText.includes('regulations') || 
                 questionText.includes('electricity at work') || questionText.includes('risk');
        case '6': // Business Awareness
          return questionText.includes('business') || questionText.includes('invoice') || 
                 questionText.includes('payment') || questionText.includes('customer service') ||
                 questionText.includes('brand') || questionText.includes('self-employ');
        default:
          return true;
      }
    }).slice(0, 10); // Get first 10 matching questions
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title={section.title}
          description={section.description}
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8">
          {section.content}
          
          <div className="mt-10">
            <h3 className="text-xl text-[#FFC900] font-medium mb-4">Knowledge Check</h3>
            <FormativeAssessment 
              questions={getRelevantQuestions()}
              questionsToShow={3}
              unitId="308"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Unit308SectionPage;
