
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const SystemDesignPage = () => {
  const sections = [
    {
      title: "Array Layout Planning",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Optimize panel placement for maximum efficiency</li>
            <li>Calculate string sizing and configurations</li>
            <li>Plan cable routes and penetration points</li>
            <li>Design mounting system layout</li>
          </ul>
        </div>
      )
    },
    {
      title: "Electrical Design",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Size inverters based on array capacity</li>
            <li>Calculate voltage drop and wire sizes</li>
            <li>Design earthing and lightning protection</li>
            <li>Specify overcurrent protection devices</li>
          </ul>
        </div>
      )
    },
    {
      title: "Performance Modeling",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Estimate annual energy production</li>
            <li>Model system losses and efficiencies</li>
            <li>Calculate return on investment</li>
            <li>Document performance expectations</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="System Design"
      description="Detailed guide to designing efficient and reliable solar PV systems."
      sections={sections}
    />
  );
};

export default SystemDesignPage;
