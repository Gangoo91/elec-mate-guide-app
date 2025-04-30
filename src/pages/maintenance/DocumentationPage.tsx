
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";
import { Card } from "@/components/ui/card";
import SectionGroup from "@/components/units/level3/SectionGroup";
import { SafetyQuiz } from "@/components/units/SafetyQuiz";
import {
  documentationSection1_1,
  documentationSection1_2,
  documentationSection1_3,
  documentationSection2_1,
  documentationSection2_2,
  documentationSection2_3,
  documentationSection3_1,
  documentationSection3_2,
  documentationSection3_3,
  documentationQuestions
} from "@/data/units/sections/maintenance/documentation";

const DocumentationPage = () => {
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
        return documentationSection1_1;
      case '1.2':
        return documentationSection1_2;
      case '1.3':
        return documentationSection1_3;
      case '2.1':
        return documentationSection2_1;
      case '2.2':
        return documentationSection2_2;
      case '2.3':
        return documentationSection2_3;
      case '3.1':
        return documentationSection3_1;
      case '3.2':
        return documentationSection3_2;
      case '3.3':
        return documentationSection3_3;
      default:
        return null;
    }
  };

  const section1 = [
    { id: '1.1', title: 'Purpose of Documentation', description: 'Understanding why proper documentation is essential in electrical maintenance' },
    { id: '1.2', title: 'Regulatory Requirements', description: 'Legal and industry standards for maintenance documentation' },
    { id: '1.3', title: 'Document Management Systems', description: 'Tools and processes for organizing maintenance records' }
  ];

  const section2 = [
    { id: '2.1', title: 'Maintenance Logs', description: 'Creating and maintaining detailed records of maintenance activities' },
    { id: '2.2', title: 'Inspection Reports', description: 'Documenting findings from regular equipment inspections' },
    { id: '2.3', title: 'Failure Analysis Reports', description: 'Recording equipment failures and implementing corrective actions' }
  ];

  const section3 = [
    { id: '3.1', title: 'Digital Documentation', description: 'Modern software solutions for maintenance record-keeping' },
    { id: '3.2', title: 'Documentation Best Practices', description: 'Standards for creating clear, accurate, and useful records' },
    { id: '3.3', title: 'Using Documentation for Improvement', description: 'Analyzing records to enhance maintenance strategies' }
  ];

  const selectedContent = getSelectedSectionContent();

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Documentation"
          description="Maintenance records, reports, and documentation procedures"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-10">
          <SectionGroup 
            number="1" 
            title="Documentation Fundamentals" 
            sections={section1}
            onStudy={handleStudy}
          />
          
          <SectionGroup 
            number="2" 
            title="Types of Maintenance Documentation" 
            sections={section2}
            onStudy={handleStudy}
          />
          
          <SectionGroup 
            number="3" 
            title="Modern Documentation Approaches" 
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
              Test your understanding of maintenance documentation principles with this assessment. 
              The quiz covers key aspects of documentation purposes, types, best practices, and 
              regulatory requirements.
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

export default DocumentationPage;
