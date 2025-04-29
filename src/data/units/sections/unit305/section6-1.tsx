
import React from 'react';
import { Section305 } from './types';

export const section6_1: Section305 = {
  id: "6.1",
  title: "Health, Safety and Building Regulations",
  description: "Understanding the regulatory framework for electrical installations in buildings.",
  content: [
    {
      title: "Learning Objectives",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Understand BS 7671 Wiring Regulations and their application to design</li>
          <li>Learn the relevant Building Regulations affecting electrical installations</li>
          <li>Master energy efficiency considerations in electrical design</li>
          <li>Apply fire safety requirements to electrical installations</li>
        </ul>
      )
    },
    {
      title: "BS 7671 Wiring Regulations",
      content: (
        <div className="space-y-4">
          <p>
            BS 7671 (Requirements for Electrical Installations, IET Wiring Regulations) is the national standard 
            for electrical installations in the UK. Key design considerations include:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium">Protection against electric shock:</span> Includes both basic protection 
              (insulation, barriers, enclosures) and fault protection (earthing, bonding, automatic disconnection)
            </li>
            <li>
              <span className="font-medium">Protection against thermal effects:</span> Prevention of fire, burns, and 
              overheating from electrical equipment
            </li>
            <li>
              <span className="font-medium">Protection against overcurrent:</span> Proper selection and coordination of 
              protective devices
            </li>
            <li>
              <span className="font-medium">Isolation and switching:</span> Means to disconnect the installation or 
              individual circuits
            </li>
            <li>
              <span className="font-medium">Special locations:</span> Additional requirements for bathrooms, swimming pools, 
              outdoor installations, etc.
            </li>
          </ul>
          
          <div className="bg-[#2a2d24] p-4 rounded-md mt-3">
            <h4 className="font-medium text-[#FFC900] mb-2">Key Design Requirements in BS 7671</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Maximum disconnection times for fault protection</li>
              <li>Maximum voltage drop limits (3% for lighting, 5% for other uses)</li>
              <li>Minimum insulation resistance values</li>
              <li>Maximum earth fault loop impedance values</li>
              <li>Additional protection by 30mA RCD for socket outlets and cables in walls</li>
              <li>Particular requirements for special locations</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Building Regulations",
      content: (
        <div className="space-y-4">
          <p>
            Several Building Regulations directly affect electrical design:
          </p>
          
          <div className="space-y-3">
            <div className="bg-[#2a2d24] p-4 rounded-md">
              <h4 className="font-medium text-[#FFC900] mb-2">Part P: Electrical Safety</h4>
              <p>
                Requires that electrical installations in dwellings are designed, installed, inspected and tested to 
                provide reasonable protection against:
              </p>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Electric shock</li>
                <li>Fire hazards from electrical components</li>
                <li>Burns or other injuries from high temperatures</li>
              </ul>
              <p className="mt-2">
                Compliance is typically achieved by following BS 7671, and certain work must be notified to 
                building control or carried out by a competent person.
              </p>
            </div>
            
            <div className="bg-[#2a2d24] p-4 rounded-md">
              <h4 className="font-medium text-[#FFC900] mb-2">Part L: Conservation of Fuel and Power</h4>
              <p>
                Affects electrical design through:
              </p>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Energy-efficient lighting requirements (minimum 75% of fixed lighting to be low energy)</li>
                <li>Controls for heating and lighting systems</li>
                <li>Energy usage monitoring provisions</li>
                <li>Power factor correction considerations</li>
              </ul>
            </div>
            
            <div className="bg-[#2a2d24] p-4 rounded-md">
              <h4 className="font-medium text-[#FFC900] mb-2">Part B: Fire Safety</h4>
              <p>
                Influences electrical design through:
              </p>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Fire detection and alarm systems requirements</li>
                <li>Emergency lighting provisions</li>
                <li>Fire stopping around cable penetrations</li>
                <li>Requirements for escape routes</li>
              </ul>
            </div>
            
            <div className="bg-[#2a2d24] p-4 rounded-md">
              <h4 className="font-medium text-[#FFC900] mb-2">Part M: Access to and Use of Buildings</h4>
              <p>
                Affects electrical design through:
              </p>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Heights of socket outlets and switches</li>
                <li>Visual contrast requirements for electrical accessories</li>
                <li>Accessibility of controls</li>
                <li>Provision of facilities for people with disabilities</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Energy Efficiency Standards",
      content: (
        <div className="space-y-4">
          <p>
            Modern electrical installations should be designed with energy efficiency in mind:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium">Lighting design:</span> Use of LED technology, daylight harvesting, 
              presence detection, and smart controls
            </li>
            <li>
              <span className="font-medium">Power factor correction:</span> Reducing reactive power demand to 
              improve efficiency and reduce costs
            </li>
            <li>
              <span className="font-medium">Harmonics mitigation:</span> Reducing harmonic distortion that causes 
              additional losses and heating
            </li>
            <li>
              <span className="font-medium">Cable sizing:</span> Correct sizing to minimize losses while maintaining safety
            </li>
            <li>
              <span className="font-medium">Standby power reduction:</span> Incorporating switched socket outlets or 
              intelligent power management
            </li>
            <li>
              <span className="font-medium">Energy monitoring:</span> Sub-metering and energy management systems
            </li>
          </ul>
          
          <p className="mt-3">
            Specific considerations include:
          </p>
          
          <div className="bg-[#2a2d24] p-4 rounded-md space-y-2">
            <p>1. Compliance with Minimum Energy Efficiency Standards (MEES)</p>
            <p>2. Energy Performance Certificates (EPCs) requirements</p>
            <p>3. Building Research Establishment Environmental Assessment Method (BREEAM) standards</p>
            <p>4. Display Energy Certificates (DECs) for public buildings</p>
            <p>5. Part L compliance for new buildings and major renovations</p>
          </div>
        </div>
      )
    }
  ]
};
