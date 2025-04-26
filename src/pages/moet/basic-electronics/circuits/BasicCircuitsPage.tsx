
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const BasicCircuitsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/basic-electronics');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Basic Circuits"
          description="Understanding fundamental electronic circuit applications and operation"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Amplifier Circuits">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Signal Amplification Fundamentals</h3>
              <p className="text-[#FFC900]/80">
                Amplifier circuits increase the voltage, current, or power of an input signal.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>Transistor Amplifier Classes:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Class A: Conducts for the entire input cycle, highest linearity, lowest efficiency</li>
                    <li>Class B: Conducts for half of the input cycle, higher efficiency, crossover distortion</li>
                    <li>Class AB: Compromise between Class A and B, reduced crossover distortion</li>
                    <li>Class C: Conducts for less than half a cycle, highest efficiency, high distortion</li>
                  </ul>
                </li>
                <li><strong>Common Configurations:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Common Emitter: Voltage and current gain, 180° phase shift</li>
                    <li>Common Collector (Emitter Follower): Current gain, voltage gain ≈ 1, no phase shift</li>
                    <li>Common Base: Voltage gain, no current gain, useful for high-frequency</li>
                  </ul>
                </li>
                <li><strong>Operational Amplifier Circuits:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Inverting amplifier: Output is inverted relative to input</li>
                    <li>Non-inverting amplifier: Output is in phase with input</li>
                    <li>Differential amplifier: Amplifies the difference between two inputs</li>
                    <li>Summing amplifier: Combines multiple input signals</li>
                    <li>Integrator and differentiator circuits: Process signals over time</li>
                  </ul>
                </li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Power Supply Circuits">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Converting AC to DC Power</h3>
              <p className="text-[#FFC900]/80">
                Power supply circuits convert mains AC voltage to regulated DC voltage.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>Rectification:</strong> Converting AC to pulsating DC
                  <ul className="list-disc pl-6 mt-2">
                    <li>Half-wave rectifier: Uses single diode, less efficient</li>
                    <li>Full-wave rectifier: Uses center-tapped transformer and two diodes</li>
                    <li>Bridge rectifier: Four diodes arranged in a bridge, most common</li>
                    <li>Characteristics: Ripple frequency, efficiency, peak inverse voltage</li>
                  </ul>
                </li>
                <li><strong>Filtering:</strong> Smoothing pulsating DC
                  <ul className="list-disc pl-6 mt-2">
                    <li>Capacitor input filter: Simple and common</li>
                    <li>LC filter: Better smoothing for high-current applications</li>
                    <li>π-filter: Combination of capacitors and inductors for superior filtering</li>
                    <li>Ripple voltage: Measure of filter effectiveness</li>
                  </ul>
                </li>
                <li><strong>Voltage Regulation:</strong> Maintaining stable output voltage
                  <ul className="list-disc pl-6 mt-2">
                    <li>Linear regulators (78xx/79xx series): Simple, reliable, inefficient at high current</li>
                    <li>Zener diode regulators: Simple shunt regulation</li>
                    <li>Switching regulators: Buck, boost, buck-boost topologies</li>
                    <li>Specifications: Line regulation, load regulation, dropout voltage</li>
                  </ul>
                </li>
                <li><strong>Protection Circuits:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Overcurrent protection: Fuses, current limiting</li>
                    <li>Overvoltage protection: Crowbar circuits, transient suppressors</li>
                    <li>Thermal protection: Temperature sensors and shutdown</li>
                  </ul>
                </li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Digital Logic Circuits">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Basic Digital Components and Systems</h3>
              <p className="text-[#FFC900]/80">
                Digital circuits process binary data (0s and 1s) using logic gates.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>Basic Logic Gates:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>NOT gate (inverter): Outputs the opposite of input</li>
                    <li>AND gate: Output is HIGH only when all inputs are HIGH</li>
                    <li>OR gate: Output is HIGH when any input is HIGH</li>
                    <li>NAND gate: Combination of AND followed by NOT</li>
                    <li>NOR gate: Combination of OR followed by NOT</li>
                    <li>XOR gate: Output is HIGH when inputs are different</li>
                  </ul>
                </li>
                <li><strong>Combinational Circuits:</strong> Output depends only on current inputs
                  <ul className="list-disc pl-6 mt-2">
                    <li>Multiplexers (MUX): Selects one of many inputs</li>
                    <li>Demultiplexers (DEMUX): Routes one input to one of many outputs</li>
                    <li>Encoders and decoders: Convert between different data formats</li>
                    <li>Adders: Half adder, full adder, ripple-carry adder</li>
                  </ul>
                </li>
                <li><strong>Sequential Circuits:</strong> Output depends on inputs and current state
                  <ul className="list-disc pl-6 mt-2">
                    <li>Flip-flops: Basic memory elements
                      <ul className="list-disc pl-6 mt-2">
                        <li>SR (Set-Reset) flip-flop</li>
                        <li>D (Data) flip-flop</li>
                        <li>JK flip-flop</li>
                        <li>T (Toggle) flip-flop</li>
                      </ul>
                    </li>
                    <li>Counters: Asynchronous and synchronous</li>
                    <li>Shift registers: Serial-in-serial-out, parallel-in-parallel-out</li>
                  </ul>
                </li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Timer Circuits">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Generating and Measuring Time Intervals</h3>
              <p className="text-[#FFC900]/80">
                Timer circuits generate precise time delays or oscillations.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>555 Timer IC:</strong> Versatile timer integrated circuit
                  <ul className="list-disc pl-6 mt-2">
                    <li>Monostable mode: One-shot timer with adjustable duration</li>
                    <li>Astable mode: Free-running oscillator with adjustable frequency</li>
                    <li>Bistable mode: Flip-flop operation with set and reset inputs</li>
                    <li>Applications: LED flashers, pulse generators, tone generators</li>
                  </ul>
                </li>
                <li><strong>RC Timing Circuits:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Time constant (τ = RC): Determines timing period</li>
                    <li>Charging and discharging characteristics</li>
                    <li>Voltage thresholds for triggering</li>
                  </ul>
                </li>
                <li><strong>Crystal Oscillator Circuits:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Highly stable frequency generation</li>
                    <li>Used in clocks, microcontrollers, and communication systems</li>
                  </ul>
                </li>
                <li><strong>Phase-Locked Loop (PLL) Circuits:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Frequency synthesis and clock recovery</li>
                    <li>Components: Phase detector, low-pass filter, VCO</li>
                    <li>Applications: FM demodulation, clock synchronization</li>
                  </ul>
                </li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default BasicCircuitsPage;
