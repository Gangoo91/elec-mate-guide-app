
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";
import { Card } from "@/components/ui/card";
import SectionGroup from "@/components/units/level3/SectionGroup";
import { SafetyQuiz } from "@/components/units/SafetyQuiz";
import {
  safetySection1_1,
  safetySection1_2,
  safetySection1_3,
  safetySection2_1,
  safetySection2_2,
  safetySection2_3,
  safetySection3_1,
  safetySection3_2,
  safetySection3_3,
  safetyQuestions
} from "@/data/units/sections/maintenance/safetyProtocols";

const SafetyProtocolsPage = () => {
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/maintenance-practices');
  };

  const handleStudy = (sectionId: string) => {
    setSelectedSection(sectionId);
    // Scroll to the content section
    setTimeout(() => {
      const element = document.getElementById('content-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const getSelectedSectionContent = () => {
    switch (selectedSection) {
      case '1.1':
        return safetySection1_1;
      case '1.2':
        return safetySection1_2;
      case '1.3':
        return safetySection1_3;
      case '2.1':
        return safetySection2_1;
      case '2.2':
        return safetySection2_2;
      case '2.3':
        return safetySection2_3;
      case '3.1':
        return safetySection3_1;
      case '3.2':
        return safetySection3_2;
      case '3.3':
        return safetySection3_3;
      default:
        return null;
    }
  };

  const section1 = [
    { id: '1.1', title: 'General Safety Principles', description: 'Understanding the fundamental principles of electrical safety' },
    { id: '1.2', title: 'Risk Assessment Process', description: 'Systematic approach to identifying and mitigating electrical hazards' },
    { id: '1.3', title: 'Regulatory Framework', description: 'Understanding the legal requirements for electrical safety' }
  ];

  const section2 = [
    { id: '2.1', title: 'Safe Isolation Procedures', description: 'Ensuring electrical equipment is safely disconnected before work begins' },
    { id: '2.2', title: 'Lock-Out/Tag-Out (LOTO) Systems', description: 'Preventing accidental energization of equipment during maintenance' },
    { id: '2.3', title: 'Working Near Live Equipment', description: 'Safety measures when complete isolation is not possible' }
  ];

  const section3 = [
    { id: '3.1', title: 'Personal Protective Equipment (PPE)', description: 'Essential protective gear for electrical maintenance' },
    { id: '3.2', title: 'Electrical Test Equipment', description: 'Proper use and maintenance of testing tools' },
    { id: '3.3', title: 'Emergency Response', description: 'Procedures for electrical accidents and incidents' }
  ];

  const selectedContent = getSelectedSectionContent();

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Safety Protocols"
          description="Essential safety procedures and regulations in electrical maintenance"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-10">
          <SectionGroup 
            number="1" 
            title="Safety Fundamentals" 
            sections={section1}
            onStudy={handleStudy}
          />
          
          <SectionGroup 
            number="2" 
            title="Safe Working Practices" 
            sections={section2}
            onStudy={handleStudy}
          />
          
          <SectionGroup 
            number="3" 
            title="Equipment and Emergency Response" 
            sections={section3}
            onStudy={handleStudy}
          />
          
          {selectedSection && selectedContent && (
            <div id="content-section" className="pt-4">
              <LessonContent title={selectedContent.title}>
                {selectedContent.content}
              </LessonContent>
            </div>
          )}
          
          <Card className="bg-[#22251e] border-[#FFC900]/20 p-6">
            <h2 className="text-2xl font-semibold text-[#FFC900] mb-6">Knowledge Assessment</h2>
            <p className="text-[#FFC900]/80 mb-6">
              Test your understanding of electrical safety protocols with this assessment. 
              The quiz covers key aspects of safety principles, safe working practices, 
              equipment usage, and emergency procedures.
            </p>
            <SafetyQuiz 
              unitId="201"
              questionsToShow={5}
              timeLimit={300}
            />
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default SafetyProtocolsPage;
