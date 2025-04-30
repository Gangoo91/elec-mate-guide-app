
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen } from "lucide-react";
import { LearningObjective } from "@/components/units/LearningObjective";

// Import installation study content
import {
  installationPlanningSection1_1,
  installationPlanningSection1_2,
  installationPlanningSection1_3,
  installationPlanningSection2_1,
  installationPlanningSection2_2,
  installationPlanningSection2_3,
  installationPlanningSection3_1,
  installationPlanningSection3_2,
  installationPlanningSection3_3,
} from '@/data/units/sections/engineering/installationPlanning';

const InstallationDetailsPage = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  
  // Helper function to get the section title based on topicId
  const getSectionTitle = () => {
    switch (topicId) {
      case 'reading-drawings': return 'Reading and Interpreting Drawings';
      case 'tools-equipment': return 'Tools and Equipment Selection';
      case 'material-identification': return 'Material Identification';
      case 'cable-containment': return 'Cable Containment Systems';
      case 'consumer-unit': return 'Consumer Unit Installation';
      case 'wiring-systems': return 'Wiring Systems Installation';
      case 'power-circuits': return 'Power Circuits';
      case 'lighting-circuits': return 'Lighting Circuits';
      case 'special-locations': return 'Special Locations';
      case 'cable-preparation': return 'Cable Preparation';
      case 'connection-methods': return 'Connection Methods';
      case 'quality-control': return 'Quality Control';
      case 'time-management': return 'Time Management';
      case 'common-pitfalls': return 'Common Pitfalls';
      case 'final-checks': return 'Final Checks';
      default: return 'Installation Study';
    }
  };

  // Get content based on topic ID
  const getContent = () => {
    switch (topicId) {
      case 'reading-drawings':
        return (
          <>
            <LearningObjective title="Understanding Electrical Drawings">
              <div className="space-y-4">
                <p>
                  Electrical drawings are essential for communicating installation requirements. Understanding how 
                  to read and interpret these drawings is a fundamental skill for the AM2 assessment.
                </p>
                <h4 className="text-[#FFC900] font-medium">Key Drawing Types:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Circuit diagrams:</strong> Show electrical connections between components</li>
                  <li><strong>Wiring diagrams:</strong> Illustrate physical wiring layout and connections</li>
                  <li><strong>Layout drawings:</strong> Show positions of electrical equipment within a building</li>
                  <li><strong>Schematic diagrams:</strong> Simplified representations of electrical systems</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Electrical Symbols">
              <div className="space-y-4">
                <p>
                  British Standard electrical symbols are used in drawings to represent different components.
                  For the AM2 assessment, you must be able to identify common symbols accurately.
                </p>
                <h4 className="text-[#FFC900] font-medium">Common Symbols:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Socket outlets (single and double)</li>
                  <li>Light fittings and switches</li>
                  <li>Distribution boards and consumer units</li>
                  <li>Junction boxes and connection points</li>
                  <li>Earth points and bonding connections</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Scale and Dimensions">
              <div className="space-y-4">
                <p>
                  Accurately working with scales and dimensions is crucial for positioning equipment correctly.
                </p>
                <h4 className="text-[#FFC900] font-medium">Key Scale Considerations:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Understanding scale ratios (e.g., 1:50, 1:100)</li>
                  <li>Using measuring tools to transfer dimensions from drawings to work areas</li>
                  <li>Accounting for building features not shown on electrical drawings</li>
                  <li>Making accurate measurements for equipment positioning</li>
                </ul>
              </div>
            </LearningObjective>
            
            <div className="mt-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
              <h3 className="text-[#FFC900] font-medium text-lg mb-4">Assessment Tips</h3>
              <ul className="list-disc list-inside text-[#FFC900]/70 space-y-2">
                <li>Always check drawing scales before starting any layout work</li>
                <li>Verify symbol meanings if you are unsure</li>
                <li>Cross-reference different drawing types to build a complete understanding</li>
                <li>Pay attention to drawing revisions and updates</li>
                <li>Make notes on your drawings during installation for future reference</li>
              </ul>
            </div>
          </>
        );
      
      case 'tools-equipment':
        return (
          <>
            <LearningObjective title="Hand Tools for Electrical Installation">
              <div className="space-y-4">
                <p>
                  Selecting the appropriate tools for each task is essential for efficient and safe installation work.
                  The AM2 assessment will expect you to demonstrate proper tool selection and usage.
                </p>
                <h4 className="text-[#FFC900] font-medium">Essential Hand Tools:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Screwdrivers:</strong> Slotted, Phillips, Pozidriv, and VDE insulated types</li>
                  <li><strong>Pliers and cutters:</strong> Side cutters, combination pliers, long-nose pliers</li>
                  <li><strong>Cable preparation tools:</strong> Wire strippers, cable knives</li>
                  <li><strong>Measurement tools:</strong> Tape measure, spirit level, try square</li>
                  <li><strong>Marking tools:</strong> Pencils, markers, scribes</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Power Tools">
              <div className="space-y-4">
                <p>
                  Power tools speed up installation work but require careful handling for safety and accuracy.
                </p>
                <h4 className="text-[#FFC900] font-medium">Common Power Tools:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Drills:</strong> Cordless and corded options for different materials</li>
                  <li><strong>Hammer drills:</strong> For masonry and concrete surfaces</li>
                  <li><strong>Impact drivers:</strong> For rapid screw insertion</li>
                  <li><strong>Jigsaws and hole saws:</strong> For cutting openings in panels</li>
                </ul>
                <h4 className="text-[#FFC900] font-medium mt-4">Safety Considerations:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Always inspect power tools before use</li>
                  <li>Use appropriate PPE (eye protection, ear protection, etc.)</li>
                  <li>Follow manufacturer's instructions for tool operation</li>
                  <li>Ensure tools are PAT tested and safe to use</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Specialized Installation Equipment">
              <div className="space-y-4">
                <p>
                  Some installation tasks require specialized equipment to complete efficiently.
                </p>
                <h4 className="text-[#FFC900] font-medium">Specialized Equipment:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Conduit benders:</strong> For accurate bending of metallic conduit</li>
                  <li><strong>Cable reels and dispensers:</strong> For efficient cable handling</li>
                  <li><strong>Cable pulling equipment:</strong> For drawing cables through containment</li>
                  <li><strong>Pipe threading equipment:</strong> For threaded metallic conduit systems</li>
                </ul>
              </div>
            </LearningObjective>
            
            <div className="mt-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
              <h3 className="text-[#FFC900] font-medium text-lg mb-4">Assessment Tips</h3>
              <ul className="list-disc list-inside text-[#FFC900]/70 space-y-2">
                <li>Maintain a clean and organized tool arrangement during assessment</li>
                <li>Select the correct tool for each specific task</li>
                <li>Demonstrate proper tool handling techniques</li>
                <li>Use insulated tools for electrical work</li>
                <li>Return tools to their proper storage when not in use</li>
              </ul>
            </div>
          </>
        );
      
      case 'material-identification':
        return (
          <>
            <LearningObjective title="Cable Types and Selection">
              <div className="space-y-4">
                <p>
                  Proper identification and selection of cables is crucial for compliance with regulations 
                  and ensuring the safety and durability of installations.
                </p>
                <h4 className="text-[#FFC900] font-medium">Common Cable Types:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Twin and Earth (6242Y):</strong> Standard for domestic fixed wiring</li>
                  <li><strong>Single-core cables:</strong> Used for switchgear and consumer units</li>
                  <li><strong>SWA (Steel Wire Armored):</strong> For external and underground installations</li>
                  <li><strong>FP (Fire Performance):</strong> Fire-resistant cables for critical circuits</li>
                  <li><strong>LSHF (Low Smoke Halogen Free):</strong> For public buildings and escape routes</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Protective Devices">
              <div className="space-y-4">
                <p>
                  Identifying and selecting appropriate protective devices is essential for electrical safety.
                </p>
                <h4 className="text-[#FFC900] font-medium">Types of Protection:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>MCBs (Miniature Circuit Breakers):</strong> Types B, C, and D for different applications</li>
                  <li><strong>RCDs (Residual Current Devices):</strong> 30mA for additional protection, 100mA for fire protection</li>
                  <li><strong>RCBOs (Combined MCB and RCD):</strong> For individual circuit protection</li>
                  <li><strong>Surge Protection Devices:</strong> For protecting against voltage spikes</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Fixings and Accessories">
              <div className="space-y-4">
                <p>
                  Selecting appropriate fixings and accessories ensures secure and compliant installations.
                </p>
                <h4 className="text-[#FFC900] font-medium">Common Fixings:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Wall plugs and screws:</strong> Matched to surface material and load requirements</li>
                  <li><strong>Cable clips and cleats:</strong> Appropriate sizing for cable diameter</li>
                  <li><strong>Pipe clips and saddles:</strong> For secure conduit and trunking mounting</li>
                  <li><strong>Glands and grommets:</strong> For cable entry protection</li>
                </ul>
                <h4 className="text-[#FFC900] font-medium mt-4">Accessory Selection:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Appropriate IP ratings for the environment</li>
                  <li>Load ratings matched to circuit requirements</li>
                  <li>Material suitability for location</li>
                  <li>Compatibility with connected equipment</li>
                </ul>
              </div>
            </LearningObjective>
            
            <div className="mt-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
              <h3 className="text-[#FFC900] font-medium text-lg mb-4">Assessment Tips</h3>
              <ul className="list-disc list-inside text-[#FFC900]/70 space-y-2">
                <li>Always check material specifications against requirements</li>
                <li>Verify cable markings to ensure correct type selection</li>
                <li>Choose fixings appropriate to the surface material</li>
                <li>Select accessories with appropriate ratings for the environment</li>
                <li>Ensure all materials used comply with current regulations</li>
              </ul>
            </div>
          </>
        );
      
      case 'cable-containment':
        return (
          <>
            <LearningObjective title="Types of Cable Containment Systems">
              <div className="space-y-4">
                <p>
                  Cable containment systems provide mechanical protection and support for cables, ensuring a professional 
                  and compliant installation.
                </p>
                <h4 className="text-[#FFC900] font-medium">Common Containment Systems:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Metal trunking:</strong> Rectangular containment for multiple cables</li>
                  <li><strong>PVC trunking:</strong> Non-metallic alternative for dry environments</li>
                  <li><strong>Steel conduit:</strong> Robust protection with excellent EMI shielding</li>
                  <li><strong>PVC conduit:</strong> Lightweight alternative for non-hostile environments</li>
                  <li><strong>Cable tray:</strong> Open support system for multiple cables</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Installation Techniques">
              <div className="space-y-4">
                <p>
                  Proper installation techniques ensure containment systems are secure, accessible, and 
                  provide adequate protection to cables.
                </p>
                <h4 className="text-[#FFC900] font-medium">Key Installation Practices:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Measuring and cutting:</strong> Accurate sizing and clean cuts</li>
                  <li><strong>Bending methods:</strong> Using appropriate benders to avoid kinking</li>
                  <li><strong>Fixing methods:</strong> Selecting appropriate brackets and fixings</li>
                  <li><strong>Joint preparation:</strong> Ensuring secure and smooth connections</li>
                  <li><strong>System integrity:</strong> Maintaining continuity throughout</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Regulatory Requirements">
              <div className="space-y-4">
                <p>
                  Cable containment systems must comply with specific regulations to ensure safety and functionality.
                </p>
                <h4 className="text-[#FFC900] font-medium">Key Regulatory Aspects:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>BS 7671 requirements:</strong> Compliance with current regulations</li>
                  <li><strong>Fire barriers:</strong> Maintaining fire compartmentation</li>
                  <li><strong>Support intervals:</strong> Following manufacturer specifications</li>
                  <li><strong>Cable capacity:</strong> Avoiding exceeding maximum fill ratios</li>
                  <li><strong>Earthing requirements:</strong> Ensuring proper bonding of metallic systems</li>
                </ul>
              </div>
            </LearningObjective>
            
            <div className="mt-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
              <h3 className="text-[#FFC900] font-medium text-lg mb-4">Assessment Tips</h3>
              <ul className="list-disc list-inside text-[#FFC900]/70 space-y-2">
                <li>Ensure all cuts are deburred to prevent cable damage</li>
                <li>Use appropriate tools for each containment type</li>
                <li>Maintain proper alignment and levels during installation</li>
                <li>Allow sufficient space for cable installation and future additions</li>
                <li>Securely fasten all components to prevent movement</li>
              </ul>
            </div>
          </>
        );
        
      case 'consumer-unit':
        return (
          <>
            <LearningObjective title="Consumer Unit Location and Installation">
              <div className="space-y-4">
                <p>
                  Correct positioning and installation of consumer units is critical for safety, accessibility, 
                  and compliance with regulations.
                </p>
                <h4 className="text-[#FFC900] font-medium">Location Requirements:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Height requirements (typically 1350mm-1500mm to center)</li>
                  <li>Accessibility requirements for maintenance and operation</li>
                  <li>Clearance spaces around the unit</li>
                  <li>Avoiding locations near water sources or fire hazards</li>
                  <li>Proximity to the incoming supply</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Selection and Components">
              <div className="space-y-4">
                <p>
                  Selecting the appropriate consumer unit and components ensures proper protection and functionality.
                </p>
                <h4 className="text-[#FFC900] font-medium">Key Components:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Main switch:</strong> Rating and type</li>
                  <li><strong>RCD protection:</strong> Configuration and sensitivity</li>
                  <li><strong>MCBs/RCBOs:</strong> Selection based on circuit requirements</li>
                  <li><strong>Surge protection:</strong> Requirements and installation</li>
                  <li><strong>Busbar arrangements:</strong> Single and split load configurations</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Wiring and Connection">
              <div className="space-y-4">
                <p>
                  Proper wiring and connection techniques ensure safety and reliability.
                </p>
                <h4 className="text-[#FFC900] font-medium">Wiring Practices:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Correct cable entry methods and gland selection</li>
                  <li>Appropriate conductor identification and marking</li>
                  <li>Proper torque settings for terminals</li>
                  <li>Neat and orderly cable arrangement</li>
                  <li>Correct connection sequence and methodology</li>
                </ul>
              </div>
            </LearningObjective>
            
            <div className="mt-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
              <h3 className="text-[#FFC900] font-medium text-lg mb-4">Assessment Tips</h3>
              <ul className="list-disc list-inside text-[#FFC900]/70 space-y-2">
                <li>Ensure the unit is level and securely mounted</li>
                <li>Maintain consistent cable entry points and methods</li>
                <li>Verify protective device selection matches circuit requirements</li>
                <li>Label all circuits clearly and accurately</li>
                <li>Check all connections for security before energizing</li>
              </ul>
            </div>
          </>
        );
        
      case 'wiring-systems':
        return (
          <>
            <LearningObjective title="Types of Wiring Systems">
              <div className="space-y-4">
                <p>
                  Different wiring systems are used depending on the environment, application, and requirements.
                  Understanding their characteristics is essential for the AM2 assessment.
                </p>
                <h4 className="text-[#FFC900] font-medium">Common Wiring Systems:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Surface wiring:</strong> Cables and containment mounted on surfaces</li>
                  <li><strong>Concealed wiring:</strong> Cables run within building fabric (walls, floors, etc.)</li>
                  <li><strong>Conduit systems:</strong> Cables enclosed in metal or plastic tubes</li>
                  <li><strong>Trunking systems:</strong> Multiple cables run in rectangular enclosures</li>
                  <li><strong>Cable tray systems:</strong> Open supports for multiple cables</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Installation Requirements">
              <div className="space-y-4">
                <p>
                  Each wiring system has specific installation requirements to ensure safety and compliance.
                </p>
                <h4 className="text-[#FFC900] font-medium">Key Requirements:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Support intervals and fixing methods</li>
                  <li>Bending radii and allowable deformations</li>
                  <li>Protection against mechanical damage</li>
                  <li>Expansion allowances for thermal movement</li>
                  <li>Accessibility for maintenance and future modifications</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Selection Criteria">
              <div className="space-y-4">
                <p>
                  Selecting the appropriate wiring system depends on various factors.
                </p>
                <h4 className="text-[#FFC900] font-medium">Selection Factors:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Environmental conditions:</strong> Moisture, temperature, corrosive atmospheres</li>
                  <li><strong>Fire risk:</strong> Requirements for fire resistance or low smoke emissions</li>
                  <li><strong>Mechanical protection:</strong> Risk of impact or other damage</li>
                  <li><strong>EMI/RFI considerations:</strong> Need for electromagnetic shielding</li>
                  <li><strong>Aesthetic requirements:</strong> Visibility and appearance concerns</li>
                </ul>
              </div>
            </LearningObjective>
            
            <div className="mt-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
              <h3 className="text-[#FFC900] font-medium text-lg mb-4">Assessment Tips</h3>
              <ul className="list-disc list-inside text-[#FFC900]/70 space-y-2">
                <li>Ensure consistent and neat installation throughout</li>
                <li>Follow manufacturer's instructions for specific systems</li>
                <li>Maintain appropriate spacing between fixings</li>
                <li>Consider maintenance access in system layout</li>
                <li>Ensure system selection is appropriate for the environment</li>
              </ul>
            </div>
          </>
        );

      case 'power-circuits':
        return (
          <>
            <LearningObjective title="Power Circuit Design">
              <div className="space-y-4">
                <p>
                  Power circuits must be designed to safely deliver electricity to appliances and equipment 
                  while meeting regulatory requirements.
                </p>
                <h4 className="text-[#FFC900] font-medium">Design Considerations:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Load calculations:</strong> Determining power requirements for connected equipment</li>
                  <li><strong>Cable sizing:</strong> Selection based on current-carrying capacity and voltage drop</li>
                  <li><strong>Protective device selection:</strong> MCB/RCBO ratings and types</li>
                  <li><strong>Circuit separation:</strong> Grouping similar loads for efficiency</li>
                  <li><strong>Special considerations:</strong> High-current appliances, motors, etc.</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Socket Outlet Circuits">
              <div className="space-y-4">
                <p>
                  Socket outlet circuits must be installed according to specific regulatory requirements.
                </p>
                <h4 className="text-[#FFC900] font-medium">Key Requirements:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Ring final circuits:</strong> Installation methods and testing</li>
                  <li><strong>Radial circuits:</strong> Applications and limitations</li>
                  <li><strong>RCD protection:</strong> Requirements for different installations</li>
                  <li><strong>Number of socket outlets:</strong> Maximum permissible per circuit</li>
                  <li><strong>Special locations:</strong> Additional requirements for kitchens, bathrooms, etc.</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Fixed Appliance Circuits">
              <div className="space-y-4">
                <p>
                  Dedicated circuits for fixed appliances have specific requirements.
                </p>
                <h4 className="text-[#FFC900] font-medium">Common Applications:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Electric cookers:</strong> Dedicated circuit requirements</li>
                  <li><strong>Electric showers:</strong> High-current protection and cable selection</li>
                  <li><strong>Immersion heaters:</strong> Control and protection requirements</li>
                  <li><strong>Air conditioning units:</strong> Dedicated supply considerations</li>
                  <li><strong>Isolation requirements:</strong> Accessible means of isolation</li>
                </ul>
              </div>
            </LearningObjective>
            
            <div className="mt-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
              <h3 className="text-[#FFC900] font-medium text-lg mb-4">Assessment Tips</h3>
              <ul className="list-disc list-inside text-[#FFC900]/70 space-y-2">
                <li>Verify power requirements before circuit design</li>
                <li>Ensure adequate cable sizing for anticipated loads</li>
                <li>Install correct protection for each circuit type</li>
                <li>Test completely before energizing</li>
                <li>Document circuits clearly on distribution board schedules</li>
              </ul>
            </div>
          </>
        );
        
      case 'lighting-circuits':
        return (
          <>
            <LearningObjective title="Lighting Circuit Design">
              <div className="space-y-4">
                <p>
                  Lighting circuits require specific design considerations to ensure safe, efficient operation 
                  and compliance with regulations.
                </p>
                <h4 className="text-[#FFC900] font-medium">Design Factors:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Circuit layout:</strong> One-way, two-way, and intermediate switching</li>
                  <li><strong>Light source types:</strong> Incandescent, fluorescent, LED, and their control requirements</li>
                  <li><strong>Switch positions:</strong> Placement and height considerations</li>
                  <li><strong>Special controls:</strong> Dimmer switches, PIR sensors, time controls</li>
                  <li><strong>Maximum number of points:</strong> Load considerations on lighting circuits</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Cable Selection and Installation">
              <div className="space-y-4">
                <p>
                  Proper cable selection and installation techniques ensure safe, reliable lighting systems.
                </p>
                <h4 className="text-[#FFC900] font-medium">Installation Practices:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Cable types:</strong> Typically 1.0mm² or 1.5mm² for standard lighting</li>
                  <li><strong>Circuit protection:</strong> 5A or 6A MCB/RCBO generally used</li>
                  <li><strong>Wiring methodologies:</strong> Loop-in, junction box methods</li>
                  <li><strong>Cable routing:</strong> Concealed and surface installation techniques</li>
                  <li><strong>Heating effects:</strong> Consideration for insulation and thermal issues</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Special Lighting Applications">
              <div className="space-y-4">
                <p>
                  Some lighting applications have additional requirements.
                </p>
                <h4 className="text-[#FFC900] font-medium">Special Considerations:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Emergency lighting:</strong> Requirements and testing procedures</li>
                  <li><strong>Bathroom lighting:</strong> IP ratings and zoning requirements</li>
                  <li><strong>External lighting:</strong> Weatherproofing and control methods</li>
                  <li><strong>Decorative lighting:</strong> Low voltage systems and transformers</li>
                  <li><strong>Smart lighting:</strong> Integration with building control systems</li>
                </ul>
              </div>
            </LearningObjective>
            
            <div className="mt-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
              <h3 className="text-[#FFC900] font-medium text-lg mb-4">Assessment Tips</h3>
              <ul className="list-disc list-inside text-[#FFC900]/70 space-y-2">
                <li>Test all switching arrangements before completing the circuit</li>
                <li>Ensure correct polarity throughout the circuit</li>
                <li>Verify switch locations meet accessibility requirements</li>
                <li>Check lamp compatibility with control systems</li>
                <li>Document circuit details accurately on installation certificates</li>
              </ul>
            </div>
          </>
        );
        
      case 'special-locations':
        return (
          <>
            <LearningObjective title="Bathrooms and Shower Rooms">
              <div className="space-y-4">
                <p>
                  Installations in bathrooms and shower rooms have specific requirements due to increased risk 
                  from water and electricity.
                </p>
                <h4 className="text-[#FFC900] font-medium">Zone Classifications:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Zone 0:</strong> Inside the bath or shower basin</li>
                  <li><strong>Zone 1:</strong> Above Zone 0 to 2.25m height</li>
                  <li><strong>Zone 2:</strong> 0.6m horizontally from Zone 1, 2.25m from floor</li>
                  <li><strong>Outside zones:</strong> Remainder of the bathroom</li>
                </ul>
                <h4 className="text-[#FFC900] font-medium mt-4">Protection Requirements:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>30mA RCD protection for all circuits</li>
                  <li>IP rating requirements for each zone</li>
                  <li>Supplementary equipotential bonding considerations</li>
                  <li>Equipment selection suitable for each zone</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Kitchens and Utility Areas">
              <div className="space-y-4">
                <p>
                  Kitchens have specific requirements due to multiple appliances and the presence of water.
                </p>
                <h4 className="text-[#FFC900] font-medium">Key Requirements:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Socket outlet positioning relative to sinks</li>
                  <li>Dedicated circuits for major appliances</li>
                  <li>Additional protection requirements (RCD)</li>
                  <li>Consideration for heat-producing appliances</li>
                  <li>IP ratings for areas subject to water splashing</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Outdoor Installations">
              <div className="space-y-4">
                <p>
                  External installations require specific protection against environmental conditions.
                </p>
                <h4 className="text-[#FFC900] font-medium">Essential Requirements:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>IP ratings:</strong> Minimum IP44 for external equipment</li>
                  <li><strong>RCD protection:</strong> Maximum 30mA for socket outlets and lighting</li>
                  <li><strong>Cable selection:</strong> Appropriate for external conditions</li>
                  <li><strong>Mechanical protection:</strong> Against impact and environmental damage</li>
                  <li><strong>Earthing considerations:</strong> Supplementary equipotential bonding requirements</li>
                </ul>
              </div>
            </LearningObjective>
            
            <div className="mt-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
              <h3 className="text-[#FFC900] font-medium text-lg mb-4">Assessment Tips</h3>
              <ul className="list-disc list-inside text-[#FFC900]/70 space-y-2">
                <li>Always verify zone measurements before installing equipment</li>
                <li>Ensure IP ratings are appropriate for the installation location</li>
                <li>Verify RCD protection requirements are met for each circuit</li>
                <li>Use appropriate cable types and containment for the environment</li>
                <li>Document special location details in installation certificates</li>
              </ul>
            </div>
          </>
        );
        
      case 'cable-preparation':
        return (
          <>
            <LearningObjective title="Cable Stripping Techniques">
              <div className="space-y-4">
                <p>
                  Proper cable stripping is fundamental to creating safe and reliable connections.
                </p>
                <h4 className="text-[#FFC900] font-medium">Key Techniques:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Outer sheath removal:</strong> Careful techniques to avoid damaging conductors</li>
                  <li><strong>Insulation stripping:</strong> Correct techniques for different cable types</li>
                  <li><strong>Appropriate tools:</strong> Selection and use of cable strippers and knives</li>
                  <li><strong>Stripping lengths:</strong> Ensuring correct length for different terminations</li>
                  <li><strong>Avoiding damage:</strong> Preventing nicks or cuts to conductors</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Cable Termination Preparation">
              <div className="space-y-4">
                <p>
                  Proper preparation ensures secure and reliable terminations.
                </p>
                <h4 className="text-[#FFC900] font-medium">Preparation Steps:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Conductor preparation:</strong> Cleaning, twisting, and forming</li>
                  <li><strong>Measuring:</strong> Ensuring correct length for each termination point</li>
                  <li><strong>End preparation:</strong> Use of ferrules, crimps, or tinning where appropriate</li>
                  <li><strong>Identification:</strong> Applying markers or sleeves for conductor identification</li>
                  <li><strong>Special considerations:</strong> Requirements for fine-stranded cables</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Cable Management">
              <div className="space-y-4">
                <p>
                  Proper cable management ensures neat installations, easier maintenance, and reduced risk of damage.
                </p>
                <h4 className="text-[#FFC900] font-medium">Management Techniques:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Bundling:</strong> Neat grouping of cables without excessive pressure</li>
                  <li><strong>Securing:</strong> Appropriate use of cable ties, clips, and cleats</li>
                  <li><strong>Bending radius:</strong> Maintaining minimum radius to prevent damage</li>
                  <li><strong>Distribution:</strong> Even spacing in containment systems</li>
                  <li><strong>Labeling:</strong> Clear identification of cables and circuits</li>
                </ul>
              </div>
            </LearningObjective>
            
            <div className="mt-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
              <h3 className="text-[#FFC900] font-medium text-lg mb-4">Assessment Tips</h3>
              <ul className="list-disc list-inside text-[#FFC900]/70 space-y-2">
                <li>Maintain consistent stripping lengths for neat installation</li>
                <li>Always inspect conductors for damage after stripping</li>
                <li>Use appropriate tools for each cable type</li>
                <li>Maintain neat cable management throughout the installation</li>
                <li>Avoid excessive force when securing cables</li>
              </ul>
            </div>
          </>
        );
        
      case 'connection-methods':
        return (
          <>
            <LearningObjective title="Screw Terminal Connections">
              <div className="space-y-4">
                <p>
                  Screw terminals are the most common connection method in electrical installations.
                </p>
                <h4 className="text-[#FFC900] font-medium">Best Practices:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Terminal preparation:</strong> Ensuring terminals are clean and undamaged</li>
                  <li><strong>Conductor insertion:</strong> Proper positioning and orientation</li>
                  <li><strong>Tightening torque:</strong> Using appropriate force to specification</li>
                  <li><strong>Multiple connections:</strong> Techniques for connecting multiple conductors</li>
                  <li><strong>Final inspection:</strong> Checking for secure connection and no exposed conductors</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Crimped Connections">
              <div className="space-y-4">
                <p>
                  Crimped connections provide secure termination for various applications.
                </p>
                <h4 className="text-[#FFC900] font-medium">Crimping Techniques:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Connector selection:</strong> Choosing appropriate type and size</li>
                  <li><strong>Conductor preparation:</strong> Clean cutting and stripping</li>
                  <li><strong>Crimping tool selection:</strong> Using the correct tool for the connector</li>
                  <li><strong>Proper crimping technique:</strong> Positioning and applying pressure</li>
                  <li><strong>Inspection:</strong> Verifying crimp quality and security</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Specialized Connection Methods">
              <div className="space-y-4">
                <p>
                  Various specialized connection methods may be required in specific applications.
                </p>
                <h4 className="text-[#FFC900] font-medium">Other Connection Types:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Spring terminals:</strong> Tool-free connection methods</li>
                  <li><strong>IDC (Insulation Displacement Connectors):</strong> For rapid connections</li>
                  <li><strong>Maintenance-free connectors:</strong> Gel-filled and heat-shrink types</li>
                  <li><strong>Bus bar connections:</strong> For distribution boards and switchgear</li>
                  <li><strong>Compression lugs:</strong> For larger cable connections</li>
                </ul>
              </div>
            </LearningObjective>
            
            <div className="mt-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
              <h3 className="text-[#FFC900] font-medium text-lg mb-4">Assessment Tips</h3>
              <ul className="list-disc list-inside text-[#FFC900]/70 space-y-2">
                <li>Always verify connection security before energizing</li>
                <li>Use appropriate tools for each connection type</li>
                <li>Maintain consistency in connection methods throughout the installation</li>
                <li>Ensure no exposed conductors at connection points</li>
                <li>Document any specialized connection methods used</li>
              </ul>
            </div>
          </>
        );
        
      case 'quality-control':
        return (
          <>
            <LearningObjective title="Visual Inspection">
              <div className="space-y-4">
                <p>
                  Visual inspection is the first and most important step in quality control of electrical installations.
                </p>
                <h4 className="text-[#FFC900] font-medium">Key Inspection Points:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Workmanship:</strong> Neat and tidy installation with consistent methods</li>
                  <li><strong>Cable management:</strong> Proper routing, securing, and bending radius</li>
                  <li><strong>Terminations:</strong> Secure connections with no exposed conductors</li>
                  <li><strong>Labeling:</strong> Clear identification of circuits, equipment, and warnings</li>
                  <li><strong>Safety measures:</strong> Presence of required warnings and barriers</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Testing and Verification">
              <div className="space-y-4">
                <p>
                  Proper testing ensures the installation is safe and complies with regulations.
                </p>
                <h4 className="text-[#FFC900] font-medium">Essential Tests:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Continuity testing:</strong> Protective conductors and ring final circuits</li>
                  <li><strong>Insulation resistance:</strong> Verifying insulation integrity</li>
                  <li><strong>Polarity:</strong> Ensuring correct connection of live, neutral, and earth</li>
                  <li><strong>Earth fault loop impedance:</strong> Verifying protective device operation</li>
                  <li><strong>RCD testing:</strong> Confirming correct operation and trip times</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Documentation and Certification">
              <div className="space-y-4">
                <p>
                  Proper documentation is essential for compliance and future reference.
                </p>
                <h4 className="text-[#FFC900] font-medium">Required Documentation:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Electrical Installation Certificate:</strong> Overall certification</li>
                  <li><strong>Schedule of Inspections:</strong> Record of visual inspection items</li>
                  <li><strong>Schedule of Test Results:</strong> Detailed test measurements</li>
                  <li><strong>Distribution board schedules:</strong> Circuit identification and protection</li>
                  <li><strong>As-built drawings:</strong> Accurate representation of the installed system</li>
                </ul>
              </div>
            </LearningObjective>
            
            <div className="mt-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
              <h3 className="text-[#FFC900] font-medium text-lg mb-4">Assessment Tips</h3>
              <ul className="list-disc list-inside text-[#FFC900]/70 space-y-2">
                <li>Conduct self-inspection before formal assessment</li>
                <li>Use a systematic approach to testing procedures</li>
                <li>Record all test results accurately</li>
                <li>Ensure all documentation is complete and legible</li>
                <li>Address any deficiencies immediately before completion</li>
              </ul>
            </div>
          </>
        );

      case 'time-management':
        return (
          <>
            <LearningObjective title="Planning and Preparation">
              <div className="space-y-4">
                <p>
                  Effective time management begins with thorough planning and preparation.
                </p>
                <h4 className="text-[#FFC900] font-medium">Planning Strategies:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Assessment familiarization:</strong> Understanding all requirements before starting</li>
                  <li><strong>Time allocation:</strong> Dividing the assessment time between different tasks</li>
                  <li><strong>Material preparation:</strong> Pre-cutting cables and organizing components</li>
                  <li><strong>Tool preparation:</strong> Having all necessary tools ready and accessible</li>
                  <li><strong>Sequence planning:</strong> Determining the most efficient order of operations</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Efficient Working Practices">
              <div className="space-y-4">
                <p>
                  Working efficiently during the assessment helps maximize productivity without sacrificing quality.
                </p>
                <h4 className="text-[#FFC900] font-medium">Efficiency Tips:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Work sequencing:</strong> Completing similar tasks together</li>
                  <li><strong>Tool management:</strong> Keeping tools organized and accessible</li>
                  <li><strong>Material handling:</strong> Minimizing waste and rework</li>
                  <li><strong>Progressive testing:</strong> Testing components before final installation</li>
                  <li><strong>Task grouping:</strong> Minimizing the need to repeatedly change position or tools</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Progress Monitoring">
              <div className="space-y-4">
                <p>
                  Monitoring progress helps ensure you stay on schedule during the assessment.
                </p>
                <h4 className="text-[#FFC900] font-medium">Monitoring Techniques:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Time checkpoints:</strong> Setting completion targets for major milestones</li>
                  <li><strong>Adjusting pace:</strong> Speeding up or slowing down based on progress</li>
                  <li><strong>Priority management:</strong> Focusing first on critical path items</li>
                  <li><strong>Problem resolution:</strong> Quickly addressing issues before proceeding</li>
                  <li><strong>Quality checks:</strong> Regular brief reviews to avoid rework</li>
                </ul>
              </div>
            </LearningObjective>
            
            <div className="mt-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
              <h3 className="text-[#FFC900] font-medium text-lg mb-4">Assessment Tips</h3>
              <ul className="list-disc list-inside text-[#FFC900]/70 space-y-2">
                <li>Practice timing yourself on similar tasks before the assessment</li>
                <li>Don't rush at the expense of quality and safety</li>
                <li>Allow sufficient time for testing and documentation</li>
                <li>Have a contingency plan for unexpected issues</li>
                <li>Remember that quality work completed on time is the goal</li>
              </ul>
            </div>
          </>
        );

      case 'common-pitfalls':
        return (
          <>
            <LearningObjective title="Technical Pitfalls">
              <div className="space-y-4">
                <p>
                  Common technical errors can significantly impact assessment performance.
                </p>
                <h4 className="text-[#FFC900] font-medium">Common Errors:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Incorrect protective device selection:</strong> Mismatched ratings or types</li>
                  <li><strong>Cable sizing errors:</strong> Inadequate consideration of load or voltage drop</li>
                  <li><strong>Polarity issues:</strong> Incorrect connection of live, neutral, or earth</li>
                  <li><strong>Thermal considerations:</strong> Inadequate spacing or ventilation</li>
                  <li><strong>Incorrect wiring configurations:</strong> Especially in switching arrangements</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Procedural Pitfalls">
              <div className="space-y-4">
                <p>
                  Process and procedure errors can lead to failed assessments despite technical competence.
                </p>
                <h4 className="text-[#FFC900] font-medium">Procedural Issues:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Insufficient planning:</strong> Rushing into installation without thorough review</li>
                  <li><strong>Poor documentation:</strong> Incomplete or illegible test records</li>
                  <li><strong>Inadequate testing:</strong> Missing or incorrectly performed tests</li>
                  <li><strong>Overlooking regulations:</strong> Failure to comply with specific requirements</li>
                  <li><strong>Skipping verification:</strong> Not checking work before completion</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Presentation Issues">
              <div className="space-y-4">
                <p>
                  The appearance and quality of workmanship can significantly impact assessment results.
                </p>
                <h4 className="text-[#FFC900] font-medium">Presentation Problems:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Poor cable management:</strong> Untidy or excessively tight bundling</li>
                  <li><strong>Inconsistent methods:</strong> Varying approaches to similar tasks</li>
                  <li><strong>Misaligned components:</strong> Poor alignment of containment or accessories</li>
                  <li><strong>Damage to surroundings:</strong> Marks, scratches, or other installation damage</li>
                  <li><strong>Incomplete finishing:</strong> Missing covers, labels, or other details</li>
                </ul>
              </div>
            </LearningObjective>
            
            <div className="mt-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
              <h3 className="text-[#FFC900] font-medium text-lg mb-4">Assessment Tips</h3>
              <ul className="list-disc list-inside text-[#FFC900]/70 space-y-2">
                <li>Double-check all regulatory requirements before assessment</li>
                <li>Use checklists to ensure all steps are completed</li>
                <li>Verify all work against drawings and specifications</li>
                <li>Take time to maintain neat and professional appearance</li>
                <li>Conduct thorough self-assessment before completion</li>
              </ul>
            </div>
          </>
        );

      case 'final-checks':
        return (
          <>
            <LearningObjective title="Visual Verification">
              <div className="space-y-4">
                <p>
                  A systematic final visual check ensures all installation aspects meet requirements.
                </p>
                <h4 className="text-[#FFC900] font-medium">Essential Visual Checks:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Component placement:</strong> Correct positioning according to drawings</li>
                  <li><strong>Cable management:</strong> Neat routing, proper support, and bending radii</li>
                  <li><strong>Terminations:</strong> Secure connections with no exposed conductors</li>
                  <li><strong>Aesthetic quality:</strong> Level, aligned, and professionally finished</li>
                  <li><strong>Safety features:</strong> Barriers, warning labels, and protective measures</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Technical Verification">
              <div className="space-y-4">
                <p>
                  Technical verification confirms that the installation will function safely and as intended.
                </p>
                <h4 className="text-[#FFC900] font-medium">Technical Checks:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Circuit configuration:</strong> Verification against drawings and specifications</li>
                  <li><strong>Protective devices:</strong> Correct type, rating, and installation</li>
                  <li><strong>Earthing arrangements:</strong> Proper connection and continuity</li>
                  <li><strong>Identification and labeling:</strong> Clear and correct circuit identification</li>
                  <li><strong>Special location requirements:</strong> Compliance with specific regulations</li>
                </ul>
              </div>
            </LearningObjective>
            
            <LearningObjective title="Documentation Review">
              <div className="space-y-4">
                <p>
                  Complete and accurate documentation is essential for successful assessment.
                </p>
                <h4 className="text-[#FFC900] font-medium">Documentation Elements:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Test results:</strong> Complete and accurately recorded</li>
                  <li><strong>Installation certificates:</strong> Properly completed with all required information</li>
                  <li><strong>Distribution board schedules:</strong> Accurate circuit identification</li>
                  <li><strong>Inspection records:</strong> Completed schedule of inspections</li>
                  <li><strong>Special instructions:</strong> Any specific operational or maintenance information</li>
                </ul>
              </div>
            </LearningObjective>
            
            <div className="mt-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
              <h3 className="text-[#FFC900] font-medium text-lg mb-4">Assessment Tips</h3>
              <ul className="list-disc list-inside text-[#FFC900]/70 space-y-2">
                <li>Use a systematic approach to final checks, working from one end to another</li>
                <li>Have a checklist to ensure nothing is overlooked</li>
                <li>Allow sufficient time for thorough verification</li>
                <li>Address any issues found immediately</li>
                <li>Review all documentation for completeness and accuracy</li>
              </ul>
            </div>
          </>
        );
          
      // Add detailed content for all other topics
      default:
        // For now, use the first section data as a fallback
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#FFC900]">{getSectionTitle()}</h3>
            <p className="text-[#FFC900]/70">
              Detailed content for this section will be added soon. This page will contain comprehensive 
              information about {getSectionTitle().toLowerCase()}, including practical techniques, regulatory 
              requirements, and assessment tips.
            </p>
            <p className="text-[#FFC900]/70">
              Check back later for updates or explore other available sections.
            </p>
          </div>
        );
    }
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 pt-16 md:pt-16">
        <PageHeader 
          title={getSectionTitle()}
          description={`Detailed study material for ${getSectionTitle().toLowerCase()}`}
          customBackAction={() => navigate('/apprentices/study-materials/city-guilds/am2/installation')}
        />
        
        <div className="mt-8 space-y-8">
          {getContent()}
        </div>

        <div className="mt-12 flex justify-between">
          <Button
            variant="outline"
            className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
            onClick={() => navigate('/apprentices/study-materials/city-guilds/am2/installation')}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Installation
          </Button>
          
          <Button 
            className="flex items-center gap-2 bg-[#FFC900] text-[#22251e] hover:bg-[#e5b700]"
          >
            <BookOpen className="h-4 w-4" />
            Download Study Guide
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default InstallationDetailsPage;
