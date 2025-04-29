
import React from 'react';
import { Section305 } from './types';

export const section3_1: Section305 = {
  id: "3.1",
  title: "Cable Sizing and Protection",
  description: "Learn how to calculate cable sizes and apply protection for electrical installations.",
  content: [
    {
      title: "Learning Objectives",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Understand the factors affecting cable current-carrying capacity</li>
          <li>Learn how to calculate voltage drop in cables</li>
          <li>Master the adiabatic equation for earth fault protection</li>
          <li>Apply correction factors for different installation conditions</li>
        </ul>
      )
    },
    {
      title: "Current-Carrying Capacity (Iz)",
      content: (
        <div className="space-y-4">
          <p>
            The current-carrying capacity of a cable is the maximum current it can carry continuously without exceeding 
            its temperature rating. This is determined by:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Cable construction (conductor material, insulation)</li>
            <li>Installation method (reference method)</li>
            <li>Ambient temperature</li>
            <li>Grouping of circuits</li>
            <li>Thermal insulation</li>
          </ul>
          
          <p className="mt-3">
            The design process requires:
          </p>
          
          <div className="bg-[#2a2d24] p-4 rounded-md space-y-2">
            <p>1. Calculate design current (Ib) based on load requirements</p>
            <p>2. Select protection device rating (In) where In ≥ Ib</p>
            <p>3. Determine minimum cable rating (Iz) where Iz ≥ In</p>
            <p>4. Apply correction factors (Cf) for installation conditions</p>
            <p>5. Calculate tabulated current-carrying capacity: It = Iz / Cf</p>
            <p>6. Select cable size from appropriate table in BS 7671</p>
          </div>
          
          <p className="mt-3">
            Example: A 16A circuit in ambient temperature of 35°C with 4 circuits grouped together:
          </p>
          
          <div className="bg-[#2a2d24] p-4 rounded-md">
            <p>Design current (Ib) = 16A</p>
            <p>Protection device rating (In) = 16A</p>
            <p>Ambient temperature correction factor (Ca) = 0.94 (from Table 4B2)</p>
            <p>Grouping correction factor (Cg) = 0.65 (from Table 4C1)</p>
            <p>Combined correction factor (Cf) = 0.94 × 0.65 = 0.611</p>
            <p>Required tabulated current-carrying capacity (It) = 16A ÷ 0.611 = 26.19A</p>
            <p>From Table 4D2A (twin cable with thermoplastic insulation, reference method C):
            2.5mm² cable has It = 27A</p>
            <p>Therefore, 2.5mm² cable is suitable for this circuit.</p>
          </div>
        </div>
      )
    },
    {
      title: "Voltage Drop Calculations",
      content: (
        <div className="space-y-4">
          <p>
            Voltage drop must be limited to ensure proper function of connected equipment:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>3% of nominal voltage for lighting (6.9V in a 230V system)</li>
            <li>5% of nominal voltage for other uses (11.5V in a 230V system)</li>
          </ul>
          
          <p className="mt-3">
            Voltage drop is calculated using the formula:
          </p>
          
          <div className="bg-[#2a2d24] p-4 rounded-md">
            <p className="font-medium">Voltage drop (V) = (mV/A/m × Ib × L) ÷ 1000</p>
            <p className="mt-2">Where:</p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>mV/A/m is the voltage drop per ampere per meter (from BS 7671 tables)</li>
              <li>Ib is the design current in amperes</li>
              <li>L is the route length in meters</li>
            </ul>
          </div>
          
          <p className="mt-3">
            Example: A 20A circuit with 2.5mm² cable and a route length of 18m:
          </p>
          
          <div className="bg-[#2a2d24] p-4 rounded-md">
            <p>From Table 4D2B, mV/A/m for 2.5mm² copper conductor = 18</p>
            <p>Voltage drop = (18 × 20 × 18) ÷ 1000 = 6.48V</p>
            <p>As a percentage of 230V = (6.48 ÷ 230) × 100% = 2.82%</p>
            <p>This is within the 5% limit for power circuits, so the cable size is suitable.</p>
          </div>
        </div>
      )
    },
    {
      title: "Adiabatic Equation for Earth Fault Protection",
      content: (
        <div className="space-y-4">
          <p>
            The adiabatic equation ensures that a cable's protective conductor can withstand the energy released during a fault
            without exceeding its maximum operating temperature:
          </p>
          
          <div className="bg-[#2a2d24] p-4 rounded-md">
            <p className="font-medium">S² = I² × t ÷ k²</p>
            <p className="mt-2">Where:</p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>S is the minimum cross-sectional area in mm²</li>
              <li>I is the fault current in amperes</li>
              <li>t is the operating time of the protective device in seconds</li>
              <li>k is a factor depending on the conductor material and insulation</li>
            </ul>
          </div>
          
          <p className="mt-3">
            The k factor varies depending on the conductor and insulation materials:
          </p>
          
          <div className="overflow-x-auto mt-2">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-[#FFC900]/20">
                  <th className="py-2 px-3 text-left text-[#FFC900]">Conductor</th>
                  <th className="py-2 px-3 text-left text-[#FFC900]">Insulation</th>
                  <th className="py-2 px-3 text-left text-[#FFC900]">k factor</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-3 text-[#FFC900]/80">Copper</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">PVC</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">115</td>
                </tr>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-3 text-[#FFC900]/80">Copper</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">XLPE/EPR</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">143</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-[#FFC900]/80">Aluminum</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">PVC</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">76</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-3">
            Example: Calculate the minimum cross-sectional area for a copper protective conductor with PVC insulation, 
            where the fault current is 1500A and the disconnection time is 0.4 seconds:
          </p>
          
          <div className="bg-[#2a2d24] p-4 rounded-md">
            <p>S² = 1500² × 0.4 ÷ 115²</p>
            <p>S² = 2,250,000 × 0.4 ÷ 13,225</p>
            <p>S² = 900,000 ÷ 13,225 = 68.05</p>
            <p>S = √68.05 = 8.25mm²</p>
            <p>Therefore, a 10mm² protective conductor would be required.</p>
          </div>
        </div>
      )
    }
  ]
};
