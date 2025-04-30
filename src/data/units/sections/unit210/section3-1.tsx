
import React from 'react';
import { Section210 } from './types';
import LessonContent from '@/components/units/LessonContent';

export const section3_1: Section210 = {
  id: "3.1",
  title: "Technical Documentation",
  description: "Creating and understanding technical documents and diagrams",
  content: (
    <>
      <LessonContent title="Technical Documentation in Electrical Work">
        <p>
          Clear technical documentation is essential in electrical work. It provides a record of installations, 
          helps others understand your work, ensures compliance with regulations, and serves as a reference 
          for future maintenance or modifications.
        </p>
        
        <h3 className="text-lg font-medium text-[#FFC900] mt-6 mb-3">Types of Technical Documentation</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Electrical drawings:</strong> Schematics, wiring diagrams, and layout plans
          </li>
          <li>
            <strong>Specifications:</strong> Detailed requirements for materials, equipment, and installation methods
          </li>
          <li>
            <strong>Inspection and testing reports:</strong> Documentation of safety checks and performance tests
          </li>
          <li>
            <strong>Maintenance logs:</strong> Records of repairs, replacements, and routine servicing
          </li>
          <li>
            <strong>Handover documentation:</strong> Information provided to clients or facility managers
          </li>
        </ul>
        
        <h3 className="text-lg font-medium text-[#FFC900] mt-6 mb-3">Key Principles for Effective Documentation</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Clarity:</strong> Use plain language where possible and define any technical terms
          </li>
          <li>
            <strong>Accuracy:</strong> Double-check all measurements, values, and specifications
          </li>
          <li>
            <strong>Completeness:</strong> Include all relevant information without unnecessary detail
          </li>
          <li>
            <strong>Consistency:</strong> Use standard symbols and terminology throughout
          </li>
          <li>
            <strong>Organization:</strong> Structure documents logically with clear headings and references
          </li>
        </ul>
        
        <h3 className="text-lg font-medium text-[#FFC900] mt-6 mb-3">Reading Technical Documentation</h3>
        <p>Being able to interpret technical documents is just as important as creating them:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Familiarize yourself with standard electrical symbols</li>
          <li>Learn to read different types of diagrams (schematic, single-line, wiring)</li>
          <li>Pay attention to notes and specifications on drawings</li>
          <li>Cross-reference between related documents for a complete understanding</li>
        </ul>
        
        <div className="bg-[#353a2c] p-4 rounded-md mt-6">
          <p className="text-[#FFC900] font-medium">Professional Tip</p>
          <p>When documenting your work, always think about who will need to use this information in the future. What would you want to know if you were maintaining or modifying this installation several years from now?</p>
        </div>
      </LessonContent>
    </>
  )
};
