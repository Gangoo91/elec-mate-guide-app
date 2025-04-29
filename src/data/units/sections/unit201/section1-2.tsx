
import React from 'react';
import { SectionData } from './interfaces';

export const section1_2: SectionData = {
  title: "Electricity at Work Regulations 1989",
  description: "Understanding the specific regulations that govern electrical safety in the workplace.",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">Electricity at Work Regulations 1989</h3>
      
      <p>
        The Electricity at Work Regulations 1989 (EWR) specifically address electrical safety in
        the workplace. These regulations place duties on employers, employees, and the self-employed
        to reduce the risk of death or injury from electricity.
      </p>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Key Requirements</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Regulation 4:</strong> All electrical systems must be constructed and maintained to 
            prevent danger.
          </li>
          <li>
            <strong>Regulation 12:</strong> No person shall work on or near live electrical conductors 
            unless it is unreasonable to work dead, adequate precautions are taken, and it is reasonable 
            to work live.
          </li>
          <li>
            <strong>Regulation 13:</strong> Adequate working space, adequate means of access, and 
            adequate lighting shall be provided at all electrical equipment.
          </li>
          <li>
            <strong>Regulation 14:</strong> No person shall engage in work activities where technical 
            knowledge or experience is necessary to prevent danger unless they have such knowledge or 
            experience or are under appropriate supervision.
          </li>
        </ul>
      </div>
      
      <p className="bg-[#2a2d24] p-3 rounded-lg font-semibold">
        These regulations are particularly important for electricians as they directly govern the
        work you will be doing on a daily basis. Understanding and following these regulations is not 
        just a legal requirement but essential for your safety and the safety of others.
      </p>
    </div>
  )
};
