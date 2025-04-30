
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import { FormativeAssessment, AssessmentQuestion } from "@/components/units/FormativeAssessment";

// Define the section content structure
export const equipmentInstallationSections: Record<string, {
  title: string;
  content: React.ReactNode;
}> = {
  "1.1": {
    title: "Reading Technical Documentation",
    content: (
      <>
        <p className="mb-4">
          The first step in any successful equipment installation is thoroughly understanding 
          the technical documentation. This includes electrical schematics, installation 
          manuals, and equipment specifications.
        </p>
        
        <h4 className="text-[#FFC900] font-medium text-lg mb-2">Types of Technical Documentation</h4>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Electrical Schematics:</strong> Diagrams showing the electrical connections 
            and components within a system, using standardized symbols.
          </li>
          <li>
            <strong>Single-Line Diagrams:</strong> Simplified notations of electrical systems showing 
            power flow from source to destination.
          </li>
          <li>
            <strong>Installation Manuals:</strong> Step-by-step instructions provided by manufacturers 
            for equipment installation.
          </li>
          <li>
            <strong>Equipment Specifications:</strong> Detailed information about technical requirements, 
            ratings, and operating parameters.
          </li>
        </ul>
        
        <h4 className="text-[#FFC900] font-medium text-lg mb-2">Key Information to Extract</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Power requirements and voltage ratings</li>
          <li>Physical dimensions and mounting specifications</li>
          <li>Environmental operating conditions</li>
          <li>Required clearances and accessibility requirements</li>
          <li>Safety precautions and warnings</li>
          <li>Connection details and terminal specifications</li>
        </ul>
      </>
    )
  },
  "1.2": {
    title: "Site Surveys and Preparation",
    content: (
      <>
        <p className="mb-4">
          Before beginning installation work, a thorough site survey and preparation is 
          essential to identify potential issues and ensure a smooth installation process.
        </p>
        
        <h4 className="text-[#FFC900] font-medium text-lg mb-2">Site Survey Components</h4>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Access Assessment:</strong> Determining how equipment will be transported to 
            the installation location.
          </li>
          <li>
            <strong>Available Services:</strong> Identifying existing electrical supplies, earthing 
            arrangements, and other services.
          </li>
          <li>
            <strong>Space and Layout:</strong> Ensuring adequate space for equipment, including 
            service areas and clearances.
          </li>
          <li>
            <strong>Environmental Conditions:</strong> Checking temperature, humidity, dust levels, 
            and other environmental factors.
          </li>
        </ul>
        
        <h4 className="text-[#FFC900] font-medium text-lg mb-2">Preparation Steps</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Clearing and cleaning the installation area</li>
          <li>Ensuring appropriate structural supports are in place</li>
          <li>Verifying power supplies and routing for cables</li>
          <li>Preparing mounting points and fixings</li>
          <li>Organizing tools and equipment needed for installation</li>
          <li>Obtaining necessary permits or approvals</li>
        </ul>
      </>
    )
  },
  "2.1": {
    title: "Equipment Positioning and Mounting",
    content: (
      <>
        <p className="mb-4">
          Correct positioning and mounting of electrical equipment is crucial for operational 
          efficiency, safety, and maintenance accessibility.
        </p>
        
        <h4 className="text-[#FFC900] font-medium text-lg mb-2">Positioning Considerations</h4>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Accessibility:</strong> Ensure sufficient space for operation and maintenance.
            Equipment should be accessible for routine inspections and servicing.
          </li>
          <li>
            <strong>Environmental Factors:</strong> Position away from extreme temperatures, 
            moisture, dust, and corrosive environments when possible.
          </li>
          <li>
            <strong>Vibration and Shock:</strong> Avoid locations subject to excessive vibration 
            which could damage sensitive components or loosen connections.
          </li>
          <li>
            <strong>EMI/RFI:</strong> Consider electromagnetic interference when positioning 
            sensitive electronic equipment.
          </li>
        </ul>
        
        <h4 className="text-[#FFC900] font-medium text-lg mb-2">Mounting Techniques</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Wall Mounting:</strong> Using appropriate brackets and fixings suitable for the wall 
            material and equipment weight.
          </li>
          <li>
            <strong>Floor Standing:</strong> Ensuring level positioning and securing to prevent tipping.
          </li>
          <li>
            <strong>Rack Mounting:</strong> Following standard dimensions and using appropriate 
            support rails for heavier equipment.
          </li>
          <li>
            <strong>Panel Mounting:</strong> Creating appropriate cutouts and using proper sealing 
            methods to maintain enclosure integrity.
          </li>
        </ul>
      </>
    )
  },
  "2.2": {
    title: "Cable Management Systems",
    content: (
      <>
        <p className="mb-4">
          Proper cable management is essential for a professional installation, ensuring 
          longevity, safety, and ease of future modifications or troubleshooting.
        </p>
        
        <h4 className="text-[#FFC900] font-medium text-lg mb-2">Types of Cable Management Systems</h4>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Cable Trays:</strong> Open or enclosed systems for routing multiple cables 
            horizontally or vertically.
          </li>
          <li>
            <strong>Trunking:</strong> PVC or metal enclosures with removable covers for 
            easier access and maintenance.
          </li>
          <li>
            <strong>Conduit:</strong> Rigid or flexible tubing that provides mechanical protection 
            for cables in harsh environments.
          </li>
          <li>
            <strong>Cable Ties and Clips:</strong> For securing and organizing individual cables 
            or small bundles.
          </li>
        </ul>
        
        <h4 className="text-[#FFC900] font-medium text-lg mb-2">Installation Best Practices</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Separate power and data cables to minimize interference</li>
          <li>Maintain appropriate bending radii to prevent cable damage</li>
          <li>Allow for future expansion with 30-50% spare capacity</li>
          <li>Support cables at regular intervals to prevent sagging</li>
          <li>Label cables clearly for easier identification during maintenance</li>
          <li>Use appropriate fire-stopping methods when penetrating fire barriers</li>
        </ul>
      </>
    )
  },
  "3.1": {
    title: "Wiring and Connection Techniques",
    content: (
      <>
        <p className="mb-4">
          Proper wiring and connection techniques ensure reliable operation, minimize maintenance 
          issues, and reduce safety risks in electrical installations.
        </p>
        
        <h4 className="text-[#FFC900] font-medium text-lg mb-2">Cable Preparation</h4>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Stripping:</strong> Removing the correct amount of insulation without damaging 
            the conductor.
          </li>
          <li>
            <strong>Measuring:</strong> Ensuring adequate but not excessive cable length to prevent 
            stress and waste.
          </li>
          <li>
            <strong>Identification:</strong> Using appropriate ferrules, markers or color coding for 
            phase identification.
          </li>
        </ul>
        
        <h4 className="text-[#FFC900] font-medium text-lg mb-2">Connection Methods</h4>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Screw Terminals:</strong> Tightening to the correct torque as specified by 
            the manufacturer.
          </li>
          <li>
            <strong>Crimping:</strong> Using the appropriate tool and connector for the cable 
            size and application.
          </li>
          <li>
            <strong>Soldering:</strong> Applying the correct temperature and technique for 
            electronic connections.
          </li>
          <li>
            <strong>Push-In Terminals:</strong> Ensuring full insertion and secure connection 
            of conductors.
          </li>
        </ul>
        
        <h4 className="text-[#FFC900] font-medium text-lg mb-2">Common Issues to Avoid</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Stray strands that could cause short circuits</li>
          <li>Excessive bare conductor exposed at terminations</li>
          <li>Mixing aluminum and copper conductors without appropriate connectors</li>
          <li>Excessive tension or stress on cables at termination points</li>
          <li>Insufficient or excessive torque on screw terminals</li>
        </ul>
      </>
    )
  },
  "3.2": {
    title: "Earthing and Bonding",
    content: (
      <>
        <p className="mb-4">
          Proper earthing and bonding are essential safety aspects of equipment installation, 
          providing protection against electric shock and ensuring the correct operation of 
          protective devices.
        </p>
        
        <h4 className="text-[#FFC900] font-medium text-lg mb-2">Earthing Requirements</h4>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Main Earthing Terminal:</strong> The central point where all earthing 
            conductors connect.
          </li>
          <li>
            <strong>Earthing Conductor Sizing:</strong> Following regulations for minimum 
            cross-sectional area based on the supply cable.
          </li>
          <li>
            <strong>Earth Electrode:</strong> Understanding when additional earth electrodes 
            are required and how to install them correctly.
          </li>
        </ul>
        
        <h4 className="text-[#FFC900] font-medium text-lg mb-2">Bonding Types</h4>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Main Equipotential Bonding:</strong> Connecting extraneous conductive parts 
            to the main earthing terminal.
          </li>
          <li>
            <strong>Supplementary Bonding:</strong> Additional bonding in specific locations 
            such as bathrooms or areas with increased risk.
          </li>
          <li>
            <strong>Functional Bonding:</strong> Bonding for purposes other than safety, such 
            as EMI reduction.
          </li>
        </ul>
        
        <h4 className="text-[#FFC900] font-medium text-lg mb-2">Installation Best Practices</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ensuring good electrical contact at bonding connections</li>
          <li>Using correct connectors suitable for the materials being bonded</li>
          <li>Protecting earthing conductors from mechanical damage</li>
          <li>Clearly identifying earthing and bonding conductors</li>
          <li>Testing earth loop impedance after installation</li>
        </ul>
      </>
    )
  },
  "4.1": {
    title: "Testing Before Energization",
    content: (
      <>
        <p className="mb-4">
          Comprehensive testing before energizing equipment is critical to ensure safety and 
          proper operation, preventing potential damage or hazardous conditions.
        </p>
        
        <h4 className="text-[#FFC900] font-medium text-lg mb-2">Initial Visual Inspection</h4>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Checking for visible damage to equipment or connections</li>
          <li>Verifying all covers and safety barriers are in place</li>
          <li>Ensuring no debris or foreign objects inside equipment</li>
          <li>Confirming all fixings and mechanical supports are secure</li>
        </ul>
        
        <h4 className="text-[#FFC900] font-medium text-lg mb-2">Dead Testing</h4>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Insulation Resistance:</strong> Testing between live conductors and between 
            live conductors and earth.
          </li>
          <li>
            <strong>Continuity Testing:</strong> Verifying continuity of protective conductors, 
            ring final circuits, and bonding.
          </li>
          <li>
            <strong>Polarity:</strong> Confirming correct connection of live, neutral, and earth 
            conductors.
          </li>
        </ul>
        
        <h4 className="text-[#FFC900] font-medium text-lg mb-2">Pre-energization Checklist</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Verification that all test results meet required standards</li>
          <li>Confirmation that all temporary covers or safety measures are removed</li>
          <li>Check that all tools and testing equipment are removed from work area</li>
          <li>Ensure all relevant personnel are informed before energization</li>
          <li>Verification that appropriate PPE is available for energization procedure</li>
        </ul>
      </>
    )
  },
  "4.2": {
    title: "Commissioning Procedures",
    content: (
      <>
        <p className="mb-4">
          Commissioning is the systematic process of ensuring installed equipment operates correctly 
          and safely according to design specifications and manufacturer requirements.
        </p>
        
        <h4 className="text-[#FFC900] font-medium text-lg mb-2">Commissioning Stages</h4>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Initial Power-Up:</strong> Carefully applying power in stages if possible, 
            monitoring for issues.
          </li>
          <li>
            <strong>Functional Testing:</strong> Verifying all equipment functions operate as intended.
          </li>
          <li>
            <strong>Performance Testing:</strong> Measuring and recording key parameters against 
            design specifications.
          </li>
          <li>
            <strong>System Integration:</strong> Testing interaction with other systems and controls.
          </li>
        </ul>
        
        <h4 className="text-[#FFC900] font-medium text-lg mb-2">Key Measurements During Commissioning</h4>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Voltage levels at various test points</li>
          <li>Current draw under different load conditions</li>
          <li>Temperature readings of components under load</li>
          <li>Timing and sequence operations where applicable</li>
          <li>Protection device operation and settings</li>
        </ul>
        
        <h4 className="text-[#FFC900] font-medium text-lg mb-2">Documentation Requirements</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Recording of all test results and measurements</li>
          <li>Documentation of any settings or adjustments made</li>
          <li>Completion of commissioning certificates</li>
          <li>Updating of as-built drawings to reflect final installation</li>
          <li>Preparation of operation and maintenance documentation for handover</li>
        </ul>
      </>
    )
  },
  "5.1": {
    title: "Handover and Documentation",
    content: (
      <>
        <p className="mb-4">
          The handover process ensures that clients or end users receive properly documented 
          installations with all necessary information for safe operation and maintenance.
        </p>
        
        <h4 className="text-[#FFC900] font-medium text-lg mb-2">Essential Documentation</h4>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Electrical Installation Certificate:</strong> Formal certification that the 
            installation meets regulatory requirements.
          </li>
          <li>
            <strong>Test Results:</strong> Detailed records of all testing performed during installation 
            and commissioning.
          </li>
          <li>
            <strong>As-Built Drawings:</strong> Updated diagrams showing the actual installation as 
            completed, including any variations from original designs.
          </li>
          <li>
            <strong>Operation Manuals:</strong> Instructions for the safe operation of installed equipment.
          </li>
          <li>
            <strong>Maintenance Schedules:</strong> Recommended maintenance procedures and timeframes.
          </li>
        </ul>
        
        <h4 className="text-[#FFC900] font-medium text-lg mb-2">Handover Process</h4>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Physical demonstration of equipment operation to client representatives</li>
          <li>Explanation of safety features and emergency procedures</li>
          <li>Review of maintenance requirements and schedules</li>
          <li>Training for operators and maintenance personnel</li>
          <li>Formal sign-off of project completion documents</li>
        </ul>
        
        <h4 className="text-[#FFC900] font-medium text-lg mb-2">Record Keeping</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Secure storage of all documentation for future reference</li>
          <li>Distribution of copies to relevant stakeholders</li>
          <li>Digital backups of critical documentation</li>
          <li>Registration of warranties and guarantees</li>
          <li>Scheduled review dates for maintenance or certification renewals</li>
        </ul>
      </>
    )
  },
  "5.2": {
    title: "Maintenance Requirements",
    content: (
      <>
        <p className="mb-4">
          Establishing clear maintenance requirements during installation ensures the long-term 
          reliability, safety, and efficiency of electrical equipment.
        </p>
        
        <h4 className="text-[#FFC900] font-medium text-lg mb-2">Types of Maintenance</h4>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Preventative Maintenance:</strong> Scheduled activities to prevent failures 
            and extend equipment life.
          </li>
          <li>
            <strong>Predictive Maintenance:</strong> Condition monitoring to identify potential 
            issues before failure.
          </li>
          <li>
            <strong>Corrective Maintenance:</strong> Procedures for addressing failures or 
            defects when they occur.
          </li>
          <li>
            <strong>Condition-Based Maintenance:</strong> Maintenance performed based on the 
            actual condition of equipment.
          </li>
        </ul>
        
        <h4 className="text-[#FFC900] font-medium text-lg mb-2">Key Maintenance Considerations</h4>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Manufacturer's recommended maintenance schedules and procedures</li>
          <li>Regulatory requirements for periodic inspection and testing</li>
          <li>Accessibility requirements for maintenance activities</li>
          <li>Spare parts inventory and availability</li>
          <li>Specialized tools or equipment needed for maintenance</li>
        </ul>
        
        <h4 className="text-[#FFC900] font-medium text-lg mb-2">Documentation for Maintenance</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Detailed maintenance logs and records</li>
          <li>Access to manufacturer's service manuals</li>
          <li>Contact information for technical support and service providers</li>
          <li>Troubleshooting guides and common issues documentation</li>
          <li>Safety procedures specific to maintenance operations</li>
        </ul>
      </>
    )
  }
};

