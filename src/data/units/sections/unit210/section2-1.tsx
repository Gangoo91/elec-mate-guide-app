
import React from 'react';
import { Section210 } from './types';
import LessonContent from '@/components/units/LessonContent';

export const section2_1: Section210 = {
  id: "2.1",
  title: "Communication Styles",
  description: "Different approaches for different situations and audiences",
  content: (
    <>
      <LessonContent title="Communication Styles in Electrical Work">
        <p>
          Different situations call for different communication styles. As an electrical professional, 
          you need to adapt your approach based on who you're talking to and what you're trying to achieve:
        </p>
        
        <h3 className="text-lg font-medium text-[#FFC900] mt-6 mb-3">Formal vs. Informal Communication</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Formal:</strong> Used in official documentation, contracts, and when dealing with 
            regulatory bodies or senior management. Focus on precision and professionalism.
          </li>
          <li>
            <strong>Informal:</strong> Used with colleagues or regular clients with whom you have a 
            good relationship. Still professional but more relaxed and conversational.
          </li>
        </ul>
        
        <h3 className="text-lg font-medium text-[#FFC900] mt-6 mb-3">Technical vs. Non-Technical Communication</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Technical:</strong> When speaking with other electricians or engineers, you can 
            use industry terminology and specific technical details.
          </li>
          <li>
            <strong>Non-technical:</strong> When explaining concepts to clients or non-specialists, 
            use simple language and analogies to help them understand.
          </li>
        </ul>
        
        <h3 className="text-lg font-medium text-[#FFC900] mt-6 mb-3">Assertive vs. Accommodating</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Assertive:</strong> Necessary when discussing safety concerns or code violations 
            that must be addressed. Be clear and direct about what must be done.
          </li>
          <li>
            <strong>Accommodating:</strong> Useful when discussing options with clients or finding 
            solutions to meet specific needs within safe parameters.
          </li>
        </ul>
        
        <div className="bg-[#353a2c] p-4 rounded-md mt-6">
          <p className="text-[#FFC900] font-medium">Key Point</p>
          <p>The best electrical professionals can switch between different communication styles 
          seamlessly depending on the situation. Developing this flexibility will make you more 
          effective in your role.</p>
        </div>
      </LessonContent>
    </>
  )
};
