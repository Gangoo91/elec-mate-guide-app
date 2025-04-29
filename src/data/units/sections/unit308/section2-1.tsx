
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import { SectionData } from './types';

export const section2_1: SectionData = {
  title: "Career Pathways and Progression",
  description: "Understanding career progression paths in the electrical industry",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand the typical career progression paths in the electrical industry</li>
            <li>Recognize the importance of continuing professional development (CPD)</li>
            <li>Identify key additional qualifications that enhance career prospects</li>
            <li>Learn about the requirements for advancing to higher positions</li>
          </ul>
        }
      />
      
      <ContentSection 
        title="Career Progression Pathway"
        content={
          <div className="space-y-4">
            <p>
              A typical career progression in the electrical industry follows these steps, though individual paths may vary:
            </p>
            
            <div className="bg-[#353a2c] p-4 rounded-lg my-4">
              <div className="flex flex-col md:flex-row items-center justify-between text-center">
                <div className="bg-[#FFC900]/20 p-3 rounded-lg m-2 w-full md:w-auto">
                  <p className="font-semibold">Apprentice</p>
                </div>
                <div className="text-[#FFC900]">➔</div>
                <div className="bg-[#FFC900]/20 p-3 rounded-lg m-2 w-full md:w-auto">
                  <p className="font-semibold">Qualified Electrician</p>
                </div>
                <div className="text-[#FFC900]">➔</div>
                <div className="bg-[#FFC900]/20 p-3 rounded-lg m-2 w-full md:w-auto">
                  <p className="font-semibold">Approved Electrician</p>
                </div>
                <div className="text-[#FFC900]">➔</div>
                <div className="bg-[#FFC900]/20 p-3 rounded-lg m-2 w-full md:w-auto">
                  <p className="font-semibold">Technician</p>
                </div>
                <div className="text-[#FFC900]">➔</div>
                <div className="bg-[#FFC900]/20 p-3 rounded-lg m-2 w-full md:w-auto">
                  <p className="font-semibold">Engineer</p>
                </div>
                <div className="text-[#FFC900]">➔</div>
                <div className="bg-[#FFC900]/20 p-3 rounded-lg m-2 w-full md:w-auto">
                  <p className="font-semibold">Manager</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-lg font-medium">Progression Steps Explained</h3>
            
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <span className="font-medium">Apprentice:</span> Entry-level position focused on learning the trade through a combination of practical work and classroom education. Typically lasts 3-4 years, leading to Level 3 qualification.
              </li>
              <li>
                <span className="font-medium">Qualified Electrician:</span> Has completed apprenticeship and gained relevant qualifications (Level 3 Diploma/NVQ) and the industry AM2 assessment. Capable of working independently on installations.
              </li>
              <li>
                <span className="font-medium">Approved Electrician:</span> A more experienced electrician with additional qualifications (often including 2391 Inspection & Testing) who can supervise others and sign off work. Often has 3-5 years post-qualification experience.
              </li>
              <li>
                <span className="font-medium">Technician:</span> Possesses specialized knowledge in particular areas such as testing, industrial systems, or building management systems. May hold EngTech professional registration.
              </li>
              <li>
                <span className="font-medium">Engineer:</span> Typically has advanced qualifications (HNC/HND or degree) and focuses on design, planning, and technical problem-solving. May work towards Incorporated Engineer (IEng) status.
              </li>
              <li>
                <span className="font-medium">Manager:</span> Oversees projects, teams, or departments. Requires strong leadership and commercial skills in addition to technical knowledge. May have further qualifications in management or business.
              </li>
            </ul>
          </div>
        }
      />
      
      <ContentSection 
        title="Continuing Professional Development (CPD)"
        content={
          <div className="space-y-4">
            <p>
              Continuing Professional Development is essential for maintaining and enhancing your skills throughout your career:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Keeps knowledge current with changing technologies and regulations</li>
              <li>Demonstrates commitment to professional standards</li>
              <li>Required for membership in professional bodies and to maintain certifications</li>
              <li>Enhances career prospects and earning potential</li>
              <li>Builds confidence and competence in new areas</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">CPD Activities Include:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Formal courses and qualifications</li>
              <li>Workshops and seminars</li>
              <li>Industry conferences and exhibitions</li>
              <li>Online learning and webinars</li>
              <li>Reading industry publications</li>
              <li>Participating in professional association activities</li>
              <li>Manufacturer training on new products and systems</li>
            </ul>
          </div>
        }
      />
      
      <ContentSection 
        title="Key Additional Qualifications"
        content={
          <div className="space-y-4">
            <p>
              These additional qualifications can significantly enhance your career prospects:
            </p>
            
            <h3 className="text-lg font-medium">2391 Inspection & Testing</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Essential for verifying electrical installations</li>
              <li>Required for signing off work and certification</li>
              <li>Opens doors to specialized testing roles</li>
              <li>Typically includes Level 3 award in initial verification and periodic inspection</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-3">Electric Vehicle Charging Installation</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Rapidly growing sector with increasing demand</li>
              <li>Qualifies you for government-approved installer registers</li>
              <li>Provides access to grants and funding schemes</li>
              <li>Usually a Level 3 award covering installation requirements</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-3">Solar PV Installation</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Growing renewable energy sector with strong future prospects</li>
              <li>Leads to MCS (Microgeneration Certification Scheme) accreditation</li>
              <li>Combines electrical skills with renewable technology</li>
              <li>Typically a Level 3 award in design and installation</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-3">Other Valuable Qualifications:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>18th Edition Wiring Regulations updates</li>
              <li>Fire alarm system design and installation</li>
              <li>Hazardous area installation (CompEx)</li>
              <li>Building management systems</li>
              <li>HNC/HND in Electrical Engineering</li>
              <li>Project management qualifications (APM, Prince2)</li>
              <li>Health and safety qualifications (NEBOSH, IOSH)</li>
            </ul>
          </div>
        }
      />
    </>
  ),
};
