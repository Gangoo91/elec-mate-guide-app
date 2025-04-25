
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const LoadAnalysisPage = () => {
  const sections = [
    {
      title: "Dead Load Calculations",
      content: (
        <div className="space-y-4">
          <p>Understanding and calculating dead loads is crucial for solar installations:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Solar Array Weight
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Panel weight (typically 30-50 lbs per panel)</li>
                <li>Mounting system weight</li>
                <li>Ballast requirements if applicable</li>
              </ul>
            </li>
            <li>Existing Roof Load
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Current roofing material weight</li>
                <li>Multiple layer assessment</li>
                <li>Existing equipment load</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Environmental Loads",
      content: (
        <div className="space-y-4">
          <p>Environmental factors significantly impact structural requirements:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Wind Load Considerations
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Local wind speed requirements</li>
                <li>Uplift forces calculation</li>
                <li>Edge and corner zones</li>
              </ul>
            </li>
            <li>Snow Load Analysis
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Regional snow load requirements</li>
                <li>Drift considerations</li>
                <li>Impact on existing load capacity</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Load Analysis"
      description="Learn how to calculate and assess structural loads for solar installations."
      sections={sections}
    />
  );
};

export default LoadAnalysisPage;
