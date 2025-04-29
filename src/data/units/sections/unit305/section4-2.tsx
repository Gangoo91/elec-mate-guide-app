
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { Section } from './types';

const NuisanceTripping = () => {
  return (
    <LessonContent title="Nuisance Tripping Prevention">
      <p className="mb-4">
        Nuisance tripping occurs when protective devices operate unnecessarily, causing inconvenience, 
        disruption, and potential safety issues. Understanding how to prevent it is essential for reliable 
        electrical installations.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Common Causes of Nuisance Tripping</h4>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li><strong>Transient overvoltages:</strong> Lightning strikes, switching surges</li>
          <li><strong>High earth leakage currents:</strong> Cumulative effect from multiple devices</li>
          <li><strong>Voltage disturbances:</strong> Supply fluctuations, power quality issues</li>
          <li><strong>Incorrect device selection:</strong> Inappropriate ratings or characteristics</li>
          <li><strong>Faulty equipment:</strong> Deteriorating insulation, damaged components</li>
          <li><strong>Harmonic distortion:</strong> From electronic equipment and non-linear loads</li>
          <li><strong>Moisture ingress:</strong> Especially in outdoor or damp installations</li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">RCD Nuisance Tripping</h4>
          <p className="mb-2">Residual Current Devices are particularly prone to nuisance tripping due to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Normal earth leakage:</strong> All equipment has some level of earth leakage current</li>
            <li><strong>Capacitive effects:</strong> Especially in long cable runs</li>
            <li><strong>Transient currents:</strong> From motor starting, switching operations</li>
            <li><strong>EMI/RFI interference:</strong> From external sources</li>
            <li><strong>Multiple devices:</strong> Cumulative effect of many devices with small leakage currents</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Prevention Strategies</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Circuit segregation:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Separate high-leakage circuits from others</li>
                <li>Dedicate RCDs to specific circuit types</li>
                <li>Split loads across multiple RCDs</li>
              </ul>
            </li>
            <li><strong>RCD selection:</strong>
              <ul className="list-disc pl-6 mt-1">
                <li>Type AC: Standard RCDs for general use</li>
                <li>Type A: For equipment with electronic components (half-wave rectified)</li>
                <li>Type B: For three-phase equipment with electronic drives</li>
                <li>Type S or time-delayed: For discrimination purposes</li>
              </ul>
            </li>
            <li><strong>Surge protection:</strong> Install surge protection devices (SPDs)</li>
            <li><strong>Higher sensitivity settings:</strong> Use 100mA or 300mA RCDs where appropriate</li>
            <li><strong>Load assessment:</strong> Calculate total earth leakage to ensure it's below 30% of RCD rating</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Design Implementation</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Balanced loads:</strong> Ensure good phase balance on three-phase systems</li>
          <li><strong>Regular maintenance:</strong> Check insulation resistance periodically</li>
          <li><strong>Power factor correction:</strong> Apply at point of use for motor loads</li>
          <li><strong>Harmonic filters:</strong> For installations with significant non-linear loads</li>
          <li><strong>Super-immunized RCDs:</strong> Specifically designed for high EMI environments</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section4_2: Section = {
  title: "Nuisance Tripping Prevention",
  description: "Strategies for preventing nuisance tripping in electrical installations",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Identify common causes of nuisance tripping in electrical installations</li>
            <li>Understand different types of RCDs and their applications</li>
            <li>Learn strategies to prevent unwanted operation of protective devices</li>
            <li>Develop skills to design installations with improved reliability</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Preventing Nuisance Tripping" 
        content={<NuisanceTripping />}
      />
    </>
  )
};
