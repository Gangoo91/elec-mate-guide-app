
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

const CommercialSolarCaseStudy = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians/development/specialisations/renewable');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <PageHeader 
          title="Commercial Solar Installation Case Study"
          description="Large-scale solar PV installation for a retail complex"
          customBackAction={handleBackClick}
        />
        
        <div className="grid gap-6 mt-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Project Overview</h3>
              <p className="text-[#FFC900]/70 mb-4">
                This case study explores the installation of a large-scale 250kW solar PV system on a retail complex 
                in Manchester. The project was completed over a period of 8 weeks and involved the installation of 
                over 900 solar panels, integrated battery storage, and smart energy management systems.
              </p>
              <div className="p-4 bg-[#FFC900]/10 rounded-lg mb-4">
                <h4 className="text-[#FFC900] mb-2">Key Achievements</h4>
                <ul className="list-disc pl-4 text-[#FFC900]/70 space-y-2">
                  <li>250kW system capacity installation</li>
                  <li>30% reduction in energy costs for the retail complex</li>
                  <li>100kWh battery storage integration</li>
                  <li>Smart energy management system implementation</li>
                  <li>Carbon footprint reduction of 120 tonnes per year</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Technical Challenges</h3>
              <p className="text-[#FFC900]/70 mb-4">
                The project presented several technical challenges that required innovative solutions:
              </p>
              <ul className="space-y-3 text-[#FFC900]/70 mb-4">
                <li>• <span className="font-medium text-[#FFC900]">Roof Structural Limitations:</span> The existing roof structure required reinforcement to support the solar array weight.</li>
                <li>• <span className="font-medium text-[#FFC900]">Complex Electrical Integration:</span> Integration with the existing building management system required custom interface development.</li>
                <li>• <span className="font-medium text-[#FFC900]">Peak Load Management:</span> Designing a system to handle the variable energy demands of the retail environment.</li>
                <li>• <span className="font-medium text-[#FFC900]">Grid Connection:</span> Negotiating with the Distribution Network Operator for permission to export excess energy.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Implementation Approach</h3>
              <div className="space-y-4">
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">Phase 1: Site Assessment & Design</h4>
                  <p className="text-[#FFC900]/70">
                    Comprehensive structural assessment, shading analysis, and energy usage pattern analysis 
                    to determine optimal system configuration and panel placement. Custom mounting system 
                    was designed to accommodate the roof structure while maximizing energy generation.
                  </p>
                </div>
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">Phase 2: System Installation</h4>
                  <p className="text-[#FFC900]/70">
                    Installation of 938 solar panels, mounting hardware, DC and AC wiring systems, 
                    eight 30kW string inverters, and electrical protection equipment. All work was completed 
                    while the retail complex remained operational, requiring careful planning to minimize disruption.
                  </p>
                </div>
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">Phase 3: Storage Integration</h4>
                  <p className="text-[#FFC900]/70">
                    Installation of 100kWh lithium-ion battery storage system to capture excess energy 
                    during peak generation periods and support the building during peak demand or grid outages.
                  </p>
                </div>
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">Phase 4: Commissioning & Monitoring</h4>
                  <p className="text-[#FFC900]/70">
                    System commissioning, testing, and integration with advanced monitoring platform 
                    for real-time performance tracking, fault detection, and preventive maintenance alerts.
                  </p>
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
                    <h4 className="text-[#FFC900] mb-2">Financial Benefits</h4>
                    <ul className="list-disc pl-4 text-[#FFC900]/70 space-y-2">
                      <li>30% reduction in annual energy costs</li>
                      <li>ROI achieved in less than 6 years</li>
                      <li>Protection against rising energy costs</li>
                      <li>Additional revenue from export tariff</li>
                    </ul>
                  </div>
                  <div className="flex-1 border border-[#FFC900]/20 rounded-lg p-4">
                    <h4 className="text-[#FFC900] mb-2">Environmental Impact</h4>
                    <ul className="list-disc pl-4 text-[#FFC900]/70 space-y-2">
                      <li>120 tonnes CO2 reduction annually</li>
                      <li>Equivalent to planting 5,500 trees</li>
                      <li>Enhanced corporate sustainability profile</li>
                      <li>Contribution to local air quality improvement</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 border border-[#FFC900]/20 rounded-lg p-4">
                    <h4 className="text-[#FFC900] mb-2">Operational Benefits</h4>
                    <ul className="list-disc pl-4 text-[#FFC900]/70 space-y-2">
                      <li>Improved power quality and reliability</li>
                      <li>Reduced peak demand charges</li>
                      <li>Emergency power supply during outages</li>
                      <li>Building system optimization</li>
                    </ul>
                  </div>
                  <div className="flex-1 border border-[#FFC900]/20 rounded-lg p-4">
                    <h4 className="text-[#FFC900] mb-2">Community Impact</h4>
                    <ul className="list-disc pl-4 text-[#FFC900]/70 space-y-2">
                      <li>Local job creation during installation</li>
                      <li>Educational opportunities for local schools</li>
                      <li>Enhanced reputation in the community</li>
                      <li>Demonstration of renewable technology</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Key Technologies Used</h3>
              <ul className="space-y-3 text-[#FFC900]/70 mb-4">
                <li>• High-efficiency bifacial solar panels (400W each)</li>
                <li>• Smart string inverters with individual panel optimization</li>
                <li>• Advanced lithium-ion battery storage system (100kWh)</li>
                <li>• Smart energy management system with machine learning capabilities</li>
                <li>• Cloud-based monitoring platform with mobile app integration</li>
                <li>• Grid-interactive control systems for demand response</li>
              </ul>
              <div className="p-4 bg-[#FFC900]/10 rounded-lg">
                <p className="text-[#FFC900]">
                  This case study demonstrates how commercial-scale solar PV installations can provide significant
                  financial and environmental benefits while enhancing operational reliability. The integration of
                  energy storage and smart management systems represents the future direction of renewable energy
                  deployments in commercial settings.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default CommercialSolarCaseStudy;
