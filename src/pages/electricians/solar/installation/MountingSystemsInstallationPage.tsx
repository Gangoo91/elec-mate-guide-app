
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const MountingSystemsInstallationPage = () => {
  const sections = [
    {
      title: "Roof Types and Mounting Considerations",
      content: (
        <div className="space-y-4">
          <p className="text-[#FFC900]/80 mb-4">
            Understanding different roof types and their mounting requirements:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Pitched roof mounting techniques (tile, slate, metal)</li>
            <li>Flat roof mounting systems and ballast requirements</li>
            <li>Ground mount foundation options and considerations</li>
            <li>Roof material compatibility and protection methods</li>
            <li>Load distribution and structural integrity assessment</li>
          </ul>
        </div>
      )
    },
    {
      title: "Mounting Hardware and Components",
      content: (
        <div className="space-y-4">
          <p className="text-[#FFC900]/80 mb-4">
            Essential mounting system components and their proper use:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Rail types and load ratings</li>
            <li>Roof attachments (hooks, brackets, standoffs)</li>
            <li>Flashing methods and materials</li>
            <li>Module clamp types and specifications</li>
            <li>Splice kits and rail connections</li>
            <li>Expansion joints and thermal considerations</li>
          </ul>
        </div>
      )
    },
    {
      title: "Installation Techniques",
      content: (
        <div className="space-y-4">
          <p className="text-[#FFC900]/80 mb-4">
            Step-by-step mounting system installation procedures:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Proper roof attachment spacing and layout</li>
            <li>Flashing installation and waterproofing methods</li>
            <li>Rail alignment and leveling techniques</li>
            <li>Torque specifications for various components</li>
            <li>Grounding and bonding requirements</li>
            <li>Quality control and inspection points</li>
          </ul>
        </div>
      )
    },
    {
      title: "Safety and Best Practices",
      content: (
        <div className="space-y-4">
          <p className="text-[#FFC900]/80 mb-4">
            Critical safety considerations and industry best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fall protection systems and requirements</li>
            <li>Tool safety and proper equipment use</li>
            <li>Material handling and roof protection</li>
            <li>Weather considerations and limitations</li>
            <li>Documentation and inspection requirements</li>
            <li>Manufacturer guidelines and warranty compliance</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Mounting System Installation"
      description="Comprehensive guide to solar PV mounting system installation, including roof types, hardware components, installation techniques, and safety considerations."
      sections={sections}
    />
  );
};

export default MountingSystemsInstallationPage;
