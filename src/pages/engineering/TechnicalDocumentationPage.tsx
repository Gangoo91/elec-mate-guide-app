
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";
import { Card } from "@/components/ui/card";
import SectionGroup from "@/components/units/level3/SectionGroup";
import { SafetyQuiz } from "@/components/units/SafetyQuiz";
import {
  technicalDocumentationSection1_1,
  technicalDocumentationSection1_2,
  technicalDocumentationSection1_3,
  technicalDocumentationSection2_1,
  technicalDocumentationSection2_2,
  technicalDocumentationSection2_3,
  technicalDocumentationSection3_1,
  technicalDocumentationSection3_2,
  technicalDocumentationSection3_3,
  technicalDocumentationQuestions
} from "@/data/units/sections/engineering/technicalDocumentation/index";

const TechnicalDocumentationPage = () => {
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
        return technicalDocumentationSection1_1;
      case '1.2':
        return technicalDocumentationSection1_2;
      case '1.3':
        return technicalDocumentationSection1_3;
      case '2.1':
        return technicalDocumentationSection2_1;
      case '2.2':
        return technicalDocumentationSection2_2;
      case '2.3':
        return technicalDocumentationSection2_3;
      case '3.1':
        return technicalDocumentationSection3_1;
      case '3.2':
        return technicalDocumentationSection3_2;
      case '3.3':
        return technicalDocumentationSection3_3;
      default:
        return null;
    }
  };

  const section1 = [
    { id: '1.1', title: 'Documentation Types and Purpose', description: 'Understanding the various types and purposes of technical documentation' },
    { id: '1.2', title: 'Design Documentation', description: 'Technical specifications, calculations, and drawings for electrical systems' },
    { id: '1.3', title: 'Installation Documentation', description: 'Documents required for implementing and recording electrical installations' }
  ];

  const section2 = [
    { id: '2.1', title: 'Documentation Standards', description: 'Industry standards and conventions for electrical documentation' },
    { id: '2.2', title: 'Drawing Conventions', description: 'Standardized symbols and practices for electrical drawings' },
    { id: '2.3', title: 'Technical Writing', description: 'Principles and best practices for clear technical documentation' }
  ];

  const section3 = [
    { id: '3.1', title: 'Documentation Management', description: 'Systems and processes for managing technical documents' },
    { id: '3.2', title: 'Digital Documentation Systems', description: 'Modern technologies and tools for documentation' },
    { id: '3.3', title: 'Compliance and Regulation', description: 'Using documentation to demonstrate regulatory compliance' }
  ];

  const selectedContent = getSelectedSectionContent();

  // Transform the quiz questions to match the required format
  const formattedQuestions = technicalDocumentationQuestions.map(q => ({
    question: q.question,
    options: q.options,
    correctAnswer: q.options[q.correctAnswer],
    explanation: q.explanation
  }));

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Technical Documentation"
          description="Creating and managing technical documentation for electrical systems"
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
            title="Documentation Standards and Practices" 
            sections={section2}
            onStudy={handleStudy}
          />
          
          <SectionGroup 
            number="3" 
            title="Management and Compliance" 
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
              Test your understanding of technical documentation principles with this assessment. 
              The quiz covers key aspects of documentation types, standards, management practices, 
              and compliance requirements for electrical systems.
            </p>
            <SafetyQuiz 
              questions={formattedQuestions}
              questionsToShow={10}
              timeLimit={300}
              unitId="technical-documentation"
            />
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default TechnicalDocumentationPage;
