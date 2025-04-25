
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const PhysicalInstallationPage = () => {
  const sections = [
    {
      title: "Mounting System Installation",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Roof attachment methods</li>
            <li>Racking system assembly</li>
            <li>Waterproofing techniques</li>
            <li>Load distribution considerations</li>
          </ul>
        </div>
      )
    },
    {
      title: "Panel Installation",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Panel handling and placement</li>
            <li>Securing methods</li>
            <li>Inter-module connections</li>
            <li>Grounding requirements</li>
          </ul>
        </div>
      )
    },
    {
      title: "Equipment Installation",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Inverter mounting</li>
            <li>Disconnect placement</li>
            <li>Conduit routing</li>
            <li>Weather sealing methods</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Physical Installation"
      description="Step-by-step guide to installing solar PV system components."
      sections={sections}
    />
  );
};

export default PhysicalInstallationPage;
