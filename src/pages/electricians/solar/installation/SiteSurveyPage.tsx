
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const SiteSurveyPage = () => {
  const sections = [
    {
      title: "Site Documentation",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Create detailed site plans and measurements</li>
            <li>Document existing electrical service</li>
            <li>Photograph installation areas and access points</li>
            <li>Map utility connection points</li>
          </ul>
        </div>
      )
    },
    {
      title: "Access Assessment",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Evaluate roof access points</li>
            <li>Plan equipment staging areas</li>
            <li>Assess safety requirements</li>
            <li>Document access restrictions</li>
          </ul>
        </div>
      )
    },
    {
      title: "Installation Planning",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Plan array layout and spacing</li>
            <li>Identify cable routing paths</li>
            <li>Document mounting system requirements</li>
            <li>Plan safety equipment placement</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Site Survey"
      description="Comprehensive guide to conducting detailed site surveys for solar installations."
      sections={sections}
    />
  );
};

export default SiteSurveyPage;
