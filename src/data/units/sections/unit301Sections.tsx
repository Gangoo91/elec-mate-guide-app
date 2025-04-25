
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
  "1.3": {
    title: "Sustainability in Electrical Installations",
    description: "Implementing sustainable practices in the design and installation of electrical systems",
    content: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Principles of Sustainable Electrical Design</h2>
        <p>
          Sustainability in electrical installations involves minimizing environmental impact while maintaining functionality, safety, and reliability. Key principles include:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Energy efficiency throughout the system lifecycle</li>
          <li>Resource conservation in materials and components</li>
          <li>Reduction of carbon emissions</li>
          <li>Minimization of waste during installation and operation</li>
          <li>Design for longevity and adaptability</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Sustainable Material Selection</h3>
        <p>
          Choosing sustainable materials for electrical installations:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Low-smoke zero-halogen (LSZH) cables</li>
          <li>Recyclable materials for containment systems</li>
          <li>Components with environmental product declarations (EPDs)</li>
          <li>Products with reduced embodied carbon</li>
          <li>Locally sourced materials to reduce transport emissions</li>
          <li>RoHS compliant components</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Energy Monitoring and Management</h3>
        <p>
          Systems that enable ongoing optimization of energy usage:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Smart metering for detailed energy consumption data</li>
          <li>Sub-metering for individual circuits or equipment</li>
          <li>Energy management systems with reporting capabilities</li>
          <li>Data analytics for identifying efficiency opportunities</li>
          <li>User interfaces that encourage energy-conscious behavior</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Integrating Renewable Technologies</h2>
        <p>
          Creating installations that work seamlessly with renewable energy sources:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Future-proofing for renewable integration</li>
          <li>Demand-side response capability</li>
          <li>Grid-interactive systems</li>
          <li>Energy storage integration</li>
          <li>Microgrids and local energy networks</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Sustainable Installation Practices</h2>
        <p>
          Minimizing environmental impact during the installation phase:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Waste reduction and recycling on-site</li>
          <li>Efficient scheduling to minimize travel</li>
          <li>Digital tools for documentation to reduce paper usage</li>
          <li>Careful planning to minimize material waste</li>
          <li>Protection of building fabric to reduce remedial work</li>
          <li>Low-impact installation methods</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Lifecycle Considerations</h2>
        <p>
          Taking a whole-life approach to electrical installations:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Designing for ease of maintenance and repair</li>
          <li>Specifying components with longer service lives</li>
          <li>Planning for end-of-life disassembly and recycling</li>
          <li>Considering embodied carbon alongside operational carbon</li>
          <li>Scenario planning for future technological changes</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Certification and Standards</h2>
        <p>
          Frameworks for ensuring and demonstrating sustainability:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>BREEAM assessment criteria for electrical installations</li>
          <li>LEED certification requirements</li>
          <li>BS 8900 (Managing sustainable development)</li>
          <li>ISO 14001 (Environmental management systems)</li>
          <li>WELL Building Standard for electrical systems</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Carbon Reduction Strategies</h3>
        <p>
          Specific approaches to minimize carbon impact:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Zero carbon design principles</li>
          <li>Carbon budgeting for projects</li>
          <li>Offsetting unavoidable emissions</li>
          <li>Low carbon alternatives for traditional components</li>
          <li>Circular economy approaches to materials and equipment</li>
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
        
        <h3 className="text-lg font-medium mt-4">Inverters</h3>
        <p>
          Inverters convert DC electricity from the panels to AC electricity for use in buildings:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>String inverters: Connect to multiple panels in series</li>
          <li>Microinverters: Installed on each individual panel</li>
          <li>Power optimizers: DC-DC converters paired with a central inverter</li>
          <li>Hybrid inverters: Include battery storage capability</li>
          <li>Grid-tied inverters vs. off-grid inverters</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Mounting Systems</h3>
        <p>
          Structures that secure panels to roofs or ground:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Roof-mounted systems: Pitched roof or flat roof</li>
          <li>Ground-mounted systems</li>
          <li>Building-integrated photovoltaics (BIPV)</li>
          <li>Tracking systems (single or dual-axis)</li>
          <li>Ballasted systems that don't penetrate the roof membrane</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Electrical Balance of System (BOS) Components</h2>
        
        <h3 className="text-lg font-medium mt-4">DC Disconnects and Combiners</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>DC isolators for safe disconnection</li>
          <li>Combiner boxes for connecting multiple strings</li>
          <li>DC circuit breakers or fuses for overcurrent protection</li>
          <li>Surge protection devices (SPDs)</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">AC Components</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>AC isolator switch</li>
          <li>Generation meter</li>
          <li>AC circuit breakers</li>
          <li>Grid connection equipment</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Cables and Connectors</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>PV cable (UV-resistant, dual-insulated)</li>
          <li>MC4 or similar connectors</li>
          <li>Earthing/grounding conductors</li>
          <li>AC cabling from inverter to distribution board</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Monitoring Systems</h2>
        <p>
          Systems to track performance and detect issues:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Inverter-integrated monitoring</li>
          <li>Independent monitoring systems</li>
          <li>Data loggers</li>
          <li>Weather stations for performance ratio calculations</li>
          <li>Mobile apps for system monitoring</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Energy Storage Systems</h2>
        <p>
          Optional components for storing excess energy:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Battery technologies (lithium-ion, lead-acid, flow batteries)</li>
          <li>Battery management systems (BMS)</li>
          <li>Battery inverters or hybrid inverters</li>
          <li>Charge controllers</li>
          <li>Associated safety equipment</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Safety and Protection Systems</h2>
        <p>
          Components ensuring safe operation:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Rapid shutdown systems</li>
          <li>Arc fault circuit interrupters</li>
          <li>Residual current devices (RCDs)</li>
          <li>Lightning protection systems</li>
          <li>Fire safety equipment</li>
          <li>Anti-islanding protection in inverters</li>
        </ul>
      </div>
    ),
  }
};
