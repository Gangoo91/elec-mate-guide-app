
import React from 'react';
import { UnitContent } from './interfaces';

export const unit201: UnitContent = {
  title: "Health and Safety in Building Services Engineering",
  description: "Learn how to work safely in the electrical industry, understand the risks, and follow correct procedures to keep yourself and others safe.",
  sections: [
    {
      title: "1. Understanding Health and Safety Legislation",
      content: (
        <>
          <p>A solid understanding of health and safety legislation is crucial for all electricians and building services engineers.</p>
          <p className="mt-2">Key legislation includes:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Health and Safety at Work Act 1974</li>
            <li>Electricity at Work Regulations 1989</li>
            <li>Control of Substances Hazardous to Health (COSHH)</li>
            <li>Manual Handling Regulations</li>
            <li>Working at Height Regulations</li>
            <li>Risk Assessments and Method Statements (RAMS)</li>
          </ul>
        </>
      )
    },
    {
      title: "2. Hazards in Building Services Engineering",
      content: (
        <>
          <p>The electrical industry presents various hazards that must be identified and mitigated.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Electrical hazards (shock, burns, fire)</li>
            <li>Working at heights (falls)</li>
            <li>Manual handling injuries (lifting cable drums, equipment)</li>
            <li>Fire hazards</li>
            <li>Slips, trips, and falls</li>
            <li>Use of hazardous substances (like glues, solvents)</li>
          </ul>
        </>
      )
    },
    {
      title: "3. Risk Assessment and Accident Prevention",
      content: (
        <>
          <p>Understanding how to identify hazards and assess risks is essential for preventing accidents.</p>
          <p className="mt-2">The hierarchy of control measures includes:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Elimination</li>
            <li>Substitution</li>
            <li>Engineering controls</li>
            <li>Administrative controls</li>
            <li>Personal Protective Equipment (PPE) - as a last resort</li>
          </ul>
          <p className="mt-2">Reporting hazards and near misses is crucial for maintaining safety in the workplace.</p>
        </>
      )
    },
    {
      title: "4. Safe Use of Tools, Equipment, and Materials",
      content: (
        <>
          <p>Using tools and equipment safely is essential to prevent injuries in electrical work.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Correct and safe use of hand tools and power tools</li>
            <li>Inspecting tools before use</li>
            <li>Safe storage and transportation of materials</li>
            <li>Use of personal protective equipment (PPE)</li>
          </ul>
        </>
      )
    },
    {
      title: "5. Fire Prevention and Emergency Procedures",
      content: (
        <>
          <p>Understanding fire risks and prevention methods is crucial in electrical installations:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>How fires start (Fire Triangle: Heat, Fuel, Oxygen)</li>
            <li>Types of fire extinguishers and when to use them</li>
            <li>Evacuation procedures</li>
            <li>Raising alarms and assembly points</li>
          </ul>
        </>
      )
    },
    {
      title: "6. Working Safely with Electricity",
      content: (
        <>
          <p>Specific procedures for electrical safety that all electricians must follow:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Safe isolation procedures</li>
            <li>Importance of proving dead before working</li>
            <li>Double-checking tools and equipment are safe</li>
            <li>Understanding electrical risks in different environments</li>
          </ul>
        </>
      )
    }
  ]
};
