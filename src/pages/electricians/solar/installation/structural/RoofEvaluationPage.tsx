
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const RoofEvaluationPage = () => {
  const sections = [
    {
      title: "Visual Inspection",
      content: (
        <div className="space-y-4">
          <p>A thorough visual inspection is the first step in evaluating a roof for solar installation. Key aspects include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Examining roof material condition
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Check for cracked, broken, or missing tiles/shingles</li>
                <li>Identify areas of wear or weathering</li>
                <li>Assess overall material integrity</li>
              </ul>
            </li>
            <li>Identifying structural concerns
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Look for sagging or uneven surfaces</li>
                <li>Check for water damage or rot</li>
                <li>Identify any existing repairs</li>
              </ul>
            </li>
            <li>Documenting existing features
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Map out vents, chimneys, and skylights</li>
                <li>Note satellite dishes or other equipment</li>
                <li>Record existing penetrations</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Material Assessment",
      content: (
        <div className="space-y-4">
          <p>Different roofing materials require different approaches for solar installation:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Asphalt Shingles
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Check shingle condition and age</li>
                <li>Look for granule loss</li>
                <li>Assess underlayment condition</li>
              </ul>
            </li>
            <li>Tile Roofs
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Inspect for cracked or broken tiles</li>
                <li>Check tile attachment method</li>
                <li>Assess support structure condition</li>
              </ul>
            </li>
            <li>Metal Roofs
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Check seam condition</li>
                <li>Look for corrosion or damage</li>
                <li>Assess attachment points</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Roof Evaluation Guide"
      description="Comprehensive guide to evaluating roof conditions for solar PV installation."
      sections={sections}
    />
  );
};

export default RoofEvaluationPage;
