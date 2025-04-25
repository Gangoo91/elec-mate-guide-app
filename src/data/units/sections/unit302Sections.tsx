
import React from 'react';

interface SectionData {
  title: string;
  description: string;
  content: React.ReactNode;
}

export const sections302: Record<string, SectionData> = {
  "1.1": {
    title: "Three-Phase Generation and Distribution",
    description: "Understanding three-phase power generation and distribution systems",
    content: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Introduction to Three-Phase Power</h2>
        <p>
          Three-phase electrical power is a common method of electric power transmission. It uses three conductors carrying alternating currents of the same frequency which reach their instantaneous peak values at different times.
        </p>
        
        <h3 className="text-lg font-medium mt-4">Generation Principles</h3>
        <p>
          Three-phase power generation uses three sets of windings in the stator of a generator, physically offset by 120 degrees from each other. As the rotor turns:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Each phase produces a sinusoidal voltage</li>
          <li>The voltages are 120° out of phase with each other</li>
          <li>The standard sequence is Red (L1), Yellow (L2), Blue (L3) in the UK</li>
          <li>This creates a rotating magnetic field that can directly drive three-phase motors</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Distribution Networks</h3>
        <p>
          Three-phase power is distributed through transmission systems consisting of:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>High voltage transmission lines (275kV or 400kV in the UK)</li>
          <li>Primary distribution (33kV or 11kV)</li>
          <li>Secondary distribution (usually 400/230V)</li>
          <li>Three phases plus neutral configuration for final distribution</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Three-Phase Supply Characteristics</h3>
        <p>
          Standard three-phase supplies in the UK provide:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>400V line-to-line (phase-to-phase) voltage</li>
          <li>230V line-to-neutral (phase-to-neutral) voltage</li>
          <li>50Hz frequency</li>
          <li>Supply configuration typically TN-S, TN-C-S, or TT system</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Advantages of Three-Phase Systems</h2>
        <p>
          Three-phase power offers several advantages over single-phase systems:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>More efficient power transmission (lower conductor mass for same power)</li>
          <li>Constant power delivery (unlike single-phase which pulsates)</li>
          <li>Self-starting motors with strong starting torque</li>
          <li>No neutral required for balanced loads</li>
          <li>Suitable for heavy industrial equipment</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Distribution Equipment</h2>
        <p>
          Three-phase distribution systems include specialized equipment:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Three-phase transformers (either three single-phase units or one three-phase unit)</li>
          <li>Distribution boards with three-phase busbars</li>
          <li>Three-pole circuit breakers and switches</li>
          <li>Three-phase meters for energy monitoring</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Three-Phase Load Types</h2>
        <p>
          Different load types can be connected to three-phase supplies:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Balanced loads: Equal load on all three phases</li>
          <li>Unbalanced loads: Different loads on each phase</li>
          <li>Three-phase only loads (motors, heaters, etc.)</li>
          <li>Single-phase loads distributed across phases</li>
        </ul>
      </div>
    ),
  },
  "1.2": {
    title: "Star and Delta Connections",
    description: "Understanding star and delta connection configurations and their applications",
    content: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Star (Wye) Connections</h2>
        <p>
          In a star connection, one end of each of the three phases is connected to form a neutral point, with the other ends forming the line terminals.
        </p>
        
        <h3 className="text-lg font-medium mt-4">Characteristics of Star Connections</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Line voltage (VL) = √3 × Phase voltage (VP)</li>
          <li>Line current (IL) = Phase current (IP)</li>
          <li>Provides access to both line voltage (400V) and phase voltage (230V)</li>
          <li>Neutral point can be earthed, providing a reference point</li>
          <li>Allows for distribution of single-phase loads</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Applications of Star Connections</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Distribution systems requiring neutral conductor</li>
          <li>Motors starting under load (starting current is reduced)</li>
          <li>Systems requiring both three-phase and single-phase supplies</li>
          <li>Lower voltage equipment that cannot handle full line voltage</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Delta Connections</h2>
        <p>
          In a delta connection, the three phases form a closed loop with each junction connected to a line terminal.
        </p>
        
        <h3 className="text-lg font-medium mt-4">Characteristics of Delta Connections</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Line voltage (VL) = Phase voltage (VP)</li>
          <li>Line current (IL) = √3 × Phase current (IP)</li>
          <li>No neutral point available</li>
          <li>Higher current capacity for the same conductor size</li>
          <li>Self-balancing for unbalanced loads to some extent</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Applications of Delta Connections</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>High current, low voltage applications</li>
          <li>Industrial motor running (after star-delta starting)</li>
          <li>Transmission systems where neutral is not required</li>
          <li>Systems where harmonics need to be contained</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Comparing Star and Delta Connections</h2>
        <p>
          When choosing between star and delta configurations, consider:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Star provides 58% of the phase voltage across each winding compared to delta</li>
          <li>Delta carries 58% more current through each winding compared to star</li>
          <li>Star connections provide better protection against phase-to-ground faults</li>
          <li>Delta connections provide better performance with unbalanced loads</li>
          <li>Star-delta starters use both configurations for motor starting</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Star-Delta Starting</h2>
        <p>
          Star-delta starting is a common method for reducing starting current in three-phase motors:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Motor windings are initially connected in star configuration</li>
          <li>This reduces starting voltage to 58% of line voltage</li>
          <li>Starting current is reduced to about 1/3 of direct-on-line starting</li>
          <li>After motor reaches speed, connection is switched to delta</li>
          <li>Delta connection provides full voltage/torque for normal operation</li>
        </ul>
      </div>
    ),
  },
  "1.3": {
    title: "Phase Relationships and Power Calculations",
    description: "Understanding phase relationships and calculating power in three-phase systems",
    content: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Three-Phase Phase Relationships</h2>
        <p>
          The three phases in a three-phase system are offset by 120° from each other, creating a specific phase sequence.
        </p>
        
        <h3 className="text-lg font-medium mt-4">Phase Sequence</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Standard phase sequence in the UK: Red (L1), Yellow (L2), Blue (L3)</li>
          <li>Each phase reaches its peak 120° apart from the others</li>
          <li>Phase sequence determines rotation direction in three-phase motors</li>
          <li>Incorrect phase sequence can damage equipment or cause reverse rotation</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Balanced and Unbalanced Systems</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Balanced system: Equal voltage magnitudes and 120° phase shift</li>
          <li>Unbalanced system: Unequal voltages or phase shifts not equal to 120°</li>
          <li>Unbalanced loads can cause unbalanced currents even in balanced systems</li>
          <li>Neutral current in balanced systems should be zero or minimal</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Three-Phase Power Calculations</h2>
        
        <h3 className="text-lg font-medium mt-4">True Power (P)</h3>
        <p>
          True power (measured in watts, W) for three-phase systems:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Balanced Star or Delta: P = √3 × VL × IL × cos φ</li>
          <li>Where:
            <ul className="list-disc pl-6 mt-1">
              <li>VL = Line voltage (volts)</li>
              <li>IL = Line current (amps)</li>
              <li>cos φ = Power factor</li>
            </ul>
          </li>
          <li>Alternative formula: P = 3 × VP × IP × cos φ</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Reactive Power (Q)</h3>
        <p>
          Reactive power (measured in volt-amperes reactive, VAr):
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Q = √3 × VL × IL × sin φ</li>
          <li>Represents power that oscillates between source and load</li>
          <li>Does not perform useful work but is necessary for magnetic fields</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Apparent Power (S)</h3>
        <p>
          Apparent power (measured in volt-amperes, VA):
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>S = √3 × VL × IL</li>
          <li>Vector sum of true power and reactive power</li>
          <li>S² = P² + Q²</li>
          <li>Used for sizing equipment and cables</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Power Factor in Three-Phase Systems</h2>
        <p>
          Power factor (cos φ) affects efficiency and capacity of three-phase systems:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Power factor = True Power (P) ÷ Apparent Power (S)</li>
          <li>Power factor = cos φ, where φ is the phase angle between voltage and current</li>
          <li>Low power factor means higher currents for the same power delivered</li>
          <li>Higher currents cause increased losses and voltage drops</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Power Factor Correction</h3>
        <p>
          Methods to improve power factor in three-phase systems:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Capacitor banks connected in star or delta configuration</li>
          <li>Sizing formula: QC = P × (tan φ1 - tan φ2)</li>
          <li>Where:
            <ul className="list-disc pl-6 mt-1">
              <li>QC = Capacitor reactive power</li>
              <li>P = System true power</li>
              <li>φ1 = Original phase angle</li>
              <li>φ2 = Desired phase angle</li>
            </ul>
          </li>
          <li>Improved power factor reduces electricity costs and increases system capacity</li>
        </ul>
      </div>
    ),
  },
};
