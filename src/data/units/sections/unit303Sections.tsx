
import React from 'react';

interface SectionData {
  title: string;
  description: string;
  content: React.ReactNode;
}

export const sections303: Record<string, SectionData> = {
  "1.1": {
    title: "Systematic Troubleshooting Methods",
    description: "Learning structured approaches to electrical fault diagnosis",
    content: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Introduction to Systematic Troubleshooting</h2>
        <p>
          Systematic troubleshooting is a methodical approach to identifying and resolving electrical faults. It reduces diagnosis time and increases accuracy by following a structured process rather than random testing.
        </p>
        
        <h3 className="text-lg font-medium mt-4">The Six-Step Troubleshooting Process</h3>
        <p>
          An effective troubleshooting methodology follows these steps:
        </p>
        <ol className="list-decimal pl-6 space-y-2 mt-2">
          <li><strong>Identify the problem</strong> - Gather information about symptoms and when they occur</li>
          <li><strong>Analyze the system</strong> - Review schematics and identify possible failure points</li>
          <li><strong>Isolate the fault</strong> - Narrow down to a specific circuit or component</li>
          <li><strong>Determine the cause</strong> - Identify the specific fault through testing</li>
          <li><strong>Correct the fault</strong> - Repair or replace the faulty component</li>
          <li><strong>Verify the solution</strong> - Test to ensure the fault is resolved and document the repair</li>
        </ol>
        
        <h3 className="text-lg font-medium mt-4">Gathering Information</h3>
        <p>
          Before beginning physical tests, collect important information:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>When did the problem start?</li>
          <li>Has anything changed in the system recently?</li>
          <li>Are there any error codes or unusual indicators?</li>
          <li>Is the fault intermittent or constant?</li>
          <li>Have any maintenance activities been performed recently?</li>
          <li>Are there patterns to when the fault occurs?</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Half-Split Method</h2>
        <p>
          The half-split method is an efficient troubleshooting technique:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Test at the midpoint of a circuit or system</li>
          <li>Based on results, focus on either the first or second half</li>
          <li>Continue dividing the faulty section in half until the fault is located</li>
          <li>This approach reduces diagnostic time logarithmically</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Component Substitution Method</h2>
        <p>
          When appropriate, component substitution can identify faults:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Replace suspected components one at a time with known good ones</li>
          <li>Test after each replacement to identify if the fault is resolved</li>
          <li>Useful for simple components or when testing is difficult</li>
          <li>Can be inefficient for complex systems or when multiple faults exist</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Signal Tracing Method</h2>
        <p>
          Signal tracing follows the path of electrical signals through a system:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Start at the input and follow the signal through each stage</li>
          <li>Check expected values at various test points</li>
          <li>Identify where the actual values deviate from expected values</li>
          <li>Particularly useful for complex electronic circuits</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Symptom-to-Cause Charts</h2>
        <p>
          Using experience and documentation to speed up diagnosis:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Reference manufacturer&apos;s troubleshooting guides</li>
          <li>Use fault code lookups when available</li>
          <li>Develop and maintain your own symptom-to-cause reference</li>
          <li>Share knowledge with colleagues to build a knowledge base</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Documentation and Record-Keeping</h2>
        <p>
          Maintaining records of faults and solutions improves future troubleshooting:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Record symptoms, test results, and solutions</li>
          <li>Document patterns of recurring faults</li>
          <li>Update system schematics with any modifications</li>
          <li>Track component failure rates to identify systemic issues</li>
          <li>Share findings with manufacturers when appropriate</li>
        </ul>
      </div>
    ),
  },
  "1.2": {
    title: "Using Test Equipment Effectively",
    description: "Learning to select and use appropriate test equipment for fault diagnosis",
    content: (
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
    ),
  },
  "1.3": {
    title: "Interpreting Test Results",
    description: "Understanding how to analyze and interpret electrical test results",
    content: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Fundamentals of Test Result Interpretation</h2>
        <p>
          Accurately interpreting test results is a critical skill for effective fault diagnosis. It requires understanding what "normal" results should be and recognizing patterns that indicate specific types of faults.
        </p>
        
        <h3 className="text-lg font-medium mt-4">Establishing Baselines</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Reference documentation:
            <ul className="list-disc pl-6 mt-1">
              <li>Manufacturer specifications</li>
              <li>Installation records</li>
              <li>Previous test results</li>
              <li>Industry standards and norms</li>
            </ul>
          </li>
          <li>Taking comparative measurements on known good equipment</li>
          <li>Understanding normal operating parameters</li>
          <li>Recognizing acceptable tolerance ranges</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Common Voltage Test Interpretations</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>No voltage present:
            <ul className="list-disc pl-6 mt-1">
              <li>Open circuit condition</li>
              <li>Blown fuse or tripped breaker</li>
              <li>Failed component</li>
              <li>Incorrect switching</li>
            </ul>
          </li>
          <li>Low voltage:
            <ul className="list-disc pl-6 mt-1">
              <li>Voltage drop due to high resistance</li>
              <li>Overloaded circuit</li>
              <li>Supply issues</li>
              <li>High impedance fault</li>
            </ul>
          </li>
          <li>High voltage:
            <ul className="list-disc pl-6 mt-1">
              <li>Incorrect supply</li>
              <li>Regulation problems</li>
              <li>Interference or harmonics</li>
            </ul>
          </li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Resistance and Continuity Results</h2>
        
        <h3 className="text-lg font-medium mt-4">Circuit Continuity</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Zero or very low resistance (good):
            <ul className="list-disc pl-6 mt-1">
              <li>Complete circuit path</li>
              <li>Good connections</li>
              <li>Functioning conductor</li>
            </ul>
          </li>
          <li>High resistance (potential issue):
            <ul className="list-disc pl-6 mt-1">
              <li>Loose connection</li>
              <li>Corrosion</li>
              <li>Partially broken conductor</li>
              <li>Improper termination</li>
            </ul>
          </li>
          <li>Infinite resistance (definite issue):
            <ul className="list-disc pl-6 mt-1">
              <li>Open circuit</li>
              <li>Broken conductor</li>
              <li>Failed component</li>
              <li>Incorrectly wired circuit</li>
            </ul>
          </li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Insulation Resistance</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>High values (good):
            <ul className="list-disc pl-6 mt-1">
              <li>Typically &gt;1MΩ (minimum value depends on system voltage)</li>
              <li>Indicates good insulation integrity</li>
            </ul>
          </li>
          <li>Medium values (caution):
            <ul className="list-disc pl-6 mt-1">
              <li>Degrading insulation</li>
              <li>Moisture ingress</li>
              <li>Contamination</li>
              <li>Aging equipment</li>
            </ul>
          </li>
          <li>Low values (fail):
            <ul className="list-disc pl-6 mt-1">
              <li>Insulation breakdown</li>
              <li>Earth fault condition</li>
              <li>Short circuit between phases</li>
            </ul>
          </li>
          <li>Interpreting time-resistance results:
            <ul className="list-disc pl-6 mt-1">
              <li>Increasing over time: Capacitive effect (normal)</li>
              <li>Decreasing over time: Moisture or contamination</li>
            </ul>
          </li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Current Measurements</h2>
        
        <h3 className="text-lg font-medium mt-4">Load Current Analysis</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Normal current:
            <ul className="list-disc pl-6 mt-1">
              <li>Within rated values</li>
              <li>Balanced between phases (three-phase)</li>
              <li>Appropriate for connected load</li>
            </ul>
          </li>
          <li>High current:
            <ul className="list-disc pl-6 mt-1">
              <li>Overloaded circuit</li>
              <li>Seized mechanical equipment</li>
              <li>Short circuit condition</li>
              <li>Earth fault</li>
            </ul>
          </li>
          <li>Low current:
            <ul className="list-disc pl-6 mt-1">
              <li>Partially operating equipment</li>
              <li>Broken components</li>
              <li>Incorrect supply voltage</li>
              <li>Control system malfunction</li>
            </ul>
          </li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Phase Imbalance</h3>
        <p>
          In three-phase systems, current imbalance can indicate:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Single-phase fault</li>
          <li>Uneven load distribution</li>
          <li>Power supply issues</li>
          <li>Motor winding problems</li>
          <li>Connection issues</li>
          <li>Normal imbalance is typically less than 10%</li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Advanced Measurement Interpretation</h2>
        
        <h3 className="text-lg font-medium mt-4">Power Factor Results</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Low power factor (below 0.85):
            <ul className="list-disc pl-6 mt-1">
              <li>Lightly loaded induction motors</li>
              <li>Transformers with light loads</li>
              <li>Fluorescent lighting without PFC</li>
            </ul>
          </li>
          <li>Very low power factor:
            <ul className="list-disc pl-6 mt-1">
              <li>Motor problems</li>
              <li>Failed power factor correction capacitors</li>
              <li>Phase issues</li>
            </ul>
          </li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Harmonic Analysis</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>High 3rd harmonics:
            <ul className="list-disc pl-6 mt-1">
              <li>Single-phase non-linear loads</li>
              <li>Switch-mode power supplies</li>
              <li>LED lighting</li>
            </ul>
          </li>
          <li>High 5th and 7th harmonics:
            <ul className="list-disc pl-6 mt-1">
              <li>Six-pulse VFDs</li>
              <li>Three-phase rectifiers</li>
            </ul>
          </li>
          <li>Harmonics causing:
            <ul className="list-disc pl-6 mt-1">
              <li>Overheating in neutral conductors</li>
              <li>Transformer issues</li>
              <li>Nuisance tripping</li>
              <li>Electronic equipment malfunction</li>
            </ul>
          </li>
        </ul>
        
        <h2 className="text-xl font-semibold mt-6">Documentation and Analysis</h2>
        
        <h3 className="text-lg font-medium mt-4">Systematic Recording</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Document all test points and results</li>
          <li>Record date, time, and test conditions</li>
          <li>Note equipment settings and calibration status</li>
          <li>Take photographs where helpful</li>
          <li>Use standard formats for consistency</li>
        </ul>
        
        <h3 className="text-lg font-medium mt-4">Trend Analysis</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Compare current readings with historical data</li>
          <li>Identify deteriorating conditions</li>
          <li>Predict potential failures before they occur</li>
          <li>Recognize normal variations versus abnormal changes</li>
          <li>Use condition monitoring principles for predictive maintenance</li>
        </ul>
      </div>
    ),
  },
};
