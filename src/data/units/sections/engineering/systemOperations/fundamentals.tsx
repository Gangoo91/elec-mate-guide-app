
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
