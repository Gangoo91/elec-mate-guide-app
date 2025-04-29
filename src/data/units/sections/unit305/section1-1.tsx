
import React from 'react';
import { Section305 } from './types';

export const section1_1: Section305 = {
  id: "1.1",
  title: "Electrical Installation Design Principles",
  description: "Learning the fundamental principles of designing electrical installations for various building types.",
  content: [
    {
      title: "Learning Objectives",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Understand how to plan electrical circuits for domestic, commercial and industrial settings</li>
          <li>Learn how to choose appropriate supply arrangements for different installations</li>
          <li>Master the design principles for various circuit types</li>
        </ul>
      )
    },
    {
      title: "Supply Arrangements",
      content: (
        <div className="space-y-4">
          <p>
            Different types of supply systems have specific characteristics that make them suitable for 
            different applications. The three main types are:
          </p>
          
          <div className="space-y-3">
            <div className="bg-[#2a2d24] p-4 rounded-md">
              <h4 className="font-medium text-[#FFC900] mb-2">TN-S System</h4>
              <p>
                In this system, separate neutral and protective conductors run throughout the installation. 
                The protective conductor (PE) is connected to the star point of the supply transformer 
                which is earthed.
              </p>
              <p className="mt-2">
                <span className="font-semibold">Advantages:</span> Better EMC performance, no risk of neutral current 
                in exposed metalwork, suitable for electronic equipment installations.
              </p>
            </div>
            
            <div className="bg-[#2a2d24] p-4 rounded-md">
              <h4 className="font-medium text-[#FFC900] mb-2">TN-C-S System (PME)</h4>
              <p>
                This system uses a combined neutral and protective conductor (PEN) from the supply transformer 
                up to the installation's origin, where they are separated. Often referred to as Protective 
                Multiple Earthing (PME).
              </p>
              <p className="mt-2">
                <span className="font-semibold">Advantages:</span> Cost-effective for distribution networks, 
                common in UK domestic installations, provides effective earth fault protection.
              </p>
              <p className="mt-2">
                <span className="font-semibold">Restrictions:</span> Not suitable for petrol stations, swimming pools, 
                or locations with increased risk in case of neutral conductor failure.
              </p>
            </div>
            
            <div className="bg-[#2a2d24] p-4 rounded-md">
              <h4 className="font-medium text-[#FFC900] mb-2">TT System</h4>
              <p>
                In this system, the supply is earthed at the transformer, but the installation has a separate, 
                independent earth electrode. There is no connection between the transformer earth and the 
                installation earth.
              </p>
              <p className="mt-2">
                <span className="font-semibold">Common use:</span> Rural areas where PME is not available, 
                temporary supplies, or installations with special requirements.
              </p>
              <p className="mt-2">
                <span className="font-semibold">Requirements:</span> RCD protection is mandatory for this type of supply.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Circuit Design Considerations",
      content: (
        <div className="space-y-4">
          <h4 className="font-medium text-[#FFC900]">Lighting Circuits</h4>
          <p>
            Lighting circuits should be designed to provide adequate illumination while minimizing energy consumption.
            Key considerations include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Light level requirements (measured in lux) for different areas</li>
            <li>Emergency lighting requirements for escape routes</li>
            <li>Energy efficiency through LED technology and lighting controls</li>
            <li>Typical circuit loading of 5A or 6A per lighting circuit</li>
            <li>Separation of lighting circuits to minimize disruption during faults</li>
          </ul>
          
          <h4 className="font-medium text-[#FFC900] mt-4">Socket Outlet Circuits</h4>
          <p>
            The UK uses two main types of socket outlet circuits:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold">Ring Final Circuits:</span> 30A/32A protection, serving up to 100m² floor area,
              with cable looped from socket to socket and returning to the consumer unit
            </li>
            <li>
              <span className="font-semibold">Radial Circuits:</span> 20A protection for smaller areas (≤ 20m²) or 
              32A for larger areas (≤ 50m²), with cable running to each socket without returning to the origin
            </li>
          </ul>
          
          <h4 className="font-medium text-[#FFC900] mt-4">Dedicated Circuits</h4>
          <p>
            Certain high-power appliances require dedicated circuits:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold">Cooker Circuits:</span> Typically 32A or 45A depending on cooker rating,
              using 6mm² or 10mm² cable
            </li>
            <li>
              <span className="font-semibold">Electric Shower Circuits:</span> Power ratings from 7.5kW to 10.5kW,
              requiring 32A-45A protection and appropriately sized cable
            </li>
            <li>
              <span className="font-semibold">Immersion Heater Circuits:</span> Typically 3kW at 13A, requiring 
              2.5mm² cable with 16A protection
            </li>
          </ul>
          
          <h4 className="font-medium text-[#FFC900] mt-4">Emergency Lighting</h4>
          <p>
            Emergency lighting design must comply with BS 5266 and include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Maintained or non-maintained systems based on building use</li>
            <li>Minimum 3-hour battery backup</li>
            <li>Separate circuits from general lighting</li>
            <li>Regular testing and maintenance provisions</li>
          </ul>
        </div>
      )
    }
  ]
};
