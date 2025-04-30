
import React from 'react';
import LessonContent from "@/components/units/LessonContent";

export interface ProfessionalConductSection {
  id: string;
  title: string;
  description: string;
  content: React.ReactNode;
  quiz?: {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }[];
}

// Main content for each section
export const professionalConductSections: ProfessionalConductSection[] = [
  // Section 1.1
  {
    id: "1.1",
    title: "Punctuality and Attendance",
    description: "Standards for time management and reliability in the workplace",
    content: (
      <>
        <LessonContent title="Punctuality and Attendance">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFC900]">The Importance of Time Management</h3>
            <p className="text-[#FFC900]/80">
              Consistently arriving on time for work, meetings, and appointments is a fundamental expectation in the electrical industry. 
              Employers and clients rely on technicians to adhere to schedules, especially when critical maintenance or installation work is planned.
            </p>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Attendance Standards for Electrical Professionals</h3>
            <p className="text-[#FFC900]/80">
              The electrical industry often operates on tight schedules with interdependent tasks. Your absence can delay entire projects 
              and cost significant amounts in lost time and resources. Professional electricians maintain excellent attendance records and 
              follow proper notification procedures when absence is unavoidable.
            </p>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Best Practices for Punctuality</h3>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Plan to arrive at least 10-15 minutes before your scheduled start time</li>
              <li>Account for traffic, parking, and site access in your travel planning</li>
              <li>Prepare equipment, tools, and documents the day before when possible</li>
              <li>Use calendar reminders and alarms to stay on schedule</li>
              <li>Communicate proactively if delays are unavoidable</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Notification Procedures</h3>
            <p className="text-[#FFC900]/80">
              In cases where absence or tardiness is unavoidable:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Notify your supervisor as early as possible (ideally at least 1 hour before start time)</li>
              <li>Provide a clear reason and expected duration of absence</li>
              <li>Discuss pending work that may be affected</li>
              <li>Follow up with required documentation (e.g., medical certificates) as per company policy</li>
              <li>Upon return, check in with supervisors to catch up on missed information</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Impact of Poor Attendance</h3>
            <p className="text-[#FFC900]/80">
              Unreliable attendance and punctuality can lead to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Safety risks when handovers are rushed or incomplete</li>
              <li>Project delays and cost overruns</li>
              <li>Damaged professional reputation</li>
              <li>Reduced team morale</li>
              <li>Limited career advancement opportunities</li>
              <li>Disciplinary action or termination</li>
            </ul>
          </div>
        </LessonContent>
      </>
    ),
    quiz: [
      {
        question: "Why is punctuality especially important in the electrical industry?",
        options: [
          "It's only important for management roles",
          "Because projects often have interdependent tasks that rely on precise scheduling",
          "It's less important than in other industries",
          "Only when working with residential clients"
        ],
        correctAnswer: "Because projects often have interdependent tasks that rely on precise scheduling",
        explanation: "Electrical work typically involves multiple interdependent tasks and teams. Delays caused by tardiness can cascade throughout a project, causing significant disruptions to schedules and potentially creating safety hazards."
      },
      {
        question: "What is the recommended arrival time before your scheduled shift?",
        options: [
          "Exactly on time",
          "5 minutes before",
          "10-15 minutes before",
          "1 hour before"
        ],
        correctAnswer: "10-15 minutes before",
        explanation: "Arriving 10-15 minutes early allows time to prepare for your shift, review any updates, and be fully ready to begin work at the scheduled start time."
      }
    ]
  },
  
  // Section 1.2
  {
    id: "1.2",
    title: "Professional Appearance",
    description: "Guidelines for appropriate presentation and workwear",
    content: (
      <>
        <LessonContent title="Professional Appearance">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFC900]">The Importance of Professional Appearance</h3>
            <p className="text-[#FFC900]/80">
              As a representative of your company and the electrical profession, your appearance makes an impression on clients and colleagues. 
              Clean, appropriate workwear and proper personal grooming demonstrate professionalism and respect for the workplace and clients.
            </p>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Work Attire Guidelines</h3>
            <p className="text-[#FFC900]/80">
              Your work attire should be selected based on the job site requirements, safety standards, and company policies. Consider the following guidelines:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Always wear clean, well-maintained company uniforms when provided</li>
              <li>Choose appropriate work trousers or coveralls that allow movement but aren't excessively loose</li>
              <li>Wear properly fitting, closed-toe safety footwear that meets required standards</li>
              <li>Remove or secure jewelry and loose accessories that could pose safety hazards</li>
              <li>Keep hair tied back and secured if longer than shoulder length</li>
              <li>Wear company identification badges or credentials visibly when required</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Personal Protective Equipment (PPE)</h3>
            <p className="text-[#FFC900]/80">
              PPE is an essential part of your professional appearance on job sites:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Wear all required PPE without exception (hard hat, safety glasses, gloves, etc.)</li>
              <li>Maintain PPE in clean, serviceable condition</li>
              <li>Replace damaged or worn PPE immediately</li>
              <li>Store PPE properly when not in use</li>
              <li>Personalize PPE only in approved ways that don't compromise its effectiveness</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Personal Grooming Standards</h3>
            <p className="text-[#FFC900]/80">
              Maintaining good personal hygiene is essential in a professional environment:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Maintain proper personal hygiene with regular bathing/showering</li>
              <li>Use deodorant, especially for physical work environments</li>
              <li>Keep facial hair neat and trimmed</li>
              <li>Avoid strong perfumes or colognes that may cause discomfort to others</li>
              <li>Keep nails trimmed and clean (long nails can interfere with precise work and tool handling)</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Client-Facing Considerations</h3>
            <p className="text-[#FFC900]/80">
              When interacting with clients directly, additional considerations apply:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Carry a clean shirt or coverall to change into if your primary workwear becomes excessively soiled</li>
              <li>Be prepared to remove work boots or wear boot covers when entering clean or residential environments</li>
              <li>Ensure company branding on uniforms is clearly visible and presentable</li>
              <li>Consider carrying business cards or contact information for professional follow-up</li>
            </ul>
          </div>
        </LessonContent>
      </>
    ),
    quiz: [
      {
        question: "Why is professional appearance important for electrical technicians?",
        options: [
          "It's only important for customer-facing roles",
          "It affects job performance directly",
          "It demonstrates professionalism and respect for clients and the workplace",
          "It's only required during formal company events"
        ],
        correctAnswer: "It demonstrates professionalism and respect for clients and the workplace",
        explanation: "Your appearance represents both you and your company, making an impression on clients and colleagues. Professional appearance shows respect and builds trust with clients and colleagues."
      },
      {
        question: "What should you do with jewelry while working as an electrical technician?",
        options: [
          "Only wear small pieces",
          "Cover it with PPE",
          "Remove or secure it to prevent safety hazards",
          "Jewelry rules only apply in industrial settings"
        ],
        correctAnswer: "Remove or secure it to prevent safety hazards",
        explanation: "Jewelry can pose significant safety hazards in electrical work, including conducting electricity, getting caught in machinery, or interfering with PPE. It should be removed or securely fastened."
      }
    ]
  },
  
  // Section 1.3
  {
    id: "1.3",
    title: "Communication Etiquette",
    description: "Best practices for clear and respectful workplace communication",
    content: (
      <>
        <LessonContent title="Communication Etiquette">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFC900]">Effective Workplace Communication</h3>
            <p className="text-[#FFC900]/80">
              Clear, respectful communication is essential when working with colleagues, clients, and stakeholders. 
              Effective communication prevents misunderstandings, ensures work meets expectations, and promotes a 
              positive professional environment. Electrical technicians must communicate technical information clearly 
              to both technical and non-technical audiences.
            </p>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Verbal Communication Skills</h3>
            <p className="text-[#FFC900]/80">
              Developing strong verbal communication skills is essential for electrical professionals:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Use appropriate technical terminology when speaking with colleagues</li>
              <li>Explain technical concepts in simpler terms for non-technical clients</li>
              <li>Speak clearly and at an appropriate volume</li>
              <li>Listen actively without interrupting</li>
              <li>Ask clarifying questions to ensure understanding</li>
              <li>Confirm understanding by summarizing instructions or agreements</li>
              <li>Use a professional tone and appropriate language at all times</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Written Communication Best Practices</h3>
            <p className="text-[#FFC900]/80">
              Electrical technicians often need to document work, create reports, and communicate via email or messaging platforms:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Write clearly and concisely, focusing on key information</li>
              <li>Use proper grammar, spelling, and punctuation in all professional communications</li>
              <li>Structure written communications logically with clear sections or bullet points</li>
              <li>Include all necessary details in technical documentation</li>
              <li>Maintain appropriate formality in emails and written correspondence</li>
              <li>Proofread all written communications before sending</li>
              <li>Keep copies of important written communications for future reference</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Digital Communication Guidelines</h3>
            <p className="text-[#FFC900]/80">
              Modern workplaces rely on various digital communication tools:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Respond to emails, messages, and calls in a timely manner (typically within 24 hours for non-urgent matters)</li>
              <li>Use appropriate subject lines for emails</li>
              <li>Be concise in digital communications, especially when using messaging platforms</li>
              <li>Consider whether email, phone, or in-person communication is most appropriate for each situation</li>
              <li>Use professional language even in casual platforms like messaging apps</li>
              <li>Follow company policies regarding the use of personal devices for work communication</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Handling Difficult Conversations</h3>
            <p className="text-[#FFC900]/80">
              Electrical technicians occasionally need to deliver challenging information or handle conflicts:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Address issues directly but tactfully</li>
              <li>Focus on facts rather than emotions</li>
              <li>Use "I" statements rather than accusatory "you" statements</li>
              <li>Suggest solutions when identifying problems</li>
              <li>Know when to escalate issues to supervisors</li>
              <li>Remain calm and professional even in stressful situations</li>
              <li>Follow up difficult conversations in writing when appropriate</li>
            </ul>
          </div>
        </LessonContent>
      </>
    ),
    quiz: [
      {
        question: "When explaining technical concepts to non-technical clients, what approach should you take?",
        options: [
          "Use as much technical jargon as possible to demonstrate expertise",
          "Simplify terminology while still accurately explaining the concept",
          "Avoid explanations entirely and just do the work",
          "Tell them it's too complicated for them to understand"
        ],
        correctAnswer: "Simplify terminology while still accurately explaining the concept",
        explanation: "When communicating with non-technical clients, it's important to translate complex technical concepts into simpler language without sacrificing accuracy. This builds client trust and ensures they can make informed decisions."
      },
      {
        question: "What is active listening in workplace communication?",
        options: [
          "Interrupting to correct others' mistakes",
          "Focusing entirely on formulating your response while others speak",
          "Giving full attention, avoiding interruptions, and confirming understanding",
          "Recording all conversations for future reference"
        ],
        correctAnswer: "Giving full attention, avoiding interruptions, and confirming understanding",
        explanation: "Active listening involves giving your complete attention to the speaker, avoiding interruptions, asking clarifying questions, and confirming understanding by summarizing or paraphrasing what was said."
      }
    ]
  },
  
  // Section 2.1
  {
    id: "2.1",
    title: "Honesty and Transparency",
    description: "Maintaining truthfulness in all professional activities",
    content: (
      <>
        <LessonContent title="Honesty and Transparency">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFC900]">The Foundation of Professional Trust</h3>
            <p className="text-[#FFC900]/80">
              Honesty and transparency form the foundation of professional relationships in the electrical industry. 
              Maintaining integrity in all aspects of your work builds trust with employers, colleagues, and clients. 
              This includes being truthful about your qualifications, experience, and the status of work.
            </p>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Accurate Reporting Practices</h3>
            <p className="text-[#FFC900]/80">
              Electrical professionals must maintain accurate records of their work:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Record actual time spent on tasks and projects truthfully</li>
              <li>Document all materials used accurately</li>
              <li>Never falsify test results or certification records</li>
              <li>Report all defects or issues found during inspections</li>
              <li>Maintain detailed records of work performed</li>
              <li>Be honest about project progress and timelines</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Ethical Quoting and Billing</h3>
            <p className="text-[#FFC900]/80">
              Honesty in financial matters is crucial for maintaining professional integrity:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Provide realistic cost estimates based on accurate assessments</li>
              <li>Clearly explain potential additional costs or contingencies</li>
              <li>Avoid deliberate underquoting to win contracts</li>
              <li>Charge only for work actually performed and materials actually used</li>
              <li>Maintain transparent billing practices with itemized invoices</li>
              <li>Be upfront about markup on materials or subcontracted work</li>
              <li>Return unused materials to inventory or credit customers as appropriate</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Handling Mistakes</h3>
            <p className="text-[#FFC900]/80">
              Everyone makes mistakes; handling them ethically is what matters:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Acknowledge errors promptly when they occur</li>
              <li>Take responsibility rather than shifting blame</li>
              <li>Communicate the issue to supervisors or clients as appropriate</li>
              <li>Focus on solutions rather than excuses</li>
              <li>Learn from mistakes to prevent recurrence</li>
              <li>Document corrective actions taken</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Transparency About Capabilities</h3>
            <p className="text-[#FFC900]/80">
              Being honest about your skills and knowledge protects both you and others:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Accurately represent your qualifications, certifications, and experience</li>
              <li>Be honest about your ability to complete specific tasks</li>
              <li>Ask for help or guidance when needed</li>
              <li>Don't attempt work beyond your competence level</li>
              <li>Communicate clearly about training needs</li>
              <li>Stay current with required certifications and qualifications</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Consequences of Dishonesty</h3>
            <p className="text-[#FFC900]/80">
              Dishonesty in electrical work can have serious repercussions:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Safety risks to yourself, colleagues, and the public</li>
              <li>Legal liability and potential criminal charges</li>
              <li>Loss of professional certifications or licenses</li>
              <li>Damage to professional reputation</li>
              <li>Termination of employment</li>
              <li>Damage to company reputation and potential financial losses</li>
            </ul>
          </div>
        </LessonContent>
      </>
    ),
    quiz: [
      {
        question: "Why is accurate reporting of materials used important in electrical work?",
        options: [
          "It only affects company profits",
          "It ensures proper billing and maintains safety and compliance records",
          "It's only important for government contracts",
          "It's mainly for tax purposes"
        ],
        correctAnswer: "It ensures proper billing and maintains safety and compliance records",
        explanation: "Accurate material reporting ensures clients are billed correctly, but also creates a reliable record of what was installed for future maintenance, warranty, and safety purposes. This documentation can be critical in the event of inspections or investigations."
      },
      {
        question: "What should you do if you make an error during an electrical installation?",
        options: [
          "Try to hide it if it's minor",
          "Promptly acknowledge the error and take responsibility",
          "Blame it on faulty materials",
          "Only report it if someone notices"
        ],
        correctAnswer: "Promptly acknowledge the error and take responsibility",
        explanation: "Acknowledging errors promptly demonstrates integrity and professionalism. It also ensures that the error can be addressed before it creates safety hazards or more significant problems. Taking responsibility builds trust with employers and clients."
      }
    ]
  },
  
  // Section 2.2
  {
    id: "2.2",
    title: "Confidentiality",
    description: "Respecting and protecting sensitive information",
    content: (
      <>
        <LessonContent title="Confidentiality">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFC900]">The Importance of Confidentiality</h3>
            <p className="text-[#FFC900]/80">
              Respecting confidentiality is crucial when working in various environments, from private homes to 
              commercial or industrial settings. Electrical technicians often have access to sensitive information, 
              secure areas, and confidential business operations. Maintaining proper information security is both 
              a professional obligation and often a legal requirement.
            </p>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Types of Sensitive Information</h3>
            <p className="text-[#FFC900]/80">
              As an electrical professional, you may encounter various types of confidential information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Client personal data (names, addresses, contact details)</li>
              <li>Payment information and financial records</li>
              <li>Business operational details</li>
              <li>Security system layouts and access codes</li>
              <li>Building schematics and infrastructure details</li>
              <li>Proprietary manufacturing processes</li>
              <li>IT network infrastructure information</li>
              <li>Building security vulnerabilities</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Legal Frameworks</h3>
            <p className="text-[#FFC900]/80">
              Various laws and regulations govern data protection and confidentiality:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>General Data Protection Regulation (GDPR)</li>
              <li>Data Protection Act</li>
              <li>Industry-specific regulations (e.g., healthcare, financial)</li>
              <li>Non-disclosure agreements (NDAs)</li>
              <li>Employment contracts with confidentiality clauses</li>
            </ul>
            <p className="text-[#FFC900]/80 mt-2">
              Violations of these frameworks can result in severe penalties, including fines and legal action.
            </p>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Practical Confidentiality Measures</h3>
            <p className="text-[#FFC900]/80">
              Implementing these practices helps maintain confidentiality in your daily work:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Never discuss client details or work specifics in public places</li>
              <li>Avoid taking unnecessary photos at client sites</li>
              <li>Request permission before taking any site photographs</li>
              <li>Secure physical documents in locked storage</li>
              <li>Password-protect electronic devices that contain work information</li>
              <li>Use secure methods when transmitting sensitive information</li>
              <li>Properly dispose of documents containing sensitive information</li>
              <li>Report any potential data breaches immediately</li>
              <li>Be cautious about information shared on social media</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Access Control and Security</h3>
            <p className="text-[#FFC900]/80">
              Handling access credentials requires special attention:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Safeguard all access codes, keys, and credentials provided for work purposes</li>
              <li>Never share access credentials with unauthorized individuals</li>
              <li>Return all access materials upon completion of work</li>
              <li>Report any lost or compromised access credentials immediately</li>
              <li>Follow proper sign-in and escort protocols at secure facilities</li>
              <li>Respect access restrictions and "off-limits" areas</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Social Media and Online Activities</h3>
            <p className="text-[#FFC900]/80">
              Be mindful of your online presence in relation to your professional work:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Never post photos from client sites without explicit permission</li>
              <li>Avoid identifying clients by name or specific location</li>
              <li>Do not share details of security systems or layouts</li>
              <li>Consider how posts about work might impact client confidentiality</li>
              <li>Follow company social media policies</li>
            </ul>
          </div>
        </LessonContent>
      </>
    ),
    quiz: [
      {
        question: "What should you do before taking photos at a client site?",
        options: [
          "Take photos discreetly without mentioning it",
          "Only take photos of your own work, not the site",
          "Obtain explicit permission from the client first",
          "It's fine to take photos as long as you don't share them"
        ],
        correctAnswer: "Obtain explicit permission from the client first",
        explanation: "Always get explicit permission before taking any photos at a client site. Photos might inadvertently capture confidential information, security features, or proprietary processes. Some sites may have strict no-photography policies for security reasons."
      },
      {
        question: "Which of the following is not an appropriate way to handle documents containing sensitive client information?",
        options: [
          "Storing them in a locked cabinet when not in use",
          "Shredding them when they're no longer needed",
          "Recycling them in a regular paper bin when finished",
          "Converting them to password-protected digital files"
        ],
        correctAnswer: "Recycling them in a regular paper bin when finished",
        explanation: "Documents containing sensitive information should never be disposed of in regular waste or recycling bins. Such documents should be shredded or otherwise securely destroyed to prevent unauthorized access to confidential information."
      }
    ]
  },
  
  // Section 2.3
  {
    id: "2.3",
    title: "Professional Boundaries",
    description: "Maintaining appropriate relationships with colleagues and clients",
    content: (
      <>
        <LessonContent title="Professional Boundaries">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFC900]">Understanding Professional Boundaries</h3>
            <p className="text-[#FFC900]/80">
              Maintaining appropriate professional relationships with colleagues, clients, and suppliers ensures a respectful 
              work environment and prevents conflicts of interest. Professional boundaries establish clear expectations for 
              behavior and help preserve the integrity of business relationships.
            </p>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Client Relationship Boundaries</h3>
            <p className="text-[#FFC900]/80">
              Electrical technicians often work in people's homes and businesses, requiring careful attention to boundaries:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Maintain a friendly but professional demeanor</li>
              <li>Focus conversations on the work and related professional topics</li>
              <li>Avoid oversharing personal information</li>
              <li>Respect client privacy and personal space</li>
              <li>Do not accept inappropriate gifts or favors</li>
              <li>Direct clients to company channels for complaints or additional work requests</li>
              <li>Avoid developing personal relationships with clients outside of the professional context</li>
              <li>Follow company policies regarding social media connections with clients</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Workplace Relationship Boundaries</h3>
            <p className="text-[#FFC900]/80">
              Appropriate boundaries with colleagues and supervisors contribute to a healthy work environment:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Maintain respectful communication regardless of personal feelings</li>
              <li>Address conflicts through appropriate channels</li>
              <li>Respect others' work schedules and responsibilities</li>
              <li>Avoid excessive personal conversations during work hours</li>
              <li>Understand and respect reporting structures</li>
              <li>Be mindful of power dynamics in workplace relationships</li>
              <li>Follow company policies regarding workplace relationships</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Physical Boundaries</h3>
            <p className="text-[#FFC900]/80">
              Respecting physical space and property is essential:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Ask permission before entering private areas of a client's property</li>
              <li>Use designated areas for breaks and meals</li>
              <li>Do not use client facilities (e.g., bathrooms, kitchen) without permission</li>
              <li>Keep work areas clean and organized</li>
              <li>Avoid touching personal belongings in homes or offices</li>
              <li>Respect colleagues' personal space and work areas</li>
              <li>Follow site-specific protocols for accessing restricted areas</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Conflicts of Interest</h3>
            <p className="text-[#FFC900]/80">
              Avoiding conflicts of interest protects professional integrity:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Disclose any personal connections to clients or suppliers</li>
              <li>Avoid accepting work directly from clients outside company channels</li>
              <li>Do not recommend services or products based on personal gain</li>
              <li>Report potential conflicts to supervisors</li>
              <li>Maintain transparency in decision-making processes</li>
              <li>Follow company policies regarding secondary employment</li>
              <li>Avoid using company resources for personal projects</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Gifts and Hospitality</h3>
            <p className="text-[#FFC900]/80">
              Handle offers of gifts or hospitality appropriately:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Understand company policies regarding acceptable gifts</li>
              <li>Politely decline gifts that exceed policy limits or seem inappropriate</li>
              <li>Report significant gifts to supervisors</li>
              <li>Consider cultural contexts when dealing with gift-giving traditions</li>
              <li>Never accept gifts that could influence business decisions</li>
              <li>Document any accepted gifts according to company policy</li>
            </ul>
          </div>
        </LessonContent>
      </>
    ),
    quiz: [
      {
        question: "What should you do if a client offers you a significant personal gift?",
        options: [
          "Accept it to maintain good client relations",
          "Accept it but don't tell anyone",
          "Politely decline and explain company policy",
          "Suggest they give it to your supervisor instead"
        ],
        correctAnswer: "Politely decline and explain company policy",
        explanation: "Accepting significant gifts can create conflicts of interest or the appearance of impropriety. The appropriate response is to politely decline, explaining that company policy restricts accepting gifts beyond a certain value. This maintains professional boundaries without offending the client."
      },
      {
        question: "A client asks you to do a small electrical job 'on the side' for cash. What is the appropriate response?",
        options: [
          "Accept if the job is small enough",
          "Decline and explain they should book through proper company channels",
          "Accept but charge them your company's standard rate",
          "Accept but inform your supervisor afterward"
        ],
        correctAnswer: "Decline and explain they should book through proper company channels",
        explanation: "Accepting side work from clients creates serious conflicts of interest, may violate employment contracts, could affect insurance coverage, and potentially breaks tax laws. Always direct clients to book services through proper company channels."
      }
    ]
  },
  
  // Section 3.1
  {
    id: "3.1",
    title: "Taking Ownership of Work",
    description: "Accepting responsibility for actions and outcomes",
    content: (
      <>
        <LessonContent title="Taking Ownership of Work">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFC900]">The Principle of Ownership</h3>
            <p className="text-[#FFC900]/80">
              Taking ownership means accepting full responsibility for your work, including its outcomes, quality, 
              and any issues that arise. This attitude distinguishes exceptional professionals from average workers 
              and builds trust with employers, colleagues, and clients.
            </p>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Characteristics of Professional Ownership</h3>
            <p className="text-[#FFC900]/80">
              Demonstrating ownership in electrical work involves:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Viewing assigned tasks as personal responsibilities rather than obligations</li>
              <li>Taking pride in the quality of your workmanship</li>
              <li>Being proactive in identifying and addressing potential issues</li>
              <li>Following through on commitments without constant supervision</li>
              <li>Acknowledging mistakes and taking initiative to correct them</li>
              <li>Looking beyond immediate tasks to consider the overall project objectives</li>
              <li>Seeking feedback and continuously improving your work</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Personal Accountability</h3>
            <p className="text-[#FFC900]/80">
              Personal accountability is central to professionalism in electrical work:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Always perform work to appropriate standards and regulations</li>
              <li>Never take shortcuts that compromise safety or quality</li>
              <li>Check your own work before presenting it as complete</li>
              <li>Accept responsibility for outcomes rather than making excuses</li>
              <li>Learn from mistakes instead of repeating them</li>
              <li>Be willing to acknowledge when you need help or guidance</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Self-Management Practices</h3>
            <p className="text-[#FFC900]/80">
              Taking ownership involves effectively managing your work process:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Maintain organized work areas and vehicles</li>
              <li>Plan your work approach before beginning tasks</li>
              <li>Manage your time efficiently to meet deadlines</li>
              <li>Anticipate material and tool needs in advance</li>
              <li>Document your work thoroughly</li>
              <li>Follow up on unresolved issues</li>
              <li>Proactively communicate progress and challenges</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Problem-Solving Mindset</h3>
            <p className="text-[#FFC900]/80">
              Ownership includes approaching problems constructively:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>View challenges as opportunities to demonstrate skill</li>
              <li>Focus on finding solutions rather than assigning blame</li>
              <li>Consider multiple approaches before selecting the best option</li>
              <li>Seek input from colleagues when appropriate</li>
              <li>Be resourceful with available tools and materials</li>
              <li>Document problems encountered and solutions implemented</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Long-Term Perspective</h3>
            <p className="text-[#FFC900]/80">
              Taking true ownership means considering future implications:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Install and repair with future maintenance in mind</li>
              <li>Consider how your work affects other trades and systems</li>
              <li>Document clearly for future reference</li>
              <li>Think about the longevity and sustainability of solutions</li>
              <li>Consider the client's long-term needs, not just immediate requirements</li>
            </ul>
          </div>
        </LessonContent>
      </>
    ),
    quiz: [
      {
        question: "What does 'taking ownership' of your work mean in the electrical profession?",
        options: [
          "Claiming legal ownership of installations you complete",
          "Only taking responsibility for successful outcomes",
          "Accepting full responsibility for your work quality, outcomes, and any issues that arise",
          "Taking credit for team accomplishments"
        ],
        correctAnswer: "Accepting full responsibility for your work quality, outcomes, and any issues that arise",
        explanation: "Taking ownership means accepting complete responsibility for all aspects of your work - including its quality, outcomes, and addressing any problems that occur. This professional attitude demonstrates integrity and builds trust with clients and colleagues."
      },
      {
        question: "Which of the following best demonstrates taking ownership in electrical work?",
        options: [
          "Waiting for supervisors to identify and solve problems",
          "Following instructions exactly without suggesting improvements",
          "Proactively identifying potential issues and addressing them before they become problems",
          "Completing tasks quickly, even if quality is compromised"
        ],
        correctAnswer: "Proactively identifying potential issues and addressing them before they become problems",
        explanation: "Proactively identifying and addressing potential issues demonstrates true ownership. It shows you're thinking beyond just completing tasks and are invested in ensuring the overall success and quality of the work."
      }
    ]
  },
  
  // Continue with the rest of the sections...
  // Section 3.2, 3.3, etc.
  
  // Section 3.2
  {
    id: "3.2",
    title: "Meeting Deadlines",
    description: "Time management and delivering on commitments",
    content: (
      <>
        <LessonContent title="Meeting Deadlines">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFC900]">The Importance of Deadline Adherence</h3>
            <p className="text-[#FFC900]/80">
              In the electrical industry, meeting deadlines is not just about satisfying clients; it's about maintaining project 
              flow, ensuring other trades can complete their work on schedule, and avoiding costly delays. Reliability in meeting 
              time commitments is a hallmark of professionalism that significantly impacts reputation and career advancement.
            </p>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Effective Planning Techniques</h3>
            <p className="text-[#FFC900]/80">
              Successful deadline management begins with proper planning:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Break larger tasks into manageable segments with mini-deadlines</li>
              <li>Create detailed task lists with priority indicators</li>
              <li>Use backward planning - start with the deadline and work backwards</li>
              <li>Include buffer time for unexpected challenges</li>
              <li>Identify task dependencies that might affect scheduling</li>
              <li>Consider resource availability when planning timelines</li>
              <li>Use digital or physical planning tools to track progress</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Managing Project Timelines</h3>
            <p className="text-[#FFC900]/80">
              Strategies for maintaining project momentum:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Begin tasks promptly rather than procrastinating</li>
              <li>Track progress regularly against established timelines</li>
              <li>Prioritize tasks based on urgency and importance</li>
              <li>Recognize and eliminate time-wasting activities</li>
              <li>Focus on one task at a time whenever possible</li>
              <li>Delegate appropriately when working in teams</li>
              <li>Establish clear start and end times for workday activities</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Setting Realistic Time Estimates</h3>
            <p className="text-[#FFC900]/80">
              Creating achievable timelines is essential for consistent deadline management:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Consider your experience with similar tasks when estimating time requirements</li>
              <li>Account for site-specific challenges and accessibility</li>
              <li>Factor in material and equipment availability</li>
              <li>Allow extra time for complex or unfamiliar tasks</li>
              <li>Consider weather impacts for outdoor work</li>
              <li>Anticipate potential approval or inspection delays</li>
              <li>Review and adjust estimates based on past project experiences</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Communication About Timelines</h3>
            <p className="text-[#FFC900]/80">
              Transparent communication regarding deadlines builds trust:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Establish clear expectations about completion times from the outset</li>
              <li>Provide regular progress updates to stakeholders</li>
              <li>Flag potential delays as soon as they're identified</li>
              <li>Renegotiate deadlines when circumstances make them unachievable</li>
              <li>Document time-related discussions and agreements</li>
              <li>Be honest about timeline challenges rather than making unrealistic promises</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Handling Deadline Pressure</h3>
            <p className="text-[#FFC900]/80">
              Managing stress while maintaining quality and safety:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Never compromise safety standards to meet deadlines</li>
              <li>Identify which quality aspects cannot be compromised</li>
              <li>Request additional resources when necessary</li>
              <li>Break overwhelming tasks into smaller, manageable components</li>
              <li>Focus on solutions rather than dwelling on time pressure</li>
              <li>Maintain clear communication with supervisors about capacity limitations</li>
              <li>Practice stress management techniques to maintain focus and effectiveness</li>
            </ul>
          </div>
        </LessonContent>
      </>
    ),
    quiz: [
      {
        question: "What should you do when you realize you won't be able to meet an established deadline?",
        options: [
          "Work longer hours, even if it compromises safety",
          "Say nothing and hope no one notices",
          "Communicate the issue promptly and propose a revised timeline",
          "Blame external factors for the delay"
        ],
        correctAnswer: "Communicate the issue promptly and propose a revised timeline",
        explanation: "When it becomes clear that a deadline cannot be met, the professional approach is to communicate this as early as possible, explain the reasons honestly, and propose a realistic alternative timeline. This allows for adjustments to the project schedule and maintains trust."
      },
      {
        question: "Which of the following is the best practice for setting time estimates on electrical projects?",
        options: [
          "Always provide the shortest possible timeframe to win contracts",
          "Consider similar past projects and add buffer time for unexpected challenges",
          "Only account for the actual installation time without considering preparation",
          "Let clients set all deadlines based on their preferences"
        ],
        correctAnswer: "Consider similar past projects and add buffer time for unexpected challenges",
        explanation: "Effective time estimation involves analyzing similar past work, understanding the specific requirements of the current project, and adding appropriate buffer time for unexpected challenges. This results in realistic timelines that can be consistently met."
      }
    ]
  },
  
  // Section 3.3
  {
    id: "3.3",
    title: "Quality Assurance",
    description: "Maintaining high standards in all work activities",
    content: (
      <>
        <LessonContent title="Quality Assurance">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFC900]">The Significance of Quality in Electrical Work</h3>
            <p className="text-[#FFC900]/80">
              Quality in electrical installations and maintenance isn't just about aesthetics; it directly impacts safety, 
              reliability, efficiency, and longevity. High-quality electrical work reduces the risk of failures, electrical 
              fires, and system downtime while ensuring compliance with regulations and standards.
            </p>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Personal Quality Standards</h3>
            <p className="text-[#FFC900]/80">
              Maintaining high personal standards is fundamental to quality assurance:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Take pride in craftsmanship and attention to detail</li>
              <li>Never settle for "good enough" when excellence is achievable</li>
              <li>Develop consistent work habits that promote quality</li>
              <li>View each task as representing your professional reputation</li>
              <li>Continuously evaluate and improve your techniques</li>
              <li>Maintain a personal standard that exceeds minimum requirements</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Technical Quality Assurance</h3>
            <p className="text-[#FFC900]/80">
              Technical excellence forms the foundation of quality electrical work:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Follow current regulations and standards meticulously</li>
              <li>Use appropriate materials and components for each application</li>
              <li>Ensure proper sizing of conductors, protection devices, and equipment</li>
              <li>Make secure, proper connections in all terminations</li>
              <li>Label circuits, equipment, and cables clearly</li>
              <li>Verify voltage levels and polarity during installation</li>
              <li>Test installations thoroughly before energizing</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Visual and Aesthetic Quality</h3>
            <p className="text-[#FFC900]/80">
              The appearance of electrical installations reflects professionalism:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Run cables and conduits straight, level, and parallel</li>
              <li>Maintain consistent spacing and alignment of components</li>
              <li>Ensure neat cable management within panels and enclosures</li>
              <li>Remove wire clippings, packaging, and debris from work areas</li>
              <li>Make clean, professional-looking penetrations through surfaces</li>
              <li>Position visible components symmetrically and evenly</li>
              <li>Leave paintwork and finishes undamaged or properly repaired</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Quality Control Procedures</h3>
            <p className="text-[#FFC900]/80">
              Implementing quality control measures ensures consistent results:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Develop personal checklists for common tasks</li>
              <li>Perform self-inspections before formal checks</li>
              <li>Test connections before sealing or covering</li>
              <li>Use appropriate testing instruments to verify work</li>
              <li>Document test results thoroughly</li>
              <li>Request peer reviews for complex installations</li>
              <li>Compare completed work against specifications and standards</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Documentation Quality</h3>
            <p className="text-[#FFC900]/80">
              Complete, accurate documentation supports quality installations:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Maintain detailed records of installations and modifications</li>
              <li>Create accurate as-built drawings when changes are made</li>
              <li>Document test results and verification procedures</li>
              <li>Provide clear handover information for clients</li>
              <li>Keep organized records of certificates and compliance documents</li>
              <li>Ensure operating instructions are available for complex systems</li>
            </ul>
          </div>
        </LessonContent>
      </>
    ),
    quiz: [
      {
        question: "Why is the visual appearance of electrical installations important?",
        options: [
          "It only matters for aesthetic reasons",
          "It's mainly important for marketing photos",
          "It reflects professionalism and often indicates attention to technical details",
          "It's only relevant in residential installations"
        ],
        correctAnswer: "It reflects professionalism and often indicates attention to technical details",
        explanation: "The visual quality of electrical installations often correlates with technical excellence. Neat, well-organized installations reflect a technician's attention to detail, care in workmanship, and professional pride. They're also easier to service and troubleshoot in the future."
      },
      {
        question: "What should you do before declaring an installation complete?",
        options: [
          "Just ensure it works properly",
          "Perform thorough testing and self-inspection against standards and specifications",
          "Have the client check it visually",
          "Get another electrician to sign off on it"
        ],
        correctAnswer: "Perform thorough testing and self-inspection against standards and specifications",
        explanation: "Quality assurance requires comprehensive testing and self-inspection against applicable standards before considering work complete. This should include visual inspection, functional testing, and verification of compliance with specifications and regulations."
      }
    ]
  },
  
  // Section 4.1
  {
    id: "4.1",
    title: "Continuous Learning",
    description: "Staying current with industry knowledge and skills",
    content: (
      <>
        <LessonContent title="Continuous Learning">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFC900]">The Learning Imperative in Electrical Work</h3>
            <p className="text-[#FFC900]/80">
              The electrical industry undergoes constant evolution due to technological advancements, changing regulations, 
              new materials, and evolving best practices. Professionals who commit to continuous learning remain relevant, 
              effective, and valuable in this dynamic field, while those who rely solely on past knowledge risk becoming obsolete.
            </p>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Regulatory and Standard Updates</h3>
            <p className="text-[#FFC900]/80">
              Staying current with changing regulations is a fundamental professional responsibility:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Track updates to the Wiring Regulations (BS 7671)</li>
              <li>Follow changes to Building Regulations that affect electrical installations</li>
              <li>Stay informed about industry-specific standards relevant to your work</li>
              <li>Understand how regulatory changes impact existing installations</li>
              <li>Participate in update training when major standard revisions are released</li>
              <li>Subscribe to industry publications that summarize regulatory developments</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Technology and Product Knowledge</h3>
            <p className="text-[#FFC900]/80">
              Keeping pace with technological developments enhances capability:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Research new equipment and materials regularly</li>
              <li>Attend manufacturer training and product demonstrations</li>
              <li>Explore emerging technologies like smart systems and renewable energy</li>
              <li>Understand the applications and limitations of new products</li>
              <li>Compare new solutions with traditional methods</li>
              <li>Develop familiarity with digital tools for design and documentation</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Formal Learning Opportunities</h3>
            <p className="text-[#FFC900]/80">
              Structured education provides valuable knowledge advancement:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Pursue relevant additional qualifications and certifications</li>
              <li>Attend industry conferences and seminars</li>
              <li>Participate in manufacturer and supplier training programs</li>
              <li>Consider specialized courses in growing areas (e.g., electric vehicle charging, renewable energy)</li>
              <li>Utilize online learning platforms for flexible skill development</li>
              <li>Join professional organizations that offer educational resources</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Informal Learning Methods</h3>
            <p className="text-[#FFC900]/80">
              Daily work presents abundant learning opportunities:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Seek mentorship from experienced colleagues</li>
              <li>Perform post-project reviews to identify improvement opportunities</li>
              <li>Research solutions to complex problems encountered in daily work</li>
              <li>Participate in industry forums and discussion groups</li>
              <li>Subscribe to trade magazines and technical publications</li>
              <li>Follow credible industry blogs, podcasts, and video channels</li>
              <li>Document and reflect on lessons learned from challenging projects</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Knowledge Sharing</h3>
            <p className="text-[#FFC900]/80">
              Contributing to the collective knowledge enhances personal learning:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Mentor less experienced colleagues</li>
              <li>Participate in team knowledge-sharing sessions</li>
              <li>Document unique solutions for company knowledge bases</li>
              <li>Contribute to industry forums and discussions</li>
              <li>Present at company or industry events</li>
              <li>Provide feedback to manufacturers on product performance</li>
            </ul>
          </div>
        </LessonContent>
      </>
    ),
    quiz: [
      {
        question: "Why is continuous learning particularly important in the electrical industry?",
        options: [
          "It's only important for gaining promotions",
          "It's mainly about maintaining certifications",
          "Because the industry undergoes constant evolution in technology, regulations, and best practices",
          "It's primarily needed for specialists, not general electricians"
        ],
        correctAnswer: "Because the industry undergoes constant evolution in technology, regulations, and best practices",
        explanation: "The electrical industry constantly evolves with new technologies, updated regulations, innovative materials, and improved practices. Continuous learning ensures professionals remain effective, compliant, and able to offer clients the most appropriate current solutions."
      },
      {
        question: "Which of the following is NOT an effective approach to continuous professional development?",
        options: [
          "Attending manufacturer training sessions",
          "Participating in industry forums and discussion groups",
          "Assuming that once qualified, no further learning is necessary",
          "Reading industry publications and technical updates"
        ],
        correctAnswer: "Assuming that once qualified, no further learning is necessary",
        explanation: "The belief that initial qualifications provide sufficient knowledge for an entire career is incompatible with professional development. The rapid pace of change in the electrical industry means that knowledge and skills must be continuously updated throughout a career."
      }
    ]
  },
  
  // Section 4.2
  {
    id: "4.2",
    title: "Seeking and Accepting Feedback",
    description: "Using constructive criticism to improve performance",
    content: (
      <>
        <LessonContent title="Seeking and Accepting Feedback">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFC900]">The Value of Professional Feedback</h3>
            <p className="text-[#FFC900]/80">
              Feedback is a powerful tool for professional development, offering perspectives that may be 
              difficult to gain through self-assessment alone. The ability to actively seek, appropriately 
              receive, and effectively implement feedback distinguishes growth-oriented professionals from 
              those whose development stagnates.
            </p>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Seeking Feedback Proactively</h3>
            <p className="text-[#FFC900]/80">
              Taking initiative in obtaining feedback demonstrates professional maturity:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Request specific feedback on particular aspects of your work</li>
              <li>Ask open-ended questions that encourage detailed responses</li>
              <li>Seek input from various sources (supervisors, peers, clients)</li>
              <li>Establish regular feedback opportunities rather than waiting for formal reviews</li>
              <li>Be clear about your development goals when requesting feedback</li>
              <li>Create an environment where others feel comfortable giving honest assessments</li>
              <li>Follow up on previous feedback to check progress</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Receiving Feedback Constructively</h3>
            <p className="text-[#FFC900]/80">
              How feedback is received significantly impacts its effectiveness:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Listen actively without interrupting or becoming defensive</li>
              <li>Consider feedback objectively rather than emotionally</li>
              <li>Ask clarifying questions to ensure understanding</li>
              <li>Look for the valuable insights even in poorly delivered feedback</li>
              <li>Express appreciation for honest input, even when critical</li>
              <li>Separate the feedback from your sense of self-worth</li>
              <li>Remember that critical feedback aims to help, not harm</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Common Feedback Responses to Avoid</h3>
            <p className="text-[#FFC900]/80">
              Certain reactions to feedback can limit its value:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Becoming defensive or argumentative</li>
              <li>Dismissing feedback without consideration</li>
              <li>Making excuses rather than taking responsibility</li>
              <li>Deflecting by highlighting others' shortcomings</li>
              <li>Taking constructive criticism as personal attacks</li>
              <li>Focusing only on positive feedback while ignoring areas for improvement</li>
              <li>Allowing feedback to demotivate rather than inspire improvement</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Implementing Feedback Effectively</h3>
            <p className="text-[#FFC900]/80">
              The true value of feedback comes from how it's applied:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Develop specific action plans based on received feedback</li>
              <li>Prioritize areas for improvement based on importance and impact</li>
              <li>Set measurable goals for implementing changes</li>
              <li>Seek resources or training to develop in identified areas</li>
              <li>Request follow-up observations to assess progress</li>
              <li>Document changes made and results achieved</li>
              <li>Reflect on how feedback has improved your performance</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Feedback as a Two-Way Process</h3>
            <p className="text-[#FFC900]/80">
              Professional feedback functions best as a mutual exchange:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Develop skills in giving constructive feedback to others</li>
              <li>Offer specific, actionable observations rather than general comments</li>
              <li>Focus on behavior and outcomes rather than personality</li>
              <li>Balance constructive criticism with recognition of strengths</li>
              <li>Consider timing and context when providing feedback</li>
              <li>Follow up to see how your feedback was implemented</li>
            </ul>
          </div>
        </LessonContent>
      </>
    ),
    quiz: [
      {
        question: "What is the best response when receiving critical feedback about your work?",
        options: [
          "Explain why the feedback giver is wrong",
          "Listen without interrupting, ask clarifying questions, and thank them for their input",
          "Point out similar issues in the feedback giver's work",
          "Accept it politely but ignore it afterward"
        ],
        correctAnswer: "Listen without interrupting, ask clarifying questions, and thank them for their input",
        explanation: "The professional approach to receiving feedback is to listen actively without becoming defensive, seek clarification to ensure understanding, and express appreciation for the input. This approach maximizes learning and demonstrates professional maturity."
      },
      {
        question: "Why is it important to seek feedback proactively rather than waiting for formal reviews?",
        options: [
          "It's only important for apprentices, not experienced workers",
          "It allows for more timely improvements and shows commitment to professional growth",
          "It's mainly to impress supervisors",
          "Formal reviews provide more valuable feedback"
        ],
        correctAnswer: "It allows for more timely improvements and shows commitment to professional growth",
        explanation: "Proactively seeking feedback enables continuous improvement rather than periodic adjustments. It provides more immediate opportunities to correct issues, demonstrates a commitment to excellence, and creates more learning opportunities than waiting for scheduled reviews alone."
      }
    ]
  },
  
  // Section 4.3
  {
    id: "4.3",
    title: "Knowledge Sharing",
    description: "Contributing to team development through sharing expertise",
    content: (
      <>
        <LessonContent title="Knowledge Sharing">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#FFC900]">The Importance of Knowledge Sharing</h3>
            <p className="text-[#FFC900]/80">
              Knowledge sharing is the intentional exchange of information, skills, and insights among team members 
              and colleagues. In the electrical industry, where specialized knowledge, safety practices, and technical 
              expertise are critical, effective knowledge sharing elevates the capabilities of the entire team, improves 
              safety outcomes, and contributes to organizational success.
            </p>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Benefits of Knowledge Sharing</h3>
            <p className="text-[#FFC900]/80">
              Understanding the value of knowledge sharing encourages participation:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Prevents the same mistakes from being repeated across the team</li>
              <li>Preserves specialized knowledge when individuals leave the organization</li>
              <li>Reduces the learning curve for new team members</li>
              <li>Promotes consistent work quality and practices</li>
              <li>Encourages innovation through the exchange of ideas</li>
              <li>Creates a supportive, collaborative work environment</li>
              <li>Enhances both individual and team problem-solving capabilities</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Formal Knowledge Sharing Methods</h3>
            <p className="text-[#FFC900]/80">
              Structured approaches ensure consistent information exchange:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Contribute to company documentation and procedure manuals</li>
              <li>Participate in toolbox talks and safety briefings</li>
              <li>Conduct demonstrations of techniques or new equipment</li>
              <li>Lead or contribute to team training sessions</li>
              <li>Document unique solutions to technical problems</li>
              <li>Create checklists and reference guides for common tasks</li>
              <li>Participate in post-project reviews and lessons learned sessions</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Informal Knowledge Sharing</h3>
            <p className="text-[#FFC900]/80">
              Day-to-day interactions provide valuable knowledge transfer opportunities:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Mentor less experienced team members</li>
              <li>Explain your approach when working alongside colleagues</li>
              <li>Share relevant articles, videos, or resources with the team</li>
              <li>Discuss interesting challenges or solutions during breaks</li>
              <li>Offer assistance and guidance when others encounter difficulties</li>
              <li>Ask questions that prompt others to share their expertise</li>
              <li>Participate actively in team messaging groups and communication channels</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Effective Teaching Techniques</h3>
            <p className="text-[#FFC900]/80">
              How knowledge is shared significantly impacts its absorption:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Adjust your approach to match different learning styles</li>
              <li>Break complex information into manageable segments</li>
              <li>Use clear examples and demonstrations when possible</li>
              <li>Encourage hands-on practice under supervision</li>
              <li>Provide context for why something is done a certain way</li>
              <li>Be patient and allow time for questions</li>
              <li>Check understanding by asking the learner to explain or demonstrate</li>
            </ul>
            
            <h3 className="text-lg font-semibold text-[#FFC900] mt-6">Overcoming Knowledge Sharing Barriers</h3>
            <p className="text-[#FFC900]/80">
              Addressing common obstacles improves knowledge flow:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>Recognize that sharing knowledge strengthens rather than diminishes your value</li>
              <li>Create an environment where questions are welcomed, not criticized</li>
              <li>Make time for knowledge sharing despite busy schedules</li>
              <li>Use clear, appropriate language avoiding unnecessary jargon</li>
              <li>Acknowledge the expertise and contributions of others</li>
              <li>Address misunderstandings or misinformation tactfully</li>
              <li>Seek feedback on the effectiveness of your knowledge sharing</li>
            </ul>
          </div>
        </LessonContent>
      </>
    ),
    quiz: [
      {
        question: "Why is knowledge sharing particularly important in the electrical industry?",
        options: [
          "It's only important for management personnel",
          "It's primarily about documenting procedures for legal reasons",
          "Because specialized knowledge, safety practices, and technical expertise are critical for successful outcomes",
          "It's mainly relevant for training new apprentices"
        ],
        correctAnswer: "Because specialized knowledge, safety practices, and technical expertise are critical for successful outcomes",
        explanation: "The electrical industry relies heavily on specialized technical knowledge, safety practices, and expertise that often isn't found in manuals alone. Knowledge sharing ensures this critical information is preserved, distributed, and applied consistently across teams, improving safety and work quality."
      },
      {
        question: "Which of the following is an effective approach to knowledge sharing in a team environment?",
        options: [
          "Only sharing information when directly asked",
          "Focusing on theoretical explanations rather than demonstrations",
          "Mentoring less experienced team members and explaining your approach while working",
          "Keeping unique solutions to yourself to maintain job security"
        ],
        correctAnswer: "Mentoring less experienced team members and explaining your approach while working",
        explanation: "Effective knowledge sharing includes active mentoring, providing context for decisions, demonstrating techniques, and explaining your approach during work activities. This practical, proactive sharing ensures knowledge transfer happens naturally within the team."
      }
    ]
  }
];

