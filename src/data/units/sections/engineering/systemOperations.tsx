
import React from 'react';

// Section 1.1: System Operations Overview
export const systemOperationsSection1_1 = {
  title: "System Operations Overview",
  content: (
    <>
      <p>System operations in electrical engineering refer to the procedures, principles, and practices involved in managing, controlling, and maintaining electrical systems to ensure their safe and efficient operation.</p>
      
      <h4 className="text-[#FFC900] font-medium mt-6 mb-2">Key Aspects of System Operations</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>Monitoring and control of electrical parameters</li>
        <li>Real-time system management</li>
        <li>Response to abnormal conditions</li>
        <li>Load management and balancing</li>
        <li>Coordination with other systems</li>
      </ul>
      
      <h4 className="text-[#FFC900] font-medium mt-6 mb-2">Operational Goals</h4>
      <p>Effective system operations aim to achieve:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Continuous and reliable power supply</li>
        <li>Optimal performance and efficiency</li>
        <li>Safe operation within design parameters</li>
        <li>Minimum downtime and disruptions</li>
        <li>Extended equipment lifespan</li>
      </ul>
      
      <p className="mt-4">Understanding the principles of system operations provides the foundation for effectively managing electrical systems across various applications and environments.</p>
    </>
  )
};

// Section 1.2: Control Systems
export const systemOperationsSection1_2 = {
  title: "Control Systems",
  content: (
    <>
      <p>Control systems are integral to electrical system operations, providing automated supervision and regulation of electrical processes.</p>
      
      <h4 className="text-[#FFC900] font-medium mt-6 mb-2">Types of Control Systems</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Open-Loop Systems:</strong> Operate without feedback, providing predetermined control based on initial settings</li>
        <li><strong>Closed-Loop Systems:</strong> Utilize feedback mechanisms to adjust control parameters based on actual system performance</li>
        <li><strong>Distributed Control Systems (DCS):</strong> Control functions are distributed throughout the system with multiple controllers</li>
        <li><strong>Supervisory Control and Data Acquisition (SCADA):</strong> Large-scale monitoring and control systems for widespread operations</li>
      </ul>
      
      <h4 className="text-[#FFC900] font-medium mt-6 mb-2">Control System Components</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Controllers:</strong> Process inputs and determine control actions</li>
        <li><strong>Sensors:</strong> Measure system parameters (voltage, current, temperature, etc.)</li>
        <li><strong>Actuators:</strong> Execute control actions (switches, motors, valves)</li>
        <li><strong>Communication Networks:</strong> Transfer data between system components</li>
        <li><strong>Human-Machine Interface (HMI):</strong> Allow operator interaction with the system</li>
      </ul>
      
      <p className="mt-4">Modern control systems increasingly incorporate programmable logic controllers (PLCs), microprocessors, and advanced software to provide sophisticated control capabilities for electrical systems.</p>
    </>
  )
};

// Section 1.3: Monitoring Systems
export const systemOperationsSection1_3 = {
  title: "Monitoring Systems",
  content: (
    <>
      <p>Monitoring systems provide continuous surveillance of electrical system parameters and performance, enabling proactive management and rapid response to abnormal conditions.</p>
      
      <h4 className="text-[#FFC900] font-medium mt-6 mb-2">Key Monitoring Parameters</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Electrical Parameters:</strong> Voltage, current, power factor, frequency</li>
        <li><strong>Thermal Parameters:</strong> Equipment temperatures, ambient conditions</li>
        <li><strong>Mechanical Parameters:</strong> Vibration, noise levels, physical position</li>
        <li><strong>Environmental Parameters:</strong> Humidity, dust, corrosive elements</li>
        <li><strong>System Status:</strong> On/off states, operational modes, fault conditions</li>
      </ul>
      
      <h4 className="text-[#FFC900] font-medium mt-6 mb-2">Modern Monitoring Technologies</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Data Loggers:</strong> Record parameter values over time</li>
        <li><strong>Intelligent Electronic Devices (IEDs):</strong> Combine monitoring and control functions</li>
        <li><strong>Power Quality Analyzers:</strong> Monitor electrical supply quality</li>
        <li><strong>Wireless Sensors:</strong> Enable monitoring in remote or difficult-to-access locations</li>
        <li><strong>Internet of Things (IoT) Devices:</strong> Connect monitoring systems to broader networks</li>
      </ul>
      
      <p className="mt-4">Effective monitoring systems not only detect immediate issues but also collect data for trend analysis, enabling predictive maintenance and performance optimization.</p>
    </>
  )
};

