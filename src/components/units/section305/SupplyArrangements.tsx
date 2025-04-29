
import React from 'react';
import LessonContent from "@/components/units/LessonContent";

const SupplyArrangements = () => {
  return (
    <LessonContent title="Supply Arrangements">
      <p className="mb-4">
        The choice of earthing system is critical for electrical safety. BS 7671 recognizes several systems:
      </p>
      
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b border-[#FFC900]/20">
              <th className="py-2 px-3 text-left text-[#FFC900]">System</th>
              <th className="py-2 px-3 text-left text-[#FFC900]">Description</th>
              <th className="py-2 px-3 text-left text-[#FFC900]">Applications</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#FFC900]/20">
              <td className="py-2 px-3 text-[#FFC900]/80">TN-S</td>
              <td className="py-2 px-3 text-[#FFC900]/80">Separate neutral and protective conductors throughout the system</td>
              <td className="py-2 px-3 text-[#FFC900]/80">Commercial and industrial installations, especially where EMC is important</td>
            </tr>
            <tr className="border-b border-[#FFC900]/20">
              <td className="py-2 px-3 text-[#FFC900]/80">TN-C-S (PME)</td>
              <td className="py-2 px-3 text-[#FFC900]/80">Combined PEN conductor from supply, then separate N and PE within installation</td>
              <td className="py-2 px-3 text-[#FFC900]/80">Most common in UK domestic properties</td>
            </tr>
            <tr>
              <td className="py-2 px-3 text-[#FFC900]/80">TT</td>
              <td className="py-2 px-3 text-[#FFC900]/80">Earth connection provided by local electrode, independent of supply</td>
              <td className="py-2 px-3 text-[#FFC900]/80">Rural areas without PME, temporary supplies, or where PME prohibited</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-4">
        <p className="font-medium text-[#FFC900] mb-2">Key selection factors:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Available supply type from Distribution Network Operator</li>
          <li>Building location and characteristics</li>
          <li>Special environmental considerations (e.g., swimming pools, agricultural buildings)</li>
          <li>Presence of electronic equipment sensitive to electromagnetic interference</li>
          <li>Risk assessment for protective conductor currents</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export default SupplyArrangements;
