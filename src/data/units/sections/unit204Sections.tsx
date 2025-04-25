
import React from 'react';

interface SectionData {
  title: string;
  description: string;
  content: React.ReactNode;
}

export const sections204: Record<string, SectionData> = {
  "1.1": {
    title: "Working with Conduit",
    description: "Learning techniques for installing and working with different types of conduit systems",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-4">Conduit Installation Techniques</h3>
        <p className="mb-4">
          Conduit provides mechanical protection and a professional finish for electrical installations.
          Understanding how to work with different types is a key skill for electricians.
        </p>
        
        <h4 className="text-lg font-semibold mb-3">Metal Conduit</h4>
        <p className="mb-4">
          Steel conduit offers superior protection and mechanical strength:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Cutting: Using pipe cutters or hacksaws with fine-toothed blades</li>
          <li>Threading: Creating standard threads for secure connections</li>
          <li>Bending: Techniques for 90° bends, offsets, and saddles using bending machines</li>
          <li>Earthing requirements: Maintaining continuity throughout the system</li>
          <li>Typical applications: Commercial, industrial, and areas requiring high impact resistance</li>
        </ul>

        <h4 className="text-lg font-semibold mb-3">PVC Conduit</h4>
        <p className="mb-4">
          Plastic conduit offers corrosion resistance and ease of installation:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Cutting: Clean cuts with PVC pipe cutters or fine-toothed saws</li>
          <li>Jointing: Using solvent cement for secure connections</li>
          <li>Bending: Techniques using springs or heating methods</li>
          <li>Expansion requirements: Allowing for thermal expansion in longer runs</li>
          <li>Temperature limitations: Not suitable for high-temperature areas</li>
        </ul>

        <h4 className="text-lg font-semibold mb-3">Flexible Conduit</h4>
        <p className="mb-4">
          Used where movement or vibration is present:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Metallic flexible conduit: For motor connections and machine tools</li>
          <li>PVC-covered flexible metallic conduit: Adding corrosion resistance</li>
          <li>Liquid-tight flexible conduit: For wet or outdoor installations</li>
          <li>Proper termination methods: Using the correct glands and fittings</li>
          <li>Support requirements: Preventing sagging and strain</li>
        </ul>
      </>
    )
  },
  "1.2": {
    title: "Cable Installation Techniques",
    description: "Learning proper methods for installing various cable types in electrical systems",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-4">Professional Cable Installation</h3>
        <p className="mb-4">
          Proper cable installation ensures safety, reliability, and compliance with regulations. This section covers the techniques needed for different scenarios.
        </p>
        
        <h4 className="text-lg font-semibold mb-3">Cable Selection</h4>
        <p className="mb-4">
          Choosing the right cable for the application:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Current-carrying capacity requirements</li>
          <li>Voltage drop considerations</li>
          <li>Environmental factors: temperature, moisture, UV exposure</li>
          <li>Fire performance requirements</li>
          <li>Mechanical protection needs</li>
        </ul>

        <h4 className="text-lg font-semibold mb-3">Installation Methods</h4>
        <p className="mb-4">
          Techniques for different installation scenarios:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Surface clipped: Using clips and cleats at correct intervals</li>
          <li>Concealed: In walls, floors, and ceilings with appropriate protection</li>
          <li>Contained: In trunking, conduit, and cable trays</li>
          <li>Underground: Depth requirements and mechanical protection</li>
          <li>Overhead: Tensioning and support methods</li>
        </ul>

        <h4 className="text-lg font-semibold mb-3">Cable Support and Protection</h4>
        <p className="mb-4">
          Ensuring cables are properly supported throughout their run:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Maximum support intervals for different cable types and orientations</li>
          <li>Bend radius limitations to prevent damage</li>
          <li>Protection at wall penetrations and floor crossings</li>
          <li>Fire stopping requirements when passing through fire-rated walls</li>
          <li>Protection from mechanical damage, water ingress, and rodents</li>
        </ul>
      </>
    )
  }
};
