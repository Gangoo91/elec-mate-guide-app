
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
          description="Find answers to common questions about Elec-Mate and electrical work"
        />
        
        <div className="mt-8 space-y-6 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[#FFC900]">
                What is Elec-Mate?
              </AccordionTrigger>
              <AccordionContent>
                Elec-Mate is a comprehensive platform connecting apprentices, electricians, and employers 
                in the electrical industry. We provide resources, training materials, certification information,
                and networking opportunities to help professionals grow their careers.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-[#FFC900]">
                How do I get started as an apprentice?
              </AccordionTrigger>
              <AccordionContent>
                To get started as an apprentice, create an account, complete your profile, and explore our
                apprentice resources. You can find training materials, connect with potential employers,
                and track your progress towards certification.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-[#FFC900]">
                What certifications are available through Elec-Mate?
              </AccordionTrigger>
              <AccordionContent>
                Elec-Mate provides information on various electrical certifications including basic 
                electrical certification, specialized certifications for different types of electrical work,
                and advanced certifications for experienced professionals.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-[#FFC900]">
                How can employers find qualified electricians?
              </AccordionTrigger>
              <AccordionContent>
                Employers can use our platform to post job listings, search through profiles of qualified
                electricians, and connect directly with potential candidates. Our matching system helps
                find electricians with the specific skills and certifications needed for each job.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-[#FFC900]">
                What tools are recommended for new electricians?
              </AccordionTrigger>
              <AccordionContent>
                New electricians should have a basic toolkit including screwdrivers, pliers, wire strippers,
                voltage testers, multimeters, and electrical tape. Visit our Tools section for comprehensive
                lists and recommendations for different specializations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </MainLayout>
  );
};

export default FAQ;
