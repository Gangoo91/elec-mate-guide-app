
import React from 'react';
import { SectionData } from './interfaces';

export const section6_1: SectionData = {
  title: "Safe Isolation Procedures",
  description: "Comprehensive guide to safely isolating electrical systems before work.",
  content: (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[#FFC900]">Safe Isolation Procedures</h3>
      
      <p>
        Safe isolation is one of the most critical procedures for electricians. It ensures that the electrical
        supply is disconnected before work begins, preventing electric shock, injury, or death.
      </p>
      
      <div className="bg-[#22251e] p-4 rounded-lg border border-[#FFC900]/20 mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">The Safe Isolation Procedure - Step by Step</h4>
        
        <ol className="list-decimal pl-5 space-y-3">
          <li>
            <strong>Identify the circuit or equipment to be worked on</strong>
            <p className="text-sm">Correctly identify what needs to be isolated using circuit diagrams, labeling, or tracing.</p>
          </li>
          <li>
            <strong>Identify the correct point of isolation</strong>
            <p className="text-sm">This could be a circuit breaker, switch, fuse, or isolator. Ensure you can access it throughout the work.</p>
          </li>
          <li>
            <strong>Check your test equipment before use</strong>
            <p className="text-sm">Using the GS38-approved voltage indicator, test it on a known live source.</p>
          </li>
          <li>
            <strong>Isolate the supply</strong>
            <p className="text-sm">Switch off or remove the fuse. Remember that switching off is not the same as isolating.</p>
          </li>
          <li>
            <strong>Secure the isolation</strong>
            <p className="text-sm">Apply a lock and warning tag to prevent accidental re-energization. Keep the key with you.</p>
          </li>
          <li>
            <strong>Verify the supply is isolated</strong>
            <p className="text-sm">Use your voltage indicator to prove the circuit is dead at the point of work.</p>
          </li>
          <li>
            <strong>Re-check your test equipment after use</strong>
            <p className="text-sm">Test your voltage indicator again on a known live source to ensure it's still working.</p>
          </li>
          <li>
            <strong>Post warning notices</strong>
            <p className="text-sm">Place appropriate signs to inform others that work is in progress.</p>
          </li>
        </ol>
      </div>
      
      <div className="bg-[#22251e] p-4 rounded-lg mt-4">
        <h4 className="font-medium text-lg text-[#FFC900] mb-2">Essential Safe Isolation Equipment</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-medium text-[#FFC900]">Testing Equipment</h5>
            <ul className="list-disc pl-5">
              <li>GS38-approved voltage indicator</li>
              <li>Proving unit (if working in low-light conditions or where a known live source is not available)</li>
              <li>Test leads in good condition</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-[#FFC900]">Locking Off Equipment</h5>
            <ul className="list-disc pl-5">
              <li>MCB lock-off device</li>
              <li>Multi-lock hasp (for team working)</li>
              <li>Padlocks with unique keys</li>
              <li>Cable ties (temporary only)</li>
              <li>Warning tags</li>
              <li>Lockout kits</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h4 className="text-lg font-medium text-[#FFC900] mt-2">Special Considerations</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong>Multi-fed circuits:</strong> Some circuits may have more than one source of supply. All sources must be identified and isolated.
        </li>
        <li>
          <strong>Team working:</strong> When multiple people are working on the same system, each person should apply their own lock using a multi-lock hasp.
        </li>
        <li>
          <strong>Capacitors:</strong> Some equipment may contain stored energy even after isolation. Allow time for discharge or follow specific procedures.
        </li>
        <li>
          <strong>Generator back-feeds:</strong> Be aware of alternative supply sources like generators or UPS systems.
        </li>
      </ul>
      
      <div className="bg-[#2a2d24] p-3 rounded-lg">
        <h4 className="font-medium text-[#FFC900] mb-1">Remember:</h4>
        <ul className="list-disc pl-5">
          <li>Never rely on someone else's isolation</li>
          <li>Never assume a circuit is dead - always test</li>
          <li>Never use multimeters for voltage detection during isolation</li>
          <li>If in doubt, seek assistance from a qualified person</li>
          <li>Always follow the full procedure, even for quick jobs</li>
        </ul>
      </div>
    </div>
  )
};
