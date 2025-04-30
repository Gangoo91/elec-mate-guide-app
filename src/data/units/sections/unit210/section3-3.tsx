
import React from 'react';
import { Section210 } from './types';
import LessonContent from '@/components/units/LessonContent';

export const section3_3: Section210 = {
  id: "3.3",
  title: "Digital Communication",
  description: "Using email, messaging and digital tools effectively",
  content: (
    <>
      <LessonContent title="Digital Communication for Electrical Professionals">
        <p>
          In today's connected workplace, digital communication tools have become essential for electrical 
          professionals. Effective use of these tools can improve project coordination, create documentation 
          trails, and allow for faster information sharing with clients and colleagues.
        </p>
        
        <h3 className="text-lg font-medium text-[#FFC900] mt-6 mb-3">Email Communication</h3>
        <p>Email remains one of the most important professional communication tools:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Clear subject lines:</strong> Use descriptive subjects like "Electrical Inspection Report - 123 Main St" rather than vague ones like "Report"
          </li>
          <li>
            <strong>Professional tone:</strong> Maintain formality appropriate to your relationship with the recipient
          </li>
          <li>
            <strong>Concise content:</strong> Keep messages focused and to the point
          </li>
          <li>
            <strong>Proper formatting:</strong> Use paragraphs, bullet points, and highlighting for readability
          </li>
          <li>
            <strong>Documentation:</strong> Email provides a written record of agreements and information
          </li>
        </ul>
        
        <h3 className="text-lg font-medium text-[#FFC900] mt-6 mb-3">Messaging and Chat Applications</h3>
        <p>For quick communication with team members:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Appropriate use:</strong> Good for quick updates and questions, not for complex discussions
          </li>
          <li>
            <strong>Response expectations:</strong> Acknowledge time-sensitive messages promptly
          </li>
          <li>
            <strong>Clarity:</strong> Even in informal channels, be clear and specific about technical matters
          </li>
        </ul>
        
        <h3 className="text-lg font-medium text-[#FFC900] mt-6 mb-3">Digital Project Management Tools</h3>
        <p>Many electrical companies now use specialized software for:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Job scheduling and tracking</li>
          <li>Material ordering and inventory management</li>
          <li>Time tracking and reporting</li>
          <li>Digital documentation of completed work</li>
          <li>Photo documentation of installations or issues</li>
        </ul>
        
        <h3 className="text-lg font-medium text-[#FFC900] mt-6 mb-3">Digital Communication Best Practices</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Choose the right medium:</strong> Consider urgency, complexity, and formality requirements
          </li>
          <li>
            <strong>Security awareness:</strong> Be careful with sensitive information like client details or access codes
          </li>
          <li>
            <strong>Response timeliness:</strong> Set expectations for how quickly you'll respond to different types of communications
          </li>
          <li>
            <strong>Digital file organization:</strong> Use clear file naming and folder structures for documentation
          </li>
        </ul>
        
        <div className="bg-[#353a2c] p-4 rounded-md mt-6">
          <p className="text-[#FFC900] font-medium">Digital Documentation Tip</p>
          <p>When taking photos of electrical installations for documentation, include a measuring tool in the image when relevant, and ensure good lighting and focus. Photos should be organized by job and date for easy reference later.</p>
        </div>
      </LessonContent>
    </>
  )
};
