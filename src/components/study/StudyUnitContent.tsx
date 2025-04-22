
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface StudyUnitContentProps {
  title: string;
  description: string;
  units: {
    title: string;
    content: string[];
    learningOutcomes?: string[];
  }[];
}

const StudyUnitContent = ({ title, description, units }: StudyUnitContentProps) => {
  return (
    <div className="space-y-6">
      <Card className="bg-[#22251e] border-[#FFC900]/20">
        <CardHeader>
          <CardTitle className="text-[#FFC900]">{title}</CardTitle>
          <CardDescription className="text-[#FFC900]/70">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {units.map((unit, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-[#FFC900]">
                  {unit.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 text-[#FFC900]/70">
                    <ul className="list-disc pl-6 space-y-2">
                      {unit.content.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    {unit.learningOutcomes && (
                      <>
                        <h4 className="font-medium text-[#FFC900] mt-4">Learning Outcomes:</h4>
                        <ul className="list-disc pl-6 space-y-2">
                          {unit.learningOutcomes.map((outcome, i) => (
                            <li key={i}>{outcome}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudyUnitContent;
