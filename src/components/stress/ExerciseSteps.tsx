
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface Step {
  step: number;
  instruction: string;
}

interface ExerciseStepsProps {
  steps: Step[];
}

const ExerciseSteps = ({ steps }: ExerciseStepsProps) => {
  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20">
      <CardHeader>
        <CardTitle className="text-[#FFC900]">Step by Step Guide</CardTitle>
      </CardHeader>
      <CardContent>
        {steps && steps.length > 0 ? (
          <Accordion type="single" collapsible className="w-full">
            {steps.map((step) => (
              <AccordionItem key={step.step} value={`step-${step.step}`}>
                <AccordionTrigger className="text-[#FFC900]">
                  Step {step.step}
                </AccordionTrigger>
                <AccordionContent className="text-[#FFC900]/70">
                  {step.instruction}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <p className="text-[#FFC900]/70">No steps available for this exercise.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default ExerciseSteps;
