
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { Section } from './types';
import CircuitTypes from "@/components/units/section305/CircuitTypes";

const CircuitDesign = () => {
  return (
    <LessonContent title="Circuit Design Principles">
      <p className="mb-4">
        Effective electrical installation design requires careful planning of various circuit types to meet 
        specific functional needs while ensuring safety and compliance with regulations.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Design Considerations</h4>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Load requirements and expected demand</li>
          <li>Circuit segregation (lighting, power, special circuits)</li>
          <li>Future expansion needs</li>
          <li>Voltage drop limitations</li>
          <li>Discrimination between protective devices</li>
          <li>Cable sizing requirements</li>
          <li>Accessibility for maintenance</li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Circuit Planning Process</h4>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Identify all required circuits based on building layout and use</li>
            <li>Determine load requirements for each circuit</li>
            <li>Select appropriate cable types and sizes</li>
            <li>Choose suitable protective devices</li>
            <li>Plan distribution board layout and circuit allocation</li>
            <li>Create circuit schedules and diagrams</li>
          </ol>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Load Assessment</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Connected load:</strong> Total of all equipment ratings</li>
            <li><strong>Maximum demand:</strong> Actual expected load with diversity factors applied</li>
            <li><strong>Diversity factors:</strong> Applied to account for non-simultaneous use</li>
            <li>Example diversity factors:
              <ul className="list-disc pl-6 mt-1">
                <li>Lighting circuits: 0.9 (90%)</li>
                <li>Socket outlets: 0.2-0.4 (20-40%)</li>
                <li>Cooking appliances: 0.5-0.7 (50-70%)</li>
                <li>Electric heating: 0.8 (80%)</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Design Documentation</h4>
        <p className="mb-2">
          Proper documentation is essential for installation, maintenance, and compliance verification:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Distribution board schedules</li>
          <li>Circuit diagrams</li>
          <li>Cable routes and layouts</li>
          <li>Earthing and bonding arrangements</li>
          <li>Calculations for load assessment, cable sizing, and voltage drop</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section1_3: Section = {
  title: "Circuit Design",
  description: "Designing lighting, socket outlets, and special circuits",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand the principles of circuit design for different applications</li>
            <li>Learn how to assess and calculate electrical loads</li>
            <li>Identify appropriate circuit types for specific purposes</li>
            <li>Know how to document circuit designs effectively</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Circuit Design Fundamentals" 
        content={<CircuitDesign />}
      />
      
      <ContentSection
        title="Types of Circuits" 
        content={<CircuitTypes />}
      />
    </>
  )
};
