
// This is a template file that can be used as a starting point for creating additional section files.
// To use it, copy this file and rename it to sectionX-Y.tsx where X is the main section number and Y is the subsection number.

import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { Section } from './types';

const SectionContent = () => {
  return (
    <LessonContent title="Section Title">
      <p className="mb-4">
        Introduction paragraph explaining the topic and its importance in electrical installations.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Topic Heading 1</h4>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Bullet point 1</li>
          <li>Bullet point 2</li>
          <li>Bullet point 3</li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Topic Heading 2</h4>
          <p className="mb-2">Explanatory text goes here.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Topic Heading 3</h4>
          <p className="mb-2">More explanatory text goes here.</p>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Additional Information</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Important point 1</li>
          <li>Important point 2</li>
          <li>Important point 3</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const sectionX_Y: Section = {
  title: "Section Title",
  description: "Brief description of this section content",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Learning objective 1</li>
            <li>Learning objective 2</li>
            <li>Learning objective 3</li>
            <li>Learning objective 4</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Main Content Title" 
        content={<SectionContent />}
      />
    </>
  )
};
