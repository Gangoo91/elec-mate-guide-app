
import React from 'react';
import { Section305 } from './types';

export const section5_1: Section305 = {
  id: "5.1",
  title: "Earthing and Bonding Design",
  description: "Learn the principles and requirements for effective earthing and bonding in electrical installations.",
  content: [
    {
      title: "Learning Objectives",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Understand the principles and purposes of earthing systems</li>
          <li>Learn how to design main protective bonding arrangements</li>
          <li>Master the requirements for supplementary bonding</li>
          <li>Apply correct sizing principles to earthing conductors</li>
        </ul>
      )
    },
    {
      title: "Principles of Earthing",
      content: (
        <div className="space-y-4">
          <p>
            Earthing is primarily designed to:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Protect people from electric shock</li>
            <li>Protect equipment from damage</li>
            <li>Facilitate the operation of protective devices</li>
            <li>Prevent excessive voltages</li>
            <li>Provide a reference point for the electrical system</li>
          </ul>
          
          <div className="bg-[#2a2d24] p-4 rounded-md mt-3">
            <h4 className="font-medium text-[#FFC900] mb-2">Key Components of an Earthing System</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Main Earthing Terminal (MET):</span> The central connection point for all earthing conductors
              </li>
              <li>
                <span className="font-medium">Circuit Protective Conductors (CPCs):</span> Provide the protective conductor for each circuit
              </li>
              <li>
                <span className="font-medium">Main Protective Bonding Conductors:</span> Connect extraneous conductive parts to the MET
              </li>
              <li>
                <span className="font-medium">Supplementary Bonding Conductors:</span> Additional bonding in areas with increased risk
              </li>
              <li>
                <span className="font-medium">Earth Electrode:</span> Connection to the general mass of earth (in TT systems)
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Main Protective Bonding",
      content: (
        <div className="space-y-4">
          <p>
            Main protective bonding connects extraneous conductive parts to the main earthing terminal. 
            These typically include:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Water service pipes</li>
            <li>Gas installation pipes</li>
            <li>Oil supply pipes</li>
            <li>Structural steelwork</li>
            <li>Central heating and air conditioning systems</li>
            <li>Lightning protection systems</li>
          </ul>
          
          <p className="mt-3">
            Main protective bonding conductors must be sized according to BS 7671:
          </p>
          
          <div className="overflow-x-auto mt-2">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-[#FFC900]/20">
                  <th className="py-2 px-3 text-left text-[#FFC900]">Supply Neutral Conductor (mm²)</th>
                  <th className="py-2 px-3 text-left text-[#FFC900]">Minimum Main Bonding Conductor Size (mm²)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-3 text-[#FFC900]/80">≤ 16</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">10</td>
                </tr>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-3 text-[#FFC900]/80">{'>'}16 but ≤ 35</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">16</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-[#FFC900]/80">{'>'}35</td>
                  <td className="py-2 px-3 text-[#FFC900]/80">Half the size of the supply neutral conductor</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-4">
            For most domestic installations with a 25mm² or 35mm² supply neutral, the main bonding conductor should be 16mm².
          </p>
        </div>
      )
    },
    {
      title: "Supplementary Bonding",
      content: (
        <div className="space-y-4">
          <p>
            Supplementary bonding is required in locations with increased risk, such as:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Bathrooms and shower rooms</li>
            <li>Swimming pools and saunas</li>
            <li>Medical locations</li>
            <li>Agricultural installations</li>
          </ul>
          
          <p className="mt-3">
            Supplementary bonding requirements:
          </p>
          
          <div className="bg-[#2a2d24] p-4 rounded-md space-y-2">
            <p>1. Connect all simultaneously accessible exposed and extraneous conductive parts</p>
            <p>2. Minimum size requirements:</p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>2.5mm² copper if mechanically protected</li>
              <li>4mm² copper if not mechanically protected</li>
            </ul>
            <p>3. Must be accessible for inspection, testing, and maintenance</p>
            <p>4. Supplementary bonding conductors must be identified by green/yellow sleeving</p>
          </div>
          
          <p className="mt-3">
            Example: In a bathroom, supplementary bonding would connect:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Metal bath</li>
            <li>Metal taps</li>
            <li>Metal radiators</li>
            <li>Metal waste pipes</li>
            <li>Metal shower tray</li>
            <li>Metal shaver socket housings</li>
          </ul>
          
          <p className="mt-3 italic">
            Note: Under the 18th Edition of BS 7671, supplementary bonding may be omitted in domestic bathrooms 
            where all circuits are protected by 30mA RCDs and the installation meets other specified conditions.
          </p>
        </div>
      )
    }
  ]
};
