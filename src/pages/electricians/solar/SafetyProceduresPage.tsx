
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const SafetyProceduresPage = () => {
  const sections = [
    {
      title: "Working at Height",
      content: (
        <div className="space-y-4">
          <p>Essential safety requirements for roof work:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Risk assessment procedures</li>
            <li>Scaffold and platform requirements</li>
            <li>Harness and fall protection systems</li>
            <li>Safe access equipment</li>
            <li>Weather considerations</li>
          </ul>
        </div>
      )
    },
    {
      title: "Electrical Safety",
      content: (
        <div className="space-y-4">
          <p>Procedures for working safely with DC and AC electrical systems:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Isolation procedures and lock-off</li>
            <li>Safe working with live DC (cannot be turned off when exposed to light)</li>
            <li>Testing procedures</li>
            <li>PPE requirements</li>
            <li>Emergency response planning</li>
          </ul>
        </div>
      )
    },
    {
      title: "Site Safety",
      content: (
        <div className="space-y-4">
          <p>Site management and general safety considerations:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Site security and access control</li>
            <li>Material handling and storage</li>
            <li>Tool safety</li>
            <li>Communication protocols</li>
            <li>First aid arrangements</li>
          </ul>
        </div>
      )
    },
    {
      title: "Risk Assessment",
      content: (
        <div className="space-y-4">
          <p>Comprehensive approach to risk assessment for solar installations:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Hazard identification methods</li>
            <li>Risk evaluation techniques</li>
            <li>Control measure hierarchy</li>
            <li>Method statement development</li>
            <li>Permit to work systems</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Safety Procedures"
      description="Essential safety protocols for solar PV installation, maintenance and repair."
      sections={sections}
    />
  );
};

export default SafetyProceduresPage;
