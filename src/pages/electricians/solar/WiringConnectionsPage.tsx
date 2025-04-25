
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const WiringConnectionsPage = () => {
  const sections = [
    {
      title: "DC Wiring Fundamentals",
      content: (
        <div className="space-y-4">
          <p>Best practices for DC wiring in solar PV systems:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Solar cable specifications and types</li>
            <li>Cable sizing calculations</li>
            <li>MC4 connector standards</li>
            <li>String configuration principles</li>
            <li>Polarity verification methods</li>
          </ul>
        </div>
      )
    },
    {
      title: "Cable Management",
      content: (
        <div className="space-y-4">
          <p>Proper methods for managing cables in PV installations:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>UV-resistant cable ties and clips</li>
            <li>Conduit selection and installation</li>
            <li>Cable routing best practices</li>
            <li>Weather sealing techniques</li>
            <li>Penetration methods for roofs and walls</li>
          </ul>
        </div>
      )
    },
    {
      title: "AC Wiring Methods",
      content: (
        <div className="space-y-4">
          <p>Standards for AC wiring from the inverter to grid connection:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cable type selection</li>
            <li>Current carrying capacity calculation</li>
            <li>Voltage drop considerations</li>
            <li>Isolation and protection requirements</li>
            <li>Terminal connections best practices</li>
          </ul>
        </div>
      )
    },
    {
      title: "Connection Techniques",
      content: (
        <div className="space-y-4">
          <p>Proper methods for making reliable electrical connections:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>MC4 connector assembly</li>
            <li>Crimping techniques</li>
            <li>Terminal block connections</li>
            <li>Torque requirements</li>
            <li>Weatherproof junction boxes</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Wiring and Connections"
      description="Comprehensive guide to wiring methods and connection techniques for solar PV installations."
      sections={sections}
    />
  );
};

export default WiringConnectionsPage;
