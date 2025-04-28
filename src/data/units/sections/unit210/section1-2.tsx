
import React from 'react';
import { Section210 } from './sections';

export const section1_2: Section210 = {
  title: "Talking with Customers",
  description: "Learn effective techniques for customer communication",
  content: (
    <>
      <p>When dealing with customers:</p>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>Use simple, non-technical language they can understand</li>
        <li>Listen carefully to their needs and concerns</li>
        <li>Be polite and professional at all times</li>
        <li>Explain what you're doing and why</li>
      </ul>
      <p className="mt-2">Remember: To the customer, you represent your company and the electrical trade.</p>
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
