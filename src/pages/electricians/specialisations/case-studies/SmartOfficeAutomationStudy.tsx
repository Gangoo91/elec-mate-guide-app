
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { ContentSection } from "@/components/units/ContentSection";
import { WhitePaperDocument, WhitePaperHeader, WhitePaperContent, WhitePaperFooter } from "@/components/technical/templates/WhitePaperDocument";

const SmartOfficeAutomationStudy = () => {
  const navigate = useNavigate();
  
  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader 
          title="Case Study: Smart Office Automation"
          description="A comprehensive installation of integrated building systems for a multi-floor corporate headquarters"
          customBackAction={() => navigate('/electricians/development/specialisations/smart-building')}
        />
        
        <WhitePaperDocument className="mt-6">
          <WhitePaperHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold">McKenzie Tower Smart Building Implementation</h1>
                <p className="text-gray-600">Location: London, UK | Completion: March 2024</p>
              </div>
              <div className="px-4 py-2 bg-green-100 text-green-800 rounded-md font-medium">
                Completed Project
              </div>
            </div>
          </WhitePaperHeader>
          
          <WhitePaperContent>
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-bold mb-4">Project Overview</h2>
                <p className="mb-3">This case study examines the implementation of comprehensive smart building systems for McKenzie Tower, a 15-story corporate headquarters in central London. The project involved integrating multiple building systems into a single management platform, resulting in significant energy savings and improved occupant comfort.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="border border-gray-200 rounded-md p-4">
                    <h3 className="font-semibold">Project Value</h3>
                    <p className="text-lg mt-1">£2.4 million</p>
                  </div>
                  <div className="border border-gray-200 rounded-md p-4">
                    <h3 className="font-semibold">Project Duration</h3>
                    <p className="text-lg mt-1">14 months</p>
                  </div>
                  <div className="border border-gray-200 rounded-md p-4">
                    <h3 className="font-semibold">Energy Savings</h3>
                    <p className="text-lg mt-1">34% reduction</p>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-4">Technical Challenge</h2>
                <p className="mb-3">The client required a fully integrated smart building solution that would combine HVAC, lighting, security, and energy management into a single platform. The building had existing legacy systems that needed to be integrated with new technology without disrupting daily operations.</p>
                <p>Key challenges included:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Integration of legacy BMS system with new IoT devices</li>
                  <li>Implementation of secure network architecture for building systems</li>
                  <li>Development of custom control algorithms for optimizing energy usage</li>
                  <li>Installation of over 1,200 IoT sensors throughout the building</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-4">Solution Implemented</h2>
                <p className="mb-3">The project team designed a comprehensive smart building system based on an open-protocol architecture to ensure compatibility with both existing and future technologies.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="font-semibold mb-3">Building Management System</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>KNX/BACnet integration layer for unified control</li>
                      <li>Cloud-based management platform with real-time analytics</li>
                      <li>AI-driven predictive maintenance module</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="font-semibold mb-3">Smart Lighting</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>DALI-controlled LED fixtures throughout the building</li>
                      <li>Daylight harvesting and occupancy-based control</li>
                      <li>Tunable white lighting for improved occupant wellbeing</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="font-semibold mb-3">HVAC Optimization</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Zone-based temperature and ventilation control</li>
                      <li>Machine learning algorithms for energy optimization</li>
                      <li>Demand-controlled ventilation based on CO2 levels</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="font-semibold mb-3">Security & Access</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Integrated access control with mobile credentials</li>
                      <li>CCTV analytics with unusual behavior detection</li>
                      <li>Visitor management system with automated workflows</li>
                    </ul>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-4">Results & Benefits</h2>
                <p className="mb-4">The implementation of the smart building system delivered measurable benefits across multiple areas:</p>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold">Energy Efficiency</h3>
                    <p>34% reduction in overall energy consumption, saving approximately £280,000 annually in energy costs.</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold">Operational Efficiency</h3>
                    <p>Maintenance calls reduced by 41% through predictive maintenance, with 87% of issues resolved before affecting occupants.</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold">Occupant Experience</h3>
                    <p>Occupant satisfaction increased from 67% to 89% based on post-implementation surveys.</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold">Future-Proofing</h3>
                    <p>Open architecture enables easy integration of new technologies without major infrastructure changes.</p>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-4">Technical Team Composition</h2>
                <p className="mb-3">The project was delivered by a multidisciplinary team of building services and electrical specialists:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>1 Project Manager (Building Services Engineer)</li>
                  <li>2 BMS Engineers (KNX/BACnet certified)</li>
                  <li>3 Senior Electricians (Smart Building specialists)</li>
                  <li>2 HVAC Controls Technicians</li>
                  <li>1 Network Security Specialist</li>
                  <li>2 Systems Integration Engineers</li>
                </ul>
              </section>
            </div>
          </WhitePaperContent>
          
          <WhitePaperFooter>
            <p>This case study is provided for educational and informational purposes. Specific client details have been modified to maintain confidentiality.</p>
          </WhitePaperFooter>
        </WhitePaperDocument>
      </div>
    </MainLayout>
  );
};

export default SmartOfficeAutomationStudy;
