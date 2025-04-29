
import React from 'react';
import LessonContent from "@/components/units/LessonContent";

const DistributionBoards = () => {
  return (
    <LessonContent title="Distribution Boards">
      <p className="mb-4">
        Distribution boards (consumer units in domestic properties) are key components of electrical installations, 
        distributing power from the main supply to various circuits.
      </p>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Types of Distribution Boards</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Main Switch Consumer Units:</strong> Single main isolator with protective devices</li>
            <li><strong>Dual RCD Consumer Units:</strong> Split-load units with two RCDs protecting different circuit groups</li>
            <li><strong>High Integrity Consumer Units:</strong> Main switch plus RCBOs for individual circuits</li>
            <li><strong>Sub-main Distribution Boards:</strong> Secondary distribution from a main board</li>
            <li><strong>Three-phase Distribution Boards:</strong> For commercial and industrial installations</li>
            <li><strong>Special Purpose Boards:</strong> For specific applications (e.g., surge protection, generator changeover)</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Key Components</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Main Switch:</strong> Double-pole isolation for the entire installation</li>
            <li><strong>Protective Devices:</strong> MCBs, RCDs, RCBOs as required</li>
            <li><strong>Busbars:</strong> Internal conductors connecting the main switch to protective devices</li>
            <li><strong>Neutral Bar:</strong> For connecting neutral conductors</li>
            <li><strong>Earth Terminal:</strong> For connecting circuit protective conductors</li>
            <li><strong>Enclosure:</strong> Metal or insulating material housing</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Selection Criteria</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Number of ways required:</strong> Total number of circuits plus spares</li>
            <li><strong>Current capacity:</strong> Main switch rating suitable for maximum demand</li>
            <li><strong>Fault level rating:</strong> Must withstand prospective fault current</li>
            <li><strong>Type of protective devices:</strong> MCB, RCBO compatibility</li>
            <li><strong>IP rating:</strong> Appropriate for the environment</li>
            <li><strong>Metal or insulated enclosure:</strong> Based on risk assessment</li>
            <li><strong>Accessibility:</strong> Clear access for operation and maintenance</li>
            <li><strong>Fire containment:</strong> Non-combustible enclosure where required</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Circuit Arrangements</h4>
        <p className="mb-2">Effective distribution board design includes careful circuit arrangement:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Grouping similar circuits (lighting, power, etc.)</li>
          <li>Balancing loads across phases in three-phase systems</li>
          <li>Separating critical circuits from non-critical ones</li>
          <li>Providing spare ways for future expansion (typically 25%)</li>
          <li>Clear, detailed circuit labeling</li>
          <li>Avoiding mixing standard and high integrity protection</li>
        </ul>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Regulatory Requirements</h4>
        <p className="mb-2">Distribution boards must comply with:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>BS EN 61439 for construction and testing</li>
          <li>BS 7671 for installation requirements</li>
          <li>Consumer unit enclosures to comply with fire safety regulations (BS EN 61439-3)</li>
          <li>Clear marking and labeling of all circuits</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export default DistributionBoards;
