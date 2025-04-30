
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
          description="Practical skills in electrical maintenance, fault finding, and equipment installation"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Electrical Maintenance">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Preventative Maintenance</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Scheduled inspections and servicing</li>
                <li>Equipment testing procedures</li>
                <li>Documentation and record keeping</li>
                <li>Maintenance planning and scheduling</li>
                <li>Condition monitoring techniques</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Fault Finding">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Diagnostic Approaches</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Systematic fault diagnosis</li>
                <li>Test equipment usage and interpretation</li>
                <li>Circuit analysis and tracing</li>
                <li>Common fault patterns and solutions</li>
                <li>Diagnostic documentation</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Equipment Installation">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Installation Practices</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Reading technical drawings and specifications</li>
                <li>Equipment positioning and mounting</li>
                <li>Wiring and connection techniques</li>
                <li>Testing and commissioning</li>
                <li>Handover procedures</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default MOETCoreSkillsPage;
