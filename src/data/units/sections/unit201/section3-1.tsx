
import React from 'react';
import { SectionData } from './interfaces';

export const section3_1: SectionData = {
  title: "How to Identify Hazards and Assess Risks",
  description: "Systematic approaches to identifying workplace hazards and assessing their risks.",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">How to Identify Hazards and Assess Risks</h3>
      
      <p>
        Hazard identification and risk assessment are fundamental skills for electricians. This systematic process
        helps prevent accidents and ensure safe working environments.
      </p>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Hazard Identification Methods</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Workplace inspections</strong>
            <p className="text-sm">Regularly walk through and check work areas</p>
          </li>
          <li>
            <strong>Task analysis</strong>
            <p className="text-sm">Break down jobs into steps and identify hazards at each step</p>
          </li>
          <li>
            <strong>Equipment checks</strong>
            <p className="text-sm">Inspect tools and equipment before use</p>
          </li>
          <li>
            <strong>Consultation with workers</strong>
            <p className="text-sm">Speak with others who have experience with the work or environment</p>
          </li>
          <li>
            <strong>Review of incident reports</strong>
            <p className="text-sm">Learn from previous incidents and near misses</p>
          </li>
        </ul>
      </div>
      
      <h4 className="text-lg font-medium text-[#FFC900] mt-2">Risk Assessment Process</h4>
      <ol className="list-decimal pl-5 space-y-2">
        <li>
          <strong>Identify the hazards</strong>
          <p className="text-sm">What could cause harm? Consider electrical, physical, chemical, and environmental hazards.</p>
        </li>
        <li>
          <strong>Determine who might be harmed and how</strong>
          <p className="text-sm">Think about electricians, other workers, clients, and the public.</p>
        </li>
        <li>
          <strong>Evaluate the risks</strong>
          <p className="text-sm">Consider both likelihood and severity to determine risk level.</p>
          <div className="overflow-x-auto mt-2">
            <table className="min-w-full bg-[#2a2d24] rounded-lg">
              <thead>
                <tr>
                  <th className="border border-[#FFC900]/20 px-4 py-2">Risk Level</th>
                  <th className="border border-[#FFC900]/20 px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#FFC900]/20 px-4 py-2">Low</td>
                  <td className="border border-[#FFC900]/20 px-4 py-2">Monitor and review periodically</td>
                </tr>
                <tr>
                  <td className="border border-[#FFC900]/20 px-4 py-2">Medium</td>
                  <td className="border border-[#FFC900]/20 px-4 py-2">Implement additional control measures</td>
                </tr>
                <tr>
                  <td className="border border-[#FFC900]/20 px-4 py-2">High</td>
                  <td className="border border-[#FFC900]/20 px-4 py-2">Immediate action required, consider stopping work</td>
                </tr>
              </tbody>
            </table>
          </div>
        </li>
        <li>
          <strong>Plan and implement control measures</strong>
          <p className="text-sm">Use the hierarchy of controls (discussed in the next section).</p>
        </li>
        <li>
          <strong>Record your findings</strong>
          <p className="text-sm">Document the assessment and actions taken.</p>
        </li>
        <li>
          <strong>Review and update regularly</strong>
          <p className="text-sm">Reassess when conditions change or periodically.</p>
        </li>
      </ol>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg">
        <h4 className="font-medium text-[#FFC900] mb-1">When to Conduct Risk Assessments:</h4>
        <ul className="list-disc pl-5">
          <li>Before starting any new electrical installation</li>
          <li>When working methods or equipment changes</li>
          <li>After an incident or near miss</li>
          <li>When working in unfamiliar environments</li>
          <li>When undertaking non-routine tasks</li>
        </ul>
      </div>
    </div>
  )
};
