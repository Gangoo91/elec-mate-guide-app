
import React from 'react';

const WindIntegrationContent = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Electrical System Components</h2>
      <p>
        Small wind turbine systems require several electrical components for proper operation and grid integration.
      </p>
      
      <h3 className="text-lg font-medium mt-4">Generator Technologies</h3>
      <p>
        Different generator types used in small wind turbines:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Permanent magnet generators (PMG):</strong> Most common in small turbines, requires no external excitation</li>
        <li><strong>Induction generators:</strong> Used in some grid-connected systems, simple and robust</li>
        <li><strong>Direct drive vs. geared systems:</strong> Trade-offs between efficiency, weight, and maintenance</li>
        <li><strong>Variable speed vs. fixed speed:</strong> Impact on energy capture and grid compatibility</li>
        <li><strong>Single-phase vs. three-phase output:</strong> Depends on turbine size and grid connection</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Power Electronics</h3>
      <p>
        Power conditioning equipment required for wind systems:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Rectifiers:</strong> Convert AC from turbine to DC</li>
        <li><strong>Inverters:</strong> Convert DC to grid-compatible AC</li>
        <li><strong>Grid-tie inverters:</strong> Specialized for connecting to the utility grid</li>
        <li><strong>Maximum power point tracking (MPPT):</strong> Optimizes energy capture across wind speeds</li>
        <li><strong>Power quality management:</strong> Harmonic filtering and power factor correction</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Grid Connection Requirements</h2>
      <p>
        Requirements for connecting small wind systems to the electrical grid:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li><strong>G98/G99 compliance:</strong> Engineering recommendations for grid connection</li>
        <li><strong>DNO (Distribution Network Operator) notification/approval:</strong> Required for all grid-connected systems</li>
        <li><strong>Anti-islanding protection:</strong> Safety feature to prevent energizing during grid outages</li>
        <li><strong>Voltage and frequency monitoring:</strong> Ensures operation within grid parameters</li>
        <li><strong>Export limitation:</strong> May be required in areas with grid constraints</li>
        <li><strong>Metering requirements:</strong> For measuring generation and export</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Connection Types</h3>
      <p>
        Different approaches to grid connection:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Behind-the-meter:</strong> Connected to the consumer side of the utility meter</li>
        <li><strong>Direct grid connection:</strong> Connected directly to the distribution network</li>
        <li><strong>Off-grid systems:</strong> Standalone operation with battery storage</li>
        <li><strong>Hybrid systems:</strong> Combined with solar PV or other generation sources</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Electrical Protection Systems</h2>
      <p>
        Protection requirements for safe operation:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Overcurrent protection:</strong> Fuses or circuit breakers sized for system</li>
        <li><strong>Earth fault protection:</strong> RCD or equivalent protection</li>
        <li><strong>Lightning protection:</strong> Surge arrestors and proper earthing</li>
        <li><strong>Isolation devices:</strong> AC and DC disconnects for maintenance safety</li>
        <li><strong>Emergency shutdown systems:</strong> Manual and automatic protection</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Cabling and Earthing</h3>
      <p>
        Proper cable selection and installation:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Cable sizing based on current carrying capacity and voltage drop</li>
        <li>Distance considerations (turbines often located away from point of use)</li>
        <li>Armored cables for underground runs</li>
        <li>Proper earthing of tower and equipment</li>
        <li>Equipotential bonding requirements</li>
        <li>Cable protection from physical damage and UV exposure</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Control Systems</h2>
      <p>
        Electrical control systems for wind turbines:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Supervisory control:</strong> Overall system management</li>
        <li><strong>Monitoring systems:</strong> Performance data collection</li>
        <li><strong>Remote access capabilities:</strong> For diagnostics and control</li>
        <li><strong>User interfaces:</strong> Displays and control panels</li>
        <li><strong>Integration with building energy management systems</strong></li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Energy Storage Integration</h2>
      <p>
        Integration with battery systems:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Battery storage options for wind systems</li>
        <li>Charge controllers and battery management systems</li>
        <li>AC-coupled vs. DC-coupled storage systems</li>
        <li>Hybrid inverter capabilities</li>
        <li>Load management with storage systems</li>
        <li>Backup power functionality</li>
      </ul>
    </div>
  );
};

export default WindIntegrationContent;
