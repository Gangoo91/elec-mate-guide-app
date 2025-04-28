
import React from 'react';
import { UnitContent } from './interfaces';

export const unit203: UnitContent = {
  title: "Electrical Installations Technology",
  description: "Learn about electrical installation components, technologies, and techniques used in modern electrical systems.",
  sections: [
    {
      title: "Components of Electrical Installations",
      content: (
        <>
          <p>Modern electrical installations use various specialized components to distribute power safely and effectively.</p>
          <p className="mt-2">Key components include:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Consumer units (distribution boards)</li>
            <li>Circuit protection devices (MCBs, RCDs, RCBOs)</li>
            <li>Conductors and cables of various types</li>
            <li>Wiring accessories (switches, socket outlets, etc.)</li>
            <li>Earthing and bonding arrangements</li>
          </ul>
        </>
      )
    },
    {
      title: "Installation Methods and Techniques",
      content: (
        <>
          <p>There are several standard methods for installing electrical systems in buildings.</p>
          <p className="mt-2">These include:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Surface wiring using clips and fixings</li>
            <li>Conduit systems (metal and plastic)</li>
            <li>Cable trunking and tray systems</li>
            <li>Embedded installations in walls and floors</li>
            <li>Installation in special locations (bathrooms, outdoor areas)</li>
          </ul>
        </>
      )
    },
    {
      title: "Testing and Verification",
      content: (
        <>
          <p>All electrical installations must be properly tested and verified before use.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Initial inspection procedures</li>
            <li>Dead testing protocols</li>
            <li>Live testing requirements</li>
            <li>Certification and documentation</li>
          </ul>
          <p className="mt-2">This ensures the installation is safe and complies with regulations.</p>
        </>
      )
    },
    {
      title: "Regulations and Standards",
      content: (
        <>
          <p>Electrical installations must comply with relevant regulations:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>BS 7671 (IET Wiring Regulations)</li>
            <li>Building Regulations Part P</li>
            <li>Electricity at Work Regulations</li>
            <li>Product standards and specifications</li>
          </ul>
          <p className="mt-2">These regulations are periodically updated to incorporate new safety requirements and technologies.</p>
        </>
      )
    }
  ]
};
