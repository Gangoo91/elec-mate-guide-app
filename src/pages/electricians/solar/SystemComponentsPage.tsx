
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const SystemComponentsPage = () => {
  const sections = [
    {
      title: "Solar Panels",
      content: (
        <div className="space-y-4">
          <p>Solar panels (photovoltaic modules) are the primary components that convert sunlight into electricity. Key aspects include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Types of solar cells (monocrystalline, polycrystalline, thin-film)</li>
            <li>Panel efficiency and power ratings</li>
            <li>Temperature coefficients and performance factors</li>
            <li>Standard Test Conditions (STC) ratings</li>
          </ul>
        </div>
      )
    },
    {
      title: "Inverters",
      content: (
        <div className="space-y-4">
          <p>Inverters convert DC power from solar panels into AC power for use in buildings. Types include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>String inverters for larger installations</li>
            <li>Microinverters for individual panel optimization</li>
            <li>Power optimizers with string inverters</li>
            <li>Hybrid inverters for battery storage systems</li>
          </ul>
        </div>
      )
    },
    {
      title: "Mounting Systems",
      content: (
        <div className="space-y-4">
          <p>Mounting systems secure solar panels to roofs or ground-based structures:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Roof mounting brackets and rails</li>
            <li>Ground mount frameworks</li>
            <li>Ballasted mounting systems</li>
            <li>Building Integrated PV (BIPV) systems</li>
          </ul>
        </div>
      )
    },
    {
      title: "Electrical Components",
      content: (
        <div className="space-y-4">
          <p>Essential electrical components for system operation include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>DC isolators and circuit breakers</li>
            <li>AC isolators and circuit breakers</li>
            <li>Solar cables and connectors</li>
            <li>Generation meters and monitoring systems</li>
            <li>Surge protection devices</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Solar PV System Components"
      description="Detailed overview of the main components in a solar PV system installation."
      sections={sections}
    />
  );
};

export default SystemComponentsPage;
