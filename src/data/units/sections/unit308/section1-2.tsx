
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { SectionData } from './types';

const RoleResponsibilities = () => {
  return (
    <LessonContent title="Role Responsibilities">
      <p className="mb-4">
        Understanding the specific responsibilities of each role in the electrical industry is essential for 
        career planning and professional development.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Technical Responsibilities</h4>
        <div className="space-y-3">
          <div>
            <p className="font-medium">Installation Specialists:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Interpreting technical drawings and specifications</li>
              <li>Installing systems to comply with BS 7671</li>
              <li>Testing and certification of completed work</li>
              <li>Fault diagnosis and problem-solving</li>
              <li>Staying updated with technical developments</li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium">Design Roles:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Creating electrical system designs</li>
              <li>Load calculations and cable sizing</li>
              <li>Producing technical specifications</li>
              <li>Ensuring compliance with regulations</li>
              <li>Considering energy efficiency and sustainability</li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium">Management Roles:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Technical oversight of projects</li>
              <li>Quality control and assurance</li>
              <li>Resource allocation</li>
              <li>Risk assessment and management</li>
              <li>Technical problem resolution</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Safety Responsibilities</h4>
        <p className="mb-2">All electrical roles carry significant safety responsibilities:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Maintaining safe working practices at all times</li>
          <li>Risk assessment before starting work</li>
          <li>Proper use of PPE and safety equipment</li>
          <li>Ensuring electrical safety for end users</li>
          <li>Following isolation procedures</li>
          <li>Reporting safety concerns or incidents</li>
          <li>Understanding emergency procedures</li>
        </ul>
      </div>
      
      <div className="bg-[#2a2d24] p-4 rounded-md">
        <h4 className="font-medium text-[#FFC900] mb-2">Commercial Responsibilities</h4>
        <div className="space-y-3">
          <div>
            <p className="font-medium">Project Roles:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Budget management</li>
              <li>Resource efficiency</li>
              <li>Time management</li>
              <li>Client relationship management</li>
              <li>Contract compliance</li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium">Estimating and Tendering:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Accurate cost estimation</li>
              <li>Competitive pricing</li>
              <li>Material specification</li>
              <li>Labor forecasting</li>
              <li>Subcontractor engagement</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Professional Development Responsibilities</h4>
        <p className="mb-2">All electrical professionals have responsibilities regarding their own development:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Maintaining current knowledge of regulations</li>
          <li>Ongoing skills development</li>
          <li>Participating in relevant training</li>
          <li>Mentoring less experienced colleagues</li>
          <li>Contributing to the profession's development</li>
          <li>Upholding professional standards and ethics</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section1_2: SectionData = {
  title: "Role Responsibilities",
  description: "Understanding the responsibilities of each electrical role",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand the technical responsibilities of different electrical roles</li>
            <li>Recognize the safety obligations across all electrical professions</li>
            <li>Identify the commercial aspects of various industry positions</li>
            <li>Appreciate professional development responsibilities</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Understanding Role Responsibilities" 
        content={<RoleResponsibilities />}
      />
    </>
  )
};
