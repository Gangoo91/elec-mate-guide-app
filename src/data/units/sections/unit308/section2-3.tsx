
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { SectionData } from './types';

const AdditionalQualifications = () => {
  return (
    <LessonContent title="Additional Qualifications">
      <p className="mb-4">
        In the electrical industry, additional qualifications beyond your core training can significantly 
        enhance your career prospects, increase your earning potential, and open doors to specialized roles.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Key Additional Qualifications</h4>
        <div className="space-y-3">
          <div>
            <p className="font-medium">2391/2395 Inspection and Testing:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Essential for conducting electrical inspection and testing</li>
              <li>Required for signing off electrical installation certificates</li>
              <li>Demonstrates advanced understanding of electrical safety</li>
              <li>Often required for progression to Approved Electrician status</li>
              <li>Leads to work opportunities in testing and certification</li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium">Electric Vehicle Charging Point Installation:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Rapidly growing market with increasing demand</li>
              <li>Specialized qualification (e.g., C&G 2919)</li>
              <li>Required for OZEV approved installer status</li>
              <li>Opens access to government-funded installation schemes</li>
              <li>Future-proof skill as vehicle electrification increases</li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium">Solar PV Installation:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Growing renewable energy sector</li>
              <li>Qualifications such as C&G 2399 or equivalent</li>
              <li>MCS certification for access to incentive schemes</li>
              <li>Combined electrical and roofing skills</li>
              <li>Opportunities in both domestic and commercial sectors</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-[#2a2d24] p-4 rounded-md">
        <h4 className="font-medium text-[#FFC900] mb-2">Specialist Systems Qualifications</h4>
        <div className="space-y-3">
          <div>
            <p className="font-medium">Fire Alarm Systems:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Design, installation, and maintenance qualifications</li>
              <li>FIA qualifications or C&G 1851</li>
              <li>Critical safety systems with strict regulatory requirements</li>
              <li>Higher value specialist work</li>
              <li>Regular maintenance contracts provide stable income</li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium">Security Systems:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Intruder alarms, CCTV, access control</li>
              <li>Qualifications from bodies like SSAIB or NSI</li>
              <li>Combination of electrical and electronic skills</li>
              <li>Often leads to long-term maintenance contracts</li>
              <li>Growing sector due to security concerns</li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium">Data/Network Cabling:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Structured cabling qualifications</li>
              <li>Certifications from BICSI or manufacturers</li>
              <li>Clean, indoor work environment</li>
              <li>Growing demand with increasing connectivity needs</li>
              <li>Often higher value technical work</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-4 bg-[#2a2d24] p-4 rounded-md">
        <h4 className="font-medium text-[#FFC900] mb-2">Hazardous Areas Qualifications</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>CompEx Certification:</strong> For working in explosive atmospheres</li>
          <li>Required for oil, gas, pharmaceutical, and other industries</li>
          <li>Significantly higher pay rates due to specialized nature</li>
          <li>Various units covering different aspects (e.g., installation, inspection)</li>
          <li>Internationally recognized qualification</li>
          <li>Requires renewal every 5 years</li>
        </ul>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Higher Education Qualifications</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>HNC/HND in Electrical Engineering:</strong> Pathway to more technical and design roles</li>
          <li><strong>Degrees in Electrical Engineering:</strong> Required for many engineering positions</li>
          <li><strong>Management qualifications:</strong> For progression to supervisory and management roles</li>
          <li><strong>Teaching qualifications:</strong> For moving into training and education</li>
          <li><strong>Professional registration:</strong> Working toward Incorporated (IEng) or Chartered Engineer (CEng) status</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section2_3: SectionData = {
  title: "Additional Qualifications",
  description: "Key certifications to enhance your career prospects",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Identify valuable additional qualifications for electricians</li>
            <li>Understand how specialized certifications can enhance career opportunities</li>
            <li>Recognize growing sectors with demand for qualified professionals</li>
            <li>Learn about higher education pathways for career progression</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Key Additional Qualifications" 
        content={<AdditionalQualifications />}
      />
    </>
  )
};
