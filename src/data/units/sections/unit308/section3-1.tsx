
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import { SectionData } from './types';

export const section3_1: SectionData = {
  title: "Professional Bodies and Associations",
  description: "Understanding industry bodies and their importance to electricians",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand the role and purpose of professional bodies in the electrical industry</li>
            <li>Identify key industry associations and their specific functions</li>
            <li>Recognize the benefits of membership or registration with these organizations</li>
            <li>Learn how to maintain good standing with professional organizations</li>
          </ul>
        }
      />
      
      <ContentSection 
        title="Key Industry Bodies"
        content={
          <div className="space-y-5">
            <div className="bg-[#353a2c] p-4 rounded-lg">
              <h3 className="text-lg font-medium text-[#FFC900]">NICEIC (National Inspection Council for Electrical Installation Contracting)</h3>
              <div className="mt-2 space-y-2">
                <p><span className="font-medium">Purpose:</span> The UK's leading voluntary regulatory body for the electrical contracting industry.</p>
                <p><span className="font-medium">Key Functions:</span></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Assesses the technical competence of electrical contractors</li>
                  <li>Maintains a register of approved contractors</li>
                  <li>Provides certification for electrical installation work</li>
                  <li>Offers technical advice and support</li>
                  <li>Promotes safety and compliance with regulations</li>
                </ul>
                <p><span className="font-medium">Benefits of Registration:</span></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Enhanced professional credibility with customers and local authorities</li>
                  <li>Access to technical helpline and updates</li>
                  <li>Use of the NICEIC logo, a recognized mark of quality</li>
                  <li>Listing on the NICEIC website for customer referrals</li>
                  <li>Insurance-backed warranties for work</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-lg">
              <h3 className="text-lg font-medium text-[#FFC900]">NAPIT (National Association of Professional Inspectors and Testers)</h3>
              <div className="mt-2 space-y-2">
                <p><span className="font-medium">Purpose:</span> A government-approved certification body for building services trades.</p>
                <p><span className="font-medium">Key Functions:</span></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Operates competent person schemes for electrical and other trades</li>
                  <li>Provides training and technical support</li>
                  <li>Registers qualified tradespeople</li>
                  <li>Develops industry standards and best practices</li>
                  <li>Offers inspection and certification services</li>
                </ul>
                <p><span className="font-medium">Benefits of Membership:</span></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Ability to self-certify work under Building Regulations</li>
                  <li>Technical support and guidance</li>
                  <li>Regular updates on industry developments</li>
                  <li>Discounted training and events</li>
                  <li>Professional recognition and credentials</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-lg">
              <h3 className="text-lg font-medium text-[#FFC900]">ECA (Electrical Contractors' Association)</h3>
              <div className="mt-2 space-y-2">
                <p><span className="font-medium">Purpose:</span> The UK's leading trade association representing electrical contractors.</p>
                <p><span className="font-medium">Key Functions:</span></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Provides business support and advice to member companies</li>
                  <li>Lobbies government and other bodies on industry issues</li>
                  <li>Develops technical standards and guidance</li>
                  <li>Offers legal and commercial advice</li>
                  <li>Promotes best practice and innovation</li>
                </ul>
                <p><span className="font-medium">Benefits of Membership:</span></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Business and legal support services</li>
                  <li>Technical advice and guidance</li>
                  <li>Access to industry-standard contracts and documentation</li>
                  <li>Discounted training and events</li>
                  <li>Representation on industry matters</li>
                  <li>Warranty schemes and insurance services</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-lg">
              <h3 className="text-lg font-medium text-[#FFC900]">JIB (Joint Industry Board)</h3>
              <div className="mt-2 space-y-2">
                <p><span className="font-medium">Purpose:</span> An impartial organization that sets the standards for employment, welfare, and apprentice training in the electrical contracting industry.</p>
                <p><span className="font-medium">Key Functions:</span></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Sets and monitors industry employment standards</li>
                  <li>Manages grading and registration of operatives</li>
                  <li>Administers employee benefits and welfare schemes</li>
                  <li>Oversees apprenticeship frameworks</li>
                  <li>Issues JIB cards that verify qualifications and status</li>
                </ul>
                <p><span className="font-medium">Benefits of Registration:</span></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Official recognition of qualifications and experience</li>
                  <li>Industry-recognized grading system</li>
                  <li>Access to welfare benefits</li>
                  <li>ECS (Electrotechnical Certification Scheme) card for site access</li>
                  <li>Standardized employment terms and conditions</li>
                </ul>
              </div>
            </div>
          </div>
        }
      />
      
      <ContentSection 
        title="Value of Professional Registration"
        content={
          <div className="space-y-4">
            <p>
              Registration or membership with professional bodies provides numerous benefits:
            </p>
            
            <h3 className="text-lg font-medium">For Individual Electricians:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Professional recognition of skills and competence</li>
              <li>Demonstrates commitment to quality and standards</li>
              <li>Access to technical support and latest industry information</li>
              <li>Opportunities for networking and professional development</li>
              <li>Enhanced job prospects and earning potential</li>
              <li>Clear pathway for career progression</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">For Electrical Businesses:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Competitive advantage in tendering for contracts</li>
              <li>Customer confidence through recognized quality marks</li>
              <li>Access to technical and business support</li>
              <li>Ability to self-certify work under Building Regulations</li>
              <li>Marketing benefits from association with respected organizations</li>
              <li>Simplified compliance with legal and regulatory requirements</li>
              <li>Protection through insurance-backed warranties and schemes</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">Maintaining Good Standing:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Regular reassessment of technical competence</li>
              <li>Continuing professional development</li>
              <li>Adherence to codes of practice and ethical standards</li>
              <li>Proper documentation and certification of work</li>
              <li>Timely renewal of memberships and registrations</li>
              <li>Appropriate insurance coverage</li>
            </ul>
          </div>
        }
      />
    </>
  ),
};
