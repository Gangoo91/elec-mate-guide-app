
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { SectionData } from './types';

const SelfEmployment = () => {
  return (
    <LessonContent title="Self-Employment Basics">
      <p className="mb-4">
        For many electricians, self-employment represents an appealing career path offering independence, 
        flexibility, and potentially greater financial rewards. Understanding the basics of self-employment and 
        starting a business is essential for those considering this route.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Business Structures</h4>
        <div className="space-y-3">
          <div>
            <p className="font-medium">Sole Trader:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Setup:</strong> Simplest business structure to establish</li>
              <li><strong>Registration:</strong> Register with HMRC for self-assessment</li>
              <li><strong>Liability:</strong> Personally liable for all business debts</li>
              <li><strong>Taxation:</strong> Pay income tax and National Insurance on profits</li>
              <li><strong>Accounting:</strong> Simpler record-keeping requirements</li>
              <li><strong>Advantages:</strong> Easy setup, complete control, privacy of affairs</li>
              <li><strong>Disadvantages:</strong> Unlimited personal liability, potentially higher taxes at higher earnings</li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium">Limited Company:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Setup:</strong> More complex, register with Companies House</li>
              <li><strong>Structure:</strong> Separate legal entity from owner</li>
              <li><strong>Liability:</strong> Limited to company assets (protects personal assets)</li>
              <li><strong>Taxation:</strong> Corporation tax on profits, personal tax on salary/dividends</li>
              <li><strong>Accounting:</strong> More complex requirements, annual accounts filing</li>
              <li><strong>Advantages:</strong> Limited liability, potentially more tax efficient, enhanced credibility</li>
              <li><strong>Disadvantages:</strong> Higher administrative burden, less privacy, director's responsibilities</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Essential Business Setup Steps</h4>
        <ol className="list-decimal pl-6 space-y-1">
          <li><strong>Business planning:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Define services and target market</li>
              <li>Research local competition</li>
              <li>Set pricing strategy</li>
              <li>Create basic business plan</li>
              <li>Financial forecasting</li>
            </ul>
          </li>
          <li><strong>Legal requirements:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Register with HMRC and/or Companies House</li>
              <li>Register for VAT if turnover will exceed threshold</li>
              <li>Obtain necessary business licenses/permits</li>
              <li>Register with competent person scheme (e.g., NICEIC, NAPIT)</li>
              <li>Check if you need planning permission/building regulations</li>
            </ul>
          </li>
          <li><strong>Insurance:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Public liability insurance (minimum £2-5 million)</li>
              <li>Employers' liability (if employing others)</li>
              <li>Professional indemnity insurance</li>
              <li>Tools and equipment insurance</li>
              <li>Vehicle insurance for business use</li>
              <li>Personal accident and illness insurance</li>
            </ul>
          </li>
          <li><strong>Financial setup:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Business bank account</li>
              <li>Accounting system (software or accountant)</li>
              <li>Payment processing facilities</li>
              <li>Initial capital investment</li>
              <li>Emergency fund</li>
            </ul>
          </li>
        </ol>
      </div>
      
      <div className="bg-[#2a2d24] p-4 rounded-md">
        <h4 className="font-medium text-[#FFC900] mb-2">Business Management Essentials</h4>
        <div className="space-y-3">
          <div>
            <p className="font-medium">Financial Management:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Record keeping of income and expenses</li>
              <li>Regular review of financial performance</li>
              <li>Cash flow management</li>
              <li>Tax planning and compliance</li>
              <li>Setting aside money for tax liabilities</li>
              <li>Invoicing and debt collection</li>
              <li>Budgeting for quiet periods</li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium">Time Management:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Scheduling jobs efficiently</li>
              <li>Allocating time for administration</li>
              <li>Managing travel time between jobs</li>
              <li>Planning for quotations and estimates</li>
              <li>Creating systems for recurring tasks</li>
              <li>Work-life balance considerations</li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium">Client Management:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Building and maintaining client database</li>
              <li>Professional communication systems</li>
              <li>Follow-up processes for quotes and completed work</li>
              <li>Managing customer expectations</li>
              <li>Handling complaints effectively</li>
              <li>Creating repeat business opportunities</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-4 bg-[#2a2d24] p-4 rounded-md">
        <h4 className="font-medium text-[#FFC900] mb-2">Marketing Your Business</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Brand identity:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Business name and logo</li>
              <li>Professional image and values</li>
              <li>Unique selling proposition</li>
            </ul>
          </li>
          <li><strong>Online presence:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Professional website</li>
              <li>Google My Business listing</li>
              <li>Social media profiles</li>
              <li>Online directories and trade websites</li>
            </ul>
          </li>
          <li><strong>Traditional marketing:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Business cards and letterhead</li>
              <li>Vehicle signage</li>
              <li>Branded workwear</li>
              <li>Local advertising</li>
              <li>Site boards at work locations</li>
            </ul>
          </li>
          <li><strong>Reputation building:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Requesting and managing reviews</li>
              <li>Case studies of successful projects</li>
              <li>Testimonials from satisfied customers</li>
              <li>Referral incentive programs</li>
              <li>Networking with related trades</li>
            </ul>
          </li>
        </ul>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Common Challenges and Solutions</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Irregular workload:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Build relationships with larger contractors for overflow work</li>
              <li>Develop maintenance contracts for regular income</li>
              <li>Offer seasonal services to balance workload</li>
              <li>Build financial buffer for quiet periods</li>
            </ul>
          </li>
          <li><strong>Administrative burden:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Schedule regular time for administration</li>
              <li>Use accounting software to streamline processes</li>
              <li>Consider outsourcing bookkeeping/accounting</li>
              <li>Implement efficient systems from the start</li>
            </ul>
          </li>
          <li><strong>Working in isolation:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Build networks with other tradespeople</li>
              <li>Join trade associations and networking groups</li>
              <li>Participate in forums and online communities</li>
              <li>Consider working collaboratively on larger projects</li>
            </ul>
          </li>
          <li><strong>Business growth:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Plan carefully before taking on employees</li>
              <li>Consider subcontractor relationships first</li>
              <li>Ensure systems can scale with growth</li>
              <li>Develop management skills alongside technical skills</li>
            </ul>
          </li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section6_4: SectionData = {
  title: "Self-Employment Basics",
  description: "Introduction to self-employment in the electrical industry",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand different business structures and their implications</li>
            <li>Identify essential steps for setting up an electrical business</li>
            <li>Recognize key business management requirements</li>
            <li>Learn basic marketing approaches for electrical businesses</li>
            <li>Understand common challenges and potential solutions</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Self-Employment and Starting a Business" 
        content={<SelfEmployment />}
      />
    </>
  )
};
