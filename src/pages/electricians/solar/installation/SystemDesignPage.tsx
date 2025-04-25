
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const SystemDesignPage = () => {
  const sections = [
    {
      title: "Array Layout",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Panel string configuration and sizing</li>
            <li>Mounting system selection and layout</li>
            <li>Optimizing panel orientation and tilt</li>
            <li>Inter-row spacing calculations</li>
          </ul>
        </div>
      )
    },
    {
      title: "Electrical Design",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Inverter sizing and selection</li>
            <li>DC circuit design and voltage considerations</li>
            <li>AC interconnection requirements</li>
            <li>Protection device specifications</li>
          </ul>
        </div>
      )
    },
    {
      title: "Performance Modeling",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Energy yield calculations</li>
            <li>Shading analysis impact</li>
            <li>Temperature derating factors</li>
            <li>System losses assessment</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="System Design"
      description="Comprehensive guide to designing solar PV systems for optimal performance."
      sections={sections}
    />
  );
};

export default SystemDesignPage;
