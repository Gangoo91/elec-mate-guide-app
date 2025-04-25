import React from 'react';

const TestEquipment = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Essential Test Equipment for Electrical Fault Diagnosis</h2>
      <p>
        Proper selection and use of test equipment is fundamental to effective fault diagnosis in electrical installations. Each type of instrument has specific applications and limitations that must be understood.
      </p>
      
      <h3 className="text-lg font-medium mt-4">Digital Multimeters (DMM)</h3>
      <p>
        The most versatile and commonly used electrical testing tool:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Voltage measurement (AC and DC)</li>
        <li>Current measurement (AC and DC)</li>
        <li>Resistance measurement</li>
        <li>Continuity testing with audible indicator</li>
        <li>Advanced functions may include:
          <ul className="list-disc pl-6 mt-1">
            <li>Frequency measurement</li>
            <li>Capacitance testing</li>
            <li>Temperature measurement (with appropriate probe)</li>
            <li>Diode and transistor testing</li>
          </ul>
        </li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Clamp Meters</h3>
      <p>
        Specialized for current measurement without breaking the circuit:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Non-invasive current measurement</li>
        <li>AC current measurement using inductive principle</li>
        <li>DC current measurement using Hall effect (in some models)</li>
        <li>Often includes basic multimeter functions</li>
        <li>Various jaw sizes for different conductor diameters</li>
        <li>Flexible current probes available for difficult access locations</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Insulation Resistance Testers (Meggers)</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Measures high resistance values (MΩ range)</li>
        <li>Tests insulation quality of cables, motors, transformers</li>
        <li>Various test voltages (typically 250V, 500V, 1000V)</li>
        <li>Safety precautions:
          <ul className="list-disc pl-6 mt-1">
            <li>Always disconnect equipment from supply before testing</li>
            <li>Discharge capacitive circuits before and after testing</li>
            <li>Ensure no one is working on the equipment during testing</li>
          </ul>
        </li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Advanced Diagnostic Tools</h2>
      
      <h3 className="text-lg font-medium mt-4">Power Quality Analyzers</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Measures and records power quality parameters:
          <ul className="list-disc pl-6 mt-1">
            <li>Voltage fluctuations and dips</li>
            <li>Harmonics content</li>
            <li>Phase imbalance</li>
            <li>Power factor</li>
            <li>Frequency variations</li>
          </ul>
        </li>
        <li>Useful for intermittent faults related to power supply</li>
        <li>Long-term logging capabilities</li>
        <li>Advanced analysis software for detailed diagnosis</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Thermal Imaging Cameras</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Non-contact temperature measurement</li>
        <li>Visualizes heat patterns to identify:
          <ul className="list-disc pl-6 mt-1">
            <li>Overheating connections</li>
            <li>Overloaded circuits</li>
            <li>Imbalanced loads</li>
            <li>Motor bearing issues</li>
            <li>Transformer cooling problems</li>
          </ul>
        </li>
        <li>Different resolution options available</li>
        <li>Requires training to interpret images correctly</li>
        <li>Best used when equipment is under load</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Oscilloscopes</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Visual representation of voltage signals over time</li>
        <li>Useful for:
          <ul className="list-disc pl-6 mt-1">
            <li>Analyzing waveforms</li>
            <li>Detecting interference and noise</li>
            <li>Checking control signals</li>
            <li>Diagnosing VFD output issues</li>
            <li>Troubleshooting electronic circuits</li>
          </ul>
        </li>
        <li>Digital storage functionality for capturing intermittent events</li>
        <li>Advanced triggering options</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Specialized Testing Equipment</h2>
      
      <h3 className="text-lg font-medium mt-4">Motor Testing Equipment</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Motor rotation testers</li>
        <li>Winding resistance meters</li>
        <li>Motor circuit analyzers to check:
          <ul className="list-disc pl-6 mt-1">
            <li>Winding insulation</li>
            <li>Phase balance</li>
            <li>Rotor condition</li>
            <li>Connection quality</li>
          </ul>
        </li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Network and Signal Cable Testers</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Cable length measurement using TDR (Time Domain Reflectometry)</li>
        <li>Wire mapping for correct pinout verification</li>
        <li>Signal quality testing</li>
        <li>Cable identification with tone generators and probes</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Effective Use of Test Equipment</h2>
      
      <h3 className="text-lg font-medium mt-4">Safety Considerations</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Use appropriate PPE (Personal Protective Equipment)</li>
        <li>Select correct CAT rating for the environment:
          <ul className="list-disc pl-6 mt-1">
            <li>CAT I: Electronic equipment, low-energy circuits</li>
            <li>CAT II: Single-phase receptacle connected loads</li>
            <li>CAT III: Three-phase distribution, including single-phase commercial lighting</li>
            <li>CAT IV: Origin of installation, utility connection, main panels</li>
          </ul>
        </li>
        <li>Check test equipment condition before use</li>
        <li>Use proper measurement techniques (e.g., one-hand rule)</li>
        <li>Isolate circuits when appropriate</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Measurement Best Practices</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Select appropriate ranges and functions</li>
        <li>Understand instrument accuracy and limitations</li>
        <li>Ensure good contact with test points</li>
        <li>Be aware of circuit loading effects</li>
        <li>Consider the impact of electrical noise on readings</li>
        <li>Document readings systematically</li>
      </ul>
    </div>
  );
};

export default TestEquipment;