// Quiz questions for the final assessment
export const professionalConductQuestions = [
  {
    question: "What is a key component of professional appearance for electrical technicians?",
    options: [
      "Wearing designer workwear",
      "Having appropriate, clean workwear and proper PPE",
      "Using the most expensive tools",
      "Wearing formal business attire on job sites"
    ],
    correctAnswer: "Having appropriate, clean workwear and proper PPE",
    explanation: "Professional appearance for electrical technicians focuses on appropriate, clean workwear and proper PPE that meets safety requirements and projects professionalism, not on fashion or expensive equipment."
  },
  {
    question: "How should an electrical technician respond when receiving critical feedback about their work?",
    options: [
      "Defend their work decisions immediately",
      "Listen without interrupting, ask clarifying questions, and thank them for the input",
      "Point out similar issues in the feedback giver's work",
      "Agree with everything regardless of accuracy"
    ],
    correctAnswer: "Listen without interrupting, ask clarifying questions, and thank them for the input",
    explanation: "Professional response to feedback involves active listening without becoming defensive, asking clarifying questions to ensure understanding, and expressing appreciation for the input, which demonstrates professional maturity."
  },
  {
    question: "Which practice best demonstrates taking ownership of your work in electrical installations?",
    options: [
      "Blaming material quality when problems arise",
      "Only fixing issues that the client specifically notices",
      "Proactively identifying potential issues and addressing them before they become problems",
      "Following instructions exactly without suggesting improvements"
    ],
    correctAnswer: "Proactively identifying potential issues and addressing them before they become problems",
    explanation: "Taking ownership involves proactively identifying and addressing potential issues before they become problems, which demonstrates commitment to quality and responsibility for the overall success of the installation."
  },
  {
    question: "What should you do if you realize you won't be able to meet an established deadline for an electrical project?",
    options: [
      "Work faster by taking shortcuts in safety procedures",
      "Say nothing until the deadline passes",
      "Communicate the issue promptly and propose a revised timeline",
      "Blame external factors for the delay"
    ],
    correctAnswer: "Communicate the issue promptly and propose a revised timeline",
    explanation: "The professional approach is to communicate promptly when a deadline is at risk, explain the situation honestly, and propose a realistic revised timeline, allowing for proper planning adjustments."
  },
  {
    question: "What is the appropriate way to handle a client's confidential information?",
    options: [
      "Share it only with your immediate team",
      "Discuss it only in private company meetings",
      "Store it securely and only access or share it on a need-to-know basis",
      "It's fine to discuss as long as you don't use the client's name"
    ],
    correctAnswer: "Store it securely and only access or share it on a need-to-know basis",
    explanation: "Client confidential information should be stored securely and accessed or shared only on a strict need-to-know basis in accordance with data protection regulations and professional ethics."
  },
  {
    question: "What should you do if a client offers you a significant personal gift?",
    options: [
      "Accept it to maintain good client relations",
      "Accept it but don't tell your employer",
      "Politely decline and explain company policy regarding gifts",
      "Accept it but give it to your supervisor"
    ],
    correctAnswer: "Politely decline and explain company policy regarding gifts",
    explanation: "The professional response is to politely decline significant gifts, explaining company policy limitations. Accepting such gifts could create conflicts of interest or the appearance of impropriety."
  },
  {
    question: "Why is accurate reporting of materials used important in electrical work?",
    options: [
      "It only matters for inventory management",
      "It ensures proper billing and maintains safety and compliance records",
      "It's mainly required for tax purposes",
      "It's only important for government contracts"
    ],
    correctAnswer: "It ensures proper billing and maintains safety and compliance records",
    explanation: "Accurate material reporting ensures correct billing and creates reliable records of what was installed for future maintenance, warranty claims, compliance verification, and safety documentation."
  },
  {
    question: "What is the best approach to continuous learning in the electrical field?",
    options: [
      "Focus only on mandatory certification updates",
      "Learn only about the specific systems you currently work with",
      "Regularly pursue diverse learning opportunities including regulations, new technologies, and best practices",
      "Wait for your employer to arrange training courses"
    ],
    correctAnswer: "Regularly pursue diverse learning opportunities including regulations, new technologies, and best practices",
    explanation: "Effective professional development involves proactively seeking diverse learning opportunities covering regulatory updates, new technologies, and evolving best practices through multiple channels including formal training, self-study, and peer learning."
  },
  {
    question: "Which statement about punctuality best reflects professional conduct standards?",
    options: [
      "Arriving exactly on time is sufficient",
      "It's acceptable to be 5-10 minutes late regularly",
      "Professionals should aim to arrive 10-15 minutes before scheduled start times",
      "Punctuality is only essential for client meetings, not regular work days"
    ],
    correctAnswer: "Professionals should aim to arrive 10-15 minutes before scheduled start times",
    explanation: "Professional standards for punctuality involve arriving 10-15 minutes early to prepare properly for work, review any updates, and begin productively at the scheduled start time."
  },
  {
    question: "When communicating technical information to a non-technical client, what approach should you take?",
    options: [
      "Use technical terminology to demonstrate expertise",
      "Simplify concepts while maintaining accuracy",
      "Let them know they wouldn't understand the details",
      "Keep explanations brief regardless of client understanding"
    ],
    correctAnswer: "Simplify concepts while maintaining accuracy",
    explanation: "When communicating with non-technical clients, professionals should translate complex technical information into simpler language while maintaining accuracy, which builds trust and ensures clients can make informed decisions."
  }
];
