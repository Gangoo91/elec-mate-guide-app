
import React from 'react';
import { Section210 } from './types';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";

const SectionContent = () => {
  return (
    <LessonContent title="Written Communication">
      <p className="mb-4">
        Clear written communication creates a permanent record and helps ensure understanding. This section covers 
        essential written communication skills for documentation in electrical work.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Key Written Documents in Electrical Work</h4>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Job sheets and time records</li>
          <li>Reports on work completed</li>
          <li>Email messages to customers or suppliers</li>
          <li>Notes for other workers who might continue your work</li>
          <li>Risk assessments and method statements</li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Documentation Best Practices</h4>
          <p className="mb-2">When documenting your work:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Be clear, concise, and specific</li>
            <li>Include relevant details (materials used, tests performed, readings obtained)</li>
            <li>Use standardized forms and formats when available</li>
            <li>Write legibly if using paper records</li>
            <li>Include dates, times, and your identification</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Professional Emails</h4>
          <p className="mb-2">For written digital communication:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Use professional greetings and closings</li>
            <li>Clearly state your purpose in the first paragraph</li>
            <li>Keep messages brief and focused</li>
            <li>Proofread before sending</li>
            <li>Maintain a professional tone</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Handover Notes</h4>
        <p className="mb-2">When others will continue your work:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Clearly describe what has been completed</li>
          <li>Document what still needs to be done</li>
          <li>Note any unusual circumstances or challenges</li>
          <li>Include contact information for questions</li>
          <li>Consider who will be reading your notes and their level of expertise</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section1_4: Section210 = {
  title: "Written Communication",
  description: "Develop essential written communication skills for documentation",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Create clear and effective job documentation</li>
            <li>Write professional emails and correspondence</li>
            <li>Prepare comprehensive handover notes</li>
            <li>Follow industry standards for technical documentation</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Written Communication Skills" 
        content={<SectionContent />}
      />
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
