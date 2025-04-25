
import React from 'react';

interface SectionData {
  title: string;
  description: string;
  content: React.ReactNode;
}

export const sections305: Record<string, SectionData> = {
  "1.1": {
    title: "Client Requirements Analysis",
    description: "Understanding and analyzing client requirements for electrical system design",
    content: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Importance of Client Requirements Analysis</h2>
        <p>
          A thorough analysis of client requirements is the foundation of successful electrical system design. It ensures that the final installation meets the client's needs, expectations, and budget while complying with all relevant regulations.
        </p>
        
        <h3 className="text-lg font-medium mt-4">Initial Client Consultation</h3>
        <p>
          The first step in analyzing client requirements is a comprehensive consultation to discuss:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Intended use of the building or space</li>
          <li>Specific electrical requirements for equipment</li>
          <li>Special requirements for lighting, heating, or cooling</li>
          <li>Energy efficiency expectations and sustainability goals</li>
          <li>Budget constraints</li>
          <li>Aesthetic considerations</li>
          <li>Timeline for design and installation</li>
          <li>Future expansion plans or flexibility needs</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Documenting Requirements</h3>
        <p>
          All requirements should be documented in a clear, structured format:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Create a detailed client brief</li>
          <li>Develop a structured requirements document</li>
          <li>Use checklists to ensure all aspects are covered</li>
          <li>Prioritize requirements (must-have vs. nice-to-have)</li>
          <li>Have the client review and sign off on requirements</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Electrical Load Requirements</h2>
        <p>
          A critical part of the analysis is determining the electrical loads:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>List all electrical equipment to be installed</li>
          <li>Obtain power ratings for each piece of equipment</li>
          <li>Determine duty cycles and usage patterns</li>
          <li>Identify any equipment with special power quality requirements</li>
          <li>Consider starting currents for motors and other inductive loads</li>
          <li>Plan for future additional loads</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Site Survey</h2>
        <p>
          For existing buildings, a thorough site survey is essential:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Assess existing electrical infrastructure</li>
          <li>Check incoming supply capacity</li>
          <li>Identify potential routes for new circuits</li>
          <li>Note structural constraints</li>
          <li>Identify potential hazards</li>
          <li>Document existing earthing arrangements</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Stakeholder Identification</h2>
        <p>
          Identify all stakeholders who may have input or requirements:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Building owner</li>
          <li>End users</li>
          <li>Facilities management team</li>
          <li>Other design professionals (architects, mechanical engineers)</li>
          <li>Local authority building control</li>
          <li>Distribution Network Operator (DNO)</li>
          <li>Health and safety representatives</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Requirement Categories</h2>
        
        <h3 className="text-lg font-medium mt-4">Power Requirements</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Total power demand</li>
          <li>Circuit requirements</li>
          <li>Socket outlet quantities and locations</li>
          <li>Special requirements (e.g., clean power, UPS)</li>
          <li>External power requirements</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Lighting Requirements</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Illumination levels for different areas</li>
          <li>Type of lighting (task, ambient, accent)</li>
          <li>Control requirements (switches, dimmers, sensors)</li>
          <li>Emergency lighting needs</li>
          <li>Energy efficiency considerations</li>
          <li>Specific aesthetic requirements</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Control Systems</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Building management system (BMS) requirements</li>
          <li>Smart home/building features</li>
          <li>Lighting controls</li>
          <li>HVAC controls</li>
          <li>Energy monitoring requirements</li>
          <li>Remote access needs</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Deliverables and Client Sign-off</h2>
        <p>
          After completing the requirements analysis:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Prepare a detailed requirements specification document</li>
          <li>Include preliminary load calculations</li>
          <li>Develop conceptual designs if appropriate</li>
          <li>Provide initial budget estimates</li>
          <li>Present options for the client to consider</li>
          <li>Obtain formal client approval before proceeding to detailed design</li>
        </ul>
      </div>
    ),
  },
};
