
import React from 'react';
import { SectionData } from './interfaces';

export const section1_1: SectionData = {
  title: "Electrical Installation Components",
  description: "Understanding the key components used in electrical installations",
  content: (
    <>
      <h3 className="text-xl font-semibold mb-4">Essential Components in Electrical Installations</h3>
      <p className="mb-4">
        Electrical installations consist of various components that work together to distribute electricity safely and effectively throughout a building.
      </p>
      
      <h4 className="text-lg font-semibold mb-3">Key Components</h4>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Consumer units (distribution boards)</li>
        <li>Circuit protection devices (MCBs, RCDs, RCBOs)</li>
        <li>Cables and conductors</li>
        <li>Accessories (switches, socket outlets)</li>
        <li>Earthing and bonding systems</li>
      </ul>
    </>
  ),
  detailedContent: (
    <>
      <h3 className="text-2xl font-bold mb-6">Complete Guide to Electrical Installation Components</h3>
      
      <section className="mb-8">
        <h4 className="text-xl font-semibold mb-4">Consumer Units</h4>
        <p className="mb-4">
          The consumer unit, also known as a distribution board or fuse box, is the central hub of a domestic electrical installation.
        </p>
        
        <div className="bg-[#22251e] p-6 rounded-lg mb-4">
          <h5 className="text-lg font-semibold mb-3">Elements of a Modern Consumer Unit</h5>
          <ul className="list-disc pl-6 space-y-2">
            <li>Main Switch: Isolates the entire electrical supply</li>
            <li>RCDs (Residual Current Devices): Protect against electric shock</li>
            <li>MCBs (Miniature Circuit Breakers): Protect individual circuits from overload and short circuit</li>
            <li>RCBOs (Residual Current Breaker with Overload): Combined RCD and MCB protection</li>
            <li>Surge Protection Devices: Optional protection against voltage spikes</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h4 className="text-xl font-semibold mb-4">Circuit Protection Devices</h4>
        <p className="mb-4">
          Protection devices are essential for electrical safety, disconnecting the supply when faults are detected.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#22251e] p-6 rounded-lg">
            <h5 className="text-lg font-semibold mb-3">MCBs</h5>
            <p>
              Miniature Circuit Breakers protect against overcurrent conditions:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Type B: 3-5 times rated current (lighting circuits)</li>
              <li>Type C: 5-10 times rated current (power circuits)</li>
              <li>Type D: 10-20 times rated current (motors, transformers)</li>
            </ul>
          </div>
          <div className="bg-[#22251e] p-6 rounded-lg">
            <h5 className="text-lg font-semibold mb-3">RCDs</h5>
            <p>
              Residual Current Devices detect imbalances between live and neutral currents:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>30mA: Additional protection for socket outlets and mobile equipment</li>
              <li>100mA: Fire protection for high-risk areas</li>
              <li>300mA: Fire protection for general installations</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h4 className="text-xl font-semibold mb-4">Cables and Conductors</h4>
        <p>
          Selecting the right cable for each application is critical:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li><strong>Twin and Earth (6242Y)</strong>: Standard domestic wiring for lighting and power</li>
          <li><strong>SWA (Steel Wire Armored)</strong>: Underground or external wiring</li>
          <li><strong>FP (Fire Performance)</strong>: For fire alarm systems and emergency lighting</li>
          <li><strong>LSZH (Low Smoke Zero Halogen)</strong>: For areas where toxic emissions must be minimized</li>
        </ul>
      </section>
    </>
  )
};
