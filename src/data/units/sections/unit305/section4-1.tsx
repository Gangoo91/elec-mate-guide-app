
import React from 'react';
import { Section } from './types';
import DiscriminationPrinciples from "@/components/units/section305/DiscriminationPrinciples";
import NuisanceTripping from "@/components/units/section305/NuisanceTripping";
import DetailedDiscriminationContent from "@/components/units/section305/DetailedDiscriminationContent";

export const section4_1: Section = {
  id: "4.1",
  title: "Discrimination and Coordination",
  description: "Principles of protective device coordination and nuisance tripping prevention",
  content: (
    <div className="space-y-8">
      <DiscriminationPrinciples />
      <NuisanceTripping />
    </div>
  ),
  detailedContent: (
    <DetailedDiscriminationContent />
  )
};

export default section4_1;
