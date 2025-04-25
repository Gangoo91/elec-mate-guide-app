
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const ElectricalComponentsPage = () => {
  const sections = [
    {
      title: "DC Components",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-3">
            <li className="space-y-2">
              <span className="font-medium">DC Isolators</span>
              <p>Required at array and inverter. Must be rated for DC operation and system voltage.</p>
            </li>
            <li className="space-y-2">
              <span className="font-medium">Solar Cables</span>
              <p>Double-insulated, UV-resistant cables. Typically 4-6mm² for string wiring.</p>
            </li>
            <li className="space-y-2">
              <span className="font-medium">MC4 Connectors</span>
              <p>Industry-standard connections. Must be properly rated and weather-resistant.</p>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "AC Components",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <span className="font-medium">AC Isolator</span>
              <p>Required between inverter and distribution board. Must be lockable.</p>
            </li>
            <li>
              <span className="font-medium">Generation Meter</span>
              <p>MID-approved meter for measuring system output.</p>
            </li>
            <li>
              <span className="font-medium">Distribution Board</span>
              <p>May need upgrade or additional ways for solar connection.</p>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Protection Devices",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <span className="font-medium">Surge Protection</span>
              <p>Type 1+2 SPDs for both DC and AC sides.</p>
            </li>
            <li>
              <span className="font-medium">Circuit Breakers</span>
              <p>Properly rated AC circuit breakers for system protection.</p>
            </li>
            <li>
              <span className="font-medium">RCD Protection</span>
              <p>Requirements depend on inverter type and system configuration.</p>
            </li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Electrical Components"
      description="Detailed overview of DC and AC components required for solar PV installations."
      sections={sections}
    />
  );
};

export default ElectricalComponentsPage;
