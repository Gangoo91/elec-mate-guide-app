
import React from 'react';
import { Section210 } from './types';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";

const SectionContent = () => {
  return (
    <LessonContent title="Talking with Customers">
      <p className="mb-4">
        Effective customer communication is crucial for success in the electrical trade. This section covers techniques
        for communicating clearly and professionally with customers.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Key Principles for Customer Communication</h4>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Use simple, non-technical language they can understand</li>
          <li>Listen carefully to their needs and concerns</li>
          <li>Be polite and professional at all times</li>
          <li>Explain what you're doing and why</li>
          <li>Remember: you represent your company and the electrical trade</li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Explaining Technical Information</h4>
          <p className="mb-2">Most customers don't understand electrical terminology:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Avoid jargon like "consumer unit" - say "fuse box" instead</li>
            <li>Use analogies to explain complex concepts</li>
            <li>Break down processes into simple steps</li>
            <li>Use visual aids when helpful</li>
            <li>Check for understanding by asking questions</li>
          </ul>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Active Listening Skills</h4>
          <p className="mb-2">Understanding customer needs requires careful listening:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Give customers your full attention</li>
            <li>Take notes on specific requirements</li>
            <li>Ask clarifying questions to confirm understanding</li>
            <li>Summarize what you've heard before proceeding</li>
            <li>Address concerns directly rather than dismissing them</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Handling Difficult Situations</h4>
        <p className="mb-2">When challenges arise:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Stay calm and professional, even if the customer is upset</li>
          <li>Focus on solutions rather than problems</li>
          <li>Be honest if mistakes have been made</li>
          <li>Know when to escalate issues to a supervisor</li>
          <li>Follow up to ensure customer satisfaction</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section1_2: Section210 = {
  title: "Talking with Customers",
  description: "Learn effective techniques for customer communication",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Use appropriate language when explaining technical matters to customers</li>
            <li>Apply active listening techniques to understand customer requirements</li>
            <li>Handle difficult customer situations professionally</li>
            <li>Project a positive image of yourself and your company</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Customer Communication Skills" 
        content={<SectionContent />}
      />
    </>
  ),
  detailedContent: (
    <>
      <p className="mb-4">Effective customer communication is essential for success in the electrical trade.</p>
      
      <h4 className="text-xl text-[#FFC900] mb-2">Speaking Simply</h4>
      <p className="mb-4">Most customers don't understand electrical terminology. When explaining issues:</p>
      <ul className="list-disc pl-5 mb-4 space-y-1">
        <li>Avoid technical jargon when possible</li>
        <li>Use analogies to explain complex concepts</li>
        <li>Check for understanding by asking questions</li>
        <li>Use visual aids when helpful</li>
      </ul>
      
      <h4 className="text-xl text-[#FFC900] mb-2">Active Listening</h4>
      <p className="mb-4">Understanding customer needs requires careful listening:</p>
      <ul className="list-disc pl-5 mb-4 space-y-1">
        <li>Give customers your full attention</li>
        <li>Ask clarifying questions</li>
        <li>Summarize what you've heard to confirm understanding</li>
        <li>Take notes on specific requirements or concerns</li>
      </ul>
      
      <h4 className="text-xl text-[#FFC900] mb-2">Professionalism</h4>
      <p className="mb-4">Your behavior shapes how customers view the entire electrical profession:</p>
      <ul className="list-disc pl-5 mb-4 space-y-1">
        <li>Arrive on time and dress appropriately</li>
        <li>Be respectful of customers' homes and belongings</li>
        <li>Maintain a calm, professional demeanor even in challenging situations</li>
        <li>Follow through on commitments and keep customers informed of progress</li>
      </ul>
    </>
  )
};
