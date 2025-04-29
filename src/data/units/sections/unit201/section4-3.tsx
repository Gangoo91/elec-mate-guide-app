
import React from 'react';
import { SectionData } from './interfaces';

export const section4_3: SectionData = {
  title: "Use of Personal Protective Equipment (PPE)",
  description: "Selection and proper use of safety equipment for electrical work.",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">Use of Personal Protective Equipment (PPE)</h3>
      
      <p>
        Personal Protective Equipment (PPE) is the last line of defense in the hierarchy of control measures
        but remains essential for electrical workers to protect against hazards that cannot be eliminated
        or adequately controlled by other means.
      </p>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Essential PPE for Electricians</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-[#FFC900]">Head Protection</h5>
            <ul className="list-disc pl-5">
              <li>Safety helmet/hard hat (when risk of falling objects)</li>
              <li>Bump caps (for confined spaces with risk of head bumps)</li>
              <li>Face shields (for protection against arc flash)</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-[#FFC900]">Eye Protection</h5>
            <ul className="list-disc pl-5">
              <li>Safety glasses (for general protection)</li>
              <li>Goggles (when drilling or cutting)</li>
              <li>Arc flash rated face shields</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-[#FFC900]">Hand Protection</h5>
            <ul className="list-disc pl-5">
              <li>Insulated gloves (rated for voltage)</li>
              <li>Cut-resistant gloves (when handling sharp materials)</li>
              <li>General work gloves (for manual handling)</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-[#FFC900]">Foot Protection</h5>
            <ul className="list-disc pl-5">
              <li>Safety boots with steel toe caps</li>
              <li>Electrical hazard rated (EH) footwear</li>
              <li>Anti-slip soles</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Special PPE for Specific Tasks</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Arc Flash Protection:</strong>
            <p className="text-sm">When working on or near energized equipment where an arc flash hazard exists, appropriate arc-rated clothing and PPE must be worn according to the calculated incident energy level.</p>
          </li>
          <li>
            <strong>Respiratory Protection:</strong>
            <p className="text-sm">When working in dusty environments, with fiberglass insulation, or where hazardous fumes may be present.</p>
          </li>
          <li>
            <strong>Hearing Protection:</strong>
            <p className="text-sm">When working with or near noisy equipment like hammer drills, saws, or in plant rooms.</p>
          </li>
          <li>
            <strong>High-Visibility Clothing:</strong>
            <p className="text-sm">When working on construction sites, roadways, or in areas with vehicle movement.</p>
          </li>
        </ul>
      </div>
      
      <h4 className="text-lg font-medium text-[#FFC900] mt-2">Electrical Insulating PPE</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Insulating gloves must be rated for the appropriate voltage class</li>
        <li>Insulating mats provide additional protection when working on electrical equipment</li>
        <li>Insulating blankets can be used to cover exposed live parts</li>
        <li>Insulated tools must be rated for the voltage being worked on</li>
        <li>Arc flash rated face shields and clothing for high energy work</li>
      </ul>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg mt-3">
        <h4 className="font-medium text-[#FFC900] mb-1">PPE Care and Maintenance:</h4>
        <ul className="list-disc pl-5">
          <li>Inspect PPE before each use for damage or defects</li>
          <li>Store PPE properly to prevent damage</li>
          <li>Clean PPE regularly according to manufacturer's instructions</li>
          <li>Replace damaged or worn PPE immediately</li>
          <li>Never modify PPE as this can compromise its effectiveness</li>
          <li>Follow manufacturer's guidelines for testing and retiring PPE</li>
        </ul>
        <p className="mt-2 font-medium">
          Remember: PPE is your last line of defense. Always ensure you're using the right protection for the task.
        </p>
      </div>
    </div>
  )
};
