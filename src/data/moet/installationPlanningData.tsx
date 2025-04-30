
import React from 'react';

export const installationPlanningSectionsData: Record<string, {
  title: string;
  description?: string;
  content: React.ReactNode;
}> = {
  "project-planning": {
    title: "Project Planning Methodology",
    description: "Understanding project lifecycle and planning principles",
    content: (
      <>
        <h3 className="text-xl font-semibold text-[#FFC900] mb-4">Project Planning Methodology</h3>
        
        <div className="space-y-4">
          <p>
            Project planning is a critical first step in any electrical installation. A well-structured planning phase ensures that projects are completed on time, within budget, and to the required specifications.
          </p>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Project Lifecycle Stages</h4>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Initiation</span> - Defining project scope, objectives, and feasibility analysis
            </li>
            <li>
              <span className="font-medium">Planning</span> - Detailed project plan development, resource allocation, and risk assessment
            </li>
            <li>
              <span className="font-medium">Execution</span> - Implementation of the project plan and monitoring progress
            </li>
            <li>
              <span className="font-medium">Control</span> - Quality assurance, progress tracking, and adjustment of plans as needed
            </li>
            <li>
              <span className="font-medium">Closure</span> - Project handover, documentation completion, and performance review
            </li>
          </ul>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Key Planning Documents</h4>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Statement of Work (SOW)</span> - Detailed description of project deliverables and requirements
            </li>
            <li>
              <span className="font-medium">Work Breakdown Structure (WBS)</span> - Hierarchical decomposition of project tasks
            </li>
            <li>
              <span className="font-medium">Project Schedule</span> - Timeline with milestones, dependencies, and resource allocation
            </li>
            <li>
              <span className="font-medium">Risk Management Plan</span> - Identification of potential risks and mitigation strategies
            </li>
            <li>
              <span className="font-medium">Communication Plan</span> - Framework for project communication among stakeholders
            </li>
          </ul>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Planning Methodologies</h4>
          <p>
            Several methodologies can be applied to electrical installation projects:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Waterfall</span> - Sequential approach where each phase must be completed before the next begins
            </li>
            <li>
              <span className="font-medium">Agile</span> - Iterative approach with flexibility for changes and continuous feedback
            </li>
            <li>
              <span className="font-medium">Critical Path Method (CPM)</span> - Identification of critical tasks that directly impact project completion time
            </li>
            <li>
              <span className="font-medium">PRINCE2</span> - Process-based method focusing on organization and control throughout the project
            </li>
          </ul>
          
          <div className="bg-[#2a2d24] p-4 rounded-lg mt-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-2">Case Study: Factory Automation Project</h4>
            <p className="text-[#FFC900]/80">
              A manufacturing plant required installation of a new automated production line. The project planning phase included:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
              <li>Detailed site survey to assess existing infrastructure</li>
              <li>Electrical load calculations to determine power requirements</li>
              <li>Integration planning with existing systems</li>
              <li>Production downtime scheduling to minimize impact</li>
              <li>Safety risk assessment and mitigation strategies</li>
              <li>Regulatory compliance verification</li>
            </ul>
            <p className="text-[#FFC900]/80 mt-2">
              The thorough planning phase identified potential conflicts with the plant's legacy systems early, allowing for design modifications before installation began.
            </p>
          </div>
        </div>
      </>
    ),
  },
  "resource-allocation": {
    title: "Resource Allocation",
    description: "Techniques for effective allocation of materials and personnel",
    content: (
      <>
        <h3 className="text-xl font-semibold text-[#FFC900] mb-4">Resource Allocation</h3>
        
        <div className="space-y-4">
          <p>
            Efficient resource allocation is crucial for the successful completion of electrical installation projects. It involves the strategic distribution of materials, equipment, personnel, and time to optimize project execution.
          </p>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Personnel Resource Planning</h4>
          <p>
            Effective staffing ensures that the right people with appropriate skills are available when needed:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Skill Matrix</span> - Mapping required skills against available team members
            </li>
            <li>
              <span className="font-medium">Resource Leveling</span> - Adjusting project schedule to optimize workforce utilization
            </li>
            <li>
              <span className="font-medium">Training Needs Analysis</span> - Identifying skill gaps and arranging necessary training
            </li>
            <li>
              <span className="font-medium">Subcontractor Management</span> - Planning for specialized services when in-house expertise is unavailable
            </li>
          </ul>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Material and Equipment Planning</h4>
          <p>
            Proper planning of physical resources prevents costly delays and waste:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Bill of Materials (BOM)</span> - Comprehensive list of all required materials with specifications
            </li>
            <li>
              <span className="font-medium">Procurement Schedule</span> - Timeline for ordering materials accounting for lead times
            </li>
            <li>
              <span className="font-medium">Equipment Utilization Schedule</span> - Planning for optimal use of specialized equipment
            </li>
            <li>
              <span className="font-medium">Inventory Management</span> - Systems for tracking materials from procurement to installation
            </li>
            <li>
              <span className="font-medium">Waste Reduction Planning</span> - Strategies to minimize material waste and maximize efficiency
            </li>
          </ul>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Budget Allocation</h4>
          <p>
            Financial resource planning ensures project viability and profitability:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Cost Estimation</span> - Detailed breakdown of expected costs for all project components
            </li>
            <li>
              <span className="font-medium">Cost Tracking</span> - Systems for monitoring actual expenses against budgeted amounts
            </li>
            <li>
              <span className="font-medium">Contingency Planning</span> - Financial reserves for unexpected challenges or scope changes
            </li>
            <li>
              <span className="font-medium">Value Engineering</span> - Process to optimize costs without compromising functionality
            </li>
          </ul>
          
          <div className="bg-[#2a2d24] p-4 rounded-lg mt-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-2">Resource Allocation Example: Hospital Generator Installation</h4>
            <p className="text-[#FFC900]/80">
              For a critical backup generator installation at a hospital:
            </p>
            <table className="w-full border-collapse mt-2">
              <thead>
                <tr>
                  <th className="text-left text-[#FFC900] p-2 border border-[#FFC900]/30">Resource Type</th>
                  <th className="text-left text-[#FFC900] p-2 border border-[#FFC900]/30">Allocation Strategy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-[#FFC900]/30 text-[#FFC900]/80">Personnel</td>
                  <td className="p-2 border border-[#FFC900]/30 text-[#FFC900]/80">Dedicated team with specialized hospital electrical systems experience; 24-hour availability during critical switchover</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#FFC900]/30 text-[#FFC900]/80">Equipment</td>
                  <td className="p-2 border border-[#FFC900]/30 text-[#FFC900]/80">Backup lifting equipment on standby; temporary power systems for testing without disruption</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#FFC900]/30 text-[#FFC900]/80">Materials</td>
                  <td className="p-2 border border-[#FFC900]/30 text-[#FFC900]/80">Critical components ordered with redundant suppliers; pre-inspection before delivery to site</td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#FFC900]/30 text-[#FFC900]/80">Time</td>
                  <td className="p-2 border border-[#FFC900]/30 text-[#FFC900]/80">Work scheduled during lowest hospital occupancy periods; longest tasks started earliest in timeline</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    ),
  },
  "scheduling": {
    title: "Project Scheduling",
    description: "Creating timelines and managing project milestones",
    content: (
      <>
        <h3 className="text-xl font-semibold text-[#FFC900] mb-4">Project Scheduling</h3>
        
        <div className="space-y-4">
          <p>
            Project scheduling establishes the timeline for all activities within an electrical installation project. Effective scheduling optimizes resource utilization, prevents delays, and ensures that dependencies between tasks are properly managed.
          </p>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Scheduling Techniques</h4>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Gantt Charts</span> - Visual representation of tasks over time showing dependencies and overlaps
            </li>
            <li>
              <span className="font-medium">Program Evaluation and Review Technique (PERT)</span> - Statistical tool using optimistic, pessimistic, and most likely time estimates
            </li>
            <li>
              <span className="font-medium">Critical Path Method (CPM)</span> - Identification of the longest sequence of tasks that must be completed on time
            </li>
            <li>
              <span className="font-medium">Rolling Wave Planning</span> - Detailed planning for near-term activities with broader planning for future tasks
            </li>
            <li>
              <span className="font-medium">Line of Balance (LOB)</span> - Visual method for repetitive activities showing production rates
            </li>
          </ul>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Milestone Planning</h4>
          <p>
            Milestones are significant points in a project that mark the completion of major deliverables:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Project Kickoff</span> - Formal start of project execution
            </li>
            <li>
              <span className="font-medium">Design Approval</span> - Client sign-off on technical designs
            </li>
            <li>
              <span className="font-medium">Material Delivery</span> - Key equipment and materials on site
            </li>
            <li>
              <span className="font-medium">Rough-In Completion</span> - Conduit, cable trays, and backing installation complete
            </li>
            <li>
              <span className="font-medium">Cable Pulling Finished</span> - All cables in place
            </li>
            <li>
              <span className="font-medium">Terminations Complete</span> - All connections made
            </li>
            <li>
              <span className="font-medium">Testing & Commissioning</span> - System verified operational
            </li>
            <li>
              <span className="font-medium">Handover</span> - Project delivered to client
            </li>
          </ul>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Schedule Management</h4>
          <p>
            Ongoing management ensures the project stays on track:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Progress Tracking</span> - Regular monitoring of task completion against schedule
            </li>
            <li>
              <span className="font-medium">Variance Analysis</span> - Identifying and understanding deviations from the plan
            </li>
            <li>
              <span className="font-medium">Schedule Compression</span> - Fast-tracking or crashing to recover delays
            </li>
            <li>
              <span className="font-medium">Change Management</span> - Processes for incorporating scope changes into the schedule
            </li>
            <li>
              <span className="font-medium">Resource Leveling</span> - Adjusting task timing to optimize resource utilization
            </li>
          </ul>
          
          <div className="bg-[#2a2d24] p-4 rounded-lg mt-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-2">Critical Path Example: Commercial Building Rewiring</h4>
            <p className="text-[#FFC900]/80">
              For a major office building electrical system upgrade, the critical path includes:
            </p>
            <ol className="list-decimal pl-6 space-y-1 text-[#FFC900]/80 mt-2">
              <li>Initial site survey and documentation (5 days)</li>
              <li>Electrical load calculations and design (10 days)</li>
              <li>Permit application and approval (15 days)</li>
              <li>Main distribution panel replacement (3 days)</li>
              <li>Floor-by-floor rewiring (8 days per floor × 5 floors = 40 days)</li>
              <li>Testing and verification (5 days)</li>
              <li>Final inspection and certification (2 days)</li>
            </ol>
            <p className="text-[#FFC900]/80 mt-2">
              Total critical path duration: 80 days. Any delay in these activities would directly impact the project completion date. Non-critical activities like fixture selection could be run in parallel without affecting the timeline.
            </p>
          </div>
        </div>
      </>
    ),
  },
  "technical-design": {
    title: "Technical Design Principles",
    description: "Fundamentals of electrical system design and documentation",
    content: (
      <>
        <h3 className="text-xl font-semibold text-[#FFC900] mb-4">Technical Design Principles</h3>
        
        <div className="space-y-4">
          <p>
            Technical design is the process of translating project requirements into detailed specifications and plans for electrical installations. Following sound design principles ensures systems are safe, efficient, compliant with regulations, and meet client needs.
          </p>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Core Design Principles</h4>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Safety First</span> - All designs must prioritize the safety of users, installers, and maintenance personnel
            </li>
            <li>
              <span className="font-medium">Regulatory Compliance</span> - Adherence to applicable electrical codes and standards (BS 7671, IET Wiring Regulations)
            </li>
            <li>
              <span className="font-medium">Functionality</span> - Meeting the operational requirements of the system
            </li>
            <li>
              <span className="font-medium">Reliability</span> - Ensuring consistent performance under expected conditions
            </li>
            <li>
              <span className="font-medium">Efficiency</span> - Optimizing energy usage and operational costs
            </li>
            <li>
              <span className="font-medium">Maintainability</span> - Allowing for easy access, inspection, and replacement of components
            </li>
            <li>
              <span className="font-medium">Scalability</span> - Accommodating future expansion and technological changes
            </li>
            <li>
              <span className="font-medium">Cost-effectiveness</span> - Balancing performance requirements with budget constraints
            </li>
          </ul>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Design Process Stages</h4>
          <ol className="list-decimal pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Requirements Gathering</span> - Collecting client needs, site constraints, and technical specifications
            </li>
            <li>
              <span className="font-medium">Conceptual Design</span> - Creating high-level system architecture and approach
            </li>
            <li>
              <span className="font-medium">Load Calculations</span> - Determining power requirements and demand factors
            </li>
            <li>
              <span className="font-medium">Equipment Selection</span> - Specifying appropriate components and technologies
            </li>
            <li>
              <span className="font-medium">Detailed Design</span> - Developing comprehensive schematics, layouts, and specifications
            </li>
            <li>
              <span className="font-medium">Design Review</span> - Technical verification for compliance and optimization
            </li>
            <li>
              <span className="font-medium">Documentation</span> - Creating detailed drawings and specifications for implementation
            </li>
          </ol>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Key Design Considerations</h4>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Load Analysis</span> - Calculating maximum demand, diversity factors, and capacity requirements
            </li>
            <li>
              <span className="font-medium">Voltage Drop</span> - Ensuring voltage levels remain within acceptable limits throughout the system
            </li>
            <li>
              <span className="font-medium">Fault Current Calculations</span> - Determining potential fault conditions and required protective devices
            </li>
            <li>
              <span className="font-medium">Earthing and Bonding</span> - Designing proper grounding systems for safety
            </li>
            <li>
              <span className="font-medium">Discrimination/Coordination</span> - Ensuring proper selective operation of protective devices
            </li>
            <li>
              <span className="font-medium">Environmental Factors</span> - Accounting for temperature, humidity, corrosion, and other environmental conditions
            </li>
            <li>
              <span className="font-medium">EMI/EMC Considerations</span> - Managing electromagnetic interference and compatibility
            </li>
          </ul>
          
          <div className="bg-[#2a2d24] p-4 rounded-lg mt-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-2">Design Example: Industrial Control System</h4>
            <p className="text-[#FFC900]/80">
              For an automated manufacturing process control system, the technical design includes:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
              <li><strong>Power Distribution:</strong> 400V three-phase supply with redundant feeds</li>
              <li><strong>Control System:</strong> PLC-based architecture with distributed I/O</li>
              <li><strong>Motor Control:</strong> Variable frequency drives for process motors with regenerative braking</li>
              <li><strong>Protection:</strong> Coordinated overcurrent protection with motor thermal overload relays</li>
              <li><strong>Safety Systems:</strong> Category 4 safety circuits with dual-channel emergency stops</li>
              <li><strong>Monitoring:</strong> Power quality monitoring and predictive maintenance sensors</li>
              <li><strong>Communication:</strong> Industrial Ethernet backbone with ProfiNET fieldbus</li>
            </ul>
            <p className="text-[#FFC900]/80 mt-2">
              The design documentation includes single-line diagrams, control schematics, panel layouts, cable schedules, and a comprehensive bill of materials with technical specifications.
            </p>
          </div>
        </div>
      </>
    ),
  },
  "system-architecture": {
    title: "System Architecture",
    description: "Developing effective electrical system architectures",
    content: (
      <>
        <h3 className="text-xl font-semibold text-[#FFC900] mb-4">System Architecture</h3>
        
        <div className="space-y-4">
          <p>
            System architecture provides the structural framework for electrical installations, defining how components interact and establishing hierarchies within the system. A well-designed architecture ensures reliability, maintainability, and optimal performance.
          </p>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Power Distribution Architecture</h4>
          <p>
            The structure of power distribution systems can take several forms:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Radial Distribution</span> - Power flows from a single source to multiple loads in a tree structure
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Simple, cost-effective, but offers limited redundancy</li>
                <li>Common in residential and small commercial applications</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Ring Main Distribution</span> - Power is supplied from multiple points in a looped configuration
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Better reliability due to alternative supply paths</li>
                <li>Used in many commercial and industrial settings</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Mesh Network</span> - Multiple interconnections between supply points and loads
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>High redundancy and fault tolerance</li>
                <li>Common in critical infrastructure and data centers</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Redundant Systems (N+1, 2N)</span> - Main systems with backup components or complete duplicate systems
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>N+1: One additional component beyond minimum required</li>
                <li>2N: Complete duplication of critical systems</li>
                <li>Used in hospitals, data centers, and mission-critical facilities</li>
              </ul>
            </li>
          </ul>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Control System Architecture</h4>
          <p>
            Modern electrical installations often include control systems with various architectures:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Centralized Control</span> - One central controller managing all operations
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Simple implementation but creates single point of failure</li>
                <li>Suitable for smaller systems with limited geographical spread</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Distributed Control</span> - Multiple controllers handling specific subsystems
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Better fault isolation and scalability</li>
                <li>Requires communication infrastructure between controllers</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Hierarchical Control</span> - Layered approach with supervisory control over local controllers
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Combines benefits of centralized overview and distributed operation</li>
                <li>Common in building management systems and industrial automation</li>
              </ul>
            </li>
          </ul>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Communication Architecture</h4>
          <p>
            Modern electrical systems rely on various communication architectures:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Fieldbus Systems</span> - Industrial networks connecting controllers and field devices
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Examples: PROFIBUS, DeviceNet, Modbus</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Industrial Ethernet</span> - Ethernet-based networks for industrial applications
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Examples: EtherNet/IP, ProfiNET, EtherCAT</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Wireless Protocols</span> - Radio communication for distributed or mobile systems
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Examples: Zigbee, Bluetooth, Wi-Fi, LoRaWAN</li>
              </ul>
            </li>
          </ul>
          
          <div className="bg-[#2a2d24] p-4 rounded-lg mt-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-2">Architecture Example: Smart Building System</h4>
            <p className="text-[#FFC900]/80">
              Modern commercial building with integrated electrical systems:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
              <li><strong>Power Architecture:</strong> Ring main distribution with automated transfer switches for critical loads</li>
              <li><strong>Backup Power:</strong> N+1 UPS system for critical circuits and standby generator</li>
              <li><strong>Control Architecture:</strong> Hierarchical system with central BMS and distributed zone controllers</li>
              <li><strong>Communication:</strong> BACnet/IP backbone with various subsystem interfaces</li>
              <li><strong>Integration:</strong> Unified system connecting HVAC, lighting, access control, and energy monitoring</li>
              <li><strong>User Interface:</strong> Central dashboards with web-based access and mobile applications</li>
            </ul>
            <p className="text-[#FFC900]/80 mt-2">
              This integrated architecture allows for centralized monitoring and control while maintaining operational independence of subsystems for reliability and maintenance purposes.
            </p>
          </div>
        </div>
      </>
    ),
  },
  "design-tools": {
    title: "Design Tools and Software",
    description: "CAD and other tools for electrical installation design",
    content: (
      <>
        <h3 className="text-xl font-semibold text-[#FFC900] mb-4">Design Tools and Software</h3>
        
        <div className="space-y-4">
          <p>
            Modern electrical design relies heavily on specialized software tools that improve accuracy, efficiency, and collaboration. Understanding these tools is essential for electrical installation planning and documentation.
          </p>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Computer-Aided Design (CAD) Software</h4>
          <p>
            CAD software forms the foundation of electrical design documentation:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">General-Purpose CAD</span> - Software for creating 2D drawings and 3D models
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>AutoCAD - Industry standard for 2D drafting and basic 3D modeling</li>
                <li>MicroStation - Common in infrastructure and government projects</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Electrical-Specific CAD</span> - Specialized tools for electrical design
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>AutoCAD Electrical - Enhanced AutoCAD with electrical symbols and tools</li>
                <li>EPLAN Electric P8 - Comprehensive electrical engineering design</li>
                <li>Elecworks - Electrical schematic design and panel layout</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">BIM Software</span> - Building Information Modeling for integrated design
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Revit MEP - Integrated building systems design</li>
                <li>Bentley AECOsim - Comprehensive BIM for infrastructure</li>
              </ul>
            </li>
          </ul>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Calculation and Analysis Tools</h4>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Load Calculation Software</span> - Tools for electrical load analysis
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Calculating maximum demand and diversity factors</li>
                <li>Equipment sizing based on load requirements</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Short Circuit Analysis</span> - Fault current calculation tools
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>ETAP, SKM Power*Tools, EasyPower</li>
                <li>Essential for protective device coordination</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Cable Sizing Software</span> - Tools for determining appropriate cable dimensions
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Accounts for current capacity, voltage drop, and installation methods</li>
                <li>Often includes regulatory standard compliance checking</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Lighting Design Software</span> - Tools for illumination analysis
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>DIALux, Relux - Photometric calculation and visualization</li>
                <li>Ensures proper illumination levels and energy efficiency</li>
              </ul>
            </li>
          </ul>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Project Management Tools</h4>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Scheduling Software</span> - Tools for project timeline management
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Microsoft Project, Primavera P6</li>
                <li>Creating Gantt charts and resource allocation</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Document Management Systems</span> - Platforms for organizing project files
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Version control and access management</li>
                <li>Collaboration features for distributed teams</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Estimation Software</span> - Tools for project costing
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Material takeoffs and labor calculations</li>
                <li>Often integrates with procurement systems</li>
              </ul>
            </li>
          </ul>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Emerging Technologies</h4>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Virtual Reality (VR)</span> - Immersive visualization of designs
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Checking access and maintenance clearances</li>
                <li>Client walkthroughs of proposed installations</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Augmented Reality (AR)</span> - Overlaying digital information on physical spaces
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>On-site visualization of planned installations</li>
                <li>Maintenance guidance with real-time information</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Generative Design</span> - AI-assisted design optimization
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Automatically generating design alternatives</li>
                <li>Optimizing for efficiency, cost, and other parameters</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Digital Twins</span> - Virtual replicas of physical installations
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Real-time monitoring and simulation</li>
                <li>Predictive maintenance and optimization</li>
              </ul>
            </li>
          </ul>
          
          <div className="bg-[#2a2d24] p-4 rounded-lg mt-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-2">Design Tool Workflow: Industrial Panel Design</h4>
            <p className="text-[#FFC900]/80">
              A typical workflow for designing an industrial control panel includes:
            </p>
            <ol className="list-decimal pl-6 space-y-1 text-[#FFC900]/80 mt-2">
              <li><strong>Schematic Design:</strong> Using electrical CAD software (e.g., EPLAN) to create circuit diagrams</li>
              <li><strong>Load Analysis:</strong> Calculating power requirements and heat dissipation</li>
              <li><strong>Component Selection:</strong> Choosing appropriately rated devices</li>
              <li><strong>Panel Layout:</strong> 3D modeling of component arrangement</li>
              <li><strong>Thermal Simulation:</strong> Analyzing heat distribution and ventilation requirements</li>
              <li><strong>Documentation:</strong> Generating bills of materials, terminal plans, and wire lists</li>
              <li><strong>Fabrication Drawings:</strong> Creating dimensional drawings for panel building</li>
            </ol>
            <p className="text-[#FFC900]/80 mt-2">
              Modern design software can automate many of these steps, checking for errors and maintaining consistency across documentation. This significantly reduces design time and improves reliability compared to manual methods.
            </p>
          </div>
        </div>
      </>
    ),
  },
  "implementation": {
    title: "Implementation Procedures",
    description: "Best practices for executing electrical installation projects",
    content: (
      <>
        <h3 className="text-xl font-semibold text-[#FFC900] mb-4">Implementation Procedures</h3>
        
        <div className="space-y-4">
          <p>
            Implementation is the phase where designs are transformed into physical installations. Following structured procedures ensures safety, quality, and efficiency during the execution of electrical projects.
          </p>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Pre-Implementation Planning</h4>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Site Preparation</span> - Ensuring the work area is ready for installation
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Access routes and working spaces cleared</li>
                <li>Temporary services (power, lighting) arranged</li>
                <li>Storage areas for materials and equipment prepared</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Material Verification</span> - Checking delivered materials against specifications
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Comparing deliveries against bill of materials</li>
                <li>Inspecting for damage or defects</li>
                <li>Verifying compliance certificates and documentation</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Safety Planning</span> - Preparing for safe implementation
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Risk assessments for installation activities</li>
                <li>Method statements for complex or hazardous tasks</li>
                <li>Personal protective equipment requirements</li>
                <li>Permit-to-work systems for applicable activities</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Team Briefing</span> - Ensuring all personnel understand the project
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Installation drawings and specifications review</li>
                <li>Clarification of roles and responsibilities</li>
                <li>Discussion of potential challenges and solutions</li>
              </ul>
            </li>
          </ul>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Installation Sequence</h4>
          <p>
            Typical installation follows a logical sequence:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Setting Out</span> - Marking installation positions based on drawings
            </li>
            <li>
              <span className="font-medium">Primary Infrastructure</span> - Installing main distribution equipment
            </li>
            <li>
              <span className="font-medium">Containment Systems</span> - Installing cable trays, conduits, and trunking
            </li>
            <li>
              <span className="font-medium">Cable Installation</span> - Pulling and laying cables through containment
            </li>
            <li>
              <span className="font-medium">Equipment Mounting</span> - Installing switchgear, control panels, and devices
            </li>
            <li>
              <span className="font-medium">Terminations</span> - Connecting cables to equipment and systems
            </li>
            <li>
              <span className="font-medium">Earthing and Bonding</span> - Completing protective earthing connections
            </li>
            <li>
              <span className="font-medium">Labeling and Identification</span> - Marking cables, equipment, and circuits
            </li>
          </ol>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Quality Control Procedures</h4>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Inspection Points</span> - Critical stages requiring formal inspection
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Before containment is closed or becomes inaccessible</li>
                <li>After cable installation but before termination</li>
                <li>After equipment installation but before commissioning</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Testing During Installation</span> - Verification tests during the process
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Cable insulation tests before termination</li>
                <li>Continuity testing of protective conductors</li>
                <li>Polarity verification</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Photographic Documentation</span> - Visual record of installation quality
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Especially for concealed installations before covering</li>
                <li>For complex assemblies and terminations</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Non-Conformance Procedures</span> - Process for addressing defects
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Identification and documentation of issues</li>
                <li>Assessment of impact on safety and performance</li>
                <li>Corrective action planning and implementation</li>
                <li>Re-inspection after remediation</li>
              </ul>
            </li>
          </ul>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Progress Monitoring and Reporting</h4>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Daily Progress Logs</span> - Record of work completed each day
            </li>
            <li>
              <span className="font-medium">Weekly Progress Meetings</span> - Regular review of schedule and issues
            </li>
            <li>
              <span className="font-medium">Progress Photography</span> - Visual documentation of installation progress
            </li>
            <li>
              <span className="font-medium">Updated Schedules</span> - Revisions to project timelines based on actual progress
            </li>
          </ul>
          
          <div className="bg-[#2a2d24] p-4 rounded-lg mt-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-2">Implementation Example: Commercial Office Lighting Installation</h4>
            <p className="text-[#FFC900]/80">
              For a major office lighting upgrade project:
            </p>
            <ol className="list-decimal pl-6 space-y-1 text-[#FFC900]/80 mt-2">
              <li><strong>Preparation:</strong> Installation scheduled for weekends to minimize disruption</li>
              <li><strong>Zone Planning:</strong> Building divided into zones for phased implementation</li>
              <li><strong>Material Staging:</strong> Materials delivered and stored by zone to minimize movement</li>
              <li><strong>Template Creation:</strong> Positioning templates created for repeatable layout</li>
              <li><strong>Installation Sequence:</strong> 
                <ul className="list-disc pl-6">
                  <li>Marking fixture positions</li>
                  <li>Cable tray modification for new routes</li>
                  <li>Running new circuits from distribution boards</li>
                  <li>Installing fixture mounting brackets</li>
                  <li>Hanging and connecting fixtures</li>
                  <li>Installing control systems</li>
                </ul>
              </li>
              <li><strong>Quality Control:</strong> Sample testing of 20% of fixtures in each zone</li>
              <li><strong>Remediation:</strong> Any issues addressed before moving to next zone</li>
            </ol>
            <p className="text-[#FFC900]/80 mt-2">
              This structured approach allowed 500 fixture replacements to be completed over 5 weekends with minimal disruption to office operations and zero safety incidents.
            </p>
          </div>
        </div>
      </>
    ),
  },
  "quality-control": {
    title: "Quality Control",
    description: "Inspection and testing during the implementation phase",
    content: (
      <>
        <h3 className="text-xl font-semibold text-[#FFC900] mb-4">Quality Control</h3>
        
        <div className="space-y-4">
          <p>
            Quality control encompasses all activities that ensure electrical installations meet regulatory requirements, design specifications, and client expectations. Effective quality control processes are crucial for safety, reliability, and longevity.
          </p>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Quality Assurance Framework</h4>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Quality Management System (QMS)</span> - Structured approach to maintaining quality
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Documented policies and procedures</li>
                <li>Compliance with ISO 9001 standards</li>
                <li>Process for continual improvement</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Quality Control Plan</span> - Project-specific quality requirements
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Identification of critical inspection points</li>
                <li>Testing requirements and acceptance criteria</li>
                <li>Documentation and reporting procedures</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Competency Management</span> - Ensuring qualified personnel
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Verification of appropriate certifications</li>
                <li>Training records and skill assessments</li>
                <li>Supervision requirements for trainees</li>
              </ul>
            </li>
          </ul>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Inspection Types and Techniques</h4>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Visual Inspection</span> - Assessing visible aspects of installation
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Workmanship quality (straight runs, secure fixings)</li>
                <li>Component selection and positioning</li>
                <li>Clearances and accessibility</li>
                <li>Labels and identification</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Dimensional Inspection</span> - Verifying spatial requirements
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Mounting heights and positions</li>
                <li>Clearance distances for safety and maintenance</li>
                <li>Cable bending radii compliance</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Documentation Inspection</span> - Checking records and certificates
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Material certification and compliance</li>
                <li>Test result documentation</li>
                <li>As-built drawings accuracy</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Non-destructive Testing</span> - Inspection without damaging components
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Thermal imaging for hotspot detection</li>
                <li>Ultrasonic testing for loose connections</li>
                <li>X-ray inspection for embedded installations</li>
              </ul>
            </li>
          </ul>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Electrical Testing</h4>
          <p>
            Testing verifies that installations function correctly and safely:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Dead Testing</span> - Tests performed with power off
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Continuity of protective conductors</li>
                <li>Insulation resistance measurement</li>
                <li>Polarity verification</li>
                <li>Earth electrode resistance testing</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Live Testing</span> - Tests performed with power applied
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Earth fault loop impedance measurement</li>
                <li>RCD/RCBO operation testing</li>
                <li>Functional testing of controls and systems</li>
                <li>Phase sequence verification</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Specialist Testing</span> - Additional tests for specific applications
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Emergency lighting duration tests</li>
                <li>Power quality analysis</li>
                <li>Network cabling certification</li>
                <li>Building automation system verification</li>
              </ul>
            </li>
          </ul>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Defect Management</h4>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Defect Classification</span> - Categorizing issues by severity
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Critical - Safety hazards requiring immediate correction</li>
                <li>Major - Significant issues affecting functionality</li>
                <li>Minor - Cosmetic or minor compliance issues</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Defect Tracking</span> - Recording and monitoring issues
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Digital or paper-based tracking systems</li>
                <li>Clear assignment of responsibility for corrections</li>
                <li>Timeline for remediation</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Root Cause Analysis</span> - Investigating systemic issues
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Identifying patterns in defects</li>
                <li>Implementing corrective actions to prevent recurrence</li>
                <li>Training or process improvements</li>
              </ul>
            </li>
          </ul>
          
          <div className="bg-[#2a2d24] p-4 rounded-lg mt-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-2">Quality Control Example: Data Center Power System</h4>
            <p className="text-[#FFC900]/80">
              For a mission-critical data center power distribution system:
            </p>
            <table className="w-full border-collapse mt-2">
              <thead>
                <tr>
                  <th className="text-left text-[#FFC900] p-2 border border-[#FFC900]/30">Stage</th>
                  <th className="text-left text-[#FFC900] p-2 border border-[#FFC900]/30">Quality Control Activities</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-[#FFC900]/30 text-[#FFC900]/80">Factory Testing</td>
                  <td className="p-2 border border-[#FFC900]/30 text-[#FFC900]/80">
                    <ul className="list-disc pl-4">
                      <li>Witness testing of switchgear at manufacturer's facility</li>
                      <li>Factory acceptance testing of UPS systems with load banks</li>
                      <li>Review of test certificates for all major components</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#FFC900]/30 text-[#FFC900]/80">Pre-Installation</td>
                  <td className="p-2 border border-[#FFC900]/30 text-[#FFC900]/80">
                    <ul className="list-disc pl-4">
                      <li>Verification of component specifications against design</li>
                      <li>Inspection of equipment for shipping damage</li>
                      <li>Review of installation method statements</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#FFC900]/30 text-[#FFC900]/80">During Installation</td>
                  <td className="p-2 border border-[#FFC900]/30 text-[#FFC900]/80">
                    <ul className="list-disc pl-4">
                      <li>Daily quality inspections with detailed checklists</li>
                      <li>Photographic documentation of all connections before closing</li>
                      <li>Torque verification of all power connections</li>
                      <li>Independent third-party inspection of critical components</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 border border-[#FFC900]/30 text-[#FFC900]/80">Post-Installation</td>
                  <td className="p-2 border border-[#FFC900]/30 text-[#FFC900]/80">
                    <ul className="list-disc pl-4">
                      <li>Comprehensive testing to BS 7671 requirements</li>
                      <li>Thermographic survey under load conditions</li>
                      <li>Power quality analysis during operation</li>
                      <li>Failure mode testing with simulated outages</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="text-[#FFC900]/80 mt-2">
              This multi-layered quality control approach ensured the data center achieved 99.999% power availability (less than 5.25 minutes of downtime per year) as required by the Tier IV design specification.
            </p>
          </div>
        </div>
      </>
    ),
  },
  "handover-procedures": {
    title: "Handover Procedures",
    description: "Final testing, documentation and client handover processes",
    content: (
      <>
        <h3 className="text-xl font-semibold text-[#FFC900] mb-4">Handover Procedures</h3>
        
        <div className="space-y-4">
          <p>
            Handover is the critical final phase of an electrical installation project, where systems are formally transferred to the client or operational team. A structured handover process ensures that systems are properly completed, documented, and understood by those who will operate and maintain them.
          </p>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Completion Testing and Verification</h4>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Final Testing</span> - Comprehensive testing of completed systems
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>BS 7671 inspection and testing requirements</li>
                <li>Functional testing of all operations</li>
                <li>Performance verification against specifications</li>
                <li>Integration testing with other systems</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Independent Verification</span> - Third-party confirmation of compliance
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>NICEIC, NAPIT, or other approved contractor inspections</li>
                <li>Building control approval where applicable</li>
                <li>Specialized certification (e.g., ATEX for hazardous areas)</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Snagging Process</span> - Addressing remaining defects
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Comprehensive snagging survey</li>
                <li>Prioritization of issues</li>
                <li>Sign-off of completed remediation</li>
              </ul>
            </li>
          </ul>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Handover Documentation</h4>
          <p>
            Complete documentation package typically includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Electrical Installation Certificate</span> - Legal declaration of compliance
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>BS 7671 Electrical Installation Certificates</li>
                <li>Minor Works Certificates where applicable</li>
                <li>Test results schedules</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">As-Built Drawings</span> - Accurate records of the installed system
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Updated to reflect any variations from design</li>
                <li>Detailed for future reference and modification</li>
                <li>Provided in both paper and digital formats</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Operation and Maintenance Manuals</span> - Information for ongoing use
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>System descriptions and operating instructions</li>
                <li>Equipment data sheets and manufacturer manuals</li>
                <li>Maintenance schedules and procedures</li>
                <li>Troubleshooting guides</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Warranties and Guarantees</span> - Documentation of coverage
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Installer's workmanship warranty</li>
                <li>Manufacturer equipment warranties</li>
                <li>Extended warranty options</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Spares and Tools</span> - Items provided for ongoing maintenance
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>List of recommended spare parts</li>
                <li>Any special tools provided</li>
                <li>Information on obtaining future spares</li>
              </ul>
            </li>
          </ul>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Training and Knowledge Transfer</h4>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Technical Training</span> - Familiarizing operators with systems
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>System operation and control</li>
                <li>Routine maintenance procedures</li>
                <li>Emergency procedures</li>
                <li>Troubleshooting common issues</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Documentation Walkthrough</span> - Ensuring understanding of resources
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Review of as-built drawings and their use</li>
                <li>Navigation of O&M manuals</li>
                <li>Explanation of technical documentation</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Demonstration</span> - Showing systems in operation
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Live operation of equipment</li>
                <li>Testing emergency functions</li>
                <li>Showing integration with other systems</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Training Materials</span> - Resources for future reference
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Training videos</li>
                <li>Quick-reference guides</li>
                <li>Contact information for technical support</li>
              </ul>
            </li>
          </ul>
          
          <h4 className="text-lg font-medium text-[#FFC900] mt-6 mb-2">Formal Handover Process</h4>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>
              <span className="font-medium">Pre-Handover Inspection</span> - Joint walkthrough with client
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Visual inspection of completed works</li>
                <li>Demonstration of system functions</li>
                <li>Creation of final snagging list</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Handover Meeting</span> - Formal transfer of responsibility
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Presentation of documentation package</li>
                <li>Discussion of warranty terms and support arrangements</li>
                <li>Clarification of any outstanding issues</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Handover Certificates</span> - Documentation of formal transfer
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Practical completion certificate</li>
                <li>System acceptance documentation</li>
                <li>Defects liability period commencement</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Post-Handover Support</span> - Ongoing assistance during transition
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/70 mt-1">
                <li>Initial operational support period</li>
                <li>Follow-up training sessions</li>
                <li>Defect resolution procedures</li>
              </ul>
            </li>
          </ul>
          
          <div className="bg-[#2a2d24] p-4 rounded-lg mt-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-2">Handover Example: Manufacturing Facility Electrical Upgrade</h4>
            <p className="text-[#FFC900]/80">
              For a major manufacturing facility electrical infrastructure upgrade:
            </p>
            <ol className="list-decimal pl-6 space-y-1 text-[#FFC900]/80 mt-2">
              <li><strong>Staged Testing:</strong> Systems were tested individually then under integrated operation</li>
              <li><strong>Phased Handover:</strong> Systems were handed over in carefully planned stages to minimize production disruption:
                <ul className="list-disc pl-6">
                  <li>Phase 1: Main distribution upgrades</li>
                  <li>Phase 2: Production area power</li>
                  <li>Phase 3: Building services systems</li>
                  <li>Phase 4: Backup power systems</li>
                </ul>
              </li>
              <li><strong>Training Program:</strong> Three-tiered training approach:
                <ul className="list-disc pl-6">
                  <li>Operator level - Basic operation and emergency procedures</li>
                  <li>Maintenance level - Routine maintenance and basic troubleshooting</li>
                  <li>Engineer level - Advanced configuration and technical troubleshooting</li>
                </ul>
              </li>
              <li><strong>Digital Documentation:</strong> All handover documents provided in a searchable digital format on a dedicated maintenance tablet</li>
              <li><strong>Extended Support:</strong> 4-week on-site support period with gradual transition to remote support</li>
            </ol>
            <p className="text-[#FFC900]/80 mt-2">
              This structured handover approach enabled the facility to maintain production throughout the transition and ensure that staff were fully confident in operating the new systems before the installation team departed.
            </p>
          </div>
        </div>
      </>
    ),
  },
};

// Create data for an assessment at the end
export const installationPlanningQuestions = [
  {
    question: "What document breaks down project tasks into a hierarchical structure?",
    options: [
      "Statement of Work (SOW)",
      "Work Breakdown Structure (WBS)",
      "Project Schedule",
      "Communication Plan"
    ],
    correctAnswer: "Work Breakdown Structure (WBS)",
    explanation: "The Work Breakdown Structure (WBS) is a hierarchical decomposition of the total scope of work to be carried out by the project team to accomplish the project objectives."
  },
  {
    question: "Which project scheduling technique identifies the longest sequence of tasks that must be completed on time?",
    options: [
      "Gantt Chart",
      "Line of Balance (LOB)",
      "Critical Path Method (CPM)",
      "Rolling Wave Planning"
    ],
    correctAnswer: "Critical Path Method (CPM)",
    explanation: "The Critical Path Method (CPM) identifies the sequence of tasks that have zero float (slack) time, meaning any delay in these tasks will directly impact the project completion date."
  },
  {
    question: "What is typically included in a bill of materials for an electrical installation?",
    options: [
      "Site survey results only",
      "List of required materials with specifications",
      "Project timeline only",
      "Worker certifications"
    ],
    correctAnswer: "List of required materials with specifications",
    explanation: "A Bill of Materials (BOM) is a comprehensive list of all required parts, components, and materials needed for the installation, including their specifications and quantities."
  },
  {
    question: "Which of the following is NOT a core design principle for electrical installations?",
    options: [
      "Safety",
      "Regulatory Compliance",
      "Aesthetics over Functionality",
      "Energy Efficiency"
    ],
    correctAnswer: "Aesthetics over Functionality",
    explanation: "While aesthetics may be important, it should never be prioritized over functionality in electrical installations. The core principles include safety, compliance, functionality, reliability, efficiency, maintainability, and cost-effectiveness."
  },
  {
    question: "During the implementation phase, what should be done before containment systems are closed?",
    options: [
      "Final client inspection only",
      "Formal handover documentation",
      "Inspection and documentation of concealed work",
      "Full system commissioning"
    ],
    correctAnswer: "Inspection and documentation of concealed work",
    explanation: "Before containment systems (such as conduits or wall cavities) are closed, work should be inspected and documented, often with photographs, as it will be inaccessible later."
  },
  {
    question: "What power distribution architecture offers the best redundancy for critical systems?",
    options: [
      "Simple radial distribution",
      "Ring main distribution",
      "2N redundant system",
      "Single bus architecture"
    ],
    correctAnswer: "2N redundant system",
    explanation: "A 2N redundant system provides complete duplication of critical systems, allowing for one entire system to fail while the backup system maintains full functionality."
  },
  {
    question: "Which type of electrical test is performed with the power turned off?",
    options: [
      "Earth fault loop impedance testing",
      "RCD operation testing",
      "Insulation resistance measurement",
      "Phase sequence verification"
    ],
    correctAnswer: "Insulation resistance measurement",
    explanation: "Insulation resistance measurement is a 'dead test' performed with the circuit isolated from the supply to check the condition of the insulation between conductors and between conductors and earth."
  },
  {
    question: "What should be included in as-built drawings for the handover documentation?",
    options: [
      "Original design plans only",
      "Accurate records reflecting any variations from the original design",
      "Theoretical design options",
      "Future expansion plans only"
    ],
    correctAnswer: "Accurate records reflecting any variations from the original design",
    explanation: "As-built drawings must accurately represent the actual installation as constructed, including any variations from the original design plans, to serve as reliable reference for future maintenance and modifications."
  },
  {
    question: "Which of these is a primary purpose of resource leveling in project planning?",
    options: [
      "Increasing project costs",
      "Optimizing workforce utilization",
      "Extending project timeline",
      "Reducing quality standards"
    ],
    correctAnswer: "Optimizing workforce utilization",
    explanation: "Resource leveling is a technique used to adjust the project schedule to optimize workforce utilization by resolving over-allocations or conflicts in resource assignments."
  },
  {
    question: "What is the main purpose of a formal handover meeting at project completion?",
    options: [
      "To negotiate contract extensions",
      "To formally transfer responsibility to the client",
      "To begin planning the next project",
      "To distribute bonus payments"
    ],
    correctAnswer: "To formally transfer responsibility to the client",
    explanation: "The formal handover meeting marks the official transfer of responsibility for the installation from the contractor to the client, including presentation of documentation and discussion of warranty and support arrangements."
  }
];

// Function to create assessment page
export const InstallationPlanningAssessmentPage = () => (
  <SafetyQuiz unitId="Installation Planning" questionsToShow={10} timeLimit={600} />
);
