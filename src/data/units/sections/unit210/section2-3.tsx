
import React from 'react';
import { Section210 } from './types';
import LessonContent from '@/components/units/LessonContent';

export const section2_3: Section210 = {
  id: "2.3",
  title: "Conflict Resolution",
  description: "Managing disagreements professionally on site and with clients",
  content: (
    <>
      <LessonContent title="Conflict Resolution in Electrical Work">
        <p>
          Conflicts can arise in any workplace, including on electrical job sites. Whether it's disagreements 
          with clients about project scope, disputes with other trades about scheduling, or differences of 
          opinion with colleagues about the best approach to a task, handling conflicts professionally is 
          essential for maintaining productive working relationships.
        </p>
        
        <h3 className="text-lg font-medium text-[#FFC900] mt-6 mb-3">Common Sources of Conflict</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Scope misunderstandings:</strong> When clients expect work that wasn't included in the original agreement
          </li>
          <li>
            <strong>Technical disagreements:</strong> Different opinions on the correct method or solution
          </li>
          <li>
            <strong>Scheduling conflicts:</strong> Issues with timing and coordination with other trades
          </li>
          <li>
            <strong>Payment disputes:</strong> Disagreements about costs or additional charges
          </li>
        </ul>
        
        <h3 className="text-lg font-medium text-[#FFC900] mt-6 mb-3">Effective Resolution Strategies</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Stay calm and professional:</strong> Never let emotions dictate your response
          </li>
          <li>
            <strong>Focus on facts:</strong> Reference documentation, regulations, and agreements
          </li>
          <li>
            <strong>Listen to understand:</strong> Make sure you fully understand the other person's concerns
          </li>
          <li>
            <strong>Seek common ground:</strong> Identify shared goals and work toward mutually acceptable solutions
          </li>
          <li>
            <strong>Document resolutions:</strong> Confirm agreements in writing to prevent future misunderstandings
          </li>
        </ul>
        
        <div className="bg-[#353a2c] p-4 rounded-md mt-6">
          <p className="text-[#FFC900] font-medium">Example Resolution Approach</p>
          <p className="italic">"I understand you're concerned about the additional cost for the circuit breaker upgrade. Let me explain why this is necessary to safely support the new equipment you're installing. The original quote was based on the information available at the time, but now that we've seen the actual load requirements, we need to ensure the installation meets electrical code requirements for safety and compliance. Perhaps we could look at completing the work in phases to help manage the budget?"</p>
        </div>
      </LessonContent>
    </>
  )
};
