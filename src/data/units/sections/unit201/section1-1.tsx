
import React from 'react';
import { SectionData } from './interfaces';
import { DetailedHealthSafetyContent } from '@/components/units/sections/unit201/DetailedHealthSafetyContent';

export const section1_1: SectionData = {
  title: "Health and Safety at Work Act 1974",
  description: "Key principles and requirements of the Health and Safety at Work Act 1974.",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">Health and Safety at Work Act 1974</h3>
      
      <p>
        The Health and Safety at Work Act 1974 (HSWA) is the primary piece of legislation covering 
        occupational health and safety in the United Kingdom. It sets out the general duties that:
      </p>
      
      <ul className="list-disc pl-5 space-y-1">
        <li>Employers have towards their employees and members of the public</li>
        <li>Employees have to themselves and to each other</li>
        <li>Certain self-employed have toward themselves and others</li>
      </ul>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Key Provisions</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Securing the health, safety, and welfare of people at work</li>
          <li>Protecting others against risks to health or safety from work activities</li>
          <li>Controlling the use and storage of dangerous substances</li>
          <li>Controlling emissions into the atmosphere</li>
        </ul>
      </div>
      
      <p>
        As an electrician, you must understand that this Act forms the foundation of health and safety 
        law and establishes your rights and responsibilities in the workplace.
      </p>
    </div>
  ),
  detailedContent: <DetailedHealthSafetyContent />
};
