
import React from 'react';

const WindTurbineContent = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Introduction to Small-Scale Wind Turbines</h2>
      <p>
        Small-scale wind turbines are renewable energy systems designed for residential, agricultural, 
        or small commercial applications, typically with capacities ranging from 0.5kW to 50kW.
      </p>
      
      <h3 className="text-lg font-medium mt-4">Types of Small Wind Turbines</h3>
      <p>
        There are two main types of wind turbine configurations:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Horizontal-axis wind turbines (HAWT):</strong> Traditional propeller-type design with blades rotating around a horizontal axis</li>
        <li><strong>Vertical-axis wind turbines (VAWT):</strong> Blades rotate around a vertical axis, suitable for turbulent wind conditions</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Key Components</h3>
      <p>
        Small-scale wind turbines consist of several key components:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Rotor blades:</strong> Convert wind energy into rotational mechanical energy</li>
        <li><strong>Generator:</strong> Converts mechanical rotation into electrical energy</li>
        <li><strong>Nacelle:</strong> Housing that contains the gearbox, generator, and control systems</li>
        <li><strong>Tower:</strong> Structure that supports the turbine at appropriate height</li>
        <li><strong>Yaw system:</strong> Allows HAWT to face into the wind</li>
        <li><strong>Gearbox:</strong> Changes rotational speed to match generator requirements (some designs are direct-drive)</li>
        <li><strong>Inverter:</strong> Converts DC electricity to grid-compatible AC</li>
        <li><strong>Controller:</strong> Manages turbine operation, safety, and grid connection</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Wind Resource Assessment</h2>
      <p>
        Understanding the available wind resource is critical for system performance:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Average wind speed at proposed location (minimum 5m/s generally needed for viability)</li>
        <li>Wind speed distribution and prevailing direction</li>
        <li>Turbulence factors due to buildings, trees, and topography</li>
        <li>Seasonal variations in wind patterns</li>
        <li>Tower height considerations (higher towers typically access stronger, more consistent wind)</li>
        <li>Site assessment techniques (anemometers, wind maps, data analysis)</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Power Generation Principles</h3>
      <p>
        Wind power generation depends on several physical principles:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Power available in wind is proportional to the cube of wind speed</li>
        <li>Betz's Law limits maximum theoretical efficiency to 59.3%</li>
        <li>Typical small turbine efficiency ranges from 25-40%</li>
        <li>Power curve characteristics specific to turbine design</li>
        <li>Cut-in wind speed (typically 2.5-3.5 m/s)</li>
        <li>Rated wind speed (typically 10-12 m/s)</li>
        <li>Cut-out wind speed for safety (typically 25-30 m/s)</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Installation Considerations</h2>
      <p>
        Proper installation is crucial for performance and safety:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Foundation requirements based on soil conditions and turbine size</li>
        <li>Tower height optimization (minimum 9m above obstacles within 100m)</li>
        <li>Noise considerations and proximity to buildings</li>
        <li>Visual impact assessment</li>
        <li>Wildlife considerations (particularly birds and bats)</li>
        <li>Planning permission and building regulations</li>
        <li>Structural loading and vibration management</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Safety Systems</h3>
      <p>
        Wind turbines incorporate various safety systems:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Mechanical brakes for emergency shutdown</li>
        <li>Aerodynamic braking through blade pitch or furling</li>
        <li>Overspeed protection systems</li>
        <li>Lightning protection</li>
        <li>Emergency stop capabilities</li>
        <li>Vibration and temperature monitoring</li>
        <li>Automated shutdown during grid outages (anti-islanding)</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">MCS Certification and Standards</h2>
      <p>
        Quality and performance standards for small wind turbines:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Microgeneration Certification Scheme (MCS) requirements</li>
        <li>IEC 61400-2 (Design requirements for small wind turbines)</li>
        <li>Performance testing and power curve verification</li>
        <li>Noise emission testing</li>
        <li>Durability and safety certification</li>
        <li>MCS installer certification requirements</li>
      </ul>
    </div>
  );
};

export default WindTurbineContent;
