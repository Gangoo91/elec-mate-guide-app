
import React from 'react';
import { Section210 } from './types';
import LessonContent from '@/components/units/LessonContent';

export const section4_2: Section210 = {
  id: "4.2",
  title: "Interview Techniques",
  description: "Communicating effectively during job interviews",
  content: (
    <>
      <LessonContent title="Interview Communication Skills">
        <p>
          Effective communication during job interviews is essential for career advancement in the electrical field.
          Whether you're applying for your first apprenticeship, seeking a journeyman position, or interviewing for
          a senior role, how you communicate can be as important as your technical qualifications.
        </p>
        
        <h3 className="text-lg font-medium text-[#FFC900] mt-6 mb-3">Before the Interview</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Research the company:</strong> Understand their specialization, projects, and values
          </li>
          <li>
            <strong>Prepare examples:</strong> Think of specific situations that demonstrate your skills and experience
          </li>
          <li>
            <strong>Practice explaining technical skills:</strong> Be ready to discuss your capabilities clearly
          </li>
          <li>
            <strong>Prepare questions:</strong> Have thoughtful questions ready about the role and company
          </li>
        </ul>
        
        <h3 className="text-lg font-medium text-[#FFC900] mt-6 mb-3">During the Interview</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>First impressions:</strong> Professional appearance, firm handshake, confident introduction
          </li>
          <li>
            <strong>Active listening:</strong> Pay full attention to questions and don't interrupt
          </li>
          <li>
            <strong>Clear responses:</strong> Structure answers logically, focusing on relevant information
          </li>
          <li>
            <strong>Technical accuracy:</strong> Demonstrate your knowledge while avoiding unnecessary jargon
          </li>
          <li>
            <strong>The STAR method:</strong> For behavioral questions, describe the Situation, Task, Action, and Result
          </li>
        </ul>
        
        <h3 className="text-lg font-medium text-[#FFC900] mt-6 mb-3">Common Electrical Interview Questions</h3>
        <p>Be prepared to answer questions like:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>"Describe a challenging electrical problem you solved."</li>
          <li>"How do you stay current with changes to electrical codes and regulations?"</li>
          <li>"How would you explain [technical concept] to a non-technical client?"</li>
          <li>"Tell me about a time you identified a safety issue on a job site."</li>
          <li>"What types of electrical installations/systems are you most experienced with?"</li>
        </ul>
        
        <h3 className="text-lg font-medium text-[#FFC900] mt-6 mb-3">Following Up</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Send a brief thank-you email within 24 hours of the interview</li>
          <li>Reference specific topics discussed to show engagement and interest</li>
          <li>Keep communication professional and concise</li>
        </ul>
        
        <div className="bg-[#353a2c] p-4 rounded-md mt-6">
          <p className="text-[#FFC900] font-medium">Interview Practice</p>
          <p>With a classmate or mentor, practice answering: "Can you tell me about a time when you had to explain a complex electrical issue to someone without technical knowledge? How did you approach it and what was the outcome?"</p>
        </div>
      </LessonContent>
    </>
  )
};
