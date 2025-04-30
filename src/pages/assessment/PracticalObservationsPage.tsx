
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const PracticalObservationsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/assessment');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Practical Observations"
          description="Detailed requirements for the practical observation component"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Observation Environment">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Real-Work Setting</h3>
              <p className="text-[#FFC900]/80">
                The practical observation takes place in a genuine work environment where you'll be observed performing various electrical maintenance tasks. The environment should reflect your normal working conditions and include industry-standard equipment.
              </p>
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Duration and Scope</h3>
              <p className="text-[#FFC900]/80">
                The observation lasts approximately 8 hours, during which you'll demonstrate a range of skills across electrical maintenance operations. This gives assessors sufficient time to evaluate your practical capabilities in a comprehensive manner.
              </p>
            </div>
          </LessonContent>

          <LessonContent title="Assessment Criteria">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Key Areas of Assessment</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Safe working practices and adherence to safety regulations</li>
                <li>Proper selection and use of tools and test equipment</li>
                <li>Diagnostic approaches and fault-finding methodologies</li>
                <li>Maintenance procedures and techniques</li>
                <li>Documentation completion and accuracy</li>
                <li>Communication with colleagues and stakeholders</li>
                <li>Problem-solving in practical scenarios</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Preparation Guidelines">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Before the Observation</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Review all safety procedures relevant to your workplace</li>
                <li>Practice explaining your actions and reasoning as you work</li>
                <li>Ensure familiarity with all tools and equipment you might need to use</li>
                <li>Prepare to demonstrate both routine and non-routine tasks</li>
                <li>Review proper documentation procedures for maintenance tasks</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-6">During the Observation</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Work at a steady, methodical pace - accuracy is more important than speed</li>
                <li>Verbalize your thought process when making decisions</li>
                <li>Always prioritize safety in every action you take</li>
                <li>Complete documentation thoroughly as you progress through tasks</li>
                <li>Demonstrate professional conduct throughout the observation period</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default PracticalObservationsPage;
