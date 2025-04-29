
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import { Section } from './types';
import CorrectionFactors from "@/components/units/section305/CorrectionFactors";

export const section3_3: Section = {
  title: "Correction Factors",
  description: "Applying correction factors for ambient temperature, grouping, and insulation",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand the purpose of correction factors in cable sizing calculations</li>
            <li>Identify different types of correction factors and when they apply</li>
            <li>Learn how to apply multiple correction factors to determine cable ratings</li>
            <li>Use correction factors in practical installation design scenarios</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Understanding Correction Factors" 
        content={<CorrectionFactors />}
      />
    </>
  ),
  detailedContent: (
    <div className="space-y-6">
      <h4 className="text-xl font-medium text-[#FFC900]">Advanced Application of Correction Factors</h4>
      <p className="text-[#FFC900]/80">
        When multiple correction factors apply to a single installation, they must be multiplied together:
      </p>
      <div className="bg-[#1a1d17] p-4 rounded-md">
        <p className="text-center font-mono">
          Corrected current-carrying capacity = Tabulated rating × Ca × Cg × Ci × Cd
        </p>
      </div>
      
      <h4 className="text-xl font-medium text-[#FFC900] mt-6">Special Cases</h4>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-2">
        <p className="text-[#FFC900]/80">
          <strong>Buried Cables:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
          <li>Soil thermal resistivity (standard value is 2.5 K.m/W)</li>
          <li>Depth of burial (reference depth is 0.5m)</li>
          <li>Grouping of buried cables (separation distances are critical)</li>
          <li>Proximity to other heat sources</li>
        </ul>
      </div>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
        <p className="text-[#FFC900]/80">
          <strong>Cables in Thermal Insulation:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
          <li>Completely surrounded (derating factor 0.5)</li>
          <li>One side in contact (derating factor 0.75)</li>
          <li>Crossing thermal insulation (derating based on length in insulation)</li>
        </ul>
      </div>
      
      <h4 className="text-xl font-medium text-[#FFC900] mt-6">Worked Example</h4>
      <p className="text-[#FFC900]/80">
        For a 4mm² cable installed in an ambient temperature of 35°C, grouped with 5 other circuits, partially in contact with thermal insulation:
      </p>
      <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
        <li>Base current rating (table): 32A</li>
        <li>Temperature correction factor (Ca): 0.94 (for PVC at 35°C)</li>
        <li>Grouping correction factor (Cg): 0.6 (for 6 circuits)</li>
        <li>Thermal insulation factor (Ci): 0.75 (one side in contact)</li>
        <li>Calculation: 32A × 0.94 × 0.6 × 0.75 = 13.5A</li>
        <li>Therefore, the cable can only safely carry 13.5A (despite its 32A base rating)</li>
      </ul>
    </div>
  )
};
