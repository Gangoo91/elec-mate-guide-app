
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { SectionData } from './types';

const SafeWorkingPractices = () => {
  return (
    <LessonContent title="Safe Working Practices">
      <p className="mb-4">
        Developing and maintaining safe working practices is essential for all electrical professionals 
        to protect themselves, colleagues, and the public from electrical and other workplace hazards.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Risk Assessment</h4>
        <p className="mb-2">
          Risk assessment is the foundation of safe working. It involves:
        </p>
        <ol className="list-decimal pl-6 space-y-1">
          <li><strong>Identifying hazards:</strong> Recognize what could cause harm</li>
          <li><strong>Determining who might be harmed:</strong> Workers, public, vulnerable persons</li>
          <li><strong>Evaluating risks:</strong> Consider likelihood and severity</li>
          <li><strong>Implementing controls:</strong> Apply hierarchy of controls:
            <ul className="list-disc pl-6 mt-1">
              <li>Elimination (remove the hazard)</li>
              <li>Substitution (use something less hazardous)</li>
              <li>Engineering controls (guards, isolation)</li>
              <li>Administrative controls (procedures, training)</li>
              <li>Personal protective equipment (last resort)</li>
            </ul>
          </li>
          <li><strong>Reviewing and updating:</strong> Regular reassessment</li>
        </ol>
        <p className="mt-2">
          Risk assessments must be <strong>suitable and sufficient</strong> and <strong>written down</strong> if you employ five or more people.
        </p>
      </div>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Safe Electrical Working Procedures</h4>
        <div className="space-y-3">
          <div>
            <p className="font-medium">Safe Isolation:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Always assume circuits are live until proven dead</li>
              <li>Follow proper isolation procedure:
                <ol className="list-decimal pl-6 mt-1">
                  <li>Identify circuit to be isolated</li>
                  <li>Obtain permission to isolate</li>
                  <li>Isolate supply and secure</li>
                  <li>Post warning signs</li>
                  <li>Verify isolation with approved voltage indicator</li>
                  <li>Verify indicator is working before and after testing</li>
                </ol>
              </li>
              <li>Use lock-off devices and apply personal padlock</li>
              <li>Never rely on removal of fuses alone</li>
            </ul>
          </div>
          
          <div className="mt-3">
            <p className="font-medium">Working Near Live Parts:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Isolate where possible - working live is only permitted in exceptional circumstances</li>
              <li>Use insulated screening and barriers</li>
              <li>Maintain safe working distances</li>
              <li>Use insulated tools and equipment</li>
              <li>Avoid wearing conductive items (watches, jewelry)</li>
              <li>Use appropriate PPE (insulating gloves, mats)</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-[#2a2d24] p-4 rounded-md">
        <h4 className="font-medium text-[#FFC900] mb-2">Personal Protective Equipment (PPE)</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Eye protection:</strong> Safety glasses/goggles for protection from arcs, particles</li>
          <li><strong>Hand protection:</strong> Insulating gloves for appropriate voltage levels</li>
          <li><strong>Insulating mats:</strong> Providing isolation from ground</li>
          <li><strong>Flame-resistant clothing:</strong> For protection from arc flash hazards</li>
          <li><strong>Head protection:</strong> Hard hats in construction environments</li>
          <li><strong>Foot protection:</strong> Safety footwear with insulating properties</li>
          <li><strong>Face shields:</strong> For high-risk electrical work with arc flash potential</li>
        </ul>
        <p className="mt-2">
          PPE must be:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Appropriate for the specific risks</li>
          <li>Properly maintained and stored</li>
          <li>Regularly inspected for damage</li>
          <li>Used correctly after proper training</li>
          <li>Replaced when damaged or past useful life</li>
        </ul>
      </div>
      
      <div className="mt-4 bg-[#2a2d24] p-4 rounded-md">
        <h4 className="font-medium text-[#FFC900] mb-2">Site Safety and Housekeeping</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Access and egress:</strong> Maintain clear pathways and emergency exits</li>
          <li><strong>Trip hazards:</strong> Manage cables and keep work areas tidy</li>
          <li><strong>Working at height:</strong> Use appropriate equipment and follow safe procedures</li>
          <li><strong>Material storage:</strong> Store safely to prevent falling objects</li>
          <li><strong>Fire prevention:</strong> Keep flammable materials away from heat sources</li>
          <li><strong>Waste management:</strong> Dispose of waste properly and regularly</li>
          <li><strong>Environmental considerations:</strong> Prevent pollution and follow disposal regulations</li>
        </ul>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Emergency Procedures</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Electric shock response:</strong>
            <ol className="list-decimal pl-6 mt-1">
              <li>Do not touch the casualty if still in contact with electricity</li>
              <li>Switch off the supply if possible</li>
              <li>If supply cannot be switched off, use insulating material to separate casualty from source</li>
              <li>Call emergency services</li>
              <li>Administer first aid if trained and safe to do so</li>
              <li>Use AED if available and appropriate</li>
            </ol>
          </li>
          <li><strong>Fire procedures:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Know fire exit routes</li>
              <li>Know location of fire extinguishers</li>
              <li>Use correct extinguisher type for electrical fires</li>
              <li>Raise the alarm</li>
              <li>Evacuate according to procedures</li>
            </ul>
          </li>
          <li><strong>Reporting:</strong> Report all incidents, accidents, and near misses</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section5_3: SectionData = {
  title: "Safe Working Practices",
  description: "How to maintain safety for yourself and others",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand the principles of risk assessment for electrical work</li>
            <li>Learn safe isolation procedures and their importance</li>
            <li>Identify appropriate PPE and its correct use</li>
            <li>Recognize good site safety and housekeeping practices</li>
            <li>Know what to do in emergency situations</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Safe Working Practices for Electricians" 
        content={<SafeWorkingPractices />}
      />
    </>
  )
};
