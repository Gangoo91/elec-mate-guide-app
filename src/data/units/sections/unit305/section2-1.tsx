
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { Section } from './types';

const ProtectiveDevices = () => {
  return (
    <LessonContent title="Selection of Protective Devices">
      <p className="mb-4">
        Selecting the correct protective devices is crucial for ensuring safety and compliance in electrical installations.
        These devices protect against overcurrent, earth faults, and provide additional protection against electric shock.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Miniature Circuit Breakers (MCBs)</h4>
        <p className="mb-2">MCBs provide protection against overcurrent and short circuits. They are classified by type:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li><strong>Type B:</strong> Trips at 3-5 times rated current. Suitable for resistive loads (lighting, heating)</li>
          <li><strong>Type C:</strong> Trips at 5-10 times rated current. Suitable for slightly inductive loads (small motors)</li>
          <li><strong>Type D:</strong> Trips at 10-20 times rated current. For highly inductive loads (motors, transformers)</li>
        </ul>
        <p className="mt-2">MCBs are also rated by current (6A, 10A, 16A, 20A, 32A, 40A, etc.) and breaking capacity (typically 6kA, 10kA).</p>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Residual Current Devices (RCDs)</h4>
          <p className="mb-2">RCDs provide protection against earth leakage currents and additional protection against electric shock.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>30mA RCDs:</strong> Used for additional protection against electric shock (socket outlets, mobile equipment)</li>
            <li><strong>100mA RCDs:</strong> Often used for fire protection</li>
            <li><strong>300mA RCDs:</strong> Typically used for distribution circuits</li>
            <li><strong>Time-delayed RCDs:</strong> Used to provide discrimination between devices</li>
          </ul>
          <p className="mt-2">BS 7671 requires 30mA RCD protection for:</p>
          <ul className="list-disc pl-6 space-y-1 mt-1">
            <li>Socket outlets rated up to 32A</li>
            <li>Mobile equipment used outdoors up to 32A</li>
            <li>All circuits in bathrooms and shower rooms</li>
            <li>Cables embedded in walls at depths less than 50mm</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Residual Current Breakers with Overcurrent protection (RCBOs)</h4>
          <p className="mb-2">RCBOs combine the functionality of an MCB and an RCD in a single device, providing:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Overcurrent protection (like an MCB)</li>
            <li>Earth leakage protection (like an RCD)</li>
            <li>Protection against short circuits</li>
          </ul>
          <p className="mt-2">Advantages of RCBOs:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Individual circuit protection - only the affected circuit trips</li>
            <li>Space saving in consumer units</li>
            <li>Suitable for critical circuits where selective protection is needed</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Selection Criteria</h4>
        <p className="mb-2">When selecting protective devices, consider:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Load characteristics:</strong> Resistive, inductive, capacitive</li>
          <li><strong>Circuit current rating:</strong> Must match or exceed design current</li>
          <li><strong>Fault level:</strong> Breaking capacity must exceed maximum prospective fault current</li>
          <li><strong>Disconnection time:</strong> Must meet requirements for automatic disconnection</li>
          <li><strong>Discrimination:</strong> Ensure proper coordination with other protective devices</li>
          <li><strong>Environmental conditions:</strong> Temperature, dust, moisture</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section2_1: Section = {
  title: "Protective Devices",
  description: "Selection of MCBs, RCDs, RCBOs",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand different types of protective devices and their applications</li>
            <li>Learn selection criteria for MCBs, RCDs, and RCBOs</li>
            <li>Know when and where specific protective devices are required by regulations</li>
            <li>Understand discrimination between protective devices</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Types of Protective Devices" 
        content={<ProtectiveDevices />}
      />
    </>
  )
};
