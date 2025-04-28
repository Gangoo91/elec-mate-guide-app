
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

const ManufacturingAutomationStudy = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians/development/specialisations/automation');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <PageHeader 
          title="Manufacturing Process Automation Case Study"
          description="Automated production line retrofit for a food processing facility"
          customBackAction={handleBackClick}
        />
        
        <div className="grid gap-6 mt-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Project Overview</h3>
              <p className="text-[#FFC900]/70 mb-4">
                This case study examines the complete automation retrofit of a food processing 
                facility's production line, involving PLC programming, SCADA implementation, 
                and integration of various sensors and control systems.
              </p>
              <div className="p-4 bg-[#FFC900]/10 rounded-lg mb-4">
                <h4 className="text-[#FFC900] mb-2">Key Achievements</h4>
                <ul className="list-disc pl-4 text-[#FFC900]/70 space-y-2">
                  <li>35% increase in production efficiency</li>
                  <li>50% reduction in quality control issues</li>
                  <li>Real-time production monitoring implementation</li>
                  <li>Integration of 45 automated control points</li>
                  <li>Implementation of predictive maintenance system</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Technical Solution</h3>
              <div className="space-y-4">
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">PLC Implementation</h4>
                  <p className="text-[#FFC900]/70">
                    Implemented Siemens S7-1500 PLCs with distributed I/O modules for precise 
                    control of conveyor systems, packaging units, and quality control stations. 
                    Custom programming included advanced error handling and safety interlocks.
                  </p>
                </div>
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">SCADA System</h4>
                  <p className="text-[#FFC900]/70">
                    Deployed WonderWare SCADA system with custom HMI screens for production 
                    monitoring, recipe management, and maintenance scheduling. Integrated 
                    historical data logging and report generation capabilities.
                  </p>
                </div>
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">Sensor Network</h4>
                  <p className="text-[#FFC900]/70">
                    Installed comprehensive sensor network including photoelectric sensors, 
                    temperature probes, pressure transducers, and vision systems for quality control.
                    All sensors networked via Profinet for real-time data collection.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Implementation Process</h3>
              <div className="space-y-4">
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">Phase 1: System Design (6 weeks)</h4>
                  <ul className="list-disc pl-4 text-[#FFC900]/70 space-y-2">
                    <li>Detailed process analysis and requirements gathering</li>
                    <li>Hardware specification and network architecture design</li>
                    <li>Development of control philosophy and safety protocols</li>
                    <li>Creation of detailed electrical schematics</li>
                  </ul>
                </div>
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">Phase 2: Hardware Installation (4 weeks)</h4>
                  <ul className="list-disc pl-4 text-[#FFC900]/70 space-y-2">
                    <li>Installation of control panels and network infrastructure</li>
                    <li>Sensor and actuator mounting and wiring</li>
                    <li>Implementation of safety systems and emergency stops</li>
                    <li>Power distribution and UPS systems setup</li>
                  </ul>
                </div>
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">Phase 3: Software Development (8 weeks)</h4>
                  <ul className="list-disc pl-4 text-[#FFC900]/70 space-y-2">
                    <li>PLC programming and testing</li>
                    <li>SCADA system configuration and HMI development</li>
                    <li>Database setup and report configuration</li>
                    <li>Integration testing and optimization</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Results & Benefits</h3>
              <div className="space-y-4 mb-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 border border-[#FFC900]/20 rounded-lg p-4">
                    <h4 className="text-[#FFC900] mb-2">Operational Improvements</h4>
                    <ul className="list-disc pl-4 text-[#FFC900]/70 space-y-2">
                      <li>35% increase in production throughput</li>
                      <li>50% reduction in quality defects</li>
                      <li>Decreased downtime by 60%</li>
                      <li>Improved product consistency</li>
                    </ul>
                  </div>
                  <div className="flex-1 border border-[#FFC900]/20 rounded-lg p-4">
                    <h4 className="text-[#FFC900] mb-2">Financial Impact</h4>
                    <ul className="list-disc pl-4 text-[#FFC900]/70 space-y-2">
                      <li>ROI achieved in 18 months</li>
                      <li>25% reduction in operating costs</li>
                      <li>Reduced waste and material loss</li>
                      <li>Energy consumption reduced by 20%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default ManufacturingAutomationStudy;
