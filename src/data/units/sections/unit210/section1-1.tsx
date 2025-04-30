
import React from 'react';
import { Section210 } from './types';
import LessonContent from "@/components/units/LessonContent";

export const section1_1: Section210 = {
  id: "1.1",
  title: "Communication Fundamentals",
  description: "Understand the importance of communication in electrical work",
  content: (
    <div className="space-y-8">
      <LessonContent title="Learning Objectives">
        <ul className="list-disc pl-5 space-y-2">
          <li>Understand why effective communication is essential in the electrical trade</li>
          <li>Identify the key components of professional communication</li>
          <li>Recognize how good communication contributes to safety and efficiency</li>
        </ul>
      </LessonContent>
      
      <LessonContent title="1.1.1 Why Communication Matters in Electrical Work">
        <p className="mb-4">
          In the electrical trade, clear and effective communication is just as important as technical skills. Good communication:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Helps prevent dangerous misunderstandings that could lead to safety incidents</li>
          <li>Ensures work is completed correctly the first time, reducing costly rework</li>
          <li>Builds trust with customers, colleagues, and other trades</li>
          <li>Creates a professional impression that enhances your reputation</li>
        </ul>
        <p>
          Many skilled electricians find their career progression limited not by technical ability, but by communication skills. 
          The ability to explain technical concepts clearly, document work accurately, and collaborate effectively with others
          is often what separates those who advance to supervisory and management roles.
        </p>
      </LessonContent>
      
      <LessonContent title="1.1.2 Components of Effective Communication">
        <p className="mb-4">
          Effective communication in the electrical trade comprises several key elements:
        </p>
        <ul className="list-disc pl-5 space-y-3 mb-4">
          <li>
            <strong className="text-[#FFC900]">Clarity:</strong> Using simple, straightforward language that 
            avoids unnecessary jargon, especially when speaking with customers or non-specialists
          </li>
          <li>
            <strong className="text-[#FFC900]">Active listening:</strong> Paying full attention to what others are saying, 
            asking clarifying questions, and confirming understanding
          </li>
          <li>
            <strong className="text-[#FFC900]">Professionalism:</strong> Maintaining a respectful tone and demeanor
            even in challenging situations
          </li>
          <li>
            <strong className="text-[#FFC900]">Thoroughness:</strong> Covering all necessary details without omitting
            important information
          </li>
        </ul>
        <p>
          These components apply to all forms of communication, whether you're speaking with a customer,
          writing up job notes, or coordinating with other trades on a construction site.
        </p>
      </LessonContent>
      
      <LessonContent title="1.1.3 Safety Through Communication">
        <p className="mb-4">
          In few industries is clear communication more directly linked to safety than in electrical work:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Clear verbal warnings when switching circuits on or off prevent accidents</li>
          <li>Proper labeling and documentation of installations protects future workers</li>
          <li>Effective communication about hazards ensures everyone on site stays safe</li>
          <li>Clear handover information prevents dangerous assumptions by others</li>
        </ul>
        <p className="mb-4">
          Many electrical accidents have communication failures as a contributing factor. Whether it's unclear
          instructions, poor handover between shifts, or inadequate documentation, communication breakdowns
          can have serious consequences.
        </p>
        <div className="bg-[#353a2c] p-4 rounded-md border border-[#FFC900]/30">
          <h4 className="text-[#FFC900] font-medium mb-2">Case Study: Communication Failure</h4>
          <p className="text-[#FFC900]/80">
            An electrician was seriously injured when working on what he believed was an isolated circuit. The previous shift had 
            documented that they had isolated "the lighting circuit in zone B," but failed to mention they had reconnected it before 
            leaving. Clearer documentation with specific details about the final state of circuits could have prevented this incident.
          </p>
        </div>
      </LessonContent>
    </div>
  ),
  detailedContent: (
    <div className="space-y-6">
      <h4 className="text-xl font-medium text-[#FFC900]">Communication Barriers in Electrical Work</h4>
      <p className="mb-4">
        Several common barriers can impede effective communication on electrical jobs:
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>Technical jargon that customers or other trades may not understand</li>
        <li>Noisy work environments making verbal communication difficult</li>
        <li>Time pressure leading to rushed or incomplete information exchange</li>
        <li>Cultural and language differences on diverse worksites</li>
        <li>Assumptions that others have the same technical knowledge as you</li>
      </ul>
      
      <h4 className="text-xl font-medium text-[#FFC900]">Overcoming Communication Barriers</h4>
      <p className="mb-4">
        Successful electricians develop strategies to overcome these barriers:
      </p>
      <ul className="list-disc pl-5 space-y-3">
        <li>
          <strong className="text-[#FFC900]">Adapt your language:</strong> Use simpler terms with non-specialists, and confirm understanding
        </li>
        <li>
          <strong className="text-[#FFC900]">Use visual aids:</strong> Diagrams, photos, or pointing to physical components can overcome language barriers
        </li>
        <li>
          <strong className="text-[#FFC900]">Document thoroughly:</strong> Written records provide clarity and reference points when verbal communication is challenging
        </li>
        <li>
          <strong className="text-[#FFC900]">Follow up important communications:</strong> Send confirmation emails or texts after important verbal discussions
        </li>
        <li>
          <strong className="text-[#FFC900]">Use the "teach-back" method:</strong> Ask others to explain back to you what they understood to ensure clarity
        </li>
      </ul>
    </div>
  ),
};
