
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { SectionData } from './types';

const HealthAndSafety = () => {
  return (
    <LessonContent title="Health and Safety at Work Act 1974">
      <p className="mb-4">
        The Health and Safety at Work etc. Act 1974 (HSWA) is the primary piece of legislation covering 
        occupational health and safety in the UK. It sets out the general duties that employers have towards 
        their employees and members of the public, and that employees have to themselves and each other.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Key Principles of HSWA 1974</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>General duty of care:</strong> Employers must ensure, so far as reasonably practicable, the health, safety, and welfare of all employees</li>
          <li><strong>Risk management:</strong> Requires a systematic approach to identifying, assessing, and controlling workplace hazards</li>
          <li><strong>Safe systems of work:</strong> Employers must establish and maintain safe working procedures</li>
          <li><strong>Information and training:</strong> Employees must receive adequate information, instruction, training, and supervision</li>
          <li><strong>Safe workplace:</strong> Provision and maintenance of safe premises, equipment, and working environment</li>
          <li><strong>Public protection:</strong> Duty to ensure work activities don't put others at risk</li>
        </ul>
      </div>
      
      <div className="bg-[#2a2d24] p-4 rounded-md">
        <h4 className="font-medium text-[#FFC900] mb-2">Employer Responsibilities Under HSWA</h4>
        <p className="mb-2">
          Section 2 of the Act outlines the following employer duties:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Provide and maintain safe plant and systems of work</li>
          <li>Ensure safe handling, storage, and transport of substances and materials</li>
          <li>Provide information, instruction, training, and supervision</li>
          <li>Maintain a safe workplace with safe access and egress</li>
          <li>Provide a safe working environment with adequate welfare facilities</li>
          <li>Create a written health and safety policy (if employing 5 or more people)</li>
          <li>Consult with employees on health and safety matters</li>
          <li>Conduct risk assessments and implement controls</li>
          <li>Report certain accidents, incidents, and occupational diseases (RIDDOR)</li>
        </ul>
      </div>
      
      <div className="mt-4 bg-[#2a2d24] p-4 rounded-md">
        <h4 className="font-medium text-[#FFC900] mb-2">Employee Responsibilities Under HSWA</h4>
        <p className="mb-2">
          Section 7 and 8 of the Act outline employee duties:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Take reasonable care of their own health and safety</li>
          <li>Take reasonable care not to put others at risk through their work</li>
          <li>Cooperate with their employer on health and safety matters</li>
          <li>Not interfere with or misuse anything provided for health, safety, or welfare</li>
          <li>Report hazards, defects, and dangerous situations</li>
          <li>Use equipment and materials as instructed and trained</li>
          <li>Use provided PPE correctly and report any defects</li>
        </ul>
      </div>
      
      <div className="mt-4 bg-[#2a2d24] p-4 rounded-md">
        <h4 className="font-medium text-[#FFC900] mb-2">Enforcement and Penalties</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Enforcement authority:</strong> Health and Safety Executive (HSE) and local authorities</li>
          <li><strong>Inspector powers:</strong> Enter premises, take measurements, photographs, samples, require information</li>
          <li><strong>Enforcement notices:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Improvement Notice - requiring remedy of a breach within a specified time</li>
              <li>Prohibition Notice - stopping dangerous activities until remedied</li>
            </ul>
          </li>
          <li><strong>Prosecution:</strong> For serious breaches, resulting in:
            <ul className="list-disc pl-6 mt-1">
              <li>Unlimited fines</li>
              <li>Up to 2 years imprisonment for certain offenses</li>
              <li>Disqualification for directors</li>
            </ul>
          </li>
          <li><strong>Fee for Intervention:</strong> HSE can charge for time spent dealing with material breaches</li>
        </ul>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Application in the Electrical Industry</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Risk assessment:</strong> Identifying electrical hazards and implementing controls</li>
          <li><strong>Safe isolation procedures:</strong> Working dead wherever possible</li>
          <li><strong>Permit-to-work systems:</strong> For high-risk electrical activities</li>
          <li><strong>PPE provision:</strong> Insulated tools, voltage indicators, PPE</li>
          <li><strong>Training:</strong> Regular updates on safe electrical working practices</li>
          <li><strong>Maintenance:</strong> Regular inspection and testing of electrical equipment</li>
          <li><strong>Emergency procedures:</strong> For electrical accidents and incidents</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section5_1: SectionData = {
  title: "Health and Safety at Work Act",
  description: "Understanding your responsibilities under HSWA 1974",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand the key principles of the Health and Safety at Work Act 1974</li>
            <li>Identify the responsibilities of employers under the Act</li>
            <li>Recognize your own responsibilities as an employee or self-employed person</li>
            <li>Learn about enforcement and consequences of non-compliance</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Health and Safety at Work Act 1974" 
        content={<HealthAndSafety />}
      />
    </>
  )
};
