
import React from 'react';
import { communicationQuestions } from './questions/communicationQuestionsUnitians';

// Define the section content structure
export interface Section210 {
  title: string;
  description?: string;
  content: React.ReactNode;
  detailedContent?: React.ReactNode;
}

// Define all unit 210 sections
export const sections210: Record<string, Section210> = {
  "1.1": {
    title: "Why Communication Matters",
    description: "Understand the importance of effective communication in the electrical trade",
    content: (
      <>
        <p>Good communication is just as important as technical skills:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>It helps prevent misunderstandings and mistakes</li>
          <li>It builds trust with customers and colleagues</li>
          <li>It makes work go more smoothly and efficiently</li>
          <li>It helps you get ahead in your career</li>
        </ul>
      </>
    ),
    detailedContent: (
      <>
        <p className="mb-4">As an electrician, your ability to communicate effectively can be just as important as your technical skills. Clear communication ensures:</p>
        
        <h4 className="text-xl text-[#FFC900] mb-2">Safety</h4>
        <p className="mb-4">Miscommunication can lead to serious safety incidents. When you clearly communicate potential hazards, work procedures, and safety requirements, you help protect yourself and others from harm.</p>
        
        <h4 className="text-xl text-[#FFC900] mb-2">Customer Satisfaction</h4>
        <p className="mb-4">Customers appreciate electricians who can explain technical issues in ways they understand. Good communication builds trust and leads to repeat business and referrals.</p>
        
        <h4 className="text-xl text-[#FFC900] mb-2">Efficiency</h4>
        <p className="mb-4">Clear instructions and expectations help jobs run smoothly. When everyone understands what needs to be done, work progresses with fewer delays and misunderstandings.</p>
        
        <h4 className="text-xl text-[#FFC900] mb-2">Career Advancement</h4>
        <p className="mb-4">Electricians with strong communication skills often advance more quickly. The ability to clearly present ideas, lead teams, and interact professionally with clients becomes increasingly important as you move up in your career.</p>
      </>
    )
  },
  "1.2": {
    title: "Talking with Customers",
    description: "Learn effective techniques for customer communication",
    content: (
      <>
        <p>When dealing with customers:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Use simple, non-technical language they can understand</li>
          <li>Listen carefully to their needs and concerns</li>
          <li>Be polite and professional at all times</li>
          <li>Explain what you're doing and why</li>
        </ul>
        <p className="mt-2">Remember: To the customer, you represent your company and the electrical trade.</p>
      </>
    ),
    detailedContent: (
      <>
        <p className="mb-4">Effective customer communication is essential for success in the electrical trade.</p>
        
        <h4 className="text-xl text-[#FFC900] mb-2">Speaking Simply</h4>
        <p className="mb-4">Most customers don't understand electrical terminology. When explaining issues:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Avoid technical jargon when possible</li>
          <li>Use analogies to explain complex concepts</li>
          <li>Check for understanding by asking questions</li>
          <li>Use visual aids when helpful</li>
        </ul>
        
        <h4 className="text-xl text-[#FFC900] mb-2">Active Listening</h4>
        <p className="mb-4">Understanding customer needs requires careful listening:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Give customers your full attention</li>
          <li>Ask clarifying questions</li>
          <li>Summarize what you've heard to confirm understanding</li>
          <li>Take notes on specific requirements or concerns</li>
        </ul>
        
        <h4 className="text-xl text-[#FFC900] mb-2">Professionalism</h4>
        <p className="mb-4">Your behavior shapes how customers view the entire electrical profession:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Arrive on time and dress appropriately</li>
          <li>Be respectful of customers' homes and belongings</li>
          <li>Maintain a calm, professional demeanor even in challenging situations</li>
          <li>Follow through on commitments and keep customers informed of progress</li>
        </ul>
      </>
    )
  },
  "1.3": {
    title: "Working with Your Team",
    description: "Develop effective team communication skills",
    content: (
      <>
        <p>On a job site, you'll work with other electricians and different trades:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Share information about what you're doing and any issues</li>
          <li>Ask questions if you're not sure about something</li>
          <li>Be clear about when you'll finish tasks</li>
          <li>Report problems promptly rather than hiding them</li>
        </ul>
        <p className="mt-2">Good teamwork depends on good communication!</p>
      </>
    ),
    detailedContent: (
      <>
        <p className="mb-4">Effective team communication leads to safer, more efficient work environments.</p>
        
        <h4 className="text-xl text-[#FFC900] mb-2">Information Sharing</h4>
        <p className="mb-4">Keeping your team informed is crucial:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Provide regular updates on your progress</li>
          <li>Alert others to potential safety issues</li>
          <li>Share discoveries that might affect other trades (e.g., unexpected obstacles behind walls)</li>
          <li>Document important decisions and changes</li>
        </ul>
        
        <h4 className="text-xl text-[#FFC900] mb-2">Asking Questions</h4>
        <p className="mb-4">Questions are a sign of professionalism, not weakness:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Ask for clarification when instructions are unclear</li>
          <li>Verify assumptions before proceeding with work</li>
          <li>Seek advice when encountering unfamiliar situations</li>
          <li>Learn from more experienced team members</li>
        </ul>
        
        <h4 className="text-xl text-[#FFC900] mb-2">Managing Conflicts</h4>
        <p className="mb-4">When disagreements arise:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Address issues directly but respectfully</li>
          <li>Focus on the problem, not the person</li>
          <li>Listen to other perspectives</li>
          <li>Seek win-win solutions when possible</li>
          <li>Involve supervisors when necessary</li>
        </ul>
      </>
    )
  },
  "1.4": {
    title: "Written Communication",
    description: "Develop essential written communication skills for documentation",
    content: (
      <>
        <p>You'll also need to write clearly for:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Job sheets and time records</li>
          <li>Reports on work completed</li>
          <li>Email messages to customers or suppliers</li>
          <li>Notes for other workers who might continue your work</li>
        </ul>
        <p className="mt-2">Even if you prefer practical work, good writing skills will help your career.</p>
      </>
    ),
    detailedContent: (
      <>
        <p className="mb-4">Written communication creates a permanent record and helps ensure clear understanding.</p>
        
        <h4 className="text-xl text-[#FFC900] mb-2">Documentation Best Practices</h4>
        <p className="mb-4">When documenting your work:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Be clear, concise, and specific</li>
          <li>Include relevant details (materials used, tests performed, readings obtained)</li>
          <li>Use standardized forms and formats when available</li>
          <li>Write legibly if using paper records</li>
          <li>Include dates, times, and your identification</li>
        </ul>
        
        <h4 className="text-xl text-[#FFC900] mb-2">Professional Emails</h4>
        <p className="mb-4">For written digital communication:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Use professional greetings and closings</li>
          <li>Clearly state your purpose in the first paragraph</li>
          <li>Keep messages brief and focused</li>
          <li>Proofread before sending</li>
          <li>Maintain a professional tone</li>
        </ul>
        
        <h4 className="text-xl text-[#FFC900] mb-2">Handover Notes</h4>
        <p className="mb-4">When others will continue your work:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Clearly describe what has been completed</li>
          <li>Document what still needs to be done</li>
          <li>Note any unusual circumstances or challenges</li>
          <li>Include contact information for questions</li>
        </ul>
      </>
    )
  }
};
