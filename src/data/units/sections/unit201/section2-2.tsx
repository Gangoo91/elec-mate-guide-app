
import React from 'react';
import { SectionData } from './interfaces';

export const section2_2: SectionData = {
  title: "Manual Handling Injuries",
  description: "Prevention of injuries when lifting electrical equipment and materials.",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">Manual Handling Injuries</h3>
      
      <p>
        Electricians frequently need to handle heavy items like cable drums, conduit, distribution boards, and 
        lighting fixtures. Improper lifting techniques can lead to musculoskeletal disorders (MSDs), particularly 
        affecting the back, shoulders, and knees.
      </p>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Common Manual Handling Hazards in Electrical Work</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Heavy cable drums (especially larger armored cables)</li>
          <li>Awkward lifting positions in confined spaces</li>
          <li>Distribution boards and electrical panels</li>
          <li>Repetitive movements during cable pulling</li>
          <li>Tool bags and equipment cases</li>
          <li>Ladders and access equipment</li>
          <li>Large light fittings and ceiling installations</li>
        </ul>
      </div>
      
      <h4 className="text-lg font-medium text-[#FFC900] mt-2">Safe Lifting Technique</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        <div>
          <h5 className="font-medium text-[#FFC900]">Before Lifting</h5>
          <ul className="list-disc pl-5">
            <li>Plan the lift - where are you going to place the load?</li>
            <li>Remove obstacles from the route</li>
            <li>Check if the load is too heavy or awkward</li>
            <li>Get help if needed - don't risk it alone</li>
            <li>Position feet shoulder-width apart</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-[#FFC900]">During the Lift</h5>
          <ul className="list-disc pl-5">
            <li>Bend your knees, not your back</li>
            <li>Keep the load close to your body</li>
            <li>Keep your back straight</li>
            <li>Avoid twisting or leaning sideways</li>
            <li>Look ahead, not down at the load</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-[#22251e] p-4 rounded-lg mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Prevention Strategies</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Use mechanical aids where possible (trolleys, cable drum stands)</li>
          <li>Break down loads into smaller, more manageable components</li>
          <li>Plan deliveries to minimize manual handling</li>
          <li>Use team lifting for heavier objects</li>
          <li>Take regular breaks during repetitive tasks</li>
          <li>Arrange storage so frequently used items are at waist height</li>
        </ul>
      </div>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg mt-3">
        <p className="font-medium">
          Remember: Back injuries can have lifelong consequences. If in doubt, get help or use mechanical assistance. 
          No electrical job is worth risking your health.
        </p>
      </div>
    </div>
  )
};
