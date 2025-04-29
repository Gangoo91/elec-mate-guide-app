
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { unit308 } from '@/data/units/unit308';
import SectionGroup from "@/components/units/level3/SectionGroup";
import { SafetyQuiz } from "@/components/units/SafetyQuiz";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { careerAwarenessQuestions } from '@/data/units/sections/unit308/questions/careerAwarenessQuestions';

const Level3Unit308Page = () => {
  const navigate = useNavigate();
  const [showQuiz, setShowQuiz] = useState(false);
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/core-units');
  };

  const handleStudySection = (id: string) => {
    navigate(`/apprentices/study-materials/city-guilds/level-3/308/${id}`);
  };

  // Structure the content into proper section groups based on the provided outline
  const sectionGroups = [
    {
      number: '1',
      title: 'Understanding Roles in Building Services Engineering',
      sections: [
        { id: '1.1', title: 'Electrician and Other Roles', description: 'Learn about different electrical jobs and career paths' },
        { id: '1.2', title: 'Role Responsibilities', description: 'Understanding the responsibilities of each electrical role' }
      ]
    },
    {
      number: '2',
      title: 'Career Pathways and Progression',
      sections: [
        { id: '2.1', title: 'Career Progression Path', description: 'How to advance from apprentice to management roles' },
        { id: '2.2', title: 'Continuing Professional Development', description: 'The importance of ongoing learning and development' },
        { id: '2.3', title: 'Additional Qualifications', description: 'Key certifications to enhance your career prospects' }
      ]
    },
    {
      number: '3',
      title: 'Professional Bodies and Associations',
      sections: [
        { id: '3.1', title: 'Industry Bodies and Benefits', description: 'Understanding NICEIC, NAPIT, ECA, JIB and their importance' }
      ]
    },
    {
      number: '4',
      title: 'Professional Conduct',
      sections: [
        { id: '4.1', title: 'Professional Skills and Conduct', description: 'Key skills employers expect and professional behavior' }
      ]
    },
    {
      number: '5',
      title: 'Health, Safety, and Legal Requirements',
      sections: [
        { id: '5.1', title: 'Health and Safety at Work Act', description: 'Understanding your responsibilities under HSWA 1974' },
        { id: '5.2', title: 'Electricity at Work Regulations', description: 'Key regulations that govern electrical work safety' },
        { id: '5.3', title: 'Safe Working Practices', description: 'How to maintain safety for yourself and others' }
      ]
    },
    {
      number: '6',
      title: 'Business Awareness',
      sections: [
        { id: '6.1', title: 'Customer Service', description: 'The importance of good customer service in electrical work' },
        { id: '6.2', title: 'Financial Management', description: 'Handling payments and invoices professionally' },
        { id: '6.3', title: 'Brand Representation', description: 'Properly representing your company\'s brand' },
        { id: '6.4', title: 'Self-Employment Basics', description: 'Introduction to self-employment in the electrical industry' }
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
        
        <div className="mt-8 space-y-10">
          {/* Unit Content */}
          <div>
            <h2 className="text-2xl font-semibold text-[#FFC900] mb-6">Unit Content</h2>
            
            <div className="space-y-10">
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
          </div>
          
          {/* Assessment Quiz - positioned at the bottom */}
          <div className="mt-12 pt-6 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h2 className="text-2xl font-semibold text-[#FFC900]">Unit 308 Assessment</h2>
              <Button
                onClick={() => setShowQuiz(!showQuiz)}
                className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700] px-4 py-2 rounded-md font-medium mt-2 md:mt-0 flex items-center gap-2"
              >
                {showQuiz ? "Hide Assessment Quiz" : "Take Assessment Quiz"}
                {!showQuiz && <ArrowRight className="h-4 w-4" />}
              </Button>
            </div>
            
            {showQuiz && (
              <div className="mt-4">
                <SafetyQuiz 
                  unitId="308" 
                  timeLimit={600} 
                  questionsToShow={10}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Level3Unit308Page;
