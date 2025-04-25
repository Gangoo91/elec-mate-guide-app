
import React from 'react';

interface SectionData {
  title: string;
  description: string;
  content: React.ReactNode;
}

export const sections210: Record<string, SectionData> = {
  "1.1": {
    title: "Why Communication Matters",
    description: "Understanding the importance of good communication in the electrical industry",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-4">The Importance of Communication Skills</h3>
        <p className="mb-4">
          As an electrician, your technical skills are vital, but your ability to communicate effectively is equally important 
          for career success and professional relationships.
        </p>
        
        <h4 className="text-lg font-semibold mb-3">Safety Communication</h4>
        <p className="mb-4">
          Clear communication is critical for workplace safety:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Hazard identification: Clearly describing potential dangers to colleagues</li>
          <li>Emergency procedures: Understanding and conveying protocols effectively</li>
          <li>Work permits: Accurately completing and understanding permit requirements</li>
          <li>Warning signage: Comprehending and creating clear warning messages</li>
          <li>Handovers: Ensuring critical safety information is passed between shifts</li>
        </ul>

        <h4 className="text-lg font-semibold mb-3">Client Relations</h4>
        <p className="mb-4">
          Your communication skills directly impact customer satisfaction:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Expectations management: Clearly explaining what work will be done</li>
          <li>Technical explanations: Breaking down complex information for non-technical clients</li>
          <li>Problem-solving: Discussing issues and potential solutions</li>
          <li>Quote explanations: Justifying costs and work schedules</li>
          <li>After-service instructions: Ensuring clients understand how to operate systems</li>
        </ul>

        <h4 className="text-lg font-semibold mb-3">Team Collaboration</h4>
        <p className="mb-4">
          Working effectively with others requires strong communication:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Task coordination: Ensuring everyone understands their responsibilities</li>
          <li>Knowledge sharing: Contributing to and learning from the team's collective expertise</li>
          <li>Conflict resolution: Addressing disagreements professionally and constructively</li>
          <li>Progress reporting: Keeping everyone informed of developments</li>
          <li>Multi-trade coordination: Working alongside other building professionals</li>
        </ul>
      </>
    )
  },
  "1.2": {
    title: "Written Communication",
    description: "Developing effective written communication skills for documentation and correspondence",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-4">Effective Written Communication</h3>
        <p className="mb-4">
          Written documentation is a permanent record of your work that demonstrates professionalism and protects all parties involved.
        </p>
        
        <h4 className="text-lg font-semibold mb-3">Technical Documentation</h4>
        <p className="mb-4">
          Maintaining clear records of installations and repairs:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Certification: Completing electrical certificates accurately and thoroughly</li>
          <li>Test results: Recording measurements and observations clearly</li>
          <li>Installation logs: Documenting equipment installed and work performed</li>
          <li>Maintenance records: Tracking service history and component replacements</li>
          <li>Risk assessments: Identifying hazards and control measures</li>
        </ul>

        <h4 className="text-lg font-semibold mb-3">Client Correspondence</h4>
        <p className="mb-4">
          Professional written communication with customers:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Quotations: Clear breakdown of costs, materials, and labor</li>
          <li>Emails: Formal, concise, and free from technical jargon</li>
          <li>Invoices: Detailed descriptions of work completed</li>
          <li>Instructions: User manuals and operational guides</li>
          <li>Follow-up communications: Ensuring customer satisfaction</li>
        </ul>

        <h4 className="text-lg font-semibold mb-3">Digital Communication</h4>
        <p className="mb-4">
          Modern tools for effective written communication:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Project management software: Collaborative tools for team communication</li>
          <li>Mobile apps: Digital forms and documentation tools</li>
          <li>Cloud storage: Organizing and sharing documentation securely</li>
          <li>Digital signatures: Obtaining and providing electronic approvals</li>
          <li>Technical diagrams: Creating clear visual representations of installations</li>
        </ul>
      </>
    )
  }
};
