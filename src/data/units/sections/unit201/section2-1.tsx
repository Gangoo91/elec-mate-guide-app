
import React from 'react';
import { SectionData } from './interfaces';

export const section2_1: SectionData = {
  title: "Working at Heights (Falls)",
  description: "Understanding risks and safety measures when working at height.",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">Working at Heights (Falls)</h3>
      
      <p>
        Falls from height remain one of the biggest causes of fatalities and major injuries in construction and 
        electrical work. As an electrician, you'll often need to work at height to install lighting, cable trays, 
        or access ceiling voids.
      </p>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Common Working at Height Activities in Electrical Work</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Installing lighting fixtures</li>
          <li>Running cable in ceiling voids</li>
          <li>Mounting cable trays and conduit at height</li>
          <li>Accessing distribution boards in elevated positions</li>
          <li>Installing security systems and cameras</li>
          <li>Outdoor work on buildings or structures</li>
        </ul>
      </div>
      
      <h4 className="text-lg font-medium text-[#FFC900] mt-2">Prevention and Safety Measures</h4>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Work Planning</strong>
          <p className="text-sm">Assess if working at height can be avoided. If not, ensure the work is properly planned.</p>
        </li>
        <li>
          <strong>Equipment Selection</strong>
          <p className="text-sm">Choose the right equipment based on the task, height, and duration. Options include:</p>
          <ul className="list-circle pl-5 text-sm">
            <li>Access towers</li>
            <li>Mobile elevating work platforms (MEWPs)</li>
            <li>Podium steps</li>
            <li>Ladders (for short duration, low-risk tasks only)</li>
          </ul>
        </li>
        <li>
          <strong>Competence</strong>
          <p className="text-sm">Ensure all workers are trained and competent in using access equipment safely.</p>
        </li>
      </ul>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg mt-4">
        <h4 className="font-medium text-[#FFC900] mb-1">Remember:</h4>
        <ul className="list-disc pl-5">
          <li>Never use makeshift arrangements like stacked materials or chairs</li>
          <li>Always inspect access equipment before use</li>
          <li>Consider weather conditions for outdoor work at height</li>
          <li>Be aware of overhead hazards, especially electrical cables</li>
          <li>Secure tools to prevent drops onto people below</li>
          <li>Where necessary, establish exclusion zones below work areas</li>
        </ul>
      </div>
    </div>
  )
};
