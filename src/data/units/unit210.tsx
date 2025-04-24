
import React from 'react';
import { UnitContent } from './interfaces';

export const unit210: UnitContent = {
  title: "Understand How to Communicate with Others",
  description: "Learn how to talk to customers and work well with your team. This helps you explain your work clearly and become a better professional.",
  sections: [
    {
      title: "Why Communication Matters",
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
      )
    },
    {
      title: "Talking with Customers",
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
      )
    },
    {
      title: "Working with Your Team",
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
      )
    },
    {
      title: "Written Communication",
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
      )
    }
  ]
};
