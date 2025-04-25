
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const SystemDesignPage = () => {
  const sections = [
    {
      title: "Array Layout Planning",
      content: (
        <div className="space-y-4">
          <p className="text-[#FFC900]/80 mb-4">
            Master the principles of solar array layout design:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>String sizing calculations and optimization</li>
            <li>Module configuration and spacing requirements</li>
            <li>Optimal tilt angle and azimuth calculations</li>
            <li>Shading analysis and mitigation strategies</li>
            <li>Row spacing optimization for maximum production</li>
          </ul>
        </div>
      )
    },
    {
      title: "Electrical System Design",
      content: (
        <div className="space-y-4">
          <p className="text-[#FFC900]/80 mb-4">
            Learn essential electrical design considerations:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Inverter selection and sizing calculations</li>
            <li>String voltage and current calculations</li>
            <li>Wire sizing and voltage drop considerations</li>
            <li>Overcurrent protection requirements</li>
            <li>Grounding system design and compliance</li>
            <li>Disconnecting means and rapid shutdown requirements</li>
          </ul>
        </div>
      )
    },
    {
      title: "Performance Analysis",
      content: (
        <div className="space-y-4">
          <p className="text-[#FFC900]/80 mb-4">
            Understanding system performance calculations:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Solar resource assessment methods</li>
            <li>Energy production modeling techniques</li>
            <li>Temperature derating calculations</li>
            <li>System losses analysis</li>
            <li>Performance ratio estimation</li>
            <li>Financial return calculations</li>
          </ul>
        </div>
      )
    },
    {
      title: "Code Compliance",
      content: (
        <div className="space-y-4">
          <p className="text-[#FFC900]/80 mb-4">
            Essential code requirements for system design:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>National Electrical Code (NEC) requirements</li>
            <li>Local building code compliance</li>
            <li>Fire code setback requirements</li>
            <li>Equipment listing and labeling requirements</li>
            <li>Permitting documentation requirements</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="System Design"
      description="Learn the essential principles and calculations needed for designing efficient and code-compliant solar PV systems."
      sections={sections}
    />
  );
};

export default SystemDesignPage;
