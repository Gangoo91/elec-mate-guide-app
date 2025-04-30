
import React from 'react';
import { Section210 } from './types';
import LessonContent from '@/components/units/LessonContent';

export const section4_1: Section210 = {
  id: "4.1",
  title: "Networking Skills",
  description: "Building professional relationships in the electrical industry",
  content: (
    <>
      <LessonContent title="Professional Networking in the Electrical Industry">
        <p>
          Building a strong professional network is valuable for career development in the electrical industry. 
          Networking can lead to job opportunities, mentorship, advice on challenging projects, and staying 
          current with industry developments.
        </p>
        
        <h3 className="text-lg font-medium text-[#FFC900] mt-6 mb-3">Why Networking Matters for Electricians</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Job opportunities:</strong> Many positions are filled through referrals and personal connections
          </li>
          <li>
            <strong>Technical knowledge:</strong> Access to expertise when facing unfamiliar challenges
          </li>
          <li>
            <strong>Supplier relationships:</strong> Better information about products and sometimes preferential treatment
          </li>
          <li>
            <strong>Staying current:</strong> Learning about new technologies and industry trends
          </li>
          <li>
            <strong>Business development:</strong> Potential client referrals if you're self-employed
          </li>
        </ul>
        
        <h3 className="text-lg font-medium text-[#FFC900] mt-6 mb-3">Networking Opportunities</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Trade associations:</strong> Organizations like the Electrical Contractors' Association
          </li>
          <li>
            <strong>Training courses and seminars:</strong> Continuing education events
          </li>
          <li>
            <strong>Trade shows and exhibitions:</strong> Industry events showcasing new products and technologies
          </li>
          <li>
            <strong>Online forums and social media:</strong> Professional groups on platforms like LinkedIn
          </li>
          <li>
            <strong>Day-to-day work relationships:</strong> Connections with suppliers, inspectors, other trades
          </li>
        </ul>
        
        <h3 className="text-lg font-medium text-[#FFC900] mt-6 mb-3">Effective Networking Approaches</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Be genuinely helpful:</strong> Offer assistance and share knowledge when you can
          </li>
          <li>
            <strong>Follow up:</strong> Exchange contact information and maintain relationships
          </li>
          <li>
            <strong>Ask thoughtful questions:</strong> Show interest in others' expertise and experiences
          </li>
          <li>
            <strong>Professional presentation:</strong> Be mindful of how you represent yourself and your company
          </li>
          <li>
            <strong>Reciprocity:</strong> Networking should be mutually beneficial over time
          </li>
        </ul>
        
        <div className="bg-[#353a2c] p-4 rounded-md mt-6">
          <p className="text-[#FFC900] font-medium">Networking Exercise</p>
          <p>Prepare a brief "elevator pitch" about yourself as an electrical professional. It should be 30-60 seconds and cover your specialization, experience level, and what you're currently interested in learning or developing. Practice this so you're ready when meeting new industry contacts.</p>
        </div>
      </LessonContent>
    </>
  )
};
