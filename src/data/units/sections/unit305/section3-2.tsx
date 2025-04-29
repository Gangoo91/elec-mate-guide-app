
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { Section } from './types';

const VoltageDropCalculations = () => {
  return (
    <LessonContent title="Voltage Drop Calculations">
      <p className="mb-4">
        Ensuring voltage drop remains within permissible limits is essential for the proper operation of 
        electrical equipment and compliance with wiring regulations.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Maximum Permitted Voltage Drop</h4>
        <p>BS 7671 specifies the following maximum voltage drops between the origin of the installation and the load:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Lighting circuits: 3% of nominal voltage (6.9V for 230V)</li>
          <li>Other circuits: 5% of nominal voltage (11.5V for 230V)</li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Calculation Method</h4>
          <p className="mb-2">Voltage drop can be calculated using the following formula:</p>
          <div className="bg-[#1a1d17] p-4 rounded-md font-mono text-center">
            Vd = I × L × (R × cos φ + X × sin φ)
          </div>
          <p className="mt-2">For practical purposes with single-phase circuits, this is often simplified to:</p>
          <div className="bg-[#1a1d17] p-4 rounded-md font-mono text-center mt-2">
            Vd = I × L × 2 × mV/A/m ÷ 1000
          </div>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>I = Design current in amperes (A)</li>
            <li>L = Route length in meters (m)</li>
            <li>mV/A/m = Voltage drop per ampere per meter (from tables)</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Voltage Drop Values</h4>
          <p className="mb-2">Voltage drop values (mV/A/m) depend on:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Conductor material (copper or aluminum)</li>
            <li>Conductor cross-sectional area</li>
            <li>Type of insulation</li>
            <li>Operating temperature</li>
            <li>AC or DC supply</li>
          </ul>
          <p className="mt-2">Values are typically obtained from tables in the wiring regulations or manufacturer's data.</p>
        </div>
      </div>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Example Calculation</h4>
        <p>For a 20m circuit with 10A load using 2.5mm² copper cable (mV/A/m = 18):</p>
        <div className="font-mono mt-2">
          <p>Vd = 10A × 20m × 2 × 18mV/A/m ÷ 1000</p>
          <p>Vd = 7.2V</p>
          <p>As a percentage: 7.2V ÷ 230V × 100 = 3.1%</p>
        </div>
        <p className="mt-2">This exceeds the 3% limit for lighting but would be acceptable for other loads (within 5%).</p>
      </div>
    </LessonContent>
  );
};

export const section3_2: Section = {
  title: "Voltage Drop Calculations",
  description: "Calculating voltage drop and ensuring compliance with regulations",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand the concept of voltage drop in electrical circuits</li>
            <li>Learn how to calculate voltage drop using appropriate formulas</li>
            <li>Identify maximum permitted voltage drop values for different circuits</li>
            <li>Apply voltage drop calculations in practical installation design</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Understanding Voltage Drop" 
        content={<VoltageDropCalculations />}
      />
    </>
  )
};
