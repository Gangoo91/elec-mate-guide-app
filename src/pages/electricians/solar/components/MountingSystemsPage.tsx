
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';

const MountingSystemsPage = () => {
  const sections = [
    {
      title: "Mounting System Types",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-3">
            <li className="space-y-2">
              <span className="font-medium">Pitched Roof Systems</span>
              <p>Most common residential installation type. Uses roof hooks or roof-integrated mounting.</p>
            </li>
            <li className="space-y-2">
              <span className="font-medium">Flat Roof Systems</span>
              <p>Ballasted or mechanically fixed systems. Requires additional waterproofing consideration.</p>
            </li>
            <li className="space-y-2">
              <span className="font-medium">Ground Mount Systems</span>
              <p>Suitable for large installations. Requires ground preparation and foundation work.</p>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Component Details",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <span className="font-medium">Mounting Rails</span>
              <p>Aluminum profiles for panel support. Various lengths and load capacities.</p>
            </li>
            <li>
              <span className="font-medium">Roof Attachments</span>
              <p>Hooks, brackets, or special tiles for secure fixing to roof structure.</p>
            </li>
            <li>
              <span className="font-medium">Panel Clamps</span>
              <p>End and mid clamps for secure panel mounting. Material compatibility important.</p>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Installation Guidelines",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <span className="font-medium">Structural Assessment</span>
              <p>Roof loading capacity, wind uplift calculations, fixing points strength.</p>
            </li>
            <li>
              <span className="font-medium">Weather Sealing</span>
              <p>Proper flashing and weatherproofing at all roof penetrations.</p>
            </li>
            <li>
              <span className="font-medium">Maintenance Access</span>
              <p>Adequate spacing for cleaning and maintenance activities.</p>
            </li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Mounting Systems"
      description="Complete guide to solar panel mounting systems, components, and installation requirements."
      sections={sections}
    />
  );
};

export default MountingSystemsPage;
