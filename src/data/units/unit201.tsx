
import React from 'react';
import { UnitContent } from './interfaces';

export const unit201: UnitContent = {
  title: "Health and Safety in Building Services Engineering",
  description: "Learn how to work safely in the electrical industry, understand the risks, and follow correct procedures to keep yourself and others safe.",
  sections: [
    {
      title: "Introduction to Health and Safety",
      content: (
        <>
          <p>Health and safety is paramount in the electrical industry due to the inherent risks involved.</p>
          <p className="mt-2">Key topics include:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Legal responsibilities under Health and Safety legislation</li>
            <li>Risk assessment processes</li>
            <li>Safe working practices and procedures</li>
            <li>Personal Protective Equipment (PPE)</li>
          </ul>
        </>
      )
    },
    {
      title: "Hazard Identification and Risk Assessment",
      content: (
        <>
          <p>Understanding how to identify hazards and assess risks is essential for preventing accidents.</p>
          <p className="mt-2">This includes:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Methods for identifying potential hazards</li>
            <li>Evaluating the level of risk</li>
            <li>Implementing control measures</li>
            <li>Documenting and reviewing risk assessments</li>
          </ul>
        </>
      )
    },
    {
      title: "Safe Isolation Procedures",
      content: (
        <>
          <p>Safe isolation is a critical procedure to ensure electrical systems are safely disconnected before work begins.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>The step-by-step process of safe isolation</li>
            <li>Proper use of lock-off devices</li>
            <li>Testing and verification procedures</li>
            <li>Documentation requirements</li>
          </ul>
          <p className="mt-2">This knowledge is essential to prevent electric shock and other electrical accidents.</p>
        </>
      )
    },
    {
      title: "Environmental Considerations",
      content: (
        <>
          <p>Electricians must also consider environmental aspects of their work:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Waste disposal regulations</li>
            <li>Environmentally friendly practices</li>
            <li>Energy efficiency considerations</li>
            <li>Reducing carbon footprint</li>
          </ul>
          <p className="mt-2">Understanding these aspects helps ensure compliance with environmental regulations.</p>
        </>
      )
    }
  ]
};
