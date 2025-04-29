
import React from 'react';
import { SectionData } from './interfaces';

export const section1_5: SectionData = {
  title: "Working at Height Regulations",
  description: "Safety requirements when working on ladders, scaffolds, and other elevated platforms.",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">Working at Height Regulations</h3>
      
      <p>
        The Work at Height Regulations 2005 apply to all work at height where there is a risk of falling that could cause
        personal injury. As an electrician, you may frequently work at height when installing lighting, conduit, cable trays,
        or working in ceiling spaces.
      </p>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Key Requirements</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Avoid working at height where possible</li>
          <li>Use work equipment or other measures to prevent falls where working at height cannot be avoided</li>
          <li>Where the risk of falling cannot be eliminated, use equipment or other measures to minimize the distance and consequences of a fall</li>
          <li>Always consider weather conditions that could endanger health and safety</li>
          <li>Ensure those working at height are trained and competent</li>
          <li>Ensure the place where work at height is done is safe</li>
        </ul>
      </div>
      
      <h4 className="text-lg font-medium text-[#FFC900] mt-2">Hierarchy for Managing Risk When Working at Height</h4>
      <ol className="list-decimal pl-5 space-y-1">
        <li>Avoid working at height where possible</li>
        <li>Use an existing safe place of work</li>
        <li>Provide work equipment to prevent falls</li>
        <li>Mitigate distance and consequences of a fall</li>
        <li>Provide training and instruction or take other measures</li>
      </ol>
      
      <div className="bg-[#22251e] p-4 rounded-lg mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Ladder Safety for Electricians</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Always inspect ladders before use</li>
          <li>Position at a stable angle (1 out for every 4 up)</li>
          <li>Secure ladders where possible</li>
          <li>Maintain three points of contact at all times</li>
          <li>Never work from the top three rungs of a leaning ladder</li>
          <li>Consider alternatives like podium steps or scaffold towers for longer duration work</li>
          <li>Be aware of electrical hazards when using metal ladders</li>
        </ul>
      </div>
    </div>
  )
};
