
import React from 'react';
import { Section210 } from './types';
import LessonContent from "@/components/units/LessonContent";

export const section1_4: Section210 = {
  id: "1.4",
  title: "Written Communication",
  description: "Learn effective written communication for electrical documentation",
  content: (
    <div className="space-y-8">
      <LessonContent title="Learning Objectives">
        <ul className="list-disc pl-5 space-y-2">
          <li>Understand the importance of clear written documentation</li>
          <li>Learn how to complete common electrical forms and reports</li>
          <li>Develop skills for effective email and digital communication</li>
        </ul>
      </LessonContent>
      
      <LessonContent title="1.4.1 Documentation Fundamentals">
        <p className="mb-4">
          Written documentation serves multiple important purposes in electrical work:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Creates a permanent record of work completed</li>
          <li>Provides evidence of compliance with regulations</li>
          <li>Helps future workers understand the installation</li>
          <li>Protects you legally in case of disputes</li>
          <li>Assists with invoicing and payment</li>
        </ul>
        <p className="mb-4">
          For documentation to be effective, it must be:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Clear and legible</li>
          <li>Accurate and truthful</li>
          <li>Complete with all required information</li>
          <li>Properly dated and signed</li>
          <li>Stored securely and accessibly</li>
        </ul>
        <p>
          Even if you prefer practical work, developing good documentation habits is essential for professional success.
        </p>
      </LessonContent>
      
      <LessonContent title="1.4.2 Common Electrical Documentation">
        <p className="mb-4">
          Electricians regularly complete various types of documentation:
        </p>
        <ul className="list-disc pl-5 space-y-3 mb-4">
          <li>
            <strong className="text-[#FFC900]">Certificates:</strong> Electrical Installation Certificates (EICs), Minor Works Certificates, etc.
          </li>
          <li>
            <strong className="text-[#FFC900]">Test sheets:</strong> Recording results of continuity, insulation resistance, and other tests
          </li>
          <li>
            <strong className="text-[#FFC900]">Job sheets:</strong> Documenting time spent and materials used
          </li>
          <li>
            <strong className="text-[#FFC900]">Risk assessments:</strong> Identifying and mitigating hazards
          </li>
          <li>
            <strong className="text-[#FFC900]">Method statements:</strong> Detailed work procedures for complex tasks
          </li>
          <li>
            <strong className="text-[#FFC900]">Reports:</strong> For inspections, surveys, or unusual findings
          </li>
        </ul>
        <div className="bg-[#353a2c] p-4 rounded-md border border-[#FFC900]/30 mb-4">
          <h4 className="text-[#FFC900] font-medium mb-2">Documentation Tips</h4>
          <ul className="list-disc pl-5 space-y-1 text-[#FFC900]/80">
            <li>Complete documentation as soon as possible while details are fresh</li>
            <li>Use standardized forms whenever available</li>
            <li>Take photographs to supplement written descriptions</li>
            <li>If working digitally, back up your records</li>
          </ul>
        </div>
        <p>
          Remember that proper documentation protects both you and your customers.
        </p>
      </LessonContent>
      
      <LessonContent title="1.4.3 Digital Communication">
        <p className="mb-4">
          Email and messaging are increasingly important in the electrical trade:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>For communicating with customers about appointments, quotes, and updates</li>
          <li>For ordering materials and dealing with suppliers</li>
          <li>For coordinating with colleagues and other trades</li>
          <li>For submitting documentation to building control or certification bodies</li>
        </ul>
        <p className="mb-4">
          Best practices for professional digital communication:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Use a professional email address (ideally company-branded)</li>
          <li>Include clear subject lines</li>
          <li>Start with a greeting and end with your name and contact details</li>
          <li>Be concise but complete</li>
          <li>Proofread before sending</li>
          <li>Respond to messages within a reasonable timeframe</li>
        </ul>
        <p className="mb-4">
          When sending photos or attachments:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Ensure images are clear and properly oriented</li>
          <li>Label attachments clearly</li>
          <li>Consider file sizes, especially when sending multiple images</li>
          <li>Explain what the recipient is looking at in images</li>
        </ul>
        <p>
          Digital communication creates a permanent record, so always maintain the same professionalism as you would in person.
        </p>
      </LessonContent>
    </div>
  ),
  detailedContent: (
    <div className="space-y-6">
      <h4 className="text-xl font-medium text-[#FFC900]">Writing for Different Audiences</h4>
      <p className="mb-4">
        Adjust your writing style based on who will read your documentation:
      </p>
      <ul className="list-disc pl-5 space-y-3 mb-6">
        <li>
          <strong className="text-[#FFC900]">For customers:</strong> Use non-technical language, focus on what they need to know, and explain any implications clearly
        </li>
        <li>
          <strong className="text-[#FFC900]">For other electricians:</strong> Use proper technical terms, focus on details that would be relevant to them
        </li>
        <li>
          <strong className="text-[#FFC900]">For official certification:</strong> Use precise regulatory language and ensure all required fields are complete
        </li>
        <li>
          <strong className="text-[#FFC900]">For insurance or legal purposes:</strong> Be factual, avoid opinions or speculation, and document thoroughly
        </li>
      </ul>
      
      <h4 className="text-xl font-medium text-[#FFC900]">Electrical Diagrams and Drawings</h4>
      <p className="mb-4">
        Visual documentation is often as important as written documentation:
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>Use standard electrical symbols consistently</li>
        <li>Label components clearly</li>
        <li>Include dimensions where relevant</li>
        <li>Provide a legend for any non-standard symbols</li>
        <li>Use proper scale when necessary</li>
        <li>Date and sign drawings</li>
      </ul>
      
      <h4 className="text-xl font-medium text-[#FFC900]">Documentation and Liability</h4>
      <p className="mb-4">
        Proper documentation provides legal protection:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Keep copies of all certificates and reports you issue</li>
        <li>Document customer decisions, especially if they decline recommended safety work</li>
        <li>Record any existing issues you identify but aren't contracted to fix</li>
        <li>Keep records for at least the duration of any warranty plus the statutory limitation period</li>
        <li>Follow data protection regulations when storing customer information</li>
        <li>Take photographs before, during, and after significant work</li>
      </ul>
      <p className="mt-4">
        In the rare event of disputes or incidents, thorough documentation is often your best defense.
      </p>
    </div>
  ),
};
