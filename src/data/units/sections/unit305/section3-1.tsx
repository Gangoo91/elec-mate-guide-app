
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";
import LessonContent from "@/components/units/LessonContent";
import { Section } from './types';

const CurrentCarryingCapacity = () => {
  return (
    <LessonContent title="Current-Carrying Capacity">
      <p className="mb-4">
        The current-carrying capacity (Iz) of a cable is the maximum current that the cable can carry continuously 
        without exceeding its rated temperature. Correctly determining this value is essential for safe and 
        efficient electrical installations.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Factors Affecting Current-Carrying Capacity</h4>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li><strong>Conductor material:</strong> Copper or aluminum</li>
          <li><strong>Cross-sectional area:</strong> Larger conductors carry more current</li>
          <li><strong>Insulation type:</strong> PVC, XLPE, mineral, etc.</li>
          <li><strong>Installation method:</strong> Clipped direct, in conduit, in trunking, etc.</li>
          <li><strong>Ambient temperature:</strong> Higher temperatures reduce capacity</li>
          <li><strong>Grouping:</strong> Multiple cables reduce individual capacity</li>
          <li><strong>Thermal insulation:</strong> Covered cables have reduced ratings</li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Basic Cable Selection Process</h4>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Determine the design current (Ib) based on the connected load</li>
            <li>Select an appropriate protective device rating (In) where In ≥ Ib</li>
            <li>Calculate the minimum cable current rating required (Iz) where Iz ≥ In</li>
            <li>Apply correction factors (C) for installation conditions</li>
            <li>Select cable size from tables with a tabulated current (It) where It × C ≥ In</li>
          </ol>
          <p className="mt-2">The relationship must satisfy: Ib ≤ In ≤ Iz</p>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Reference Tables in BS 7671</h4>
          <p className="mb-2">BS 7671 provides current-carrying capacity tables for different cable types:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Table 4D1A:</strong> Single-phase (two core) PVC cables</li>
            <li><strong>Table 4D1B:</strong> Three-phase (three core) PVC cables</li>
            <li><strong>Table 4D2A:</strong> Single-phase (two core) XLPE cables</li>
            <li><strong>Table 4D2B:</strong> Three-phase (three core) XLPE cables</li>
            <li><strong>Table 4D3:</strong> Flexible cables</li>
            <li><strong>Table 4D4:</strong> Mineral insulated cables (MICC)</li>
            <li><strong>Table 4D5:</strong> Armored cables</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Example Calculation</h4>
        <div className="bg-[#1a1d17] p-4 rounded-md">
          <p>For a circuit with design current (Ib) = 18A:</p>
          <ol className="list-decimal pl-6 space-y-1 mt-2">
            <li>Select 20A MCB (In = 20A)</li>
            <li>Correction factors: 0.94 (ambient temperature), 0.8 (grouping)</li>
            <li>Combined correction factor: C = 0.94 × 0.8 = 0.752</li>
            <li>Required tabulated current: It ≥ In ÷ C = 20 ÷ 0.752 = 26.6A</li>
            <li>From Table 4D1A (reference method C), select 4mm² cable (It = 32A)</li>
            <li>Final current-carrying capacity: Iz = It × C = 32 × 0.752 = 24.06A</li>
            <li>Verify: 18A (Ib) ≤ 20A (In) ≤ 24.06A (Iz) ✓</li>
          </ol>
        </div>
      </div>
    </LessonContent>
  );
};

export const section3_1: Section = {
  title: "Current-Carrying Capacity",
  description: "Calculating current-carrying capacity (Iz) for cables",
  content: (
    <>
      <ContentSection 
        title="Learning Objectives"
        content={
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand the concept of current-carrying capacity (Iz)</li>
            <li>Identify factors affecting current-carrying capacity</li>
            <li>Learn how to select cables based on current requirements</li>
            <li>Apply knowledge of BS 7671 tables to determine appropriate cable sizes</li>
          </ul>
        }
      />
      
      <ContentSection
        title="Current-Carrying Capacity Fundamentals" 
        content={<CurrentCarryingCapacity />}
      />
    </>
  )
};
