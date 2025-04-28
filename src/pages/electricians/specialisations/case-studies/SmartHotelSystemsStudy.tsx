
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { ContentSection } from "@/components/units/ContentSection";
import { WhitePaperDocument, WhitePaperHeader, WhitePaperContent, WhitePaperFooter } from "@/components/technical/templates/WhitePaperDocument";

const SmartHotelSystemsStudy = () => {
  const navigate = useNavigate();
  
  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader 
          title="Case Study: Smart Hotel Systems"
          description="Integration of smart room controls and energy management for a luxury hotel chain"
          customBackAction={() => navigate('/electricians/development/specialisations/smart-building')}
        />
        
        <WhitePaperDocument className="mt-6">
          <WhitePaperHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold">Harborview Hotel Smart Systems Retrofit</h1>
                <p className="text-gray-600">Location: Manchester, UK | Completion: November 2023</p>
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
                <p className="mb-3">This case study examines the retrofit of smart room technology and building management systems across the Harborview Hotel, a 240-room luxury hotel in Manchester. The project aimed to enhance guest experience while reducing operational costs and environmental impact.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="border border-gray-200 rounded-md p-4">
                    <h3 className="font-semibold">Project Value</h3>
                    <p className="text-lg mt-1">£1.8 million</p>
                  </div>
                  <div className="border border-gray-200 rounded-md p-4">
                    <h3 className="font-semibold">Project Duration</h3>
                    <p className="text-lg mt-1">9 months</p>
                  </div>
                  <div className="border border-gray-200 rounded-md p-4">
                    <h3 className="font-semibold">ROI Period</h3>
                    <p className="text-lg mt-1">3.2 years</p>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-4">Technical Challenge</h2>
                <p className="mb-3">The hotel required a full smart building upgrade while remaining operational, requiring careful planning and phased implementation to minimize guest disruption. The existing infrastructure was outdated and not designed for modern IoT systems.</p>
                <p>Key challenges included:</p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>Installing new control systems with minimal disruption to hotel operations</li>
                  <li>Retrofitting smart controls in rooms with varying layouts and existing electrical systems</li>
                  <li>Creating a unified control system for both guest rooms and back-of-house operations</li>
                  <li>Training staff on the new systems while maintaining service levels</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-4">Solution Implemented</h2>
                <p className="mb-3">The project team designed a comprehensive smart hotel solution featuring guest room automation and a centralized building management system.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="font-semibold mb-3">Guest Room Automation</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Wireless room control systems with tablet interfaces</li>
                      <li>Presence detection for automated HVAC and lighting control</li>
                      <li>Smart shades and curtains integrated with wake-up settings</li>
                      <li>Voice-activated room controls compatible with major platforms</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="font-semibold mb-3">Energy Management</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Room-by-room energy monitoring and optimization</li>
                      <li>Occupancy-based HVAC setback controls</li>
                      <li>Smart load shedding during peak demand periods</li>
                      <li>Integration with building thermal storage systems</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="font-semibold mb-3">Building Management System</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Central control dashboard for all building systems</li>
                      <li>Real-time analytics for maintenance and operations</li>
                      <li>Integration with property management system</li>
                      <li>Mobile alerts and remote management capabilities</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="font-semibold mb-3">Network Infrastructure</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Segmented IoT network with enhanced security</li>
                      <li>Redundant wireless access points for full coverage</li>
                      <li>Power-over-Ethernet for select devices to reduce wiring</li>
                      <li>Edge computing nodes for local processing and resilience</li>
                    </ul>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-4">Results & Benefits</h2>
                <p className="mb-4">The implementation delivered multiple benefits across operational efficiency, guest experience, and environmental impact:</p>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold">Energy Consumption</h3>
                    <p>27% reduction in overall energy consumption, with 38% reduction in unoccupied rooms.</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold">Guest Satisfaction</h3>
                    <p>Guest satisfaction scores increased from 4.1/5 to 4.7/5, with smart room features frequently mentioned in positive reviews.</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold">Operational Efficiency</h3>
                    <p>Maintenance response time reduced by 64% through real-time monitoring and preventive alerts.</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold">Staff Productivity</h3>
                    <p>Room turnover time reduced by 23% through automated room status updates and task assignment.</p>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-4">Technical Team Composition</h2>
                <p className="mb-3">The project was delivered by specialists in smart building technologies and hospitality systems:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>1 Smart Building Project Manager</li>
                  <li>2 Systems Integration Engineers</li>
                  <li>3 Smart Controls Electricians</li>
                  <li>1 Network Infrastructure Specialist</li>
                  <li>1 UI/UX Designer (for guest interfaces)</li>
                  <li>2 BMS Technicians</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-bold mb-4">Future Development</h2>
                <p className="mb-3">Following the successful implementation, the hotel chain is planning further enhancements:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Integration with keyless entry and mobile check-in systems</li>
                  <li>Expanded predictive maintenance capabilities</li>
                  <li>Guest preference learning for personalized room settings</li>
                  <li>Implementation of the system across the entire hotel chain</li>
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

export default SmartHotelSystemsStudy;
