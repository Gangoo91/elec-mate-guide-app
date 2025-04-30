
import React from 'react';

export type SectionData = {
  title: string;
  description: string;
  content: React.ReactNode;
};

export type SectionsDataType = Record<string, SectionData>;

// Define the sections data
export const powerSystemsSectionsData: SectionsDataType = {
  "1.1": {
    title: "Thermal Power Generation",
    description: "Understanding thermal power plants and their operation",
    content: (
      <div className="space-y-4">
        <p>Thermal power plants convert heat energy to electrical energy through various methods, primarily using steam turbines driven by heat from combustion.</p>
        
        <h4 className="text-md font-semibold text-[#FFC900]">Types of Thermal Power Plants:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Coal-Fired Power Plants
            <ul className="list-disc pl-6 mt-2">
              <li>Uses pulverized coal as fuel</li>
              <li>Heat from combustion converts water to steam</li>
              <li>Steam drives turbines connected to generators</li>
            </ul>
          </li>
          <li>Natural Gas Power Plants
            <ul className="list-disc pl-6 mt-2">
              <li>Uses natural gas as primary fuel</li>
              <li>Can be configured as simple-cycle or combined-cycle</li>
              <li>Faster startup and lower emissions than coal</li>
            </ul>
          </li>
          <li>Oil-Fired Power Plants
            <ul className="list-disc pl-6 mt-2">
              <li>Uses petroleum products as fuel</li>
              <li>Often used as peaking or backup plants</li>
              <li>Declining in use due to cost and environmental concerns</li>
            </ul>
          </li>
        </ul>
      </div>
    )
  },
  "1.2": {
    title: "Hydroelectric Power",
    description: "Principles and applications of hydroelectric generation",
    content: (
      <div className="space-y-4">
        <p>Hydroelectric power harnesses the energy of flowing water to generate electricity through turbines connected to generators.</p>
        
        <h4 className="text-md font-semibold text-[#FFC900]">Key Components:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Dam - Creates a reservoir and controls water flow</li>
          <li>Intake - Channels water to the turbines</li>
          <li>Turbines - Convert water energy to rotational mechanical energy</li>
          <li>Generators - Convert mechanical rotation to electrical energy</li>
          <li>Transmission equipment - Delivers electricity to the grid</li>
        </ul>
        
        <h4 className="text-md font-semibold text-[#FFC900] mt-4">Types of Hydroelectric Plants:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Impoundment - Uses dams to store water in reservoirs</li>
          <li>Run-of-river - Uses natural water flow with little or no storage</li>
          <li>Pumped storage - Uses two reservoirs at different elevations</li>
        </ul>
      </div>
    )
  },
  "1.3": {
    title: "Nuclear Power",
    description: "Nuclear fission processes and power generation",
    content: (
      <div className="space-y-4">
        <p>Nuclear power plants generate electricity using heat produced by nuclear fission reactions, primarily of uranium-235 atoms.</p>
        
        <h4 className="text-md font-semibold text-[#FFC900]">Nuclear Power Plant Components:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Reactor Core
            <ul className="list-disc pl-6 mt-2">
              <li>Contains nuclear fuel assemblies</li>
              <li>Control rods regulate the reaction rate</li>
              <li>Moderator (often water) slows neutrons</li>
            </ul>
          </li>
          <li>Cooling Systems
            <ul className="list-disc pl-6 mt-2">
              <li>Primary coolant loop removes heat from the reactor</li>
              <li>Secondary loop generates steam for turbines</li>
              <li>Condenser returns steam to water</li>
            </ul>
          </li>
          <li>Safety Systems
            <ul className="list-disc pl-6 mt-2">
              <li>Emergency cooling systems</li>
              <li>Containment structures</li>
              <li>Redundant control systems</li>
            </ul>
          </li>
        </ul>
      </div>
    )
  },
  "1.4": {
    title: "Renewable Energy Sources",
    description: "Solar, wind, and other renewable generation methods",
    content: (
      <div className="space-y-4">
        <p>Renewable energy sources generate electricity from naturally replenishing resources with minimal environmental impact.</p>
        
        <h4 className="text-md font-semibold text-[#FFC900]">Solar Power:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Photovoltaic (PV) Systems
            <ul className="list-disc pl-6 mt-2">
              <li>Direct conversion of sunlight to electricity</li>
              <li>PV cells made primarily of silicon semiconductors</li>
              <li>Scalable from residential to utility-scale installations</li>
            </ul>
          </li>
          <li>Concentrated Solar Power (CSP)
            <ul className="list-disc pl-6 mt-2">
              <li>Uses mirrors to focus sunlight onto receivers</li>
              <li>Generated heat drives conventional steam turbines</li>
              <li>Often includes thermal storage capabilities</li>
            </ul>
          </li>
        </ul>
        
        <h4 className="text-md font-semibold text-[#FFC900] mt-4">Wind Power:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Horizontal-Axis Wind Turbines (HAWT)
            <ul className="list-disc pl-6 mt-2">
              <li>Most common commercial design</li>
              <li>Typically three-bladed rotors facing into the wind</li>
              <li>Available in various sizes from kilowatts to megawatts</li>
            </ul>
          </li>
          <li>Vertical-Axis Wind Turbines (VAWT)
            <ul className="list-disc pl-6 mt-2">
              <li>Blades rotate around a vertical shaft</li>
              <li>Can capture wind from any direction</li>
              <li>Less efficient but useful in certain applications</li>
            </ul>
          </li>
        </ul>
      </div>
    )
  },
  "2.1": {
    title: "Transmission Systems",
    description: "High-voltage transmission of electrical power",
    content: (
      <div className="space-y-4">
        <p>Power transmission systems transport electricity over long distances from generation plants to distribution networks using high voltage to minimize losses.</p>
        
        <h4 className="text-md font-semibold text-[#FFC900]">Transmission Line Components:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Conductors
            <ul className="list-disc pl-6 mt-2">
              <li>Typically aluminum conductor steel-reinforced (ACSR)</li>
              <li>Bundled conductors used for higher voltages</li>
              <li>Special designs for river crossings and high-load areas</li>
            </ul>
          </li>
          <li>Insulators
            <ul className="list-disc pl-6 mt-2">
              <li>Ceramic, glass, or composite materials</li>
              <li>Prevent current flow from conductors to towers</li>
              <li>Designed for mechanical strength and electrical properties</li>
            </ul>
          </li>
          <li>Transmission Towers
            <ul className="list-disc pl-6 mt-2">
              <li>Support conductors at safe heights above ground</li>
              <li>Designed for wind, ice, and seismic loads</li>
              <li>Types include lattice, tubular, and H-frame structures</li>
            </ul>
          </li>
        </ul>
      </div>
    )
  },
  "2.2": {
    title: "Transformers and Substations",
    description: "Voltage transformation and power distribution",
    content: (
      <div className="space-y-4">
        <p>Transformers and substations are critical components in power systems that change voltage levels and control power flow throughout the grid.</p>
        
        <h4 className="text-md font-semibold text-[#FFC900]">Power Transformers:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Step-Up Transformers
            <ul className="list-disc pl-6 mt-2">
              <li>Located at generating stations</li>
              <li>Increase voltage for efficient transmission</li>
              <li>Typically raise voltage to 115-765 kV</li>
            </ul>
          </li>
          <li>Step-Down Transformers
            <ul className="list-disc pl-6 mt-2">
              <li>Located at substations</li>
              <li>Reduce voltage for distribution or utilization</li>
              <li>Multiple stages of voltage reduction may be used</li>
            </ul>
          </li>
        </ul>
        
        <h4 className="text-md font-semibold text-[#FFC900] mt-4">Substation Components:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Circuit Breakers - Interrupt power flow during faults</li>
          <li>Disconnect Switches - Isolate equipment for maintenance</li>
          <li>Bus Bars - Connect multiple circuits together</li>
          <li>Surge Arresters - Protect against lightning and switching surges</li>
          <li>Control Systems - Monitor and automate substation operations</li>
        </ul>
      </div>
    )
  },
  "2.3": {
    title: "Grid Infrastructure",
    description: "Power grid design, operation, and management",
    content: (
      <div className="space-y-4">
        <p>The power grid is an interconnected network that delivers electricity from suppliers to consumers, consisting of generation, transmission, and distribution systems.</p>
        
        <h4 className="text-md font-semibold text-[#FFC900]">Grid Structure:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Transmission Grid
            <ul className="list-disc pl-6 mt-2">
              <li>Operates at high voltages (115-765 kV)</li>
              <li>Forms the backbone of the electrical system</li>
              <li>Interconnects generating stations and substations</li>
            </ul>
          </li>
          <li>Subtransmission Systems
            <ul className="list-disc pl-6 mt-2">
              <li>Intermediate voltage levels (33-115 kV)</li>
              <li>Serves large industrial consumers and distribution substations</li>
            </ul>
          </li>
          <li>Distribution Networks
            <ul className="list-disc pl-6 mt-2">
              <li>Lower voltages (11-33 kV for primary, 230-400V for secondary)</li>
              <li>Delivers power to end consumers</li>
              <li>Typically arranged in radial or ring configurations</li>
            </ul>
          </li>
        </ul>
      </div>
    )
  },
  "3.1": {
    title: "Distribution Networks",
    description: "Local power distribution systems and components",
    content: (
      <div className="space-y-4">
        <p>Distribution networks deliver electricity from substations to end users through a system of lines, transformers, and protective equipment.</p>
        
        <h4 className="text-md font-semibold text-[#FFC900]">Distribution System Components:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Primary Distribution Lines
            <ul className="list-disc pl-6 mt-2">
              <li>Typically 11 kV or 33 kV</li>
              <li>Feed distribution transformers</li>
              <li>Can be overhead or underground</li>
            </ul>
          </li>
          <li>Distribution Transformers
            <ul className="list-disc pl-6 mt-2">
              <li>Step down voltage to utilization levels</li>
              <li>Pole-mounted or pad-mounted</li>
              <li>Various sizes based on load requirements</li>
            </ul>
          </li>
          <li>Secondary Distribution
            <ul className="list-disc pl-6 mt-2">
              <li>Low voltage lines (230-400V)</li>
              <li>Connect directly to consumer premises</li>
              <li>Arranged in various configurations for reliability</li>
            </ul>
          </li>
        </ul>
      </div>
    )
  },
  "3.2": {
    title: "Smart Grid Technology",
    description: "Modern grid monitoring and control systems",
    content: (
      <div className="space-y-4">
        <p>Smart grid technologies integrate digital communications and automation to improve the efficiency, reliability, and sustainability of electrical power systems.</p>
        
        <h4 className="text-md font-semibold text-[#FFC900]">Key Smart Grid Components:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Advanced Metering Infrastructure (AMI)
            <ul className="list-disc pl-6 mt-2">
              <li>Smart meters with two-way communication</li>
              <li>Real-time usage monitoring</li>
              <li>Remote meter reading and service connections</li>
            </ul>
          </li>
          <li>Distribution Automation
            <ul className="list-disc pl-6 mt-2">
              <li>Automated fault detection and isolation</li>
              <li>Self-healing network capabilities</li>
              <li>Remote control of switches and reclosers</li>
            </ul>
          </li>
          <li>Grid Management Systems
            <ul className="list-disc pl-6 mt-2">
              <li>SCADA (Supervisory Control and Data Acquisition)</li>
              <li>Distribution Management Systems (DMS)</li>
              <li>Outage Management Systems (OMS)</li>
            </ul>
          </li>
        </ul>
      </div>
    )
  },
  "3.3": {
    title: "Load Balancing",
    description: "Techniques for optimizing power distribution",
    content: (
      <div className="space-y-4">
        <p>Load balancing involves distributing electrical load evenly across power sources and distribution paths to improve reliability and efficiency of the power system.</p>
        
        <h4 className="text-md font-semibold text-[#FFC900]">Load Balancing Methods:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Phase Balancing
            <ul className="list-disc pl-6 mt-2">
              <li>Distributing single-phase loads evenly across three phases</li>
              <li>Minimizes neutral currents and voltage imbalances</li>
              <li>Improves equipment efficiency and lifespan</li>
            </ul>
          </li>
          <li>Feeder Load Balancing
            <ul className="list-disc pl-6 mt-2">
              <li>Redistribution of loads between distribution feeders</li>
              <li>Uses tie switches for load transfer between feeders</li>
              <li>Prevents overloading of individual circuits</li>
            </ul>
          </li>
          <li>Demand Response
            <ul className="list-disc pl-6 mt-2">
              <li>Time-based pricing to shift consumption patterns</li>
              <li>Direct load control for peak shaving</li>
              <li>Integration with smart appliances and building management systems</li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
};
