
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const PanelInstallationPage = () => {
  const sections = [
    {
      title: "Panel Placement",
      content: (
        <div className="space-y-4">
          <p className="text-[#FFC900]/80 mb-4">
            Key considerations for solar panel placement:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Orientation and Tilt
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Optimal angle based on latitude</li>
                <li>Azimuth considerations</li>
                <li>Seasonal adjustments</li>
              </ul>
            </li>
            <li>Panel Spacing
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Row spacing calculations</li>
                <li>Edge setbacks</li>
                <li>Maintenance access requirements</li>
              </ul>
            </li>
            <li>Installation Sequence
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Panel layout planning</li>
                <li>Mounting hardware assembly</li>
                <li>Wire management</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Connection Methods",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Grounding Requirements
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Panel frame grounding</li>
                <li>Rail grounding methods</li>
                <li>Equipment grounding conductors</li>
              </ul>
            </li>
            <li>Electrical Connections
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>MC4 connector installation</li>
                <li>String wiring methods</li>
                <li>Junction box connections</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Solar Panel Installation Guide"
      description="Learn the proper techniques for installing solar panels, including placement, connections, and best practices."
      sections={sections}
    />
  );
};

export default PanelInstallationPage;
