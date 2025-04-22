
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
      <Card className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-[#FFC900]">{title}</CardTitle>
          <CardDescription className="text-[#FFC900]/70">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="core-units" className="border-[#FFC900]/20">
              <AccordionTrigger className="text-[#FFC900] hover:text-[#FFC900] hover:no-underline">
                Core Units Overview
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-4">
                  {units.map((unit, index) => (
                    <Card key={index} className="bg-[#22251e]/50 border-[#FFC900]/10">
                      <CardHeader className="py-4">
                        <CardTitle className="text-[#FFC900] text-lg">{unit.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-[#FFC900]/70">
                        <ul className="list-disc pl-6 space-y-2">
                          {unit.content.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                        {unit.learningOutcomes && (
                          <>
                            <h4 className="font-medium text-[#FFC900] mt-4 mb-2">Learning Outcomes:</h4>
                            <ul className="list-disc pl-6 space-y-2">
                              {unit.learningOutcomes.map((outcome, i) => (
                                <li key={i}>{outcome}</li>
                              ))}
                            </ul>
                          </>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudyUnitContent;
