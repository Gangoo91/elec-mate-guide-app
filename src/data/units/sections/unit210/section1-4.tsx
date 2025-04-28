
import React from 'react';
import { Section210 } from './sections';

export const section1_4: Section210 = {
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
};
