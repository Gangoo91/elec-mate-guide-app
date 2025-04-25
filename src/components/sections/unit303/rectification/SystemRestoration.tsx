
import React from 'react';

const SystemRestoration = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">System Restoration and Post-repair Testing</h2>
      <p>
        After fault rectification, proper system restoration and thorough testing are essential to verify the effectiveness of repairs and ensure safe operation when returning equipment to service.
      </p>
      
      <h3 className="text-lg font-medium mt-4">Pre-energization Checks</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Visually inspect all repair work</li>
        <li>Verify all tools and temporary equipment have been removed</li>
        <li>Confirm all covers and safety barriers are reinstated</li>
        <li>Check all connections are secure and correctly terminated</li>
        <li>Ensure all locking devices and security measures are removed</li>
        <li>Verify system is ready for testing</li>
        <li>Inform all relevant personnel of imminent energization</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Dead Testing Requirements</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Continuity testing of protective conductors</li>
        <li>Continuity of ring final circuit conductors (if applicable)</li>
        <li>Insulation resistance measurements</li>
        <li>Polarity verification</li>
        <li>Earth electrode resistance testing (if applicable)</li>
        <li>Functional tests of mechanical components</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Energization Procedure</h2>
      <ol className="list-decimal pl-6 space-y-2 mt-2">
        <li>Ensure area is clear of unnecessary personnel</li>
        <li>Notify all affected staff that power is being restored</li>
        <li>Remove isolation locks in reverse order of application</li>
        <li>Restore power in controlled sequence (typically upstream to downstream)</li>
        <li>Monitor for any abnormal conditions during initial energization</li>
        <li>Be prepared to de-energize immediately if issues arise</li>
      </ol>
      
      <h2 className="text-xl font-semibold mt-6">Live Testing After Restoration</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Earth fault loop impedance measurements</li>
        <li>RCD operation testing</li>
        <li>Prospective fault current measurements</li>
        <li>Voltage measurements at key points</li>
        <li>Phase rotation testing (for three-phase systems)</li>
        <li>Functional testing of control systems</li>
        <li>Load testing to verify performance under normal conditions</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Specific System Tests</h2>
      
      <h3 className="text-lg font-medium mt-4">Motor Circuits</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Check rotation direction</li>
        <li>Measure running current against nameplate values</li>
        <li>Monitor temperature during initial operation</li>
        <li>Test overload protection operation</li>
        <li>Verify control system sequencing</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Lighting Circuits</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Verify all luminaires function correctly</li>
        <li>Check control systems (sensors, timers, dimmers)</li>
        <li>Test emergency lighting where applicable</li>
        <li>Measure illumination levels if required</li>
      </ul>
      
      <h3 className="text-lg font-medium mt-4">Control Systems</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Verify all control sequences operate as designed</li>
        <li>Test safety interlocks and protective functions</li>
        <li>Check communications with connected systems</li>
        <li>Verify sensors and feedback devices are calibrated</li>
        <li>Test alarm functions and responses</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Documentation Requirements</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Record all test results with date and time</li>
        <li>Complete any required certification documents</li>
        <li>Update maintenance records with details of repairs</li>
        <li>Document any remaining issues or observations</li>
        <li>Obtain client/user sign-off where appropriate</li>
        <li>Update asset management systems</li>
        <li>File any warranty documentation for replacement parts</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Extended Monitoring</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Schedule follow-up inspection after initial period of operation</li>
        <li>Consider thermal imaging of repair locations</li>
        <li>Monitor energy consumption for abnormalities</li>
        <li>Check for any unusual vibration, noise, or heating</li>
        <li>Review operation with equipment users</li>
        <li>Consider root cause analysis to prevent recurrence</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Client/User Handover</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Explain nature of fault and repairs undertaken</li>
        <li>Provide operation instructions if procedures have changed</li>
        <li>Advise on preventative measures to avoid recurrence</li>
        <li>Issue appropriate certification and documentation</li>
        <li>Suggest maintenance schedule if appropriate</li>
        <li>Provide contact details for further support</li>
      </ul>
    </div>
  );
};

export default SystemRestoration;
