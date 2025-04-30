
import React from 'react';
import { Section210 } from './types';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";

const SectionContent = () => {
  return (
    <LessonContent title="Why Communication Matters">
      <p className="mb-4">
        Good communication skills are just as important as technical expertise for electricians. This section explores why
        effective communication is essential in the electrical trade.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Benefits of Effective Communication</h4>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Prevents misunderstandings that could lead to safety incidents</li>
          <li>Builds trust with customers and colleagues</li>
          <li>Makes work go more smoothly and efficiently</li>
          <li>Reduces costly errors and rework</li>
          <li>Enhances your professional reputation</li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Safety Implications</h4>
          <p className="mb-2">Clear communication is crucial for safety reasons:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Risk Awareness:</strong> Communicating potential hazards to others on site</li>
            <li><strong>Work Coordination:</strong> Ensuring everyone knows what's happening and when</li>
            <li><strong>Emergency Response:</strong> Clear instructions during safety incidents</li>
            <li><strong>Isolation Procedures:</strong> Confirming when circuits are live or dead</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Professional Development</h4>
          <p className="mb-2">Communication affects your career progress:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Electricians with strong communication skills often advance more quickly</li>
            <li>Leadership positions require excellent communication abilities</li>
            <li>Customer-facing roles value clear explanations and rapport-building</li>
            <li>Working with other trades requires effective interdisciplinary communication</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Real-World Impact</h4>
        <p className="mb-2">Poor communication can lead to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Incorrect installations requiring costly rework</li>
          <li>Safety incidents that could have been prevented</li>
          <li>Dissatisfied customers and damaged reputation</li>
          <li>Conflict with colleagues and other trades</li>
          <li>Missed project deadlines and increased costs</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section1_1: Section210 = {
  title: "Why Communication Matters",
  description: "Understand the importance of effective communication in the electrical trade",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Recognize the importance of communication skills in electrical work</li>
            <li>Understand how communication affects safety and efficiency</li>
            <li>Identify situations where clear communication is critical</li>
            <li>Appreciate the link between communication skills and career progression</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Communication Fundamentals" 
        content={<SectionContent />}
      />
    </>
  ),
  detailedContent: (
    <>
      <p className="mb-4">As an electrician, your ability to communicate effectively can be just as important as your technical skills. Clear communication ensures:</p>
      
      <h4 className="text-xl text-[#FFC900] mb-2">Safety</h4>
      <p className="mb-4">Miscommunication can lead to serious safety incidents. When you clearly communicate potential hazards, work procedures, and safety requirements, you help protect yourself and others from harm.</p>
      
      <h4 className="text-xl text-[#FFC900] mb-2">Customer Satisfaction</h4>
      <p className="mb-4">Customers appreciate electricians who can explain technical issues in ways they understand. Good communication builds trust and leads to repeat business and referrals.</p>
      
      <h4 className="text-xl text-[#FFC900] mb-2">Efficiency</h4>
      <p className="mb-4">Clear instructions and expectations help jobs run smoothly. When everyone understands what needs to be done, work progresses with fewer delays and misunderstandings.</p>
      
      <h4 className="text-xl text-[#FFC900] mb-2">Career Advancement</h4>
      <p className="mb-4">Electricians with strong communication skills often advance more quickly. The ability to clearly present ideas, lead teams, and interact professionally with clients becomes increasingly important as you move up in your career.</p>
    </>
  )
};
