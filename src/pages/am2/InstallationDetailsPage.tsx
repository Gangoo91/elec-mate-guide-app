
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
  "reading-drawings": {
    title: "Reading and Interpreting Drawings",
    content: (
      <LessonContent title="Reading and Interpreting Drawings">
        <p className="mb-4">
          The ability to correctly interpret electrical drawings is essential for successful installations. The AM2 assessment evaluates your skill in understanding various types of technical drawings.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Types of Electrical Drawings</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Schematic diagrams</strong>: Show circuit connections and component relationships</li>
          <li><strong>Wiring diagrams</strong>: Illustrate physical wire connections between components</li>
          <li><strong>Layout drawings</strong>: Show physical positions of equipment in a space</li>
          <li><strong>Block diagrams</strong>: Simplified representations of system functions</li>
          <li><strong>Single-line diagrams</strong>: Simplified representation of power distribution</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Drawing Conventions</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Standard electrical symbols according to BS EN 60617</li>
          <li>Drawing scales and dimensions</li>
          <li>Reference designations and component identifiers</li>
          <li>Drawing sections and cross-references</li>
          <li>Drawing revision and version control</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Interpreting Specifications</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Equipment schedules and lists</li>
          <li>Technical specifications and datasheets</li>
          <li>Installation requirements and notes</li>
          <li>Special instructions and conditions</li>
          <li>Regulatory requirements and standards compliance</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Assessment Focus Points</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Accurate interpretation of symbols and notations</li>
          <li>Translating drawings into physical installations</li>
          <li>Identifying equipment locations and mounting heights</li>
          <li>Understanding circuit paths and cable routes</li>
          <li>Recognizing requirements for specific installations</li>
          <li>Identifying relationships between different drawing types</li>
        </ul>
      </LessonContent>
    )
  },
  "tools-equipment": {
    title: "Tools and Equipment Selection",
    content: (
      <LessonContent title="Tools and Equipment Selection">
        <p className="mb-4">
          Selecting and using the right tools is crucial for efficient and safe electrical installations. The AM2 assessment evaluates your ability to choose and use appropriate tools for specific tasks.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Essential Hand Tools</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Screwdrivers</strong>: Flat, Phillips, Pozidriv, terminal, VDE insulated</li>
          <li><strong>Pliers</strong>: Combination, long-nose, side-cutting, crimping</li>
          <li><strong>Wire strippers</strong>: For various cable sizes and types</li>
          <li><strong>Cable cutters</strong>: For different cable types and thicknesses</li>
          <li><strong>Spanners and wrenches</strong>: For mechanical fixings and connections</li>
          <li><strong>Measuring tools</strong>: Tape measure, rule, spirit level</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Power Tools</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Drills</strong>: Cordless, hammer, SDS for various drilling applications</li>
          <li><strong>Electric screwdrivers</strong>: For efficient fixing installation</li>
          <li><strong>Knockout punches</strong>: For creating precise holes in enclosures</li>
          <li><strong>Cable threading tools</strong>: For pulling cables through containment</li>
          <li><strong>Pipe benders</strong>: For creating accurate conduit bends</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Specialized Tools</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Test equipment</strong>: Multimeter, voltage indicator, continuity tester</li>
          <li><strong>Cable identification tools</strong>: Cable tracers and identifiers</li>
          <li><strong>Threading equipment</strong>: For threaded conduit systems</li>
          <li><strong>Hydraulic crimpers</strong>: For larger cable terminations</li>
          <li><strong>Heat guns</strong>: For heat-shrink applications</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Safety Equipment</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Personal protective equipment (PPE)</strong>: Safety glasses, gloves, etc.</li>
          <li><strong>Insulated tools</strong>: VDE certified for electrical safety</li>
          <li><strong>Voltage indicators</strong>: For safe isolation verification</li>
          <li><strong>Lock-off devices</strong>: For securing isolated equipment</li>
          <li><strong>Warning signs and barriers</strong>: For work area safety</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Assessment Focus Points</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Selection of appropriate tools for specific tasks</li>
          <li>Safe and correct use of tools</li>
          <li>Proper maintenance and condition of tools</li>
          <li>Efficiency and skill in tool handling</li>
          <li>Use of proper safety equipment</li>
        </ul>
      </LessonContent>
    )
  },
  "material-identification": {
    title: "Material Identification",
    content: (
      <LessonContent title="Material Identification">
        <p className="mb-4">
          Proper identification and selection of electrical materials is essential for compliant and safe installations. The AM2 assessment evaluates your knowledge of different materials and their applications.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Cable Types and Identification</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>PVC insulated and sheathed cables</strong>: Twin and earth, 3-core and earth</li>
          <li><strong>XLPE insulated cables</strong>: Higher temperature rating applications</li>
          <li><strong>SWA (Steel Wire Armored)</strong>: For outdoor and underground applications</li>
          <li><strong>FP (Fire Performance)</strong>: For fire alarm and emergency systems</li>
          <li><strong>LSF/LSZH</strong>: Low Smoke and Fume/Low Smoke Zero Halogen cables</li>
          <li><strong>Flexible cords</strong>: For portable equipment and pendant luminaires</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Conductor Identification</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Live conductors</strong>: Brown (single phase), Brown/Black/Grey (three phase)</li>
          <li><strong>Neutral conductor</strong>: Blue</li>
          <li><strong>Protective conductor</strong>: Green and Yellow</li>
          <li><strong>Switched live</strong>: Various colors with brown sleeve identification</li>
          <li><strong>Special applications</strong>: Orange for maintained supplies in fire systems</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Containment Materials</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Metal conduit</strong>: Heavy gauge, medium gauge, and accessories</li>
          <li><strong>PVC conduit</strong>: Various sizes and fittings</li>
          <li><strong>Metal trunking</strong>: Standard, slotted, and specialty types</li>
          <li><strong>PVC trunking</strong>: Mini, skirting, dado, and specialty types</li>
          <li><strong>Cable tray</strong>: Various widths, depths, and load ratings</li>
          <li><strong>Cable basket</strong>: Different mesh sizes and load capacities</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Fixings and Accessories</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Clips and saddles</strong>: For various cable and conduit types</li>
          <li><strong>Fasteners</strong>: Screws, bolts, rawl plugs, cavity fixings</li>
          <li><strong>Adaptors and connectors</strong>: For joining different containment types</li>
          <li><strong>Cable glands</strong>: Standard, weatherproof, explosive atmosphere types</li>
          <li><strong>Junction boxes</strong>: Various types for different environments</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Assessment Focus Points</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Correct identification of cable types and sizes</li>
          <li>Appropriate selection for specific applications</li>
          <li>Compliance with regulations regarding material selection</li>
          <li>Understanding of material ratings and limitations</li>
          <li>Proper selection of fixings for specific environments</li>
        </ul>
      </LessonContent>
    )
  },
  "cable-containment": {
    title: "Cable Containment Systems",
    content: (
      <LessonContent title="Cable Containment Systems">
        <p className="mb-4">
          Containment systems provide protection and support for cables throughout an installation. The AM2 assessment evaluates your ability to select, install, and properly use various containment systems.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Conduit Systems</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Metal conduit</strong>: Threading, bending, and termination techniques</li>
          <li><strong>PVC conduit</strong>: Cutting, joining, and expansion consideration</li>
          <li><strong>Flexible conduit</strong>: Selection and termination methods</li>
          <li><strong>Adaptors and fittings</strong>: Proper selection and installation</li>
          <li><strong>Inspection fittings</strong>: Positioning for cable access</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Trunking Systems</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Metal trunking</strong>: Cutting, joining, and earthing requirements</li>
          <li><strong>PVC trunking</strong>: Cutting, joining, and thermal expansion</li>
          <li><strong>Mini trunking</strong>: Applications and limitations</li>
          <li><strong>Skirting and dado trunking</strong>: Power and data segregation</li>
          <li><strong>Fittings and accessories</strong>: Internal, external corners, tees</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Cable Tray and Basket</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Cable tray</strong>: Cutting, joining, and supporting methods</li>
          <li><strong>Cable basket</strong>: Cutting, joining, and fixing techniques</li>
          <li><strong>Load calculations</strong>: Ensuring adequate support</li>
          <li><strong>Bends and risers</strong>: Forming and supporting</li>
          <li><strong>Cable fixing</strong>: Ties, cleats, and retention methods</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Installation Techniques</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Support spacings</strong>: Following manufacturer recommendations</li>
          <li><strong>Fire barriers</strong>: Installation at compartment penetrations</li>
          <li><strong>Earthing</strong>: Continuity across metallic containment sections</li>
          <li><strong>Capacity calculations</strong>: Ensuring appropriate fill ratios</li>
          <li><strong>Expansion allowances</strong>: For longer runs and temperature changes</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Assessment Focus Points</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Selection of appropriate containment type for application</li>
          <li>Quality of cutting, bending, and joining</li>
          <li>Secure and adequate fixing methods</li>
          <li>Proper alignment and appearance</li>
          <li>Maintenance of earthing continuity</li>
          <li>Appropriate use of fittings and accessories</li>
        </ul>
      </LessonContent>
    )
  },
  "consumer-unit": {
    title: "Consumer Unit Installation",
    content: (
      <LessonContent title="Consumer Unit Installation">
        <p className="mb-4">
          Consumer unit installation is a critical part of electrical systems, providing circuit protection and control. The AM2 assessment evaluates your skills in correctly installing and connecting consumer units.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Positioning and Fixing</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Height requirements and accessibility considerations</li>
          <li>Clearances around the consumer unit for access</li>
          <li>Appropriate fixing methods for wall type</li>
          <li>Level and secure mounting</li>
          <li>Fire-rated enclosures where required</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Circuit Protective Devices</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Main switch</strong>: Correct rating and operation</li>
          <li><strong>MCBs (Miniature Circuit Breakers)</strong>: Appropriate ratings for circuits</li>
          <li><strong>RCDs (Residual Current Devices)</strong>: Selection and arrangement</li>
          <li><strong>RCBOs (Residual Current Breaker with Overcurrent)</strong>: Applications</li>
          <li><strong>Surge protection devices</strong>: Where required and how connected</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Cable Entry and Termination</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Maintaining the fire integrity of the enclosure</li>
          <li>Appropriate cable entry methods and glands</li>
          <li>Correct stripping lengths for terminations</li>
          <li>Secure termination of conductors</li>
          <li>Cable management within the consumer unit</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Circuit Arrangement</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Logical arrangement of circuit breakers</li>
          <li>RCD protection groups and selectivity</li>
          <li>Balanced load distribution across phases</li>
          <li>Clear circuit identification and labeling</li>
          <li>Isolation strategy for essential and non-essential circuits</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Assessment Focus Points</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Compliance with BS 7671 regulations</li>
          <li>Neatness and organization of wiring</li>
          <li>Quality and security of terminations</li>
          <li>Correct circuit identification and labeling</li>
          <li>Appropriate protective device selection</li>
          <li>Overall safety of the installation</li>
        </ul>
      </LessonContent>
    )
  },
  "wiring-systems": {
    title: "Wiring Systems Installation",
    content: (
      <LessonContent title="Wiring Systems Installation">
        <p className="mb-4">
          Proper installation of wiring systems ensures the safety and reliability of electrical installations. The AM2 assessment evaluates your ability to select and install appropriate wiring systems.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Cable Selection Principles</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Current-carrying capacity considerations</li>
          <li>Voltage drop calculations</li>
          <li>Environmental factors affecting selection</li>
          <li>Mechanical protection requirements</li>
          <li>Special conditions (heat, moisture, corrosives)</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Installation Methods</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Surface wiring</strong>: Clipped direct, on battens</li>
          <li><strong>Concealed wiring</strong>: In walls, floors, ceilings</li>
          <li><strong>Containment systems</strong>: Conduit, trunking, cable tray</li>
          <li><strong>Buried cables</strong>: Underground and in structures</li>
          <li><strong>Overhead systems</strong>: Support and tension requirements</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Cable Support and Protection</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Maximum spacing of supports for different cable types</li>
          <li>Protection at bends and changes of direction</li>
          <li>Mechanical protection in vulnerable areas</li>
          <li>Penetration of structural elements</li>
          <li>Fire stopping at compartment boundaries</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Separation Requirements</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Separation from non-electrical services</li>
          <li>Segregation of circuits of different types</li>
          <li>Low voltage and extra-low voltage separation</li>
          <li>Data and power cable separation</li>
          <li>EMC considerations for sensitive equipment</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Assessment Focus Points</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Appropriate selection of wiring systems</li>
          <li>Correct installation methods for the environment</li>
          <li>Adequate support and protection</li>
          <li>Maintenance of separation/segregation requirements</li>
          <li>Compliance with regulations and standards</li>
          <li>Neatness and workmanship quality</li>
        </ul>
      </LessonContent>
    )
  },
  "power-circuits": {
    title: "Power Circuits",
    content: (
      <LessonContent title="Power Circuits">
        <p className="mb-4">
          Power circuits provide electrical supply to outlets and fixed equipment. The AM2 assessment evaluates your ability to install various types of power circuits correctly.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Ring Final Circuits</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Requirements for 32A ring final circuits</li>
          <li>Cable sizing (typically 2.5mm²)</li>
          <li>Maximum floor area coverage (100m²)</li>
          <li>Connection methods and testing</li>
          <li>Spurs from ring circuits - limitations</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Radial Circuits</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>20A radial circuit requirements</li>
          <li>Cable sizing considerations</li>
          <li>Maximum floor area coverage</li>
          <li>Fixed equipment radial circuits</li>
          <li>Protective device coordination</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Dedicated Circuits</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Cooker circuits - requirements and connection</li>
          <li>Shower circuits - special considerations</li>
          <li>Water heater installations</li>
          <li>Outdoor power supplies</li>
          <li>Special equipment power requirements</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Socket Outlet Installation</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Positioning and height requirements</li>
          <li>Back box selection and fixing</li>
          <li>Connections and terminations</li>
          <li>IP ratings for different environments</li>
          <li>Special location considerations (kitchens, bathrooms)</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Circuit Protection</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Overcurrent protection selection</li>
          <li>RCD protection requirements</li>
          <li>RCBO application for individual circuits</li>
          <li>Discrimination between protective devices</li>
          <li>Supplementary protection requirements</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Assessment Focus Points</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Correct circuit design and implementation</li>
          <li>Appropriate cable selection and sizing</li>
          <li>Quality of connections and terminations</li>
          <li>Compliance with current regulations</li>
          <li>Circuit testing and verification</li>
          <li>Clear labeling and identification</li>
        </ul>
      </LessonContent>
    )
  },
  "lighting-circuits": {
    title: "Lighting Circuits",
    content: (
      <LessonContent title="Lighting Circuits">
        <p className="mb-4">
          Lighting circuits provide illumination through various control arrangements. The AM2 assessment evaluates your ability to install and connect different lighting control systems.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Basic Lighting Circuits</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Cable sizing for lighting circuits (typically 1.5mm²)</li>
          <li>Maximum number of lighting points per circuit</li>
          <li>Current rating of protective devices (typically 6A or 10A)</li>
          <li>Circuit arrangements and distribution</li>
          <li>Junction box connections and terminations</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Switching Arrangements</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>One-way switching</strong>: Wiring method and connections</li>
          <li><strong>Two-way switching</strong>: Wiring configuration and operation</li>
          <li><strong>Intermediate switching</strong>: For control from multiple locations</li>
          <li><strong>Pull-cord switching</strong>: Bathroom and special applications</li>
          <li><strong>PIR and occupancy sensors</strong>: Connection and setup</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Luminaire Installation</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Ceiling mounting methods and weight considerations</li>
          <li>Recessed downlight installation requirements</li>
          <li>Fire-rated fittings and insulation clearances</li>
          <li>Pendant and suspended luminaire installation</li>
          <li>Outdoor and special environment lighting</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Special Lighting Systems</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Emergency lighting circuits and requirements</li>
          <li>Low voltage lighting and transformers</li>
          <li>LED lighting systems and drivers</li>
          <li>Dimming systems and compatibility</li>
          <li>External and decorative lighting</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Assessment Focus Points</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Correct wiring of switching arrangements</li>
          <li>Proper termination and connection methods</li>
          <li>Secure mounting of luminaires and accessories</li>
          <li>Adequate support for cables and containment</li>
          <li>Compliance with regulations for specific areas</li>
          <li>Functional testing of completed circuits</li>
        </ul>
      </LessonContent>
    )
  },
  "special-locations": {
    title: "Special Locations",
    content: (
      <LessonContent title="Special Locations">
        <p className="mb-4">
          Special locations require specific installation techniques and protective measures. The AM2 assessment evaluates your understanding of requirements for installations in locations with increased risk.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Bathrooms and Shower Rooms</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Zone classification and requirements</li>
          <li>IP ratings for equipment in different zones</li>
          <li>Supplementary bonding requirements</li>
          <li>Permitted equipment and switching arrangements</li>
          <li>RCD protection requirements</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Outdoor Installations</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Weather resistant enclosures and IP ratings</li>
          <li>Cable selection for external environments</li>
          <li>Underground cable installation methods</li>
          <li>Protection against mechanical damage</li>
          <li>Earthing and bonding considerations</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Kitchens and Utility Areas</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Socket outlet positioning relative to sinks</li>
          <li>Dedicated circuits for appliances</li>
          <li>Cable routes and protection in kitchen environments</li>
          <li>Isolation requirements for fixed equipment</li>
          <li>Heat resistant cable selection near cooking appliances</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Other Special Locations</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Swimming pool installations</li>
          <li>Agricultural and horticultural premises</li>
          <li>Construction and demolition sites</li>
          <li>Exhibitions and temporary structures</li>
          <li>Solar photovoltaic installations</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Assessment Focus Points</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Compliance with specific regulations for special locations</li>
          <li>Correct application of protective measures</li>
          <li>Appropriate equipment selection for the environment</li>
          <li>Installation techniques suited to location</li>
          <li>Understanding of safety requirements for high-risk areas</li>
          <li>Verification of protective measures</li>
        </ul>
      </LessonContent>
    )
  },
  "time-management": {
    title: "Time Management",
    content: (
      <LessonContent title="Time Management">
        <p className="mb-4">
          Effective time management is crucial for completing the AM2 assessment within the allocated timeframe. This section provides strategies for planning and organizing your work efficiently.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Assessment Time Structure</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Understanding the total time allocation for each section</li>
          <li>Breakdown of installation tasks and time requirements</li>
          <li>Testing and inspection time allowance</li>
          <li>Documentation completion requirements</li>
          <li>Contingency planning for unforeseen issues</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Work Planning</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Reading and understanding assessment requirements thoroughly</li>
          <li>Creating a mental or written task sequence</li>
          <li>Identifying critical path activities</li>
          <li>Organizing tools and materials before starting</li>
          <li>Prioritizing tasks in logical order</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Efficient Working Practices</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Minimize unnecessary movements and tool changes</li>
          <li>Batch similar tasks where possible</li>
          <li>Maintain a tidy work area to reduce searching time</li>
          <li>Use appropriate tools for the task</li>
          <li>Apply systematic approaches to repetitive tasks</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Progress Monitoring</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Regular time checks against planned progress</li>
          <li>Adjusting pace or approach if falling behind</li>
          <li>Identifying potential bottlenecks early</li>
          <li>Making informed decisions about task priorities</li>
          <li>Ensuring quality is maintained despite time pressure</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Assessment Focus Points</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Completion of all required tasks within time limits</li>
          <li>Balance between speed and quality of work</li>
          <li>Methodical approach to complex tasks</li>
          <li>Adaptability to changing priorities</li>
          <li>Calm and focused work under time pressure</li>
        </ul>
      </LessonContent>
    )
  },
  "common-pitfalls": {
    title: "Common Pitfalls",
    content: (
      <LessonContent title="Common Pitfalls">
        <p className="mb-4">
          Awareness of common errors and challenges can help you avoid them during the AM2 assessment. This section highlights typical mistakes and provides guidance on preventing them.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Interpretation Errors</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Misreading drawings or specifications</li>
          <li>Incorrect understanding of symbol meanings</li>
          <li>Missing important notes or instructions</li>
          <li>Assumptions without verification</li>
          <li>Confusion between similar components</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Installation Mistakes</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Incorrect positioning of equipment</li>
          <li>Inadequate fixings for the situation</li>
          <li>Poor cable management and routing</li>
          <li>Incorrect containment support spacing</li>
          <li>Damage to cables during installation</li>
          <li>Improper bending techniques for conduit</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Connection and Termination Issues</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Loose connections at terminals</li>
          <li>Exposed conductors beyond terminals</li>
          <li>Incorrect polarity in connections</li>
          <li>Insulation trapped in terminals</li>
          <li>Conductors damaged during stripping</li>
          <li>Incorrect identification of conductors</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Testing and Verification Problems</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Incomplete testing sequences</li>
          <li>Incorrect test instrument selection or settings</li>
          <li>Failure to record test results accurately</li>
          <li>Overlooking critical tests</li>
          <li>Incorrect interpretation of test results</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Assessment Focus Points</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Double-checking measurements and positions</li>
          <li>Verifying polarity before energizing</li>
          <li>Inspecting all connections before closing enclosures</li>
          <li>Following systematic testing procedures</li>
          <li>Careful reading of all instructions</li>
          <li>Maintaining focus despite time pressure</li>
        </ul>
      </LessonContent>
    )
  },
  "final-checks": {
    title: "Final Checks",
    content: (
      <LessonContent title="Final Checks">
        <p className="mb-4">
          Thorough final checks ensure your installation meets all requirements before assessment completion. This section covers the key verification steps to perform before submission.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Visual Inspection</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Comprehensive review of all installed components</li>
          <li>Verification of correct positioning and alignment</li>
          <li>Checking that all fixings are secure</li>
          <li>Confirming all covers and accessories are in place</li>
          <li>Ensuring workmanship meets quality standards</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Mechanical Checks</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Testing security of all mounted equipment</li>
          <li>Confirming tightness of accessible terminations</li>
          <li>Checking operation of mechanical components</li>
          <li>Verifying appropriate clearances maintained</li>
          <li>Confirming cable support and protection</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Electrical Verification</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Continuity of protective conductors</li>
          <li>Insulation resistance verification</li>
          <li>Polarity checks at all connection points</li>
          <li>Functional testing of installed equipment</li>
          <li>Operation of protective devices</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Compliance Verification</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Checking against drawings and specifications</li>
          <li>Verification of compliance with regulations</li>
          <li>Confirming all required components are installed</li>
          <li>Checking labels and identification are in place</li>
          <li>Ensuring documentation is complete</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900] mb-2">Assessment Focus Points</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Systematic approach to final checks</li>
          <li>Attention to detail throughout the installation</li>
          <li>Documentation of checks performed</li>
          <li>Prompt correction of any identified issues</li>
          <li>Final verification that installation is complete and safe</li>
          <li>General appearance and professionalism of work</li>
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
