
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { SectionData } from './types';

const CareerPathways = () => {
  return (
    <LessonContent title="Career Progression Path">
      <p className="mb-4">
        The electrical industry offers clear progression pathways that allow individuals to advance their careers 
        through a combination of experience, qualifications, and skill development.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Standard Career Progression Path</h4>
        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="h-1 w-full bg-[#FFC900]/30"></div>
          </div>
          
          <div className="relative flex justify-between">
            <div className="text-center">
              <div className="bg-[#FFC900] rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">1</div>
              <div className="text-sm">Apprentice</div>
            </div>
            
            <div className="text-center">
              <div className="bg-[#FFC900] rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">2</div>
              <div className="text-sm">Qualified Electrician</div>
            </div>
            
            <div className="text-center">
              <div className="bg-[#FFC900] rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">3</div>
              <div className="text-sm">Approved Electrician</div>
            </div>
            
            <div className="text-center">
              <div className="bg-[#FFC900] rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">4</div>
              <div className="text-sm">Technician</div>
            </div>
            
            <div className="text-center">
              <div className="bg-[#FFC900] rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">5</div>
              <div className="text-sm">Engineer</div>
            </div>
            
            <div className="text-center">
              <div className="bg-[#FFC900] rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">6</div>
              <div className="text-sm">Manager</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">1. Apprentice</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Entry-level position combining work and study</li>
            <li>Typically 3-4 years in duration</li>
            <li>Working toward Level 3 qualification</li>
            <li>Developing fundamental skills under supervision</li>
            <li>Building technical knowledge through college study</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">2. Qualified Electrician</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Completed Level 3 qualification</li>
            <li>Able to work independently</li>
            <li>JIB/ECS Gold Card holder</li>
            <li>Building experience across various installation types</li>
            <li>Developing specializations</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">3. Approved Electrician</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Several years of post-qualification experience</li>
            <li>Additional qualifications (e.g., 2391 Inspection & Testing)</li>
            <li>Able to supervise others</li>
            <li>Taking on more responsibility</li>
            <li>May specialize in particular areas (e.g., industrial, commercial)</li>
          </ul>
        </div>
      </div>
      
      <div className="space-y-4 mt-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">4. Technician</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Higher level technical knowledge</li>
            <li>May hold HNC/HND qualification</li>
            <li>Specialized expertise in particular systems</li>
            <li>Problem-solving complex technical issues</li>
            <li>May move toward design or specialized roles</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">5. Engineer</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Design and engineering responsibilities</li>
            <li>May hold degree or higher qualifications</li>
            <li>Technical leadership</li>
            <li>Developing specifications and solutions</li>
            <li>Professional body membership (e.g., IET)</li>
            <li>May be working toward chartered status</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">6. Manager</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Leadership and management responsibilities</li>
            <li>Commercial and business focus</li>
            <li>Team and/or project management</li>
            <li>Strategic planning</li>
            <li>Client and stakeholder management</li>
            <li>May require management qualifications</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Alternative Career Paths</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Specialist Technician:</strong> Focusing on specific systems like fire alarms, security, or building management systems</li>
          <li><strong>Design Engineer:</strong> Specializing in electrical design and CAD</li>
          <li><strong>Estimator/Quantity Surveyor:</strong> Moving into commercial roles</li>
          <li><strong>Electrical Consultant:</strong> Providing expert advice and services</li>
          <li><strong>Inspector/Auditor:</strong> Working for certification bodies or regulatory organizations</li>
          <li><strong>Trainer/Educator:</strong> Teaching the next generation of electricians</li>
          <li><strong>Self-employment:</strong> Running your own electrical business</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section2_1: SectionData = {
  title: "Career Progression Path",
  description: "How to advance from apprentice to management roles",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand the typical career progression in the electrical industry</li>
            <li>Identify the qualifications and experience required for each career stage</li>
            <li>Recognize alternative career paths and specializations</li>
            <li>Learn how to plan your own career advancement</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Career Pathways in Electrical Work" 
        content={<CareerPathways />}
      />
    </>
  )
};
