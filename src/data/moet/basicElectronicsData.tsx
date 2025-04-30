
import React from 'react';

export type SectionData = {
  title: string;
  description: string;
  content: React.ReactNode;
};

export type SectionsDataType = Record<string, SectionData>;

// Define the sections data
export const basicElectronicsSectionsData: SectionsDataType = {
  "1.1": {
    title: "Basic Semiconductor Theory",
    description: "Understanding semiconductor materials and properties",
    content: (
      <div className="space-y-4">
        <p>Semiconductors are materials that have electrical conductivity between conductors and insulators. The most common semiconductor materials are:</p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Silicon (Si) - Most widely used in electronics industry</li>
          <li>Germanium (Ge) - Used in specific applications</li>
          <li>Gallium arsenide (GaAs) - Used in high-frequency applications</li>
        </ul>
        
        <p className="mt-4">Key properties of semiconductor materials include:</p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Temperature sensitivity - Conductivity increases with temperature</li>
          <li>Energy band gap - Determines electrical properties</li>
          <li>Crystal structure - Affects electrical characteristics</li>
        </ul>
      </div>
    )
  },
  "1.2": {
    title: "P-N Junctions",
    description: "Formation and characteristics of P-N junctions",
    content: (
      <div className="space-y-4">
        <p>A P-N junction is formed when P-type semiconductor material is brought in contact with N-type semiconductor material, creating a diode.</p>
        
        <h4 className="text-md font-semibold text-[#FFC900]">Key Characteristics:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Depletion Region - Area near the junction with no free carriers</li>
          <li>Barrier Potential - Voltage barrier that must be overcome</li>
          <li>Forward Bias - When positive voltage is applied to P-side
            <ul className="list-disc pl-6 mt-2">
              <li>Current flows easily</li>
              <li>Depletion region narrows</li>
            </ul>
          </li>
          <li>Reverse Bias - When negative voltage is applied to P-side
            <ul className="list-disc pl-6 mt-2">
              <li>Very little current flows</li>
              <li>Depletion region widens</li>
            </ul>
          </li>
        </ul>
      </div>
    )
  },
  "1.3": {
    title: "Semiconductor Doping",
    description: "N-type and P-type semiconductor materials",
    content: (
      <div className="space-y-4">
        <p>Doping is the process of adding impurities to semiconductor materials to change their electrical properties.</p>
        
        <h4 className="text-md font-semibold text-[#FFC900]">Types of Doping:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>N-type Doping
            <ul className="list-disc pl-6 mt-2">
              <li>Donor impurities (phosphorus, arsenic) added</li>
              <li>Provides excess electrons</li>
              <li>Electrons are majority carriers</li>
            </ul>
          </li>
          <li>P-type Doping
            <ul className="list-disc pl-6 mt-2">
              <li>Acceptor impurities (boron, gallium) added</li>
              <li>Creates "holes" (absence of electrons)</li>
              <li>Holes are majority carriers</li>
            </ul>
          </li>
        </ul>
      </div>
    )
  },
  "2.1": {
    title: "Passive Components",
    description: "Resistors, capacitors, and inductors",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#FFC900]">Passive Components</h3>
        <p>Passive components do not require an external power source to operate.</p>
        
        <h4 className="text-md font-semibold text-[#FFC900]">Types of Passive Components:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Resistors:</strong> Control current flow
            <ul className="list-disc pl-6 mt-2">
              <li>Fixed resistors - Carbon film, metal film, wire wound</li>
              <li>Variable resistors - Potentiometers, rheostats</li>
              <li>Special resistors - Thermistors, photoresistors</li>
            </ul>
          </li>
          <li><strong>Capacitors:</strong> Store electrical energy
            <ul className="list-disc pl-6 mt-2">
              <li>Ceramic capacitors - High frequency applications</li>
              <li>Electrolytic capacitors - Polarized, high capacitance</li>
              <li>Film capacitors - Stable, reliable performance</li>
            </ul>
          </li>
          <li><strong>Inductors:</strong> Store energy in magnetic fields
            <ul className="list-disc pl-6 mt-2">
              <li>Air core inductors - Low inductance values</li>
              <li>Iron core inductors - Higher inductance values</li>
              <li>Ferrite core inductors - RF applications</li>
            </ul>
          </li>
        </ul>
      </div>
    )
  },
  "2.2": {
    title: "Active Components",
    description: "Diodes, transistors, and integrated circuits",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#FFC900]">Active Components</h3>
        <p>Active components can control the flow of electrical current and typically require a power source.</p>
        
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Diodes:</strong> Allow current flow in one direction
            <ul className="list-disc pl-6 mt-2">
              <li>Rectifier diodes - Convert AC to DC</li>
              <li>Zener diodes - Voltage regulation</li>
              <li>Light-emitting diodes (LEDs) - Produce light</li>
              <li>Photodiodes - Light detection</li>
            </ul>
          </li>
          <li><strong>Transistors:</strong> Control or amplify electronic signals
            <ul className="list-disc pl-6 mt-2">
              <li>Bipolar Junction Transistors (BJT) - NPN and PNP</li>
              <li>Field Effect Transistors (FET) - JFET and MOSFET</li>
              <li>Common configurations - Common emitter, common collector, common base</li>
            </ul>
          </li>
          <li><strong>Integrated Circuits (ICs):</strong> Combine multiple components
            <ul className="list-disc pl-6 mt-2">
              <li>Linear ICs - Operational amplifiers, voltage regulators</li>
              <li>Digital ICs - Logic gates, microprocessors</li>
              <li>Mixed-signal ICs - Combine analog and digital circuits</li>
            </ul>
          </li>
        </ul>
      </div>
    )
  },
  "2.3": {
    title: "Sensors and Transducers",
    description: "Electronic sensing and measurement devices",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#FFC900]">Sensors and Transducers</h3>
        <p>Sensors and transducers convert physical parameters into electrical signals.</p>
        
        <h4 className="text-md font-semibold text-[#FFC900]">Common Types:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Temperature Sensors
            <ul className="list-disc pl-6 mt-2">
              <li>Thermistors - Resistance changes with temperature</li>
              <li>Thermocouples - Generate voltage proportional to temperature difference</li>
              <li>RTDs (Resistance Temperature Detectors) - Precise temperature measurement</li>
            </ul>
          </li>
          <li>Light Sensors
            <ul className="list-disc pl-6 mt-2">
              <li>Photoresistors - Resistance changes with light intensity</li>
              <li>Photodiodes - Convert light to electrical current</li>
              <li>Phototransistors - Light-sensitive transistors</li>
            </ul>
          </li>
          <li>Other Sensor Types
            <ul className="list-disc pl-6 mt-2">
              <li>Pressure sensors</li>
              <li>Motion and proximity sensors</li>
              <li>Humidity sensors</li>
              <li>Gas and chemical sensors</li>
            </ul>
          </li>
        </ul>
      </div>
    )
  },
  "3.1": {
    title: "Amplifier Circuits",
    description: "Transistor and operational amplifier configurations",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#FFC900]">Amplifier Circuits</h3>
        <p>Amplifiers increase the amplitude of electronic signals.</p>
        
        <h4 className="text-md font-semibold text-[#FFC900]">Common Amplifier Types:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Transistor Amplifiers
            <ul className="list-disc pl-6 mt-2">
              <li>Common-emitter - High voltage gain</li>
              <li>Common-collector (emitter follower) - High current gain</li>
              <li>Common-base - High voltage and good high-frequency performance</li>
            </ul>
          </li>
          <li>Operational Amplifier Circuits
            <ul className="list-disc pl-6 mt-2">
              <li>Inverting amplifier</li>
              <li>Non-inverting amplifier</li>
              <li>Differential amplifier</li>
              <li>Summing amplifier</li>
              <li>Integrator and differentiator</li>
            </ul>
          </li>
        </ul>
      </div>
    )
  },
  "3.2": {
    title: "Power Supply Circuits",
    description: "Rectification, filtering, and voltage regulation",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#FFC900]">Power Supply Circuits</h3>
        <p>Power supplies convert AC mains electricity to DC voltage required by electronic circuits.</p>
        
        <h4 className="text-md font-semibold text-[#FFC900]">Key Components and Stages:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Transformer
            <ul className="list-disc pl-6 mt-2">
              <li>Steps down mains voltage</li>
              <li>Provides isolation from mains</li>
            </ul>
          </li>
          <li>Rectification
            <ul className="list-disc pl-6 mt-2">
              <li>Half-wave rectifier - Uses one diode</li>
              <li>Full-wave rectifier - Uses two diodes with center-tapped transformer</li>
              <li>Bridge rectifier - Uses four diodes</li>
            </ul>
          </li>
          <li>Filtering
            <ul className="list-disc pl-6 mt-2">
              <li>Capacitor input filter - Smooths rectified output</li>
              <li>LC filter - Reduces ripple voltage</li>
              <li>π (pi) filter - Enhanced filtering</li>
            </ul>
          </li>
          <li>Voltage Regulation
            <ul className="list-disc pl-6 mt-2">
              <li>Linear voltage regulators (78xx, 79xx series)</li>
              <li>Zener diode regulators</li>
              <li>Switching regulators</li>
            </ul>
          </li>
        </ul>
      </div>
    )
  },
  "3.3": {
    title: "Digital Logic Circuits",
    description: "Basic gates, combinational and sequential logic",
    content: (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[#FFC900]">Digital Logic Circuits</h3>
        <p>Digital logic circuits process binary information using logic gates.</p>
        
        <h4 className="text-md font-semibold text-[#FFC900]">Basic Logic Gates:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>AND Gate - Output is high only when all inputs are high</li>
          <li>OR Gate - Output is high when any input is high</li>
          <li>NOT Gate (Inverter) - Output is opposite of input</li>
          <li>NAND Gate - NOT-AND combination</li>
          <li>NOR Gate - NOT-OR combination</li>
          <li>XOR Gate - Output is high when inputs are different</li>
        </ul>
        
        <h4 className="text-md font-semibold text-[#FFC900] mt-4">Circuit Types:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Combinational Logic Circuits
            <ul className="list-disc pl-6 mt-2">
              <li>Multiplexers and demultiplexers</li>
              <li>Encoders and decoders</li>
              <li>Adders and subtractors</li>
            </ul>
          </li>
          <li>Sequential Logic Circuits
            <ul className="list-disc pl-6 mt-2">
              <li>Flip-flops - SR, JK, D, and T types</li>
              <li>Registers - Store multiple bits</li>
              <li>Counters - Asynchronous and synchronous</li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
};
