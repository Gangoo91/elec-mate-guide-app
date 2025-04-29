
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { Section } from './types';
import AccessoriesSelection from "@/components/units/section305/AccessoriesSelection";

const DistributionBoardsContent = () => {
  return (
    <LessonContent title="Distribution Boards">
      <p className="mb-4">
        Distribution boards (consumer units) are a critical component in electrical installations, serving 
        as the central point for circuit protection and control.
      </p>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Types of Distribution Boards</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Main Switch Consumer Units:</strong> Single incoming isolator with multiple outgoing ways</li>
            <li><strong>Dual RCD Consumer Units:</strong> Split-load units with two RCDs protecting groups of circuits</li>
            <li><strong>High Integrity Consumer Units:</strong> Main switch and RCBO protection for each circuit</li>
            <li><strong>Metal Consumer Units:</strong> Required by Amendment 3 to 17th Edition and subsequent editions</li>
            <li><strong>Three-Phase Distribution Boards:</strong> For industrial and larger commercial installations</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Selection Criteria</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Number of ways:</strong> Sufficient capacity for required circuits plus spare ways</li>
            <li><strong>Type of protection:</strong> MCBs, RCBOs, RCDs as required</li>
            <li><strong>Current rating:</strong> Appropriate for maximum demand</li>
            <li><strong>Type of earthing system:</strong> Suitable for TN-S, TN-C-S, or TT</li>
            <li><strong>IP rating:</strong> Appropriate for installation environment</li>
            <li><strong>Expansion potential:</strong> Allow for future additions</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Installation Requirements</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Must be accessible for maintenance and operation</li>
          <li>Mounted at suitable height (typically 1.4m to center)</li>
          <li>Clearance around board for heat dissipation</li>
          <li>Fire-rated enclosure where required by regulations</li>
          <li>Clear labeling of all circuits</li>
          <li>Circuit chart displayed nearby</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section2_3: Section = {
  title: "Accessories and Distribution Boards",
  description: "Selection of switches, sockets, junction boxes, and distribution boards",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand the selection criteria for electrical accessories</li>
            <li>Identify different types of distribution boards and their applications</li>
            <li>Learn how to specify appropriate components for various environments</li>
            <li>Recognize installation requirements for distribution equipment</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Electrical Accessories" 
        content={<AccessoriesSelection />}
      />
      
      <ContentSection
        title="Distribution Boards" 
        content={<DistributionBoardsContent />}
      />
    </>
  )
};
