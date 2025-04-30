
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { Section } from './types';

const SectionContent = () => {
  return (
    <LessonContent title="Working with Metal Conduit">
      <p className="mb-4">
        Metal conduit provides superior mechanical protection for electrical cables in commercial and industrial environments.
        This section covers proper techniques for installing and working with metal conduit systems.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Key Properties of Metal Conduit</h4>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Excellent mechanical protection against damage</li>
          <li>Fire resistance and structural integrity</li>
          <li>Provides good electromagnetic interference (EMI) shielding</li>
          <li>Can serve as an equipment grounding conductor when properly installed</li>
          <li>Available in various sizes and weights (light, medium, heavy)</li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Cutting and Threading</h4>
          <p className="mb-2">Proper cutting and threading techniques ensure secure connections:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Use a pipe cutter or hacksaw with fine teeth (32 TPI)</li>
            <li>Make sure cuts are square and clean</li>
            <li>Remove all burrs and sharp edges using a reamer</li>
            <li>Use threading dies designed for electrical conduit</li>
            <li>Apply thread-cutting oil during threading process</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Bending Techniques</h4>
          <p className="mb-2">Professional bending requires proper tools and measurements:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Use a conduit bender appropriate for the conduit size</li>
            <li>Mark the conduit precisely before bending</li>
            <li>Account for bend allowance in measurements</li>
            <li>Common bend types: 90° bends, offsets, saddles, and back-to-back bends</li>
            <li>Follow the multiplier rule for offset bends (e.g., 1:4 ratio)</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Installation Best Practices</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Support conduit at correct intervals (typically every 900-1200mm horizontally)</li>
          <li>Use appropriate fittings and junction boxes</li>
          <li>Maintain continuity through proper bonding</li>
          <li>Allow for expansion in long runs</li>
          <li>Ensure radius of bends is at least 8 times the conduit diameter</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section1_1: Section = {
  title: "Working with Metal Conduit",
  description: "Installation techniques for metal conduit systems",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Identify different types of metal conduit and their applications</li>
            <li>Demonstrate proper cutting, threading, and bending techniques</li>
            <li>Understand support methods and spacing requirements</li>
            <li>Ensure proper electrical continuity through conduit systems</li>
            <li>Apply appropriate installation methods according to regulations</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Metal Conduit Installation" 
        content={<SectionContent />}
      />
    </>
  )
};
