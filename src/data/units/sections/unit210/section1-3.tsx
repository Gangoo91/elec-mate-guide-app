
import React from 'react';
import { Section210 } from './sections';

export const section1_3: Section210 = {
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
};
