
import React from 'react';

interface SectionContentItem {
  title: string;
  content: React.ReactNode;
}

interface Section {
  id: string;
  title: string;
  description: string;
  content: SectionContentItem[];
}

export const unit305sections: Section[] = [
  {
    id: "1.1",
    title: "Electrical Installation Design Principles",
    description: "Learn the fundamental principles of designing electrical installations for various building types.",
    content: [
      {
        title: "Learning Objectives",
        content: (
          <ul className="list-disc pl-6 space-y-2">
            <li>Understand how to plan electrical circuits for domestic, commercial and industrial settings</li>
            <li>Learn how to choose appropriate supply arrangements for different installations</li>
            <li>Master the design principles for various circuit types</li>
          </ul>
        )
      },
      {
        title: "Supply Arrangements",
        content: (
          <div className="space-y-4">
            <p>
              Different types of supply systems have specific characteristics that make them suitable for 
              different applications. The three main types are:
            </p>
            
            <div className="space-y-3">
              <div className="bg-[#2a2d24] p-4 rounded-md">
                <h4 className="font-medium text-[#FFC900] mb-2">TN-S System</h4>
                <p>
                  In this system, separate neutral and protective conductors run throughout the installation. 
                  The protective conductor (PE) is connected to the star point of the supply transformer 
                  which is earthed.
                </p>
                <p className="mt-2">
                  <span className="font-semibold">Advantages:</span> Better EMC performance, no risk of neutral current 
                  in exposed metalwork, suitable for electronic equipment installations.
                </p>
              </div>
              
              <div className="bg-[#2a2d24] p-4 rounded-md">
                <h4 className="font-medium text-[#FFC900] mb-2">TN-C-S System (PME)</h4>
                <p>
                  This system uses a combined neutral and protective conductor (PEN) from the supply transformer 
                  up to the installation's origin, where they are separated. Often referred to as Protective 
                  Multiple Earthing (PME).
                </p>
                <p className="mt-2">
                  <span className="font-semibold">Advantages:</span> Cost-effective for distribution networks, 
                  common in UK domestic installations, provides effective earth fault protection.
                </p>
                <p className="mt-2">
                  <span className="font-semibold">Restrictions:</span> Not suitable for petrol stations, swimming pools, 
                  or locations with increased risk in case of neutral conductor failure.
                </p>
              </div>
              
              <div className="bg-[#2a2d24] p-4 rounded-md">
                <h4 className="font-medium text-[#FFC900] mb-2">TT System</h4>
                <p>
                  In this system, the supply is earthed at the transformer, but the installation has a separate, 
                  independent earth electrode. There is no connection between the transformer earth and the 
                  installation earth.
                </p>
                <p className="mt-2">
                  <span className="font-semibold">Common use:</span> Rural areas where PME is not available, 
                  temporary supplies, or installations with special requirements.
                </p>
                <p className="mt-2">
                  <span className="font-semibold">Requirements:</span> RCD protection is mandatory for this type of supply.
                </p>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Circuit Design Considerations",
        content: (
          <div className="space-y-4">
            <h4 className="font-medium text-[#FFC900]">Lighting Circuits</h4>
            <p>
              Lighting circuits should be designed to provide adequate illumination while minimizing energy consumption.
              Key considerations include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Light level requirements (measured in lux) for different areas</li>
              <li>Emergency lighting requirements for escape routes</li>
              <li>Energy efficiency through LED technology and lighting controls</li>
              <li>Typical circuit loading of 5A or 6A per lighting circuit</li>
              <li>Separation of lighting circuits to minimize disruption during faults</li>
            </ul>
            
            <h4 className="font-medium text-[#FFC900] mt-4">Socket Outlet Circuits</h4>
            <p>
              The UK uses two main types of socket outlet circuits:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-semibold">Ring Final Circuits:</span> 30A/32A protection, serving up to 100m² floor area,
                with cable looped from socket to socket and returning to the consumer unit
              </li>
              <li>
                <span className="font-semibold">Radial Circuits:</span> 20A protection for smaller areas (≤ 20m²) or 
                32A for larger areas (≤ 50m²), with cable running to each socket without returning to the origin
              </li>
            </ul>
            
            <h4 className="font-medium text-[#FFC900] mt-4">Dedicated Circuits</h4>
            <p>
              Certain high-power appliances require dedicated circuits:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-semibold">Cooker Circuits:</span> Typically 32A or 45A depending on cooker rating,
                using 6mm² or 10mm² cable
              </li>
              <li>
                <span className="font-semibold">Electric Shower Circuits:</span> Power ratings from 7.5kW to 10.5kW,
                requiring 32A-45A protection and appropriately sized cable
              </li>
              <li>
                <span className="font-semibold">Immersion Heater Circuits:</span> Typically 3kW at 13A, requiring 
                2.5mm² cable with 16A protection
              </li>
            </ul>
            
            <h4 className="font-medium text-[#FFC900] mt-4">Emergency Lighting</h4>
            <p>
              Emergency lighting design must comply with BS 5266 and include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Maintained or non-maintained systems based on building use</li>
              <li>Minimum 3-hour battery backup</li>
              <li>Separate circuits from general lighting</li>
              <li>Regular testing and maintenance provisions</li>
            </ul>
          </div>
        )
      }
    ]
  },
  {
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
                    <td className="py-2 px-3 text-[#FFC900]/80">Protected against solid objects > 12.5mm, no protection against liquids</td>
                    <td className="py-2 px-3 text-[#FFC900]/80">Indoor domestic sockets and switches</td>
                  </tr>
                  <tr className="border-b border-[#FFC900]/20">
                    <td className="py-2 px-3 text-[#FFC900]/80">IP44</td>
                    <td className="py-2 px-3 text-[#FFC900]/80">Protected against solid objects > 1mm and splashing water</td>
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
  },
  {
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
  },
  {
    id: "4.1",
    title: "Discrimination and Coordination",
    description: "Learn how to ensure protective devices operate correctly and in the right sequence.",
    content: [
      {
        title: "Learning Objectives",
        content: (
          <ul className="list-disc pl-6 space-y-2">
            <li>Understand the principle of discrimination between protective devices</li>
            <li>Learn how to minimize nuisance tripping in electrical installations</li>
            <li>Master the coordination of protective devices for optimal circuit protection</li>
          </ul>
        )
      },
      {
        title: "Principles of Discrimination",
        content: (
          <div className="space-y-4">
            <p>
              Discrimination (or selectivity) is the coordination of protective devices so that only the device nearest 
              to a fault operates, minimizing disruption to the rest of the installation.
            </p>
            
            <p>
              For proper discrimination to occur:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>The upstream device must have a higher current rating than the downstream device</li>
              <li>The time/current characteristics of devices must be coordinated</li>
              <li>The fault level at each point in the system must be considered</li>
            </ul>
            
            <div className="bg-[#2a2d24] p-4 rounded-md mt-3">
              <h4 className="font-medium text-[#FFC900] mb-2">Types of Discrimination</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-medium">Current Discrimination:</span> Based on the different current settings of the devices.
                  Typically requires a ratio of at least 1.5:1 or 2:1 between upstream and downstream devices.
                </li>
                <li>
                  <span className="font-medium">Time Discrimination:</span> Achieved by introducing intentional time delays in upstream devices.
                  Often used in larger industrial installations.
                </li>
                <li>
                  <span className="font-medium">Zone Discrimination:</span> Uses communication between devices to achieve optimal selectivity.
                  Common in more sophisticated systems.
                </li>
                <li>
                  <span className="font-medium">Energy Discrimination:</span> Based on the energy let-through characteristics of devices.
                  Often utilized with MCBs and fuses.
                </li>
              </ul>
            </div>
          </div>
        )
      },
      {
        title: "Avoiding Nuisance Tripping",
        content: (
          <div className="space-y-4">
            <p>
              Nuisance tripping can disrupt service and reduce productivity. Common causes include:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Inrush currents from motors or transformers</li>
              <li>Harmonic currents from electronic equipment</li>
              <li>Leakage currents in long cable runs</li>
              <li>Incorrect device type selection</li>
              <li>Environmental conditions (e.g., moisture ingress)</li>
            </ul>
            
            <p className="mt-3">
              Strategies to minimize nuisance tripping:
            </p>
            
            <div className="bg-[#2a2d24] p-4 rounded-md space-y-2">
              <p>1. Select appropriate MCB types (B, C, D) based on load characteristics</p>
              <p>2. Use high-immunity RCDs (Type A or F) for circuits with electronic equipment</p>
              <p>3. Correctly size protective devices for the actual load</p>
              <p>4. Separate sensitive circuits from those with high inrush currents</p>
              <p>5. Use time-delayed RCDs where appropriate</p>
              <p>6. Ensure proper maintenance to prevent insulation deterioration</p>
            </div>
          </div>
        )
      },
      {
        title: "Practical Applications",
        content: (
          <div className="space-y-4">
            <p>
              Example of discrimination in a typical installation:
            </p>
            
            <div className="bg-[#2a2d24] p-4 rounded-md">
              <h4 className="font-medium text-[#FFC900] mb-2">Small Commercial Building</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Main incomer: 100A MCCB with adjustable settings</li>
                <li>Distribution boards: 63A MCBs</li>
                <li>Final circuits: 6A, 16A, 20A, 32A MCBs</li>
              </ul>
              <p className="mt-3">
                For discrimination between the 63A DB MCB and a 32A final circuit MCB:
              </p>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Ensure the ratio is at least 1.5:1 (63 ÷ 32 = 1.97, which is acceptable)</li>
                <li>Check time/current curves from manufacturer data to ensure they don't overlap</li>
                <li>Consider using different MCB types (e.g., Type C for the DB MCB and Type B for final circuits)</li>
              </ul>
            </div>
            
            <p className="mt-4">
              Common discrimination issues:
            </p>
            
            <div className="overflow-x-auto mt-2">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#FFC900]/20">
                    <th className="py-2 px-3 text-left text-[#FFC900]">Scenario</th>
                    <th className="py-2 px-3 text-left text-[#FFC900]">Problem</th>
                    <th className="py-2 px-3 text-left text-[#FFC900]">Solution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#FFC900]/20">
                    <td className="py-2 px-3 text-[#FFC900]/80">Fault on final circuit trips main RCD</td>
                    <td className="py-2 px-3 text-[#FFC900]/80">No discrimination between RCDs</td>
                    <td className="py-2 px-3 text-[#FFC900]/80">Use RCBOs for final circuits or time-delayed upstream RCD</td>
                  </tr>
                  <tr className="border-b border-[#FFC900]/20">
                    <td className="py-2 px-3 text-[#FFC900]/80">High inrush current trips MCB</td>
                    <td className="py-2 px-3 text-[#FFC900]/80">MCB type too sensitive</td>
                    <td className="py-2 px-3 text-[#FFC900]/80">Upgrade to Type C or D MCB if appropriate</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-[#FFC900]/80">IT equipment causes RCD tripping</td>
                    <td className="py-2 px-3 text-[#FFC900]/80">Harmonic currents affecting standard RCD</td>
                    <td className="py-2 px-3 text-[#FFC900]/80">Use Type A or F RCDs designed for electronic loads</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )
      }
    ]
  },
  {
    id: "5.1",
    title: "Earthing and Bonding Design",
    description: "Learn the principles and requirements for effective earthing and bonding in electrical installations.",
    content: [
      {
        title: "Learning Objectives",
        content: (
          <ul className="list-disc pl-6 space-y-2">
            <li>Understand the principles and purposes of earthing systems</li>
            <li>Learn how to design main protective bonding arrangements</li>
            <li>Master the requirements for supplementary bonding</li>
            <li>Apply correct sizing principles to earthing conductors</li>
          </ul>
        )
      },
      {
        title: "Principles of Earthing",
        content: (
          <div className="space-y-4">
            <p>
              Earthing is primarily designed to:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Protect people from electric shock</li>
              <li>Protect equipment from damage</li>
              <li>Facilitate the operation of protective devices</li>
              <li>Prevent excessive voltages</li>
              <li>Provide a reference point for the electrical system</li>
            </ul>
            
            <div className="bg-[#2a2d24] p-4 rounded-md mt-3">
              <h4 className="font-medium text-[#FFC900] mb-2">Key Components of an Earthing System</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-medium">Main Earthing Terminal (MET):</span> The central connection point for all earthing conductors
                </li>
                <li>
                  <span className="font-medium">Circuit Protective Conductors (CPCs):</span> Provide the protective conductor for each circuit
                </li>
                <li>
                  <span className="font-medium">Main Protective Bonding Conductors:</span> Connect extraneous conductive parts to the MET
                </li>
                <li>
                  <span className="font-medium">Supplementary Bonding Conductors:</span> Additional bonding in areas with increased risk
                </li>
                <li>
                  <span className="font-medium">Earth Electrode:</span> Connection to the general mass of earth (in TT systems)
                </li>
              </ul>
            </div>
          </div>
        )
      },
      {
        title: "Main Protective Bonding",
        content: (
          <div className="space-y-4">
            <p>
              Main protective bonding connects extraneous conductive parts to the main earthing terminal. 
              These typically include:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Water service pipes</li>
              <li>Gas installation pipes</li>
              <li>Oil supply pipes</li>
              <li>Structural steelwork</li>
              <li>Central heating and air conditioning systems</li>
              <li>Lightning protection systems</li>
            </ul>
            
            <p className="mt-3">
              Main protective bonding conductors must be sized according to BS 7671:
            </p>
            
            <div className="overflow-x-auto mt-2">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#FFC900]/20">
                    <th className="py-2 px-3 text-left text-[#FFC900]">Supply Neutral Conductor (mm²)</th>
                    <th className="py-2 px-3 text-left text-[#FFC900]">Minimum Main Bonding Conductor Size (mm²)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#FFC900]/20">
                    <td className="py-2 px-3 text-[#FFC900]/80">≤ 16</td>
                    <td className="py-2 px-3 text-[#FFC900]/80">10</td>
                  </tr>
                  <tr className="border-b border-[#FFC900]/20">
                    <td className="py-2 px-3 text-[#FFC900]/80">> 16 but ≤ 35</td>
                    <td className="py-2 px-3 text-[#FFC900]/80">16</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-[#FFC900]/80">> 35</td>
                    <td className="py-2 px-3 text-[#FFC900]/80">Half the size of the supply neutral conductor</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="mt-4">
              For most domestic installations with a 25mm² or 35mm² supply neutral, the main bonding conductor should be 16mm².
            </p>
          </div>
        )
      },
      {
        title: "Supplementary Bonding",
        content: (
          <div className="space-y-4">
            <p>
              Supplementary bonding is required in locations with increased risk, such as:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Bathrooms and shower rooms</li>
              <li>Swimming pools and saunas</li>
              <li>Medical locations</li>
              <li>Agricultural installations</li>
            </ul>
            
            <p className="mt-3">
              Supplementary bonding requirements:
            </p>
            
            <div className="bg-[#2a2d24] p-4 rounded-md space-y-2">
              <p>1. Connect all simultaneously accessible exposed and extraneous conductive parts</p>
              <p>2. Minimum size requirements:</p>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>2.5mm² copper if mechanically protected</li>
                <li>4mm² copper if not mechanically protected</li>
              </ul>
              <p>3. Must be accessible for inspection, testing, and maintenance</p>
              <p>4. Supplementary bonding conductors must be identified by green/yellow sleeving</p>
            </div>
            
            <p className="mt-3">
              Example: In a bathroom, supplementary bonding would connect:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Metal bath</li>
              <li>Metal taps</li>
              <li>Metal radiators</li>
              <li>Metal waste pipes</li>
              <li>Metal shower tray</li>
              <li>Metal shaver socket housings</li>
            </ul>
            
            <p className="mt-3 italic">
              Note: Under the 18th Edition of BS 7671, supplementary bonding may be omitted in domestic bathrooms 
              where all circuits are protected by 30mA RCDs and the installation meets other specified conditions.
            </p>
          </div>
        )
      },
      {
        title: "Earthing Conductor Sizing",
        content: (
          <div className="space-y-4">
            <p>
              Circuit protective conductors (CPCs) must be sized according to:
            </p>
            
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>General method:</strong> Using Table 54.7 of BS 7671 based on the cross-sectional area of the associated line conductor
              </li>
              <li>
                <strong>Calculation method:</strong> Using the adiabatic equation (discussed earlier)
              </li>
            </ol>
            
            <div className="overflow-x-auto mt-3">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#FFC900]/20">
                    <th className="py-2 px-3 text-left text-[#FFC900]">Line Conductor (mm²)</th>
                    <th className="py-2 px-3 text-left text-[#FFC900]">Minimum CPC Size (mm²)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#FFC900]/20">
                    <td className="py-2 px-3 text-[#FFC900]/80">≤ 16</td>
                    <td className="py-2 px-3 text-[#FFC900]/80">Same as line conductor</td>
                  </tr>
                  <tr className="border-b border-[#FFC900]/20">
                    <td className="py-2 px-3 text-[#FFC900]/80">> 16 to 35</td>
                    <td className="py-2 px-3 text-[#FFC900]/80">16</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-[#FFC900]/80">> 35</td>
                    <td className="py-2 px-3 text-[#FFC900]/80">Half the size of the line conductor</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="mt-4">
              Special considerations for earthing conductor design:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Mechanical protection may be required</li>
              <li>Corrosion resistance should be considered</li>
              <li>Connections must be accessible for inspection and testing</li>
              <li>Earth fault loop impedance must be low enough to ensure disconnection within required times</li>
            </ul>
          </div>
        )
      }
    ]
  },
  {
    id: "6.1",
    title: "Health, Safety and Building Regulations",
    description: "Understanding the regulatory framework for electrical installations in buildings.",
    content: [
      {
        title: "Learning Objectives",
        content: (
          <ul className="list-disc pl-6 space-y-2">
            <li>Understand BS 7671 Wiring Regulations and their application to design</li>
            <li>Learn the relevant Building Regulations affecting electrical installations</li>
            <li>Master energy efficiency considerations in electrical design</li>
            <li>Apply fire safety requirements to electrical installations</li>
          </ul>
        )
      },
      {
        title: "BS 7671 Wiring Regulations",
        content: (
          <div className="space-y-4">
            <p>
              BS 7671 (Requirements for Electrical Installations, IET Wiring Regulations) is the national standard 
              for electrical installations in the UK. Key design considerations include:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Protection against electric shock:</span> Includes both basic protection 
                (insulation, barriers, enclosures) and fault protection (earthing, bonding, automatic disconnection)
              </li>
              <li>
                <span className="font-medium">Protection against thermal effects:</span> Prevention of fire, burns, and 
                overheating from electrical equipment
              </li>
              <li>
                <span className="font-medium">Protection against overcurrent:</span> Proper selection and coordination of 
                protective devices
              </li>
              <li>
                <span className="font-medium">Isolation and switching:</span> Means to disconnect the installation or 
                individual circuits
              </li>
              <li>
                <span className="font-medium">Special locations:</span> Additional requirements for bathrooms, swimming pools, 
                outdoor installations, etc.
              </li>
            </ul>
            
            <div className="bg-[#2a2d24] p-4 rounded-md mt-3">
              <h4 className="font-medium text-[#FFC900] mb-2">Key Design Requirements in BS 7671</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maximum disconnection times for fault protection</li>
                <li>Maximum voltage drop limits (3% for lighting, 5% for other uses)</li>
                <li>Minimum insulation resistance values</li>
                <li>Maximum earth fault loop impedance values</li>
                <li>Additional protection by 30mA RCD for socket outlets and cables in walls</li>
                <li>Particular requirements for special locations</li>
              </ul>
            </div>
          </div>
        )
      },
      {
        title: "Building Regulations",
        content: (
          <div className="space-y-4">
            <p>
              Several Building Regulations directly affect electrical design:
            </p>
            
            <div className="space-y-3">
              <div className="bg-[#2a2d24] p-4 rounded-md">
                <h4 className="font-medium text-[#FFC900] mb-2">Part P: Electrical Safety</h4>
                <p>
                  Requires that electrical installations in dwellings are designed, installed, inspected and tested to 
                  provide reasonable protection against:
                </p>
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>Electric shock</li>
                  <li>Fire hazards from electrical components</li>
                  <li>Burns or other injuries from high temperatures</li>
                </ul>
                <p className="mt-2">
                  Compliance is typically achieved by following BS 7671, and certain work must be notified to 
                  building control or carried out by a competent person.
                </p>
              </div>
              
              <div className="bg-[#2a2d24] p-4 rounded-md">
                <h4 className="font-medium text-[#FFC900] mb-2">Part L: Conservation of Fuel and Power</h4>
                <p>
                  Affects electrical design through:
                </p>
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>Energy-efficient lighting requirements (minimum 75% of fixed lighting to be low energy)</li>
                  <li>Controls for heating and lighting systems</li>
                  <li>Energy usage monitoring provisions</li>
                  <li>Power factor correction considerations</li>
                </ul>
              </div>
              
              <div className="bg-[#2a2d24] p-4 rounded-md">
                <h4 className="font-medium text-[#FFC900] mb-2">Part B: Fire Safety</h4>
                <p>
                  Influences electrical design through:
                </p>
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>Fire detection and alarm systems requirements</li>
                  <li>Emergency lighting provisions</li>
                  <li>Fire stopping around cable penetrations</li>
                  <li>Requirements for escape routes</li>
                </ul>
              </div>
              
              <div className="bg-[#2a2d24] p-4 rounded-md">
                <h4 className="font-medium text-[#FFC900] mb-2">Part M: Access to and Use of Buildings</h4>
                <p>
                  Affects electrical design through:
                </p>
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>Heights of socket outlets and switches</li>
                  <li>Visual contrast requirements for electrical accessories</li>
                  <li>Accessibility of controls</li>
                  <li>Provision of facilities for people with disabilities</li>
                </ul>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Energy Efficiency Standards",
        content: (
          <div className="space-y-4">
            <p>
              Modern electrical installations should be designed with energy efficiency in mind:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Lighting design:</span> Use of LED technology, daylight harvesting, 
                presence detection, and smart controls
              </li>
              <li>
                <span className="font-medium">Power factor correction:</span> Reducing reactive power demand to 
                improve efficiency and reduce costs
              </li>
              <li>
                <span className="font-medium">Harmonics mitigation:</span> Reducing harmonic distortion that causes 
                additional losses and heating
              </li>
              <li>
                <span className="font-medium">Cable sizing:</span> Correct sizing to minimize losses while maintaining safety
              </li>
              <li>
                <span className="font-medium">Standby power reduction:</span> Incorporating switched socket outlets or 
                intelligent power management
              </li>
              <li>
                <span className="font-medium">Energy monitoring:</span> Sub-metering and energy management systems
              </li>
            </ul>
            
            <p className="mt-3">
              Specific considerations include:
            </p>
            
            <div className="bg-[#2a2d24] p-4 rounded-md space-y-2">
              <p>1. Compliance with Minimum Energy Efficiency Standards (MEES)</p>
              <p>2. Energy Performance Certificates (EPCs) requirements</p>
              <p>3. Building Research Establishment Environmental Assessment Method (BREEAM) standards</p>
              <p>4. Display Energy Certificates (DECs) for public buildings</p>
              <p>5. Part L compliance for new buildings and major renovations</p>
            </div>
          </div>
        )
      },
      {
        title: "Fire Safety Regulations",
        content: (
          <div className="space-y-4">
            <p>
              Electrical design plays a crucial role in fire safety:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Fire detection and alarm systems:</span> Design according to BS 5839
              </li>
              <li>
                <span className="font-medium">Emergency lighting:</span> Design according to BS 5266
              </li>
              <li>
                <span className="font-medium">Fire-resistant cables:</span> Selection of appropriate cable types for 
                critical systems and escape routes
              </li>
              <li>
                <span className="font-medium">Compartmentation:</span> Maintaining fire separation through proper 
                sealing of penetrations
              </li>
              <li>
                <span className="font-medium">Escape routes:</span> Special requirements for electrical installations 
                in escape routes
              </li>
            </ul>
            
            <p className="mt-3">
              The Regulatory Reform (Fire Safety) Order 2005 requires:
            </p>
            
            <div className="bg-[#2a2d24] p-4 rounded-md space-y-2">
              <p>1. Regular testing and maintenance of electrical systems to prevent fires</p>
              <p>2. Emergency lighting for safe evacuation</p>
              <p>3. Fire detection and alarm systems appropriate to the building use</p>
              <p>4. Protection of escape routes from fire and smoke</p>
              <p>5. Risk assessments that consider electrical fire hazards</p>
            </div>
            
            <p className="mt-4">
              Additional standards to consider:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>BS 5839-1: Fire detection and alarm systems for buildings</li>
              <li>BS 5266-1: Emergency lighting code of practice</li>
              <li>BS 8519: Selection and installation of fire-resistant power and control cable systems</li>
              <li>BS 7671 Section 422: Protection against fire caused by electrical equipment</li>
              <li>BS 7671 Section 560: Safety services</li>
            </ul>
          </div>
        )
      }
    ]
  }
];

export default unit305sections;
