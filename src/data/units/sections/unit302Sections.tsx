
import React from 'react';
import { Section302 } from './unit302/interfaces';

export const sections302: Record<string, Section302> = {
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
        
        <h4 className="text-lg font-medium text-[#FFC900] mt-4">Advantages of Three-Phase Systems:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Higher power delivery capacity compared to single-phase</li>
          <li>More constant power delivery with reduced vibration in motors</li>
          <li>Better efficiency and smaller conductor sizes for the same power</li>
          <li>Can supply both three-phase and single-phase loads within the same system</li>
          <li>Generation of rotating magnetic fields for motors without additional components</li>
        </ul>
        
        <h4 className="text-lg font-medium text-[#FFC900] mt-4">Distribution Systems:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>High voltage (HV) transmission: Typically 132kV to 400kV for long-distance power transmission</li>
          <li>Medium voltage (MV) distribution: Typically 11kV to 33kV for regional distribution</li>
          <li>Low voltage (LV) supply: 400V three-phase for commercial/industrial and 230V single-phase for domestic premises</li>
          <li>Transformer configurations: Delta-Star, Star-Star, Delta-Delta depending on system requirements</li>
        </ul>
      </div>
    ),
    detailedContent: (
      <div className="space-y-6">
        <h4 className="text-xl font-medium text-[#FFC900]">Mathematical Representation</h4>
        <p className="text-[#FFC900]/80">
          In a balanced three-phase system, the voltages can be mathematically represented as:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Phase 1: V₁ = V<sub>max</sub> sin(ωt)</li>
          <li>Phase 2: V₂ = V<sub>max</sub> sin(ωt - 120°)</li>
          <li>Phase 3: V₃ = V<sub>max</sub> sin(ωt - 240°)</li>
        </ul>
        
        <h4 className="text-xl font-medium text-[#FFC900] mt-6">Sequence of Phases</h4>
        <p className="text-[#FFC900]/80">
          The sequence of phases (L1, L2, L3) is important for determining the direction of rotation in motors. 
          Reversing any two phases will reverse the direction of rotation in a three-phase motor.
        </p>
        
        <h4 className="text-xl font-medium text-[#FFC900] mt-6">Practical Applications</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Industrial motors and drives</li>
          <li>Heavy machinery and equipment</li>
          <li>HVAC systems</li>
          <li>Electric vehicle charging stations</li>
          <li>Data centers and critical infrastructure</li>
          <li>Renewable energy generation systems</li>
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
          <li>Line current = phase current</li>
          <li>Often used in distribution systems where neutral is required</li>
          <li>Suitable for unbalanced loads</li>
        </ul>
        
        <h4 className="text-lg font-medium text-[#FFC900] mt-4">Delta Connection:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Three phases connected in a triangle formation</li>
          <li>No neutral connection</li>
          <li>Line current = √3 × phase current</li>
          <li>Line voltage = phase voltage</li>
          <li>Often used for motor windings and industrial equipment</li>
          <li>Better for balanced loads and higher currents</li>
        </ul>
        
        <h4 className="text-lg font-medium text-[#FFC900] mt-4">Practical Applications:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Star connections:</strong> Distribution transformers, large motors during starting, systems requiring neutral point</li>
          <li><strong>Delta connections:</strong> Industrial motors during running, generators, systems where high currents are needed</li>
          <li><strong>Star-Delta starting:</strong> Method to reduce starting current in large motors</li>
          <li><strong>Delta-Star transformers:</strong> Common in distribution networks for voltage step-down</li>
        </ul>
      </div>
    ),
    detailedContent: (
      <div className="space-y-6">
        <h4 className="text-xl font-medium text-[#FFC900]">Voltage and Current Relationships</h4>
        
        <h5 className="text-lg font-medium text-[#FFC900]/90 mt-4">Star Connection:</h5>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>V<sub>line</sub> = √3 × V<sub>phase</sub></li>
          <li>I<sub>line</sub> = I<sub>phase</sub></li>
          <li>The phase voltage is measured between a phase and the neutral point</li>
          <li>The line voltage is measured between any two phases</li>
        </ul>
        
        <h5 className="text-lg font-medium text-[#FFC900]/90 mt-4">Delta Connection:</h5>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>V<sub>line</sub> = V<sub>phase</sub></li>
          <li>I<sub>line</sub> = √3 × I<sub>phase</sub></li>
          <li>There is no neutral point in a delta connection</li>
          <li>Each phase winding is connected across two lines</li>
        </ul>
        
        <h4 className="text-xl font-medium text-[#FFC900] mt-6">Star-Delta Transformation</h4>
        <p className="text-[#FFC900]/80">
          Converting between star and delta configurations can be useful for analysis and for starter circuits:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Star-Delta starting reduces the starting current to approximately one-third of direct-on-line starting</li>
          <li>The transformation requires reconfiguring the six winding ends of a three-phase motor</li>
          <li>Modern equipment often uses electronic soft starters instead of star-delta starters</li>
        </ul>
        
        <h4 className="text-xl font-medium text-[#FFC900] mt-6">Balanced vs. Unbalanced Loads</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Star connections handle unbalanced loads better due to the neutral conductor</li>
          <li>Delta connections can develop issues with unbalanced loads causing circulating currents</li>
          <li>Unbalanced loads in a three-phase system can lead to voltage imbalance and inefficiency</li>
          <li>Phase balancing is an important consideration in three-phase distribution systems</li>
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
          <li>Total Power (balanced system) = √3 × V<sub>L</sub> × I<sub>L</sub> × cosφ</li>
          <li>Line Voltage = √3 × Phase Voltage (in star configuration)</li>
          <li>Line Current = √3 × Phase Current (in delta configuration)</li>
          <li>Power Factor = True Power ÷ Apparent Power</li>
          <li>Apparent Power (S) = √3 × V<sub>L</sub> × I<sub>L</sub> (measured in VA or kVA)</li>
          <li>Reactive Power (Q) = √3 × V<sub>L</sub> × I<sub>L</sub> × sinφ (measured in VAr or kVAr)</li>
        </ul>
        
        <h4 className="text-lg font-medium text-[#FFC900] mt-4">Power Types in AC Systems:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>True Power (P):</strong> Actual work-producing power, measured in watts (W)</li>
          <li><strong>Reactive Power (Q):</strong> Power that oscillates between source and load, measured in volt-ampere reactive (VAr)</li>
          <li><strong>Apparent Power (S):</strong> Vector sum of true and reactive power, measured in volt-amperes (VA)</li>
          <li><strong>Power Factor:</strong> Ratio of true power to apparent power (cosφ)</li>
        </ul>
        
        <h4 className="text-lg font-medium text-[#FFC900] mt-4">Benefits of Three-Phase Power:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Constant power delivery with reduced vibration</li>
          <li>More efficient power transmission</li>
          <li>Smaller conductor sizes for the same power</li>
          <li>Better suited for heavy industrial loads and motors</li>
          <li>Balanced load distribution across phases</li>
        </ul>
      </div>
    ),
    detailedContent: (
      <div className="space-y-6">
        <h4 className="text-xl font-medium text-[#FFC900]">Power Triangle</h4>
        <p className="text-[#FFC900]/80">
          The power triangle is a graphical representation of the relationship between different types of power:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>True Power (P) is represented on the horizontal axis</li>
          <li>Reactive Power (Q) is represented on the vertical axis</li>
          <li>Apparent Power (S) is the hypotenuse of the right triangle</li>
          <li>The angle φ represents the phase angle between voltage and current</li>
          <li>Power Factor = cosφ = P/S</li>
        </ul>
        
        <h4 className="text-xl font-medium text-[#FFC900] mt-6">Phase Sequence Importance</h4>
        <p className="text-[#FFC900]/80">
          Phase sequence (or phase rotation) is critical for motor operation:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>A positive sequence (L1-L2-L3) produces rotation in one direction</li>
          <li>A negative sequence (L3-L2-L1) produces rotation in the opposite direction</li>
          <li>Incorrect phase sequence can damage equipment or cause safety hazards</li>
          <li>Phase sequence indicators are used to verify correct rotation before connecting motors</li>
        </ul>
        
        <h4 className="text-xl font-medium text-[#FFC900] mt-6">Power Factor Correction</h4>
        <p className="text-[#FFC900]/80">
          Improving power factor brings several benefits:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Reduced electricity bills (many utilities charge for poor power factor)</li>
          <li>Increased system capacity</li>
          <li>Reduced voltage drop and line losses</li>
          <li>Typically achieved by adding capacitors to counteract inductive loads</li>
          <li>Capacitor banks can be fixed or automatically switched based on load</li>
        </ul>
        
        <h4 className="text-xl font-medium text-[#FFC900] mt-6">Practical Example</h4>
        <p className="text-[#FFC900]/80">
          For a three-phase load with line voltage of 400V, line current of 10A, and power factor of 0.8:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>True Power = √3 × V<sub>L</sub> × I<sub>L</sub> × cosφ = √3 × 400 × 10 × 0.8 = 5,542.6 watts or 5.54 kW</li>
          <li>Apparent Power = √3 × V<sub>L</sub> × I<sub>L</sub> = √3 × 400 × 10 = 6,928.2 VA or 6.93 kVA</li>
          <li>Reactive Power = √3 × V<sub>L</sub> × I<sub>L</sub> × sinφ = √3 × 400 × 10 × 0.6 = 4,156.9 VAr or 4.16 kVAr</li>
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
          <li><strong>Servo Motors:</strong> Precision positioning and control</li>
          <li><strong>Stepper Motors:</strong> Accurate positioning in steps without feedback</li>
        </ul>
        
        <h4 className="text-lg font-medium text-[#FFC900] mt-4">AC Induction Motors:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Squirrel cage type - simple, robust, maintenance-free design</li>
          <li>Wound rotor type - allows for external resistance for starting or speed control</li>
          <li>Typical efficiencies range from 75% to 95% depending on size and design</li>
          <li>Speed is determined by frequency and number of poles</li>
          <li>Runs at slightly less than synchronous speed (slip)</li>
        </ul>
        
        <h4 className="text-lg font-medium text-[#FFC900] mt-4">Motor Characteristics:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Starting Current:</strong> Typically 5-7 times full load current</li>
          <li><strong>Starting Torque:</strong> Varies by design, critical for high inertia loads</li>
          <li><strong>Speed-Torque Curve:</strong> Describes performance across operating range</li>
          <li><strong>Efficiency:</strong> Ratio of mechanical output to electrical input</li>
          <li><strong>Power Factor:</strong> Affects electrical system design and efficiency</li>
          <li><strong>Duty Cycle:</strong> Continuous, intermittent, or variable operation</li>
          <li><strong>Insulation Class:</strong> Determines temperature rating and service life</li>
        </ul>
      </div>
    ),
    detailedContent: (
      <div className="space-y-6">
        <h4 className="text-xl font-medium text-[#FFC900]">Induction Motor Operation</h4>
        <p className="text-[#FFC900]/80">
          Induction motors operate on the principle of electromagnetic induction:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Current in stator creates a rotating magnetic field</li>
          <li>Rotating field induces current in rotor</li>
          <li>Induced rotor current creates its own magnetic field</li>
          <li>Interaction between fields produces rotation</li>
          <li>The rotor always rotates slower than the magnetic field (slip)</li>
        </ul>
        
        <h4 className="text-xl font-medium text-[#FFC900] mt-6">Synchronous Speed</h4>
        <p className="text-[#FFC900]/80">
          Calculated using the formula: N<sub>s</sub> = 60f/p
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>N<sub>s</sub> = synchronous speed in RPM</li>
          <li>f = frequency in Hz</li>
          <li>p = number of poles</li>
          <li>Common speeds at 50Hz: 3000 RPM (2 poles), 1500 RPM (4 poles), 1000 RPM (6 poles)</li>
          <li>Actual rotor speed is always less due to slip</li>
        </ul>
        
        <h4 className="text-xl font-medium text-[#FFC900] mt-6">DC Motor Types</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Series:</strong> High starting torque, variable speed, used in traction applications</li>
          <li><strong>Shunt:</strong> Nearly constant speed, used where steady speed is required</li>
          <li><strong>Compound:</strong> Combines characteristics of series and shunt motors</li>
          <li><strong>Permanent Magnet:</strong> Uses permanent magnets instead of field windings</li>
          <li><strong>Brushless DC:</strong> Electronically commutated, high efficiency, low maintenance</li>
        </ul>
        
        <h4 className="text-xl font-medium text-[#FFC900] mt-6">Motor Selection Factors</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Power requirements and mechanical load characteristics</li>
          <li>Starting and running torque requirements</li>
          <li>Speed control needs</li>
          <li>Duty cycle and operating environment</li>
          <li>Energy efficiency considerations</li>
          <li>Space constraints and mounting options</li>
          <li>Noise and vibration requirements</li>
          <li>Initial cost vs. lifetime operating cost</li>
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
          <li><strong>Direct-On-Line (DOL) starting:</strong> Simple but creates high inrush current (5-7x rated current)</li>
          <li><strong>Star-Delta starting:</strong> Reduces starting current to approximately 33% of DOL</li>
          <li><strong>Soft starters:</strong> Electronic control to ramp up voltage gradually</li>
          <li><strong>Autotransformer starting:</strong> Reduces voltage during starting</li>
          <li><strong>Primary resistor/reactor starting:</strong> Adds impedance during start-up</li>
          <li><strong>Rotor resistance starting:</strong> For wound rotor motors, limits rotor current</li>
        </ul>
        
        <h4 className="text-lg font-medium text-[#FFC900] mt-4">Speed Control Methods:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Variable Frequency Drives (VFDs):</strong> Change motor speed by varying frequency</li>
          <li><strong>Rheostatic control:</strong> For DC motors and wound rotor induction motors</li>
          <li><strong>Pole changing techniques:</strong> For specific multispeed motors</li>
          <li><strong>Electronic speed controllers:</strong> For various motor types</li>
          <li><strong>Voltage control:</strong> Limited range, inefficient for induction motors</li>
        </ul>
        
        <h4 className="text-lg font-medium text-[#FFC900] mt-4">Benefits of VFDs:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Precise speed control across wide operating range</li>
          <li>Energy savings through optimized operation</li>
          <li>Soft starting and stopping capabilities built-in</li>
          <li>Protection features for motor and drive</li>
          <li>Ability to maintain torque at lower speeds</li>
          <li>Process optimization through programmable parameters</li>
        </ul>
      </div>
    ),
    detailedContent: (
      <div className="space-y-6">
        <h4 className="text-xl font-medium text-[#FFC900]">VFD Working Principle</h4>
        <p className="text-[#FFC900]/80">
          Variable Frequency Drives work in three main stages:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Rectification:</strong> Converts AC input to DC</li>
          <li><strong>DC Bus/Filtering:</strong> Smooths the DC voltage</li>
          <li><strong>Inversion:</strong> Converts DC back to variable frequency AC using pulse-width modulation (PWM)</li>
          <li>Speed formula: N = 120f/p (where N is speed in RPM, f is frequency in Hz, p is number of poles)</li>
        </ul>
        
        <h4 className="text-xl font-medium text-[#FFC900] mt-6">Star-Delta Starting Sequence</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Initial connection in star configuration, reducing voltage to 58% of line voltage</li>
          <li>After acceleration (typically 5-10 seconds), switching to delta connection</li>
          <li>Requires motor with all six winding ends accessible</li>
          <li>Typically uses timers and contactors for the switching sequence</li>
          <li>Modern star-delta starters often include overload protection in all phases</li>
        </ul>
        
        <h4 className="text-xl font-medium text-[#FFC900] mt-6">VFD Programming Parameters</h4>
        <p className="text-[#FFC900]/80">
          Common parameters that can be set in modern drives:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Acceleration and deceleration ramps</li>
          <li>Minimum and maximum frequency limits</li>
          <li>V/F pattern (voltage to frequency ratio)</li>
          <li>Motor nameplate data (current, voltage, RPM)</li>
          <li>Protection settings (overcurrent, overvoltage, etc.)</li>
          <li>PID control parameters for closed-loop applications</li>
          <li>Skip frequencies to avoid mechanical resonance</li>
        </ul>
        
        <h4 className="text-xl font-medium text-[#FFC900] mt-6">Harmonics and EMI Considerations</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>VFDs generate harmonics that can affect power quality</li>
          <li>Harmonic filters may be required for installations with multiple drives</li>
          <li>Electromagnetic interference (EMI) can affect nearby equipment</li>
          <li>Proper shielding and grounding is essential</li>
          <li>Motor cables should be kept separate from control and signal cables</li>
          <li>Special "inverter duty" motors recommended for VFD applications</li>
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
          <li><strong>Overload relays:</strong> Thermal or electronic protection against sustained overcurrent</li>
          <li><strong>Circuit breakers:</strong> With motor protection characteristics</li>
          <li><strong>Phase failure protection:</strong> Prevents single-phasing</li>
          <li><strong>Motor Protection Circuit Breakers (MPCBs):</strong> Combined short circuit and overload protection</li>
          <li><strong>Temperature monitoring:</strong> Thermistors or RTDs embedded in windings</li>
          <li><strong>Earth fault protection:</strong> Detects insulation failure</li>
        </ul>
        
        <h4 className="text-lg font-medium text-[#FFC900] mt-4">Protection Against:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Overheating:</strong> Due to overload, voltage imbalance, or cooling issues</li>
          <li><strong>Short circuits:</strong> Between phases or to ground</li>
          <li><strong>Phase loss:</strong> Operation on two phases can quickly destroy a motor</li>
          <li><strong>Phase imbalance:</strong> Causes excessive heating</li>
          <li><strong>Stalling:</strong> Locked rotor condition</li>
          <li><strong>Excessive starting:</strong> Too many starts in short period</li>
          <li><strong>Under/overvoltage:</strong> Operation outside rated voltage range</li>
        </ul>
        
        <h4 className="text-lg font-medium text-[#FFC900] mt-4">Motor Protection Relays:</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Modern electronic relays provide comprehensive protection</li>
          <li>Can monitor current, voltage, temperature, and other parameters</li>
          <li>Adjustable settings for trip levels and time delays</li>
          <li>Data logging and fault history capabilities</li>
          <li>Communication with building management systems</li>
          <li>Predictive maintenance features in advanced models</li>
        </ul>
      </div>
    ),
    detailedContent: (
      <div className="space-y-6">
        <h4 className="text-xl font-medium text-[#FFC900]">Overload Protection Principles</h4>
        <p className="text-[#FFC900]/80">
          Overload protection operates on different principles:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Thermal overload relays:</strong> Use bimetallic elements that bend when heated by current flow</li>
          <li><strong>Electronic overloads:</strong> Use current sensors and microprocessors to model thermal behavior</li>
          <li><strong>Trip classes:</strong> Define the trip time at 600% of full load current
            <ul className="list-disc pl-6 mt-2">
              <li>Class 10: Trips in 10 seconds or less</li>
              <li>Class 20: Trips in 20 seconds or less</li>
              <li>Class 30: Trips in 30 seconds or less</li>
            </ul>
          </li>
          <li>Selection based on application and starting time requirements</li>
        </ul>
        
        <h4 className="text-xl font-medium text-[#FFC900] mt-6">Motor Insulation Classes</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Class A:</strong> Maximum temperature 105°C, rarely used in modern motors</li>
          <li><strong>Class B:</strong> Maximum temperature 130°C</li>
          <li><strong>Class F:</strong> Maximum temperature 155°C, commonly used</li>
          <li><strong>Class H:</strong> Maximum temperature 180°C, used in high-temperature applications</li>
          <li>Motor life decreases significantly when operated above temperature rating</li>
          <li>Rule of thumb: 10°C increase in temperature halves insulation life</li>
        </ul>
        
        <h4 className="text-xl font-medium text-[#FFC900] mt-6">Protection Coordination</h4>
        <p className="text-[#FFC900]/80">
          Proper coordination between different protection devices is essential:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Short-circuit protection must act faster than overload protection for high faults</li>
          <li>Overload protection must allow for normal starting current without tripping</li>
          <li>Coordination with upstream protection devices to ensure selectivity</li>
          <li>Time-current curves are used to visualize and verify proper coordination</li>
          <li>Protection settings based on motor starting characteristics and duty cycle</li>
        </ul>
        
        <h4 className="text-xl font-medium text-[#FFC900] mt-6">Special Protection Considerations</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Critical motors:</strong> May require redundant protection systems</li>
          <li><strong>Hazardous locations:</strong> Explosion-proof enclosures and certified protection devices</li>
          <li><strong>High-inertia loads:</strong> Special consideration for extended starting times</li>
          <li><strong>VFD-driven motors:</strong> Protection typically integrated in drive but may require additional features</li>
          <li><strong>Submersible motors:</strong> Moisture detection and specialized protection</li>
          <li><strong>High-efficiency motors:</strong> May have different starting characteristics requiring adjusted protection settings</li>
        </ul>
      </div>
    )
  }
};

export default sections302;
