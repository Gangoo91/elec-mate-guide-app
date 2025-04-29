
import React from 'react';
import { Section } from './types';
import ProtectiveDevices from "@/components/units/section305/ProtectiveDevices";
import CableTypes from "@/components/units/section305/CableTypes";
import AccessoriesSelection from "@/components/units/section305/AccessoriesSelection";
import DistributionBoards from "@/components/units/section305/DistributionBoards";
import IPRatings from "@/components/units/section305/IPRatings";
import DetailedEquipmentContent from "@/components/units/section305/DetailedEquipmentContent";

export const section2_1: Section = {
  id: "2.1",
  title: "Selection of Electrical Equipment",
  description: "Guidelines for selecting appropriate protective devices, cables, and accessories",
  content: (
    <div className="space-y-8">
      <ProtectiveDevices />
      <CableTypes />
      <AccessoriesSelection />
      <DistributionBoards />
      <IPRatings />
    </div>
  ),
  detailedContent: (
    <DetailedEquipmentContent />
  )
};

export default section2_1;
