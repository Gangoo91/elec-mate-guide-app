
import React from 'react';

export const systemOperationsSectionsData: Record<string, {
  title: string;
  description?: string;
  content: React.ReactNode;
}> = {
  "1.1": {
    title: "System Operations Overview",
    description: "Basic concepts and principles of electrical system operations",
    content: (
      <div className="space-y-6">
        <p>
          System operations in electrical engineering refers to the processes, procedures, and activities involved in 
          running electrical systems efficiently, safely, and reliably. This includes monitoring, controlling, and 
          maintaining electrical infrastructure to ensure optimal performance and minimal downtime.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Core Principles of System Operations</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Reliability:</strong> Ensuring consistent and dependable electrical supply with minimal 
            interruptions. This involves redundant systems, backup power supplies, and rapid fault detection.
          </li>
          <li>
            <strong>Safety:</strong> Protecting personnel, equipment, and infrastructure from electrical hazards
            through proper procedures, training, and protective systems.
          </li>
          <li>
            <strong>Efficiency:</strong> Optimizing system performance to minimize energy losses, reduce operational
            costs, and extend equipment lifespan.
          </li>
          <li>
            <strong>Sustainability:</strong> Operating systems in ways that minimize environmental impact and 
            maximize resource utilization.
          </li>
          <li>
            <strong>Adaptability:</strong> Designing systems that can respond to changing demands, integrate new
            technologies, and accommodate growth.
          </li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Key Operational Considerations</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Load Management:</strong> Balancing electrical loads to prevent overloading and ensure 
            stability across the system.
          </li>
          <li>
            <strong>Power Quality:</strong> Monitoring and maintaining appropriate voltage levels, frequency 
            stability, and minimizing harmonics and other disturbances.
          </li>
          <li>
            <strong>System Monitoring:</strong> Continuous surveillance of system parameters, status indicators, 
            and performance metrics to detect anomalies.
          </li>
          <li>
            <strong>Documentation:</strong> Maintaining accurate records of system configuration, operational
            parameters, and changes for reference and troubleshooting.
          </li>
          <li>
            <strong>Communication Protocols:</strong> Establishing clear channels for reporting issues, 
            coordinating activities, and managing emergency responses.
          </li>
        </ul>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="text-[#FFC900] font-medium mb-2">Real-World Application</h4>
          <p>
            In a large commercial building, system operations might involve monitoring the building management system,
            adjusting HVAC electrical loads based on occupancy, scheduling maintenance during low-usage periods, and
            ensuring emergency power systems are ready to activate when needed.
          </p>
        </div>
      </div>
    )
  },
  "1.2": {
    title: "Operational Standards",
    description: "Industry standards and regulatory requirements",
    content: (
      <div className="space-y-6">
        <p>
          Operational standards in electrical systems provide a framework for consistent, safe, and efficient 
          operation. These standards are developed by various international, national, and industry organizations 
          to establish best practices, safety requirements, and performance benchmarks.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Key Regulatory Bodies</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>IEC (International Electrotechnical Commission):</strong> Develops international standards for 
            electrical, electronic and related technologies. IEC 61508 and IEC 61511 are particularly relevant for 
            safety-related systems.
          </li>
          <li>
            <strong>IEEE (Institute of Electrical and Electronics Engineers):</strong> Creates standards for power 
            systems, including IEEE 1547 for interconnecting distributed energy resources with electric power systems.
          </li>
          <li>
            <strong>BSI (British Standards Institution):</strong> Develops national standards including BS 7671 
            (Requirements for Electrical Installations, also known as the IET Wiring Regulations).
          </li>
          <li>
            <strong>HSE (Health and Safety Executive):</strong> Provides regulations and guidance on electrical safety 
            in workplaces, including the Electricity at Work Regulations 1989.
          </li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Critical Operational Standards</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-[#1a1d17]">
            <thead>
              <tr>
                <th className="border border-[#FFC900]/30 p-2 text-left">Standard</th>
                <th className="border border-[#FFC900]/30 p-2 text-left">Focus Area</th>
                <th className="border border-[#FFC900]/30 p-2 text-left">Key Requirements</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#FFC900]/30 p-2">BS 7671</td>
                <td className="border border-[#FFC900]/30 p-2">Electrical Installations</td>
                <td className="border border-[#FFC900]/30 p-2">Safety requirements for design, installation, and 
                verification of electrical installations</td>
              </tr>
              <tr>
                <td className="border border-[#FFC900]/30 p-2">IEC 61508</td>
                <td className="border border-[#FFC900]/30 p-2">Functional Safety</td>
                <td className="border border-[#FFC900]/30 p-2">Development and implementation of safety-related systems</td>
              </tr>
              <tr>
                <td className="border border-[#FFC900]/30 p-2">ISO 50001</td>
                <td className="border border-[#FFC900]/30 p-2">Energy Management</td>
                <td className="border border-[#FFC900]/30 p-2">Framework for energy management systems to improve efficiency</td>
              </tr>
              <tr>
                <td className="border border-[#FFC900]/30 p-2">NFPA 70E</td>
                <td className="border border-[#FFC900]/30 p-2">Arc Flash Safety</td>
                <td className="border border-[#FFC900]/30 p-2">Requirements for safe work practices to protect personnel</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Compliance and Documentation</h3>
        <p>
          Compliance with these standards typically requires thorough documentation of:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Risk assessments and safety analyses</li>
          <li>System design specifications and operating parameters</li>
          <li>Testing procedures and results</li>
          <li>Maintenance records and inspection reports</li>
          <li>Personnel training and qualification records</li>
          <li>Incident reports and corrective actions</li>
        </ul>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="text-[#FFC900] font-medium mb-2">Practical Tip</h4>
          <p>
            When implementing operational standards in your workplace, create a compliance matrix that maps specific 
            standard requirements to your procedures and documentation. This helps ensure comprehensive coverage and
            simplifies audits and reviews.
          </p>
        </div>
      </div>
    )
  },
  "1.3": {
    title: "System Components",
    description: "Key components of electrical operational systems",
    content: (
      <div className="space-y-6">
        <p>
          Electrical operational systems comprise various interconnected components that work together to distribute, 
          control, and monitor electrical power. Understanding these components is essential for effective system 
          operation and maintenance.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Power Distribution Components</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Transformers:</strong> Convert voltage levels between different parts of the system. Types include 
            step-up, step-down, isolation, and distribution transformers.
          </li>
          <li>
            <strong>Switchgear:</strong> Equipment used to control, protect, and isolate electrical equipment. 
            Includes circuit breakers, fuses, and disconnect switches.
          </li>
          <li>
            <strong>Distribution Boards:</strong> Divide electrical power feed into subsidiary circuits while providing 
            a protective fuse or circuit breaker for each circuit.
          </li>
          <li>
            <strong>Power Cables:</strong> Transmit electrical power between components. Cable selection depends on 
            current rating, voltage, environment, and installation method.
          </li>
          <li>
            <strong>Busbars:</strong> Metallic strips or bars used to distribute electrical power to multiple circuits 
            or loads from a common electrical supply.
          </li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Control and Protection Devices</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Circuit Breakers:</strong> Automatically interrupt current flow during overload or fault conditions, 
            protecting the system from damage.
          </li>
          <li>
            <strong>Relays:</strong> Detect abnormal conditions and initiate appropriate responses, such as tripping 
            circuit breakers or activating alarms.
          </li>
          <li>
            <strong>Contactors:</strong> Electrically controlled switches used for switching power to equipment, 
            especially for high current loads.
          </li>
          <li>
            <strong>Surge Protectors:</strong> Devices that protect equipment from voltage spikes by diverting 
            excess voltage to ground.
          </li>
          <li>
            <strong>UPS (Uninterruptible Power Supply):</strong> Provides emergency power when the input power 
            source fails, preventing disruption to critical equipment.
          </li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Monitoring and Measurement Equipment</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Power Analyzers:</strong> Measure various electrical parameters including voltage, current, 
            power factor, and harmonics.
          </li>
          <li>
            <strong>Current Transformers (CTs):</strong> Reduce high current levels to lower, measurable values 
            for metering and protection equipment.
          </li>
          <li>
            <strong>Voltage Transformers (VTs):</strong> Step down high voltages to safer levels for measurement 
            and protection circuits.
          </li>
          <li>
            <strong>Energy Meters:</strong> Record electricity consumption for billing or monitoring purposes.
          </li>
          <li>
            <strong>Temperature Sensors:</strong> Monitor equipment temperatures to detect overheating and prevent 
            damage.
          </li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Integration and Automation Components</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>PLCs (Programmable Logic Controllers):</strong> Industrial digital computers used to control 
            manufacturing processes and equipment.
          </li>
          <li>
            <strong>RTUs (Remote Terminal Units):</strong> Microprocessor-controlled electronic devices that interface 
            objects in the physical world to a distributed control system or SCADA system.
          </li>
          <li>
            <strong>HMI (Human-Machine Interface):</strong> User interface that allows operators to interact with 
            the control system.
          </li>
          <li>
            <strong>Communication Gateways:</strong> Devices that connect different communication networks or systems, 
            enabling data flow between different protocols.
          </li>
        </ul>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="text-[#FFC900] font-medium mb-2">System Integration Case Study</h4>
          <p>
            In a modern hospital, the electrical system might integrate power distribution components like transformers 
            and switchgear with monitoring equipment such as power quality analyzers. These would connect to a building 
            management system via PLCs and gateways, allowing operators to monitor electrical parameters, manage loads, 
            and ensure critical areas like operating theaters receive uninterrupted power through UPS systems.
          </p>
        </div>
      </div>
    )
  },
  "2.1": {
    title: "SCADA Systems",
    description: "Supervisory Control and Data Acquisition fundamentals",
    content: (
      <div className="space-y-6">
        <p>
          SCADA (Supervisory Control and Data Acquisition) systems are computerized networks that monitor and control 
          industrial processes and infrastructure. In electrical engineering, SCADA systems provide real-time supervision 
          and control of power generation, transmission, and distribution systems.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Core Components of SCADA Systems</h3>
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Remote Terminal Units (RTUs):</strong>
            <p className="mt-1">
              Microprocessor-controlled electronic devices that interface with physical equipment such as switches, 
              circuit breakers, and sensors. RTUs convert electrical signals from equipment to digital data and transmit 
              this information to the central system.
            </p>
          </li>
          <li>
            <strong>Programmable Logic Controllers (PLCs):</strong>
            <p className="mt-1">
              Industrial digital computers designed for multiple inputs and outputs, extended temperature ranges, 
              immunity to electrical noise, and resistance to vibration and impact. PLCs often replace RTUs in modern 
              SCADA systems due to their flexibility and cost-effectiveness.
            </p>
          </li>
          <li>
            <strong>Communication Infrastructure:</strong>
            <p className="mt-1">
              Networks and protocols that enable data transfer between field devices and control systems. These can 
              include wired connections (fiber optic, Ethernet), wireless technologies (radio, cellular, satellite), 
              and various communication protocols (Modbus, DNP3, IEC 61850).
            </p>
          </li>
          <li>
            <strong>Master Terminal Unit (MTU):</strong>
            <p className="mt-1">
              The central computer server that gathers and processes data from multiple RTUs/PLCs. The MTU sends commands 
              to field devices and provides the processing power for the human-machine interface.
            </p>
          </li>
          <li>
            <strong>Human-Machine Interface (HMI):</strong>
            <p className="mt-1">
              Software application that presents data to operators and allows them to monitor and control the process. 
              Modern HMIs feature graphical displays, alarm management, trend analysis, and reporting capabilities.
            </p>
          </li>
          <li>
            <strong>Historian:</strong>
            <p className="mt-1">
              Database system that logs all process data and events for later analysis, reporting, and regulatory 
              compliance. Historians can store years of operational data at various resolution levels.
            </p>
          </li>
        </ol>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">SCADA Architecture</h3>
        <p>
          SCADA systems typically employ one of these architectural approaches:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Centralized:</strong> All control functions are managed from a single control center.
          </li>
          <li>
            <strong>Distributed:</strong> Control functions are distributed across multiple interconnected systems.
          </li>
          <li>
            <strong>Networked:</strong> Multiple interconnected SCADA systems share information in real-time.
          </li>
          <li>
            <strong>Cloud-based:</strong> SCADA functionality is partially or wholly hosted in cloud services.
          </li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">SCADA Functions in Electrical Systems</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Real-time Monitoring:</strong> Continuous surveillance of electrical parameters such as voltage, 
            current, frequency, power factor, and equipment status.
          </li>
          <li>
            <strong>Control Operations:</strong> Remote switching of circuit breakers, adjusting transformer taps, 
            or changing generator output levels.
          </li>
          <li>
            <strong>Alarm Management:</strong> Detection and notification of abnormal conditions, faults, or equipment 
            failures.
          </li>
          <li>
            <strong>Load Management:</strong> Balancing electrical loads across the system to maintain stability 
            and optimize efficiency.
          </li>
          <li>
            <strong>Protection Coordination:</strong> Implementing protection schemes that respond appropriately 
            to fault conditions to minimize service disruption.
          </li>
          <li>
            <strong>Data Analysis and Reporting:</strong> Converting raw data into actionable information for 
            operations, maintenance, planning, and regulatory compliance.
          </li>
        </ul>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="text-[#FFC900] font-medium mb-2">Security Considerations</h4>
          <p>
            Modern SCADA systems must implement robust cybersecurity measures to protect critical infrastructure. 
            These typically include:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Network segmentation and firewalls</li>
            <li>Authentication and access control</li>
            <li>Encryption of communications</li>
            <li>Security monitoring and intrusion detection</li>
            <li>Regular security assessments and patch management</li>
            <li>Compliance with standards such as IEC 62351 for power systems security</li>
          </ul>
        </div>
      </div>
    )
  },
  "2.2": {
    title: "Building Management Systems",
    description: "BMS integration and operation",
    content: (
      <div className="space-y-6">
        <p>
          A Building Management System (BMS), also known as a Building Automation System (BAS), is a computer-based 
          control system installed in buildings that controls and monitors the building's mechanical and electrical 
          equipment. The electrical aspects of a BMS are particularly important for system operations engineers to 
          understand.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Electrical Components in BMS</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Power Monitoring:</strong> Measures and records electrical parameters including voltage, current, 
            power factor, energy consumption, and demand.
          </li>
          <li>
            <strong>Lighting Control:</strong> Manages lighting systems based on occupancy, daylight harvesting, 
            time schedules, and special events.
          </li>
          <li>
            <strong>HVAC Electrical Controls:</strong> Operates motors, fans, pumps, and compressors to maintain 
            optimal environmental conditions while minimizing energy use.
          </li>
          <li>
            <strong>Emergency Power Systems:</strong> Monitors generators, UPS systems, and automatic transfer switches 
            to ensure reliable operation during power outages.
          </li>
          <li>
            <strong>Fire and Life Safety Systems:</strong> Interfaces with fire alarms, emergency lighting, and smoke 
            control systems to ensure proper operation and testing.
          </li>
          <li>
            <strong>Access Control and Security:</strong> Powers and controls electronic door locks, CCTV systems, 
            and alarm panels.
          </li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">BMS Architecture and Integration</h3>
        <p>
          Modern BMS systems typically employ a multi-tiered architecture:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-[#1a1d17]">
            <thead>
              <tr>
                <th className="border border-[#FFC900]/30 p-2 text-left">Architecture Layer</th>
                <th className="border border-[#FFC900]/30 p-2 text-left">Components</th>
                <th className="border border-[#FFC900]/30 p-2 text-left">Function</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#FFC900]/30 p-2">Management Level</td>
                <td className="border border-[#FFC900]/30 p-2">Servers, workstations, databases</td>
                <td className="border border-[#FFC900]/30 p-2">Overall system administration, reporting, analytics</td>
              </tr>
              <tr>
                <td className="border border-[#FFC900]/30 p-2">Automation Level</td>
                <td className="border border-[#FFC900]/30 p-2">Controllers, network devices</td>
                <td className="border border-[#FFC900]/30 p-2">Process automation, control logic execution</td>
              </tr>
              <tr>
                <td className="border border-[#FFC900]/30 p-2">Field Level</td>
                <td className="border border-[#FFC900]/30 p-2">Sensors, actuators, meters</td>
                <td className="border border-[#FFC900]/30 p-2">Data collection, physical system interaction</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Key Communication Protocols</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>BACnet (Building Automation and Control Networks):</strong> An ASHRAE, ANSI, and ISO standard 
            protocol designed specifically for building automation and control applications.
          </li>
          <li>
            <strong>Modbus:</strong> A serial communications protocol widely used in industrial control systems and 
            building automation for its simplicity and robustness.
          </li>
          <li>
            <strong>LonWorks:</strong> A networking platform specifically created for control applications, using a 
            protocol called LonTalk that can run over various media.
          </li>
          <li>
            <strong>KNX:</strong> An open standard for commercial and domestic building automation, approved as an 
            international standard (ISO/IEC 14543-3).
          </li>
          <li>
            <strong>DALI (Digital Addressable Lighting Interface):</strong> A dedicated protocol for lighting control 
            that allows individual addressing and dimming of fixtures.
          </li>
          <li>
            <strong>OPC UA (Open Platform Communications Unified Architecture):</strong> A machine-to-machine 
            communication protocol for industrial automation with a focus on security.
          </li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Energy Management Functions</h3>
        <p>
          A key function of modern BMS systems is energy management:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Demand Response:</strong> Automatically reducing electrical loads during peak demand periods 
            or in response to utility signals.
          </li>
          <li>
            <strong>Load Shedding:</strong> Sequentially turning off non-critical loads to reduce peak demand and 
            avoid utility penalties.
          </li>
          <li>
            <strong>Energy Analytics:</strong> Analyzing consumption patterns to identify savings opportunities and 
            optimize operations.
          </li>
          <li>
            <strong>Renewable Energy Integration:</strong> Managing on-site generation such as solar panels or 
            combined heat and power systems.
          </li>
          <li>
            <strong>Energy Storage Management:</strong> Controlling when to charge or discharge battery systems based 
            on grid conditions, pricing, or building needs.
          </li>
        </ul>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="text-[#FFC900] font-medium mb-2">BMS Integration Challenges</h4>
          <p>
            When working with BMS systems, electrical engineers often face these integration challenges:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Protocol compatibility between different systems and vendors</li>
            <li>Managing network bandwidth and reliability for critical systems</li>
            <li>Balancing cybersecurity needs with operational requirements</li>
            <li>Ensuring proper electrical isolation and protection between systems</li>
            <li>Developing effective testing and commissioning procedures for integrated systems</li>
            <li>Training operators to effectively use sophisticated control systems</li>
          </ul>
        </div>
      </div>
    )
  },
  "2.3": {
    title: "Programmable Logic Controllers",
    description: "PLC programming and implementation",
    content: (
      <div className="space-y-6">
        <p>
          Programmable Logic Controllers (PLCs) are ruggedized industrial computers designed to control manufacturing 
          processes, power distribution systems, and other electrical equipment. They are the backbone of modern 
          industrial automation and play a critical role in electrical system operations.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">PLC Hardware Components</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Central Processing Unit (CPU):</strong> Contains the processor and memory to execute the control program.
          </li>
          <li>
            <strong>Power Supply:</strong> Converts line voltage to the DC voltages required by the PLC's internal electronics.
          </li>
          <li>
            <strong>Input Modules:</strong> Interface with field devices (switches, sensors, transmitters) to bring 
            signals into the PLC.
            <ul className="list-disc pl-6 mt-1">
              <li>Digital inputs: On/off signals from switches, proximity sensors, etc.</li>
              <li>Analog inputs: Variable signals (4-20mA, 0-10V) from sensors measuring temperature, pressure, flow, etc.</li>
            </ul>
          </li>
          <li>
            <strong>Output Modules:</strong> Interface with field devices (motors, valves, indicators) to control equipment.
            <ul className="list-disc pl-6 mt-1">
              <li>Digital outputs: On/off control signals to relays, contactors, solenoids, etc.</li>
              <li>Analog outputs: Variable signals to control variable speed drives, modulating valves, etc.</li>
            </ul>
          </li>
          <li>
            <strong>Communication Modules:</strong> Enable the PLC to communicate with other PLCs, HMIs, SCADA systems, 
            or other industrial networks.
          </li>
          <li>
            <strong>Special Function Modules:</strong> Provide advanced capabilities such as high-speed counting, 
            motion control, or temperature control.
          </li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">PLC Programming Languages</h3>
        <p>
          The IEC 61131-3 standard defines five programming languages for PLCs:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-[#1a1d17]">
            <thead>
              <tr>
                <th className="border border-[#FFC900]/30 p-2 text-left">Language</th>
                <th className="border border-[#FFC900]/30 p-2 text-left">Type</th>
                <th className="border border-[#FFC900]/30 p-2 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#FFC900]/30 p-2">Ladder Diagram (LD)</td>
                <td className="border border-[#FFC900]/30 p-2">Graphical</td>
                <td className="border border-[#FFC900]/30 p-2">Binary logic operations, relay replacement</td>
              </tr>
              <tr>
                <td className="border border-[#FFC900]/30 p-2">Function Block Diagram (FBD)</td>
                <td className="border border-[#FFC900]/30 p-2">Graphical</td>
                <td className="border border-[#FFC900]/30 p-2">Complex process control, data processing</td>
              </tr>
              <tr>
                <td className="border border-[#FFC900]/30 p-2">Sequential Function Chart (SFC)</td>
                <td className="border border-[#FFC900]/30 p-2">Graphical</td>
                <td className="border border-[#FFC900]/30 p-2">Sequential control processes, state machines</td>
              </tr>
              <tr>
                <td className="border border-[#FFC900]/30 p-2">Structured Text (ST)</td>
                <td className="border border-[#FFC900]/30 p-2">Textual</td>
                <td className="border border-[#FFC900]/30 p-2">Complex algorithms, mathematical operations</td>
              </tr>
              <tr>
                <td className="border border-[#FFC900]/30 p-2">Instruction List (IL)</td>
                <td className="border border-[#FFC900]/30 p-2">Textual</td>
                <td className="border border-[#FFC900]/30 p-2">Low-level operations, optimized execution</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">PLC Applications in Electrical Systems</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Power Distribution Automation:</strong>
            <p className="mt-1">
              PLCs control circuit breakers, monitor electrical parameters, and implement protection schemes in 
              distribution systems. They can automatically reconfigure distribution networks after faults to restore 
              power to unaffected areas.
            </p>
          </li>
          <li>
            <strong>Generator Control:</strong>
            <p className="mt-1">
              PLCs manage the starting sequence, synchronization, load sharing, and protection of backup generators. 
              They monitor parameters such as voltage, frequency, and load to ensure stable operation.
            </p>
          </li>
          <li>
            <strong>Motor Control Centers:</strong>
            <p className="mt-1">
              PLCs provide intelligent control of multiple motors, implementing starting sequences, protection functions, 
              and coordinated operation. They can also gather diagnostic data to predict maintenance needs.
            </p>
          </li>
          <li>
            <strong>Energy Management:</strong>
            <p className="mt-1">
              PLCs implement load shedding schemes, peak demand control, and optimal energy usage strategies. They can 
              integrate renewable energy sources and storage systems into the overall power system.
            </p>
          </li>
          <li>
            <strong>Automatic Transfer Switches:</strong>
            <p className="mt-1">
              PLCs control the switching between utility and backup power sources, managing the transition timing to 
              prevent equipment damage and minimize downtime.
            </p>
          </li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">PLC Implementation Considerations</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Reliability Requirements:</strong> Critical electrical systems may require redundant PLCs, power 
            supplies, and communication networks to ensure continuous operation.
          </li>
          <li>
            <strong>Response Time:</strong> Safety-critical applications may need PLCs with fast scanning times to 
            respond quickly to fault conditions.
          </li>
          <li>
            <strong>Environmental Considerations:</strong> PLCs must be selected to withstand the temperature, humidity, 
            vibration, and electrical noise conditions of their installation location.
          </li>
          <li>
            <strong>Scalability:</strong> The PLC system should allow for future expansion of I/O points and additional 
            functionality without major redesign.
          </li>
          <li>
            <strong>Communication Capabilities:</strong> Modern electrical systems often require PLCs to communicate 
            with multiple networks and protocols for integrated operation.
          </li>
          <li>
            <strong>Cybersecurity:</strong> As critical infrastructure components, PLCs must be protected from 
            unauthorized access and cyber attacks.
          </li>
        </ul>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="text-[#FFC900] font-medium mb-2">Programming Best Practices</h4>
          <ol className="list-decimal pl-6 mt-2 space-y-2">
            <li>Use descriptive tags and comments to make programs understandable</li>
            <li>Implement modular programming techniques with reusable function blocks</li>
            <li>Include error handling and fault recovery mechanisms</li>
            <li>Document the control logic with flowcharts or functional descriptions</li>
            <li>Test thoroughly using simulation before deploying to live systems</li>
            <li>Implement appropriate security measures for program access and changes</li>
            <li>Maintain version control for all PLC programs and configurations</li>
          </ol>
        </div>
      </div>
    )
  },
  "3.1": {
    title: "Standard Operating Procedures",
    description: "Documentation and implementation of SOPs",
    content: (
      <div className="space-y-6">
        <p>
          Standard Operating Procedures (SOPs) are documented, step-by-step instructions that outline how specific 
          tasks should be performed in electrical system operations. They ensure consistency, safety, and compliance 
          with regulations and best practices.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Purpose and Benefits of SOPs</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ensure consistent and correct execution of critical operations</li>
          <li>Reduce the risk of human error and equipment damage</li>
          <li>Provide a training tool for new personnel</li>
          <li>Document institutional knowledge to prevent loss when experienced staff leave</li>
          <li>Establish a foundation for continuous improvement</li>
          <li>Support compliance with regulatory requirements and industry standards</li>
          <li>Create accountability for proper execution of tasks</li>
          <li>Provide evidence of due diligence in case of incidents or audits</li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Critical Electrical SOPs</h3>
        <p>
          Every electrical operations department should have SOPs for these crucial activities:
        </p>
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Switching Operations</strong>
            <p className="mt-1">
              Detailed procedures for safely operating circuit breakers, disconnectors, and other switching devices. 
              These SOPs typically include safety precautions, required PPE, communication protocols, verification steps, 
              and the specific sequence of operations.
            </p>
          </li>
          <li>
            <strong>Lockout-Tagout (LOTO)</strong>
            <p className="mt-1">
              Procedures to ensure that electrical equipment is properly shut off, isolated from energy sources, and 
              locked out before maintenance work begins. LOTO SOPs should cover identification of energy sources, 
              notification requirements, isolation methods, verification of zero energy state, and return to service 
              procedures.
            </p>
          </li>
          <li>
            <strong>System Startup and Shutdown</strong>
            <p className="mt-1">
              Sequential steps for safely starting up or shutting down electrical systems. These procedures address 
              pre-checks, startup sequence, parameter verification, normal operation checks, controlled shutdown steps, 
              and emergency shutdown procedures.
            </p>
          </li>
          <li>
            <strong>Emergency Response</strong>
            <p className="mt-1">
              Clear instructions for responding to electrical emergencies such as power outages, equipment failures, 
              fires, or accidents. These SOPs outline roles and responsibilities, communication protocols, immediate 
              safety actions, containment measures, and recovery procedures.
            </p>
          </li>
          <li>
            <strong>Testing and Inspection</strong>
            <p className="mt-1">
              Methodologies for routine and specialized testing of electrical equipment. These SOPs detail test 
              equipment requirements, safety precautions, test procedures, acceptance criteria, and documentation 
              requirements.
            </p>
          </li>
        </ol>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">SOP Documentation Structure</h3>
        <p>
          A well-structured SOP typically includes these sections:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-[#1a1d17]">
            <thead>
              <tr>
                <th className="border border-[#FFC900]/30 p-2 text-left">Section</th>
                <th className="border border-[#FFC900]/30 p-2 text-left">Content</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#FFC900]/30 p-2">Title and Identification</td>
                <td className="border border-[#FFC900]/30 p-2">SOP name, unique identifier, revision number, approval date</td>
              </tr>
              <tr>
                <td className="border border-[#FFC900]/30 p-2">Purpose</td>
                <td className="border border-[#FFC900]/30 p-2">Brief explanation of why the procedure exists</td>
              </tr>
              <tr>
                <td className="border border-[#FFC900]/30 p-2">Scope</td>
                <td className="border border-[#FFC900]/30 p-2">When and where the procedure applies, and its limitations</td>
              </tr>
              <tr>
                <td className="border border-[#FFC900]/30 p-2">Responsibilities</td>
                <td className="border border-[#FFC900]/30 p-2">Who is authorized to perform the procedure and who oversees it</td>
              </tr>
              <tr>
                <td className="border border-[#FFC900]/30 p-2">Prerequisites</td>
                <td className="border border-[#FFC900]/30 p-2">Required training, qualifications, permits, notifications</td>
              </tr>
              <tr>
                <td className="border border-[#FFC900]/30 p-2">Safety Precautions</td>
                <td className="border border-[#FFC900]/30 p-2">PPE requirements, hazard warnings, safety measures</td>
              </tr>
              <tr>
                <td className="border border-[#FFC900]/30 p-2">Equipment and Materials</td>
                <td className="border border-[#FFC900]/30 p-2">Tools, test equipment, documentation needed</td>
              </tr>
              <tr>
                <td className="border border-[#FFC900]/30 p-2">Procedure Steps</td>
                <td className="border border-[#FFC900]/30 p-2">Detailed, numbered, step-by-step instructions</td>
              </tr>
              <tr>
                <td className="border border-[#FFC900]/30 p-2">Verification Steps</td>
                <td className="border border-[#FFC900]/30 p-2">Checks to confirm proper execution and results</td>
              </tr>
              <tr>
                <td className="border border-[#FFC900]/30 p-2">Documentation</td>
                <td className="border border-[#FFC900]/30 p-2">Records to be completed, where they should be stored</td>
              </tr>
              <tr>
                <td className="border border-[#FFC900]/30 p-2">References</td>
                <td className="border border-[#FFC900]/30 p-2">Related procedures, standards, regulations</td>
              </tr>
              <tr>
                <td className="border border-[#FFC900]/30 p-2">Revisions</td>
                <td className="border border-[#FFC900]/30 p-2">History of changes to the SOP</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">SOP Implementation and Management</h3>
        <p>
          Effective SOP implementation requires a systematic approach:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Development:</strong> Create SOPs with input from experienced personnel who perform the tasks.
          </li>
          <li>
            <strong>Review and Approval:</strong> Have SOPs reviewed by subject matter experts, safety personnel, 
            and management.
          </li>
          <li>
            <strong>Training:</strong> Ensure all personnel are trained on SOPs relevant to their roles.
          </li>
          <li>
            <strong>Accessibility:</strong> Make SOPs readily available where the work is performed (electronic 
            systems, printed copies).
          </li>
          <li>
            <strong>Verification:</strong> Periodically observe work to ensure SOPs are being followed correctly.
          </li>
          <li>
            <strong>Feedback Loop:</strong> Establish a mechanism for workers to suggest improvements to SOPs.
          </li>
          <li>
            <strong>Regular Review:</strong> Schedule periodic reviews of SOPs (typically annually) to ensure they 
            remain current.
          </li>
          <li>
            <strong>Version Control:</strong> Maintain a system to ensure outdated procedures are removed from circulation.
          </li>
        </ol>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="text-[#FFC900] font-medium mb-2">SOP Best Practices</h4>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Use clear, concise language with defined technical terms</li>
            <li>Include visual aids such as diagrams or photographs where helpful</li>
            <li>Format SOPs for easy reading with consistent layout and structure</li>
            <li>Test SOPs by having someone unfamiliar with the task attempt to follow them</li>
            <li>Include decision points and actions for potential problems or unexpected results</li>
            <li>Keep SOPs updated when equipment changes or better methods are developed</li>
            <li>Incorporate lessons learned from near misses, incidents, or audits</li>
            <li>Link SOPs to competency assessments for critical tasks</li>
          </ul>
        </div>
      </div>
    )
  },
  "3.2": {
    title: "Emergency Response Planning",
    description: "Protocols for system failures and emergencies",
    content: (
      <div className="space-y-6">
        <p>
          Emergency Response Planning for electrical systems involves developing comprehensive protocols to address 
          system failures, power outages, electrical accidents, and other critical situations. These plans ensure 
          rapid, coordinated, and effective responses that minimize danger, damage, and downtime.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Types of Electrical Emergencies</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Power Outages:</strong> Complete loss of electrical supply from utility or backup systems.
          </li>
          <li>
            <strong>Voltage Fluctuations:</strong> Dangerous surges, sags, or unstable supply that can damage equipment.
          </li>
          <li>
            <strong>Electrical Fires:</strong> Fires originating from electrical equipment, wiring, or distribution systems.
          </li>
          <li>
            <strong>Arc Flash Incidents:</strong> Dangerous release of energy due to an electrical arc fault.
          </li>
          <li>
            <strong>Electric Shock:</strong> Personnel exposed to harmful electrical currents requiring immediate response.
          </li>
          <li>
            <strong>Equipment Failures:</strong> Critical components like transformers, switchgear, or generators failing.
          </li>
          <li>
            <strong>System Overloads:</strong> Excessive demand causing potential system damage or cascading failures.
          </li>
          <li>
            <strong>Cyber Incidents:</strong> Security breaches affecting control systems and electrical infrastructure.
          </li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Components of an Electrical Emergency Response Plan</h3>
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Risk Assessment and Emergency Categorization</strong>
            <p className="mt-1">
              Identify potential electrical emergency scenarios through a systematic risk analysis. Categorize 
              emergencies by severity level (e.g., Level 1-3) to determine appropriate response protocols for each type.
            </p>
          </li>
          <li>
            <strong>Response Team Structure and Responsibilities</strong>
            <p className="mt-1">
              Define the emergency response organization, including:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Emergency coordinator/incident commander</li>
              <li>Qualified electrical responders</li>
              <li>Medical first responders</li>
              <li>Communication coordinators</li>
              <li>Evacuation wardens</li>
              <li>External liaison officers (utility company, emergency services)</li>
            </ul>
          </li>
          <li>
            <strong>Emergency Notification and Communication</strong>
            <p className="mt-1">
              Establish clear protocols for:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Initial emergency detection and alerting</li>
              <li>Internal communication during emergencies (radio, phone, PA systems)</li>
              <li>External notifications (utilities, emergency services, regulatory agencies)</li>
              <li>Communication with building occupants or affected personnel</li>
              <li>Status updates and all-clear signals</li>
            </ul>
          </li>
          <li>
            <strong>Emergency Response Procedures</strong>
            <p className="mt-1">
              Develop detailed procedures for each type of electrical emergency, including:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Immediate safety actions and hazard isolation</li>
              <li>Power shutdown procedures (partial or complete)</li>
              <li>Evacuation triggers and routes</li>
              <li>First aid and medical response</li>
              <li>Fire suppression specific to electrical fires</li>
              <li>Equipment isolation and protection</li>
              <li>Critical load management during outages</li>
            </ul>
          </li>
          <li>
            <strong>System Recovery Procedures</strong>
            <p className="mt-1">
              Document recovery processes including:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>System assessment protocols</li>
              <li>Restart sequences for electrical systems</li>
              <li>Testing and verification procedures</li>
              <li>Phased power restoration steps</li>
              <li>Equipment inspection requirements before re-energization</li>
              <li>Return-to-normal operations checklists</li>
            </ul>
          </li>
          <li>
            <strong>Equipment, Resources and Documentation</strong>
            <p className="mt-1">
              Identify and document:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Location of emergency equipment (fire extinguishers, rescue hooks, PPE)</li>
              <li>Emergency power provisions (generators, UPS systems)</li>
              <li>Emergency lighting systems</li>
              <li>Single-line diagrams and system schematics</li>
              <li>Critical contact information</li>
              <li>Emergency shutdown procedures</li>
            </ul>
          </li>
        </ol>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Training and Drills</h3>
        <p>
          Effective emergency response requires regular training and practice:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Awareness Training:</strong> Basic electrical hazard recognition and initial response for all personnel.
          </li>
          <li>
            <strong>Technical Training:</strong> Detailed training for electrical response team members on emergency 
            procedures, equipment operation, and safety protocols.
          </li>
          <li>
            <strong>Tabletop Exercises:</strong> Discussion-based sessions where team members work through emergency 
            scenarios verbally.
          </li>
          <li>
            <strong>Functional Drills:</strong> Practice of specific emergency functions like communication or evacuation.
          </li>
          <li>
            <strong>Full-Scale Exercises:</strong> Comprehensive simulations of emergency scenarios with all response 
            elements activated.
          </li>
          <li>
            <strong>After-Action Reviews:</strong> Structured analysis after drills to identify improvements needed 
            in plans or training.
          </li>
        </ul>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Post-Incident Actions</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Incident Investigation:</strong> Conduct thorough investigation to determine root causes and 
            contributing factors.
          </li>
          <li>
            <strong>Documentation:</strong> Record incident details, response actions taken, and outcomes.
          </li>
          <li>
            <strong>Corrective Actions:</strong> Implement technical or procedural changes to prevent recurrence.
          </li>
          <li>
            <strong>Plan Updates:</strong> Revise emergency response plans based on lessons learned.
          </li>
          <li>
            <strong>Regulatory Reporting:</strong> Complete any required notifications to authorities or regulatory agencies.
          </li>
          <li>
            <strong>Follow-up Training:</strong> Conduct refresher training incorporating lessons from the incident.
          </li>
        </ol>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="text-[#FFC900] font-medium mb-2">Critical Success Factors</h4>
          <p>
            The most effective electrical emergency response plans incorporate these elements:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Clear authority and decision-making structures that function under pressure</li>
            <li>Redundant communication systems that work during power outages</li>
            <li>Prioritization frameworks for critical loads and systems</li>
            <li>Coordination procedures with external agencies (utilities, fire services)</li>
            <li>Regular testing of backup power systems under load conditions</li>
            <li>Accessible emergency response information (printed copies that don't require power)</li>
            <li>Integration with broader facility emergency management plans</li>
            <li>Regular review and updates to incorporate changes in systems, personnel, or procedures</li>
          </ul>
        </div>
      </div>
    )
  },
  "3.3": {
    title: "Maintenance Integration",
    description: "Integrating maintenance with system operations",
    content: (
      <div className="space-y-6">
        <p>
          Maintenance Integration refers to the harmonization of maintenance activities with ongoing system operations 
          to optimize overall system performance, reliability, and efficiency. It represents the crucial interface between 
          the operational and maintenance functions of an organization.
        </p>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">The Operations-Maintenance Relationship</h3>
        <p>
          The relationship between operations and maintenance teams is critical yet often challenging:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-[#1a1d17] p-4 rounded-md">
            <h4 className="text-[#FFC900] font-medium mb-2">Operations Perspective</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Focus on system availability and continuity</li>
              <li>Reluctance to release equipment for maintenance</li>
              <li>Pressure to meet production/service targets</li>
              <li>First to detect performance issues</li>
              <li>Often manages operational parameters</li>
            </ul>
          </div>
          <div className="bg-[#1a1d17] p-4 rounded-md">
            <h4 className="text-[#FFC900] font-medium mb-2">Maintenance Perspective</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Focus on equipment reliability and longevity</li>
              <li>Requires access to equipment for work</li>
              <li>Pressure to minimize maintenance costs</li>
              <li>Responsible for system health</li>
              <li>Often manages asset lifecycle planning</li>
            </ul>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Integration Strategies</h3>
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Unified Asset Management Strategy</strong>
            <p className="mt-1">
              Develop a holistic approach to equipment management that balances operational needs with maintenance 
              requirements. This includes unified performance metrics that reflect both operational efficiency and 
              maintenance effectiveness.
            </p>
          </li>
          <li>
            <strong>Collaborative Planning Processes</strong>
            <p className="mt-1">
              Implement joint planning procedures where operations and maintenance teams work together on:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Outage scheduling that minimizes operational impact</li>
              <li>Coordinated maintenance windows during natural operational downtimes</li>
              <li>Integrated resource allocation for both functions</li>
              <li>Long-term capacity planning that accounts for maintenance requirements</li>
            </ul>
          </li>
          <li>
            <strong>Shared Information Systems</strong>
            <p className="mt-1">
              Deploy integrated systems that provide both teams with access to:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Real-time equipment condition monitoring data</li>
              <li>Operational parameters and performance metrics</li>
              <li>Maintenance schedules and work order status</li>
              <li>Historical performance and maintenance records</li>
              <li>Predictive analytics for failure prevention</li>
            </ul>
          </li>
          <li>
            <strong>Operator-Driven Reliability (ODR)</strong>
            <p className="mt-1">
              Engage operators in basic maintenance activities and condition monitoring, including:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Regular equipment inspections using standardized checklists</li>
              <li>Parameter monitoring and logging</li>
              <li>Early identification and reporting of potential issues</li>
              <li>Basic preventive maintenance tasks (cleaning, lubrication, etc.)</li>
              <li>Participation in root cause analysis of failures</li>
            </ul>
          </li>
          <li>
            <strong>Cross-Functional Teams and Training</strong>
            <p className="mt-1">
              Build mutual understanding and capabilities through:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Cross-training between operations and maintenance personnel</li>
              <li>Joint troubleshooting teams for complex issues</li>
              <li>Shared performance reviews and improvement initiatives</li>
              <li>Regular coordination meetings between teams</li>
              <li>Development of personnel with skills in both disciplines</li>
            </ul>
          </li>
        </ol>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Operational Maintenance Models</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-[#1a1d17]">
            <thead>
              <tr>
                <th className="border border-[#FFC900]/30 p-2 text-left">Model</th>
                <th className="border border-[#FFC900]/30 p-2 text-left">Characteristics</th>
                <th className="border border-[#FFC900]/30 p-2 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#FFC900]/30 p-2">Total Productive Maintenance (TPM)</td>
                <td className="border border-[#FFC900]/30 p-2">Focuses on proactive and preventive techniques with total employee involvement</td>
                <td className="border border-[#FFC900]/30 p-2">Manufacturing and process industries with high equipment utilization</td>
              </tr>
              <tr>
                <td className="border border-[#FFC900]/30 p-2">Reliability-Centered Maintenance (RCM)</td>
                <td className="border border-[#FFC900]/30 p-2">Identifies critical failure modes and optimizes maintenance strategies accordingly</td>
                <td className="border border-[#FFC900]/30 p-2">Complex systems where failures have significant operational impacts</td>
              </tr>
              <tr>
                <td className="border border-[#FFC900]/30 p-2">Condition-Based Maintenance</td>
                <td className="border border-[#FFC900]/30 p-2">Uses real-time monitoring to perform maintenance when conditions warrant</td>
                <td className="border border-[#FFC900]/30 p-2">Critical equipment where unexpected failure is unacceptable</td>
              </tr>
              <tr>
                <td className="border border-[#FFC900]/30 p-2">Run-to-Failure</td>
                <td className="border border-[#FFC900]/30 p-2">Operates equipment until failure before performing maintenance</td>
                <td className="border border-[#FFC900]/30 p-2">Non-critical systems where failure has minimal operational impact</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-lg font-semibold text-[#FFC900]">Practical Integration Tools and Techniques</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Service Level Agreements (SLAs):</strong>
            <p className="mt-1">
              Internal agreements between operations and maintenance departments that define expectations, 
              responsibilities, and performance metrics. A well-designed SLA might specify response times for different 
              types of maintenance requests, procedures for emergency work, and notification requirements for planned 
              maintenance activities.
            </p>
          </li>
          <li>
            <strong>Operations-Maintenance Coordination Meetings:</strong>
            <p className="mt-1">
              Regular structured meetings where both teams review upcoming work, discuss ongoing issues, and 
              coordinate activities. These typically include:
            </p>
            <ul className="list-disc pl-6 mt-1">
              <li>Daily operational briefings for immediate issues</li>
              <li>Weekly coordination meetings for short-term planning</li>
              <li>Monthly planning sessions for longer-term activities</li>
            </ul>
          </li>
          <li>
            <strong>Computerized Maintenance Management Systems (CMMS):</strong>
            <p className="mt-1">
              Software platforms that integrate maintenance activities with operational data. Advanced CMMS systems 
              provide:
            </p>
            <ul className="list-disc pl-6 mt-1">
              <li>Online work request submission from operations personnel</li>
              <li>Automated notification of scheduled maintenance</li>
              <li>Equipment history and performance tracking</li>
              <li>Integration with operational control systems</li>
            </ul>
          </li>
          <li>
            <strong>Joint Key Performance Indicators (KPIs):</strong>
            <p className="mt-1">
              Shared metrics that encourage collaboration rather than departmental optimization. Examples include:
            </p>
            <ul className="list-disc pl-6 mt-1">
              <li>Overall Equipment Effectiveness (OEE)</li>
              <li>Mean Time Between Failures (MTBF)</li>
              <li>Percentage of Planned vs. Emergency Maintenance</li>
              <li>Total Cost of Ownership (TCO)</li>
            </ul>
          </li>
        </ul>
        
        <div className="bg-[#2a2d24] p-4 rounded-md">
          <h4 className="text-[#FFC900] font-medium mb-2">Case Study: Electrical Substation Integration</h4>
          <p>
            A utility company improved reliability by implementing an integrated operations and maintenance approach 
            for their electrical substations:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Operators were trained to perform visual inspections and basic diagnostics</li>
            <li>Remote monitoring systems fed data to both operations control center and maintenance planners</li>
            <li>A joint scheduling system prioritized maintenance based on both operational impact and equipment condition</li>
            <li>Weekly coordination meetings brought together operations supervisors and maintenance planners</li>
            <li>Equipment criticality ratings were developed collaboratively to guide resource allocation</li>
          </ul>
          <p className="mt-2">
            Results: 42% reduction in unplanned outages, 18% decrease in maintenance costs, and improved asset 
            lifespan across the substation network.
          </p>
        </div>
      </div>
    )
  },
};

export const systemOperationsQuizData = [
  {
    question: "What is the primary purpose of a SCADA system in electrical engineering?",
    answers: [
      "To monitor employee attendance and productivity",
      "To create technical documentation and diagrams",
      "To provide real-time supervision and control of power systems",
      "To manage human resources in engineering departments"
    ],
    correctAnswer: "C",
    explanation: "SCADA (Supervisory Control and Data Acquisition) systems are primarily designed to provide real-time monitoring and control of industrial processes and infrastructure, including power generation, transmission, and distribution systems."
  },
  {
    question: "Which component in a PLC system interfaces with sensors and switches to bring signals into the PLC?",
    answers: [
      "Output modules",
      "Input modules",
      "Power supply",
      "CPU"
    ],
    correctAnswer: "B",
    explanation: "Input modules in a PLC system interface with field devices such as switches, sensors, and transmitters to convert their signals into digital data that the PLC can process."
  },
  {
    question: "Which of the following is NOT typically included in a Standard Operating Procedure (SOP) for electrical operations?",
    answers: [
      "Safety precautions and required PPE",
      "Step-by-step instructions for performing the task",
      "Verification steps to confirm proper execution",
      "Employee salary information"
    ],
    correctAnswer: "D",
    explanation: "SOPs include safety precautions, step-by-step instructions, verification steps, but do not include confidential employee information like salaries, which would be kept in HR records."
  },
  {
    question: "In the context of Building Management Systems (BMS), what does DALI stand for?",
    answers: [
      "Digital Addressable Lighting Interface",
      "Distributed Automation for Logical Integration",
      "Dynamic Analytical Link Interface",
      "Direct Access Linked Infrastructure"
    ],
    correctAnswer: "A",
    explanation: "DALI stands for Digital Addressable Lighting Interface, which is a dedicated protocol for lighting control that allows individual addressing and dimming of fixtures in building management systems."
  },
  {
    question: "Which of the following is a key benefit of integrating maintenance with system operations?",
    answers: [
      "Elimination of the need for specialized maintenance personnel",
      "Reduced system security through shared access",
      "Optimized system performance and reliability",
      "Simplified regulatory documentation requirements"
    ],
    correctAnswer: "C",
    explanation: "Integrating maintenance with system operations leads to optimized system performance and reliability by ensuring maintenance activities are coordinated with operational needs and by providing both teams with shared information to make better decisions."
  },
  {
    question: "In emergency response planning for electrical systems, what should be established first?",
    answers: [
      "Recovery procedures",
      "Risk assessment and emergency categorization",
      "Training schedule",
      "Media communication plan"
    ],
    correctAnswer: "B",
    explanation: "Risk assessment and emergency categorization should be established first in emergency response planning, as this allows identification of potential scenarios and appropriate response protocols based on severity levels."
  },
  {
    question: "Which programming language is best suited for complex algorithms and mathematical operations in PLC programming?",
    answers: [
      "Ladder Diagram (LD)",
      "Instruction List (IL)",
      "Sequential Function Chart (SFC)",
      "Structured Text (ST)"
    ],
    correctAnswer: "D",
    explanation: "Structured Text (ST) is best suited for complex algorithms and mathematical operations in PLC programming. It is a high-level textual language similar to Pascal or C that can efficiently handle complex calculations and data processing."
  },
  {
    question: "What is the core principle of Reliability-Centered Maintenance (RCM)?",
    answers: [
      "Run all equipment until failure before maintenance",
      "Perform all maintenance on a fixed time schedule",
      "Identify critical failure modes and optimize maintenance strategies accordingly",
      "Replace all equipment components at regular intervals regardless of condition"
    ],
    correctAnswer: "C",
    explanation: "The core principle of Reliability-Centered Maintenance (RCM) is to identify critical failure modes and their consequences, then develop optimal maintenance strategies based on the equipment's function, criticality, and failure patterns."
  },
  {
    question: "Which of these is an essential component of a BMS that manages lighting systems based on occupancy and schedules?",
    answers: [
      "Power monitoring",
      "Lighting control",
      "Fire and life safety systems",
      "Access control and security"
    ],
    correctAnswer: "B",
    explanation: "Lighting control is the component of a Building Management System (BMS) that manages lighting systems based on factors like occupancy, daylight levels, time schedules, and special events to optimize energy usage and comfort."
  },
  {
    question: "What is Overall Equipment Effectiveness (OEE) commonly used for in maintenance integration?",
    answers: [
      "Calculating employee performance ratings",
      "Estimating future electricity costs",
      "As a joint KPI to measure combined operational and maintenance performance",
      "Determining equipment depreciation for accounting purposes"
    ],
    correctAnswer: "C",
    explanation: "Overall Equipment Effectiveness (OEE) is commonly used as a joint Key Performance Indicator (KPI) that measures the combined impact of operations and maintenance on equipment performance, considering availability, performance, and quality factors."
  }
];

