
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const CommissioningPage = () => {
  const sections = [
    {
      title: "Pre-commission Checks",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Visual inspection requirements</li>
            <li>Mechanical fixing verification</li>
            <li>Initial electrical checks</li>
            <li>Safety system verification</li>
          </ul>
        </div>
      )
    },
    {
      title: "Testing Procedures",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>String voltage measurements</li>
            <li>Insulation resistance testing</li>
            <li>Earth continuity verification</li>
            <li>Performance ratio calculation</li>
          </ul>
        </div>
      )
    },
    {
      title: "System Activation",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Inverter configuration</li>
            <li>Grid connection procedures</li>
            <li>Performance monitoring setup</li>
            <li>Client handover process</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Commissioning"
      description="Complete guide to testing and activating solar PV installations."
      sections={sections}
    />
  );
};

export default CommissioningPage;
