
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const DocumentationPage = () => {
  const sections = [
    {
      title: "Certification Documents",
      content: (
        <div className="space-y-4">
          <p>Required certification for complete solar PV installations:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Electrical Installation Certificate</li>
            <li>Minor Electrical Works Certificate</li>
            <li>Building regulations compliance</li>
            <li>DNO notification documentation</li>
            <li>MCS certification requirements</li>
          </ul>
        </div>
      )
    },
    {
      title: "Testing Documentation",
      content: (
        <div className="space-y-4">
          <p>Essential testing records for solar PV systems:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>DC circuit tests</li>
            <li>AC circuit tests</li>
            <li>Earth continuity and resistance</li>
            <li>Insulation resistance</li>
            <li>Functional testing records</li>
          </ul>
        </div>
      )
    },
    {
      title: "Handover Documents",
      content: (
        <div className="space-y-4">
          <p>Documentation to be provided to clients upon completion:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>System user manual</li>
            <li>Maintenance requirements</li>
            <li>Component warranties</li>
            <li>Emergency shutdown procedures</li>
            <li>Performance monitoring guidance</li>
          </ul>
        </div>
      )
    },
    {
      title: "Maintenance Records",
      content: (
        <div className="space-y-4">
          <p>Documentation for ongoing system maintenance:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Inspection checklists</li>
            <li>Performance monitoring logs</li>
            <li>Component replacement records</li>
            <li>System modification documentation</li>
            <li>Periodic testing requirements</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Documentation"
      description="Complete guide to documentation requirements for solar PV installations."
      sections={sections}
    />
  );
};

export default DocumentationPage;
