
import React from 'react';
import { UnitContent } from './interfaces';

export const unit204: UnitContent = {
  title: "Installation of Wiring Systems and Enclosures",
  description: "Learn practical wiring skills through cable installation techniques, working with different conduit types, installing trunking, cable termination methods, and following building regulations.",
  sections: [
    {
      title: "Working with Conduit",
      content: (
        <>
          <p>Conduit provides protection for electrical cables:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Metal conduit: Strong protection, needs proper earthing</li>
            <li>PVC conduit: Cheaper, easier to work with, not for high temperatures</li>
            <li>Flexible conduit: For connections to moving equipment</li>
          </ul>
          <p className="mt-2">You'll learn how to measure, cut, bend, and join conduit correctly.</p>
        </>
      )
    },
    {
      title: "Cable Tray and Trunking",
      content: (
        <>
          <p>These systems provide routes for multiple cables:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Cable tray: Open mesh or solid metal for running multiple cables</li>
            <li>Trunking: Enclosed channel with removable lid</li>
            <li>Mini-trunking: Smaller version often used in domestic installations</li>
          </ul>
          <p className="mt-2">Installation requires careful planning and secure fixing to walls or ceilings.</p>
        </>
      )
    },
    {
      title: "Cable Installation Techniques",
      content: (
        <>
          <p>Proper cable installation ensures safety and compliance:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Using correct pulling techniques to avoid damage</li>
            <li>Maintaining minimum bending radii</li>
            <li>Supporting cables at correct intervals</li>
            <li>Avoiding electromagnetic interference between power and data</li>
          </ul>
          <p className="mt-2">Different cables need different handling - for example, fiber optic has special requirements.</p>
        </>
      )
    },
    {
      title: "Termination Methods",
      content: (
        <>
          <p>Proper terminations are critical for safety and reliability:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Stripping insulation without damaging conductors</li>
            <li>Crimping techniques for different terminals</li>
            <li>Using bootlace ferrules for stranded conductors</li>
            <li>Torque settings for terminal screws</li>
          </ul>
          <p className="mt-2">Poor terminations can lead to heat buildup, connection failure, or even fires.</p>
        </>
      )
    }
  ]
};
