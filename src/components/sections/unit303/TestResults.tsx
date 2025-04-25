import React from 'react';

const TestResults = () => {
  return (
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
  );
};

export default TestResults;
