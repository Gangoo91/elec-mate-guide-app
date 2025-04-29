
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { Section } from './types';

const DiscriminationPrinciples = () => {
  return (
    <LessonContent title="Principles of Discrimination">
      <p className="mb-4">
        Discrimination (or selectivity) is the coordination of protective devices to ensure that only 
        the device closest to a fault operates, minimizing disruption to the rest of the installation. 
        This enhances reliability and safety of electrical systems.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">What is Discrimination?</h4>
        <p className="mb-2">
          Discrimination occurs when a fault condition causes only the protective device closest to 
          the fault to operate, while all upstream devices remain closed.
        </p>
        <p>For example, in a home, if there is a fault on a socket circuit, ideally only the MCB 
          protecting that circuit should trip, not the main switch or upstream supplier's fuse.</p>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Types of Discrimination</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Current discrimination:</strong> Based on the current settings of devices</li>
            <li><strong>Time discrimination:</strong> Using devices with different operating times</li>
            <li><strong>Energy discrimination:</strong> Based on the let-through energy (I²t) of devices</li>
            <li><strong>Zone discrimination:</strong> Using communication between protective devices</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Achieving Discrimination</h4>
          <p className="mb-2">To achieve proper discrimination between protective devices:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Use an appropriate ratio between protective device ratings 
              (typically 1:1.5 to 1:2 between adjacent devices)</li>
            <li>Select devices from the same manufacturer's range designed for discrimination</li>
            <li>Consider using different device types at different levels (e.g., MCCBs for mains, MCBs for circuits)</li>
            <li>Implement time delays on upstream devices where appropriate</li>
            <li>Use RCBOs for individual circuits instead of a single RCD for multiple circuits</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">RCD Discrimination</h4>
        <p className="mb-2">
          For RCDs, discrimination can be achieved by:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Current rating: Upstream RCD should have at least 3 times the rated residual operating 
            current of the downstream RCD</li>
          <li>Time delay: Using time-delayed (S-type) RCDs upstream of instantaneous RCDs</li>
        </ul>
        <p className="mt-2">Example arrangement:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Main incoming switchboard: 300mA time-delayed RCD</li>
          <li>Distribution boards: 100mA time-delayed RCDs</li>
          <li>Final circuits: 30mA instantaneous RCDs or RCBOs</li>
        </ul>
      </div>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Important Considerations</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Full discrimination may not always be achievable, especially in smaller installations</li>
          <li>Manufacturer's data should be consulted for discrimination studies</li>
          <li>Critical circuits may require special consideration for discrimination</li>
          <li>Discrimination must never compromise safety of the installation</li>
          <li>Always verify discrimination during design stage using manufacturers' discrimination tables</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section4_1: Section = {
  title: "Principles of Discrimination",
  description: "Understanding how protective devices should coordinate during faults",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand the concept of discrimination between protective devices</li>
            <li>Learn different types of discrimination and how to achieve them</li>
            <li>Identify methods for coordinating MCBs, RCDs, and fuses</li>
            <li>Recognize the importance of discrimination for system reliability</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Discrimination Fundamentals" 
        content={<DiscriminationPrinciples />}
      />
    </>
  )
};
