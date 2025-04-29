
import React from 'react';
import { Section } from './types';

export const section4_1: Section = {
  id: "4.1",
  title: "Discrimination and Coordination",
  description: "Principles of protective device coordination and discrimination",
  content: (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-[#FFC900] mb-4">Learning Objectives</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Understand the principle of discrimination between protective devices</li>
          <li>Learn how to minimize nuisance tripping in electrical installations</li>
          <li>Master the coordination of protective devices for optimal circuit protection</li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold text-[#FFC900] mb-4">Principles of Discrimination</h3>
        <p className="mb-4">
          Discrimination (or selectivity) is the coordination of protective devices so that only the device nearest 
          to a fault operates, minimizing disruption to the rest of the installation.
        </p>
        
        <p className="mb-4">
          For proper discrimination to occur:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>The upstream device must have a higher current rating than the downstream device</li>
          <li>The time/current characteristics of devices must be coordinated</li>
          <li>The fault level at each point in the system must be considered</li>
        </ul>
        
        <div className="bg-[#2a2d24] p-4 rounded-md mb-6">
          <h4 className="font-medium text-[#FFC900] mb-2">Types of Discrimination</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium">Current Discrimination:</span> Based on the different current settings of the devices.
              Typically requires a ratio of at least 1.5:1 or 2:1 between upstream and downstream devices.
            </li>
            <li>
              <span className="font-medium">Time Discrimination:</span> Achieved by introducing intentional time delays in upstream devices.
              Often used in larger industrial installations.
            </li>
            <li>
              <span className="font-medium">Zone Discrimination:</span> Uses communication between devices to achieve optimal selectivity.
              Common in more sophisticated systems.
            </li>
            <li>
              <span className="font-medium">Energy Discrimination:</span> Based on the energy let-through characteristics of devices.
              Often utilized with MCBs and fuses.
            </li>
          </ul>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold text-[#FFC900] mb-4">Avoiding Nuisance Tripping</h3>
        <p className="mb-4">
          Nuisance tripping can disrupt service and reduce productivity. Common causes include:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Inrush currents from motors or transformers</li>
          <li>Harmonic currents from electronic equipment</li>
          <li>Leakage currents in long cable runs</li>
          <li>Incorrect device type selection</li>
          <li>Environmental conditions (e.g., moisture ingress)</li>
        </ul>
        
        <p className="mb-4">
          Strategies to minimize nuisance tripping:
        </p>
        
        <div className="bg-[#2a2d24] p-4 rounded-md space-y-2 mb-6">
          <p>1. Select appropriate MCB types (B, C, D) based on load characteristics</p>
          <p>2. Use high-immunity RCDs (Type A or F) for circuits with electronic equipment</p>
          <p>3. Correctly size protective devices for the actual load</p>
          <p>4. Separate sensitive circuits from those with high inrush currents</p>
          <p>5. Use time-delayed RCDs where appropriate</p>
          <p>6. Ensure proper maintenance to prevent insulation deterioration</p>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold text-[#FFC900] mb-4">Practical Applications</h3>
        <p className="mb-4">
          Example of discrimination in a typical installation:
        </p>
        
        <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
          <h4 className="font-medium text-[#FFC900] mb-2">Small Commercial Building</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Main incomer: 100A MCCB with adjustable settings</li>
            <li>Distribution boards: 63A MCBs</li>
            <li>Final circuits: 6A, 16A, 20A, 32A MCBs</li>
          </ul>
          <p className="mt-3">
            For discrimination between the 63A DB MCB and a 32A final circuit MCB:
          </p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Ensure the ratio is at least 1.5:1 (63 ÷ 32 = 1.97, which is acceptable)</li>
            <li>Check time/current curves from manufacturer data to ensure they don't overlap</li>
            <li>Consider using different MCB types (e.g., Type C for the DB MCB and Type B for final circuits)</li>
          </ul>
        </div>
        
        <p className="mb-4">
          Common discrimination issues:
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b border-[#FFC900]/20">
                <th className="py-2 px-3 text-left text-[#FFC900]">Scenario</th>
                <th className="py-2 px-3 text-left text-[#FFC900]">Problem</th>
                <th className="py-2 px-3 text-left text-[#FFC900]">Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-2 px-3 text-[#FFC900]/80">Fault on final circuit trips main RCD</td>
                <td className="py-2 px-3 text-[#FFC900]/80">No discrimination between RCDs</td>
                <td className="py-2 px-3 text-[#FFC900]/80">Use RCBOs for final circuits or time-delayed upstream RCD</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-2 px-3 text-[#FFC900]/80">High inrush current trips MCB</td>
                <td className="py-2 px-3 text-[#FFC900]/80">MCB type too sensitive</td>
                <td className="py-2 px-3 text-[#FFC900]/80">Upgrade to Type C or D MCB if appropriate</td>
              </tr>
              <tr>
                <td className="py-2 px-3 text-[#FFC900]/80">IT equipment causes RCD tripping</td>
                <td className="py-2 px-3 text-[#FFC900]/80">Harmonic currents affecting standard RCD</td>
                <td className="py-2 px-3 text-[#FFC900]/80">Use Type A or F RCDs designed for electronic loads</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
};

export default section4_1;
