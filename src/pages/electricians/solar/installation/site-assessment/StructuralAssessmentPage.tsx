
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const StructuralAssessmentPage = () => {
  const sections = [
    {
      title: "Roof Evaluation",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Visual inspection of roof condition and materials</li>
            <li>Identify signs of wear, damage, or structural weakness</li>
            <li>Document existing penetrations and obstacles</li>
            <li>Assess roof age and remaining lifespan</li>
          </ul>
        </div>
      )
    },
    {
      title: "Load Analysis",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Calculate dead loads from solar array</li>
            <li>Assess wind and snow load requirements</li>
            <li>Evaluate existing structural capacity</li>
            <li>Identify need for structural reinforcement</li>
          </ul>
        </div>
      )
    },
    {
      title: "Support Structure",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Locate and map roof trusses and rafters</li>
            <li>Evaluate attachment point options</li>
            <li>Assess roof deck condition</li>
            <li>Document structural support layout</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Structural Assessment"
      description="Detailed guide to evaluating structural integrity for solar PV installations."
      sections={sections}
    />
  );
};

export default StructuralAssessmentPage;
