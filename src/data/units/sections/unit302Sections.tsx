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
  "2.1": {
    title: "Motor Types and Characteristics",
    description: "Understanding different motor types and their operating characteristics",
    content: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Introduction to Electric Motors</h2>
        <p>
          Electric motors are devices that convert electrical energy into mechanical energy. They are fundamental components in many electrical installations, from simple household appliances to complex industrial machinery.
        </p>
        
        <h3 className="text-lg font-medium mt-4">DC Motors</h3>
        <p>
          Direct Current (DC) motors operate on DC electricity and are characterized by:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Simple speed control via voltage adjustment</li>
          <li>High starting torque</li>
          <li>Types include:
            <ul className="list-disc pl-6 mt-1">
              <li>Permanent magnet DC motors</li>
              <li>Series wound DC motors</li>
              <li>Shunt wound DC motors</li>
              <li>Compound wound DC motors</li>
            </ul>
          </li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">AC Induction Motors</h3>
        <p>
          The most common motor type in industrial applications:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Robust and reliable design with no brushes</li>
          <li>Available in single-phase and three-phase configurations</li>
          <li>Operate based on electromagnetic induction</li>
          <li>Consist of a stator (stationary) and rotor (rotating) component</li>
          <li>Types include:
            <ul className="list-disc pl-6 mt-1">
              <li>Squirrel cage rotor (most common)</li>
              <li>Wound rotor (slip-ring motor)</li>
            </ul>
          </li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Synchronous Motors</h3>
        <p>
          Motors that operate at synchronous speed with no slip:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Run at exact speeds related to the supply frequency</li>
          <li>Used where precise speed control is required</li>
          <li>Can operate at leading power factor (power factor correction)</li>
          <li>Require DC excitation for the rotor</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Motor Performance Characteristics</h2>
        
        <h3 className="text-lg font-medium mt-4">Torque Characteristics</h3>
        <p>
          Key torque parameters for motors include:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Starting torque: Torque produced at standstill</li>
          <li>Pull-up torque: Minimum torque during acceleration</li>
          <li>Breakdown torque: Maximum torque the motor can produce</li>
          <li>Full-load torque: Torque at rated power output</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Speed Characteristics</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Synchronous speed (ns) = 60f/p (where f is frequency and p is pole pairs)</li>
          <li>Slip: Difference between synchronous speed and actual speed</li>
          <li>Speed regulation: Speed variation from no-load to full-load</li>
          <li>Speed/torque curves vary by motor type</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Efficiency and Power Factor</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Efficiency = (Output power / Input power) × 100%</li>
          <li>Typical motor efficiency ranges from 70% to 95%</li>
          <li>Power factor typically 0.75 to 0.85 for induction motors</li>
          <li>IE classification (IE1 to IE4) indicates efficiency level</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Special Motor Types</h2>
        
        <h3 className="text-lg font-medium mt-4">Stepper Motors</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Move in precise angular steps</li>
          <li>Excellent for positioning applications</li>
          <li>Types include variable reluctance, permanent magnet, and hybrid</li>
          <li>Require specialized control circuits</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Servo Motors</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Used in closed-loop control systems</li>
          <li>High precision positioning capability</li>
          <li>High torque-to-inertia ratio</li>
          <li>Include feedback devices like encoders or resolvers</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Single-Phase Motors</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Split-phase motors</li>
          <li>Capacitor-start motors</li>
          <li>Permanent split capacitor motors</li>
          <li>Shaded-pole motors</li>
          <li>Universal motors (can operate on AC or DC)</li>
        </ul>
      </div>
    ),
  },
  "2.2": {
    title: "Starting Methods and Speed Control",
    description: "Learning about different motor starting techniques and speed control methods",
    content: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Motor Starting Methods</h2>
        <p>
          Starting methods are critical for controlling the inrush current and starting torque of motors, especially for larger motors where direct-on-line starting could cause problems.
        </p>
        
        <h3 className="text-lg font-medium mt-4">Direct-On-Line (DOL) Starting</h3>
        <p>
          The simplest method of starting a motor:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Full voltage is applied to the motor upon starting</li>
          <li>Produces maximum starting torque (typically 150-200% of full load torque)</li>
          <li>High inrush current (typically 500-800% of full load current)</li>
          <li>Simple and low cost</li>
          <li>Suitable for small motors (typically under 5kW)</li>
          <li>Can cause voltage dips in the supply</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Star-Delta Starting</h3>
        <p>
          A common reduced-voltage starting method:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Motor starts in star configuration, then switches to delta for running</li>
          <li>Reduces starting current to approximately 33% of DOL</li>
          <li>Reduces starting torque to approximately 33% of DOL</li>
          <li>Requires motor with dual-voltage windings (six leads)</li>
          <li>Typically uses a timer to switch from star to delta</li>
          <li>Causes a current surge during transition from star to delta</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Autotransformer Starting</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Uses an autotransformer to reduce voltage during starting</li>
          <li>Typical tappings at 50%, 65%, and 80% of full voltage</li>
          <li>Starting current and torque reduced proportionally to voltage squared</li>
          <li>Smoother starting than star-delta</li>
          <li>More expensive than star-delta</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Soft Starting</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Uses electronic control to gradually increase voltage</li>
          <li>Smooth acceleration with reduced mechanical stress</li>
          <li>Adjustable ramp-up time</li>
          <li>Current limiting capability</li>
          <li>May include additional features like soft stop, overcurrent protection</li>
          <li>Higher cost but provides better motor protection</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Speed Control Methods</h2>
        
        <h3 className="text-lg font-medium mt-4">Variable Frequency Drives (VFDs)</h3>
        <p>
          The most common method for AC motor speed control:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Controls both frequency and voltage</li>
          <li>Wide speed range (typically 10-100% of base speed)</li>
          <li>Energy efficient at reduced speeds</li>
          <li>Soft starting capability built-in</li>
          <li>Advanced control options (PID control, multi-step speed)</li>
          <li>Can cause harmonics in the electrical supply</li>
          <li>May require shielded motor cables</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">DC Motor Speed Control</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Armature voltage control: Most common method</li>
          <li>Field weakening: Used for speeds above base speed</li>
          <li>SCR (Silicon Controlled Rectifier) controllers</li>
          <li>PWM (Pulse Width Modulation) controllers</li>
          <li>Regenerative drives for four-quadrant operation</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Multi-speed Motors</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Motors with multiple windings for different speeds</li>
          <li>Typically Dahlander winding or separate windings</li>
          <li>Common configurations: 2/4 pole, 4/6 pole, 4/8 pole</li>
          <li>Speed ratios usually 2:1</li>
          <li>Simple switching between fixed speeds</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Control Considerations</h2>
        
        <h3 className="text-lg font-medium mt-4">Braking Methods</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>DC injection braking: Applies DC to AC motor windings</li>
          <li>Dynamic braking: Uses motor as generator to dissipate energy</li>
          <li>Regenerative braking: Returns energy to the supply</li>
          <li>Mechanical braking systems</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Control Circuits</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Forward/reverse control</li>
          <li>Jogging/inching operation</li>
          <li>Sequential starting of multiple motors</li>
          <li>Interlocks and safety circuits</li>
          <li>PLC and automation integration</li>
        </ul>
      </div>
    ),
  },
  "2.3": {
    title: "Motor Protection Requirements",
    description: "Understanding electrical and mechanical protection for motors",
    content: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Motor Protection Fundamentals</h2>
        <p>
          Motor protection is essential for preventing damage to motors and associated equipment, ensuring safety, and maintaining reliable operation.
        </p>
        
        <h3 className="text-lg font-medium mt-4">Overload Protection</h3>
        <p>
          Protection against currents exceeding the motor's rated full-load current:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Thermal overload relays:
            <ul className="list-disc pl-6 mt-1">
              <li>Bimetallic type</li>
              <li>Eutectic alloy (melting alloy) type</li>
              <li>Electronic type</li>
            </ul>
          </li>
          <li>Setting should be 100-110% of motor full load current</li>
          <li>Time-current characteristics should match motor thermal characteristics</li>
          <li>Class 10, 20, or 30 trip characteristics based on application</li>
          <li>Ambient temperature compensation may be required</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Short Circuit Protection</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Circuit breakers:
            <ul className="list-disc pl-6 mt-1">
              <li>Molded case circuit breakers (MCCBs)</li>
              <li>Motor protection circuit breakers (MPCBs)</li>
            </ul>
          </li>
          <li>Fuses:
            <ul className="list-disc pl-6 mt-1">
              <li>gG/gL general purpose fuses</li>
              <li>aM motor-rated fuses</li>
              <li>Type 2 coordination (no damage to contactors/starters)</li>
            </ul>
          </li>
          <li>Sizing based on motor starting characteristics</li>
          <li>Coordination with overload protection</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Specialized Protection Functions</h2>
        
        <h3 className="text-lg font-medium mt-4">Phase Failure Protection</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Detects loss of one or more phases</li>
          <li>Prevents motor operation on single phase</li>
          <li>May be integrated into overload relays</li>
          <li>Often includes phase imbalance detection</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Phase Sequence/Rotation Protection</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Ensures correct rotation direction</li>
          <li>Critical for loads where incorrect rotation could cause damage</li>
          <li>Monitors L1, L2, L3 sequence</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Under/Overvoltage Protection</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Prevents operation outside voltage tolerance limits</li>
          <li>Typically ±10% of rated voltage</li>
          <li>May include time delay to prevent nuisance tripping</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Earth Fault Protection</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Residual current devices (RCDs)</li>
          <li>Core balance earth leakage relays</li>
          <li>Setting typically 10-20% of full load current</li>
          <li>May cause nuisance tripping with VFD applications</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Thermal Protection</h2>
        
        <h3 className="text-lg font-medium mt-4">Temperature Monitoring</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Thermistors (PTC or NTC) embedded in windings</li>
          <li>PT100 resistance temperature detectors</li>
          <li>Thermocouples</li>
          <li>Bimetallic thermal switches</li>
          <li>Requires compatible relays/controllers</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Cooling System Monitoring</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Fan operation verification</li>
          <li>Airflow monitoring</li>
          <li>Water cooling flow and temperature (for water-cooled motors)</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Advanced Motor Protection</h2>
        
        <h3 className="text-lg font-medium mt-4">Electronic Motor Protection Relays</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Microprocessor-based protection</li>
          <li>Multiple protection functions in one device</li>
          <li>Adjustable trip settings</li>
          <li>Data logging and communication capabilities</li>
          <li>Pre-alarm warnings before tripping</li>
          <li>Additional functions:
            <ul className="list-disc pl-6 mt-1">
              <li>Jam protection</li>
              <li>Undercurrent (load loss) protection</li>
              <li>Power monitoring</li>
              <li>Starting time supervision</li>
              <li>Number of starts limitation</li>
            </ul>
          </li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Variable Frequency Drive Protection</h3>
        <p>
          VFDs provide numerous built-in protection functions:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Current limiting</li>
          <li>Electronic thermal overload</li>
          <li>Short circuit protection</li>
          <li>Ground fault protection</li>
          <li>Input/output phase loss</li>
          <li>Overvoltage/undervoltage protection</li>
          <li>Motor stall protection</li>
          <li>PID feedback loss</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Selection and Application</h2>
        
        <h3 className="text-lg font-medium mt-4">Protection Coordination</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Type 1 coordination: Protection of personnel, no equipment damage requirement</li>
          <li>Type 2 coordination: No damage to switchgear, only fuses may need replacement</li>
          <li>Cascade coordination between protective devices</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Selection Criteria</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Motor size and type</li>
          <li>Application and duty cycle</li>
          <li>Starting method</li>
          <li>Environmental conditions</li>
          <li>Cost vs. level of protection required</li>
          <li>Integration with control systems</li>
        </ul>
      </div>
    ),
  }
};
