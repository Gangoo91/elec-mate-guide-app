
import React from 'react';
import { Section210 } from './types';
import LessonContent from "@/components/units/LessonContent";

export const section1_2: Section210 = {
  title: "Communicating with Customers",
  description: "Learn how to effectively communicate with clients and customers",
  content: (
    <div className="space-y-8">
      <LessonContent title="Learning Objectives">
        <ul className="list-disc pl-5 space-y-2">
          <li>Understand how to explain technical concepts to non-technical customers</li>
          <li>Learn techniques for managing customer expectations</li>
          <li>Develop skills for handling challenging customer interactions</li>
        </ul>
      </LessonContent>
      
      <LessonContent title="1.2.1 Translating Technical Information">
        <p className="mb-4">
          One of the biggest challenges electricians face is explaining complex technical information to customers who have no electrical background:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Avoid jargon and technical terms (MCBs, RCDs, etc.) unless you explain them first</li>
          <li>Use everyday analogies to explain electrical concepts (e.g., comparing electrical flow to water)</li>
          <li>Focus on what the customer needs to know, not everything you know</li>
          <li>Use visual aids like diagrams or photos when appropriate</li>
        </ul>
        <div className="bg-[#353a2c] p-4 rounded-md border border-[#FFC900]/30 mb-4">
          <h4 className="text-[#FFC900] font-medium mb-2">Example: Instead of:</h4>
          <p className="text-[#FFC900]/80 italic">
            "You need a new 30mA Type A RCD because the existing device isn't compliant with the 18th Edition."
          </p>
          <h4 className="text-[#FFC900] font-medium mt-4 mb-2">Say:</h4>
          <p className="text-[#FFC900]/80">
            "Your current safety switch is outdated and doesn't meet the latest safety standards. I recommend replacing it with a newer version that provides better protection against electric shock."
          </p>
        </div>
        <p>
          Remember that your goal is to help the customer make informed decisions, not to impress them with your technical knowledge.
        </p>
      </LessonContent>
      
      <LessonContent title="1.2.2 Setting Clear Expectations">
        <p className="mb-4">
          Many customer issues arise from unmet expectations. Clear communication helps prevent these problems:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Be specific about what work will be done</li>
          <li>Provide realistic timeframes for completion</li>
          <li>Be upfront about costs and potential additional charges</li>
          <li>Explain any limitations or potential issues that might arise</li>
          <li>Discuss what the customer needs to do (e.g., clear access, be present)</li>
        </ul>
        <p className="mb-4">
          When providing quotes or estimates, always make clear:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>What is included in the price</li>
          <li>What is excluded</li>
          <li>Conditions that might affect the final cost</li>
          <li>How long the quote is valid for</li>
        </ul>
        <p>
          Setting clear expectations helps build trust and reduces the likelihood of disputes later.
        </p>
      </LessonContent>
      
      <LessonContent title="1.2.3 Handling Difficult Conversations">
        <p className="mb-4">
          Even the best electricians sometimes need to deliver difficult news to customers:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>When existing installations are unsafe and need costly repairs</li>
          <li>When work will take longer or cost more than initially expected</li>
          <li>When a customer's preferred solution isn't compliant with regulations</li>
        </ul>
        <p className="mb-4">
          Tips for handling these situations:
        </p>
        <ul className="list-disc pl-5 space-y-3 mb-4">
          <li>
            <strong className="text-[#FFC900]">Be direct but empathetic:</strong> Don't sugarcoat safety issues, but acknowledge the impact on the customer
          </li>
          <li>
            <strong className="text-[#FFC900]">Provide options:</strong> When possible, give the customer choices along with your recommendation
          </li>
          <li>
            <strong className="text-[#FFC900]">Explain why:</strong> Help them understand the reasoning behind requirements or changes
          </li>
          <li>
            <strong className="text-[#FFC900]">Remain calm:</strong> If a customer becomes upset, maintain your professionalism
          </li>
        </ul>
        <div className="bg-[#353a2c] p-4 rounded-md border border-[#FFC900]/30">
          <h4 className="text-[#FFC900] font-medium mb-2">Scenario: Delivering Unexpected News</h4>
          <p className="text-[#FFC900]/80 mb-2">
            "I understand this is disappointing news, and I wish I had better options for you. Unfortunately, your consumer unit doesn't meet current safety standards, and simply replacing the faulty switch would leave other serious safety issues unaddressed. I can show you exactly what I'm concerned about, and we can discuss the different options for making your electrical installation safe."
          </p>
        </div>
      </LessonContent>
    </div>
  ),
  detailedContent: (
    <div className="space-y-6">
      <h4 className="text-xl font-medium text-[#FFC900]">Customer Communication Checklist</h4>
      <p className="mb-4">
        Use this checklist when communicating with customers about electrical work:
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>Introduce yourself clearly, including your qualifications if relevant</li>
        <li>Listen carefully to the customer's description of their needs or problems</li>
        <li>Ask clarifying questions to ensure you fully understand their requirements</li>
        <li>Explain what you're going to do before doing it</li>
        <li>If you discover additional issues, explain them clearly with reasons</li>
        <li>Provide written documentation of work done and any recommendations</li>
        <li>Explain any user instructions or maintenance requirements</li>
        <li>Follow up after significant work to ensure customer satisfaction</li>
      </ul>
      
      <h4 className="text-xl font-medium text-[#FFC900]">Cultural Considerations</h4>
      <p className="mb-4">
        In a diverse society, you may work with customers from different cultural backgrounds:
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>Be aware that norms around eye contact, personal space, and formality vary between cultures</li>
        <li>When working in someone's home, be sensitive to cultural or religious practices</li>
        <li>If there are language barriers, speak clearly rather than loudly, and use visual aids</li>
        <li>Avoid using slang, idioms, or humor that might not translate well</li>
        <li>Be patient if additional explanation is needed</li>
      </ul>
      
      <h4 className="text-xl font-medium text-[#FFC900]">Building Long-term Customer Relationships</h4>
      <p className="mb-4">
        Repeat business and referrals are valuable in the electrical trade. Build relationships by:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Following up after significant work to ensure everything is functioning correctly</li>
        <li>Providing additional information about maintenance or upgrades when relevant</li>
        <li>Responding promptly to calls or messages, even for small jobs</li>
        <li>Remembering details about previous work done for returning customers</li>
        <li>Asking for feedback and acting on it to improve your service</li>
      </ul>
    </div>
  ),
};
