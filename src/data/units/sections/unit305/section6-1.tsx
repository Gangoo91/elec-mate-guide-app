
import React from 'react';
import { Section } from './types';

export const section6_1: Section = {
  id: "6.1",
  title: "Health and Safety and Building Regulations",
  description: "Regulatory requirements and standards for electrical installations",
  content: (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-[#FFC900] mb-4">Learning Objectives</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Understand the requirements of BS 7671 (Wiring Regulations)</li>
          <li>Learn how Building Regulations affect electrical installation design</li>
          <li>Master the application of health and safety regulations in electrical work</li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold text-[#FFC900] mb-4">BS 7671: Requirements for Electrical Installations</h3>
        <p className="mb-4">
          BS 7671 (commonly known as the IET Wiring Regulations) is the national standard for electrical installations
          in the UK. The 18th Edition is the current version, and it specifies:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Safety principles for protection against electric shock</li>
          <li>Selection and erection of equipment</li>
          <li>Inspection and testing requirements</li>
          <li>Special installations and locations</li>
          <li>Energy efficiency considerations</li>
        </ul>
        
        <div className="bg-[#2a2d24] p-4 rounded-md mb-6">
          <h4 className="font-medium text-[#FFC900] mb-2">Key Design Considerations from BS 7671</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium">Protection against electric shock:</span> Application of 
              automatic disconnection times, RCD protection, and SELV/PELV systems
            </li>
            <li>
              <span className="font-medium">Protective measures:</span> Requirements for basic, fault, 
              and additional protection
            </li>
            <li>
              <span className="font-medium">Maximum disconnection times:</span> 0.4s for final circuits up to 32A, 
              5s for distribution circuits in TN systems
            </li>
            <li>
              <span className="font-medium">Surge protection:</span> Risk assessment required to determine 
              if SPDs are needed
            </li>
          </ul>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold text-[#FFC900] mb-4">Building Regulations</h3>
        <p className="mb-4">
          Building Regulations set standards for design and construction in the UK. For electrical 
          installations, the key sections are:
        </p>
        
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b border-[#FFC900]/20">
                <th className="py-2 px-3 text-left text-[#FFC900]">Regulation</th>
                <th className="py-2 px-3 text-left text-[#FFC900]">Key Requirements</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-2 px-3 text-[#FFC900]/80">Part P</td>
                <td className="py-2 px-3 text-[#FFC900]/80">
                  Safety of electrical installations in dwellings; requires notification of 
                  certain electrical work to building control
                </td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-2 px-3 text-[#FFC900]/80">Part L</td>
                <td className="py-2 px-3 text-[#FFC900]/80">
                  Conservation of fuel and power; affects lighting efficacy, controls, and 
                  energy efficiency of fixed building services
                </td>
              </tr>
              <tr>
                <td className="py-2 px-3 text-[#FFC900]/80">Part B</td>
                <td className="py-2 px-3 text-[#FFC900]/80">
                  Fire safety; influences cable selection, fire detection systems, emergency 
                  lighting, and escape routes
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="mb-4">
          Building Regulations compliance is typically demonstrated through:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Self-certification by a registered competent person</li>
          <li>Certification by a building control body</li>
          <li>Certification by a qualified third-party certifier</li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold text-[#FFC900] mb-4">Health and Safety Regulations</h3>
        <p className="mb-4">
          Electrical design must comply with various health and safety regulations:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <span className="font-medium">Electricity at Work Regulations 1989:</span> Requires electrical 
            systems to be constructed and maintained to prevent danger
          </li>
          <li>
            <span className="font-medium">Health and Safety at Work Act 1974:</span> General duties for 
            employers and employees regarding workplace safety
          </li>
          <li>
            <span className="font-medium">Construction (Design and Management) Regulations 2015:</span> Applies 
            to construction projects including electrical installations
          </li>
          <li>
            <span className="font-medium">Provision and Use of Work Equipment Regulations 1998:</span> Covers 
            equipment safety and maintenance requirements
          </li>
        </ul>
        
        <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
          <h4 className="font-medium text-[#FFC900] mb-2">Design Risk Assessment</h4>
          <p>
            Electrical designers must consider:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Risk identification and evaluation</li>
            <li>Implementing control measures using the hierarchy of control</li>
            <li>Safe access and working space around electrical equipment</li>
            <li>Future maintenance requirements</li>
            <li>Documentation of safety considerations in the design</li>
          </ul>
        </div>
        
        <p className="mb-4">
          Important note: Designers have legal responsibilities under CDM Regulations to:
        </p>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>Eliminate hazards where possible</li>
          <li>Reduce risks that cannot be eliminated</li>
          <li>Provide information about remaining risks</li>
          <li>Coordinate design work with others</li>
        </ul>
      </div>
    </div>
  )
};

export default section6_1;
