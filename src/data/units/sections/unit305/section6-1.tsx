
import React from 'react';
import { Section } from './types';
import WiringRegulations from "@/components/units/section305/WiringRegulations";
import BuildingRegulations from "@/components/units/section305/BuildingRegulations";
import EnergyEfficiency from "@/components/units/section305/EnergyEfficiency";
import FireSafetyRegulations from "@/components/units/section305/FireSafetyRegulations";
import DetailedRegulationsContent from "@/components/units/section305/DetailedRegulationsContent";

export const section6_1: Section = {
  id: "6.1",
  title: "Health and Safety and Building Regulations",
  description: "Regulatory requirements for electrical installations",
  content: (
    <div className="space-y-8">
      <WiringRegulations />
      <BuildingRegulations />
      <EnergyEfficiency />
      <FireSafetyRegulations />
    </div>
  ),
  detailedContent: (
    <DetailedRegulationsContent />
  )
};

export default section6_1;
