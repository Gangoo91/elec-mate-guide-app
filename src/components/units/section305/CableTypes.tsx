
import React from 'react';
import LessonContent from "@/components/units/LessonContent";

const CableTypes = () => {
  return (
    <LessonContent title="Cable Types and Selection">
      <p className="mb-4">
        Cable selection depends on the installation environment, load requirements, and safety considerations. 
        Common cable types used in electrical installations include:
      </p>
      
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b border-[#FFC900]/20">
              <th className="py-2 px-3 text-left text-[#FFC900]">Cable Type</th>
              <th className="py-2 px-3 text-left text-[#FFC900]">Description</th>
              <th className="py-2 px-3 text-left text-[#FFC900]">Applications</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#FFC900]/20">
              <td className="py-2 px-3 text-[#FFC900]/80">Twin and Earth (T&E)</td>
              <td className="py-2 px-3 text-[#FFC900]/80">PVC insulated cables with an uninsulated CPC</td>
              <td className="py-2 px-3 text-[#FFC900]/80">Domestic and light commercial installations, fixed wiring inside buildings</td>
            </tr>
            <tr className="border-b border-[#FFC900]/20">
              <td className="py-2 px-3 text-[#FFC900]/80">Steel Wire Armored (SWA)</td>
              <td className="py-2 px-3 text-[#FFC900]/80">Cable with steel wire armor providing mechanical protection</td>
              <td className="py-2 px-3 text-[#FFC900]/80">Underground installations, external use, industrial environments</td>
            </tr>
            <tr className="border-b border-[#FFC900]/20">
              <td className="py-2 px-3 text-[#FFC900]/80">Mineral Insulated Copper Clad (MICC)</td>
              <td className="py-2 px-3 text-[#FFC900]/80">Copper conductors in magnesium oxide insulation with copper sheath</td>
              <td className="py-2 px-3 text-[#FFC900]/80">Fire performance circuits, high temperature areas, harsh environments</td>
            </tr>
            <tr className="border-b border-[#FFC900]/20">
              <td className="py-2 px-3 text-[#FFC900]/80">Fire Resistant (FP)</td>
              <td className="py-2 px-3 text-[#FFC900]/80">Cables designed to maintain circuit integrity during fire</td>
              <td className="py-2 px-3 text-[#FFC900]/80">Fire alarm systems, emergency lighting, life safety systems</td>
            </tr>
            <tr>
              <td className="py-2 px-3 text-[#FFC900]/80">Low Smoke Zero Halogen (LSZH)</td>
              <td className="py-2 px-3 text-[#FFC900]/80">Cables that emit minimal smoke and no halogens when burnt</td>
              <td className="py-2 px-3 text-[#FFC900]/80">Public buildings, escape routes, confined spaces</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Selection Factors</h4>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Current-carrying capacity:</strong> Must be sufficient for the load</li>
          <li><strong>Voltage drop:</strong> Must be within prescribed limits</li>
          <li><strong>Installation method:</strong> Affects current rating and selection</li>
          <li><strong>Environmental conditions:</strong> Temperature, moisture, sunlight exposure</li>
          <li><strong>Mechanical protection:</strong> Risk of damage during and after installation</li>
          <li><strong>Fire performance:</strong> Escape routes, public buildings, critical systems</li>
          <li><strong>EMC considerations:</strong> For sensitive electronic equipment</li>
        </ul>
      </div>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
        <h4 className="font-medium text-[#FFC900] mb-2">Cable Identification</h4>
        <p>Standard core color coding:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li><strong>Single-phase:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Line: Brown</li>
              <li>Neutral: Blue</li>
              <li>Protective Earth: Green and Yellow</li>
            </ul>
          </li>
          <li><strong>Three-phase:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Line 1: Brown</li>
              <li>Line 2: Black</li>
              <li>Line 3: Grey</li>
              <li>Neutral: Blue</li>
              <li>Protective Earth: Green and Yellow</li>
            </ul>
          </li>
        </ul>
      </div>
    </LessonContent>
  );
};

export default CableTypes;
