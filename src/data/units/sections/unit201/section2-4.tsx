
import React from 'react';
import { SectionData } from './interfaces';

export const section2_4: SectionData = {
  title: "Slips, Trips, and Falls",
  description: "Preventing common workplace accidents through good housekeeping and awareness.",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">Slips, Trips, and Falls</h3>
      
      <p>
        Slips, trips, and falls are among the most common workplace accidents in the electrical industry.
        They can result in injuries ranging from minor bruises to serious fractures, concussions, or worse.
      </p>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Common Causes in Electrical Work</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h5 className="font-medium text-[#FFC900]">Slip Hazards</h5>
            <ul className="list-disc pl-5">
              <li>Wet or oily surfaces</li>
              <li>Weather conditions (rain, ice)</li>
              <li>Spilled liquids</li>
              <li>Loose mats or rugs</li>
              <li>Polished or freshly waxed floors</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-[#FFC900]">Trip Hazards</h5>
            <ul className="list-disc pl-5">
              <li>Trailing cables and leads</li>
              <li>Open drawers or cabinets</li>
              <li>Uneven surfaces</li>
              <li>Poor lighting</li>
              <li>Loose flooring or carpeting</li>
              <li>Tools left on the floor</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-[#FFC900]">Fall Hazards</h5>
            <ul className="list-disc pl-5">
              <li>Working at height</li>
              <li>Unprotected edges</li>
              <li>Unstable ladders</li>
              <li>Holes in flooring</li>
              <li>Stepping on or off equipment</li>
              <li>Cables across walkways</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h4 className="text-lg font-medium text-[#FFC900] mt-2">Prevention Measures</h4>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Good Housekeeping</strong>
          <p className="text-sm">Keep work areas tidy, clean up spills immediately, and store tools properly.</p>
        </li>
        <li>
          <strong>Cable Management</strong>
          <p className="text-sm">Use cable protectors, route cables away from walkways, or suspend them overhead when possible.</p>
        </li>
        <li>
          <strong>Appropriate Footwear</strong>
          <p className="text-sm">Wear slip-resistant safety boots with good ankle support.</p>
        </li>
        <li>
          <strong>Adequate Lighting</strong>
          <p className="text-sm">Ensure work areas are well-lit, especially stairways and areas with level changes.</p>
        </li>
        <li>
          <strong>Proper Access Equipment</strong>
          <p className="text-sm">Use the right equipment for working at height, inspect before use, and position it safely.</p>
        </li>
        <li>
          <strong>Awareness</strong>
          <p className="text-sm">Stay alert to your surroundings and potential hazards.</p>
        </li>
      </ul>
      
      <div className="bg-[#22251e] p-4 rounded-lg mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Electrician-Specific Considerations</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            When installing cables, consider how they might create trip hazards for other workers or building occupants
          </li>
          <li>
            Be particularly vigilant when working in ceiling voids or lofts where footing may be unstable
          </li>
          <li>
            Use headlamps or portable lighting when working in poorly lit areas
          </li>
          <li>
            In renovation work, be aware of changing floor levels and temporary structures
          </li>
          <li>
            Communicate with other trades to avoid creating hazards for each other
          </li>
        </ul>
      </div>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg">
        <p className="font-medium">
          Remember that many slip, trip, and fall accidents can be prevented with simple precautions and awareness.
          Don't rush jobs at the expense of safety, and take a few moments to assess your work area before starting.
        </p>
      </div>
    </div>
  )
};
