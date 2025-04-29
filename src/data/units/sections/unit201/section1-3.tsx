
import React from 'react';
import { SectionData } from './interfaces';

export const section1_3: SectionData = {
  title: "COSHH (Control of Substances Hazardous to Health)",
  description: "Understanding COSHH regulations and how they apply to electrical work.",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">Control of Substances Hazardous to Health (COSHH)</h3>
      
      <p>
        The Control of Substances Hazardous to Health Regulations 2002 (COSHH) require employers to control
        substances that are hazardous to health and prevent or reduce workers' exposure to these substances.
      </p>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Common Hazardous Substances in Electrical Work</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Solvents and cleaning agents</li>
          <li>Cable lubricants</li>
          <li>PVC products (which release toxic fumes when heated)</li>
          <li>Lead-based solder</li>
          <li>Insulation materials</li>
          <li>Asbestos (in older buildings)</li>
          <li>Battery acids</li>
        </ul>
      </div>
      
      <h4 className="text-lg font-medium text-[#FFC900] mt-2">COSHH Risk Assessment Steps</h4>
      <ol className="list-decimal pl-5 space-y-1">
        <li>Identify the hazardous substances present in your workplace</li>
        <li>Decide how to prevent harm to health (risk assessment)</li>
        <li>Provide control measures to reduce harm to health</li>
        <li>Ensure that control measures are used and maintained</li>
        <li>Monitor exposure and carry out health surveillance where necessary</li>
        <li>Ensure employees are properly informed, trained and supervised</li>
      </ol>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg">
        <p className="font-semibold">
          Always check the Safety Data Sheet (SDS) for any chemical product you use. These contain 
          essential information about hazards, handling, storage, and emergency procedures.
        </p>
      </div>
    </div>
  )
};
