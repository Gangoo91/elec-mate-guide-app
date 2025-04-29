
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { SectionData } from './types';

const BrandRepresentation = () => {
  return (
    <LessonContent title="Brand Representation">
      <p className="mb-4">
        As an electrician or electrical contractor, you represent your company's brand in every interaction 
        with customers and the public. Understanding how to properly represent a brand is essential for building 
        trust, establishing reputation, and growing a sustainable business.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Understanding Brand Identity</h4>
        <p className="mb-2">
          A brand is more than just a logo or company name—it's the entire experience customers have with your business.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Brand elements:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Visual identity (logo, colors, typography)</li>
              <li>Company values and mission</li>
              <li>Service quality and standards</li>
              <li>Communication style</li>
              <li>Reputation in the marketplace</li>
            </ul>
          </li>
          <li><strong>Brand perception:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>How customers view your business</li>
              <li>Emotional connections formed</li>
              <li>Trust and reliability associations</li>
              <li>Differentiation from competitors</li>
            </ul>
          </li>
          <li><strong>Brand promise:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>What customers can expect from your service</li>
              <li>Consistency in delivery</li>
              <li>Unique selling propositions</li>
              <li>Value proposition</li>
            </ul>
          </li>
        </ul>
      </div>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Personal Representation of the Brand</h4>
        <div className="space-y-3">
          <div>
            <p className="font-medium">Appearance:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Clean, appropriate workwear with company branding</li>
              <li>Professional personal grooming</li>
              <li>Proper use of PPE (reflects safety commitment)</li>
              <li>Clean and organized work vehicle</li>
              <li>Neat and professional tools and equipment</li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium">Behavior and Communication:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Courteous and respectful interactions</li>
              <li>Appropriate language and tone</li>
              <li>Active listening to customer needs</li>
              <li>Clear explanation of technical matters</li>
              <li>Timely communication and responsiveness</li>
              <li>Demonstrating expertise and confidence</li>
              <li>Consistency with company values</li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium">Work Quality:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Meeting or exceeding industry standards</li>
              <li>Attention to detail</li>
              <li>Cleanliness and tidiness of work areas</li>
              <li>Proper testing and certification</li>
              <li>Following company procedures consistently</li>
              <li>Respecting customer property</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-[#2a2d24] p-4 rounded-md">
        <h4 className="font-medium text-[#FFC900] mb-2">Digital Brand Representation</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Social media:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Awareness that personal posts may reflect on the company</li>
              <li>Professional content when representing the company</li>
              <li>Respecting client confidentiality</li>
              <li>Following company social media policies</li>
            </ul>
          </li>
          <li><strong>Online reviews:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Understanding the impact of customer reviews</li>
              <li>Encouraging satisfied customers to leave positive reviews</li>
              <li>Professional responses to negative reviews</li>
              <li>Learning from feedback</li>
            </ul>
          </li>
          <li><strong>Email and digital communication:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Professional email addresses and signatures</li>
              <li>Prompt and courteous responses</li>
              <li>Correct grammar and spelling</li>
              <li>Appropriate tone and formality</li>
            </ul>
          </li>
        </ul>
      </div>
      
      <div className="mt-4 bg-[#2a2d24] p-4 rounded-md">
        <h4 className="font-medium text-[#FFC900] mb-2">Building Brand Trust</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Consistency:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Delivering reliable service every time</li>
              <li>Maintaining quality standards</li>
              <li>Coherent messaging across all touchpoints</li>
            </ul>
          </li>
          <li><strong>Transparency:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Honest communication about prices, timelines, and issues</li>
              <li>Clear documentation and explanations</li>
              <li>No hidden charges or surprises</li>
            </ul>
          </li>
          <li><strong>Accountability:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Taking responsibility for work quality</li>
              <li>Making things right when problems occur</li>
              <li>Following through on promises and commitments</li>
            </ul>
          </li>
          <li><strong>Expertise:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Demonstrating technical knowledge</li>
              <li>Providing valuable advice and solutions</li>
              <li>Continuous professional development</li>
              <li>Appropriate certifications and registrations</li>
            </ul>
          </li>
        </ul>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Company Materials and Communications</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Marketing materials:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Proper use of company logo and branding</li>
              <li>Consistent design elements</li>
              <li>Professional quality print and digital materials</li>
            </ul>
          </li>
          <li><strong>Documentation:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Professional quotes, invoices, and reports</li>
              <li>Branded templates and forms</li>
              <li>Clear and accurate information</li>
            </ul>
          </li>
          <li><strong>Telephone etiquette:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Professional greeting identifying the company</li>
              <li>Courteous and helpful manner</li>
              <li>Prompt response to messages</li>
              <li>Clear communication</li>
            </ul>
          </li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section6_3: SectionData = {
  title: "Brand Representation",
  description: "Properly representing your company's brand",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand what constitutes a brand in the electrical industry</li>
            <li>Learn how personal appearance and behavior represent the brand</li>
            <li>Recognize the importance of digital brand representation</li>
            <li>Identify key factors in building brand trust</li>
            <li>Learn about proper use of company materials and communications</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Brand Representation in the Electrical Industry" 
        content={<BrandRepresentation />}
      />
    </>
  )
};
