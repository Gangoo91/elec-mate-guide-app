
import React from 'react';

const ShortCircuits = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Short Circuits and Earth Faults</h2>
      <p>
        Short circuits and earth faults are potentially dangerous conditions that can cause equipment damage, fires, and electric shock hazards if not promptly detected and corrected.
      </p>
      
      <h3 className="text-lg font-medium mt-4">Short Circuit Characteristics</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Current follows an unintended path of low resistance</li>
        <li>Excessive current flow often results</li>
        <li>Protective devices (fuses, circuit breakers) typically operate</li>
        <li>May cause visible arcing, smoke, or heat damage</li>
        <li>Can occur phase-to-phase or phase-to-neutral</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Earth Fault Characteristics</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Current leaks to earth/ground from live parts</li>
        <li>May involve partial current leakage (not complete short)</li>
        <li>Often detected by RCDs or earth leakage protection</li>
        <li>Can energize exposed metalwork creating shock hazards</li>
        <li>May develop gradually through insulation deterioration</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Common Causes</h2>
      
      <h3 className="text-lg font-medium mt-4">Short Circuit Causes</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Damaged insulation between conductors</li>
        <li>Moisture ingress creating conductive paths</li>
        <li>Foreign conductive objects across terminals</li>
        <li>Wiring errors during installation</li>
        <li>Component failure (especially capacitors)</li>
        <li>Loose connections causing arcing which progresses to short</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Earth Fault Causes</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Insulation breakdown due to age or damage</li>
        <li>Moisture penetration into equipment</li>
        <li>Cable damage (cuts, abrasions, crushing)</li>
        <li>Contamination with conductive dust or chemicals</li>
        <li>Overheating leading to insulation failure</li>
        <li>Physical damage to equipment enclosures</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Diagnostic Techniques</h2>
      
      <h3 className="text-lg font-medium mt-4">Short Circuit Diagnosis</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Visual inspection for damage or burns</li>
        <li>Resistance measurements with power off</li>
        <li>Isolation of sections to narrow down fault location</li>
        <li>Insulation resistance testing</li>
        <li>Thermal imaging to identify hot spots</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Earth Fault Diagnosis</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>RCD testing to confirm operation</li>
        <li>Insulation resistance testing to earth</li>
        <li>Earth loop impedance measurements</li>
        <li>Disconnection and isolation of circuits to locate fault</li>
        <li>Earth fault loop current measurements</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Safety Considerations</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Always isolate and lock off before investigating</li>
        <li>Use appropriate PPE for live testing when necessary</li>
        <li>Verify isolation with proper voltage testing equipment</li>
        <li>Use insulated tools when working on potentially faulted equipment</li>
        <li>Follow safe working procedures at all times</li>
        <li>Consider potential stored energy in capacitors</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Repair Methods</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Replace damaged cables completely</li>
        <li>Never splice repair cables in permanent installations</li>
        <li>Replace damaged components rather than attempting repair</li>
        <li>Ensure proper insulation is reinstated</li>
        <li>Verify repairs with appropriate testing</li>
        <li>Address root causes to prevent recurrence</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Preventative Measures</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Regular insulation resistance testing</li>
        <li>Thermal imaging surveys</li>
        <li>Proper cable management and protection</li>
        <li>Environmental controls (temperature, humidity)</li>
        <li>Protection against physical damage</li>
        <li>Appropriate ingress protection (IP rating) for the environment</li>
        <li>Regular visual inspections</li>
      </ul>
    </div>
  );
};

export default ShortCircuits;