// Section 2.1: Power System Operations
export const systemOperationsSection2_1 = {
  title: "Power System Operations",
  content: (
    <>
      <p>Power system operations involve the management and control of electrical power generation, transmission, and distribution networks to ensure reliable electricity supply.</p>
      
      <h4 className="text-[#FFC900] font-medium mt-6 mb-2">Key Operational Functions</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Generation Control:</strong> Managing power production to meet demand</li>
        <li><strong>Load Dispatching:</strong> Allocating power to different parts of the network</li>
        <li><strong>Transmission Management:</strong> Ensuring efficient power transfer between areas</li>
        <li><strong>Voltage Regulation:</strong> Maintaining voltage levels within acceptable limits</li>
        <li><strong>Frequency Control:</strong> Keeping system frequency stable (e.g., 50Hz or 60Hz)</li>
      </ul>
      
      <h4 className="text-[#FFC900] font-medium mt-6 mb-2">Operational Challenges</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Load Balancing:</strong> Matching supply to continuously changing demand</li>
        <li><strong>Fault Management:</strong> Quick detection and isolation of system faults</li>
        <li><strong>Renewable Integration:</strong> Accommodating variable generation from renewable sources</li>
        <li><strong>System Stability:</strong> Maintaining stability during disturbances or changes</li>
        <li><strong>Emergency Response:</strong> Managing system during critical situations</li>
      </ul>
      
      <p className="mt-4">Modern power system operations increasingly use advanced technologies such as wide-area monitoring systems (WAMS) and energy management systems (EMS) to optimize performance and reliability.</p>
    </>
  )
};

// Section 2.2: Distribution System Operations
export const systemOperationsSection2_2 = {
  title: "Distribution System Operations",
  content: (
    <>
      <p>Distribution system operations focus on managing the electrical networks that deliver power from transmission systems to end consumers, including residential, commercial, and industrial customers.</p>
      
      <h4 className="text-[#FFC900] font-medium mt-6 mb-2">Operational Components</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Substations:</strong> Transform voltage levels and provide protection</li>
        <li><strong>Distribution Feeders:</strong> Main power delivery lines from substations</li>
        <li><strong>Switching Equipment:</strong> Reclosers, sectionalizers, and switches for network configuration</li>
        <li><strong>Transformers:</strong> Step down voltage for customer use</li>
        <li><strong>Protection Devices:</strong> Fuses, circuit breakers, and relays</li>
      </ul>
      
      <h4 className="text-[#FFC900] font-medium mt-6 mb-2">Key Operational Activities</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Network Configuration:</strong> Managing system topology for optimal performance</li>
        <li><strong>Voltage Regulation:</strong> Maintaining voltage within acceptable ranges</li>
        <li><strong>Fault Location and Isolation:</strong> Identifying and isolating faults</li>
        <li><strong>Service Restoration:</strong> Restoring power after outages</li>
        <li><strong>Distributed Generation Integration:</strong> Managing customer-owned generation sources</li>
      </ul>
      
      <p className="mt-4">Distribution automation is increasingly being implemented to enhance efficiency, reliability, and responsiveness of distribution systems through remote monitoring and control capabilities.</p>
    </>
  )
};

