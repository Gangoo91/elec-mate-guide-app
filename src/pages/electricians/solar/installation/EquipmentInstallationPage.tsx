
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const EquipmentInstallationPage = () => {
  const sections = [
    {
      title: "Inverter Installation",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Location Selection
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Accessibility requirements</li>
                <li>Ventilation considerations</li>
                <li>Weather protection needs</li>
              </ul>
            </li>
            <li>Mounting Methods
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Wall mounting techniques</li>
                <li>Rack mounting options</li>
                <li>Clearance requirements</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Balance of System Components",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Disconnects Installation
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>AC and DC disconnect placement</li>
                <li>Weatherproof enclosure mounting</li>
                <li>Label requirements</li>
              </ul>
            </li>
            <li>Monitoring System Setup
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Communication device installation</li>
                <li>Sensor placement</li>
                <li>Network connection setup</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Equipment Installation Guide"
      description="Learn how to properly install inverters and other solar PV system components."
      sections={sections}
    />
  );
};

export default EquipmentInstallationPage;
