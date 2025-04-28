
import React from 'react';
import { SectionData } from './interfaces';

export const section1_2: SectionData = {
  title: "Electrical Installation Technology",
  description: "Understanding modern electrical installation techniques and standards",
  content: (
    <>
      <h3 className="text-xl font-semibold mb-4">Modern Electrical Installation Methods</h3>
      <p className="mb-4">
        Modern electrical installations must comply with the latest standards and regulations while incorporating new technologies for safety and efficiency.
      </p>
      
      <h4 className="text-lg font-semibold mb-3">Installation Standards</h4>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>BS 7671 (IET Wiring Regulations)</li>
        <li>Building Regulations Part P</li>
        <li>Certification and testing requirements</li>
        <li>Energy efficiency considerations</li>
      </ul>
    </>
  ),
  detailedContent: (
    <>
      <h3 className="text-2xl font-bold mb-6">Advanced Electrical Installation Technology</h3>
      
      <section className="mb-8">
        <h4 className="text-xl font-semibold mb-4">Installation Systems</h4>
        <p className="mb-4">
          There are several methods for installing electrical systems in buildings, each with specific applications.
        </p>
        
        <div className="bg-[#22251e] p-6 rounded-lg mb-4">
          <h5 className="text-lg font-semibold mb-3">Common Installation Methods</h5>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Surface Wiring:</strong> Cables and accessories mounted on the surface of walls and ceilings</li>
            <li><strong>Embedded Installations:</strong> Cables concealed within building structures (walls, floors, ceilings)</li>
            <li><strong>Conduit Systems:</strong> Metal or plastic tubes that protect and route cables</li>
            <li><strong>Trunking Systems:</strong> Rectangular enclosures for multiple cables</li>
            <li><strong>Cable Trays:</strong> Open supports for cables, typically in commercial or industrial settings</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h4 className="text-xl font-semibold mb-4">Special Installations</h4>
        <p className="mb-4">
          Some installations require special consideration due to environmental factors or specific risks.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#22251e] p-6 rounded-lg">
            <h5 className="text-lg font-semibold mb-3">Bathroom Installations</h5>
            <p>
              Bathrooms have specific zoning requirements:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Zone 0: Inside the bath or shower</li>
              <li>Zone 1: Above the bath or shower to 2.25m height</li>
              <li>Zone 2: Area extending 0.6m beyond Zone 1</li>
              <li>All circuits require 30mA RCD protection</li>
            </ul>
          </div>
          <div className="bg-[#22251e] p-6 rounded-lg">
            <h5 className="text-lg font-semibold mb-3">Outdoor Installations</h5>
            <p>
              External electrical installations require:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>IP rated enclosures (typically IP65 or higher)</li>
              <li>UV resistant cables and accessories</li>
              <li>Suitable mechanical protection</li>
              <li>30mA RCD protection for all circuits</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h4 className="text-xl font-semibold mb-4">Smart Installation Technology</h4>
        <p>
          Modern installations increasingly incorporate smart technology:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li><strong>Home Automation:</strong> Centralized or distributed control systems</li>
          <li><strong>Smart Consumer Units:</strong> Remote monitoring and control of circuits</li>
          <li><strong>Energy Monitoring:</strong> Systems to track and manage electricity usage</li>
          <li><strong>Integration:</strong> Connectivity with heating, lighting, security and other building systems</li>
        </ul>
      </section>
    </>
  )
};