// Section 2.3: Industrial System Operations
export const systemOperationsSection2_3 = {
  title: "Industrial System Operations",
  content: (
    <>
      <p>Industrial electrical system operations involve managing power distribution and utilization within manufacturing facilities, processing plants, and other industrial environments.</p>
      
      <h4 className="text-[#FFC900] font-medium mt-6 mb-2">Critical Operational Aspects</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Power Quality Management:</strong> Maintaining suitable power quality for sensitive equipment</li>
        <li><strong>Motor Control:</strong> Managing the operation of various motors and drives</li>
        <li><strong>Process Power Coordination:</strong> Synchronizing power supply with production processes</li>
        <li><strong>Load Scheduling:</strong> Optimizing power use to reduce demand charges</li>
        <li><strong>Emergency Power Systems:</strong> Managing backup power during main supply failures</li>
      </ul>
      
      <h4 className="text-[#FFC900] font-medium mt-6 mb-2">Industrial Control Systems</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Programmable Logic Controllers (PLCs):</strong> Control equipment and processes</li>
        <li><strong>Distributed Control Systems:</strong> Manage complex processes across facilities</li>
        <li><strong>Motor Control Centers:</strong> Centralized control of multiple motors</li>
        <li><strong>Human-Machine Interfaces:</strong> Allow operator control and monitoring</li>
        <li><strong>Industrial Networks:</strong> Connect devices and systems for coordinated operation</li>
      </ul>
      
      <p className="mt-4">Efficient industrial system operations balance production requirements with energy efficiency, equipment longevity, and operational safety considerations.</p>
    </>
  )
};

// Section 3.1: Operational Safety Procedures
export const systemOperationsSection3_1 = {
  title: "Operational Safety Procedures",
  content: (
    <>
      <p>Operational safety procedures are essential protocols that ensure the safe operation, maintenance, and troubleshooting of electrical systems, protecting both personnel and equipment.</p>
      
      <h4 className="text-[#FFC900] font-medium mt-6 mb-2">Key Safety Procedures</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Lockout/Tagout (LOTO):</strong> Securing equipment in a safe state during maintenance</li>
        <li><strong>Permit to Work Systems:</strong> Formal authorization for potentially hazardous work</li>
        <li><strong>Safe Isolation:</strong> Ensuring equipment is fully disconnected from power sources</li>
        <li><strong>Testing Before Touch:</strong> Verifying absence of voltage before work begins</li>
        <li><strong>Personal Protective Equipment (PPE):</strong> Using appropriate safety gear</li>
      </ul>
      
      <h4 className="text-[#FFC900] font-medium mt-6 mb-2">Safety Documentation</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Standard Operating Procedures (SOPs):</strong> Detailed instructions for routine operations</li>
        <li><strong>Emergency Response Plans:</strong> Protocols for responding to incidents</li>
        <li><strong>Risk Assessments:</strong> Identification and mitigation of potential hazards</li>
        <li><strong>Equipment Schematics:</strong> Clear documentation of system configuration</li>
        <li><strong>Safety Audit Records:</strong> Documentation of safety compliance checks</li>
      </ul>
      
      <p className="mt-4">Adherence to operational safety procedures is non-negotiable in electrical system operations, with regular training and strict enforcement essential to maintaining a safe working environment.</p>
    </>
  )
};

