
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { Section } from './types';

const DesignPrinciples = () => {
  return (
    <LessonContent title="Electrical Installation Design Principles">
      <p className="mb-4">
        Electrical installation design requires careful planning to ensure safety, efficiency, 
        and compliance with regulations. This section covers the fundamental principles of designing 
        electrical installations for various types of buildings.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Types of Buildings</h4>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li><strong>Domestic:</strong> Single and multi-occupancy dwellings</li>
          <li><strong>Commercial:</strong> Offices, retail spaces, restaurants</li>
          <li><strong>Industrial:</strong> Factories, warehouses, workshops</li>
          <li><strong>Special locations:</strong> Medical locations, swimming pools, etc.</li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Key Design Considerations</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Load assessment:</strong> Calculate the maximum demand of the installation</li>
            <li><strong>Circuit planning:</strong> Determine number and type of circuits needed</li>
            <li><strong>Diversity factors:</strong> Account for diversity when calculating loads</li>
            <li><strong>Cable sizing:</strong> Select correct cables based on current-carrying capacity</li>
            <li><strong>Protection:</strong> Select appropriate protective devices</li>
            <li><strong>Regulation compliance:</strong> Ensure design meets BS 7671 requirements</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Design Process</h4>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Gather information about the building and client requirements</li>
            <li>Determine the type of supply needed</li>
            <li>Calculate the maximum demand and apply diversity</li>
            <li>Identify circuits required (lighting, power, special installations)</li>
            <li>Size cables and protective devices</li>
            <li>Design earthing and bonding arrangements</li>
            <li>Create circuit diagrams and installation layouts</li>
            <li>Prepare documentation and schedules</li>
          </ol>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Design Documentation</h4>
        <p className="mb-2">A complete electrical design typically includes:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Schematic diagrams</li>
          <li>Floor plans showing socket and lighting positions</li>
          <li>Distribution board schedules</li>
          <li>Cable sizing calculations</li>
          <li>Earthing arrangements</li>
          <li>Certification requirements</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section1_1: Section = {
  title: "Electrical Installation Design Principles",
  description: "Understanding how to plan circuits and choose supply arrangements",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand the fundamental principles of electrical installation design</li>
            <li>Identify key considerations for different building types</li>
            <li>Learn the design process for electrical installations</li>
            <li>Recognize required documentation for installation designs</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Electrical Design Fundamentals" 
        content={<DesignPrinciples />}
      />
    </>
  )
};
