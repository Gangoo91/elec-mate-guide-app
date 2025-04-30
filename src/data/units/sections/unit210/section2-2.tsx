
import React from 'react';
import { Section210 } from './types';
import LessonContent from '@/components/units/LessonContent';

export const section2_2: Section210 = {
  id: "2.2",
  title: "Active Listening",
  description: "Techniques for better understanding and reducing misunderstandings",
  content: (
    <>
      <LessonContent title="Active Listening in Electrical Work">
        <p>
          Active listening is a crucial skill that helps you fully understand what others are trying to communicate. 
          In electrical work, where precision and safety are paramount, misunderstandings can lead to serious consequences.
        </p>
        
        <h3 className="text-lg font-medium text-[#FFC900] mt-6 mb-3">Elements of Active Listening</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Full attention:</strong> Stop what you're doing and focus completely on the speaker, 
            whether it's a client explaining what they want or a colleague describing a technical issue.
          </li>
          <li>
            <strong>Note-taking:</strong> For complex instructions or requirements, write things down to 
            ensure you remember correctly.
          </li>
          <li>
            <strong>Confirmation:</strong> Repeat back what you've heard in your own words to verify your understanding.
          </li>
          <li>
            <strong>Questioning:</strong> Ask clarifying questions about anything that's unclear.
          </li>
        </ul>
        
        <h3 className="text-lg font-medium text-[#FFC900] mt-6 mb-3">Benefits in Electrical Work</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Reduces errors in understanding requirements for installations or repairs
          </li>
          <li>
            Helps identify unstated needs that clients may not realize are important
          </li>
          <li>
            Improves safety by ensuring all hazard information is properly understood
          </li>
          <li>
            Builds trust with clients who feel their concerns are being taken seriously
          </li>
        </ul>
        
        <div className="bg-[#353a2c] p-4 rounded-md mt-6">
          <p className="text-[#FFC900] font-medium">Example Scenario</p>
          <p className="mb-2"><strong>Client:</strong> "I need some extra outlets in the workshop."</p>
          <p className="mb-2"><strong>Poor response:</strong> "Ok, I'll add some outlets." (Doesn't get enough information)</p>
          <p className="mb-2"><strong>Active listening response:</strong> "I understand you need additional power outlets in your workshop. Can you tell me what equipment you'll be using so I can determine the appropriate circuit requirements? Also, where would be the most convenient locations for these outlets based on your workflow?"</p>
        </div>
      </LessonContent>
    </>
  )
};
