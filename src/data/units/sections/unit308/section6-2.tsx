
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { SectionData } from './types';

const FinancialManagement = () => {
  return (
    <LessonContent title="Handling Payments and Invoices">
      <p className="mb-4">
        Professional financial management is essential for electricians and electrical businesses. Understanding 
        how to handle payments, create proper invoices, and manage financial transactions is crucial for business success.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Professional Invoicing</h4>
        <p className="mb-2">
          A professional invoice is a legal document that serves as a request for payment and provides evidence of the transaction.
        </p>
        <div className="space-y-3">
          <div>
            <p className="font-medium">Essential Invoice Elements:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Business details:</strong> Name, address, contact information</li>
              <li><strong>Registration information:</strong> Company number, VAT number if applicable</li>
              <li><strong>Customer details:</strong> Name, address, contact information</li>
              <li><strong>Invoice number:</strong> Sequential unique reference</li>
              <li><strong>Date:</strong> Date of issue</li>
              <li><strong>Description of work:</strong> Clear itemization of services provided</li>
              <li><strong>Costs:</strong> Labor, materials, and any other charges</li>
              <li><strong>VAT:</strong> If registered, showing VAT separately</li>
              <li><strong>Total amount due:</strong> Clearly displayed</li>
              <li><strong>Payment terms:</strong> When and how payment is expected</li>
              <li><strong>Payment methods:</strong> Bank details or other payment options</li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium">Best Practices:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Use professional invoice software or templates</li>
              <li>Include your company logo for brand recognition</li>
              <li>Send invoices promptly after job completion</li>
              <li>Keep language clear and professional</li>
              <li>Provide detailed breakdowns of charges</li>
              <li>Include terms and conditions where appropriate</li>
              <li>Maintain backup copies for your records</li>
              <li>Consider electronic invoicing for efficiency</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Payment Terms and Methods</h4>
        <div className="space-y-3">
          <div>
            <p className="font-medium">Common Payment Terms:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Due on receipt:</strong> Payment expected immediately</li>
              <li><strong>Net 7/14/30:</strong> Payment due within 7, 14, or 30 days</li>
              <li><strong>Staged payments:</strong> For larger projects, payments at defined milestones</li>
              <li><strong>Deposits:</strong> Partial payment upfront before work begins</li>
              <li><strong>Retentions:</strong> Common in commercial contracts, portion held until after completion</li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium">Payment Methods:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Bank transfer:</strong> Direct electronic payment to your account</li>
              <li><strong>Card payments:</strong> Using mobile card readers or online payment systems</li>
              <li><strong>Cheques:</strong> Less common but still used by some customers</li>
              <li><strong>Cash:</strong> Consider cash handling security and record keeping</li>
              <li><strong>Online payment platforms:</strong> PayPal, Stripe, etc.</li>
              <li><strong>Direct debit:</strong> For regular service contracts</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-[#2a2d24] p-4 rounded-md">
        <h4 className="font-medium text-[#FFC900] mb-2">Managing Late Payments</h4>
        <ol className="list-decimal pl-6 space-y-1">
          <li><strong>Prevention:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Clear payment terms communicated upfront</li>
              <li>Credit checks for larger jobs or new commercial clients</li>
              <li>Deposits or staged payments for larger projects</li>
              <li>Easy payment methods</li>
              <li>Prompt invoicing</li>
            </ul>
          </li>
          <li><strong>Follow-up Process:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Polite payment reminder shortly before due date</li>
              <li>First follow-up: Phone call or friendly email when payment becomes overdue</li>
              <li>Second follow-up: Formal reminder letter or email</li>
              <li>Final notice: Stating consequences of non-payment</li>
            </ul>
          </li>
          <li><strong>Legal Options:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Late payment legislation: Right to charge interest and debt recovery costs</li>
              <li>Small claims court for smaller amounts</li>
              <li>Debt collection services</li>
              <li>Statutory demands for larger debts</li>
            </ul>
          </li>
        </ol>
      </div>
      
      <div className="mt-4 bg-[#2a2d24] p-4 rounded-md">
        <h4 className="font-medium text-[#FFC900] mb-2">Pricing and Quotations</h4>
        <div className="space-y-3">
          <div>
            <p className="font-medium">Quotation Components:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Detailed description of work to be undertaken</li>
              <li>Breakdown of labor costs</li>
              <li>Materials to be supplied</li>
              <li>Any subcontractor work</li>
              <li>VAT if applicable</li>
              <li>Exclusions and limitations</li>
              <li>Validity period of the quote</li>
              <li>Payment terms</li>
              <li>Start date and estimated duration</li>
            </ul>
          </div>
          
          <div>
            <p className="font-medium">Pricing Methods:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Fixed price:</strong> Single price for the entire job</li>
              <li><strong>Hourly rate:</strong> Charging by time plus materials</li>
              <li><strong>Day rate:</strong> Fixed charge per day plus materials</li>
              <li><strong>Unit rates:</strong> Standard prices for common items (e.g., per socket)</li>
              <li><strong>Cost-plus:</strong> Materials, labor, and overhead plus percentage markup</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Record Keeping</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Keep copies of all quotes, invoices, and receipts</li>
          <li>Record all payments received</li>
          <li>Document all expenses with receipts</li>
          <li>Maintain records for at least 6 years (HMRC requirement)</li>
          <li>Consider accounting software to streamline processes</li>
          <li>Regularly reconcile accounts</li>
          <li>Separate business and personal finances</li>
          <li>Prepare for tax returns throughout the year, not just at the deadline</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export const section6_2: SectionData = {
  title: "Financial Management",
  description: "Handling payments and invoices professionally",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand the key elements of professional invoicing</li>
            <li>Learn about different payment terms and methods</li>
            <li>Develop strategies for managing late payments</li>
            <li>Recognize best practices for pricing and quotations</li>
            <li>Identify essential financial record keeping requirements</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Financial Management in Electrical Work" 
        content={<FinancialManagement />}
      />
    </>
  )
};
