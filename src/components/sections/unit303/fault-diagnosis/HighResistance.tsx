
import React from 'react';

const HighResistance = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">High Resistance Connections</h2>
      <p>
        High resistance connections are often subtle faults that can cause equipment malfunction, energy waste, and create serious fire hazards if left undetected.
      </p>
      
      <h3 className="text-lg font-medium mt-4">Characteristics and Effects</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Increased localized heating at connection points</li>
        <li>Voltage drop across the connection</li>
        <li>Reduced current flow and equipment performance</li>
        <li>Intermittent operation of equipment</li>
        <li>Discoloration or scorching at connection points</li>
        <li>Burning smell near electrical enclosures</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Common Causes</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Loose terminations or connections</li>
        <li>Corrosion of connection surfaces</li>
        <li>Improper crimping or termination techniques</li>
        <li>Thermal cycling causing connection expansion/contraction</li>
        <li>Vibration loosening connections over time</li>
        <li>Dissimilar metals creating galvanic corrosion</li>
        <li>Contamination at connection interfaces</li>
        <li>Under-tightened terminals</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Self-Propagating Nature</h2>
      <p>
        High resistance connections tend to worsen over time:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Initial resistance causes heating</li>
        <li>Heat accelerates oxidation and corrosion</li>
        <li>Oxidation increases resistance further</li>
        <li>Higher resistance creates more heat</li>
        <li>Cycle continues until failure occurs</li>
        <li>May eventually lead to arcing or fire</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Detection Methods</h2>
      
      <h3 className="text-lg font-medium mt-4">Thermal Scanning</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Infrared cameras/thermal imaging</li>
        <li>Temperature indicators (heat-sensitive stickers)</li>
        <li>Non-contact infrared thermometers</li>
        <li>Compare temperatures of similar connections</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Electrical Testing</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Voltage drop testing across connections</li>
        <li>Millivolt drop tests</li>
        <li>Microhm resistance measurements</li>
        <li>Load testing to reveal issues under current</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Diagnostic Approach</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Visual inspection for discoloration or damage</li>
        <li>Check for loose connections with appropriate torque tool</li>
        <li>Measure voltage drop across suspicious connections</li>
        <li>Thermal scanning under normal operating load</li>
        <li>Sequential load testing of circuits</li>
        <li>Inspect with magnification for micro-fractures</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Repair Techniques</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Clean connection surfaces thoroughly</li>
        <li>Remove all oxidation and corrosion</li>
        <li>Apply appropriate contact enhancers if needed</li>
        <li>Replace damaged terminals or connectors</li>
        <li>Use proper torque specifications when tightening</li>
        <li>Apply anti-oxidant compounds for aluminum connections</li>
        <li>Replace rather than repair critical connections</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Preventative Maintenance</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Regular thermal scanning programs</li>
        <li>Scheduled re-torquing of critical connections</li>
        <li>Periodic cleaning in dusty or corrosive environments</li>
        <li>Application of appropriate protective coatings</li>
        <li>Vibration damping in high-vibration areas</li>
        <li>Proper environmental control (humidity, temperature)</li>
        <li>Use of anti-vibration hardware where needed</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Documentation Importance</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Record baseline thermal readings for comparison</li>
        <li>Document torque values applied</li>
        <li>Keep maintenance history of problematic connections</li>
        <li>Note patterns of recurring issues</li>
        <li>Maintain thermal imaging reports</li>
        <li>Track effectiveness of remedial actions</li>
      </ul>
    </div>
  );
};

export default HighResistance;
