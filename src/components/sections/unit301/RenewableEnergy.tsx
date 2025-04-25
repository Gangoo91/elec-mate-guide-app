import React from 'react';

const RenewableEnergy = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Introduction to Renewable Energy</h2>
      <p>
        Renewable energy is derived from natural processes that are replenished at a rate that is equal to or faster than the rate at which they are consumed. The most common forms of renewable energy in electrical installations include solar, wind, hydroelectric, geothermal, and biomass.
      </p>
      
      <h3 className="text-lg font-medium mt-4">Solar Photovoltaic (PV) Systems</h3>
      <p>
        Solar PV systems convert sunlight directly into electricity using semiconducting materials. The key components include:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Solar panels/modules (typically made of silicon cells)</li>
        <li>Inverters (to convert DC to AC electricity)</li>
        <li>Mounting systems</li>
        <li>Cables and electrical protection devices</li>
        <li>Battery storage systems (optional)</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Wind Energy Systems</h3>
      <p>
        Wind turbines convert the kinetic energy of wind into mechanical power, which is then converted to electricity. Small-scale wind turbines can be integrated with electrical installations for residential or commercial buildings.
      </p>
      
      <h3 className="text-lg font-medium mt-4">Heat Pumps</h3>
      <p>
        Heat pumps extract heat energy from one place and transfer it to another. They can be categorized as:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Air source heat pumps (ASHP)</li>
        <li>Ground source heat pumps (GSHP)</li>
        <li>Water source heat pumps</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Biomass Systems</h3>
      <p>
        Biomass systems use organic materials to produce heat and electricity. Modern biomass heating systems include automated fuel feed systems and sophisticated combustion control.
      </p>
      
      <h2 className="text-xl font-semibold mt-6">Integration with Electrical Systems</h2>
      <p>
        When integrating renewable energy technologies with electrical installations, electricians must consider:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Grid connection requirements</li>
        <li>Inverter specifications and compatibility</li>
        <li>Protection systems</li>
        <li>Metering arrangements</li>
        <li>Energy storage options</li>
        <li>Load management systems</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Regulatory Requirements</h2>
      <p>
        All renewable energy installations must comply with:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>BS 7671 (IET Wiring Regulations)</li>
        <li>Microgeneration Certification Scheme (MCS) requirements</li>
        <li>Building Regulations</li>
        <li>Planning permission requirements</li>
        <li>Distribution Network Operator (DNO) requirements for grid connection</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Economic and Environmental Benefits</h2>
      <p>
        Installing renewable energy systems offers multiple benefits:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Reduced carbon emissions</li>
        <li>Lower energy bills</li>
        <li>Increased energy independence</li>
        <li>Potential revenue through feed-in tariffs or export tariffs</li>
        <li>Improved building energy performance ratings</li>
      </ul>
    </div>
  );
};

export default RenewableEnergy;
