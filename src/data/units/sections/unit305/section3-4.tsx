
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import { Section } from './types';
import AdiabaticEquation from "@/components/units/section305/AdiabaticEquation";
import DetailedContent from "@/components/units/section305/DetailedContent";

export const section3_4: Section = {
  title: "Adiabatic Equation",
  description: "Using the adiabatic equation for earth fault protection",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand the adiabatic equation and its purpose in electrical design</li>
            <li>Learn how to apply the equation to verify short-circuit protection</li>
            <li>Identify the factors that affect conductor heating during fault conditions</li>
            <li>Calculate minimum conductor sizes for fault protection</li>
          </ul>
        }
      />
      
      <ContentSection
        title="The Adiabatic Equation" 
        content={<AdiabaticEquation />}
      />
    </>
  ),
  detailedContent: <DetailedContent />
};