// Questions for the assessment quiz
export const equipmentInstallationQuestions: AssessmentQuestion[] = [
  {
    question: "What is the primary purpose of reading technical documentation before installation?",
    options: [
      "To verify the warranty is valid",
      "To understand the installation requirements and specifications",
      "To get the contact details of the manufacturer",
      "To check the price of the equipment"
    ],
    correctAnswer: "To understand the installation requirements and specifications",
    explanation: "Technical documentation provides critical information about installation requirements, specifications, and safety precautions that must be understood before beginning the installation process."
  },
  {
    question: "Which of the following is NOT typically included in a site survey for equipment installation?",
    options: [
      "Assessment of environmental conditions",
      "Checking available electrical services",
      "Determining equipment pricing and discounts",
      "Evaluating access for equipment delivery"
    ],
    correctAnswer: "Determining equipment pricing and discounts",
    explanation: "Site surveys focus on physical and technical aspects of the installation location such as access, services, space, and environment. Pricing and discounts are commercial considerations, not part of the technical site survey."
  },
  {
    question: "When positioning electrical equipment, what is the most important consideration?",
    options: [
      "Aesthetic appearance",
      "Accessibility for operation and maintenance",
      "Matching the color scheme of the room",
      "Keeping it hidden from view"
    ],
    correctAnswer: "Accessibility for operation and maintenance",
    explanation: "While appearance may be important in some contexts, accessibility for operation and maintenance is crucial for safety and practicality. Equipment must be accessible for inspection, maintenance, and operation throughout its service life."
  },
  {
    question: "Why should power and data cables be separated in a cable management system?",
    options: [
      "To make the installation look neater",
      "To minimize electromagnetic interference",
      "To save on installation costs",
      "Because regulations always require different colors"
    ],
    correctAnswer: "To minimize electromagnetic interference",
    explanation: "Power cables can generate electromagnetic fields that interfere with data transmission in nearby data cables. Separation helps minimize this interference and ensures reliable system operation."
  },
  {
    question: "What is the purpose of torque settings when making electrical connections?",
    options: [
      "To speed up the installation process",
      "To prevent damage to tools",
      "To ensure connections are neither too loose nor too tight",
      "To meet aesthetic requirements"
    ],
    correctAnswer: "To ensure connections are neither too loose nor too tight",
    explanation: "Using correct torque settings ensures connections are tight enough to prevent resistance and heating but not so tight that terminals or conductors are damaged."
  },
  {
    question: "What is the primary purpose of main equipotential bonding?",
    options: [
      "To improve signal quality",
      "To reduce the risk of electric shock",
      "To make the installation look professional",
      "To increase the value of the installation"
    ],
    correctAnswer: "To reduce the risk of electric shock",
    explanation: "Main equipotential bonding connects extraneous conductive parts to the main earthing terminal to ensure they remain at the same potential, reducing the risk of electric shock in case of faults."
  },
  {
    question: "Which test should be conducted to verify the continuity of protective conductors?",
    options: [
      "Insulation resistance test",
      "Earth loop impedance test",
      "Continuity test",
      "RCD operation test"
    ],
    correctAnswer: "Continuity test",
    explanation: "A continuity test is used to verify that protective conductors provide a continuous path for fault currents, ensuring the safety system will work correctly if needed."
  },
  {
    question: "During commissioning, what should be done before applying power to equipment for the first time?",
    options: [
      "Paint the equipment housing",
      "Complete all dead testing and visual inspections",
      "Install additional accessories",
      "Order spare parts"
    ],
    correctAnswer: "Complete all dead testing and visual inspections",
    explanation: "Before energizing equipment, all dead testing (insulation resistance, continuity, etc.) and visual inspections must be completed to ensure it's safe to apply power."
  },
  {
    question: "What document provides formal certification that the installation meets regulatory requirements?",
    options: [
      "Operation manual",
      "Maintenance schedule",
      "Equipment warranty",
      "Electrical Installation Certificate"
    ],
    correctAnswer: "Electrical Installation Certificate",
    explanation: "An Electrical Installation Certificate is the formal document certifying that the installation has been designed, constructed, inspected and tested in accordance with relevant regulations and is safe to use."
  },
  {
    question: "Which type of maintenance involves scheduled activities to prevent failures and extend equipment life?",
    options: [
      "Corrective maintenance",
      "Predictive maintenance",
      "Preventative maintenance",
      "Reactive maintenance"
    ],
    correctAnswer: "Preventative maintenance",
    explanation: "Preventative maintenance consists of regularly scheduled inspections, part replacements, and service activities designed to prevent failures before they occur and extend the operational life of equipment."
  }
];
