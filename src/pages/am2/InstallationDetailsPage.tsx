
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { handleNavigationLogic } from "@/utils/navigationUtils";
import CableTypes from "@/components/units/section305/CableTypes";
import DetailedContent from "@/components/units/section305/DetailedContent";

// Topic data mapping for the installation details
const topicContent: Record<string, {
  title: string;
  content: React.ReactNode;
}> = {
  "cable-preparation": {
    title: "Cable Preparation",
    content: (
      <>
        <CableTypes />
        <LessonContent title="Cable Preparation Techniques">
          <p className="mb-4">
            Proper cable preparation is essential for safe and reliable electrical installations. The AM2 assessment evaluates your ability to prepare cables correctly for various connections.
          </p>
          
          <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Stripping and Termination</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Remove appropriate length of outer sheath without damaging internal conductors</li>
            <li>Strip insulation from conductors to the correct length for the terminal</li>
            <li>Avoid nicking or damaging the conductor strands</li>
            <li>Ensure no exposed conductor beyond the terminal</li>
            <li>Maintain the correct twist direction for stranded conductors</li>
          </ul>
          
          <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Tools and Equipment</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Cable strippers - adjust to correct depth for cable type</li>
            <li>Wire strippers - select appropriate size for conductor</li>
            <li>Side cutters - for clean cuts without deformation</li>
            <li>Cable knife - used with care to avoid injury</li>
            <li>Terminal screwdrivers - correct size to avoid damage to terminal heads</li>
          </ul>
          
          <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Assessment Focus Points</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Consistent stripping lengths for similar connections</li>
            <li>No exposed copper at terminations</li>
            <li>Appropriate use of tools (safety and effectiveness)</li>
            <li>Clear labeling or identification where required</li>
            <li>Neatness and workmanship quality</li>
          </ul>
        </LessonContent>
      </>
    )
  },
  "containment-systems": {
    title: "Containment Systems",
    content: (
      <LessonContent title="Containment Systems Installation">
        <p className="mb-4">
          Containment systems are essential for protecting cables and providing secure routes for electrical installations. The AM2 assessment evaluates your ability to install different types of containment systems correctly.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Types of Containment Systems</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Conduit (metallic and non-metallic)</strong> - Provides mechanical protection</li>
          <li><strong>Trunking</strong> - Rectangular containment with removable lid</li>
          <li><strong>Cable tray</strong> - Open support system for multiple cables</li>
          <li><strong>Cable basket</strong> - Wire mesh system for flexibility and ventilation</li>
          <li><strong>Ladder rack</strong> - Heavy duty support for larger installations</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Installation Techniques</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Measuring and marking accurately before cutting</li>
          <li>Cutting cleanly without burrs or sharp edges</li>
          <li>Filing/deburring cut ends to prevent cable damage</li>
          <li>Correct spacing of supports (as per regulations)</li>
          <li>Maintaining minimum bend radii</li>
          <li>Ensuring proper alignment and levels</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Common Accessories</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Conduit</strong>: Bends, couplings, junction boxes, adaptors</li>
          <li><strong>Trunking</strong>: Internal/external angles, tees, crossovers</li>
          <li><strong>Cable tray</strong>: Bends, risers, reducers, fixings</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Assessment Focus Points</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Alignment and appearance - straight runs, even spacing</li>
          <li>Appropriate fixings for the environment and load</li>
          <li>Correct assembly of components and accessories</li>
          <li>System continuity (especially for metal conduit earthing)</li>
          <li>Adequate support at appropriate intervals</li>
          <li>Adherence to specified routes and positions</li>
        </ul>
      </LessonContent>
    )
  },
  "wiring-techniques": {
    title: "Wiring Techniques",
    content: (
      <LessonContent title="Wiring Techniques">
        <p className="mb-4">
          Effective wiring techniques ensure the safety, reliability, and professional appearance of electrical installations. The AM2 assessment evaluates your ability to implement proper wiring methods.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Cable Installation Principles</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Maintaining appropriate separation from other services</li>
          <li>Supporting cables at required intervals</li>
          <li>Observing minimum bend radii to prevent damage</li>
          <li>Avoiding mechanical stress and tension</li>
          <li>Protecting cables where they pass through structures</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Cable Routing Considerations</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Planning routes to minimize cable lengths</li>
          <li>Avoiding sources of heat or electromagnetic interference</li>
          <li>Ensuring accessibility for future maintenance</li>
          <li>Grouping cables logically by circuit or function</li>
          <li>Maintaining clearance from water pipes and other services</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Termination Techniques</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Consistent strip lengths for professional appearance</li>
          <li>Proper conductor insertion into terminals</li>
          <li>Correct torque settings for screw terminals</li>
          <li>Appropriate use of ferrules or bootlace terminals</li>
          <li>Cable gland selection and installation</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Assessment Focus Points</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Neat and tidy appearance of all wiring</li>
          <li>Logical cable routing and arrangement</li>
          <li>Secure and appropriate fixings</li>
          <li>Correct identification and labeling</li>
          <li>Compliance with regulations regarding segregation</li>
          <li>Quality of terminations and connections</li>
        </ul>
      </LessonContent>
    )
  },
  "equipment-installation": {
    title: "Equipment Installation",
    content: (
      <LessonContent title="Equipment Installation">
        <p className="mb-4">
          Installing electrical equipment properly is crucial for safe operation and long service life. The AM2 assessment evaluates your ability to mount and connect various electrical components correctly.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Positioning and Fixing</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Following specifications for heights and positions</li>
          <li>Using appropriate fixings for the wall/surface type</li>
          <li>Ensuring equipment is level and secure</li>
          <li>Maintaining required clearances for ventilation</li>
          <li>Considering accessibility for operation and maintenance</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Enclosure Integrity</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Maintaining IP ratings by using appropriate cable entries</li>
          <li>Ensuring gaskets or seals are correctly positioned</li>
          <li>Using cable glands of correct type and size</li>
          <li>Properly closing and securing covers</li>
          <li>Avoiding damage to enclosures during installation</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Common Equipment Installation</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Consumer units</strong>: Correct orientation, appropriate clearances</li>
          <li><strong>Distribution boards</strong>: Cable entry considerations, arrangement</li>
          <li><strong>Switches and sockets</strong>: Flush mounting, alignment</li>
          <li><strong>Luminaires</strong>: Support requirements, heat considerations</li>
          <li><strong>Control equipment</strong>: Accessibility, protection requirements</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Assessment Focus Points</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Equipment positioned according to specifications</li>
          <li>Secure and appropriate fixings used</li>
          <li>Level and aligned installations</li>
          <li>Integrity of protective enclosures maintained</li>
          <li>Correct cable entry methods</li>
          <li>Appropriate clearances and spacing</li>
        </ul>
      </LessonContent>
    )
  },
  "circuit-connections": {
    title: "Circuit Connections",
    content: (
      <>
        <LessonContent title="Circuit Connections">
          <p className="mb-4">
            Making proper circuit connections is fundamental to electrical safety and functionality. The AM2 assessment evaluates your ability to create reliable connections between components.
          </p>
          
          <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Terminal Connections</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Ensuring secure tightening of screw terminals</li>
            <li>Avoiding over-tightening that can damage conductors</li>
            <li>Checking that no insulation is trapped in the terminal</li>
            <li>Verifying no exposed conductor beyond the terminal</li>
            <li>Using appropriate terminal blocks for junctions</li>
          </ul>
          
          <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Circuit Protection</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Installing correct rating protective devices</li>
            <li>Proper connection of circuit breakers and RCDs</li>
            <li>Ensuring good contact with busbars</li>
            <li>Logical arrangement of protective devices</li>
            <li>Clear labeling of circuit functions</li>
          </ul>
          
          <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Distribution Board Connections</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Correct identification of phases, neutral and earth</li>
            <li>Proper termination at main switch</li>
            <li>Logical layout of circuits</li>
            <li>Neat arrangement of cables within the enclosure</li>
            <li>Appropriate cable management inside the board</li>
          </ul>
          
          <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Assessment Focus Points</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Quality and security of all connections</li>
            <li>Correct polarity throughout the installation</li>
            <li>Proper identification and labeling</li>
            <li>Logical arrangement of circuits</li>
            <li>Neatness and workmanship</li>
            <li>Compliance with regulations and manufacturer instructions</li>
          </ul>
        </LessonContent>
        <DetailedContent />
      </>
    )
  },
  "control-systems": {
    title: "Control Systems",
    content: (
      <LessonContent title="Control Systems">
        <p className="mb-4">
          Control systems manage the operation of electrical circuits and equipment. The AM2 assessment evaluates your understanding and implementation of various control methods.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Control System Components</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Switches</strong>: One-way, two-way, intermediate, key operated</li>
          <li><strong>Contactors</strong>: Power switching for motors and high loads</li>
          <li><strong>Relays</strong>: Control circuit switching and logic functions</li>
          <li><strong>Sensors</strong>: Motion, light, temperature detection</li>
          <li><strong>Timers</strong>: Scheduled or delayed operation of circuits</li>
          <li><strong>Programmable controllers</strong>: Logic-based control systems</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Control Circuit Wiring</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Distinguishing between control and power circuits</li>
          <li>Appropriate cable sizing for control functions</li>
          <li>Separation of control and power wiring</li>
          <li>Logical arrangement and identification</li>
          <li>Consideration of voltage drop in lengthy control circuits</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Common Control Configurations</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Lighting control circuits (one-way, two-way, intermediate)</li>
          <li>Motor control circuits (direct-on-line, star-delta)</li>
          <li>Time-controlled systems</li>
          <li>Sequence control systems</li>
          <li>Interlocking safety systems</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Assessment Focus Points</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Correct implementation of control circuit diagrams</li>
          <li>Understanding of control system operation</li>
          <li>Proper labeling of control components</li>
          <li>Logical arrangement of control wiring</li>
          <li>Functional testing of control operations</li>
          <li>Troubleshooting of control circuit issues</li>
        </ul>
      </LessonContent>
    )
  },
};

