
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const SupportStructurePage = () => {
  const sections = [
    {
      title: "Structural Mapping",
      content: (
        <div className="space-y-4">
          <p>Accurate mapping of structural elements is essential:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Rafter and Truss Location
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Using stud finders and measurement tools</li>
                <li>Marking attachment points</li>
                <li>Documenting spacing patterns</li>
              </ul>
            </li>
            <li>Support Assessment
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Evaluating wood condition</li>
                <li>Checking for water damage</li>
                <li>Identifying reinforcement needs</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Attachment Methods",
      content: (
        <div className="space-y-4">
          <p>Proper attachment selection and installation is crucial:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Lag Bolt Installation
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Proper sizing and placement</li>
                <li>Pre-drilling requirements</li>
                <li>Waterproofing methods</li>
              </ul>
            </li>
            <li>Alternative Attachments
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Specialized roof hooks</li>
                <li>Ballasted systems</li>
                <li>Custom mounting solutions</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Support Structure Guide"
      description="Learn about proper structural support and attachment methods for solar installations."
      sections={sections}
    />
  );
};

export default SupportStructurePage;
