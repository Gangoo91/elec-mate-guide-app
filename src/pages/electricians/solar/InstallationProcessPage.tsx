
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const InstallationProcessPage = () => {
  const sections = [
    {
      title: "Site Assessment",
      content: (
        <div className="space-y-4">
          <p>Before installation, a thorough site assessment must be conducted:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Roof structural assessment</li>
            <li>Shading analysis</li>
            <li>Orientation and tilt optimization</li>
            <li>Available roof space calculation</li>
            <li>Existing electrical system evaluation</li>
          </ul>
        </div>
      )
    },
    {
      title: "System Design",
      content: (
        <div className="space-y-4">
          <p>Design considerations for optimal system performance:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Array layout and panel placement</li>
            <li>Inverter sizing and selection</li>
            <li>Cable routing and protection</li>
            <li>Disconnection and protection device planning</li>
            <li>System monitoring requirements</li>
          </ul>
        </div>
      )
    },
    {
      title: "Physical Installation",
      content: (
        <div className="space-y-4">
          <p>Step-by-step process for mounting the solar array:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Setting up safety equipment and access</li>
            <li>Installing mounting hardware</li>
            <li>Securing and aligning rails</li>
            <li>Mounting solar panels</li>
            <li>Cable management and weather sealing</li>
          </ul>
        </div>
      )
    },
    {
      title: "Commissioning",
      content: (
        <div className="space-y-4">
          <p>Final steps to activate and verify the system:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Visual inspection of all components</li>
            <li>Electrical testing of circuits</li>
            <li>Inverter setup and configuration</li>
            <li>System startup procedures</li>
            <li>Performance verification and documentation</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Solar PV Installation Process"
      description="Comprehensive guide to the step-by-step process of installing solar photovoltaic systems."
      sections={sections}
    />
  );
};

export default InstallationProcessPage;
