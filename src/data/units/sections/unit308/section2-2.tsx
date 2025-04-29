
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { SectionData } from './types';

const ContinuingProfessionalDevelopment = () => {
  return (
    <LessonContent title="Continuing Professional Development (CPD)">
      <p className="mb-4">
        Continuing Professional Development (CPD) is the ongoing process of tracking and documenting the skills, 
        knowledge, and experience that you gain both formally and informally beyond your initial training.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Why CPD is Essential for Electricians</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Evolving industry:</strong> Electrical technologies and regulations change regularly</li>
          <li><strong>Career advancement:</strong> CPD demonstrates commitment to professional growth</li>
          <li><strong>Legal compliance:</strong> Ensures awareness of latest regulatory requirements</li>
          <li><strong>Commercial advantage:</strong> Develops skills that set you apart from competitors</li>
          <li><strong>Professional membership:</strong> Often required to maintain status with professional bodies</li>
          <li><strong>Client confidence:</strong> Demonstrates up-to-date knowledge and competence</li>
        </ul>
      </div>
      
      <div className="bg-[#2a2d24] p-4 rounded-md">
        <h4 className="font-medium text-[#FFC900] mb-2">Types of CPD Activities</h4>
        <div className="space-y-3">
          <div>
            <p className="font-medium">Formal Learning:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Training courses and workshops</li>
              <li>Industry conferences and seminars</li>
              <li>Accredited qualifications</li>
              <li>Manufacturer training programs</li>
              <li>Online courses and webinars</li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium">Work-based Learning:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Taking on new responsibilities</li>
              <li>Shadowing specialists</li>
              <li>Mentoring and being mentored</li>
              <li>Product research and familiarization</li>
              <li>Problem-solving complex installations</li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium">Self-directed Learning:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Reading technical journals and publications</li>
              <li>Studying industry guidance</li>
              <li>Researching new technologies</li>
              <li>Online forums and professional communities</li>
              <li>Technical videos and demonstrations</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-4 bg-[#2a2d24] p-4 rounded-md">
        <h4 className="font-medium text-[#FFC900] mb-2">Managing Your CPD</h4>
        <ol className="list-decimal pl-6 space-y-1">
          <li><strong>Identify needs:</strong> Assess your current skills against career goals</li>
          <li><strong>Plan activities:</strong> Create a structured plan to address skill gaps</li>
          <li><strong>Record learning:</strong> Document all CPD activities</li>
          <li><strong>Reflect on outcomes:</strong> Evaluate how each activity has benefited your practice</li>
          <li><strong>Apply knowledge:</strong> Implement new skills and knowledge in your work</li>
          <li><strong>Review regularly:</strong> Update your CPD plan as your career develops</li>
        </ol>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">CPD Requirements for Professional Bodies</h4>
        <p className="mb-2">Many professional bodies have specific CPD requirements:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>IET (Institution of Engineering and Technology):</strong> 30 hours per year</li>
          <li><strong>ECA (Electrical Contractors' Association):</strong> Members expected to maintain CPD</li>
          <li><strong>JIB:</strong> CPD may be required for certain grading levels</li>
          <li><strong>NICEIC/ELECSA:</strong> Regular updates on regulations required</li>
          <li><strong>CompEx:</strong> Renewal every 5 years requires refresher training</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section2_2: SectionData = {
  title: "Continuing Professional Development",
  description: "The importance of ongoing learning and development",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand the concept and importance of CPD in the electrical industry</li>
            <li>Identify different types of CPD activities for electricians</li>
            <li>Learn how to effectively plan and manage your CPD</li>
            <li>Recognize CPD requirements for various professional bodies</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Continuing Professional Development" 
        content={<ContinuingProfessionalDevelopment />}
      />
    </>
  )
};
