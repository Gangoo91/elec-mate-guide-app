
import React from 'react';

const DetailedContent = () => {
  return (
    <div className="space-y-6">
      <h4 className="text-xl font-medium text-[#FFC900]">Practical Cable Sizing Process</h4>
      <p className="text-[#FFC900]/80">
        A complete cable sizing procedure involves the following steps:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-[#FFC900]/80">
        <li>Determine the design current (I<sub>b</sub>) based on load characteristics</li>
        <li>Select a protective device with suitable rating (I<sub>n</sub> ≥ I<sub>b</sub>)</li>
        <li>Determine the minimum current required for the cable (I<sub>z</sub> ≥ I<sub>2</sub>)</li>
        <li>Select a cable size with tabulated current-carrying capacity</li>
        <li>Apply all relevant correction factors</li>
        <li>Verify that corrected capacity exceeds I<sub>2</sub></li>
        <li>Check voltage drop at design current</li>
        <li>Verify earth fault loop impedance for required disconnection time</li>
        <li>Verify short-circuit protection using the adiabatic equation</li>
      </ol>
      
      <h4 className="text-xl font-medium text-[#FFC900] mt-6">Special Considerations</h4>
      <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
        <li><strong>Harmonics:</strong> Apply derating for circuits supplying harmonic-generating equipment</li>
        <li><strong>Motor circuits:</strong> Account for starting currents (typically 6-8 times full load current)</li>
        <li><strong>Underground cables:</strong> Consider soil thermal resistivity and drying out</li>
        <li><strong>Parallel cables:</strong> Ensure equal current sharing through identical paths</li>
      </ul>
      
      <h4 className="text-xl font-medium text-[#FFC900] mt-6">Example Calculation</h4>
      <div className="bg-[#1a1d17] p-4 rounded-md">
        <p className="text-[#FFC900]/80">
          For a 12kW electric shower (230V, single-phase):
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80 mt-2">
          <li>Design current: I<sub>b</sub> = 12000W ÷ 230V = 52.2A</li>
          <li>Select 63A MCB (Type B): I<sub>n</sub> = 63A, I<sub>2</sub> = 1.45 × 63A = 91.4A</li>
          <li>Cable route: 18m, clipped direct, ambient temperature 30°C</li>
          <li>Correction factors: C<sub>a</sub> = 0.94 (temperature), C<sub>g</sub> = 1.0 (no grouping)</li>
          <li>Required current-carrying capacity: 91.4A ÷ (0.94 × 1.0) = 97.2A</li>
          <li>Select 16mm² cable with tabulated capacity of 100A</li>
          <li>Voltage drop calculation: 52.2A × 18m × 2.8mV/A/m ÷ 1000 = 2.63V (1.1%, within limit)</li>
        </ul>
      </div>
    </div>
  );
};

export default DetailedContent;
