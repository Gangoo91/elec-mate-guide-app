
import React from 'react';

const TestEquipment = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Introduction to Test Equipment</h2>
      <p>
        Selecting and using the right test equipment is essential for effective electrical fault diagnosis. Different equipment types serve various testing purposes.
      </p>
      
      <h3 className="text-lg font-medium mt-4">Digital Multimeters (DMM)</h3>
      <p>
        The most versatile and commonly used test equipment:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Measures voltage (AC and DC)</li>
        <li>Current measurements</li>
        <li>Resistance measurements</li>
        <li>Continuity testing</li>
        <li>Diode and transistor testing</li>
        <li>Capacitance and frequency on advanced models</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Insulation Resistance Testers (Meggers)</h3>
      <p>
        Used to test the integrity of electrical insulation:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Tests at higher voltages than standard multimeters (250V-1000V+)</li>
        <li>Measures insulation resistance in megohms</li>
        <li>Identifies insulation breakdown</li>
        <li>Essential for safety testing</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Advanced Test Equipment</h2>
      
      <h3 className="text-lg font-medium mt-4">Loop Impedance Testers</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Measures earth fault loop impedance</li>
        <li>Verifies adequacy of protective measures</li>
        <li>Confirms circuit protection devices will operate within required times</li>
        <li>Essential for compliance with BS 7671</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">RCD Testers</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Tests response time of Residual Current Devices</li>
        <li>Verifies RCD trips at correct current levels</li>
        <li>Tests both standard and time-delayed RCDs</li>
        <li>Can perform ramp tests to determine actual tripping current</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Oscilloscopes</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Visualizes electrical waveforms</li>
        <li>Ideal for troubleshooting intermittent faults</li>
        <li>Helps identify electrical noise and interference</li>
        <li>Useful for analyzing electronic control circuits</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Safety When Using Test Equipment</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Always use proper PPE (Personal Protective Equipment)</li>
        <li>Use correctly rated equipment for the voltage being tested</li>
        <li>Inspect test leads and equipment before use</li>
        <li>Use test equipment with valid calibration certificates</li>
        <li>Follow safe isolation procedures before testing</li>
        <li>Never defeat safety features on test equipment</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Choosing the Right Test Equipment</h2>
      <p>
        Selecting appropriate test equipment depends on:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>The type of fault being investigated</li>
        <li>The circuit or system being tested</li>
        <li>The level of detail required in the measurements</li>
        <li>Environmental conditions (indoors, outdoors, hazardous areas)</li>
        <li>Safety considerations (voltage levels, access issues)</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Test Equipment Maintenance</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Regular calibration to ensure accuracy (typically annual)</li>
        <li>Periodic inspection of test leads and probes</li>
        <li>Battery replacement and charging</li>
        <li>Cleaning of connectors and contacts</li>
        <li>Proper storage in protective cases</li>
        <li>Software/firmware updates for digital equipment</li>
      </ul>
    </div>
  );
};

export default TestEquipment;
