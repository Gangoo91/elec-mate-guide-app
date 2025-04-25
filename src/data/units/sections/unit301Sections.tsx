
import React from 'react';

interface SectionData {
  title: string;
  description: string;
  content: React.ReactNode;
}

export const sections301: Record<string, SectionData> = {
  "1.1": {
    title: "Renewable Energy Systems",
    description: "Understanding various renewable energy technologies and their applications in electrical installations",
    content: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Introduction to Renewable Energy</h2>
        <p>
          Renewable energy is derived from natural processes that are replenished at a rate that is equal to or faster than the rate at which they are consumed. The most common forms of renewable energy in electrical installations include solar, wind, hydroelectric, geothermal, and biomass.
        </p>
        
        <h3 className="text-lg font-medium mt-4">Solar Photovoltaic (PV) Systems</h3>
        <p>
          Solar PV systems convert sunlight directly into electricity using semiconducting materials. The key components include:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Solar panels/modules (typically made of silicon cells)</li>
          <li>Inverters (to convert DC to AC electricity)</li>
          <li>Mounting systems</li>
          <li>Cables and electrical protection devices</li>
          <li>Battery storage systems (optional)</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Wind Energy Systems</h3>
        <p>
          Wind turbines convert the kinetic energy of wind into mechanical power, which is then converted to electricity. Small-scale wind turbines can be integrated with electrical installations for residential or commercial buildings.
        </p>
        
        <h3 className="text-lg font-medium mt-4">Heat Pumps</h3>
        <p>
          Heat pumps extract heat energy from one place and transfer it to another. They can be categorized as:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Air source heat pumps (ASHP)</li>
          <li>Ground source heat pumps (GSHP)</li>
          <li>Water source heat pumps</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Biomass Systems</h3>
        <p>
          Biomass systems use organic materials to produce heat and electricity. Modern biomass heating systems include automated fuel feed systems and sophisticated combustion control.
        </p>
        
        <h2 className="text-xl font-semibold mt-6">Integration with Electrical Systems</h2>
        <p>
          When integrating renewable energy technologies with electrical installations, electricians must consider:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Grid connection requirements</li>
          <li>Inverter specifications and compatibility</li>
          <li>Protection systems</li>
          <li>Metering arrangements</li>
          <li>Energy storage options</li>
          <li>Load management systems</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Regulatory Requirements</h2>
        <p>
          All renewable energy installations must comply with:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>BS 7671 (IET Wiring Regulations)</li>
          <li>Microgeneration Certification Scheme (MCS) requirements</li>
          <li>Building Regulations</li>
          <li>Planning permission requirements</li>
          <li>Distribution Network Operator (DNO) requirements for grid connection</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Economic and Environmental Benefits</h2>
        <p>
          Installing renewable energy systems offers multiple benefits:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Reduced carbon emissions</li>
          <li>Lower energy bills</li>
          <li>Increased energy independence</li>
          <li>Potential revenue through feed-in tariffs or export tariffs</li>
          <li>Improved building energy performance ratings</li>
        </ul>
      </div>
    ),
  },
  "1.2": {
    title: "Energy Efficiency Measures",
    description: "Understanding and implementing energy efficiency measures in electrical installations",
    content: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Introduction to Energy Efficiency</h2>
        <p>
          Energy efficiency is about using less energy to perform the same task, eliminating energy waste. In electrical installations, various measures can be implemented to improve energy efficiency.
        </p>
        
        <h3 className="text-lg font-medium mt-4">Lighting Efficiency</h3>
        <p>
          Modern lighting solutions offer significant energy savings:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>LED technology (80-90% more efficient than incandescent)</li>
          <li>Lighting controls (occupancy sensors, daylight harvesting, timers)</li>
          <li>Task-appropriate lighting design</li>
          <li>Zoning and circuit planning</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Heating Systems</h3>
        <p>
          Electrical heating systems can be optimized for efficiency through:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Smart thermostats and zoned heating controls</li>
          <li>Programmable timers</li>
          <li>Insulation improvements</li>
          <li>Heat recovery systems</li>
          <li>Replacing resistance heating with heat pumps where appropriate</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Motors and Drives</h3>
        <p>
          Electric motors often account for a significant portion of electrical consumption in commercial and industrial settings:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>High-efficiency motors (IE3 and IE4 standards)</li>
          <li>Variable speed drives (VSDs)</li>
          <li>Correct sizing of motors for applications</li>
          <li>Regular maintenance schedules</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Building Energy Management Systems (BEMS)</h2>
        <p>
          BEMS provide automated control of building services:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Centralized monitoring and control</li>
          <li>Scheduling of equipment operation</li>
          <li>Optimization of energy usage based on occupancy</li>
          <li>Data collection for energy performance analysis</li>
          <li>Integration with renewable energy systems</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Voltage Optimization</h2>
        <p>
          Voltage optimization can reduce energy consumption by ensuring supply voltage is at an optimal level:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Reducing supply voltage to optimal levels</li>
          <li>Stabilizing voltage to prevent fluctuations</li>
          <li>Typically provides 5-15% energy savings</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Power Factor Correction</h2>
        <p>
          Improving power factor reduces reactive power demands:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Installation of capacitor banks</li>
          <li>Reduced electricity bills (especially for commercial premises)</li>
          <li>Increased electrical system capacity</li>
          <li>Reduced system losses</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Regulations and Standards</h2>
        <p>
          Energy efficiency measures must comply with:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Building Regulations Part L (Conservation of fuel and power)</li>
          <li>Minimum Energy Efficiency Standards (MEES)</li>
          <li>Energy Performance Certificates (EPC) requirements</li>
          <li>Energy Savings Opportunity Scheme (ESOS) for larger organizations</li>
        </ul>
      </div>
    ),
  },
  "2.1": {
    title: "System Components Overview",
    description: "Understanding the key components of solar photovoltaic systems",
    content: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Key Components of Solar PV Systems</h2>
        <p>
          Solar photovoltaic (PV) systems consist of several key components that work together to convert sunlight into usable electricity.
        </p>
        
        <h3 className="text-lg font-medium mt-4">Solar PV Modules/Panels</h3>
        <p>
          These are the most visible components that convert sunlight directly into DC electricity:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Monocrystalline panels (higher efficiency, more expensive)</li>
          <li>Polycrystalline panels (lower cost, slightly lower efficiency)</li>
          <li>Thin-film panels (flexible, lower efficiency, specialized applications)</li>
          <li>Typically rated between 250W to 450W per panel</li>
          <li>Expected lifespan of 25-30 years with gradual efficiency degradation</li>
        </ul>
      </div>
    ),
  },
};
