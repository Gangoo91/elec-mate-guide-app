
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { SectionData } from './types';

const ElectricalRoles = () => {
  return (
    <LessonContent title="Electrical Career Roles">
      <p className="mb-4">
        The electrical industry offers a diverse range of career paths, each with its own specialized focus, 
        responsibilities, and opportunities for advancement.
      </p>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Electrician</h4>
          <p className="mb-2">
            A qualified professional who installs, maintains, and repairs electrical systems, wiring, and equipment.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Installs electrical wiring, components, and systems according to regulations</li>
            <li>Tests installations to ensure safety and compliance</li>
            <li>Diagnoses and repairs electrical faults</li>
            <li>Reads and interprets technical drawings and wiring diagrams</li>
            <li>Uses specialized tools and test equipment</li>
            <li>Must be qualified to industry standards (e.g., Level 3 NVQ)</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Maintenance Electrician</h4>
          <p className="mb-2">
            Specializes in maintaining and repairing existing electrical systems in buildings or facilities.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Performs regular preventative maintenance on electrical systems</li>
            <li>Responds to breakdown calls and emergency repairs</li>
            <li>Undertakes condition monitoring of equipment</li>
            <li>Maintains records of maintenance activities</li>
            <li>Works in industrial settings, commercial buildings, or facilities</li>
            <li>Often requires shift work to cover 24/7 operations</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Project Manager</h4>
          <p className="mb-2">
            Oversees electrical projects from planning to completion.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Plans project schedules, resources, and budgets</li>
            <li>Coordinates with clients, suppliers, and subcontractors</li>
            <li>Ensures projects meet quality standards and regulations</li>
            <li>Manages risks and resolves issues</li>
            <li>Typically requires several years of electrical experience plus management skills</li>
            <li>May need additional qualifications in project management</li>
          </ul>
        </div>
      </div>
      
      <div className="space-y-4 mt-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Estimator</h4>
          <p className="mb-2">
            Calculates the costs of electrical projects for tendering and quotation purposes.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Analyzes plans and specifications to determine required materials and labor</li>
            <li>Prepares detailed cost estimates for projects</li>
            <li>Obtains quotes from suppliers and subcontractors</li>
            <li>Helps prepare tender submissions or client quotations</li>
            <li>Requires technical knowledge of electrical installations</li>
            <li>Must understand pricing structures and market rates</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Building Services Engineer</h4>
          <p className="mb-2">
            Designs and oversees the implementation of electrical and other building services systems.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Designs electrical distribution systems for buildings</li>
            <li>Coordinates with other building services (HVAC, plumbing, etc.)</li>
            <li>Ensures compliance with regulations and energy efficiency requirements</li>
            <li>Creates specifications and technical documentation</li>
            <li>Often requires degree-level qualification</li>
            <li>May be a chartered engineer with professional body membership</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Contracts Manager</h4>
          <p className="mb-2">
            Manages the contractual aspects of electrical projects and client relationships.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Oversees multiple electrical projects or contracts</li>
            <li>Manages client relationships and expectations</li>
            <li>Negotiates contracts and variations</li>
            <li>Ensures contractual compliance and resolves disputes</li>
            <li>Manages financial aspects of contracts</li>
            <li>Typically progresses from project management with additional commercial experience</li>
          </ul>
        </div>
      </div>
    </LessonContent>
  );
};

export const section1_1: SectionData = {
  title: "Electrician and Other Roles",
  description: "Learn about different electrical jobs and career paths",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Identify the main career roles in the electrical industry</li>
            <li>Understand the key responsibilities of each role</li>
            <li>Recognize the qualifications and experience typically required</li>
            <li>Appreciate the relationship between different roles in the industry</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Electrical Career Roles" 
        content={<ElectricalRoles />}
      />
    </>
  )
};
