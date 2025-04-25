import React from 'react';
import { SectionData } from '../interfaces';

export const section1_4: SectionData = {
  title: "Measuring Electricity",
  description: "Learning how to accurately measure electrical quantities",
  content: (
    <>
      <h3 className="text-xl font-semibold mb-4">Electrical Measurement Tools</h3>
      <p className="mb-4">
        Accurate measurement is essential in electrical work. Different tools are used to measure various electrical quantities.
      </p>
      
      <h4 className="text-lg font-semibold mb-3">Common Measurement Tools</h4>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Multimeter: Measures voltage, current, resistance, and more</li>
        <li>Clamp meter: Measures current without breaking the circuit</li>
        <li>Oscilloscope: Visualizes electrical waveforms</li>
        <li>Test lamps: Simple tools for checking if circuits are live</li>
      </ul>
    </>
  ),
  detailedContent: (
    <>
      <h3 className="text-2xl font-bold mb-6">Complete Guide to Electrical Measurements</h3>
      
      <section className="mb-8">
        <h4 className="text-xl font-semibold mb-4">The Digital Multimeter</h4>
        <p className="mb-4">
          The digital multimeter (DMM) is the most versatile tool in an electrician's kit, capable of measuring multiple electrical parameters.
        </p>
        
        <div className="bg-[#22251e] p-6 rounded-lg mb-4">
          <h5 className="text-lg font-semibold mb-3">Key Multimeter Functions</h5>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Voltage measurement (V):</strong> AC and DC voltage ranges</li>
            <li><strong>Current measurement (A):</strong> AC and DC current capabilities</li>
            <li><strong>Resistance measurement (Ω):</strong> From ohms to megohms</li>
            <li><strong>Continuity test:</strong> Audible indication of a complete circuit</li>
            <li><strong>Diode test:</strong> Testing semiconductor components</li>
            <li><strong>Capacitance:</strong> Measuring capacitor values</li>
            <li><strong>Frequency:</strong> Measuring AC frequency</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h4 className="text-xl font-semibold mb-4">Safe Measurement Techniques</h4>
        <p className="mb-4">
          Safety is paramount when taking electrical measurements. Follow these guidelines to prevent accidents:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#22251e] p-6 rounded-lg">
            <h5 className="text-lg font-semibold mb-3">Voltage Measurement Safety</h5>
            <ul className="list-disc pl-6 space-y-1">
              <li>Always set meter to highest voltage range first</li>
              <li>Use insulated probes with finger guards</li>
              <li>Keep one hand in pocket when measuring high voltage</li>
              <li>Never measure voltage with probes in current terminals</li>
            </ul>
          </div>
          <div className="bg-[#22251e] p-6 rounded-lg">
            <h5 className="text-lg font-semibold mb-3">Current Measurement Safety</h5>
            <ul className="list-disc pl-6 space-y-1">
              <li>Break the circuit before connecting in series</li>
              <li>Start with highest range and work down</li>
              <li>Use clamp meter for high currents when possible</li>
              <li>Never measure current with probes in voltage terminals</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h4 className="text-xl font-semibold mb-4">Specialized Measurement Equipment</h4>
        <p className="mb-4">
          Beyond the multimeter, electricians use specialized tools for specific measurements:
        </p>
        
        <div className="bg-[#22251e] p-6 rounded-lg mb-4">
          <h5 className="text-lg font-semibold mb-3">Advanced Measurement Tools</h5>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Insulation resistance tester:</strong> Measures insulation quality (megger)</li>
            <li><strong>Earth resistance tester:</strong> Measures ground resistance</li>
            <li><strong>RCD testers:</strong> Tests response time of residual current devices</li>
            <li><strong>Loop impedance tester:</strong> Measures earth fault loop impedance</li>
            <li><strong>Phase rotation meter:</strong> Determines phase sequence in three-phase systems</li>
          </ul>
        </div>
      </section>

      <section>
        <h4 className="text-xl font-semibold mb-4">Reading and Recording Measurements</h4>
        <p>
          Proper documentation of electrical measurements is crucial:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Always note the unit of measurement (V, A, Ω, etc.)</li>
          <li>Record accuracy/precision (±0.5V, etc.)</li>
          <li>Note measurement conditions (load/no load, temperature)</li>
          <li>Compare with expected values to identify problems</li>
          <li>Follow proper testing sequences according to regulations</li>
        </ul>
      </section>
    </>
  )
};
