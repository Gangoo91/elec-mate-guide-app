
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { Section } from './types';

const WiringRegulations = () => {
  return (
    <LessonContent title="BS 7671 Wiring Regulations">
      <p className="mb-4">
        BS 7671, commonly known as the Wiring Regulations, is the national standard for electrical 
        installations in the United Kingdom. Compliance with these regulations is essential for 
        ensuring the safety and proper functioning of electrical installations.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Structure of BS 7671</h4>
        <p>The Wiring Regulations are divided into parts:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li><strong>Part 1:</strong> Scope, object and fundamental principles</li>
          <li><strong>Part 2:</strong> Definitions</li>
          <li><strong>Part 3:</strong> Assessment of general characteristics</li>
          <li><strong>Part 4:</strong> Protection for safety</li>
          <li><strong>Part 5:</strong> Selection and erection of equipment</li>
          <li><strong>Part 6:</strong> Inspection and testing</li>
          <li><strong>Part 7:</strong> Special installations or locations</li>
          <li><strong>Part 8:</strong> Functional requirements</li>
          <li><strong>Appendices:</strong> Additional information, tables and examples</li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Key Requirements of BS 7671</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Protection against electric shock:</strong> Basic and fault protection measures</li>
            <li><strong>Protection against thermal effects:</strong> Prevention of burns, fires, and other harmful effects</li>
            <li><strong>Protection against overcurrent:</strong> Protection of conductors from excessive currents</li>
            <li><strong>Isolation and switching:</strong> Means of disconnecting the supply for maintenance</li>
            <li><strong>Selection of equipment:</strong> Based on environmental conditions and compatibility</li>
            <li><strong>Accessibility:</strong> Requirements for access to electrical equipment</li>
            <li><strong>Identification and notices:</strong> Proper labeling of electrical installations</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Regulatory Status</h4>
          <p className="mb-2">
            While BS 7671 itself is not statutory law, compliance with it is often necessary to meet legal requirements under:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Electricity at Work Regulations 1989:</strong> Legal requirement for electrical safety in workplaces</li>
            <li><strong>Building Regulations:</strong> Especially Part P for domestic installations</li>
            <li><strong>Health and Safety at Work Act 1974:</strong> General duty of care requirements</li>
            <li><strong>Regulatory Reform (Fire Safety) Order 2005:</strong> Fire safety in buildings</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Design Considerations from BS 7671</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>All electrical installations must be designed by competent persons</li>
          <li>Designs must be suitable for the intended use and location</li>
          <li>All circuits must be properly protected against overload and fault currents</li>
          <li>Protective devices must be coordinated for proper discrimination</li>
          <li>Suitable earthing arrangements must be provided</li>
          <li>Equipment must be selected based on environmental conditions</li>
          <li>Circuits must be properly identified and documented</li>
          <li>Regular inspection and testing must be conducted</li>
        </ul>
      </div>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Documentation Requirements</h4>
        <p className="mb-2">BS 7671 requires that installations be properly documented, including:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Electrical Installation Certificate (EIC)</li>
          <li>Minor Electrical Installation Works Certificate (MEIWC)</li>
          <li>Electrical Installation Condition Report (EICR)</li>
          <li>Schedule of Inspections</li>
          <li>Schedule of Test Results</li>
          <li>Distribution board schedules</li>
          <li>As-built drawings and schematic diagrams</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section6_1: Section = {
  title: "BS 7671 Wiring Regulations",
  description: "Compliance with the current edition of wiring regulations",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand the structure and importance of BS 7671 Wiring Regulations</li>
            <li>Identify key requirements for electrical installations</li>
            <li>Recognize how BS 7671 relates to other statutory regulations</li>
            <li>Learn about documentation requirements for regulatory compliance</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Wiring Regulations Overview" 
        content={<WiringRegulations />}
      />
    </>
  )
};
