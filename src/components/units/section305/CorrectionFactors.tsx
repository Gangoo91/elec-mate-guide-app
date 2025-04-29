
import React from 'react';
import { ContentSection } from "@/components/units/ContentSection";

const CorrectionFactors = () => {
  return (
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
          </div>
        </>
      }
    />
  );
};

export default CorrectionFactors;
