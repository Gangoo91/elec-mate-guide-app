
import React from 'react';

const BatteryStorageContent = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Introduction to Battery Storage</h2>
      <p>
        Battery storage systems enable the storage of electrical energy for use at a later time, providing flexibility, 
        resilience, and improved integration of renewable energy sources.
      </p>
      
      <h3 className="text-lg font-medium mt-4">Key Battery Technologies</h3>
      <p>
        There are several battery technologies used in electrical energy storage:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Lithium-ion (Li-ion):</strong> Most common in modern systems
          <ul className="list-disc pl-6 space-y-1 mt-1">
            <li>Lithium Nickel Manganese Cobalt Oxide (NMC)</li>
            <li>Lithium Iron Phosphate (LFP)</li>
            <li>Lithium Titanate (LTO)</li>
            <li>High energy density, efficiency, and cycle life</li>
          </ul>
        </li>
        <li><strong>Lead-acid:</strong> Established technology
          <ul className="list-disc pl-6 space-y-1 mt-1">
            <li>Flooded lead-acid</li>
            <li>Absorbed Glass Mat (AGM)</li>
            <li>Gel</li>
            <li>Lower cost but shorter lifespan</li>
          </ul>
        </li>
        <li><strong>Flow batteries:</strong> Emerging technology
          <ul className="list-disc pl-6 space-y-1 mt-1">
            <li>Vanadium redox flow</li>
            <li>Zinc-bromine flow</li>
            <li>Scalable capacity and long duration</li>
          </ul>
        </li>
        <li><strong>Sodium-based:</strong> Alternative to lithium
          <ul className="list-disc pl-6 space-y-1 mt-1">
            <li>Sodium-sulfur (NaS)</li>
            <li>Sodium-ion</li>
            <li>High temperature operation</li>
          </ul>
        </li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Battery Performance Characteristics</h2>
      <p>
        Key performance metrics for battery systems:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Energy capacity:</strong> Measured in kilowatt-hours (kWh)</li>
        <li><strong>Power rating:</strong> Measured in kilowatts (kW)</li>
        <li><strong>Round-trip efficiency:</strong> Typically 75-95% depending on technology</li>
        <li><strong>Cycle life:</strong> Number of charge/discharge cycles before significant degradation</li>
        <li><strong>Depth of discharge (DoD):</strong> Percentage of capacity used in normal operation</li>
        <li><strong>Self-discharge rate:</strong> Rate at which stored energy is lost when idle</li>
        <li><strong>Response time:</strong> How quickly the system can respond to demand</li>
        <li><strong>Operating temperature range:</strong> Affects performance and safety</li>
        <li><strong>Calendar life:</strong> Maximum lifespan regardless of usage</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Battery Management Systems</h3>
      <p>
        Battery Management Systems (BMS) are essential for safe and efficient operation:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Cell voltage monitoring and balancing</li>
        <li>Temperature monitoring and thermal management</li>
        <li>State of charge (SoC) estimation</li>
        <li>State of health (SoH) monitoring</li>
        <li>Charge and discharge control</li>
        <li>Protection against overcharge, over-discharge, and short circuit</li>
        <li>Communication with external systems</li>
        <li>Data logging and performance analysis</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">System Components</h2>
      <p>
        A complete battery storage system includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Battery modules/packs:</strong> The energy storage elements</li>
        <li><strong>Battery management system (BMS):</strong> Controls and protects the battery</li>
        <li><strong>Inverter/charger:</strong> Converts DC to AC (and vice versa)</li>
        <li><strong>Energy management system (EMS):</strong> Controls system operation</li>
        <li><strong>Monitoring and control interfaces:</strong> For user interaction</li>
        <li><strong>Protection devices:</strong> Circuit breakers, fuses, disconnects</li>
        <li><strong>Thermal management system:</strong> Heating/cooling for optimal operation</li>
        <li><strong>Housing and enclosures:</strong> Environmental protection</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Installation Considerations</h3>
      <p>
        Key considerations for battery system installation:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Location and space requirements</li>
        <li>Ventilation and cooling needs</li>
        <li>Fire safety measures</li>
        <li>Structural loading (batteries are heavy)</li>
        <li>Access for maintenance</li>
        <li>Environmental conditions (temperature, humidity)</li>
        <li>Proximity to electrical distribution equipment</li>
        <li>Noise considerations (from cooling systems)</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Safety Considerations</h2>
      <p>
        Safety is paramount in battery storage systems:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Thermal runaway prevention and mitigation</li>
        <li>Electrical isolation and protection</li>
        <li>Emergency shutdown systems</li>
        <li>Fire detection and suppression</li>
        <li>Proper ventilation for gas emissions</li>
        <li>Environmental containment for leaks</li>
        <li>Appropriate warning signage</li>
        <li>Emergency response planning</li>
      </ul>
    </div>
  );
};

export default BatteryStorageContent;
