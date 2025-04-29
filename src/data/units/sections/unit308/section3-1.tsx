
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { SectionData } from './types';

const ProfessionalBodies = () => {
  return (
    <LessonContent title="Professional Bodies and Associations">
      <p className="mb-4">
        Professional bodies and industry associations play a vital role in the electrical sector, 
        providing standards, guidance, training, and representation for individuals and businesses.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">NICEIC</h4>
        <p className="mb-2">
          The National Inspection Council for Electrical Installation Contracting is the UK's leading voluntary 
          regulatory body for the electrical contracting industry.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Key function:</strong> Assessment and certification of electrical contractors</li>
          <li><strong>Registration types:</strong> Domestic, commercial, industrial sectors</li>
          <li><strong>Assessment process:</strong> Rigorous inspection of work quality, technical competence, and documentation</li>
          <li><strong>Benefits of registration:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Enhanced credibility with clients</li>
              <li>Access to technical helpline</li>
              <li>Use of NICEIC logo</li>
              <li>Listing on NICEIC website finder</li>
              <li>Work covered by Platinum Promise warranty</li>
            </ul>
          </li>
          <li><strong>Requirements:</strong> Qualified supervisor with appropriate qualifications, regular assessments</li>
        </ul>
      </div>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">NAPIT</h4>
        <p className="mb-2">
          The National Association of Professional Inspectors and Testers is a government-approved membership 
          scheme operator for tradespeople in the building services and fabric sector.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Coverage:</strong> Electrical, heating, plumbing, ventilation, and renewable energy sectors</li>
          <li><strong>Registration benefits:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Demonstration of compliance with building regulations</li>
              <li>Technical support and updates</li>
              <li>Insurance-backed warranties</li>
              <li>Marketing materials and consumer recognition</li>
              <li>Training opportunities</li>
            </ul>
          </li>
          <li><strong>Requirements:</strong> Qualifications, insurance, regular assessments</li>
          <li><strong>Additional services:</strong> Training, publications, technical resources</li>
        </ul>
      </div>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">ECA (Electrical Contractors' Association)</h4>
        <p className="mb-2">
          The UK's leading trade association representing electrical, electrotechnical and other 
          engineering contractors.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Focus:</strong> Business support and representation for electrical contracting companies</li>
          <li><strong>Member benefits:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Business and commercial support</li>
              <li>Technical service and guidance</li>
              <li>Industry representation and lobbying</li>
              <li>Discounted services (insurance, debt recovery, etc.)</li>
              <li>Training and skills development</li>
              <li>Warranty and bond schemes</li>
            </ul>
          </li>
          <li><strong>Requirements:</strong> Technical standards, financial stability, insurance</li>
          <li><strong>Industry influence:</strong> Significant voice in regulatory development and policy</li>
        </ul>
      </div>
      
      <div className="bg-[#2a2d24] p-4 rounded-md">
        <h4 className="font-medium text-[#FFC900] mb-2">JIB (Joint Industry Board)</h4>
        <p className="mb-2">
          An impartial organization that sets the standards for employment, welfare, grading, and training in 
          the electrical contracting industry.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Key functions:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Industry grading and registration (ECS cards)</li>
              <li>Setting employment terms and conditions</li>
              <li>Operating industry pension scheme</li>
              <li>Skills development and training standards</li>
              <li>Dispute resolution</li>
            </ul>
          </li>
          <li><strong>ECS Card System:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Industry-recognized proof of qualification and identity</li>
              <li>Different card colors denoting different levels</li>
              <li>Required for access to many construction sites</li>
              <li>Verification of qualifications and training</li>
            </ul>
          </li>
          <li><strong>Structure:</strong> Partnership between ECA (employers) and Unite the Union (employees)</li>
        </ul>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Benefits of Membership and Registration</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Professional credibility:</strong> Demonstrates commitment to quality and standards</li>
          <li><strong>Customer reassurance:</strong> Provides confidence in technical competence and work quality</li>
          <li><strong>Business opportunities:</strong> Required for certain types of work (e.g., Part P, local authority)</li>
          <li><strong>Technical support:</strong> Access to helplines, updates, and guidance</li>
          <li><strong>Insurance benefits:</strong> Warranty schemes, reduced insurance premiums</li>
          <li><strong>Professional development:</strong> Training, events, publications</li>
          <li><strong>Industry influence:</strong> Input to regulations and standards development</li>
          <li><strong>Marketing advantage:</strong> Use of logos and membership status in advertising</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section3_1: SectionData = {
  title: "Industry Bodies and Benefits",
  description: "Understanding NICEIC, NAPIT, ECA, JIB and their importance",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Identify the major professional bodies in the electrical industry</li>
            <li>Understand the role and function of each organization</li>
            <li>Recognize the benefits of membership and registration</li>
            <li>Learn about the requirements for joining these organizations</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Professional Bodies and Their Benefits" 
        content={<ProfessionalBodies />}
      />
    </>
  )
};
