
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

const WarehouseAutomationStudy = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians/development/specialisations/automation');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <PageHeader 
          title="Warehouse Automation Case Study"
          description="Automated guided vehicle (AGV) and robotics implementation for a distribution center"
          customBackAction={handleBackClick}
        />
        
        <div className="grid gap-6 mt-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Project Overview</h3>
              <p className="text-[#FFC900]/70 mb-4">
                This case study examines the implementation of an automated warehouse system 
                featuring AGVs, robotic picking systems, and an integrated warehouse management 
                system (WMS) for a major distribution center.
              </p>
              <div className="p-4 bg-[#FFC900]/10 rounded-lg mb-4">
                <h4 className="text-[#FFC900] mb-2">Key Features</h4>
                <ul className="list-disc pl-4 text-[#FFC900]/70 space-y-2">
                  <li>Fleet of 12 AGVs with dynamic routing</li>
                  <li>6 robotic picking stations</li>
                  <li>Automated storage and retrieval system</li>
                  <li>Real-time inventory tracking</li>
                  <li>Smart charging infrastructure for AGVs</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Technical Implementation</h3>
              <div className="space-y-4">
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">AGV System</h4>
                  <p className="text-[#FFC900]/70">
                    Implemented a fleet of 12 laser-guided AGVs with obstacle detection, 
                    dynamic path planning, and automated charging. Integration with warehouse 
                    management system for real-time task allocation and tracking.
                  </p>
                </div>
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">Robotic Picking Stations</h4>
                  <p className="text-[#FFC900]/70">
                    Deployed 6 robotic picking stations with vision systems, vacuum grippers, 
                    and conveyor interfaces. Custom end-of-arm tooling designed for various 
                    product types.
                  </p>
                </div>
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">Control System Architecture</h4>
                  <p className="text-[#FFC900]/70">
                    Centralized control system using redundant servers, industrial Ethernet 
                    network, and distributed I/O modules. Integration with existing WMS via 
                    custom middleware.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Implementation Phases</h3>
              <div className="space-y-4">
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">Phase 1: Infrastructure Preparation</h4>
                  <ul className="list-disc pl-4 text-[#FFC900]/70 space-y-2">
                    <li>Floor preparation and AGV path marking</li>
                    <li>Charging station installation</li>
                    <li>Network infrastructure setup</li>
                    <li>Safety system implementation</li>
                  </ul>
                </div>
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">Phase 2: AGV Implementation</h4>
                  <ul className="list-disc pl-4 text-[#FFC900]/70 space-y-2">
                    <li>AGV deployment and testing</li>
                    <li>Navigation system calibration</li>
                    <li>Traffic management system setup</li>
                    <li>Operator training program</li>
                  </ul>
                </div>
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">Phase 3: Robotics Integration</h4>
                  <ul className="list-disc pl-4 text-[#FFC900]/70 space-y-2">
                    <li>Robotic cell installation</li>
                    <li>Vision system calibration</li>
                    <li>End-of-arm tooling setup</li>
                    <li>Safety fence installation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Outcomes & Benefits</h3>
              <div className="space-y-4 mb-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 border border-[#FFC900]/20 rounded-lg p-4">
                    <h4 className="text-[#FFC900] mb-2">Operational Benefits</h4>
                    <ul className="list-disc pl-4 text-[#FFC900]/70 space-y-2">
                      <li>300% increase in picking efficiency</li>
                      <li>99.9% picking accuracy achieved</li>
                      <li>24/7 operation capability</li>
                      <li>Reduced manual handling risks</li>
                    </ul>
                  </div>
                  <div className="flex-1 border border-[#FFC900]/20 rounded-lg p-4">
                    <h4 className="text-[#FFC900] mb-2">Business Impact</h4>
                    <ul className="list-disc pl-4 text-[#FFC900]/70 space-y-2">
                      <li>ROI achieved in 24 months</li>
                      <li>Labor costs reduced by 40%</li>
                      <li>Order fulfillment time reduced by 65%</li>
                      <li>Warehouse capacity increased by 30%</li>
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

export default WarehouseAutomationStudy;
