
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQItemType } from "./faqData";

interface FAQSectionsProps {
  filteredFAQItems: FAQItemType[];
}

const FAQSections = ({ filteredFAQItems }: FAQSectionsProps) => {
  return (
    <>
      {filteredFAQItems.map((section, index) => (
        section.questions.length > 0 && (
          <div key={index} className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[#FFC900]/20 pb-2">
              {section.icon}
              <h2 className="text-xl font-semibold text-[#FFC900]">{section.section}</h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              {section.questions.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="border-[#FFC900]/20">
                  <AccordionTrigger className="text-[#FFC900]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#FFC900]/80">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )
      ))}
    </>
  );
};

export default FAQSections;
