
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const ElectricalIntegrationPage = () => {
  const sections = [
    {
      title: "Grid Connection Requirements",
      content: (
        <div className="space-y-4">
          <p>Understanding the requirements for connecting to the electrical grid:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>DNO (Distribution Network Operator) notification and approval</li>
            <li>G99/G98 compliance requirements</li>
            <li>Export limitation options</li>
            <li>Metering arrangements</li>
          </ul>
        </div>
      )
    },
    {
      title: "AC Connection Point",
      content: (
        <div className="space-y-4">
          <p>Methods for connecting the solar PV system to the building's electrical system:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Consumer unit integration</li>
            <li>Dedicated solar distribution board</li>
            <li>Connection to main distribution board</li>
            <li>Supply-side connections</li>
          </ul>
        </div>
      )
    },
    {
      title: "Earthing and Bonding",
      content: (
        <div className="space-y-4">
          <p>Essential earthing requirements for solar PV installations:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>DC earthing arrangements</li>
            <li>AC earthing requirements</li>
            <li>Equipotential bonding</li>
            <li>Lightning protection considerations</li>
          </ul>
        </div>
      )
    },
    {
      title: "Protection Systems",
      content: (
        <div className="space-y-4">
          <p>Safety systems required for compliant installations:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Overcurrent protection</li>
            <li>RCD requirements</li>
            <li>Anti-islanding protection</li>
            <li>Surge protection devices</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Electrical Integration"
      description="Best practices for integrating solar PV systems with existing electrical installations."
      sections={sections}
    />
  );
};

export default ElectricalIntegrationPage;
