
import React from 'react';

const TestResults = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Understanding Electrical Test Results</h2>
      <p>
        Interpreting test results accurately is crucial for effective fault diagnosis. This requires understanding expected values, recognizing abnormal readings, and relating measurements to circuit behavior.
      </p>
      
      <h3 className="text-lg font-medium mt-4">Voltage Measurements</h3>
      <p>
        Understanding voltage test results:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li><strong>No voltage:</strong> Open circuit, blown fuse, open switch</li>
        <li><strong>Low voltage:</strong> High resistance connection, overloaded circuit</li>
        <li><strong>High voltage:</strong> Improper connections, transformer issues</li>
        <li><strong>Fluctuating voltage:</strong> Poor connections, intermittent faults</li>
        <li><strong>Voltage where none expected:</strong> Short circuit, incorrect wiring</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Current Measurements</h3>
      <p>
        Analyzing current readings for fault diagnosis:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li><strong>No current:</strong> Open circuit, disconnected load</li>
        <li><strong>Low current:</strong> Partial load failure, high resistance</li>
        <li><strong>High current:</strong> Short circuit, overload, damaged component</li>
        <li><strong>Fluctuating current:</strong> Loose connections, intermittent fault</li>
        <li><strong>Unbalanced current in 3-phase:</strong> Phase problems, uneven loading</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Resistance and Continuity Results</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Infinite resistance:</strong> Open circuit, disconnected component</li>
        <li><strong>Zero/very low resistance:</strong> Short circuit, bypassed component</li>
        <li><strong>Higher than expected:</strong> Deteriorated connections, damaged component</li>
        <li><strong>Lower than expected:</strong> Parallel paths, incorrect components</li>
        <li><strong>Unstable readings:</strong> Poor connections, temperature effects</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Insulation Resistance Test Results</h2>
      <p>
        Interpreting megger test readings:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Very high resistance (>100MΩ):</strong> Excellent insulation condition</li>
        <li><strong>Good resistance (1-100MΩ):</strong> Acceptable insulation integrity</li>
        <li><strong>Low resistance (&lt;1MΩ):</strong> Deteriorated insulation, potential hazard</li>
        <li><strong>Zero/near-zero:</strong> Insulation failure, direct short</li>
        <li><strong>Decreasing over time:</strong> Moisture ingress, tracking pathway developing</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Earth Fault Loop Impedance Results</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Within calculated limits:</strong> Circuit complies with regulations</li>
        <li><strong>Higher than maximum Zs:</strong> Protection will not operate within required time</li>
        <li><strong>Unstable readings:</strong> Poor connections in the earth path</li>
        <li><strong>Extremely high readings:</strong> Open circuit in protective conductor</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">RCD Test Results Interpretation</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Trips within time limits:</strong> RCD functioning correctly</li>
        <li><strong>Slow tripping:</strong> RCD mechanism deteriorating</li>
        <li><strong>No trip:</strong> Defective RCD, requires replacement</li>
        <li><strong>Trips at incorrect current:</strong> RCD sensitivity drifting, replace</li>
        <li><strong>Nuisance tripping:</strong> Possible leakage current in circuit</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Documentation of Test Results</h2>
      <p>
        Properly documenting test results is crucial:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Record all measurements with appropriate units</li>
        <li>Note the test conditions (load state, temperature, etc.)</li>
        <li>Compare with expected values from specifications</li>
        <li>Include equipment used and calibration dates</li>
        <li>Date and time of testing</li>
        <li>Create a baseline for future comparison</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Using Results for Diagnosis</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Compare readings to expected values from manuals/schematics</li>
        <li>Look for patterns across multiple measurements</li>
        <li>Consider relationship between different readings</li>
        <li>Follow logical troubleshooting sequence</li>
        <li>Verify results through secondary measurements</li>
        <li>Retest after repairs to confirm resolution</li>
      </ul>
    </div>
  );
};

export default TestResults;
