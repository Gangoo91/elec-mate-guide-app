
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const SiteAssessmentPage = () => {
  const sections = [
    {
      title: "Structural Assessment",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Evaluate roof condition and load-bearing capacity</li>
            <li>Check roof material compatibility</li>
            <li>Identify structural supports and rafters</li>
            <li>Document any existing damage or weak points</li>
          </ul>
        </div>
      )
    },
    {
      title: "Solar Resource Analysis",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Conduct detailed shading analysis</li>
            <li>Calculate sun path and exposure hours</li>
            <li>Measure roof orientation (azimuth)</li>
            <li>Determine optimal tilt angle</li>
          </ul>
        </div>
      )
    },
    {
      title: "Site Survey",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Measure available roof space</li>
            <li>Identify obstacles (vents, chimneys, etc.)</li>
            <li>Document access points and safety requirements</li>
            <li>Assess ground conditions for equipment staging</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Site Assessment"
      description="Comprehensive guide to conducting a thorough site assessment for solar PV installations."
      sections={sections}
    />
  );
};

export default SiteAssessmentPage;
