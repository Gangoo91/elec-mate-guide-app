
import React from 'react';
import { SectionData } from './interfaces';

export const section2_3: SectionData = {
  title: "Fire Hazards",
  description: "Understanding fire risks specific to electrical work and how to mitigate them.",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">Fire Hazards</h3>
      
      <p>
        Electrical work inherently carries fire risks. Understanding these risks is crucial for electricians to 
        prevent fires and protect lives and property. Electrical fires can start quickly and spread rapidly.
      </p>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Common Causes of Electrical Fires</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Overloaded circuits</li>
          <li>Loose connections causing heat</li>
          <li>Short circuits</li>
          <li>Outdated or faulty wiring</li>
          <li>Improper installation</li>
          <li>Damaged insulation</li>
          <li>Use of incorrect components</li>
          <li>Penetration of cables or equipment</li>
          <li>Hot work (e.g., heat guns, soldering)</li>
        </ul>
      </div>
      
      <h4 className="text-lg font-medium text-[#FFC900] mt-2">Fire Prevention Measures</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>Follow proper cable sizing calculations to prevent overheating</li>
        <li>Ensure all connections are tight and secure</li>
        <li>Use appropriate circuit protection devices</li>
        <li>Maintain adequate spacing between heat-producing components</li>
        <li>Use fire-rated materials when working in fire compartments</li>
        <li>Properly seal fire barriers when running cables through them</li>
        <li>Keep combustible materials away from electrical equipment</li>
        <li>Implement regular inspection and maintenance programs</li>
        <li>Follow hot work permits and procedures</li>
      </ul>
      
      <div className="bg-[#22251e] p-4 rounded-lg mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">The Fire Triangle</h4>
        <p>
          Understanding the fire triangle helps in preventing fires. A fire needs three elements:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
          <div className="bg-[#2a2d24] p-3 rounded-lg">
            <h5 className="font-medium text-[#FFC900] text-center">Heat</h5>
            <p className="text-center text-sm mt-2">Sources in electrical work: Overloaded circuits, faulty connections, short circuits</p>
          </div>
          <div className="bg-[#2a2d24] p-3 rounded-lg">
            <h5 className="font-medium text-[#FFC900] text-center">Fuel</h5>
            <p className="text-center text-sm mt-2">Sources in electrical work: Cable insulation, wood, paper, flammable materials nearby</p>
          </div>
          <div className="bg-[#2a2d24] p-3 rounded-lg">
            <h5 className="font-medium text-[#FFC900] text-center">Oxygen</h5>
            <p className="text-center text-sm mt-2">Present in the air. Ventilation systems can increase oxygen flow.</p>
          </div>
        </div>
        <p className="mt-3 text-center">
          Removing any one element prevents or extinguishes a fire.
        </p>
      </div>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg">
        <p className="font-semibold">
          Remember: Always have appropriate fire extinguishers readily available when performing electrical work,
          and know which type to use for electrical fires (typically CO2 or powder, never water).
        </p>
      </div>
    </div>
  )
};
