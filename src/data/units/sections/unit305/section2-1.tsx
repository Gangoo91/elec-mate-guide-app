
import React from 'react';
import { Section305 } from './types';

export const section2_1: Section305 = {
  id: "2.1",
  title: "Selection of Electrical Equipment",
  description: "Learn how to select appropriate electrical equipment for safe and efficient installations.",
  content: [
    {
      title: "Learning Objectives",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Understand how to select protective devices based on load requirements and fault conditions</li>
          <li>Learn the various cable types and their applications</li>
          <li>Master the selection of appropriate accessories for different environments</li>
          <li>Understand the importance of IP ratings in equipment selection</li>
        </ul>
      )
    },
    {
      title: "Protective Devices",
      content: (
        <div className="space-y-4">
          <p>
            Choosing the correct protective device is crucial for ensuring safety and preventing damage to 
            the electrical installation. The main types include:
          </p>
          
          <div className="space-y-3">
            <div className="bg-[#2a2d24] p-4 rounded-md">
              <h4 className="font-medium text-[#FFC900] mb-2">Miniature Circuit Breakers (MCBs)</h4>
              <p>
                MCBs provide protection against overload and short-circuit currents. They are 
                classified according to their tripping characteristics:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><span className="font-medium">Type B:</span> Trips at 3-5 times rated current. Suitable for resistive and small inductive loads.</li>
                <li><span className="font-medium">Type C:</span> Trips at 5-10 times rated current. Suitable for moderately inductive loads and small motors.</li>
                <li><span className="font-medium">Type D:</span> Trips at 10-20 times rated current. Suitable for highly inductive loads with high inrush currents.</li>
              </ul>
              <p className="mt-2">
                Selection should be based on both normal running current and potential fault currents.
              </p>
            </div>
            
            <div className="bg-[#2a2d24] p-4 rounded-md">
              <h4 className="font-medium text-[#FFC900] mb-2">Residual Current Devices (RCDs)</h4>
              <p>
                RCDs provide protection against electric shock by detecting imbalances between live and neutral currents,
                indicating current leakage to earth.
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><span className="font-medium">30mA RCDs:</span> For additional protection against direct contact in general purpose circuits.</li>
                <li><span className="font-medium">100mA RCDs:</span> Often used for fire protection.</li>
                <li><span className="font-medium">300mA RCDs:</span> Used for distribution boards and large equipment.</li>
              </ul>
              <p className="mt-2">
                Types include AC (standard), A (for pulsating DC), B (for smooth DC), F (for mixed frequencies).
              </p>
            </div>
            
            <div className="bg-[#2a2d24] p-4 rounded-md">
              <h4 className="font-medium text-[#FFC900] mb-2">Residual Current Circuit Breakers with Overload Protection (RCBOs)</h4>
              <p>
                RCBOs combine the functions of an MCB and an RCD in a single device, providing protection against 
                overload, short-circuit, and earth leakage currents.
              </p>
              <p className="mt-2">
                Advantages include individual RCD protection for each circuit, preventing nuisance tripping affecting 
                multiple circuits, and space-saving in distribution boards.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Cable Types and Selection",
      content: (
        <div className="space-y-4">
          <p>
            Different installation environments and applications require specific cable types:
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
                  <td className="py-2 px-3 text-[#FFC900]/80">PVC insulated cables with a bare CPC covered by an outer PVC sheath</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">Domestic and light commercial fixed wiring</td>
                </tr>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-3 text-[#FFC900]/80">Steel Wire Armored (SWA)</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">Cables with steel wire armor providing mechanical protection</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">Underground installations, outdoor use, industrial applications</td>
                </tr>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-3 text-[#FFC900]/80">Mineral Insulated Copper Clad (MICC)</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">Copper conductors insulated with compressed magnesium oxide and encased in a copper sheath</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">Fire alarm systems, emergency lighting, high-temperature environments</td>
                </tr>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-3 text-[#FFC900]/80">FP200 / Fire Performance</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">Enhanced fire-resistant cables with special insulation</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">Fire alarm systems, emergency lighting circuits</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-[#FFC900]/80">Low Smoke Zero Halogen (LSZH)</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">Cables that emit minimal smoke and no halogens when burned</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">Public buildings, escape routes, healthcare facilities</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      title: "IP Ratings and Environmental Protection",
      content: (
        <div className="space-y-4">
          <p>
            Ingress Protection (IP) ratings specify the environmental protection provided by enclosures around electrical equipment.
            The code consists of the letters IP followed by two digits:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-medium">First digit (0-6):</span> Protection against solid objects and dust</li>
            <li><span className="font-medium">Second digit (0-8):</span> Protection against liquids</li>
          </ul>
          
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-[#FFC900]/20">
                  <th className="py-2 px-3 text-left text-[#FFC900]">Rating</th>
                  <th className="py-2 px-3 text-left text-[#FFC900]">Protection Level</th>
                  <th className="py-2 px-3 text-left text-[#FFC900]">Typical Applications</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-3 text-[#FFC900]/80">IP20</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">Protected against solid objects {'>'}12.5mm, no protection against liquids</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">Indoor domestic sockets and switches</td>
                </tr>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-3 text-[#FFC900]/80">IP44</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">Protected against solid objects {'>'}1mm and splashing water</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">Outdoor installations, bathrooms (Zone 2)</td>
                </tr>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-3 text-[#FFC900]/80">IP55</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">Protected against dust and water jets</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">Weatherproof installations, washdown areas</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-[#FFC900]/80">IP68</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">Dust-tight and protected against continuous immersion in water</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">Underwater installations, swimming pools</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-4">
            Selection of the correct IP rating is essential for ensuring the safety and longevity of the installation in its intended environment.
          </p>
        </div>
      )
    }
  ]
};
