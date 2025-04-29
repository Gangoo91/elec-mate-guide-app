
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
    // For demo purposes, just select a few random questions
    // In a real application, you would filter based on question tags or categories
    const shuffled = [...careerAwarenessQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
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
