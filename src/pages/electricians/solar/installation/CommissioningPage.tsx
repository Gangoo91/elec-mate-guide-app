
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const CommissioningPage = () => {
  const sections = [
    {
      title: "System Inspection",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Verify all mechanical connections</li>
            <li>Check electrical terminations</li>
            <li>Inspect weather sealing</li>
            <li>Document installation quality</li>
          </ul>
        </div>
      )
    },
    {
      title: "Testing Procedures",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Perform insulation resistance tests</li>
            <li>Measure string voltages and currents</li>
            <li>Test earth continuity</li>
            <li>Verify inverter operation</li>
          </ul>
        </div>
      )
    },
    {
      title: "System Activation",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Configure inverter settings</li>
            <li>Test monitoring system</li>
            <li>Verify system performance</li>
            <li>Complete commissioning documentation</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Commissioning"
      description="Complete guide to commissioning and testing solar PV installations."
      sections={sections}
    />
  );
};

export default CommissioningPage;
