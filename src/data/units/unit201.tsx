
import React from 'react';
import { UnitContent } from './interfaces';

export const unit201: UnitContent = {
  title: "Health and Safety in Building Services Engineering",
  description: "Master essential workplace safety practices and regulations for electrical installations. Learn to identify hazards, use protective equipment, and follow proper safety procedures.",
  sections: [
    {
      title: "Unit Overview",
      content: (
        <>
          <p className="mb-4">This unit is fundamental to your development as an electrical professional. You'll learn how to:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Identify and prevent workplace hazards</li>
            <li>Use personal protective equipment (PPE) correctly</li>
            <li>Follow essential safety procedures</li>
            <li>Respond to emergencies effectively</li>
            <li>Handle electrical equipment safely</li>
          </ul>
          <p>By the end of this unit, you'll be confident in maintaining a safe working environment.</p>
        </>
      )
    },
    {
      title: "Key Learning Objectives",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-[#FFC900] font-medium text-lg mb-2">1. Understanding Health and Safety Legislation</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Health and Safety at Work Act 1974</li>
              <li>Electricity at Work Regulations 1989</li>
              <li>Personal Protective Equipment Regulations</li>
              <li>Manual Handling Operations Regulations</li>
              <li>Your legal responsibilities as an electrical worker</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#FFC900] font-medium text-lg mb-2">2. Identifying and Preventing Hazards</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Common workplace hazards in electrical work</li>
              <li>Risk assessment procedures</li>
              <li>Safe working practices</li>
              <li>Preventing accidents and injuries</li>
              <li>Environmental hazards and controls</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Assessment Criteria",
      content: (
        <>
          <p className="mb-4">To pass this unit, you'll need to demonstrate:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Understanding of relevant health and safety legislation</li>
            <li>Ability to identify and assess workplace hazards</li>
            <li>Knowledge of proper PPE usage and maintenance</li>
            <li>Understanding of emergency procedures</li>
            <li>Practical application of safe working practices</li>
          </ul>
        </>
      )
    }
  ]
};
