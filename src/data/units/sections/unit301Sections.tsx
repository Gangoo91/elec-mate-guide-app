import React from 'react';
import RenewableEnergy from '@/components/sections/unit301/RenewableEnergy';

interface SectionData {
  title: string;
  description: string;
  content: React.ReactNode;
}

export const sections301: Record<string, SectionData> = {
  "1.1": {
    title: "Renewable Energy Systems",
    description: "Understanding various renewable energy technologies and their applications in electrical installations",
    content: <RenewableEnergy />
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
  },
  "2.2": {
    title: "Installation Requirements",
    description: "Guidelines and requirements for installing solar PV systems",
    content: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Installation Planning and Preparation</h2>
        <p>
          Proper planning and preparation are crucial for successful solar PV installations. This section covers 
          the key requirements and considerations for installing solar photovoltaic systems.
        </p>
        
        <h3 className="text-lg font-medium mt-4">Site Assessment</h3>
        <p>
          A thorough site assessment is a prerequisite for any installation:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Solar resource evaluation (annual solar irradiation)</li>
          <li>Shading analysis using specialized tools</li>
          <li>Roof structural integrity assessment</li>
          <li>Orientation and tilt analysis for optimal energy yield</li>
          <li>Available roof area calculation</li>
          <li>Existing electrical infrastructure assessment</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Legal and Regulatory Requirements</h3>
        <p>
          Various regulations govern solar PV installations:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Building regulations compliance</li>
          <li>Planning permission requirements</li>
          <li>MCS (Microgeneration Certification Scheme) standards</li>
          <li>DNO (Distribution Network Operator) notification and approval</li>
          <li>G98/G99 connection requirements for grid-connected systems</li>
          <li>Local authority requirements and restrictions</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Structural Requirements</h2>
        <p>
          The structural aspects of installation must be carefully considered:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Roof load-bearing capacity assessment</li>
          <li>Wind and snow load calculations</li>
          <li>Mounting system selection based on roof type</li>
          <li>Penetrative vs. non-penetrative mounting solutions</li>
          <li>Waterproofing and weather sealing measures</li>
          <li>Thermal expansion considerations for mounting hardware</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Electrical Requirements</h2>
        <p>
          Electrical installations must comply with specific requirements:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>BS 7671 (IET Wiring Regulations) compliance</li>
          <li>DC system design considerations</li>
          <li>String configuration and voltage/current limits</li>
          <li>AC connection point requirements</li>
          <li>Earthing and bonding requirements for PV systems</li>
          <li>Surge protection requirements</li>
          <li>Isolation and switching requirements</li>
          <li>Cable selection and sizing for DC and AC circuits</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Safety Requirements</h2>
        <p>
          Safety is paramount in solar PV installations:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Working at height regulations</li>
          <li>Personal protective equipment (PPE) requirements</li>
          <li>Safe isolation procedures for DC systems</li>
          <li>Fire safety considerations and access routes</li>
          <li>Risk assessment process</li>
          <li>System labeling and documentation requirements</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Commissioning Requirements</h2>
        <p>
          Proper commissioning ensures system functionality and safety:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Visual inspection procedures</li>
          <li>DC circuit testing requirements</li>
          <li>AC circuit testing requirements</li>
          <li>Earth continuity and insulation resistance testing</li>
          <li>Performance ratio verification</li>
          <li>MCS commissioning certificate requirements</li>
          <li>Handover documentation for the client</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Common Installation Standards</h3>
        <p>
          Key standards governing PV installations:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>IEC 62446: Grid connected photovoltaic systems - Minimum requirements for system documentation, commissioning tests and inspection</li>
          <li>MCS MIS 3002: Requirements for contractors undertaking solar PV installations</li>
          <li>IEC 60364-7-712: Requirements for special installations or locations - Solar photovoltaic (PV) power supply systems</li>
          <li>BS EN 62305: Protection against lightning</li>
          <li>BS 7671 Section 712: Solar photovoltaic power supply systems</li>
        </ul>
      </div>
    ),
  },
  "2.3": {
    title: "Maintenance and Troubleshooting",
    description: "Common issues and maintenance procedures for solar PV systems",
    content: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Maintenance Procedures for Solar PV Systems</h2>
        <p>
          Regular maintenance is essential to ensure optimal performance and longevity of solar PV systems. 
          This section covers key maintenance procedures and troubleshooting techniques.
        </p>
        
        <h3 className="text-lg font-medium mt-4">Regular Maintenance Schedule</h3>
        <p>
          A systematic maintenance approach includes:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Visual inspections (quarterly recommended)</li>
          <li>Panel cleaning (frequency depends on location)</li>
          <li>Electrical testing (annual recommended)</li>
          <li>Inverter checks and maintenance</li>
          <li>Mounting system inspection</li>
          <li>Performance data review and analysis</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Panel Cleaning Procedures</h3>
        <p>
          Proper cleaning techniques to maximize efficiency:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Early morning or evening cleaning to avoid thermal shock</li>
          <li>Soft brushes and non-abrasive tools only</li>
          <li>Use of deionized water to prevent mineral deposits</li>
          <li>Avoiding high-pressure water systems</li>
          <li>Special considerations for bird droppings and tree sap</li>
          <li>Safety procedures for working at height</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">System Monitoring</h2>
        <p>
          Effective monitoring helps detect issues early:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Understanding monitoring system data</li>
          <li>Setting up performance alerts</li>
          <li>Analyzing production trends</li>
          <li>Comparing actual vs. expected yield</li>
          <li>Remote monitoring best practices</li>
          <li>Data storage and backup procedures</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Common System Issues</h2>
        <p>
          Frequent problems encountered in PV systems:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Inverter faults and error codes</li>
          <li>Panel hotspots</li>
          <li>Bypass diode failures</li>
          <li>Shading issues</li>
          <li>Connection and wiring problems</li>
          <li>Weather damage</li>
          <li>PID (Potential Induced Degradation)</li>
          <li>Microcracks in cells</li>
          <li>Delamination of panels</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Troubleshooting Techniques</h2>
        <p>
          Systematic approach to identifying and resolving issues:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>IV curve tracing</li>
          <li>Thermal imaging inspection</li>
          <li>Voltage and current measurements</li>
          <li>Insulation resistance testing</li>
          <li>String comparison analysis</li>
          <li>DC:AC ratio assessment</li>
          <li>Performance ratio calculation</li>
          <li>Earth fault detection</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Inverter Troubleshooting</h3>
        <p>
          Common inverter issues and resolution:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Error code interpretation</li>
          <li>Communication problems</li>
          <li>Grid voltage/frequency issues</li>
          <li>Overheating problems</li>
          <li>Firmware update procedures</li>
          <li>Fan/cooling system maintenance</li>
          <li>DC input issues</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Repair and Replacement</h2>
        <p>
          Guidelines for component repair or replacement:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Panel replacement procedures</li>
          <li>Inverter repair vs. replacement considerations</li>
          <li>DC connector replacement best practices</li>
          <li>Cable repair techniques</li>
          <li>Mounting hardware replacement</li>
          <li>Component compatibility considerations</li>
          <li>Warranty claim procedures</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Documentation and Record Keeping</h3>
        <p>
          Maintaining thorough maintenance records:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Maintenance log requirements</li>
          <li>Test certificates and results</li>
          <li>Component replacement records</li>
          <li>Performance data history</li>
          <li>Fault and resolution documentation</li>
          <li>Warranty information</li>
          <li>System modification records</li>
        </ul>
      </div>
    ),
  },
  "3.1": {
    title: "Air Source Heat Pumps (ASHP)",
    description: "Understanding the principles, components, and applications of air source heat pump systems",
    content: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Introduction to Air Source Heat Pumps</h2>
        <p>
          Air source heat pumps (ASHPs) extract heat from the outside air and transfer it inside a building to provide 
          space heating and hot water. They are a renewable technology that can significantly reduce carbon emissions 
          compared to traditional heating systems.
        </p>
        
        <h3 className="text-lg font-medium mt-4">Working Principles</h3>
        <p>
          Air source heat pumps work on the refrigeration cycle principle:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Heat is absorbed from outside air into a refrigerant fluid</li>
          <li>The refrigerant is compressed, raising its temperature</li>
          <li>Heat is transferred from the refrigerant to the building's heating system</li>
          <li>The refrigerant expands and cools, ready to absorb more heat</li>
          <li>The cycle continues, providing continuous heating</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Types of Air Source Heat Pumps</h3>
        <p>
          There are two main types of air source heat pumps:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Air-to-water heat pumps:</strong> Transfer heat to a wet central heating system (radiators, underfloor heating, hot water)</li>
          <li><strong>Air-to-air heat pumps:</strong> Produce warm air directly distributed through the building via fans</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Key Components of ASHP Systems</h2>
        <p>
          An air source heat pump system consists of several key components:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Outdoor unit:</strong> Contains evaporator coil and fan to extract heat from outside air</li>
          <li><strong>Compressor:</strong> Increases the pressure and temperature of the refrigerant</li>
          <li><strong>Condenser:</strong> Heat exchanger that transfers heat to the distribution system</li>
          <li><strong>Expansion valve:</strong> Reduces pressure of the refrigerant, allowing it to cool</li>
          <li><strong>Controls:</strong> System controller, thermostats, and sensors</li>
          <li><strong>Distribution system:</strong> Radiators, underfloor heating, or air handlers</li>
          <li><strong>Buffer tank:</strong> Often included to improve efficiency and reduce on/off cycling</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Efficiency Considerations</h3>
        <p>
          The efficiency of air source heat pumps is measured as the Coefficient of Performance (COP) or Seasonal Performance Factor (SPF):
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>COP is the ratio of heat output to electrical energy input</li>
          <li>Typical COP values range from 2.5 to 4.5 (meaning 2.5 to 4.5 kW of heat for 1 kW of electricity)</li>
          <li>Efficiency varies with outside temperature - lower temperatures reduce efficiency</li>
          <li>Modern ASHPs can operate effectively even in temperatures as low as -25°C</li>
          <li>Some systems include supplementary electric heating for very cold conditions</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Electrical Requirements</h2>
        <p>
          Air source heat pumps have specific electrical requirements:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Typically require a dedicated single-phase or three-phase supply</li>
          <li>Power requirements range from 3 to 12 kW depending on system size</li>
          <li>May require larger incoming supply capacity than traditional heating systems</li>
          <li>Require suitable circuit protection (MCB/RCBO)</li>
          <li>Control wiring for thermostats, sensors, and programmers</li>
          <li>Some systems can be integrated with smart home controls</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Advantages and Limitations</h2>
        
        <h3 className="text-lg font-medium mt-4">Advantages of ASHPs</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Lower carbon emissions compared to fossil fuel heating systems</li>
          <li>Lower running costs than electric, oil, or LPG heating</li>
          <li>Can provide both heating and cooling (with suitable indoor units)</li>
          <li>Long lifespan (typically 15-20 years)</li>
          <li>Minimal maintenance requirements</li>
          <li>Can be combined with solar PV to further reduce carbon footprint</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Limitations of ASHPs</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Lower heat output temperatures than traditional boilers (typically 35-55°C)</li>
          <li>May require larger radiators or underfloor heating</li>
          <li>Performance decreases as outside temperature drops</li>
          <li>Higher initial installation costs compared to conventional heating systems</li>
          <li>Outdoor unit requires suitable space with good airflow</li>
          <li>May produce some noise from the outdoor unit</li>
        </ul>
      </div>
    ),
  },
  "3.2": {
    title: "Ground Source Heat Pumps (GSHP)",
    description: "Understanding the principles, components, and applications of ground source heat pump systems",
    content: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Introduction to Ground Source Heat Pumps</h2>
        <p>
          Ground source heat pumps (GSHPs) extract heat from the ground using a network of buried pipes containing a 
          heat transfer fluid. This heat is then used for space heating and hot water production in buildings, offering 
          high efficiency and low carbon emissions.
        </p>
        
        <h3 className="text-lg font-medium mt-4">Working Principles</h3>
        <p>
          Ground source heat pumps operate on the following principle:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Heat is absorbed from the ground into a heat transfer fluid circulating through buried pipes</li>
          <li>This fluid passes through an evaporator where heat is transferred to a refrigerant</li>
          <li>The refrigerant is compressed, raising its temperature significantly</li>
          <li>Heat from the hot refrigerant is transferred to the building's heating system</li>
          <li>The refrigerant expands and cools, ready to absorb more heat</li>
          <li>The cycle continues, providing continuous heating</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Ground Loop Configurations</h2>
        <p>
          The ground heat collector can be installed in several configurations:
        </p>
        
        <h3 className="text-lg font-medium mt-4">Horizontal Ground Loops</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Pipes buried in trenches at a depth of 1-2 meters</li>
          <li>Requires significant land area (typically 2-3 times the heated floor area)</li>
          <li>Lower installation cost than vertical systems</li>
          <li>More susceptible to seasonal temperature variations</li>
          <li>Can be installed in various patterns (straight, coiled, slinky) to maximize heat collection</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Vertical Ground Loops</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Pipes installed in boreholes drilled to depths of 50-200 meters</li>
          <li>Requires minimal land area, making it suitable for smaller plots</li>
          <li>More consistent year-round performance due to stable ground temperatures at depth</li>
          <li>Higher drilling costs compared to horizontal systems</li>
          <li>Typically uses U-tube or coaxial pipe arrangements within the borehole</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Other Configurations</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Pond/lake loops:</strong> Closed loops submerged in water bodies</li>
          <li><strong>Open-loop systems:</strong> Extract and return water from/to an aquifer or water body</li>
          <li><strong>Energy piles:</strong> Integrate heat exchanger pipes within building foundation piles</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Key Components of GSHP Systems</h2>
        <p>
          A ground source heat pump system consists of several key components:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Ground loop:</strong> Pipe network containing heat transfer fluid (usually water/antifreeze mix)</li>
          <li><strong>Circulation pump:</strong> Circulates the heat transfer fluid through the ground loop</li>
          <li><strong>Heat pump unit:</strong> Contains the evaporator, compressor, condenser, and expansion valve</li>
          <li><strong>Buffer tank:</strong> Stores heated water to improve system efficiency and reduce cycling</li>
          <li><strong>Control system:</strong> Manages system operation based on temperature sensors</li>
          <li><strong>Distribution system:</strong> Typically underfloor heating or low-temperature radiators</li>
          <li><strong>Hot water cylinder:</strong> For domestic hot water production</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Efficiency and Performance</h2>
        <p>
          Ground source heat pumps offer excellent efficiency characteristics:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Typical Coefficient of Performance (COP) of 3.5-5.0</li>
          <li>More stable performance than air source heat pumps due to consistent ground temperatures</li>
          <li>Less affected by seasonal weather variations</li>
          <li>Performance depends on ground conditions (thermal conductivity of soil/rock)</li>
          <li>System design must balance ground loop length, fluid flow rate, and building heat demand</li>
          <li>Properly designed systems avoid ground thermal depletion over time</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Electrical Requirements</h2>
        <p>
          Ground source heat pumps have specific electrical requirements:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Power supply requirements similar to air source heat pumps</li>
          <li>Typical power consumption between 3-15 kW depending on system size</li>
          <li>Additional power required for circulation pumps</li>
          <li>May require three-phase supply for larger systems</li>
          <li>Control circuits for system management and integration with building controls</li>
          <li>Appropriate circuit protection and isolation facilities</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Advantages and Limitations</h3>
        
        <h4 className="text-md font-medium mt-4">Advantages of GSHPs</h4>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Higher efficiency than air source heat pumps, especially in cold weather</li>
          <li>More stable performance year-round</li>
          <li>Lower running costs and carbon emissions than conventional heating systems</li>
          <li>Minimal visual impact (most components are underground or inside)</li>
          <li>Very quiet operation</li>
          <li>Long system lifespan (20+ years for heat pump, 50+ years for ground loop)</li>
          <li>Can provide passive cooling in summer</li>
        </ul>
        
        <h4 className="text-md font-medium mt-4">Limitations of GSHPs</h4>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Higher installation
