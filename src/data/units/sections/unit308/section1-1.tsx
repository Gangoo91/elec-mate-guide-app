
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import { SectionData } from './types';

export const section1_1: SectionData = {
  title: "Understanding Roles in Building Services Engineering",
  description: "Explore different job roles and career paths in the electrical industry",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Identify different professional roles within building services engineering</li>
            <li>Understand the responsibilities and daily tasks of various electrical industry positions</li>
            <li>Recognize the qualifications and skills needed for different career paths</li>
            <li>Compare the advantages and challenges of different roles in the industry</li>
          </ul>
        }
      />
      
      <ContentSection 
        title="Key Roles in the Electrical Industry"
        content={
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Electrician</h3>
            <p>
              The foundation role in the industry, responsible for installing, maintaining and repairing electrical systems in residential, commercial and industrial settings.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Installs wiring, lighting, power outlets and distribution systems</li>
              <li>Diagnoses electrical faults and performs repairs</li>
              <li>Works with blueprints and technical diagrams</li>
              <li>Ensures installations comply with relevant regulations and standards</li>
              <li>Typically requires Level 3 electrical qualification and AM2 assessment</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">Maintenance Electrician</h3>
            <p>
              Specializes in maintaining and repairing electrical systems, often working in industrial or commercial settings with complex equipment.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Performs preventative maintenance on electrical systems</li>
              <li>Responds quickly to electrical failures and emergencies</li>
              <li>Maintains records of maintenance activities</li>
              <li>Often works with programmable logic controllers (PLCs) and automated systems</li>
              <li>Requires strong troubleshooting skills and maintenance experience</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">Project Manager</h3>
            <p>
              Oversees electrical projects from planning to completion, managing resources, timelines, and budgets.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Develops project plans and schedules</li>
              <li>Manages electrical teams and coordinates with other trades</li>
              <li>Ensures projects meet quality standards and are delivered on time</li>
              <li>Handles client communication and reporting</li>
              <li>Typically requires extensive electrical experience plus project management qualifications</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">Estimator</h3>
            <p>
              Calculates the cost of electrical projects and prepares quotes and bids.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Analyzes plans and specifications to determine material requirements</li>
              <li>Calculates labor costs and time requirements</li>
              <li>Prepares detailed quotations for clients</li>
              <li>Negotiates with suppliers for competitive pricing</li>
              <li>Requires strong mathematical skills and technical knowledge</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">Building Services Engineer</h3>
            <p>
              Designs and specifies electrical systems for buildings as part of the overall building services.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Designs electrical distribution, lighting, and power systems</li>
              <li>Works with architects and structural engineers on building designs</li>
              <li>Ensures designs meet building regulations and energy efficiency standards</li>
              <li>Uses computer-aided design (CAD) and building information modeling (BIM)</li>
              <li>Often requires a degree in electrical or building services engineering</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">Contracts Manager</h3>
            <p>
              Manages the commercial and contractual aspects of electrical projects.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Negotiates and administers contracts with clients and subcontractors</li>
              <li>Manages variations and additional works</li>
              <li>Oversees financial aspects including valuations and payments</li>
              <li>Resolves contractual disputes</li>
              <li>Requires strong commercial knowledge and negotiation skills</li>
            </ul>
          </div>
        }
      />
      
      <ContentSection 
        title="Comparing Roles: Responsibilities and Requirements"
        content={
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#353a2c]">
                  <th className="p-2 border border-[#FFC900]/30 text-left">Role</th>
                  <th className="p-2 border border-[#FFC900]/30 text-left">Key Responsibilities</th>
                  <th className="p-2 border border-[#FFC900]/30 text-left">Typical Requirements</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-[#FFC900]/30">Electrician</td>
                  <td className="p-2 border border-[#FFC900]/30">Installation, maintenance, fault-finding</td>
                  <td className="p-2 border border-[#FFC900]/30">Level 3 Electrical qualification, AM2 assessment</td>
                </tr>
                <tr className="bg-[#353a2c]/30">
                  <td className="p-2 border border-[#FFC900]/30">Maintenance Electrician</td>
                  <td className="p-2 border border-[#FFC900]/30">System maintenance, emergency repairs</td>
                  <td className="p-2 border border-[#FFC900]/30">Electrical qualification plus industrial experience</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#FFC900]/30">Project Manager</td>
                  <td className="p-2 border border-[#FFC900]/30">Project planning, team management, client liaison</td>
                  <td className="p-2 border border-[#FFC900]/30">Electrical experience plus project management qualification</td>
                </tr>
                <tr className="bg-[#353a2c]/30">
                  <td className="p-2 border border-[#FFC900]/30">Estimator</td>
                  <td className="p-2 border border-[#FFC900]/30">Cost calculation, quotation preparation</td>
                  <td className="p-2 border border-[#FFC900]/30">Technical knowledge, mathematical skills</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#FFC900]/30">Building Services Engineer</td>
                  <td className="p-2 border border-[#FFC900]/30">System design, technical specifications</td>
                  <td className="p-2 border border-[#FFC900]/30">Degree in electrical/building services engineering</td>
                </tr>
                <tr className="bg-[#353a2c]/30">
                  <td className="p-2 border border-[#FFC900]/30">Contracts Manager</td>
                  <td className="p-2 border border-[#FFC900]/30">Contract administration, financial management</td>
                  <td className="p-2 border border-[#FFC900]/30">Commercial experience, negotiation skills</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
      />
    </>
  ),
};
