
import React from 'react';
import { SectionContent } from '@/types/units'; 

export const unit305sections: SectionContent[] = [
  {
    id: "1.1",
    title: "Electrical Installation Design Principles",
    description: "Planning circuits and supply arrangements for various applications.",
    content: [
      {
        title: "Design Principles Overview",
        content: (
          <div className="space-y-4">
            <p>
              Electrical installation design requires careful planning to ensure safety, compliance with regulations, and efficient operation.
              Designs must cater to the specific needs of domestic, commercial, or industrial settings.
            </p>
            <p>
              The design process involves determining circuit requirements, calculating loads, selecting appropriate equipment, and 
              ensuring compliance with BS 7671 (Wiring Regulations) and building regulations.
            </p>
          </div>
        ),
      },
      {
        title: "Learning Objectives",
        content: (
          <ul className="list-disc pl-6 space-y-2">
            <li>Understand how to plan electrical circuits for domestic, commercial and industrial settings</li>
            <li>Learn how to choose appropriate supply arrangements for different installations</li>
            <li>Design appropriate lighting, socket outlet, and specialized circuits</li>
          </ul>
        ),
      },
      {
        title: "Supply Arrangements",
        content: (
          <div className="space-y-4">
            <p>
              Different supply arrangements are used depending on the installation requirements:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>TN-S System:</strong> Separate neutral and protective conductors throughout the system</li>
              <li><strong>TN-C-S System:</strong> Combined neutral and protective conductors in part of the system (PME)</li>
              <li><strong>TT System:</strong> Connection to earth provided by a local electrode</li>
            </ul>
            <p>
              The choice of supply arrangement affects safety, protection requirements, and installation design.
            </p>
          </div>
        ),
      }
    ],
  },
  {
    id: "2.1",
    title: "Selection of Electrical Equipment",
    description: "Selection of protective devices, cables, accessories and distribution boards.",
    content: [
      {
        title: "Protective Devices",
        content: (
          <div className="space-y-4">
            <p>
              Choosing appropriate protective devices is crucial for ensuring safety and compliance with regulations.
              Different types of protective devices serve specific functions:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>MCBs (Miniature Circuit Breakers):</strong> Provide overload and short-circuit protection</li>
              <li><strong>RCDs (Residual Current Devices):</strong> Provide protection against earth faults and electric shock</li>
              <li><strong>RCBOs (Residual Current Breaker with Overload):</strong> Combine MCB and RCD functions</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Cable Selection",
        content: (
          <div className="space-y-4">
            <p>
              Cable selection must consider:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Current-carrying capacity</li>
              <li>Voltage drop constraints</li>
              <li>Installation method and environment</li>
              <li>Mechanical protection requirements</li>
            </ul>
            <p>
              Common cable types include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>T&E (Twin and Earth):</strong> Used in domestic installations</li>
              <li><strong>SWA (Steel Wire Armored):</strong> Used for underground or external applications</li>
              <li><strong>MICC (Mineral Insulated Copper Clad):</strong> Used where fire resistance is required</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Distribution Boards and Accessories",
        content: (
          <div className="space-y-4">
            <p>
              Distribution boards should be selected based on:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Number of circuits required</li>
              <li>Type and rating of protective devices needed</li>
              <li>IP rating appropriate for the environment</li>
              <li>Future expansion requirements</li>
            </ul>
            <p>
              Accessories such as switches, sockets, and junction boxes must be selected considering their IP rating,
              current rating, and suitability for the installation environment.
            </p>
          </div>
        ),
      }
    ],
  },
  {
    id: "3.1",
    title: "Cable Sizing and Protection",
    description: "Calculations for current-carrying capacity, voltage drop and fault protection.",
    content: [
      {
        title: "Current-Carrying Capacity",
        content: (
          <div className="space-y-4">
            <p>
              Cables must be sized to carry the design current (I<sub>b</sub>) without exceeding their current-carrying capacity (I<sub>z</sub>):
            </p>
            <p className="font-semibold">
              I<sub>b</sub> ≤ I<sub>n</sub> ≤ I<sub>z</sub>
            </p>
            <p>
              Where:<br />
              I<sub>b</sub> = Design current<br />
              I<sub>n</sub> = Nominal current of the protective device<br />
              I<sub>z</sub> = Current-carrying capacity of the conductor
            </p>
            <p>
              The current-carrying capacity must be adjusted using correction factors for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ambient temperature</li>
              <li>Grouping of cables</li>
              <li>Thermal insulation</li>
              <li>Installation method</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Voltage Drop Calculations",
        content: (
          <div className="space-y-4">
            <p>
              The voltage drop in a circuit must not exceed the maximum permitted values:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>3% for lighting circuits</li>
              <li>5% for other circuits</li>
            </ul>
            <p>
              Voltage drop is calculated using the formula:
            </p>
            <p className="font-semibold">
              ΔV = (mV/A/m × I × L) / 1000
            </p>
            <p>
              Where:<br />
              ΔV = Voltage drop (V)<br />
              mV/A/m = Millivolts per ampere per meter (from tables)<br />
              I = Design current (A)<br />
              L = Length of the cable (m)
            </p>
          </div>
        ),
      },
      {
        title: "Fault Protection",
        content: (
          <div className="space-y-4">
            <p>
              To ensure cables are protected during fault conditions, the adiabatic equation is used:
            </p>
            <p className="font-semibold">
              S² = I² × t / k²
            </p>
            <p>
              Where:<br />
              S = Conductor cross-sectional area (mm²)<br />
              I = Fault current (A)<br />
              t = Operating time of the protective device (s)<br />
              k = Conductor material factor
            </p>
            <p>
              This ensures the cable can withstand the thermal effects of fault currents for the time it takes the protective
              device to operate.
            </p>
          </div>
        ),
      }
    ],
  },
  {
    id: "4.1",
    title: "Discrimination and Coordination",
    description: "Ensuring protective devices operate correctly during fault conditions.",
    content: [
      {
        title: "Principles of Discrimination",
        content: (
          <div className="space-y-4">
            <p>
              Discrimination (or selectivity) ensures that only the protective device closest to a fault operates,
              minimizing the extent of the power outage. This requires careful coordination of protective devices.
            </p>
            <p>
              Proper discrimination requires:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Appropriate selection of device types</li>
              <li>Correct rating of devices</li>
              <li>Proper time/current characteristics</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Types of Discrimination",
        content: (
          <div className="space-y-4">
            <p>
              Discrimination can be achieved through different methods:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Current Discrimination:</strong> Based on the current ratings of the devices</li>
              <li><strong>Time Discrimination:</strong> Based on the operating times of the devices</li>
              <li><strong>Energy Discrimination:</strong> Based on the let-through energy characteristics</li>
            </ul>
            <p>
              Manufacturers' data is essential for achieving proper discrimination between devices.
            </p>
          </div>
        ),
      },
      {
        title: "Practical Considerations",
        content: (
          <div className="space-y-4">
            <p>
              When designing for discrimination:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use a ratio of at least 1.5:1 between upstream and downstream MCBs</li>
              <li>Consider using different types of devices (Type B, C, D) to achieve discrimination</li>
              <li>RCDs should be graded by sensitivity and operating times</li>
              <li>Always refer to manufacturer's discrimination tables</li>
            </ul>
          </div>
        ),
      }
    ],
  },
  {
    id: "5.1",
    title: "Earthing and Bonding Design",
    description: "Main and supplementary bonding, earthing conductor sizing.",
    content: [
      {
        title: "Earthing Systems",
        content: (
          <div className="space-y-4">
            <p>
              The earthing system provides a path for fault currents to safely return to the source, enabling protective
              devices to operate and ensuring touch voltages remain safe.
            </p>
            <p>
              The earthing system must be designed based on the type of supply:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>TN-S: Separate earth and neutral conductors throughout</li>
              <li>TN-C-S: Combined neutral and earth conductor at the supply point (PME)</li>
              <li>TT: Earth provided by local earth electrode</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Main Protective Bonding",
        content: (
          <div className="space-y-4">
            <p>
              Main protective bonding connects extraneous conductive parts (water, gas, oil pipes, structural steel) to the
              main earthing terminal to prevent dangerous potential differences.
            </p>
            <p>
              The minimum size for main protective bonding conductors is determined by the size of the supply neutral conductor:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>If supply neutral ≤ 35mm², then bonding conductor is 10mm²</li>
              <li>If supply neutral > 35mm², then bonding conductor is 50% of the supply neutral size</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Supplementary Bonding",
        content: (
          <div className="space-y-4">
            <p>
              Supplementary bonding may be required in special locations such as bathrooms and swimming pools to reduce
              the risk of electric shock by connecting all simultaneously touchable exposed and extraneous conductive parts.
            </p>
            <p>
              The minimum size for supplementary bonding conductors:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Between exposed conductive parts: as the smallest protective conductor</li>
              <li>Between exposed and extraneous conductive parts: at least 2.5mm² if mechanically protected, or 4mm² if not</li>
            </ul>
          </div>
        ),
      }
    ],
  },
  {
    id: "6.1",
    title: "Health, Safety and Building Regulations",
    description: "BS 7671, Building Regulations, energy efficiency and fire safety.",
    content: [
      {
        title: "Wiring Regulations (BS 7671)",
        content: (
          <div className="space-y-4">
            <p>
              Electrical installations must comply with BS 7671 (IET Wiring Regulations). Key aspects include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Protection requirements against electric shock</li>
              <li>Protection against thermal effects</li>
              <li>Protection against overcurrent</li>
              <li>Isolation and switching requirements</li>
              <li>Inspection and testing procedures</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Building Regulations",
        content: (
          <div className="space-y-4">
            <p>
              Electrical installations must comply with relevant building regulations:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Part P:</strong> Electrical safety in dwellings</li>
              <li><strong>Part L:</strong> Conservation of fuel and power</li>
              <li><strong>Part B:</strong> Fire safety</li>
              <li><strong>Part M:</strong> Access to and use of buildings</li>
            </ul>
            <p>
              Notifiable work in dwellings must be carried out by a competent person registered with a Part P scheme provider
              or be inspected by building control.
            </p>
          </div>
        ),
      },
      {
        title: "Energy Efficiency and Sustainability",
        content: (
          <div className="space-y-4">
            <p>
              Modern electrical design should incorporate energy efficiency measures:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Energy-efficient lighting (LED technology)</li>
              <li>Lighting controls (presence detection, daylight linking)</li>
              <li>Integration with renewable energy sources</li>
              <li>Smart metering and monitoring systems</li>
              <li>Appropriate cable sizing to minimize losses</li>
            </ul>
          </div>
        ),
      }
    ],
  }
];

export default unit305sections;
