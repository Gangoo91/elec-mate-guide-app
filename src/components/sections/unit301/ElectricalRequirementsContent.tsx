
import React from 'react';

const ElectricalRequirementsContent = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Electrical Supply Requirements</h2>
      <p>
        Heat pump systems have specific electrical supply requirements that must be considered during installation and integration.
      </p>
      
      <h3 className="text-lg font-medium mt-4">Power Supply Specifications</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Most domestic heat pumps require a dedicated 230V single-phase supply</li>
        <li>Typical current ratings range from 13A to 32A depending on system capacity</li>
        <li>Three-phase supply (400V) may be required for larger systems (&gt;12kW)</li>
        <li>Supply cable sizing must account for starting currents (can be 2-3 times running current)</li>
        <li>Power supply must comply with BS 7671 requirements</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Circuit Protection</h3>
      <p>
        Appropriate circuit protection is essential for heat pump installations:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Type C or D MCBs recommended due to motor starting characteristics</li>
        <li>RCD protection (typically 30mA) required for outdoor units</li>
        <li>Surge protection devices (SPDs) recommended to protect sensitive electronics</li>
        <li>Overcurrent protection sized according to manufacturer's specifications</li>
        <li>Consideration for external disconnection means (isolators) near the outdoor unit</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Control Systems and Wiring</h2>
      <p>
        Heat pump control systems require careful consideration:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Low voltage control wiring (typically 12V or 24V) for thermostats and sensors</li>
        <li>Separation of power and control wiring to avoid interference</li>
        <li>Room thermostats and temperature sensors</li>
        <li>External temperature sensors for weather compensation</li>
        <li>Integration with building management systems (BMS)</li>
        <li>Smart control systems for remote operation and monitoring</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Additional Electrical Components</h3>
      <p>
        Various electrical components may be required for a complete heat pump installation:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Circulation pump power supply and controls</li>
        <li>Backup/supplementary heating element connections (where applicable)</li>
        <li>Zone valve controls for multi-zone systems</li>
        <li>Hot water cylinder immersion heater wiring</li>
        <li>Heat meters for monitoring and RHI (Renewable Heat Incentive) compliance</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Grid Connection and Integration</h2>
      <p>
        Considerations for grid connection and renewable integration:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>DNO (Distribution Network Operator) notification may be required for larger systems</li>
        <li>Electrical loading assessment for properties with limited supply capacity</li>
        <li>Time-of-use tariff compatibility for optimized operation</li>
        <li>Integration with solar PV systems for self-consumption optimization</li>
        <li>Battery storage integration for demand shifting</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Energy Monitoring Systems</h2>
      <p>
        Energy monitoring for heat pump systems:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Electrical consumption meters</li>
        <li>Heat meters for measuring thermal output</li>
        <li>Performance monitoring systems for COP/SPF calculation</li>
        <li>Data logging equipment for long-term performance analysis</li>
        <li>Integration with home energy management systems</li>
        <li>Remote monitoring capabilities for maintenance</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Testing and Commissioning</h3>
      <p>
        Electrical testing and commissioning requirements:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Initial verification testing to BS 7671 standards</li>
        <li>Insulation resistance testing</li>
        <li>Earth continuity testing</li>
        <li>RCD operation testing</li>
        <li>Polarity checks</li>
        <li>Functional testing of all controls and safety devices</li>
        <li>Documentation and certification requirements</li>
      </ul>
    </div>
  );
};

export default ElectricalRequirementsContent;
