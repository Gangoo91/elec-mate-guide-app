
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const EquipmentInstallationPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-skills');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Equipment Installation"
          description="Best practices for electrical equipment installation and commissioning"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Technical Documentation">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Understanding Specifications</h3>
              <p className="text-[#FFC900]/80">
                Properly interpreting technical documentation is the foundation of successful installation. 
                This includes understanding symbols, terminology, and layout conventions.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Electrical schematics and single-line diagrams</li>
                <li>Equipment specifications and datasheets</li>
                <li>Installation manuals and manufacturer guidelines</li>
                <li>Regulatory requirements and standards</li>
                <li>Site layout and equipment positioning plans</li>
                <li>Cable schedules and connection details</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Installation Techniques">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Proper Methods</h3>
              <p className="text-[#FFC900]/80">
                Following correct installation techniques ensures equipment reliability, safety, and compliance 
                with standards and regulations.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Equipment mounting and securing methods</li>
                <li>Cable routing, support, and protection</li>
                <li>Termination techniques for different applications</li>
                <li>Earthing and bonding requirements</li>
                <li>IP rating considerations for environmental protection</li>
                <li>Clearance requirements for ventilation and maintenance access</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Testing and Commissioning">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Verification Process</h3>
              <p className="text-[#FFC900]/80">
                Thorough testing and commissioning verifies that installed equipment functions correctly and 
                safely before being put into service.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Initial inspection and dead testing</li>
                <li>Function testing of individual components</li>
                <li>System integration testing</li>
                <li>Load testing where applicable</li>
                <li>Client demonstration and training</li>
                <li>Documentation and certification</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default EquipmentInstallationPage;
