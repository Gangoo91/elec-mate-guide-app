
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import { SectionData } from './types';

export const section5_1: SectionData = {
  title: "Health, Safety, and Legal Requirements",
  description: "Understanding key legislation and safety responsibilities",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand the key legal frameworks governing electrical work</li>
            <li>Identify specific responsibilities under health and safety legislation</li>
            <li>Recognize personal and professional obligations for workplace safety</li>
            <li>Learn about the consequences of non-compliance with regulations</li>
          </ul>
        }
      />
      
      <ContentSection 
        title="Health and Safety at Work Act 1974"
        content={
          <div className="space-y-4">
            <p>
              The Health and Safety at Work Act (HSWA) 1974 is the primary legislation covering occupational health and safety in the UK, providing a comprehensive framework for workplace safety.
            </p>
            
            <h3 className="text-lg font-medium">Key Principles</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Establishes the general duties of employers to ensure the health, safety, and welfare of employees</li>
              <li>Creates obligations for employees to take reasonable care of their own and others' safety</li>
              <li>Requires safe systems of work, safe equipment, and adequate training</li>
              <li>Mandates risk assessment and management of hazards</li>
              <li>Establishes enforcement mechanisms and penalties for non-compliance</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">Employer Responsibilities</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Safe Workplace:</span> Providing and maintaining safe premises, equipment, and systems of work
              </li>
              <li>
                <span className="font-medium">Risk Management:</span> Conducting suitable and sufficient risk assessments
              </li>
              <li>
                <span className="font-medium">Information:</span> Providing information, instruction, and training on hazards and controls
              </li>
              <li>
                <span className="font-medium">Consultation:</span> Consulting with employees on health and safety matters
              </li>
              <li>
                <span className="font-medium">Emergency Procedures:</span> Establishing emergency procedures and first aid arrangements
              </li>
              <li>
                <span className="font-medium">Supervision:</span> Ensuring adequate supervision, especially for less experienced workers
              </li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">Employee Responsibilities</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Self-Care:</span> Taking reasonable care of your own health and safety
              </li>
              <li>
                <span className="font-medium">Consideration:</span> Avoiding actions that could harm others
              </li>
              <li>
                <span className="font-medium">Cooperation:</span> Cooperating with employers on health and safety matters
              </li>
              <li>
                <span className="font-medium">Proper Use:</span> Using equipment, substances, and safety devices correctly
              </li>
              <li>
                <span className="font-medium">Reporting:</span> Reporting hazards, defects, or shortcomings in safety arrangements
              </li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">Self-Employed Persons</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Must conduct their work safely without risking themselves or others</li>
              <li>Are responsible for their own health and safety management</li>
              <li>Must coordinate with others working at the same site</li>
              <li>Have duties similar to both employers and employees</li>
            </ul>
          </div>
        }
      />
      
      <ContentSection 
        title="Electricity at Work Regulations 1989"
        content={
          <div className="space-y-4">
            <p>
              The Electricity at Work Regulations (EWR) 1989 specifically address electrical safety in the workplace, applying to all work involving electrical systems and equipment.
            </p>
            
            <h3 className="text-lg font-medium">Core Requirements</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Regulation 4(1):</span> All electrical systems must be constructed and maintained to prevent danger
              </li>
              <li>
                <span className="font-medium">Regulation 4(3):</span> Work activities must be carried out in a way that prevents danger
              </li>
              <li>
                <span className="font-medium">Regulation 14:</span> No person shall work on or near live conductors unless:
                <ul className="list-disc pl-6 mt-1">
                  <li>It is unreasonable for the conductors to be dead</li>
                  <li>It is reasonable for the person to work on or near them while they are live</li>
                  <li>Suitable precautions are taken to prevent injury</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Regulation 16:</span> Work should only be carried out by competent persons or those appropriately supervised
              </li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">Practical Implications</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Isolation:</span> Systems must be isolated and proven dead before work begins
              </li>
              <li>
                <span className="font-medium">Testing:</span> Appropriate test equipment must be used to verify isolation
              </li>
              <li>
                <span className="font-medium">Live Working:</span> Work on live systems should be exceptional, with specific risk assessment and controls
              </li>
              <li>
                <span className="font-medium">Equipment:</span> Electrical equipment must be properly maintained and inspected
              </li>
              <li>
                <span className="font-medium">Competence:</span> Workers must have appropriate knowledge and experience for the tasks they perform
              </li>
              <li>
                <span className="font-medium">Documentation:</span> Records of maintenance, testing, and inspection must be kept
              </li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">Enforcement and Penalties</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Breaches can result in improvement or prohibition notices</li>
              <li>Serious breaches can lead to prosecution and substantial fines</li>
              <li>In cases of gross negligence causing injury or death, custodial sentences are possible</li>
              <li>The regulations create both corporate and individual liabilities</li>
            </ul>
          </div>
        }
      />
      
      <ContentSection 
        title="Safe Behaviors in Electrical Work"
        content={
          <div className="space-y-4">
            <p>
              Beyond legal compliance, safe behaviors are essential for protecting yourself and others in electrical work.
            </p>
            
            <h3 className="text-lg font-medium">Personal Safety Practices</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Knowledge:</span> Ensuring you understand the systems you're working on
              </li>
              <li>
                <span className="font-medium">Planning:</span> Thinking through tasks before starting work
              </li>
              <li>
                <span className="font-medium">PPE:</span> Using appropriate personal protective equipment
              </li>
              <li>
                <span className="font-medium">Tools:</span> Using insulated tools and testing equipment correctly
              </li>
              <li>
                <span className="font-medium">Verification:</span> Always testing circuits before touching them
              </li>
              <li>
                <span className="font-medium">Lock-Off:</span> Using personal padlocks and tags for isolation
              </li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">Team Safety Practices</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Communication:</span> Clear exchange of information about work status
              </li>
              <li>
                <span className="font-medium">Supervision:</span> Appropriate oversight of less experienced team members
              </li>
              <li>
                <span className="font-medium">Coordination:</span> Working together on complex isolations or reinstatements
              </li>
              <li>
                <span className="font-medium">Checks:</span> Performing peer checks on critical safety actions
              </li>
              <li>
                <span className="font-medium">Intervention:</span> Willing to step in if unsafe acts are observed
              </li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">Safety Culture Elements</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Learning:</span> Taking lessons from near misses and incidents
              </li>
              <li>
                <span className="font-medium">Reporting:</span> Willingness to report safety concerns
              </li>
              <li>
                <span className="font-medium">Knowledge Sharing:</span> Passing on safety information to colleagues
              </li>
              <li>
                <span className="font-medium">Self-Assessment:</span> Honestly evaluating your own competence for tasks
              </li>
              <li>
                <span className="font-medium">Continuous Improvement:</span> Regularly updating safety knowledge
              </li>
            </ul>
          </div>
        }
      />
    </>
  ),
};
