
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

const CommunityEnergyStudy = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians/development/specialisations/renewable');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <PageHeader 
          title="Community Energy Project Case Study"
          description="Mixed renewable energy system for a housing development"
          customBackAction={handleBackClick}
        />
        
        <div className="grid gap-6 mt-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Project Overview</h3>
              <p className="text-[#FFC900]/70 mb-4">
                This case study examines the implementation of a community-scale hybrid renewable energy system 
                for a new eco-housing development consisting of 45 residential units. The project incorporated 
                solar PV, small-scale wind turbines, and a shared energy storage system managed through a local microgrid.
              </p>
              <div className="p-4 bg-[#FFC900]/10 rounded-lg mb-4">
                <h4 className="text-[#FFC900] mb-2">Key Features</h4>
                <ul className="list-disc pl-4 text-[#FFC900]/70 space-y-2">
                  <li>175kW community solar array with shared ownership model</li>
                  <li>3 small-scale wind turbines (15kW each)</li>
                  <li>300kWh community battery storage system</li>
                  <li>Intelligent microgrid with peer-to-peer energy trading</li>
                  <li>Smart home integration for all residences</li>
                  <li>75% energy self-sufficiency across the development</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Project Challenges</h3>
              <p className="text-[#FFC900]/70 mb-4">
                The multi-stakeholder nature of this project presented unique technical and organizational challenges:
              </p>
              <ul className="space-y-3 text-[#FFC900]/70 mb-4">
                <li>• <span className="font-medium text-[#FFC900]">Grid Integration:</span> Designing a system that could operate both grid-connected and in island mode during outages.</li>
                <li>• <span className="font-medium text-[#FFC900]">Community Governance:</span> Establishing a legal framework for shared energy ownership and distribution.</li>
                <li>• <span className="font-medium text-[#FFC900]">Load Balancing:</span> Managing the variable generation from solar and wind sources against diverse household consumption patterns.</li>
                <li>• <span className="font-medium text-[#FFC900]">Regulatory Compliance:</span> Navigating complex regulatory requirements for community energy schemes.</li>
                <li>• <span className="font-medium text-[#FFC900]">Future-Proofing:</span> Designing a system that could adapt to incorporate electric vehicle charging and future technologies.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Technical Solution</h3>
              <div className="space-y-4">
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">Solar + Wind Hybrid System</h4>
                  <p className="text-[#FFC900]/70">
                    The complementary generation profiles of solar and wind were leveraged to maximize energy 
                    generation throughout the day and across seasons. Solar panels were installed on house roofs 
                    and community buildings, while wind turbines were positioned on the perimeter of the development 
                    based on detailed wind resource assessment.
                  </p>
                </div>
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">Community Microgrid Implementation</h4>
                  <p className="text-[#FFC900]/70">
                    A sophisticated microgrid controller was deployed to manage power flows between generation sources, 
                    the battery storage system, individual homes, and the main grid. The system included islanding 
                    capability to provide resilience during grid outages, with automatic transition between grid-connected 
                    and island modes.
                  </p>
                </div>
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">Smart Energy Management</h4>
                  <p className="text-[#FFC900]/70">
                    Each home was equipped with a smart home energy management system that communicated with the 
                    community-level controller. This enabled automated demand response, intelligent load scheduling, 
                    and optimization of energy use based on availability and price signals. Residents could monitor 
                    and control their usage through a dedicated mobile app.
                  </p>
                </div>
                <div className="border border-[#FFC900]/20 rounded-lg p-4">
                  <h4 className="text-[#FFC900] mb-2">Peer-to-Peer Energy Trading</h4>
                  <p className="text-[#FFC900]/70">
                    A blockchain-based energy trading platform was implemented to allow residents to buy and sell 
                    excess energy within the community. This created an internal energy market that maximized local 
                    consumption of generated energy and provided financial incentives for efficient energy use.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h3 className="text-[#FFC900] text-xl font-medium mb-4">Implementation Process</h3>
              <div className="relative">
                <div className="absolute left-4 inset-y-0 w-0.5 bg-[#FFC900]/20"></div>
                <div className="space-y-6 relative">
                  <div className="ml-8 relative">
                    <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-[#FFC900]"></div>
                    <h4 className="text-[#FFC900] mb-2">Community Consultation & Design (3 months)</h4>
                    <p className="text-[#FFC900]/70">
                      Extensive community engagement to establish needs, preferences, and governance structure.
                      Technical design and economic modeling to optimize system components and sizing.
                    </p>
                  </div>
                  <div className="ml-8 relative">
                    <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-[#FFC900]"></div>
                    <h4 className="text-[#FFC900] mb-2">Technical Implementation (6 months)</h4>
                    <p className="text-[#FFC900]/70">
                      Installation of solar arrays, wind turbines, electrical infrastructure, and battery 
                      storage system. Development of control systems and software platforms.
                    </p>
                  </div>
                  <div className="ml-8 relative">
                    <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-[#FFC900]"></div>
                    <h4 className="text-[#FFC900] mb-2">System Integration & Testing (2 months)</h4>
                    <p className="text-[#FFC900]/70">
                      Integration of all components, comprehensive testing of normal operation and failure modes.
                      Grid connection testing and approval from Distribution Network Operator.
                    </p>
                  </div>
                  <div className="ml-8 relative">
                    <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-[#FFC900]"></div>
                    <h4 className="text-[#FFC900] mb-2">Community Training & Handover (1 month)</h4>
                    <p className="text-[#FFC900]/70">
                      Resident training sessions, establishment of community energy company, 
                      and transition to community-led operation with technical support agreement.
                    </p>
                  </div>
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
                    <h4 className="text-[#FFC900] mb-2">Energy Performance</h4>
                    <ul className="list-disc pl-4 text-[#FFC900]/70 space-y-2">
                      <li>75% energy self-sufficiency achieved</li>
                      <li>Near-zero energy bills during summer months</li>
                      <li>50% reduction in winter energy costs</li>
                      <li>Resilience during 3 grid outages in first year</li>
                    </ul>
                  </div>
                  <div className="flex-1 border border-[#FFC900]/20 rounded-lg p-4">
                    <h4 className="text-[#FFC900] mb-2">Economic Benefits</h4>
                    <ul className="list-disc pl-4 text-[#FFC900]/70 space-y-2">
                      <li>Community energy company revenue of £25,000 in first year</li>
                      <li>Average annual savings of £850 per household</li>
                      <li>Community fund established for local projects</li>
                      <li>Increased property values (est. 5-7%)</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 border border-[#FFC900]/20 rounded-lg p-4">
                    <h4 className="text-[#FFC900] mb-2">Environmental Impact</h4>
                    <ul className="list-disc pl-4 text-[#FFC900]/70 space-y-2">
                      <li>95 tonnes CO2 reduction annually</li>
                      <li>Zero waste installation approach</li>
                      <li>Enhanced biodiversity through integrated landscaping</li>
                      <li>Educational resource for local schools</li>
                    </ul>
                  </div>
                  <div className="flex-1 border border-[#FFC900]/20 rounded-lg p-4">
                    <h4 className="text-[#FFC900] mb-2">Social Impact</h4>
                    <ul className="list-disc pl-4 text-[#FFC900]/70 space-y-2">
                      <li>Strengthened community cohesion</li>
                      <li>Development of local energy skills</li>
                      <li>Reduced fuel poverty for affordable housing units</li>
                      <li>Award-winning model for community energy</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-[#FFC900]/10 rounded-lg">
                <p className="text-[#FFC900]">
                  This community energy project demonstrates how integrated renewable energy systems can 
                  transform local energy provision, creating environmental, economic, and social benefits. 
                  The model has since been replicated in three other housing developments, with ongoing 
                  knowledge sharing through a community energy network.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default CommunityEnergyStudy;
