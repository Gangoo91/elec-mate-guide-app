
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { Section } from './types';

const SectionContent = () => {
  return (
    <LessonContent title="PVC Conduit Installation">
      <p className="mb-4">
        PVC conduit is a cost-effective solution for electrical installations in many environments where 
        corrosion resistance is needed. This section covers the proper techniques for installing and 
        working with PVC conduit systems.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Advantages of PVC Conduit</h4>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Excellent corrosion resistance</li>
          <li>Lightweight and easy to handle</li>
          <li>No threading required - simple jointing methods</li>
          <li>Non-conductive - no earthing concerns</li>
          <li>Lower cost compared to metal alternatives</li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Cutting and Jointing</h4>
          <p className="mb-2">Proper cutting and jointing ensures secure installation:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Use a fine-tooth saw or PVC pipe cutter</li>
            <li>Ensure cuts are square and clean</li>
            <li>Remove burrs from cut edges</li>
            <li>Clean surfaces before applying PVC cement</li>
            <li>Use appropriate solvent cement for PVC conduit</li>
            <li>Join with a quarter-turn twist to ensure even adhesive distribution</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Bending PVC Conduit</h4>
          <p className="mb-2">Two methods can be used to bend PVC conduit:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Cold Bending:</strong> Using springs or formers for small diameter conduit</li>
            <li><strong>Heat Bending:</strong> Using hot air guns or heat boxes to soften the PVC</li>
            <li>Insert springs inside conduit to prevent kinking</li>
            <li>Heat evenly until the PVC becomes flexible</li>
            <li>Form bend and hold in position until cool</li>
            <li>Avoid overheating which can damage or discolor the PVC</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Installation Considerations</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Allow for thermal expansion (approximately 6mm per 10m per 10°C temperature change)</li>
          <li>Support at closer intervals than metal conduit (typically 600-800mm)</li>
          <li>Use expansion couplings for long runs</li>
          <li>Protect from direct sunlight to prevent UV degradation</li>
          <li>Consider temperature limitations in hot environments</li>
          <li>Not suitable for applications requiring fire resistance without special measures</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section1_2: Section = {
  title: "PVC Conduit Installation",
  description: "Methods for installing and working with PVC conduit",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Identify the different types of PVC conduit and their applications</li>
            <li>Demonstrate proper cutting and jointing techniques</li>
            <li>Apply appropriate bending methods for PVC conduit</li>
            <li>Understand support requirements and spacing</li>
            <li>Account for expansion and environmental factors in installation</li>
          </ul>
        }
      />
      
      <ContentSection
        title="PVC Conduit Systems" 
        content={<SectionContent />}
      />
    </>
  )
};
