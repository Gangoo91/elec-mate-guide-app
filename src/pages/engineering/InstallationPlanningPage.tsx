
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const InstallationPlanningPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/engineering-operations');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Installation Planning"
          description="Planning and executing electrical installation projects"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Project Planning Fundamentals">
            <div className="space-y-4">
              <p>
                Effective installation planning is crucial for successful electrical projects, ensuring that 
                work is completed safely, efficiently, and according to specifications. A comprehensive plan 
                addresses design requirements, resource allocation, scheduling, and regulatory compliance.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Key Planning Elements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Site survey and assessment</li>
                <li>Load calculations and system sizing</li>
                <li>Material and resource planning</li>
                <li>Risk assessment and safety planning</li>
                <li>Project scheduling and milestones</li>
                <li>Budget development and cost control</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Technical Design Considerations">
            <div className="space-y-4">
              <p>
                The technical design phase translates client requirements into detailed specifications and drawings, 
                forming the foundation for the installation work. This phase requires careful consideration of electrical 
                principles, system requirements, and compliance standards.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Design Elements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Circuit design and load distribution</li>
                <li>Cable sizing and routing</li>
                <li>Equipment selection and specification</li>
                <li>Protection schemes and coordination</li>
                <li>Control system integration</li>
                <li>Compliance with regulations and standards</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Implementation and Quality Control">
            <div className="space-y-4">
              <p>
                The implementation phase transforms plans into reality through structured installation work and 
                rigorous quality control. Effective management ensures adherence to designs, schedules, and quality standards.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Quality Control Measures</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Inspection and test plans</li>
                <li>Milestone verification and sign-off</li>
                <li>Compliance testing and certification</li>
                <li>Documentation and as-built records</li>
                <li>Commissioning procedures</li>
                <li>Client handover and training</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default InstallationPlanningPage;
