
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const PhysicalInstallationPage = () => {
  const sections = [
    {
      title: "Safety Setup",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Install fall protection systems</li>
            <li>Set up access equipment</li>
            <li>Establish work zones and barriers</li>
            <li>Brief team on safety procedures</li>
          </ul>
        </div>
      )
    },
    {
      title: "Mounting System Installation",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Mark and drill mounting points</li>
            <li>Install roof attachments and flashings</li>
            <li>Align and secure mounting rails</li>
            <li>Verify structural integrity</li>
          </ul>
        </div>
      )
    },
    {
      title: "Panel Installation",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Position and secure panels to rails</li>
            <li>Connect module cables and optimize routing</li>
            <li>Install and ground microinverters/optimizers</li>
            <li>Verify panel alignment and spacing</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Physical Installation"
      description="Step-by-step guide to the physical installation of solar PV systems."
      sections={sections}
    />
  );
};

export default PhysicalInstallationPage;
