
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
} from "@/data/units/sections/engineering";

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

  const section1 = [
    { id: '1.1', title: 'Project Planning Basics', description: 'Foundational principles of planning electrical installation projects' },
    { id: '1.2', title: 'Site Assessment', description: 'Methods for evaluating installation sites and existing conditions' },
    { id: '1.3', title: 'Technical Requirements Analysis', description: 'Defining performance specifications and standards compliance' }
  ];

  const section2 = [
    { id: '2.1', title: 'Equipment and Material Selection', description: 'Criteria for selecting appropriate components and materials' },
    { id: '2.2', title: 'Resource Planning', description: 'Managing workforce, tools, and equipment needed for installations' },
    { id: '2.3', title: 'Scheduling and Timeline Development', description: 'Creating effective project timelines and managing schedules' }
  ];

  const section3 = [
    { id: '3.1', title: 'Regulatory Compliance', description: 'Meeting legal and safety requirements for electrical installations' },
    { id: '3.2', title: 'Risk Assessment and Management', description: 'Identifying and mitigating potential risks in installation projects' },
    { id: '3.3', title: 'Quality Planning', description: 'Ensuring installation quality through planning and verification' }
  ];

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
            title="Installation Planning Fundamentals" 
            sections={section1}
            onStudy={handleStudy}
          />
          
          <SectionGroup 
            number="2" 
            title="Project Resources and Scheduling" 
            sections={section2}
            onStudy={handleStudy}
          />
          
          <SectionGroup 
            number="3" 
            title="Compliance and Quality" 
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
              Test your understanding of installation planning principles with this assessment. 
              The quiz covers key aspects of project planning, site assessment, resource management, 
              and regulatory compliance in electrical installations.
            </p>
            <SafetyQuiz 
              unitId="202"
              questionsToShow={5}
              timeLimit={300}
            />
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default InstallationPlanningPage;
