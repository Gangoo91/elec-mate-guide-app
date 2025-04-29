
import React from 'react';
import { Section } from './types';
import DesignPrinciples from "@/components/units/section305/DesignPrinciples";
import SupplyArrangements from "@/components/units/section305/SupplyArrangements";
import CircuitTypes from "@/components/units/section305/CircuitTypes";
import DetailedDesignContent from "@/components/units/section305/DetailedDesignContent";

export const section1_1: Section = {
  id: "1.1",
  title: "Electrical Installation Design Principles",
  description: "Understanding how to plan circuits and choose supply arrangements",
  content: (
    <div className="space-y-8">
      <DesignPrinciples />
      <SupplyArrangements />
      <CircuitTypes />
    </div>
  ),
  detailedContent: (
    <DetailedDesignContent />
  )
};

export default section1_1;