const InstallationDetailsPage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  
  // Redirect if topic doesn't exist
  useEffect(() => {
    if (!topicId || !topicContent[topicId]) {
      navigate('/apprentices/study-materials/city-guilds/am2/installation');
    }
  }, [topicId, navigate]);

  const handleBackClick = () => {
    handleNavigationLogic(
      { pathname: window.location.pathname } as any,
      navigate
    );
  };

  // If topic doesn't exist, return nothing (will redirect in useEffect)
  if (!topicId || !topicContent[topicId]) {
    return null;
  }

  const topic = topicContent[topicId];
  
  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader
          title={`AM2 Installation: ${topic.title}`}
          description="Study material for AM2 assessment preparation"
          hideBackButton={false}
          customBackAction={handleBackClick}
        />
        
        <div className="mt-6">
          <Button 
            variant="outline" 
            className="flex items-center mb-6"
            onClick={() => navigate('/apprentices/study-materials/city-guilds/am2/installation')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Installation Topics
          </Button>
          
          <ContentSection
            title={`Learning Objectives: ${topic.title}`}
            content={
              <div className="space-y-2">
                <p>After studying this section, you should be able to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Understand key principles and techniques for {topic.title.toLowerCase()}</li>
                  <li>Identify common tools and materials used in this process</li>
                  <li>Apply best practices according to industry standards</li>
                  <li>Recognize common issues and how to avoid them</li>
                  <li>Prepare effectively for the AM2 assessment in this area</li>
                </ul>
              </div>
            }
          />
          
          {topic.content}
          
          <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-medium text-[#FFC900] mb-4">Assessment Tips</h3>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Read the assessment requirements carefully before beginning</li>
              <li>Demonstrate proper use of tools and equipment</li>
              <li>Work methodically and maintain a clean work area</li>
              <li>Pay attention to detail in all aspects of your work</li>
              <li>Verify compliance with regulations throughout your installation</li>
              <li>Double-check all connections before testing</li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default InstallationDetailsPage;
