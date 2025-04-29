
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { Section } from './types';

const BuildingRegulations = () => {
  return (
    <LessonContent title="Building Regulations">
      <p className="mb-4">
        Building Regulations set standards for design and construction to ensure the health, safety, 
        and welfare of people in and around buildings. Electrical installations must comply with 
        various parts of these regulations.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Part P: Electrical Safety</h4>
        <p className="mb-2">Part P covers electrical safety in dwellings and requires that:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Reasonable provision shall be made to ensure electrical safety</li>
          <li>Design and installation work must be carried out by competent persons</li>
          <li>Installations must be designed and installed in accordance with BS 7671</li>
          <li>Certain work must be notified to Building Control unless done by a registered competent person</li>
          <li>Certification must be provided for all notifiable work</li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Part L: Conservation of Fuel and Power</h4>
          <p className="mb-2">Part L has implications for electrical installations, including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Lighting efficiency:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Minimum efficacy requirements for fixed lighting</li>
                <li>Minimum percentage of low energy light fittings</li>
                <li>Controls to avoid unnecessary use</li>
              </ul>
            </li>
            <li><strong>Energy efficient equipment:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Efficient circulation pumps</li>
                <li>High-efficiency motors where specified</li>
                <li>Controls for heating and cooling systems</li>
              </ul>
            </li>
            <li><strong>Energy performance certificates:</strong> Required for buildings</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Other Relevant Building Regulations</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Part A:</strong> Structure - support for heavy electrical equipment</li>
            <li><strong>Part B:</strong> Fire safety - fire resistance, emergency lighting, fire alarms</li>
            <li><strong>Part C:</strong> Site preparation - protection against ground contaminants</li>
            <li><strong>Part E:</strong> Resistance to sound - acoustic considerations for equipment</li>
            <li><strong>Part F:</strong> Ventilation - requirements for ventilation of equipment rooms</li>
            <li><strong>Part M:</strong> Access to and use of buildings - height of switches, sockets</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Compliance Process</h4>
        <ol className="list-decimal pl-6 space-y-1">
          <li><strong>Notification:</strong> Submit plans or notify Building Control</li>
          <li><strong>Inspection:</strong> Work may be inspected at various stages</li>
          <li><strong>Certification:</strong> Provide appropriate certification upon completion</li>
          <li><strong>Registration:</strong> Register notifiable work with local authority</li>
        </ol>
        <p className="mt-2">
          Registered competent persons (e.g., those registered with NICEIC, NAPIT, ELECSA) can self-certify work.
        </p>
      </div>
    </LessonContent>
  );
};

export const section6_2: Section = {
  title: "Building Regulations",
  description: "Meeting requirements of Part P, Part L and other regulations",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand the key requirements of Part P (Electrical Safety) of the Building Regulations</li>
            <li>Identify implications of Part L (Conservation of Fuel and Power) for electrical installations</li>
            <li>Recognize other Building Regulations with requirements affecting electrical work</li>
            <li>Learn the compliance process for notifiable electrical work</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Building Regulations Requirements" 
        content={<BuildingRegulations />}
      />
    </>
  )
};
