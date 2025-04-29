
import React from 'react';
import { Section } from './types';
import EarthingPrinciples from "@/components/units/section305/EarthingPrinciples";
import ProtectiveBonding from "@/components/units/section305/ProtectiveBonding";
import SupplementaryBonding from "@/components/units/section305/SupplementaryBonding";
import EarthingConductors from "@/components/units/section305/EarthingConductors";
import DetailedEarthingContent from "@/components/units/section305/DetailedEarthingContent";

export const section5_1: Section = {
  id: "5.1",
  title: "Earthing and Bonding",
  description: "Requirements for main protective bonding and supplementary bonding",
  content: (
    <div className="space-y-8">
      <EarthingPrinciples />
      <ProtectiveBonding />
      <SupplementaryBonding />
      <EarthingConductors />
    </div>
  ),
  detailedContent: (
    <DetailedEarthingContent />
  )
};

export default section5_1;
