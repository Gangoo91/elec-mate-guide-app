
import React from 'react';

const IsolationProcedures = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Isolation and Lock-off Procedures</h2>
      <p>
        Safe isolation is a critical procedure that must be followed before working on electrical systems to prevent electric shock, injury, and fatalities. Proper isolation ensures that equipment cannot be energized while work is being carried out.
      </p>
      
      <h3 className="text-lg font-medium mt-4">The Five Steps of Safe Isolation</h3>
      <ol className="list-decimal pl-6 space-y-2 mt-2">
        <li><strong>Identify the circuit or equipment</strong> to be worked on and all possible sources of supply</li>
        <li><strong>Disconnect or isolate</strong> the circuit or equipment from every source of supply</li>
        <li><strong>Secure the isolation</strong> using locks and tags to prevent reconnection</li>
        <li><strong>Verify the isolation</strong> is effective by testing with an approved voltage indicator</li>
        <li><strong>Re-test the voltage indicator</strong> on a known live source before and after verification</li>
      </ol>
      
      <h3 className="text-lg font-medium mt-4">Required Equipment</h3>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Approved voltage indicator (two-pole tester)</li>
        <li>Proving unit for testing the voltage indicator</li>
        <li>Locks, multi-lock hasps, and lock-off devices</li>
        <li>Personal padlocks with unique keys</li>
        <li>Warning tags/labels</li>
        <li>Appropriate PPE</li>
        <li>Isolation certificates and documentation</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Key Principles of Safe Isolation</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Never rely on removal of fuses alone as isolation</li>
        <li>Always test before touch - even when you've isolated yourself</li>
        <li>Each person working on equipment should apply their own lock</li>
        <li>Only the person who applied the lock should remove it</li>
        <li>Never assume a circuit is dead - always prove it</li>
        <li>Consider all circuits live until proven otherwise</li>
        <li>No verbal instructions or assurances can replace proper testing</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Types of Isolation Devices</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Miniature Circuit Breaker (MCB) lock-off devices</li>
        <li>Molded Case Circuit Breaker (MCCB) locking devices</li>
        <li>Switch disconnector locking facilities</li>
        <li>Lock-off MCB blanks for consumer units</li>
        <li>Fuse removal locking devices</li>
        <li>Multi-lock hasps for multiple personnel working on same equipment</li>
        <li>Plug and socket locking devices</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Documentation Requirements</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Isolation certificates stating what has been isolated</li>
        <li>Permit-to-work systems for complex or high-risk work</li>
        <li>Signed handover procedures for shift changes</li>
        <li>Distribution network diagrams identifying isolation points</li>
        <li>Record of all locks applied and removed</li>
        <li>Verification test results</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Special Considerations</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Multiple sources of supply (e.g., standby generators)</li>
        <li>Stored energy in capacitors or UPS systems</li>
        <li>Back-EMF from motors or generators</li>
        <li>Inductive and capacitive coupling from adjacent live conductors</li>
        <li>Solar PV systems that generate when exposed to light</li>
        <li>Control systems with remote or automatic operation capability</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Regulatory Requirements</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>Electricity at Work Regulations 1989 (Legal requirement)</li>
        <li>HSE guidance documents (GS38, HSG85)</li>
        <li>BS 7671 Requirements for Electrical Installations</li>
        <li>Company-specific safe systems of work</li>
        <li>Site-specific procedures and permits</li>
      </ul>
    </div>
  );
};

export default IsolationProcedures;
