
import React from 'react';

const DetailedEarthingContent = () => {
  return (
    <div className="space-y-6">
      <h4 className="text-xl font-medium text-[#FFC900]">Advanced Earthing Systems Design</h4>
      <p className="text-[#FFC900]/80">
        Designing safe and effective earthing systems requires consideration of several advanced factors:
      </p>
      
      <div className="bg-[#1a1d17] p-4 rounded-md">
        <p className="text-[#FFC900]/80">
          <strong>Earth Fault Loop Impedance Calculations:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
          <li>The total impedance of the earth fault loop (Z<sub>s</sub>) must be calculated for each circuit</li>
          <li>Z<sub>s</sub> = Z<sub>e</sub> + R<sub>1</sub> + R<sub>2</sub> where:
            <ul className="list-disc pl-6 mt-1">
              <li>Z<sub>e</sub> = External impedance (from the supply)</li>
              <li>R<sub>1</sub> = Phase conductor resistance</li>
              <li>R<sub>2</sub> = Protective conductor resistance</li>
            </ul>
          </li>
          <li>Maximum allowed Z<sub>s</sub> values depend on the protective device:
            <ul className="list-disc pl-6 mt-1">
              <li>For a 32A Type B MCB: 1.44Ω (for 0.4s disconnection time)</li>
              <li>For a 32A Type C MCB: 0.72Ω (for 0.4s disconnection time)</li>
              <li>For a 100A BS 88-2 fuse: 0.52Ω (for 0.4s disconnection time)</li>
            </ul>
          </li>
          <li>For TT systems, the resistance of the earth electrode significantly impacts Z<sub>s</sub></li>
        </ul>
      </div>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
        <p className="text-[#FFC900]/80">
          <strong>Earthing System Testing:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
          <li><strong>Earth electrode resistance measurement:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>Three-point method using two auxiliary electrodes</li>
              <li>Fall of potential method</li>
              <li>Slope method for areas with limited space</li>
              <li>Clamp-on earth tester for multiple earth paths</li>
            </ul>
          </li>
          <li><strong>Earth fault loop impedance testing:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>High-current test for accuracy</li>
              <li>Low-current test to avoid tripping RCDs</li>
              <li>Calculated method using R<sub>1</sub> + R<sub>2</sub> + Z<sub>e</sub></li>
            </ul>
          </li>
          <li><strong>Continuity testing:</strong>
            <ul className="list-disc pl-6 mt-1">
              <li>R<sub>1</sub> + R<sub>2</sub> measurement</li>
              <li>Protective conductor continuity tests</li>
              <li>Bonding conductor continuity tests</li>
            </ul>
          </li>
        </ul>
      </div>
      
      <h4 className="text-xl font-medium text-[#FFC900] mt-6">Special Location Earthing Requirements</h4>
      
      <div className="bg-[#1a1d17] p-4 rounded-md">
        <p className="text-[#FFC900]/80">
          <strong>Medical Locations:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
          <li>Group 1 medical locations: Basic protection measures</li>
          <li>Group 2 medical locations (critical care):
            <ul className="list-disc pl-6 mt-1">
              <li>Medical IT systems with insulation monitoring</li>
              <li>Supplementary equipotential bonding to limit touch voltage to 10mV</li>
              <li>Additional requirements for paths for protective conductor currents</li>
              <li>Special testing requirements with lower resistance thresholds</li>
            </ul>
          </li>
        </ul>
      </div>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
        <p className="text-[#FFC900]/80">
          <strong>Data Centers and Sensitive Electronic Equipment:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
          <li>Clean earth systems to minimize electrical noise</li>
          <li>Mesh equipotential bonding networks (MESH-BN)</li>
          <li>Common bonding network (CBN) for telecommunications</li>
          <li>Single point earthing for sensitive equipment</li>
          <li>Isolated ground systems where appropriate</li>
        </ul>
      </div>
      
      <div className="bg-[#1a1d17] p-4 rounded-md mt-4">
        <p className="text-[#FFC900]/80">
          <strong>Hazardous Areas:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
          <li>Enhanced equipotential bonding requirements</li>
          <li>Static electricity control measures</li>
          <li>Special requirements for process instrumentation earthing</li>
          <li>Separate earthing systems for intrinsically safe circuits</li>
          <li>Prevention of spark-inducing potential differences</li>
        </ul>
      </div>
      
      <h4 className="text-xl font-medium text-[#FFC900] mt-6">Lightning Protection Integration</h4>
      <p className="text-[#FFC900]/80">
        Integration of lightning protection with earthing systems:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
        <li><strong>Foundation earth electrodes:</strong> Using reinforcement bars in foundations</li>
        <li><strong>Ring earth electrodes:</strong> Surrounding buildings for lightning dispersal</li>
        <li><strong>Bonding between systems:</strong> Connection of lightning protection system to main earthing terminal</li>
        <li><strong>Separation distances:</strong> Maintaining adequate separation from electrical systems where required</li>
        <li><strong>Transient overvoltage protection:</strong> Coordinated SPD systems integrated with earthing</li>
      </ul>
      
      <h4 className="text-xl font-medium text-[#FFC900] mt-6">Soil Resistivity Considerations</h4>
      <p className="text-[#FFC900]/80">
        Soil resistivity significantly impacts earth electrode performance:
      </p>
      <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80">
        <li><strong>Measurement techniques:</strong> Wenner four-point method or Schlumberger method</li>
        <li><strong>Typical soil resistivity values:</strong>
          <ul className="list-disc pl-6 mt-1">
            <li>Marshy ground: 5-40 Ωm</li>
            <li>Clay: 20-200 Ωm</li>
            <li>Sandy clay: 200-500 Ωm</li>
            <li>Rock: 500-10,000 Ωm</li>
          </ul>
        </li>
        <li><strong>Soil treatment:</strong> Using bentonite, marconite or chemical compounds to reduce resistivity</li>
        <li><strong>Seasonal variations:</strong> Design must account for worst-case conditions (typically dry summer)</li>
        <li><strong>Electrode design optimization:</strong> Based on soil layering and characteristics</li>
      </ul>
    </div>
  );
};

export default DetailedEarthingContent;
