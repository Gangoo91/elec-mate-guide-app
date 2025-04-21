
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
          description="Find answers about Elec-Mate's features and benefits for UK electrical professionals"
        />
        
        <div className="mt-8 space-y-6 max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {/* General Platform Questions */}
            <AccordionItem value="item-1" className="border-[#FFC900]/20">
              <AccordionTrigger className="text-[#FFC900]">
                What makes Elec-Mate different from other platforms?
              </AccordionTrigger>
              <AccordionContent className="text-[#FFC900]/80">
                Elec-Mate is a UK-focused platform designed specifically for the electrical industry. We integrate learning materials aligned with UK standards, AI tools for UK electrical regulations, project management, and industry-specific resources while fostering connections between apprentices, electricians, and employers across the United Kingdom.
              </AccordionContent>
            </AccordionItem>

            {/* Apprentice-focused */}
            <AccordionItem value="item-2" className="border-[#FFC900]/20">
              <AccordionTrigger className="text-[#FFC900]">
                What resources are available for apprentices?
              </AccordionTrigger>
              <AccordionContent className="text-[#FFC900]/80">
                Apprentices get access to comprehensive learning materials aligned with UK apprenticeship standards, study guides for City & Guilds qualifications, practical assessments, and direct mentorship opportunities. Our platform helps track your progress and connects you with experienced UK professionals who can guide your development.
              </AccordionContent>
            </AccordionItem>
            
            {/* Electrician-focused */}
            <AccordionItem value="item-3" className="border-[#FFC900]/20">
              <AccordionTrigger className="text-[#FFC900]">
                What AI tools are available for electricians?
              </AccordionTrigger>
              <AccordionContent className="text-[#FFC900]/80">
                Electricians have access to AI-powered tools for project planning, estimating, and technical documentation, all compliant with BS 7671 (UK Wiring Regulations). These tools enhance productivity while ensuring adherence to UK electrical standards and best practices.
              </AccordionContent>
            </AccordionItem>
            
            {/* Employer-focused */}
            <AccordionItem value="item-4" className="border-[#FFC900]/20">
              <AccordionTrigger className="text-[#FFC900]">
                How does Elec-Mate benefit employers?
              </AccordionTrigger>
              <AccordionContent className="text-[#FFC900]/80">
                Employers get access to AI-powered tendering systems aligned with UK procurement standards, workforce management tools, and project tracking capabilities. The platform streamlines communication between teams and helps manage apprentice development programs in accordance with UK training frameworks.
              </AccordionContent>
            </AccordionItem>
            
            {/* Mental Health Support */}
            <AccordionItem value="item-5" className="border-[#FFC900]/20">
              <AccordionTrigger className="text-[#FFC900]">
                What mental health support is available?
              </AccordionTrigger>
              <AccordionContent className="text-[#FFC900]/80">
                Our Mental Health Hub provides access to UK-based resources, including NHS services, counselling connections, and peer support. We partner with UK mental health organisations to offer confidential support services tailored to electrical industry professionals.
              </AccordionContent>
            </AccordionItem>
            
            {/* Mentorship */}
            <AccordionItem value="item-6" className="border-[#FFC900]/20">
              <AccordionTrigger className="text-[#FFC900]">
                How does the mentorship program work?
              </AccordionTrigger>
              <AccordionContent className="text-[#FFC900]/80">
                Through Mentor Connect, we match apprentices and early-career electricians with experienced UK professionals. Mentors provide guidance on UK industry practices, share knowledge about local regulations, and help navigate career development opportunities within the British electrical sector.
              </AccordionContent>
            </AccordionItem>
            
            {/* Qualifications */}
            <AccordionItem value="item-7" className="border-[#FFC900]/20">
              <AccordionTrigger className="text-[#FFC900]">
                Which qualifications does Elec-Mate support?
              </AccordionTrigger>
              <AccordionContent className="text-[#FFC900]/80">
                We support various UK qualifications including City & Guilds, EAL, and other recognised certifications. Our platform helps track progress towards NVQs, AM2 assessments, and continuous professional development requirements set by UK industry bodies.
              </AccordionContent>
            </AccordionItem>
            
            {/* Getting Started */}
            <AccordionItem value="item-8" className="border-[#FFC900]/20">
              <AccordionTrigger className="text-[#FFC900]">
                How do I get started with Elec-Mate?
              </AccordionTrigger>
              <AccordionContent className="text-[#FFC900]/80">
                Simply sign up, select your role (Apprentice, Electrician, or Employer), and complete your profile. You'll get immediate access to UK-specific features and can start connecting with other professionals in the British electrical industry.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </MainLayout>
  );
};

export default FAQ;
