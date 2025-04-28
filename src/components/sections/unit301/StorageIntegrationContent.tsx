
import React from 'react';

const StorageIntegrationContent = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Benefits of Integrated Systems</h2>
      <p>
        Integrating energy storage with renewable energy sources provides numerous advantages for system performance and grid stability.
      </p>
      
      <h3 className="text-lg font-medium mt-4">Key Benefits</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Self-consumption optimization:</strong> Storing excess renewable generation for later use</li>
        <li><strong>Peak shaving:</strong> Reducing demand charges by using stored energy during peak periods</li>
        <li><strong>Time shifting:</strong> Moving energy use from high-cost to low-cost periods</li>
        <li><strong>Frequency regulation:</strong> Providing grid stability services</li>
        <li><strong>Backup power:</strong> Maintaining critical loads during outages</li>
        <li><strong>Smoother output:</strong> Reducing intermittency of renewable generation</li>
        <li><strong>Grid constraint management:</strong> Avoiding network reinforcement</li>
        <li><strong>Black start capability:</strong> Restarting systems after complete shutdown</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">System Architectures</h2>
      <p>
        Different approaches to integrating storage with renewables:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li><strong>AC-coupled systems:</strong> Separate inverters for storage and generation
          <ul className="list-disc pl-6 space-y-1 mt-1">
            <li>Flexibility to retrofit existing renewable systems</li>
            <li>Modular expansion capability</li>
            <li>Each component can operate independently</li>
            <li>Multiple conversion stages may reduce efficiency</li>
          </ul>
        </li>
        <li><strong>DC-coupled systems:</strong> Shared inverter for storage and generation
          <ul className="list-disc pl-6 space-y-1 mt-1">
            <li>Higher system efficiency with fewer conversion stages</li>
            <li>Lower overall equipment costs</li>
            <li>Capture energy that would be clipped by inverter limits</li>
            <li>Less flexibility for component selection and expansion</li>
          </ul>
        </li>
        <li><strong>Hybrid inverter systems:</strong> Single unit managing both functions
          <ul className="list-disc pl-6 space-y-1 mt-1">
            <li>Simplified installation</li>
            <li>Integrated controls</li>
            <li>Smaller footprint</li>
            <li>Single point of failure concern</li>
          </ul>
        </li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Integration with Solar PV</h3>
      <p>
        Specific considerations for solar PV + storage systems:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Sizing storage capacity relative to PV system size</li>
        <li>Charge/discharge cycles based on daily solar production</li>
        <li>Orientation optimization for self-consumption</li>
        <li>DC-coupled systems can harvest energy below inverter startup voltage</li>
        <li>Oversizing PV arrays relative to inverter capacity</li>
        <li>Smart export limiting functionality</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Integration with Wind Generation</h3>
      <p>
        Specific considerations for wind + storage systems:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Managing intermittent production patterns</li>
        <li>Ramp rate control for grid stability</li>
        <li>Forecasting integration for predictive charging/discharging</li>
        <li>Larger storage capacity often needed due to wind variability</li>
        <li>Frequency and voltage stabilization</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Control Strategies</h2>
      <p>
        Advanced control strategies for integrated systems:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li><strong>Self-consumption maximization:</strong> Store excess generation for later use</li>
        <li><strong>Time-of-use optimization:</strong> Charge during low-cost periods, discharge during high-cost periods</li>
        <li><strong>Peak demand reduction:</strong> Discharge during peak demand to reduce charges</li>
        <li><strong>Grid support functions:</strong> Voltage/frequency regulation</li>
        <li><strong>Forecast-based control:</strong> Using weather and load prediction</li>
        <li><strong>Machine learning algorithms:</strong> Adaptive optimization based on usage patterns</li>
        <li><strong>Grid signal response:</strong> Participating in demand response programs</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Electrical Requirements</h2>
      <p>
        Key electrical considerations for integrated systems:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Power flow management between multiple sources</li>
        <li>Protection coordination between components</li>
        <li>Appropriate earthing arrangements</li>
        <li>Switchgear and isolation requirements</li>
        <li>Power quality management</li>
        <li>Communication protocols between components</li>
        <li>Metering arrangements for generation, consumption, and export</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Regulatory Considerations</h3>
      <p>
        Compliance requirements for grid-connected systems:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>G98/G99 requirements for grid connection</li>
        <li>Export limitation requirements where applicable</li>
        <li>Safety standards for combined systems</li>
        <li>Smart Export Guarantee (SEG) eligibility</li>
        <li>Capacity Market participation requirements</li>
        <li>Building regulations compliance</li>
        <li>Fire safety regulations</li>
      </ul>
    </div>
  );
};

export default StorageIntegrationContent;
