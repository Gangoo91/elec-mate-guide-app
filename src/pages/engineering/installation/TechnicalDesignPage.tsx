
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const TechnicalDesignPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/engineering-operations/installation-planning');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Technical Design Considerations"
          description="Essential principles and methods for electrical system design"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Circuit Design and Load Distribution">
            <div className="space-y-4">
              <p>
                Circuit design is a fundamental aspect of electrical installation planning that involves determining 
                how electrical loads will be distributed across the various circuits of an installation.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Key Design Principles</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Load calculation and diversity factors application</li>
                <li>Circuit segregation by function and load type</li>
                <li>Phase balancing for three-phase systems</li>
                <li>Voltage drop considerations over circuit length</li>
                <li>Future expansion capacity planning</li>
              </ul>
              
              <p className="mt-4">
                Well-designed circuits provide safe, reliable power distribution while minimizing energy losses
                and ensuring system longevity.
              </p>
            </div>
          </LessonContent>
          
          <LessonContent title="Cable Sizing and Selection">
            <div className="space-y-4">
              <p>
                Selecting appropriate cables involves detailed calculations based on current-carrying requirements,
                installation methods, environmental conditions, and regulatory standards.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Cable Selection Factors</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Current-carrying capacity based on load requirements</li>
                <li>Voltage drop considerations over distance</li>
                <li>Derating factors for ambient temperature and grouping</li>
                <li>Installation method impact (conduit, tray, direct burial)</li>
                <li>Environmental considerations (temperature, moisture, chemicals)</li>
                <li>Special requirements (fire performance, mechanical protection)</li>
              </ul>
              
              <p className="mt-4">
                Proper cable sizing ensures safety, efficiency, and compliance while avoiding unnecessary 
                costs from oversizing.
              </p>
            </div>
          </LessonContent>
          
          <LessonContent title="Protection Schemes">
            <div className="space-y-4">
              <p>
                Protection schemes safeguard electrical installations from damage due to overcurrent, 
                short circuits, earth faults, and other abnormal conditions.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Protection Design Elements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Overcurrent protection device selection and rating</li>
                <li>Discrimination/selectivity between protective devices</li>
                <li>Earth fault protection requirements</li>
                <li>RCD/RCBO selection based on application</li>
                <li>Surge protection implementation</li>
                <li>Backup protection considerations</li>
              </ul>
              
              <p className="mt-4">
                A well-designed protection scheme provides multiple layers of safety while maintaining 
                service continuity under normal conditions.
              </p>
            </div>
          </LessonContent>
          
          <LessonContent title="Control System Integration">
            <div className="space-y-4">
              <p>
                Modern electrical installations often incorporate sophisticated control systems that require
                careful integration into the overall design.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Control System Design Considerations</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Control architecture selection (centralized vs. distributed)</li>
                <li>Communications protocol selection and network design</li>
                <li>Integration with building management systems</li>
                <li>User interface requirements and design</li>
                <li>Security considerations for networked systems</li>
                <li>Redundancy and fallback mechanisms</li>
              </ul>
              
              <p className="mt-4">
                Effective control system integration enhances functionality, user experience, energy efficiency,
                and system monitoring capabilities.
              </p>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default TechnicalDesignPage;
