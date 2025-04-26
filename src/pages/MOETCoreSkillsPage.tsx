
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const MOETCoreSkillsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="MOET Core Skills"
          description="Essential practical skills for Maintenance and Operations Engineering Technicians"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Electrical Maintenance">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Preventive Maintenance</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Scheduled inspection and testing procedures</li>
                <li>Equipment performance monitoring</li>
                <li>Maintenance record keeping and documentation</li>
                <li>Predictive maintenance techniques</li>
                <li>Condition monitoring and analysis</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Fault Finding">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Diagnostic Techniques</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Systematic troubleshooting methodologies</li>
                <li>Use of diagnostic tools and equipment</li>
                <li>Circuit analysis and testing</li>
                <li>Component testing and verification</li>
                <li>Root cause analysis techniques</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Equipment Installation">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Installation Procedures</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Reading and interpreting technical drawings</li>
                <li>Equipment positioning and mounting</li>
                <li>Cable routing and termination</li>
                <li>System integration and testing</li>
                <li>Commissioning procedures</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default MOETCoreSkillsPage;
