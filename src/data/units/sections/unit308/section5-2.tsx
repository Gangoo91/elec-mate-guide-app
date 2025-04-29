
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { SectionData } from './types';

const ElectricityAtWork = () => {
  return (
    <LessonContent title="Electricity at Work Regulations 1989">
      <p className="mb-4">
        The Electricity at Work Regulations 1989 (EAW) are specific regulations made under the Health and Safety at Work Act 
        that impose requirements relating to electricity at work. They apply to all aspects of the use of electricity in the workplace.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Key Principles of the Regulations</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Legal requirement:</strong> Compliance is mandatory, not optional</li>
          <li><strong>Goal-setting regulations:</strong> Focus on outcomes rather than prescribing specific methods</li>
          <li><strong>Reasonably practicable:</strong> Measures should be proportionate to the risk</li>
          <li><strong>Competence:</strong> Work must be carried out by those with appropriate knowledge and experience</li>
          <li><strong>Absolute duties:</strong> Some regulations impose absolute requirements (no qualifier of "reasonably practicable")</li>
          <li><strong>Coverage:</strong> Applies to all workplaces and work activities involving electricity</li>
        </ul>
      </div>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Key Requirements</h4>
        <div className="space-y-3">
          <div>
            <p className="font-medium">Regulation 4 - Systems, Work Activities, and Protective Equipment:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>All electrical systems must be constructed and maintained to prevent danger</li>
              <li>Work activities must be carried out in a way that prevents danger</li>
              <li>Protective equipment must be suitable for use and properly maintained</li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium">Regulation 12 - Working on or Near Live Conductors:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>No work on or near live conductors unless:
                <ul className="list-disc pl-6 mt-1">
                  <li>It is unreasonable to work dead</li>
                  <li>It is reasonable to work live</li>
                  <li>Suitable precautions are taken to prevent injury</li>
                </ul>
              </li>
              <li>This is one of the most important regulations for electricians</li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium">Regulation 13 - Competence:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>No person shall engage in work that requires technical knowledge or experience to prevent danger unless:
                <ul className="list-disc pl-6 mt-1">
                  <li>They have appropriate technical knowledge and experience</li>
                  <li>OR they are under appropriate supervision</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-[#2a2d24] p-4 rounded-md">
        <h4 className="font-medium text-[#FFC900] mb-2">Safe Working Practices Required</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Safe isolation procedures:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Identify correct point of isolation</li>
              <li>Obtain permission to isolate</li>
              <li>Switch off and isolate</li>
              <li>Lock off and retain key</li>
              <li>Post "Danger" notices</li>
              <li>Prove dead using properly tested voltage indicator</li>
            </ul>
          </li>
          <li><strong>Test equipment:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Must be suitable for purpose</li>
              <li>Must be properly maintained and calibrated</li>
              <li>Should be verified as working before and after use</li>
            </ul>
          </li>
          <li><strong>Live working:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Only permitted in exceptional circumstances</li>
              <li>Requires risk assessment</li>
              <li>Requires appropriate precautions (insulated tools, barriers, PPE)</li>
              <li>Must be properly authorized</li>
            </ul>
          </li>
        </ul>
      </div>
      
      <div className="mt-4 bg-[#2a2d24] p-4 rounded-md">
        <h4 className="font-medium text-[#FFC900] mb-2">Practical Implementation in Electrical Work</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Installation work:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Must comply with BS 7671 (IET Wiring Regulations)</li>
              <li>Proper selection of equipment and conductors</li>
              <li>Appropriate protective devices</li>
              <li>Testing and certification</li>
            </ul>
          </li>
          <li><strong>Maintenance:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Regular inspection and testing</li>
              <li>Preventative maintenance programs</li>
              <li>Records of maintenance and testing</li>
            </ul>
          </li>
          <li><strong>Portable appliance testing (PAT):</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Regular checks and tests</li>
              <li>Frequency based on risk assessment</li>
              <li>Equipment labeling and records</li>
            </ul>
          </li>
        </ul>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Enforcement and Consequences</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Enforced by the Health and Safety Executive (HSE)</li>
          <li>Breaches can lead to improvement or prohibition notices</li>
          <li>Serious breaches can result in prosecution</li>
          <li>Penalties include:
            <ul className="list-disc pl-6 mt-1">
              <li>Unlimited fines</li>
              <li>Up to 2 years imprisonment for certain offenses</li>
              <li>Personal liability for directors and managers</li>
            </ul>
          </li>
          <li>Accidents resulting from non-compliance can lead to civil claims</li>
          <li>Corporate manslaughter charges possible in fatal incidents</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section5_2: SectionData = {
  title: "Electricity at Work Regulations",
  description: "Key regulations that govern electrical work safety",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand the key requirements of the Electricity at Work Regulations 1989</li>
            <li>Identify the safe working practices required by the regulations</li>
            <li>Recognize how the regulations apply to everyday electrical work</li>
            <li>Learn about the consequences of non-compliance</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Electricity at Work Regulations 1989" 
        content={<ElectricityAtWork />}
      />
    </>
  )
};
