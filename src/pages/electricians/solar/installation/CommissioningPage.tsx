
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const CommissioningPage = () => {
  const sections = [
    {
      title: "Pre-commissioning Inspections",
      content: (
        <div className="space-y-4">
          <p className="text-[#FFC900]/80 mb-4">
            Essential pre-commissioning checks and verifications:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Complete visual inspection procedures</li>
            <li>Mechanical installation verification steps</li>
            <li>Preliminary electrical checks and measurements</li>
            <li>Safety system verification requirements</li>
            <li>Documentation and checklist completion</li>
          </ul>
        </div>
      )
    },
    {
      title: "Testing and Verification",
      content: (
        <div className="space-y-4">
          <p className="text-[#FFC900]/80 mb-4">
            Comprehensive system testing procedures:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>String voltage and current measurements</li>
            <li>Insulation resistance testing protocols</li>
            <li>Earth continuity and bonding verification</li>
            <li>IV curve testing procedures</li>
            <li>Performance ratio calculations and verification</li>
            <li>Thermal imaging inspection requirements</li>
          </ul>
        </div>
      )
    },
    {
      title: "System Activation",
      content: (
        <div className="space-y-4">
          <p className="text-[#FFC900]/80 mb-4">
            Steps for safe system activation and verification:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Inverter setup and configuration procedures</li>
            <li>Grid connection and synchronization steps</li>
            <li>Monitoring system setup and verification</li>
            <li>Performance testing and validation</li>
            <li>Safety shutdown system verification</li>
          </ul>
        </div>
      )
    },
    {
      title: "Documentation and Handover",
      content: (
        <div className="space-y-4">
          <p className="text-[#FFC900]/80 mb-4">
            Required documentation and client handover procedures:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>As-built documentation requirements</li>
            <li>Test results and certification documentation</li>
            <li>System manual and warranty information</li>
            <li>Owner training and operation instructions</li>
            <li>Maintenance schedule and requirements</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Commissioning"
      description="Learn the complete process of testing, activating, and validating solar PV installations to ensure safe and optimal performance."
      sections={sections}
    />
  );
};

export default CommissioningPage;
