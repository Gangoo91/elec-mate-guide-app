
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { Section } from './types';

const SectionContent = () => {
  return (
    <LessonContent title="Flexible Conduit Applications">
      <p className="mb-4">
        Flexible conduit provides a versatile solution for electrical installations where movement, vibration, or
        complex routing is required. This section covers the applications, installation techniques, and considerations
        when working with flexible conduit systems.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Key Properties of Flexible Conduit</h4>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Provides flexibility for connections to moving equipment</li>
          <li>Available in metallic and non-metallic versions</li>
          <li>Suitable for vibration-prone environments</li>
          <li>Allows for easier routing around obstacles</li>
          <li>Various degrees of water and dust protection available</li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Types of Flexible Conduit</h4>
          <p className="mb-2">Different types are designed for specific applications:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Metallic Flexible Conduit:</strong> Constructed from interlocked metal strips</li>
            <li><strong>Liquid-Tight Flexible Metal Conduit (LFMC):</strong> Metal core with waterproof jacket</li>
            <li><strong>Liquid-Tight Flexible Non-Metallic Conduit (LFNC):</strong> Made from plastic with smooth interior</li>
            <li><strong>Flexible Metal Tubing:</strong> Lightweight metal construction for simple installations</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Installation Techniques</h4>
          <p className="mb-2">Proper installation ensures safety and reliability:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Use appropriate fittings for the conduit type</li>
            <li>Ensure proper termination with suitable connectors</li>
            <li>Support at intervals as specified by regulations (typically closer than rigid conduit)</li>
            <li>Avoid sharp bends that could damage conductors</li>
            <li>Allow sufficient slack for movement where required</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Common Applications</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Motor Connections:</strong> To accommodate vibration and movement</li>
          <li><strong>Machine Tool Wiring:</strong> For components that adjust position</li>
          <li><strong>HVAC Equipment:</strong> To reduce vibration transmission</li>
          <li><strong>Final Connections:</strong> To facilitate equipment positioning</li>
          <li><strong>Complex Routing:</strong> Navigating around structural obstacles</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section1_3: Section = {
  title: "Flexible Conduit Applications",
  description: "Using flexible conduit for specific installations",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Identify different types of flexible conduit and their applications</li>
            <li>Understand proper installation techniques for flexible conduit</li>
            <li>Select appropriate fittings and supports for flexible systems</li>
            <li>Apply flexible conduit correctly for equipment connections</li>
            <li>Follow safety and regulatory requirements for flexible conduit installations</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Flexible Conduit Systems" 
        content={<SectionContent />}
      />
    </>
  )
};
