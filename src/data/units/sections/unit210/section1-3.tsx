
import React from 'react';
import { Section210 } from './types';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";

const SectionContent = () => {
  return (
    <LessonContent title="Working with Your Team">
      <p className="mb-4">
        On job sites, you'll work alongside other electricians and different trades. Effective team communication 
        leads to safer, more efficient work environments and better professional relationships.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Key Team Communication Principles</h4>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Share information about what you're doing and any issues encountered</li>
          <li>Ask questions if you're not sure about something</li>
          <li>Be clear about when you'll finish tasks</li>
          <li>Report problems promptly rather than hiding them</li>
          <li>Remember that good teamwork depends on good communication</li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Information Sharing</h4>
          <p className="mb-2">Keeping your team informed is crucial:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide regular updates on your progress</li>
            <li>Alert others to potential safety issues immediately</li>
            <li>Share discoveries that might affect other trades</li>
            <li>Document important decisions and changes</li>
            <li>Use appropriate communication channels for different types of information</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Working with Other Trades</h4>
          <p className="mb-2">Effective cross-trade communication:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand the basics of what other trades do</li>
            <li>Coordinate work schedules to avoid conflicts</li>
            <li>Discuss overlapping areas of responsibility</li>
            <li>Be respectful of other trades' expertise and requirements</li>
            <li>Address conflicts directly and professionally</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Managing Conflicts</h4>
        <p className="mb-2">When disagreements arise:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Address issues directly but respectfully</li>
          <li>Focus on the problem, not the person</li>
          <li>Listen to other perspectives</li>
          <li>Seek win-win solutions when possible</li>
          <li>Know when to involve supervisors or project managers</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section1_3: Section210 = {
  title: "Working with Your Team",
  description: "Develop effective team communication skills",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Share information effectively with team members</li>
            <li>Coordinate with other trades on job sites</li>
            <li>Address conflicts professionally</li>
            <li>Contribute positively to team dynamics</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Team Communication" 
        content={<SectionContent />}
      />
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
