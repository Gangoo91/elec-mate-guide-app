
import React from 'react';
import { SectionData } from './interfaces';

export const section1_6: SectionData = {
  title: "Risk Assessments and Method Statements (RAMS)",
  description: "Learning how to create and use RAMS documents for electrical installation work.",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">Risk Assessments and Method Statements (RAMS)</h3>
      
      <p>
        Risk Assessments and Method Statements (RAMS) are essential documents used in the 
        electrical industry to ensure work is carried out safely. They are often required by clients 
        or principal contractors before work can begin on site.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20">
          <h4 className="font-medium text-lg text-[#FFC900] mb-2">Risk Assessment</h4>
          <p className="mb-2">A document that identifies:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Hazards present in the work activities</li>
            <li>People who might be harmed and how</li>
            <li>Existing control measures</li>
            <li>Further control measures needed</li>
            <li>Risk rating (likelihood × severity)</li>
          </ul>
        </div>
        
        <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20">
          <h4 className="font-medium text-lg text-[#FFC900] mb-2">Method Statement</h4>
          <p className="mb-2">A document that details:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Step-by-step process of how work will be completed</li>
            <li>Tools and equipment required</li>
            <li>Control measures to be implemented</li>
            <li>PPE requirements</li>
            <li>Emergency procedures</li>
            <li>Supervisory arrangements</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Five Steps to Risk Assessment</h4>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <strong>Identify the hazards</strong>
            <p className="text-sm">Look for anything that could cause harm during the electrical installation work</p>
          </li>
          <li>
            <strong>Decide who might be harmed and how</strong>
            <p className="text-sm">Identify groups of people (workers, visitors, public) who might be affected</p>
          </li>
          <li>
            <strong>Evaluate the risks and decide on precautions</strong>
            <p className="text-sm">Consider likelihood and severity, then determine what needs to be done to reduce risk</p>
          </li>
          <li>
            <strong>Record your findings and implement them</strong>
            <p className="text-sm">Document the assessment and put control measures in place</p>
          </li>
          <li>
            <strong>Review your assessment and update if necessary</strong>
            <p className="text-sm">Regularly check if anything has changed that affects the risk level</p>
          </li>
        </ol>
      </div>
      
      <p className="bg-[#2a2d24] p-3 rounded-lg">
        Remember: RAMS documents should be specific to each job, communicated to all workers involved, 
        and reviewed before work begins. They are living documents that may need updating if conditions change.
      </p>
    </div>
  )
};
