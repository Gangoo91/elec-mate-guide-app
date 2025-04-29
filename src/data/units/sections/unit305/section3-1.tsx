
import React from 'react';
import { Section } from './types';
import LessonContent from "@/components/units/LessonContent";
import { ContentSection } from "@/components/units/ContentSection";

export const section3_1: Section = {
  id: "3.1",
  title: "Cable Sizing and Protection",
  description: "Methods for calculating current-carrying capacity, voltage drop, and protection",
  content: (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-[#FFC900] mb-4">Learning Objectives</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Understand how to determine the current-carrying capacity of cables</li>
          <li>Calculate voltage drop in electrical circuits</li>
          <li>Apply correction factors for various installation conditions</li>
          <li>Verify protection against fault currents using the adiabatic equation</li>
        </ul>
      </div>
      
      <LessonContent title="Current-Carrying Capacity">
        <p className="mb-4">
          The current-carrying capacity (I<sub>t</sub>) is the maximum current a cable can carry continuously 
          without exceeding its rated temperature.
        </p>
        
        <div className="space-y-4">
          <div className="bg-[#2a2d24] p-4 rounded-md">
            <h4 className="font-medium text-[#FFC900] mb-2">Basic Principles</h4>
            <p>
              Current-carrying capacity depends on:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Cable size (cross-sectional area)</li>
              <li>Cable insulation type (PVC, XLPE, etc.)</li>
              <li>Installation method (conduit, tray, direct burial, etc.)</li>
              <li>Ambient temperature</li>
              <li>Grouping with other cables</li>
              <li>Thermal insulation crossing or proximity</li>
            </ul>
          </div>
          
          <div className="bg-[#2a2d24] p-4 rounded-md">
            <h4 className="font-medium text-[#FFC900] mb-2">Determination Method</h4>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Identify the design current (I<sub>b</sub>)</li>
              <li>Select appropriate protection device rating (I<sub>n</sub>)</li>
              <li>Calculate minimum current for protection device to operate (I<sub>2</sub>)</li>
              <li>Determine base current-carrying capacity from tables</li>
              <li>Apply relevant correction factors (C<sub>a</sub>, C<sub>g</sub>, etc.)</li>
              <li>Verify that corrected capacity exceeds I<sub>2</sub></li>
            </ol>
          </div>
        </div>
      </LessonContent>
      
      <ContentSection
        title="Correction Factors"
        content={
          <>
            <p className="mb-4">
              Various correction factors must be applied to the tabulated current-carrying capacities:
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#FFC900]/20">
                    <th className="py-2 px-3 text-left text-[#FFC900]">Factor Type</th>
                    <th className="py-2 px-3 text-left text-[#FFC900]">Description</th>
                    <th className="py-2 px-3 text-left text-[#FFC900]">Example Values</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#FFC900]/20">
                    <td className="py-2 px-3 text-[#FFC900]/80">Ambient Temperature (C<sub>a</sub>)</td>
                    <td className="py-2 px-3 text-[#FFC900]/80">Adjusts for temperatures different from the standard reference</td>
                    <td className="py-2 px-3 text-[#FFC900]/80">
                      PVC at 35°C: 0.88<br />
                      XLPE at 35°C: 0.93
                    </td>
                  </tr>
                  <tr className="border-b border-[#FFC900]/20">
                    <td className="py-2 px-3 text-[#FFC900]/80">Grouping (C<sub>g</sub>)</td>
                    <td className="py-2 px-3 text-[#FFC900]/80">Accounts for mutual heating when multiple cables are grouped together</td>
                    <td className="py-2 px-3 text-[#FFC900]/80">
                      2 circuits: 0.80<br />
                      3 circuits: 0.70<br />
                      4+ circuits: 0.65
                    </td>
                  </tr>
                  <tr className="border-b border-[#FFC900]/20">
                    <td className="py-2 px-3 text-[#FFC900]/80">Thermal Insulation (C<sub>i</sub>)</td>
                    <td className="py-2 px-3 text-[#FFC900]/80">Applied when cables are surrounded by or pass through thermal insulation</td>
                    <td className="py-2 px-3 text-[#FFC900]/80">
                      Touching insulation: 0.75<br />
                      Enclosed in insulation: 0.5
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-[#FFC900]/80">Depth of Burial (C<sub>d</sub>)</td>
                    <td className="py-2 px-3 text-[#FFC900]/80">For direct burial cables at depths different from standard</td>
                    <td className="py-2 px-3 text-[#FFC900]/80">
                      0.8m depth: 0.97<br />
                      1.0m depth: 0.93
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-[#2a2d24] p-4 rounded-md mt-4">
              <h4 className="font-medium text-[#FFC900] mb-2">Calculation Example</h4>
              <p>
                For a cable with tabulated rating of 32A, with factors C<sub>a</sub> = 0.88 and C<sub>g</sub> = 0.7:
              </p>
              <div className="font-mono mt-2 text-center">
                Corrected capacity = 32A × 0.88 × 0.7 = 19.71A
              </div>
            </p>
            </div>
          </>
        }
      />
      
      <LessonContent title="Voltage Drop Calculations">
        <p className="mb-4">
          BS 7671 specifies maximum voltage drop limits:
        </p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>3% for lighting circuits (6.9V in a 230V system)</li>
          <li>5% for other circuits (11.5V in a 230V system)</li>
        </ul>
        
        <p className="mb-4">
          Voltage drop is calculated using:
        </p>
        
        <div className="bg-[#1a1d17] p-4 rounded-md font-mono text-center text-lg my-4">
          Voltage drop (V) = Design current (A) × Conductor resistance (mV/A/m) × Length (m) ÷ 1000
        </div>
        
        <p className="mb-4">
          Where:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Conductor resistance values are found in tables</li>
          <li>Length is the one-way length of the circuit</li>
        </ul>
      </LessonContent>
      
      <LessonContent title="Adiabatic Equation for Short-Circuit Protection">
        <p className="mb-4">
          The adiabatic equation is used to verify that cables are protected against thermal effects of fault currents:
        </p>
        
        <div className="bg-[#1a1d17] p-4 rounded-md font-mono text-center text-lg my-4">
          S² = I² × t ÷ k²
        </div>
        
        <p className="mt-4">
          Where:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>S = Conductor cross-sectional area (mm²)</li>
          <li>I = Fault current (A)</li>
          <li>t = Disconnection time of protective device (s)</li>
          <li>k = Conductor constant (depends on conductor material and insulation)</li>
        </ul>
        
        <div className="mt-4">
          <p className="font-medium mb-2">k values for common cable types:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Copper conductor with PVC insulation: 115</li>
            <li>Copper conductor with XLPE insulation: 143</li>
            <li>Aluminum conductor with PVC insulation: 76</li>
            <li>Aluminum conductor with XLPE insulation: 94</li>
          </ul>
        </div>
        
        <p className="mt-4">
          The equation can be rearranged to determine the minimum conductor size required:
        </p>
        
        <div className="bg-[#1a1d17] p-4 rounded-md font-mono text-center text-lg my-4">
          S = (I × √t) ÷ k
        </div>
      </LessonContent>
    </div>
  ),
  detailedContent: (
    <div className="space-y-6">
      <h4 className="text-xl font-medium text-[#FFC900]">Practical Cable Sizing Process</h4>
      <p className="text-[#FFC900]/80">
        A complete cable sizing procedure involves the following steps:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-[#FFC900]/80">
        <li>Determine the design current (I<sub>b</sub>) based on load characteristics</li>
        <li>Select a protective device with suitable rating (I<sub>n</sub> ≥ I<sub>b</sub>)</li>
        <li>Determine the minimum current required for the cable (I<sub>z</sub> ≥ I<sub>2</sub>)</li>
        <li>Select a cable size with tabulated current-carrying capacity</li>
        <li>Apply all relevant correction factors</li>
        <li>Verify that corrected capacity exceeds I<sub>2</sub></li>
        <li>Check voltage drop at design current</li>
        <li>Verify earth fault loop impedance for required disconnection time</li>
        <li>Verify short-circuit protection using the adiabatic equation</li>
      </ol>
      
      <h4 className="text-xl font-medium text-[#FFC900] mt-6">Special Considerations</h4>
      <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
        <li><strong>Harmonics:</strong> Apply derating for circuits supplying harmonic-generating equipment</li>
        <li><strong>Motor circuits:</strong> Account for starting currents (typically 6-8 times full load current)</li>
        <li><strong>Underground cables:</strong> Consider soil thermal resistivity and drying out</li>
        <li><strong>Parallel cables:</strong> Ensure equal current sharing through identical paths</li>
      </ul>
      
      <h4 className="text-xl font-medium text-[#FFC900] mt-6">Example Calculation</h4>
      <div className="bg-[#1a1d17] p-4 rounded-md">
        <p className="text-[#FFC900]/80">
          For a 12kW electric shower (230V, single-phase):
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80 mt-2">
          <li>Design current: I<sub>b</sub> = 12000W ÷ 230V = 52.2A</li>
          <li>Select 63A MCB (Type B): I<sub>n</sub> = 63A, I<sub>2</sub> = 1.45 × 63A = 91.4A</li>
          <li>Cable route: 18m, clipped direct, ambient temperature 30°C</li>
          <li>Correction factors: C<sub>a</sub> = 0.94 (temperature), C<sub>g</sub> = 1.0 (no grouping)</li>
          <li>Required current-carrying capacity: 91.4A ÷ (0.94 × 1.0) = 97.2A</li>
          <li>Select 16mm² cable with tabulated capacity of 100A</li>
          <li>Voltage drop calculation: 52.2A × 18m × 2.8mV/A/m ÷ 1000 = 2.63V (1.1%, within limit)</li>
        </ul>
      </div>
    </div>
  )
};

export default section3_1;
