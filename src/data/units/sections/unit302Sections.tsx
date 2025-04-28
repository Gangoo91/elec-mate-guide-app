
import React from 'react';

interface SectionData {
  title: string;
  description: string;
  content: React.ReactNode;
  detailedContent?: React.ReactNode;
}

export const sections302: Record<string, SectionData> = {
  "1.1": {
    title: "Three-Phase Generation and Distribution",
    description: "Understanding the principles of three-phase power generation and distribution systems",
    content: (
      <div className="space-y-4">
        <p className="text-[#FFC900]/90">
          Three-phase power is generated and distributed through a system of three conductors carrying alternating
          currents of the same frequency but with a phase difference of 120 degrees. This creates a more
          efficient power transmission system compared to single-phase systems.
        </p>
        
        <h4 className="text-lg font-medium text-[#FFC900]">Key Concepts:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Three-phase generators produce three AC voltages with 120° phase differences</li>
          <li>Power is transferred through three live conductors plus a neutral in some systems</li>
          <li>Three-phase distribution is more efficient for transmitting power over long distances</li>
          <li>Most industrial and commercial installations utilize three-phase supplies</li>
        </ul>
      </div>
    )
  },
  "1.2": {
    title: "Star and Delta Connections",
    description: "Learning the different connection methods for three-phase systems and their applications",
    content: (
      <div className="space-y-4">
        <p className="text-[#FFC900]/90">
          Three-phase equipment can be connected in either star (Y) or delta (Δ) configuration. Each has specific 
          characteristics and applications in electrical installations.
        </p>
        
        <h4 className="text-lg font-medium text-[#FFC900]">Star Connection:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Three phases connected to a common neutral point</li>
          <li>Provides both phase voltage and line voltage</li>
          <li>Line voltage = √3 × phase voltage</li>
          <li>Often used in distribution systems where neutral is required</li>
        </ul>
        
        <h4 className="text-lg font-medium text-[#FFC900] mt-4">Delta Connection:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Three phases connected in a triangle formation</li>
          <li>No neutral connection</li>
          <li>Line current = √3 × phase current</li>
          <li>Often used for motor windings and industrial equipment</li>
        </ul>
      </div>
    )
  },
  "1.3": {
    title: "Phase Relationships and Power Calculations",
    description: "Understanding phase relationships and performing power calculations in three-phase systems",
    content: (
      <div className="space-y-4">
        <p className="text-[#FFC900]/90">
          In three-phase systems, understanding phase relationships is crucial for proper system design and power calculations.
          Three-phase power provides advantages in terms of efficiency and power density compared to single-phase systems.
        </p>
        
        <h4 className="text-lg font-medium text-[#FFC900]">Key Formulas:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Total Power (balanced system) = √3 × VL × IL × cosφ</li>
          <li>Line Voltage = √3 × Phase Voltage (in star configuration)</li>
          <li>Line Current = √3 × Phase Current (in delta configuration)</li>
          <li>Power Factor = True Power ÷ Apparent Power</li>
        </ul>
        
        <h4 className="text-lg font-medium text-[#FFC900] mt-4">Benefits of Three-Phase Power:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Constant power delivery with reduced vibration</li>
          <li>More efficient power transmission</li>
          <li>Smaller conductor sizes for the same power</li>
          <li>Better suited for heavy industrial loads and motors</li>
        </ul>
      </div>
    )
  },
  "2.1": {
    title: "Motor Types and Characteristics",
    description: "Exploring different types of electric motors and their operational characteristics",
    content: (
      <div className="space-y-4">
        <p className="text-[#FFC900]/90">
          Electric motors convert electrical energy into mechanical energy. Understanding different motor types 
          and their characteristics is essential for proper selection, installation, and maintenance.
        </p>
        
        <h4 className="text-lg font-medium text-[#FFC900]">Common Motor Types:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Induction Motors:</strong> Most common in industrial applications, simple and robust</li>
          <li><strong>Synchronous Motors:</strong> Constant speed operation regardless of load</li>
          <li><strong>DC Motors:</strong> Precise speed control but require more maintenance</li>
          <li><strong>Permanent Magnet Motors:</strong> High efficiency and compact size</li>
        </ul>
      </div>
    )
  },
  "2.2": {
    title: "Starting Methods and Speed Control",
    description: "Understanding various motor starting techniques and speed control methods",
    content: (
      <div className="space-y-4">
        <p className="text-[#FFC900]/90">
          Motor starting methods are critical for limiting inrush current and preventing mechanical shock.
          Speed control techniques allow motors to operate at various speeds to meet application requirements.
        </p>
        
        <h4 className="text-lg font-medium text-[#FFC900]">Starting Methods:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Direct-On-Line (DOL) starting</li>
          <li>Star-Delta starting</li>
          <li>Soft starters</li>
          <li>Autotransformer starting</li>
        </ul>
        
        <h4 className="text-lg font-medium text-[#FFC900] mt-4">Speed Control Methods:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Variable Frequency Drives (VFDs)</li>
          <li>Rheostatic control (for DC motors)</li>
          <li>Pole changing techniques</li>
          <li>Electronic speed controllers</li>
        </ul>
      </div>
    )
  },
  "2.3": {
    title: "Motor Protection Requirements",
    description: "Understanding protection devices and strategies for electrical motors",
    content: (
      <div className="space-y-4">
        <p className="text-[#FFC900]/90">
          Motors require specific protection measures to prevent damage from electrical and mechanical faults.
          Proper protection extends motor life and ensures safe operation.
        </p>
        
        <h4 className="text-lg font-medium text-[#FFC900]">Protection Devices:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Overload relays</li>
          <li>Circuit breakers with motor protection characteristics</li>
          <li>Phase failure protection</li>
          <li>Motor Protection Circuit Breakers (MPCBs)</li>
          <li>Temperature monitoring devices</li>
        </ul>
        
        <h4 className="text-lg font-medium text-[#FFC900] mt-4">Protection Against:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Overheating and thermal overload</li>
          <li>Short circuits and ground faults</li>
          <li>Phase loss or unbalance</li>
          <li>Stalling and mechanical overload</li>
        </ul>
      </div>
    )
  }
};
