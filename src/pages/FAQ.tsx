
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Frequently Asked Questions"
          description="Find answers about Elec-Mate's features and benefits for electrical professionals"
        />
        
        <div className="mt-8 space-y-6 max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {/* General Platform Questions */}
            <AccordionItem value="item-1" className="border-[#FFC900]/20">
              <AccordionTrigger className="text-[#FFC900]">
                What makes Elec-Mate different from other platforms?
              </AccordionTrigger>
              <AccordionContent className="text-[#FFC900]/80">
                Elec-Mate is an all-in-one platform specifically designed for the electrical industry. We integrate learning materials, AI tools, project management, and industry-specific resources while fostering connections between apprentices, electricians, and employers.
              </AccordionContent>
            </AccordionItem>

            {/* Apprentice-focused */}
            <AccordionItem value="item-2" className="border-[#FFC900]/20">
              <AccordionTrigger className="text-[#FFC900]">
                What resources are available for apprentices?
              </AccordionTrigger>
              <AccordionContent className="text-[#FFC900]/80">
                Apprentices get access to comprehensive learning materials, study guides, practical assessments, and direct mentorship opportunities. Our platform helps track your progress and connects you with experienced professionals who can guide your development.
              </AccordionContent>
            </AccordionItem>
            
            {/* Electrician-focused */}
            <AccordionItem value="item-3" className="border-[#FFC900]/20">
              <AccordionTrigger className="text-[#FFC900]">
                What AI tools are available for electricians?
              </AccordionTrigger>
              <AccordionContent className="text-[#FFC900]/80">
                Electricians have access to AI-powered tools for project planning, estimating, troubleshooting, and technical documentation. These tools are designed to enhance productivity and decision-making while maintaining industry best practices.
              </AccordionContent>
            </AccordionItem>
            
            {/* Employer-focused */}
            <AccordionItem value="item-4" className="border-[#FFC900]/20">
              <AccordionTrigger className="text-[#FFC900]">
                How does Elec-Mate benefit employers?
              </AccordionTrigger>
              <AccordionContent className="text-[#FFC900]/80">
                Employers get access to AI-powered tendering systems, workforce management tools, and project tracking capabilities. The platform streamlines communication between teams and helps manage apprentice development programs effectively.
              </AccordionContent>
            </AccordionItem>
            
            {/* Mental Health Support */}
            <AccordionItem value="item-5" className="border-[#FFC900]/20">
              <AccordionTrigger className="text-[#FFC900]">
                What mental health support is available?
              </AccordionTrigger>
              <AccordionContent className="text-[#FFC900]/80">
                Our Mental Health Hub provides resources, counseling connections, and peer support for all members. We understand the industry's challenges and offer confidential support services to help maintain mental well-being.
              </AccordionContent>
            </AccordionItem>
            
            {/* Mentorship */}
            <AccordionItem value="item-6" className="border-[#FFC900]/20">
              <AccordionTrigger className="text-[#FFC900]">
                How does the mentorship program work?
              </AccordionTrigger>
              <AccordionContent className="text-[#FFC900]/80">
                Through Mentor Connect, we match apprentices and early-career electricians with experienced professionals. Mentors provide guidance, share industry knowledge, and help navigate career development opportunities.
              </AccordionContent>
            </AccordionItem>
            
            {/* Communication */}
            <AccordionItem value="item-7" className="border-[#FFC900]/20">
              <AccordionTrigger className="text-[#FFC900]">
                How does communication work between users?
              </AccordionTrigger>
              <AccordionContent className="text-[#FFC900]/80">
                Elec-Mate features integrated messaging, project collaboration tools, and discussion forums. Teams can communicate efficiently while maintaining professional boundaries and project organization.
              </AccordionContent>
            </AccordionItem>
            
            {/* Getting Started */}
            <AccordionItem value="item-8" className="border-[#FFC900]/20">
              <AccordionTrigger className="text-[#FFC900]">
                How do I get started with Elec-Mate?
              </AccordionTrigger>
              <AccordionContent className="text-[#FFC900]/80">
                Simply sign up, select your role (Apprentice, Electrician, or Employer), and complete your profile. You'll get immediate access to relevant features and can start connecting with other professionals in the industry.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </MainLayout>
  );
};

export default FAQ;

