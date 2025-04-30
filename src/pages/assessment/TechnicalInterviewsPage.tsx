
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const TechnicalInterviewsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/assessment');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Technical Interviews"
          description="Guidance and preparation for the technical interview component"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Interview Format">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Structure and Duration</h3>
              <p className="text-[#FFC900]/80">
                The technical interview typically lasts 60-90 minutes and is conducted by one or more industry experts. It follows a structured format with questions designed to assess your knowledge across the MOET curriculum areas.
              </p>
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Question Types</h3>
              <p className="text-[#FFC900]/80">
                You'll encounter a mix of technical knowledge questions, scenario-based problems, and discussions about your project work. The questions will range from basic electrical principles to complex system understanding.
              </p>
            </div>
          </LessonContent>

          <LessonContent title="Key Assessment Areas">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Technical Knowledge</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Electrical principles and circuit theory</li>
                <li>Power systems and distribution</li>
                <li>Control systems and automation</li>
                <li>Maintenance strategies and techniques</li>
                <li>Testing procedures and equipment</li>
                <li>Health and safety regulations</li>
                <li>Environmental considerations</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Problem-Solving Assessment</h3>
              <p className="text-[#FFC900]/80">
                Interviewers will present scenarios that require troubleshooting, analysis, and decision-making. These test your ability to apply theoretical knowledge to practical situations.
              </p>
            </div>
          </LessonContent>

          <LessonContent title="Preparation Strategies">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Study Focus Areas</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Review all core modules from your MOET curriculum</li>
                <li>Practice explaining complex concepts in clear, simple terms</li>
                <li>Prepare examples from your work experience that demonstrate competence</li>
                <li>Study common electrical faults and their diagnostics</li>
                <li>Review documentation and record-keeping requirements</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Practice Techniques</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Arrange mock interviews with colleagues or mentors</li>
                <li>Record yourself explaining technical concepts and review for clarity</li>
                <li>Practice drawing circuit diagrams and explaining system layouts</li>
                <li>Time your responses to develop concise answering skills</li>
                <li>Prepare questions to ask the interviewers to demonstrate engagement</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default TechnicalInterviewsPage;
