
import React from 'react';
import LessonContent from "@/components/units/LessonContent";

const DesignPrinciples = () => {
  return (
    <LessonContent title="Electrical Installation Design Principles">
      <p className="mb-4">
        Designing electrical installations requires careful planning based on the building type and intended use. 
        Key considerations include:
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Building Type Considerations</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Domestic:</strong> Typically single-phase supplies with standard circuits for lighting, power, cooking, and heating</li>
          <li><strong>Commercial:</strong> Often three-phase supplies with higher load requirements and emergency systems</li>
          <li><strong>Industrial:</strong> Three-phase supplies with specialized power requirements for machinery and equipment</li>
        </ul>
      </div>
      
      <p className="mb-4">
        The design process follows these key steps:
      </p>
      
      <ol className="list-decimal pl-6 space-y-2">
        <li>Assess the client's requirements and building characteristics</li>
        <li>Calculate the maximum demand and diversity factors</li>
        <li>Determine supply requirements (single or three-phase)</li>
        <li>Select appropriate earthing arrangements</li>
        <li>Design individual circuits for specific functions</li>
        <li>Complete load distribution across phases (for three-phase supplies)</li>
        <li>Document the design with circuit schedules and diagrams</li>
      </ol>
    </LessonContent>
  );
};

export default DesignPrinciples;
