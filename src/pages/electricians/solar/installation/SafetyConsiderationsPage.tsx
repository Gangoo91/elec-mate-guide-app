
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const SafetyConsiderationsPage = () => {
  const sections = [
    {
      title: "Personal Safety",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Personal Protective Equipment
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Required PPE for installation</li>
                <li>Fall protection systems</li>
                <li>Weather considerations</li>
              </ul>
            </li>
            <li>Safe Work Practices
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Lifting and carrying techniques</li>
                <li>Tool safety</li>
                <li>Emergency procedures</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Electrical Safety",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Lockout/Tagout Procedures
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Power isolation steps</li>
                <li>Verification procedures</li>
                <li>Safety documentation</li>
              </ul>
            </li>
            <li>Arc Flash Protection
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>PPE requirements</li>
                <li>Safe work distances</li>
                <li>Warning labels</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Safety Considerations"
      description="Essential safety guidelines and procedures for solar PV installation."
      sections={sections}
    />
  );
};

export default SafetyConsiderationsPage;
