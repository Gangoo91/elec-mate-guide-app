
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import { SectionData } from './types';

export const section6_1: SectionData = {
  title: "Business Awareness",
  description: "Understanding business operations in the electrical industry",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand the importance of customer service in the electrical industry</li>
            <li>Learn basic principles of financial transactions in business operations</li>
            <li>Recognize the importance of brand representation</li>
            <li>Gain foundational knowledge about self-employment</li>
          </ul>
        }
      />
      
      <ContentSection 
        title="Customer Service Excellence"
        content={
          <div className="space-y-4">
            <p>
              In the electrical industry, technical skills must be complemented by strong customer service to build a successful business.
            </p>
            
            <h3 className="text-lg font-medium">Why Customer Service Matters</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Repeat Business:</span> Satisfied customers are more likely to return and recommend
              </li>
              <li>
                <span className="font-medium">Premium Pricing:</span> Excellent service allows businesses to command higher rates
              </li>
              <li>
                <span className="font-medium">Competitive Advantage:</span> Distinguishes businesses in a crowded marketplace
              </li>
              <li>
                <span className="font-medium">Reduced Marketing Costs:</span> Word-of-mouth referrals reduce need for advertising
              </li>
              <li>
                <span className="font-medium">Smoother Operations:</span> Good client relationships lead to fewer disputes
              </li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">Customer Service Best Practices</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">First Impressions:</span> Professional appearance, punctuality, and preparation
              </li>
              <li>
                <span className="font-medium">Clear Communication:</span> Explaining work clearly without unnecessary jargon
              </li>
              <li>
                <span className="font-medium">Setting Expectations:</span> Providing realistic timelines and cost estimates
              </li>
              <li>
                <span className="font-medium">Respect for Property:</span> Using dust sheets, cleaning up, and taking care with belongings
              </li>
              <li>
                <span className="font-medium">Managing Disruption:</span> Minimizing inconvenience to building occupants
              </li>
              <li>
                <span className="font-medium">Problem Resolution:</span> Addressing concerns promptly and professionally
              </li>
              <li>
                <span className="font-medium">Follow-Up:</span> Checking satisfaction after work completion
              </li>
            </ul>
          </div>
        }
      />
      
      <ContentSection 
        title="Financial Transactions"
        content={
          <div className="space-y-4">
            <p>
              Understanding basic financial processes helps electricians contribute to business success.
            </p>
            
            <h3 className="text-lg font-medium">Quotations and Estimates</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Difference:</span> Estimates are approximate costs; quotations are fixed price offers
              </li>
              <li>
                <span className="font-medium">Content:</span> Should include clear scope, materials, labor, timescale, and exclusions
              </li>
              <li>
                <span className="font-medium">Validity:</span> Should specify how long the price remains valid
              </li>
              <li>
                <span className="font-medium">Terms:</span> Should include payment terms and conditions
              </li>
              <li>
                <span className="font-medium">Professional Presentation:</span> Well-formatted documents reflect business quality
              </li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">Invoicing</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Legal Requirements:</span> Must include business details, VAT information (if registered), and unique invoice number
              </li>
              <li>
                <span className="font-medium">Clarity:</span> Itemized breakdown of charges with clear descriptions
              </li>
              <li>
                <span className="font-medium">Timing:</span> Prompt invoicing improves cash flow
              </li>
              <li>
                <span className="font-medium">Payment Methods:</span> Offering multiple payment options improves collection rates
              </li>
              <li>
                <span className="font-medium">Follow-Up:</span> Professional procedures for overdue payments
              </li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">Payment Handling</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Security:</span> Safe handling of cash and card transactions
              </li>
              <li>
                <span className="font-medium">Documentation:</span> Always providing receipts
              </li>
              <li>
                <span className="font-medium">Deposits:</span> Appropriate use for material costs or large jobs
              </li>
              <li>
                <span className="font-medium">Stage Payments:</span> Managing cash flow on longer projects
              </li>
              <li>
                <span className="font-medium">Record Keeping:</span> Maintaining accurate payment records
              </li>
            </ul>
          </div>
        }
      />
      
      <ContentSection 
        title="Brand Representation"
        content={
          <div className="space-y-4">
            <p>
              Every employee represents the company's brand through their actions and behavior.
            </p>
            
            <h3 className="text-lg font-medium">Brand Elements</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Visual Identity:</span> Logos, uniforms, vehicle livery
              </li>
              <li>
                <span className="font-medium">Values:</span> The core principles the company stands for
              </li>
              <li>
                <span className="font-medium">Reputation:</span> Built through consistent quality and service
              </li>
              <li>
                <span className="font-medium">Differentiation:</span> What makes the company unique in the market
              </li>
              <li>
                <span className="font-medium">Promise:</span> What customers can expect from the company
              </li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">Representing Your Company</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Personal Presentation:</span> Clean, appropriate workwear with company branding
              </li>
              <li>
                <span className="font-medium">Vehicle Appearance:</span> Clean, well-maintained vehicles with professional signage
              </li>
              <li>
                <span className="font-medium">Communication Style:</span> Professional language and tone consistent with company image
              </li>
              <li>
                <span className="font-medium">Quality Standards:</span> Work that reflects the company's quality promises
              </li>
              <li>
                <span className="font-medium">Social Media Presence:</span> Responsible online behavior that doesn't damage the brand
              </li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">Impact on Business</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Trust Building:</span> Consistent brand representation builds customer confidence
              </li>
              <li>
                <span className="font-medium">Recognition:</span> Professional appearance increases brand visibility
              </li>
              <li>
                <span className="font-medium">Value Perception:</span> Professional representation justifies premium pricing
              </li>
              <li>
                <span className="font-medium">Team Cohesion:</span> Shared brand identity strengthens company culture
              </li>
              <li>
                <span className="font-medium">Commercial Impact:</span> Brand strength directly affects business success
              </li>
            </ul>
          </div>
        }
      />
      
      <ContentSection 
        title="Introduction to Self-Employment"
        content={
          <div className="space-y-4">
            <p>
              Many electricians choose self-employment at some point in their career, requiring additional knowledge beyond technical skills.
            </p>
            
            <h3 className="text-lg font-medium">Self-Employment Structures</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Sole Trader:</span> Simplest structure with minimal setup requirements but unlimited personal liability
              </li>
              <li>
                <span className="font-medium">Limited Company:</span> Separate legal entity offering personal protection but with more administrative requirements
              </li>
              <li>
                <span className="font-medium">Partnership:</span> Sharing responsibilities and resources with others but also sharing liabilities
              </li>
              <li>
                <span className="font-medium">Subcontractor:</span> Working for other contractors but maintaining self-employed status
              </li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">Legal and Regulatory Requirements</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Registration:</span> Notifying HMRC of self-employed status
              </li>
              <li>
                <span className="font-medium">Insurance:</span> Public liability, professional indemnity, and other necessary coverage
              </li>
              <li>
                <span className="font-medium">Certification:</span> Registration with appropriate certification bodies (e.g., NICEIC, NAPIT)
              </li>
              <li>
                <span className="font-medium">Tax:</span> Self-assessment tax returns and VAT registration if turnover exceeds threshold
              </li>
              <li>
                <span className="font-medium">Record Keeping:</span> Maintaining financial and business records
              </li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">Business Skills</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Marketing:</span> Attracting and retaining customers
              </li>
              <li>
                <span className="font-medium">Financial Management:</span> Pricing, cash flow, and budgeting
              </li>
              <li>
                <span className="font-medium">Time Management:</span> Balancing on-site work with business administration
              </li>
              <li>
                <span className="font-medium">Business Planning:</span> Setting goals and strategies for growth
              </li>
              <li>
                <span className="font-medium">Networking:</span> Building professional relationships and referral sources
              </li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4">Advantages and Challenges</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Advantages:</span>
                <ul className="list-disc pl-6 mt-1">
                  <li>Greater autonomy and flexibility</li>
                  <li>Potential for higher earnings</li>
                  <li>Freedom to choose projects and clients</li>
                  <li>Direct benefit from business success</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Challenges:</span>
                <ul className="list-disc pl-6 mt-1">
                  <li>Income instability and irregular work flow</li>
                  <li>Administrative burden of running a business</li>
                  <li>Responsibility for finding work and managing clients</li>
                  <li>Need for multiple skills beyond technical expertise</li>
                  <li>Isolation compared to employee status</li>
                </ul>
              </li>
            </ul>
          </div>
        }
      />
    </>
  ),
};
