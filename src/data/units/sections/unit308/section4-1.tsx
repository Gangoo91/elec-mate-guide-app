
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import { SectionData } from './types';

export const section4_1: SectionData = {
  title: "Employer Expectations and Professional Conduct",
  description: "Understanding workplace expectations and professional behavior",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Identify key skills and attributes that employers value in the industry</li>
            <li>Understand the importance of professional conduct on site and with clients</li>
            <li>Learn effective communication strategies in workplace settings</li>
            <li>Recognize best practices for teamwork and collaboration</li>
          </ul>
        }
      />
      
      <ContentSection 
        title="Key Skills Valued by Employers"
        content={
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Communication Skills</h3>
            <p>
              Effective communication is essential in the electrical industry for safety, efficiency, and client satisfaction.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Clear Instructions:</span> Ability to understand and follow verbal and written instructions precisely.
              </li>
              <li>
                <span className="font-medium">Technical Explanation:</span> Explaining technical concepts to non-technical clients in understandable terms.
              </li>
              <li>
                <span className="font-medium">Documentation:</span> Clear and accurate completion of reports, certificates, and other paperwork.
              </li>
              <li>
                <span className="font-medium">Digital Communication:</span> Professional use of email, messaging apps, and other digital tools.
              </li>
              <li>
                <span className="font-medium">Active Listening:</span> Taking time to understand client requirements and colleagues' input.
              </li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">Problem-Solving</h3>
            <p>
              Electrical work frequently presents unexpected challenges that require analytical thinking and creative solutions.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Fault Diagnosis:</span> Systematic approach to identifying electrical problems.
              </li>
              <li>
                <span className="font-medium">Adaptability:</span> Finding workable solutions when the ideal approach isn't possible.
              </li>
              <li>
                <span className="font-medium">Critical Thinking:</span> Evaluating multiple possible causes and solutions.
              </li>
              <li>
                <span className="font-medium">Initiative:</span> Taking appropriate action without constant supervision.
              </li>
              <li>
                <span className="font-medium">Resource Management:</span> Working effectively with available materials and tools.
              </li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">Teamwork</h3>
            <p>
              Modern construction and maintenance projects involve multiple trades working together to achieve common goals.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Collaboration:</span> Working effectively with other trades and team members.
              </li>
              <li>
                <span className="font-medium">Respect:</span> Showing consideration for others' expertise and work areas.
              </li>
              <li>
                <span className="font-medium">Coordination:</span> Planning work to integrate with other activities on site.
              </li>
              <li>
                <span className="font-medium">Knowledge Sharing:</span> Contributing expertise and learning from others.
              </li>
              <li>
                <span className="font-medium">Conflict Resolution:</span> Addressing disagreements professionally and constructively.
              </li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">Reliability and Time Management</h3>
            <p>
              Punctuality and dependability are fundamental expectations in the electrical industry.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Punctuality:</span> Arriving on time for work and meetings.
              </li>
              <li>
                <span className="font-medium">Attendance:</span> Maintaining consistent presence and providing appropriate notice for absences.
              </li>
              <li>
                <span className="font-medium">Task Completion:</span> Finishing work within agreed timeframes.
              </li>
              <li>
                <span className="font-medium">Prioritization:</span> Managing multiple tasks and deadlines effectively.
              </li>
              <li>
                <span className="font-medium">Planning:</span> Anticipating time requirements for different aspects of work.
              </li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">Health and Safety Awareness</h3>
            <p>
              Safety consciousness is non-negotiable in electrical work due to the inherent risks involved.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Risk Assessment:</span> Identifying hazards and taking appropriate precautions.
              </li>
              <li>
                <span className="font-medium">Safety Procedures:</span> Following established safety protocols without shortcuts.
              </li>
              <li>
                <span className="font-medium">PPE Compliance:</span> Proper use of personal protective equipment.
              </li>
              <li>
                <span className="font-medium">Safe Systems of Work:</span> Understanding and implementing permit systems and isolation procedures.
              </li>
              <li>
                <span className="font-medium">Reporting:</span> Promptly reporting accidents, near misses, and unsafe conditions.
              </li>
            </ul>
          </div>
        }
      />
      
      <ContentSection 
        title="Professional Conduct"
        content={
          <div className="space-y-4">
            <p>
              Professional conduct extends beyond technical competence to encompass personal behavior and ethics.
            </p>
            
            <h3 className="text-lg font-medium">On-Site Professionalism</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Appearance:</span> Clean, appropriate workwear and personal presentation.
              </li>
              <li>
                <span className="font-medium">Language:</span> Appropriate language and communication, avoiding offensive terms.
              </li>
              <li>
                <span className="font-medium">Respect for Property:</span> Careful handling of client property and cleaning up after work.
              </li>
              <li>
                <span className="font-medium">Work Area Management:</span> Maintaining tidy, organized work spaces.
              </li>
              <li>
                <span className="font-medium">Noise and Disruption:</span> Minimizing disturbance to building occupants.
              </li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">Client Interactions</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Courtesy:</span> Polite, respectful engagement with clients and building users.
              </li>
              <li>
                <span className="font-medium">Transparency:</span> Clear communication about work requirements, timelines, and costs.
              </li>
              <li>
                <span className="font-medium">Reliability:</span> Meeting commitments and keeping appointments.
              </li>
              <li>
                <span className="font-medium">Confidentiality:</span> Respecting client privacy and sensitive information.
              </li>
              <li>
                <span className="font-medium">Responsiveness:</span> Addressing queries and concerns promptly.
              </li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">Ethical Responsibilities</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Honesty:</span> Truthful representation of qualifications, work requirements, and pricing.
              </li>
              <li>
                <span className="font-medium">Quality Work:</span> Commitment to performing high-standard work regardless of supervision.
              </li>
              <li>
                <span className="font-medium">Regulatory Compliance:</span> Adherence to regulations even when not under scrutiny.
              </li>
              <li>
                <span className="font-medium">Professional Boundaries:</span> Maintaining appropriate relationships with clients and colleagues.
              </li>
              <li>
                <span className="font-medium">Environmental Responsibility:</span> Proper disposal of waste and consideration of environmental impact.
              </li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">Business Representation</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Company Values:</span> Embodying the values and standards of your employer.
              </li>
              <li>
                <span className="font-medium">Brand Protection:</span> Awareness of how individual actions reflect on the business.
              </li>
              <li>
                <span className="font-medium">Social Media Conduct:</span> Responsible use of social media in relation to work.
              </li>
              <li>
                <span className="font-medium">Confidentiality:</span> Protection of employer's intellectual property and business information.
              </li>
              <li>
                <span className="font-medium">Company Policies:</span> Following established procedures and protocols.
              </li>
            </ul>
          </div>
        }
      />
    </>
  ),
};
