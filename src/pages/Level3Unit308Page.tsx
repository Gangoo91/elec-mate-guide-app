
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { unit308 } from '@/data/units/unit308';
import SectionGroup from "@/components/units/level3/SectionGroup";
import { SafetyQuiz } from "@/components/units/SafetyQuiz";

const Level3Unit308Page = () => {
  const navigate = useNavigate();
  const [showQuiz, setShowQuiz] = useState(false);
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/core-units');
  };

  const handleStudySection = (id: string) => {
    navigate(`/apprentices/study-materials/city-guilds/level-3/308/${id}`);
  };

  // Structure the content into proper section groups
  const sectionGroups = [
    {
      number: '1',
      title: 'Understanding Roles in Building Services Engineering',
      sections: [
        { id: '1.1', title: 'Specialist Electrical Roles', description: 'Explore different job roles and career paths in the electrical industry' }
      ]
    },
    {
      number: '2',
      title: 'Career Pathways and Progression',
      sections: [
        { id: '2.1', title: 'Career Pathways and Progression', description: 'Understanding career progression paths in the electrical industry' }
      ]
    },
    {
      number: '3',
      title: 'Professional Bodies and Associations',
      sections: [
        { id: '3.1', title: 'Professional Bodies and Associations', description: 'Understanding industry bodies and their importance to electricians' }
      ]
    },
    {
      number: '4',
      title: 'Employer Expectations and Professional Conduct',
      sections: [
        { id: '4.1', title: 'Employer Expectations and Professional Conduct', description: 'Understanding workplace expectations and professional behavior' }
      ]
    },
    {
      number: '5',
      title: 'Health, Safety, and Legal Requirements',
      sections: [
        { id: '5.1', title: 'Health, Safety, and Legal Requirements', description: 'Understanding key legislation and safety responsibilities' }
      ]
    },
    {
      number: '6',
      title: 'Business Awareness',
      sections: [
        { id: '6.1', title: 'Business Awareness', description: 'Understanding business operations in the electrical industry' }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title={`Unit 308 - ${unit308.title}`}
          description={unit308.description}
          customBackAction={handleBackClick}
        />
        
        {showQuiz ? (
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-[#FFC900]">Unit 308 Assessment</h2>
              <button 
                onClick={() => setShowQuiz(false)}
                className="text-[#FFC900] hover:text-[#e5b700] border border-[#FFC900]/30 hover:border-[#FFC900] rounded-md px-4 py-2"
              >
                Back to Content
              </button>
            </div>
            <SafetyQuiz unitId="308" timeLimit={600} questionsToShow={10} />
          </div>
        ) : (
          <>
            <div className="mt-8 flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-[#FFC900]">Unit Content</h2>
              <button
                onClick={() => setShowQuiz(true)}
                className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700] px-4 py-2 rounded-md font-medium"
              >
                Take Assessment Quiz
              </button>
            </div>
            
            <div className="space-y-10 mt-6">
              {sectionGroups.map((group, index) => (
                <SectionGroup
                  key={index}
                  number={group.number}
                  title={group.title}
                  sections={group.sections}
                  onStudy={handleStudySection}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default Level3Unit308Page;
