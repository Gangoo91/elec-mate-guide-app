
import React from 'react';
import LessonContent from "@/components/units/LessonContent";

const ProtectiveBonding = () => {
  return (
    <LessonContent title="Main Protective Bonding">
      <p className="mb-4">
        Main protective bonding connects extraneous-conductive-parts to the main earthing terminal, 
        creating an equipotential zone to prevent dangerous potential differences during fault conditions.
      </p>
      
      <div className="bg-[#2a2d24] p-4 rounded-md mb-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Requirement for Main Bonding</h4>
        <p>
          BS 7671 requires main protective bonding of the following services entering the building:
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Water installation pipes</li>
          <li>Gas installation pipes</li>
          <li>Oil installation pipes</li>
          <li>Structural metalwork</li>
          <li>Lightning protection systems</li>
          <li>Heating and air conditioning systems</li>
          <li>Other metallic service pipes and ducting</li>
        </ul>
      </div>
      
      <div className="space-y-4">
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Main Bonding Conductor Sizing</h4>
          <p className="mb-2">
            The size of main bonding conductors is based on the cross-sectional area of the supply neutral conductor:
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-[#FFC900]/20">
                  <th className="py-2 px-3 text-left text-[#FFC900]">Supply Neutral Conductor (mm²)</th>
                  <th className="py-2 px-3 text-left text-[#FFC900]">Minimum Main Bonding Conductor Size (mm²)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-3 text-[#FFC900]/80">S ≤ 10</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">6</td>
                </tr>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-3 text-[#FFC900]/80">10 {"<"} S ≤ 16</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">10</td>
                </tr>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-3 text-[#FFC900]/80">16 {"<"} S ≤ 25</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">16</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-[#FFC900]/80">25 {"<"} S ≤ 35</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">16</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-[#FFC900]/80">35 {"<"} S ≤ 50</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">25</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-[#FFC900]/80">50 {"<"} S ≤ 95</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">25</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-[#FFC900]/80">95 {"<"} S ≤ 150</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">35</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-[#FFC900]/80">150 {"<"} S</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">50</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-2">
            For typical domestic supplies, the minimum bonding conductor size is 10mm².
          </p>
        </div>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="font-medium text-[#FFC900] mb-2">Installation Requirements</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Bonding connections must be accessible for inspection and testing</li>
            <li>Connections should be made as close as practicable to the point of entry of services</li>
            <li>Bonding clamps must comply with BS 951</li>
            <li>Bonding conductors should be identified with green-and-yellow insulation</li>
            <li>Warning labels must be attached to bonding connections</li>
            <li>Connections must provide good electrical continuity and mechanical strength</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Special Considerations</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Gas installations: Bonding must be upstream of the meter but downstream of the emergency control valve</li>
          <li>Water installations: Bonding should be as close as possible to the point of entry</li>
          <li>Plastic pipes: Any metal parts (e.g., valves or sections) that could become live must still be bonded</li>
          <li>Multiple buildings: Each separate building requires its own bonding arrangements</li>
          <li>TT systems: Main bonding is still required even with local earth electrode</li>
        </ul>
      </div>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Testing Requirements</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li>Visual inspection of bonding connections</li>
          <li>Continuity testing between bonded items and main earthing terminal</li>
          <li>Maximum resistance typically less than 0.05Ω</li>
          <li>Documentation of test results</li>
        </ul>
      </div>
    </LessonContent>
  );
};

export default ProtectiveBonding;
