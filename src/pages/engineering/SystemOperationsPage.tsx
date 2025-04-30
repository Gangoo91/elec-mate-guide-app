
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const SystemOperationsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/engineering-operations');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="System Operations"
          description="Understanding and managing electrical system operations"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Introduction to System Operations">
            <div className="space-y-4">
              <p>
                System operations in electrical engineering involve the efficient management, control, and monitoring 
                of electrical systems to ensure reliable power supply and optimal performance. This includes understanding 
                load management, power quality, automation systems, and operational procedures.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Key Aspects of System Operations</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Real-time monitoring and control systems</li>
                <li>Load balancing and power distribution</li>
                <li>Fault detection and isolation</li>
                <li>Emergency response procedures</li>
                <li>Operational efficiency and optimization</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Control Systems">
            <div className="space-y-4">
              <p>
                Control systems are the backbone of modern electrical operations, providing the means to monitor, 
                adjust, and optimize system performance through automated processes and feedback mechanisms.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Types of Control Systems</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>SCADA (Supervisory Control And Data Acquisition)</li>
                <li>Distributed Control Systems (DCS)</li>
                <li>Programmable Logic Controllers (PLCs)</li>
                <li>Building Management Systems (BMS)</li>
                <li>Smart grid technologies</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Operational Procedures">
            <div className="space-y-4">
              <p>
                Standard operating procedures (SOPs) are essential for consistent, safe, and efficient electrical system 
                operations. These documented processes guide technicians through routine tasks, maintenance activities, 
                and emergency situations.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Key Operational Procedures</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>System startup and shutdown sequences</li>
                <li>Switching operations and isolation procedures</li>
                <li>Emergency response protocols</li>
                <li>Maintenance scheduling and implementation</li>
                <li>Performance monitoring and reporting</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default SystemOperationsPage;
