
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { SectionData } from './types';

const CustomerService = () => {
  return (
    <LessonContent title="Customer Service in the Electrical Industry">
      <p className="mb-4">
        Excellent customer service is not just a nice-to-have in the electrical industry; it's a key differentiator 
        that can significantly impact business success, reputation, and customer retention.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Why Customer Service Matters</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Reputation and referrals:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Word-of-mouth recommendations are crucial in the electrical trade</li>
              <li>Positive reviews boost online visibility and credibility</li>
              <li>Repeat business from satisfied customers is more cost-effective than finding new ones</li>
            </ul>
          </li>
          <li><strong>Customer retention:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Costs 5-25 times more to acquire a new customer than retain an existing one</li>
              <li>Regular clients provide stable, predictable income</li>
              <li>Long-term relationships lead to additional work opportunities</li>
            </ul>
          </li>
          <li><strong>Competitive advantage:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Distinguishes your service from competitors with similar technical capabilities</li>
              <li>Allows for premium pricing based on service quality</li>
              <li>Builds customer loyalty even when lower-priced alternatives exist</li>
            </ul>
          </li>
        </ul>
      </div>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Key Elements of Good Customer Service</h4>
        <div className="space-y-3">
          <div>
            <p className="font-medium">Professional Communication:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Clear, jargon-free explanation of technical issues</li>
              <li>Active listening to understand customer needs and concerns</li>
              <li>Prompt response to inquiries and calls</li>
              <li>Regular updates during longer jobs</li>
              <li>Diplomatic handling of complaints or issues</li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium">Reliability and Punctuality:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Arriving at the agreed time or providing notice of delays</li>
              <li>Meeting promised deadlines</li>
              <li>Following through on commitments</li>
              <li>Providing realistic timeframes rather than overpromising</li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium">Professionalism:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Clean, identifiable workwear</li>
              <li>Respectful treatment of customer property</li>
              <li>Cleaning up after work completion</li>
              <li>Professional paperwork and documentation</li>
              <li>Appropriate language and behavior</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-[#2a2d24] p-4 rounded-md">
        <h4 className="font-medium text-[#FFC900] mb-2">Customer Service Lifecycle</h4>
        <ol className="list-decimal pl-6 space-y-1">
          <li><strong>Initial contact:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Prompt, professional response to inquiries</li>
              <li>Clear communication about availability</li>
              <li>Thorough understanding of customer requirements</li>
            </ul>
          </li>
          <li><strong>Quotation and booking:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Clear, detailed quotations with transparent pricing</li>
              <li>Explanation of options and recommendations</li>
              <li>Convenient scheduling process</li>
              <li>Confirmation of appointments</li>
            </ul>
          </li>
          <li><strong>Service delivery:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Punctual arrival</li>
              <li>Introduction and explanation of process</li>
              <li>Professional workmanship</li>
              <li>Keeping customer informed of progress</li>
              <li>Consulting before making changes or additional work</li>
            </ul>
          </li>
          <li><strong>Job completion:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Demonstration of work completed</li>
              <li>Explanation of how to use new installations</li>
              <li>Providing necessary documentation and certificates</li>
              <li>Thorough cleanup</li>
              <li>Final inspection with customer</li>
            </ul>
          </li>
          <li><strong>After-service:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Follow-up to ensure satisfaction</li>
              <li>Prompt response to any issues</li>
              <li>Warranty service when required</li>
              <li>Reminder for future maintenance or inspections</li>
            </ul>
          </li>
        </ol>
      </div>
      
      <div className="mt-4 bg-[#2a2d24] p-4 rounded-md">
        <h4 className="font-medium text-[#FFC900] mb-2">Handling Difficult Situations</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Dealing with complaints:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Listen without interrupting</li>
              <li>Acknowledge the customer's concern</li>
              <li>Apologize where appropriate</li>
              <li>Take ownership of resolution</li>
              <li>Clearly explain what actions will be taken</li>
              <li>Follow up to ensure resolution</li>
            </ul>
          </li>
          <li><strong>When things go wrong:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Communicate issues promptly</li>
              <li>Be honest about problems encountered</li>
              <li>Offer solutions and alternatives</li>
              <li>Make amends appropriately</li>
              <li>Learn from the experience</li>
            </ul>
          </li>
          <li><strong>Managing expectations:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Be realistic about what can be achieved</li>
              <li>Explain limitations and constraints</li>
              <li>Provide clear information about costs</li>
              <li>Document agreements to avoid misunderstandings</li>
            </ul>
          </li>
        </ul>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Continuous Improvement</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Actively seek customer feedback</li>
          <li>Implement improvements based on feedback</li>
          <li>Stay updated on industry standards and customer expectations</li>
          <li>Train and develop customer service skills</li>
          <li>Monitor online reviews and respond appropriately</li>
          <li>Learn from competitors' best practices</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section6_1: SectionData = {
  title: "Customer Service",
  description: "The importance of good customer service in electrical work",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand why good customer service is essential in the electrical industry</li>
            <li>Identify the key components of effective customer service</li>
            <li>Learn how to manage the customer service lifecycle</li>
            <li>Develop strategies for handling difficult situations</li>
            <li>Recognize the importance of continuous improvement in customer service</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Customer Service Principles" 
        content={<CustomerService />}
      />
    </>
  )
};
