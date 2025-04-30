
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
          description="Circuit design, sizing, and integration for successful electrical installations"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Circuit Design and Load Analysis">
            <div className="space-y-4">
              <p>
                Effective circuit design begins with comprehensive load analysis to ensure the 
                electrical installation can safely and efficiently meet all power requirements.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Load Calculation Principles</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Connected load assessment for all electrical equipment</li>
                <li>Maximum demand calculation with appropriate diversity factors</li>
                <li>Load growth projections for future expansion</li>
                <li>Peak load analysis for determining cable and equipment ratings</li>
                <li>Load balancing across three-phase systems</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-4">Circuit Arrangement Strategy</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Logical circuit grouping by function, location, and load type</li>
                <li>Dedicated circuits for high-current appliances and critical equipment</li>
                <li>Radial vs. ring circuit design considerations</li>
                <li>Emergency and backup circuit segregation</li>
                <li>Control circuit integration with power circuits</li>
              </ul>
              
              <p className="mt-4">
                Thorough circuit design reduces operational issues, simplifies maintenance,
                and ensures regulatory compliance throughout the installation's lifecycle.
              </p>
            </div>
          </LessonContent>
          
          <LessonContent title="Cable Selection and Sizing">
            <div className="space-y-4">
              <p>
                Cable selection involves careful consideration of multiple factors to ensure 
                safe current-carrying capacity and appropriate voltage drop characteristics.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Cable Sizing Factors</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Current rating calculation based on load requirements</li>
                <li>Correction factors for temperature, grouping, and installation method</li>
                <li>Voltage drop limitations (typically max 3% lighting, 5% power)</li>
                <li>Fault current withstand capacity for short-circuit protection</li>
                <li>Cable type selection based on environment and installation conditions</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-4">Cable Routing Considerations</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Separation distances from other services and EMI sources</li>
                <li>Fire barrier penetration requirements</li>
                <li>Support systems and fixing methods</li>
                <li>Bend radius limitations and accessibility for maintenance</li>
                <li>Segregation of power and data circuits</li>
              </ul>
              
              <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
                <p className="text-[#FFC900] font-semibold">BS 7671 Requirements</p>
                <p className="text-[#FFC900]/80 mt-2">
                  Cable sizing must comply with BS 7671 requirements for current-carrying capacity (Section 523) 
                  and voltage drop (Section 525). Calculations must account for all applicable correction factors
                  and installation conditions.
                </p>
              </div>
            </div>
          </LessonContent>
          
          <LessonContent title="Equipment Selection and Integration">
            <div className="space-y-4">
              <p>
                Proper selection of electrical equipment ensures compatibility, reliability, and compliance
                with project requirements and regulatory standards.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Equipment Selection Criteria</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Electrical ratings: voltage, current, and power requirements</li>
                <li>Environmental protections: IP ratings for dust and moisture resistance</li>
                <li>Temperature ratings and thermal management needs</li>
                <li>Physical dimensions and space constraints</li>
                <li>Compliance with relevant standards and specifications</li>
                <li>Manufacturer reputation and product warranty</li>
                <li>Availability of spare parts and technical support</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-4">Control System Integration</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Control hierarchy and architecture design</li>
                <li>Interface requirements between different systems</li>
                <li>Protocol selection for communication networks</li>
                <li>Supervisory control and data acquisition (SCADA) integration</li>
                <li>Remote monitoring and control capabilities</li>
                <li>Failsafe and emergency override systems</li>
              </ul>
              
              <p className="mt-4">
                Well-integrated equipment selections ensure system reliability while minimizing
                commissioning issues and operational problems.
              </p>
            </div>
          </LessonContent>
          
          <LessonContent title="Protection Schemes">
            <div className="space-y-4">
              <p>
                Protection schemes safeguard personnel, equipment, and property from electrical hazards
                through carefully coordinated protective devices.
              </p>
              
              <h3 className="text-lg font-semibold text-[#FFC900]">Overcurrent Protection</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Selection of appropriate circuit breakers and fuses</li>
                <li>Time-current characteristic coordination</li>
                <li>Discrimination (selectivity) between protective devices</li>
                <li>Cascading protection strategies</li>
                <li>Short-circuit current calculation and interrupting capacity</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-4">Electric Shock Protection</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Earthing system design (TN-S, TN-C-S, TT, IT)</li>
                <li>Main and supplementary equipotential bonding</li>
                <li>RCD protection levels and coordination</li>
                <li>Protective conductor sizing and routing</li>
                <li>Earth fault loop impedance calculation</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-[#FFC900] mt-4">Special Protections</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Surge protection devices and overvoltage protection</li>
                <li>Undervoltage protection for motor circuits</li>
                <li>Emergency shutdown systems</li>
                <li>Arc fault detection devices</li>
                <li>Lightning protection integration</li>
              </ul>
              
              <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
                <p className="text-[#FFC900] font-semibold">Protection Coordination Example</p>
                <p className="text-[#FFC900]/80 mt-2">
                  In a cascaded protection scheme, upstream devices must have higher current and time settings
                  than downstream devices to ensure that faults are cleared by the nearest protection device, 
                  minimizing disruption to the rest of the electrical system.
                </p>
              </div>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default TechnicalDesignPage;
