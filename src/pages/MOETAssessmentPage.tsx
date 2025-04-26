
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const MOETAssessmentPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="MOET End Point Assessment"
          description="Final assessment requirements and preparation guidelines"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Practical Observations">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Assessment Requirements</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Duration: 8-hour observation period</li>
                <li>Real-work environment assessment</li>
                <li>Safety procedures demonstration</li>
                <li>Tool and equipment handling</li>
                <li>Maintenance tasks execution</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Technical Interviews">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Interview Components</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Knowledge assessment questions</li>
                <li>Project discussion and review</li>
                <li>Problem-solving scenarios</li>
                <li>Technical reasoning evaluation</li>
                <li>Safety awareness verification</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Portfolio Review">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Portfolio Requirements</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Project documentation</li>
                <li>Maintenance records</li>
                <li>Risk assessments completed</li>
                <li>Workplace testimonials</li>
                <li>Personal development evidence</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default MOETAssessmentPage;
