import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";
import { Card } from "@/components/ui/card";
import SectionGroup from "@/components/units/level3/SectionGroup";
import { SafetyQuiz } from "@/components/units/SafetyQuiz";
import {
  installationPlanningSection1_1,
  installationPlanningSection1_2,
  installationPlanningSection1_3,
  installationPlanningSection2_1,
  installationPlanningSection2_2,
  installationPlanningSection2_3,
  installationPlanningSection3_1,
  installationPlanningSection3_2,
  installationPlanningSection3_3,
  installationPlanningQuestions
} from "@/data/units/sections/engineering/installationPlanning/index";

const InstallationPlanningPage = () => {
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

  const section1 = [
    { id: '1.1', title: 'Project Planning Fundamentals', description: 'Key elements of effective project planning for electrical installations' },
    { id: '1.2', title: 'Resource Allocation', description: 'Planning labor, materials, and equipment for installation projects' },
    { id: '1.3', title: 'Risk Assessment', description: 'Identifying and mitigating potential risks in electrical installations' }
  ];

  const section2 = [
    { id: '2.1', title: 'Technical Design Considerations', description: 'System design requirements and specifications' },
    { id: '2.2', title: 'Compliance Standards', description: 'Regulatory compliance and industry standards for electrical installations' },
    { id: '2.3', title: 'Documentation Requirements', description: 'Essential documentation for installation projects' }
  ];

  const section3 = [
    { id: '3.1', title: 'Implementation Methodology', description: 'Strategies for effective installation implementation' },
    { id: '3.2', title: 'Quality Control Measures', description: 'Ensuring installation quality through verification and testing' },
    { id: '3.3', title: 'Commissioning Procedures', description: 'Steps for successful system commissioning and handover' }
  ];

  const getSelectedSectionContent = () => {
    switch (selectedSection) {
      case '1.1':
        return installationPlanningSection1_1;
      case '1.2':
        return installationPlanningSection1_2;
      case '1.3':
        return installationPlanningSection1_3;
      case '2.1':
        return installationPlanningSection2_1;
      case '2.2':
        return installationPlanningSection2_2;
      case '2.3':
        return installationPlanningSection2_3;
      case '3.1':
        return installationPlanningSection3_1;
      case '3.2':
        return installationPlanningSection3_2;
      case '3.3':
        return installationPlanningSection3_3;
      default:
        return null;
    }
  };

  const selectedContent = getSelectedSectionContent();

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Installation Planning"
          description="Planning and executing electrical installation projects"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-10">
          <SectionGroup 
            number="1" 
            title="Project Planning" 
            sections={section1}
            onStudy={handleStudy}
          />
          
          <SectionGroup 
            number="2" 
            title="Design and Compliance" 
            sections={section2}
            onStudy={handleStudy}
          />
          
          <SectionGroup 
            number="3" 
            title="Implementation and Quality Control" 
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
            <h2 className="text-2xl font-semibold text-[#FFC900] mb-6">Installation Planning Assessment</h2>
            <p className="text-[#FFC900]/80 mb-6">
              Test your understanding of installation planning principles with this assessment. 
              The quiz covers key aspects of project planning, technical design, compliance requirements, 
              and quality control in electrical installations.
            </p>
            <SafetyQuiz 
              unitId="installation-planning"
              questionsToShow={10}
              timeLimit={600}
              questions={installationPlanningQuestions}
            />
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default InstallationPlanningPage;
