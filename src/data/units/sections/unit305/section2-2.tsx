
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import { Section } from './types';
import CableTypes from "@/components/units/section305/CableTypes";

export const section2_2: Section = {
  title: "Cables and Cable Types",
  description: "Selection of T&E, SWA, MICC and other cable types",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Identify different types of cables used in electrical installations</li>
            <li>Understand the applications and limitations of each cable type</li>
            <li>Learn how to select appropriate cables for specific environments</li>
            <li>Recognize cable color coding and identification standards</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Cable Selection and Types" 
        content={<CableTypes />}
      />
    </>
  )
};
