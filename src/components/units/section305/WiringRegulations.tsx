
import React from 'react';
import LessonContent from "@/components/units/LessonContent";

const WiringRegulations = () => {
  return (
    <LessonContent title="BS 7671 Wiring Regulations">
      <p className="mb-4">
        BS 7671 (Requirements for Electrical Installations), commonly known as the IET Wiring Regulations, 
        is the national standard for electrical installations in the UK, providing comprehensive guidance for 
        safe electrical design and installation.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Current Edition</h4>
        <p>
          The 18th Edition of BS 7671 (with Amendment 2:2022) is the current version, which electrical designers 
          and installers must follow to ensure installations are safe and comply with legal requirements.
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Key Design Requirements</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Basic Protection:</strong> Protection against direct contact with live parts</li>
            <li><strong>Fault Protection:</strong> Protection against electric shock from fault conditions</li>
            <li><strong>Additional Protection:</strong> RCDs with 30mA sensitivity for socket outlets and mobile equipment</li>
            <li><strong>Protection Against Thermal Effects:</strong> Prevention of fire, burns, and overheating</li>
            <li><strong>Protection Against Overcurrent:</strong> Circuit protection against overload and fault current</li>
            <li><strong>Isolation and Switching:</strong> Means for disconnection and isolation</li>
            <li><strong>Selection and Erection of Equipment:</strong> Appropriate for conditions and location</li>
            <li><strong>Special Installations or Locations:</strong> Additional requirements for locations with increased risk</li>
            <li><strong>Inspection and Testing:</strong> Verification of compliance</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Recent Changes in the 18th Edition</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Energy Efficiency:</strong> New Part 8 addressing energy efficiency considerations</li>
            <li><strong>Arc Fault Detection:</strong> Recommendations for AFDD in specific locations</li>
            <li><strong>Surge Protection:</strong> Enhanced requirements based on risk assessment</li>
            <li><strong>Fire Safety:</strong> Updated requirements for fire-resistant supports</li>
            <li><strong>Electric Vehicle Charging:</strong> Expanded guidance for EV charging installations</li>
            <li><strong>Prosumer Installations:</strong> Requirements for electrical installations with local generation</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Design Documentation Requirements</h4>
        <p>BS 7671 requires appropriate documentation to be provided, including:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Electrical installation certificates</li>
          <li>Design calculations</li>
          <li>Circuit diagrams and schedules</li>
          <li>Risk assessments for special locations</li>
          <li>Inspection and test results</li>
          <li>Operation and maintenance manuals</li>
          <li>Record of installed equipment</li>
        </ul>
      </div>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Relationship with Legal Requirements</h4>
        <p>
          While BS 7671 itself is not statutory, it is referenced in several pieces of legislation:
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li><strong>Electricity at Work Regulations 1989:</strong> Legal requirement for safe electrical systems</li>
          <li><strong>Building Regulations:</strong> Compliance with Part P (in England and Wales)</li>
          <li><strong>Health and Safety at Work Act:</strong> General safety obligations for workplaces</li>
        </ul>
        <p className="mt-2">
          Compliance with BS 7671 is generally accepted as demonstrating compliance with these legal requirements.
        </p>
      </div>
    </LessonContent>
  );
};

export default WiringRegulations;
