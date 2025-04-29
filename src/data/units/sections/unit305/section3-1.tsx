
import React from 'react';
import { Section } from './types';
import LearningObjectives from "@/components/units/section305/LearningObjectives";
import CurrentCarryingCapacity from "@/components/units/section305/CurrentCarryingCapacity";
import CorrectionFactors from "@/components/units/section305/CorrectionFactors";
import VoltageDropCalculations from "@/components/units/section305/VoltageDropCalculations";
import AdiabaticEquation from "@/components/units/section305/AdiabaticEquation";
import DetailedContent from "@/components/units/section305/DetailedContent";

export const section3_1: Section = {
  id: "3.1",
  title: "Cable Sizing and Protection",
  description: "Methods for calculating current-carrying capacity, voltage drop, and protection",
  content: (
    <div className="space-y-8">
      <LearningObjectives />
      <CurrentCarryingCapacity />
      <CorrectionFactors />
      <VoltageDropCalculations />
      <AdiabaticEquation />
    </div>
  ),
  detailedContent: (
    <DetailedContent />
  )
};

export default section3_1;
