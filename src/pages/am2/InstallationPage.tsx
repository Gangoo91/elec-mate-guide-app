
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, BookOpen, FileText, ListOrdered, Book } from "lucide-react";
import LessonContent from "@/components/units/LessonContent";

const InstallationPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/am2');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="AM2 Installation Unit"
          description="Comprehensive guide to the installation component of the AM2 assessment"
          customBackAction={handleBackClick}
        />
        
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Settings className="h-10 w-10 text-[#FFC900]" />
            <div>
              <h2 className="text-2xl font-bold text-[#FFC900]">Installation Component</h2>
              <p className="text-[#FFC900]/70">
                This unit focuses on the practical installation skills required for the AM2 assessment. 
                You'll need to demonstrate your ability to install electrical components following industry 
                standards and regulations.
              </p>
            </div>
          </div>
          
          <div className="bg-[#22251e] border-[#FFC900]/20 rounded-lg border p-6 mb-8">
            <h3 className="text-[#FFC900] font-medium text-lg mb-4">Key Installation Requirements</h3>
            <ul className="list-disc list-inside text-[#FFC900]/70 space-y-2">
              <li>Correctly interpret installation drawings and specifications</li>
              <li>Select appropriate tools and equipment for installation tasks</li>
              <li>Install containment systems to specifications</li>
              <li>Accurately position and fix electrical equipment</li>
              <li>Wire circuits according to BS 7671 regulations</li>
              <li>Ensure all work meets quality standards and specifications</li>
            </ul>
          </div>
          
          {/* Section 1 */}
          <LessonContent title="1. Installation Preparation">
            <div className="space-y-6">
              <div className="bg-[#1a1c16] p-4 rounded-md">
                <h4 className="text-[#FFC900] font-medium text-lg mb-2">1.1 Reading and Interpreting Drawings</h4>
                <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70">
                  <li>Understanding electrical symbols and notations</li>
                  <li>Interpreting circuit diagrams and wiring schedules</li>
                  <li>Identifying positions of equipment and accessories</li>
                  <li>Reading specifications and technical documents</li>
                </ul>
              </div>
              
              <div className="bg-[#1a1c16] p-4 rounded-md">
                <h4 className="text-[#FFC900] font-medium text-lg mb-2">1.2 Tools and Equipment Selection</h4>
                <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70">
                  <li>Hand tools for electrical installation</li>
                  <li>Power tools and their safe usage</li>
                  <li>Measuring and marking out equipment</li>
                  <li>Safe storage and maintenance of tools</li>
                </ul>
              </div>
              
              <div className="bg-[#1a1c16] p-4 rounded-md">
                <h4 className="text-[#FFC900] font-medium text-lg mb-2">1.3 Material Identification</h4>
                <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70">
                  <li>Types of cables and their applications</li>
                  <li>Containment systems and accessories</li>
                  <li>Fixings appropriate for different surfaces</li>
                  <li>Selection of appropriate materials for installations</li>
                </ul>
              </div>
            </div>
          </LessonContent>
          
          {/* Section 2 */}
          <LessonContent title="2. Installation Techniques">
            <div className="space-y-6">
              <div className="bg-[#1a1c16] p-4 rounded-md">
                <h4 className="text-[#FFC900] font-medium text-lg mb-2">2.1 Cable Containment Systems</h4>
                <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70">
                  <li>Installation of trunking and conduit systems</li>
                  <li>Cutting, bending and joining techniques</li>
                  <li>Fixing and supporting methods</li>
                  <li>Accommodating cable expansion and bends</li>
                </ul>
              </div>
              
              <div className="bg-[#1a1c16] p-4 rounded-md">
                <h4 className="text-[#FFC900] font-medium text-lg mb-2">2.2 Consumer Unit Installation</h4>
                <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70">
                  <li>Positioning and fixing consumer units</li>
                  <li>Installing protective devices</li>
                  <li>Cable entry and termination techniques</li>
                  <li>Circuit identification and labeling</li>
                </ul>
              </div>
              
              <div className="bg-[#1a1c16] p-4 rounded-md">
                <h4 className="text-[#FFC900] font-medium text-lg mb-2">2.3 Wiring Systems Installation</h4>
                <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70">
                  <li>Cable selection and sizing principles</li>
                  <li>Installation methods for different cable types</li>
                  <li>Supporting and securing cables</li>
                  <li>Maintaining cable separation requirements</li>
                </ul>
              </div>
            </div>
          </LessonContent>
          
          {/* Section 3 */}
          <LessonContent title="3. Circuit Installation">
            <div className="space-y-6">
              <div className="bg-[#1a1c16] p-4 rounded-md">
                <h4 className="text-[#FFC900] font-medium text-lg mb-2">3.1 Power Circuits</h4>
                <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70">
                  <li>Ring final circuits installation</li>
                  <li>Radial circuits for specific applications</li>
                  <li>Dedicated circuits for high-power devices</li>
                  <li>Circuit protection coordination</li>
                </ul>
              </div>
              
              <div className="bg-[#1a1c16] p-4 rounded-md">
                <h4 className="text-[#FFC900] font-medium text-lg mb-2">3.2 Lighting Circuits</h4>
                <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70">
                  <li>One-way and two-way switching arrangements</li>
                  <li>Intermediate switching configurations</li>
                  <li>Installing lighting fixtures</li>
                  <li>Emergency lighting considerations</li>
                </ul>
              </div>
              
              <div className="bg-[#1a1c16] p-4 rounded-md">
                <h4 className="text-[#FFC900] font-medium text-lg mb-2">3.3 Special Locations</h4>
                <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70">
                  <li>Bathroom and shower room installations</li>
                  <li>Outdoor electrical installations</li>
                  <li>Zones and IP ratings for special locations</li>
                  <li>Additional protection requirements</li>
                </ul>
              </div>
            </div>
          </LessonContent>
          
          {/* Section 4 */}
          <LessonContent title="4. Termination Techniques">
            <div className="space-y-6">
              <div className="bg-[#1a1c16] p-4 rounded-md">
                <h4 className="text-[#FFC900] font-medium text-lg mb-2">4.1 Cable Preparation</h4>
                <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70">
                  <li>Stripping and preparing cables for termination</li>
                  <li>Measuring and cutting to correct lengths</li>
                  <li>Identification and marking of conductors</li>
                  <li>Ensuring correct insulation removal</li>
                </ul>
              </div>
              
              <div className="bg-[#1a1c16] p-4 rounded-md">
                <h4 className="text-[#FFC900] font-medium text-lg mb-2">4.2 Connection Methods</h4>
                <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70">
                  <li>Screw terminal connections</li>
                  <li>Crimping techniques for various terminals</li>
                  <li>Connector block usage</li>
                  <li>Maintaining correct polarity</li>
                </ul>
              </div>
              
              <div className="bg-[#1a1c16] p-4 rounded-md">
                <h4 className="text-[#FFC900] font-medium text-lg mb-2">4.3 Quality Control</h4>
                <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70">
                  <li>Inspection of terminations before energizing</li>
                  <li>Tightness testing of connections</li>
                  <li>Checking for exposed conductors</li>
                  <li>Verification of correct conductor identification</li>
                </ul>
              </div>
            </div>
          </LessonContent>
          
          {/* Section 5 */}
          <LessonContent title="5. Assessment Preparation">
            <div className="space-y-6">
              <div className="bg-[#1a1c16] p-4 rounded-md">
                <h4 className="text-[#FFC900] font-medium text-lg mb-2">5.1 Time Management</h4>
                <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70">
                  <li>Allocating time for different installation tasks</li>
                  <li>Setting priorities and work sequences</li>
                  <li>Planning breaks and rest periods</li>
                  <li>Completing tasks within assessment timeframe</li>
                </ul>
              </div>
              
              <div className="bg-[#1a1c16] p-4 rounded-md">
                <h4 className="text-[#FFC900] font-medium text-lg mb-2">5.2 Common Pitfalls</h4>
                <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70">
                  <li>Incorrect interpretation of drawings</li>
                  <li>Poor cable management and routing</li>
                  <li>Inadequate fixings and supports</li>
                  <li>Incomplete circuit installations</li>
                </ul>
              </div>
              
              <div className="bg-[#1a1c16] p-4 rounded-md">
                <h4 className="text-[#FFC900] font-medium text-lg mb-2">5.3 Final Checks</h4>
                <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70">
                  <li>Visual inspection before handover</li>
                  <li>Ensuring all fixings are secure</li>
                  <li>Checking cable routes and containment</li>
                  <li>Verifying all components are installed as per specification</li>
                </ul>
              </div>
            </div>
          </LessonContent>
        </div>
        
        <div className="bg-[#22251e] border-[#FFC900]/20 rounded-lg border p-6 mt-8">
          <h3 className="text-[#FFC900] font-medium text-lg mb-4">Assessment Criteria</h3>
          <p className="text-[#FFC900]/70 mb-4">
            During the AM2 assessment, you'll be evaluated on your ability to:
          </p>
          <ul className="list-disc list-inside text-[#FFC900]/70 space-y-2">
            <li>Follow health and safety procedures throughout installation</li>
            <li>Complete installation within the allocated time frame</li>
            <li>Install equipment in accordance with specifications</li>
            <li>Ensure all connections are mechanically and electrically sound</li>
            <li>Maintain a clean and organized work area</li>
            <li>Correctly label all circuits and components</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export default InstallationPage;
