
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const SolarResourcePage = () => {
  const sections = [
    {
      title: "Shading Analysis",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Use solar pathfinder or digital shade analysis tools</li>
            <li>Document shade patterns throughout the year</li>
            <li>Identify temporary and permanent obstructions</li>
            <li>Calculate shading impact on system performance</li>
          </ul>
        </div>
      )
    },
    {
      title: "Solar Access",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Measure roof orientation (azimuth)</li>
            <li>Calculate optimal tilt angles</li>
            <li>Assess annual sun path</li>
            <li>Document peak sun hours</li>
          </ul>
        </div>
      )
    },
    {
      title: "Performance Estimation",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Calculate expected solar irradiance</li>
            <li>Estimate energy production potential</li>
            <li>Account for seasonal variations</li>
            <li>Document efficiency factors</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Solar Resource Analysis"
      description="Learn how to analyze and optimize solar resource potential for PV installations."
      sections={sections}
    />
  );
};

export default SolarResourcePage;
