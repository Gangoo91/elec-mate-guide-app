import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";
import { Card } from "@/components/ui/card";
import SectionGroup from "@/components/units/level3/SectionGroup";
import { SafetyQuiz } from "@/components/units/SafetyQuiz";
import {
  systemOperationsSection1_1,
  systemOperationsSection1_2,
  systemOperationsSection1_3,
  systemOperationsSection2_1,
  systemOperationsSection2_2,
  systemOperationsSection2_3,
  systemOperationsSection3_1,
  systemOperationsSection3_2,
  systemOperationsSection3_3,
  systemOperationsQuestions
} from "@/data/units/sections/engineering";

const SystemOperationsPage = () => {
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/engineering-operations');
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
        return systemOperationsSection1_1;
      case '1.2':
        return systemOperationsSection1_2;
      case '1.3':
        return systemOperationsSection1_3;
      case '2.1':
        return systemOperationsSection2_1;
      case '2.2':
        return systemOperationsSection2_2;
      case '2.3':
        return systemOperationsSection2_3;
      case '3.1':
        return systemOperationsSection3_1;
      case '3.2':
        return systemOperationsSection3_2;
      case '3.3':
        return systemOperationsSection3_3;
      default:
        return null;
    }
  };

  const section1 = [
    { id: '1.1', title: 'System Operations Overview', description: 'Key principles and aspects of electrical system operations' },
    { id: '1.2', title: 'Control Systems', description: 'Types and components of electrical control systems' },
    { id: '1.3', title: 'Monitoring Systems', description: 'Technologies and methods for system parameter monitoring' }
  ];

  const section2 = [
    { id: '2.1', title: 'Power System Operations', description: 'Management of electrical power generation and transmission' },
    { id: '2.2', title: 'Distribution System Operations', description: 'Operating networks for delivering power to consumers' },
    { id: '2.3', title: 'Industrial System Operations', description: 'Managing electrical systems in industrial environments' }
  ];

  const section3 = [
    { id: '3.1', title: 'Operational Safety Procedures', description: 'Protocols for safe operation and maintenance of systems' },
    { id: '3.2', title: 'Emergency Response', description: 'Procedures for addressing unexpected events and failures' },
    { id: '3.3', title: 'Operational Efficiency', description: 'Strategies for optimizing system performance and energy use' }
  ];

  const selectedContent = getSelectedSectionContent();

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="System Operations"
          description="Principles and practices of electrical system operation and management"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-10">
          <SectionGroup 
            number="1" 
            title="Fundamentals of System Operations" 
            sections={section1}
            onStudy={handleStudy}
          />
          
          <SectionGroup 
            number="2" 
            title="Types of Operational Systems" 
            sections={section2}
            onStudy={handleStudy}
          />
          
          <SectionGroup 
            number="3" 
            title="Operational Practices" 
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
              Test your understanding of system operations principles with this assessment. 
              The quiz covers key aspects of control systems, monitoring, safety procedures, 
              and operational efficiency in electrical systems.
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

export default SystemOperationsPage;