// Section 3.2: Emergency Response
export const systemOperationsSection3_2 = {
  title: "Emergency Response",
  content: (
    <>
      <p>Emergency response in electrical system operations involves predetermined procedures for addressing unexpected events that threaten system integrity, personnel safety, or service continuity.</p>
      
      <h4 className="text-[#FFC900] font-medium mt-6 mb-2">Common Electrical Emergencies</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Power Outages:</strong> Complete loss of supply to part or all of the system</li>
        <li><strong>Electrical Fires:</strong> Fires originating from electrical equipment or wiring</li>
        <li><strong>Arc Flash Incidents:</strong> Dangerous electrical explosions from short circuits</li>
        <li><strong>Equipment Failures:</strong> Sudden breakdown of critical system components</li>
        <li><strong>Electrical Injuries:</strong> Personnel injuries from electrical contact or incidents</li>
      </ul>
      
      <h4 className="text-[#FFC900] font-medium mt-6 mb-2">Emergency Response Elements</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Emergency Action Plans:</strong> Detailed procedures for specific emergencies</li>
        <li><strong>Response Team Roles:</strong> Clear designation of responsibilities</li>
        <li><strong>Communication Protocols:</strong> Methods for alerting and updating relevant parties</li>
        <li><strong>Equipment Access:</strong> Emergency access to critical areas and equipment</li>
        <li><strong>Recovery Procedures:</strong> Steps for restoring normal operation after emergencies</li>
      </ul>
      
      <p className="mt-4">Regular emergency drills and training are essential to ensure all personnel can effectively implement emergency procedures when needed, minimizing the impact of incidents on both people and systems.</p>
    </>
  )
};

// Section 3.3: Operational Efficiency
export const systemOperationsSection3_3 = {
  title: "Operational Efficiency",
  content: (
    <>
      <p>Operational efficiency in electrical systems focuses on optimizing performance, minimizing energy losses, and reducing operational costs while maintaining reliability and safety.</p>
      
      <h4 className="text-[#FFC900] font-medium mt-6 mb-2">Efficiency Strategies</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Load Management:</strong> Optimizing the distribution and timing of electrical loads</li>
        <li><strong>Power Factor Correction:</strong> Improving power factor to reduce losses and penalties</li>
        <li><strong>Peak Demand Reduction:</strong> Minimizing peak power requirements</li>
        <li><strong>Voltage Optimization:</strong> Operating at optimal voltage levels</li>
        <li><strong>Equipment Scheduling:</strong> Running equipment at the most efficient times</li>
      </ul>
      
      <h4 className="text-[#FFC900] font-medium mt-6 mb-2">Efficiency Monitoring and Improvement</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Energy Audits:</strong> Systematic review of energy use and efficiency opportunities</li>
        <li><strong>Performance Metrics:</strong> Key indicators for measuring operational efficiency</li>
        <li><strong>Benchmarking:</strong> Comparing performance to industry standards and best practices</li>
        <li><strong>Continuous Improvement:</strong> Ongoing refinement of operational practices</li>
        <li><strong>Energy Management Systems:</strong> Automated tools for optimizing energy use</li>
      </ul>
      
      <p className="mt-4">As energy costs and environmental concerns increase, operational efficiency has become a primary focus in electrical system operations, with potential for significant cost savings and reduced environmental impact.</p>
    </>
  )
};

