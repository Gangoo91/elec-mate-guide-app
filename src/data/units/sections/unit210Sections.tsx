import React from 'react';

interface SectionData {
  title: string;
  description: string;
  content: React.ReactNode;
  detailedContent?: React.ReactNode;
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
    ),
    detailedContent: (
      <>
        <h3 className="text-2xl font-bold mb-6">The Professional Impact of Communication Skills</h3>
        
        <section className="mb-8">
          <h4 className="text-xl font-semibold mb-4">Safety Communication Excellence</h4>
          <p className="mb-4">
            Effective communication about safety matters can be the difference between a safe workplace and one where accidents occur:
          </p>
          
          <div className="bg-[#22251e] p-6 rounded-lg mb-4">
            <h5 className="text-lg font-semibold mb-3">Critical Safety Communication Scenarios</h5>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Live Working Procedures:</strong> Clear communication about isolation points, test procedures and safety measures</li>
              <li><strong>Emergency Response:</strong> Precise instruction during incidents to prevent escalation</li>
              <li><strong>Risk Assessment Sharing:</strong> Communicating identified risks and control measures to all workers</li>
              <li><strong>Permit-to-Work Systems:</strong> Effective handover and sign-off procedures</li>
              <li><strong>Toolbox Talks:</strong> Concise delivery of safety information before commencing work</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h4 className="text-xl font-semibold mb-4">Client Communication Strategy</h4>
          <p className="mb-4">
            Building strong relationships with clients requires effective communication approaches:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#22251e] p-6 rounded-lg">
              <h5 className="text-lg font-semibold mb-3">Initial Consultation</h5>
              <ul className="list-disc pl-6 space-y-1">
                <li>Active listening to understand requirements</li>
                <li>Asking clarifying questions</li>
                <li>Taking comprehensive notes</li>
                <li>Providing realistic timeframes</li>
                <li>Explaining processes in non-technical terms</li>
              </ul>
            </div>
            <div className="bg-[#22251e] p-6 rounded-lg">
              <h5 className="text-lg font-semibold mb-3">Ongoing Project Communication</h5>
              <ul className="list-disc pl-6 space-y-1">
                <li>Regular progress updates</li>
                <li>Early notification of challenges</li>
                <li>Clear explanation of additional costs</li>
                <li>Professional management of complaints</li>
                <li>Comprehensive handover procedures</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-4">Interdisciplinary Collaboration</h4>
          <p className="mb-4">
            Modern electrical work rarely happens in isolation. You'll need to communicate effectively with:
          </p>
          
          <div className="bg-[#22251e] p-6 rounded-lg mb-4">
            <h5 className="text-lg font-semibold mb-3">Cross-Trade Communication</h5>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#FFC900]/30">
                  <th className="text-left py-2 px-2">Trade</th>
                  <th className="text-left py-2 px-2">Key Communication Points</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#FFC900]/10">
                  <td className="py-2 px-2 font-semibold">Plumbers</td>
                  <td className="py-2 px-2">Coordination for earthing requirements, avoiding clashes between pipes and cables</td>
                </tr>
                <tr className="border-b border-[#FFC900]/10">
                  <td className="py-2 px-2 font-semibold">Carpenters</td>
                  <td className="py-2 px-2">Planning cable routes, coordinating notching and drilling in structural timbers</td>
                </tr>
                <tr className="border-b border-[#FFC900]/10">
                  <td className="py-2 px-2 font-semibold">Plasterers</td>
                  <td className="py-2 px-2">Back box positions, cable depths, coordination of work sequencing</td>
                </tr>
                <tr className="border-b border-[#FFC900]/10">
                  <td className="py-2 px-2 font-semibold">HVAC Engineers</td>
                  <td className="py-2 px-2">Power requirements, control wiring, coordination of services</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p>
            Professional communication across trades not only makes projects run more smoothly but also 
            enhances your reputation as a collaborative and effective electrical professional.
          </p>
        </section>
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
    ),
    detailedContent: (
      <>
        <h3 className="text-2xl font-bold mb-6">Mastering Professional Written Communication</h3>
        
        <section className="mb-8">
          <h4 className="text-xl font-semibold mb-4">Technical Documentation Excellence</h4>
          <p className="mb-4">
            Clear, accurate technical documentation is essential for compliance, safety, and professional reputation:
          </p>
          
          <div className="bg-[#22251e] p-6 rounded-lg mb-4">
            <h5 className="text-lg font-semibold mb-3">Electrical Certification Best Practices</h5>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Accuracy:</strong> Enter all measurements exactly as recorded without rounding</li>
              <li><strong>Completeness:</strong> Fill in all fields, using "N/A" where appropriate rather than leaving blank</li>
              <li><strong>Legibility:</strong> Write clearly or use digital formats for important documentation</li>
              <li><strong>Specificity:</strong> Avoid vague terms like "various circuits" - list each one</li>
              <li><strong>Consistency:</strong> Use standardized terminology throughout documentation</li>
              <li><strong>Verification:</strong> Double-check all entries before submission</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h4 className="text-xl font-semibold mb-4">Client-Facing Documentation</h4>
          <p className="mb-4">
            Creating professional documentation for clients enhances your professional image:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-[#22251e] p-6 rounded-lg">
              <h5 className="text-lg font-semibold mb-3">Professional Quotation Elements</h5>
              <ul className="list-disc pl-6 space-y-2">
                <li>Detailed breakdown of materials</li>
                <li>Labor costs with time estimates</li>
                <li>Clear payment terms and methods</li>
                <li>Validity period for the quote</li>
                <li>Terms and conditions in plain language</li>
                <li>Your qualifications and insurance details</li>
              </ul>
            </div>
            <div className="bg-[#22251e] p-6 rounded-lg">
              <h5 className="text-lg font-semibold mb-3">Effective Email Communication</h5>
              <ul className="list-disc pl-6 space-y-2">
                <li>Descriptive subject lines</li>
                <li>Formal greeting and professional close</li>
                <li>Short, focused paragraphs</li>
                <li>Bulleted lists for key points</li>
                <li>Proofreading before sending</li>
                <li>Professional signature with contact details</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-4">Digital Communication Tools</h4>
          <p className="mb-4">
            Modern electricians use various digital tools to enhance written communication:
          </p>
          
          <div className="bg-[#22251e] p-6 rounded-lg mb-4">
            <h5 className="text-lg font-semibold mb-3">Digital Documentation Advantages</h5>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Job Management Software:</strong> Creates professional documentation with consistent branding</li>
              <li><strong>Digital Forms:</strong> Ensures all required fields are completed</li>
              <li><strong>Mobile Applications:</strong> Allows on-site documentation with photo evidence</li>
              <li><strong>Cloud Storage:</strong> Provides secure backup and easy retrieval of documentation</li>
              <li><strong>Electronic Signatures:</strong> Streamlines approval processes</li>
              <li><strong>Template Systems:</strong> Maintains consistency across all client communications</li>
            </ul>
          </div>
          
          <p>
            Embracing these digital tools not only improves your efficiency but also projects a 
            modern, professional image to clients and colleagues.
          </p>
        </section>
      </>
    )
  }
};

export default sections210;