// Quiz questions
export const systemOperationsQuestions = [
  {
    id: 1,
    question: "Which type of control system utilizes feedback mechanisms to adjust control parameters based on actual system performance?",
    options: [
      "Open-Loop System",
      "Manual Control System",
      "Closed-Loop System",
      "Static Control System"
    ],
    correctAnswer: "Closed-Loop System",
    explanation: "Closed-Loop Systems utilize feedback mechanisms to compare actual system performance with desired performance and make adjustments accordingly. This allows the system to self-correct and maintain desired operation parameters."
  },
  {
    id: 2,
    question: "What is the primary purpose of a Lockout/Tagout (LOTO) procedure?",
    options: [
      "To optimize power distribution efficiency",
      "To secure equipment in a safe state during maintenance",
      "To record operational data for compliance purposes",
      "To manage power quality issues in the system"
    ],
    correctAnswer: "To secure equipment in a safe state during maintenance",
    explanation: "Lockout/Tagout (LOTO) procedures are designed to ensure that equipment is properly shut off and cannot be restarted unexpectedly during maintenance or servicing work, protecting the safety of personnel working on the equipment."
  },
  {
    id: 3,
    question: "Which of the following is NOT typically a component of a control system?",
    options: [
      "Sensors",
      "Controllers",
      "Actuators",
      "Transformers"
    ],
    correctAnswer: "Transformers",
    explanation: "While sensors (to measure parameters), controllers (to process data and determine actions), and actuators (to execute control actions) are standard components of control systems, transformers are power equipment that change voltage levels and are not specifically control system components."
  },
  {
    id: 4,
    question: "What does an Energy Management System (EMS) primarily help achieve in power system operations?",
    options: [
      "Increased power generation capacity",
      "Optimized performance and reliability",
      "Higher operating temperatures in equipment",
      "Reduced safety requirements"
    ],
    correctAnswer: "Optimized performance and reliability",
    explanation: "Energy Management Systems (EMS) are used in power system operations to monitor, control, and optimize the performance and reliability of the generation, transmission, and distribution of electrical power."
  },
  {
    id: 5,
    question: "Which of the following is a key challenge in power system operations related to renewable energy sources?",
    options: [
      "Excessive power generation",
      "Higher voltage stability",
      "Variable generation patterns",
      "Simplified control systems"
    ],
    correctAnswer: "Variable generation patterns",
    explanation: "Renewable energy sources like solar and wind power present the challenge of variable generation patterns due to their dependence on weather conditions. This variability requires sophisticated management strategies to maintain system stability and reliability."
  },
  {
    id: 6,
    question: "What is the primary function of distribution system operations?",
    options: [
      "Generating electrical power",
      "Managing long-distance power transmission",
      "Delivering power from transmission systems to end consumers",
      "Manufacturing electrical equipment"
    ],
    correctAnswer: "Delivering power from transmission systems to end consumers",
    explanation: "Distribution system operations focus on managing the electrical networks that deliver power from transmission systems to end users, including residential, commercial, and industrial customers."
  },
  {
    id: 7,
    question: "Which of the following is a method for improving operational efficiency in electrical systems?",
    options: [
      "Increasing peak power demand",
      "Operating equipment at maximum capacity at all times",
      "Power factor correction",
      "Removing monitoring systems to reduce costs"
    ],
    correctAnswer: "Power factor correction",
    explanation: "Power factor correction improves the efficiency of electrical systems by reducing reactive power, minimizing losses, avoiding utility penalties, and optimizing the use of electrical infrastructure."
  },
  {
    id: 8,
    question: "In industrial electrical systems, what is the primary purpose of a Motor Control Center (MCC)?",
    options: [
      "Generate electricity for the facility",
      "Provide centralized control of multiple motors",
      "Store energy during power outages",
      "Convert AC power to DC power"
    ],
    correctAnswer: "Provide centralized control of multiple motors",
    explanation: "Motor Control Centers (MCCs) are centralized assemblies that house motor controllers, starters, and related equipment, providing a consolidated location for controlling and protecting multiple motors within an industrial facility."
  },
  {
    id: 9,
    question: "What is the 'Testing Before Touch' principle in operational safety procedures?",
    options: [
      "Testing equipment performance before installation",
      "Checking worker qualifications before assigning tasks",
      "Verifying absence of voltage before beginning work",
      "Testing tools before purchasing them"
    ],
    correctAnswer: "Verifying absence of voltage before beginning work",
    explanation: "The 'Testing Before Touch' principle is a critical safety practice that requires verification that electrical equipment or circuits are de-energized and have no voltage present before any work is performed on them, helping prevent electrical injuries."
  },
  {
    id: 10,
    question: "Which monitoring parameter is most directly related to the risk of equipment overheating?",
    options: [
      "Voltage levels",
      "Thermal parameters",
      "Power factor",
      "System frequency"
    ],
    correctAnswer: "Thermal parameters",
    explanation: "Thermal parameters, such as equipment temperatures and ambient conditions, are most directly related to the risk of equipment overheating. Monitoring these parameters allows for early detection of potential overheating conditions that could lead to equipment damage or failure."
  }
];
