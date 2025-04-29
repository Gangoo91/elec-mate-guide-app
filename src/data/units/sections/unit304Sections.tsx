
import React from 'react';
import LessonContent from "@/components/units/LessonContent";
import { ContentSection } from "@/components/units/ContentSection";

export const sections304: Record<string, { 
  title: string; 
  description?: string; 
  content: React.ReactNode;
  detailedContent?: React.ReactNode;
}> = {
  "1.1": {
    title: "1.1 What to check before you power up",
    description: "Ensuring compliance with BS 7671, Part 6 through proper verification.",
    content: (
      <div className="space-y-6">
        <LessonContent title="Initial Verification - Pre-Power Checks">
          <p>Initial verification is a crucial step in ensuring that new electrical installations comply with regulations and are safe to use.</p>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">What to Check Before You Power Up</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Correct wiring:</strong> Verify proper connections, appropriate cable sizes and types according to design specifications</li>
            <li><strong>Correct protection devices:</strong> Confirm properly rated MCBs, RCDs, fuses are installed as per design</li>
            <li><strong>No signs of damage:</strong> Inspect cables, accessories, enclosures for physical damage</li>
            <li><strong>No missing components:</strong> Ensure all required parts have been installed</li>
            <li><strong>Correct terminations:</strong> Check that all conductors are properly terminated with appropriate torque settings</li>
            <li><strong>Appropriate labels:</strong> Verify warning notices and circuit identification are in place</li>
            <li><strong>Accessibility:</strong> Ensure appropriate access to equipment for operation and maintenance</li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">BS 7671 Part 6 Requirements</h3>
          <p>Part 6 of BS 7671 (Requirements for Electrical Installations, IET Wiring Regulations) specifically covers:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Section 641:</strong> Initial verification requirements</li>
            <li><strong>Section 642:</strong> Continuity testing procedures</li>
            <li><strong>Section 643:</strong> Insulation resistance testing</li>
            <li><strong>Section 644:</strong> Polarity testing</li>
            <li><strong>Section 645:</strong> Earth loop impedance testing</li>
            <li><strong>Section 646:</strong> RCD testing protocols</li>
            <li><strong>Section 647:</strong> Phase sequence verification</li>
            <li><strong>Section 648:</strong> Functional testing</li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Inspector Qualifications</h3>
          <p>Initial verification must be carried out by a skilled person with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Competence in inspection and testing techniques</li>
            <li>Understanding of the installation being tested</li>
            <li>Knowledge of potential hazards during testing</li>
            <li>Experience in interpreting test results</li>
            <li>Appropriate qualifications (e.g., City & Guilds 2391-50 or 2394)</li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">When Initial Verification Is Required</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>For all new electrical installations before energizing</li>
            <li>After major alterations to existing installations</li>
            <li>After additions to an existing installation</li>
            <li>When there is a change in ownership requiring certification</li>
            <li>Before reconnection of an installation that has been disconnected for an extended period</li>
          </ul>
        </LessonContent>
        
        <ContentSection
          title="Learning Objectives - Initial Verification"
          content={
            <ul className="list-disc pl-6 space-y-2">
              <li>Understand the purpose and scope of initial verification</li>
              <li>Know the key elements to check before powering up an installation</li>
              <li>Understand the regulatory requirements in BS 7671 Part 6</li>
              <li>Recognize the qualifications needed to perform verification</li>
              <li>Identify when initial verification is required</li>
            </ul>
          }
        />
      </div>
    ),
    detailedContent: (
      <div className="space-y-6">
        <h3 className="text-2xl font-medium text-[#FFC900] mb-4">Common Pre-Power Issues</h3>
        <p className="mb-4">During initial verification, these common issues should be identified before applying power:</p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full text-[#FFC900]/80">
            <thead>
              <tr className="border-b border-[#FFC900]/20">
                <th className="py-2 px-4 text-left">Issue Type</th>
                <th className="py-2 px-4 text-left">Example Issues</th>
                <th className="py-2 px-4 text-left">Potential Consequences</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-2 px-4">Connection Issues</td>
                <td className="py-2 px-4">Loose terminals, poor crimping, wrong torque settings</td>
                <td className="py-2 px-4">Overheating, fire risk, intermittent operation</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-2 px-4">Cable Issues</td>
                <td className="py-2 px-4">Undersized cables, damaged insulation, incorrect cable types</td>
                <td className="py-2 px-4">Overheating, voltage drop, shock risk</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-2 px-4">Protection Issues</td>
                <td className="py-2 px-4">Incorrect device ratings, wrong type of device, missing RCDs</td>
                <td className="py-2 px-4">Inadequate protection, nuisance tripping, unsafe installation</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-2 px-4">Earthing Issues</td>
                <td className="py-2 px-4">Missing earth connections, undersized earth conductors</td>
                <td className="py-2 px-4">Shock risk, failure to disconnect during fault</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-2 px-4">Identification Issues</td>
                <td className="py-2 px-4">Missing labels, incorrect circuit identification</td>
                <td className="py-2 px-4">Difficulty in maintenance, unsafe isolation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  
  "1.2": {
    title: "1.2 Documentation requirements",
    description: "Understanding the necessary paperwork for installation verification.",
    content: (
      <div className="space-y-6">
        <LessonContent title="Documentation Requirements for Verification">
          <p>Proper documentation is not just a legal requirement but essential for future reference, maintenance, and safety.</p>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Required Documentation</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Electrical Installation Certificate (EIC):</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Required for all new installations</li>
                <li>Details the extent and limitations of the work</li>
                <li>Contains declarations by designer, installer, and tester</li>
                <li>Valid for specific periods depending on installation type</li>
              </ul>
            </li>
            <li><strong>Schedule of Inspections:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Records all items physically checked during visual inspection</li>
                <li>Contains tick boxes for satisfactory/unsatisfactory/not applicable</li>
                <li>Must be completed before electrical testing begins</li>
              </ul>
            </li>
            <li><strong>Schedule of Test Results:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Records all measured values from testing</li>
                <li>Documents specific circuit details</li>
                <li>Includes all test values (continuity, insulation resistance, etc.)</li>
              </ul>
            </li>
            <li><strong>Distribution board schedules:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Identifies each circuit and its protection device</li>
                <li>States what each circuit supplies</li>
                <li>Must be fixed at or near each distribution board</li>
              </ul>
            </li>
            <li><strong>Circuit charts and diagrams:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Schematic diagrams showing electrical connections</li>
                <li>May include single-line diagrams of supply arrangements</li>
                <li>Essential for future maintenance and modifications</li>
              </ul>
            </li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Documentation Requirements by Installation Type</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-[#FFC900]/80">
              <thead>
                <tr className="border-b border-[#FFC900]/20">
                  <th className="py-2 px-4 text-left">Installation Type</th>
                  <th className="py-2 px-4 text-left">Required Documentation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-4">New installation</td>
                  <td className="py-2 px-4">EIC + Schedules of Inspection and Test Results + DB Schedules</td>
                </tr>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-4">Major alteration</td>
                  <td className="py-2 px-4">EIC + Schedules of Inspection and Test Results + Updated DB Schedules</td>
                </tr>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-4">Minor alteration (e.g., adding a socket)</td>
                  <td className="py-2 px-4">Minor Electrical Installation Works Certificate (MEIWC)</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Periodic inspection</td>
                  <td className="py-2 px-4">Electrical Installation Condition Report (EICR) + Schedules</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Document Retention</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Originals should be provided to the client/owner</li>
            <li>Copies should be retained by the electrical contractor</li>
            <li>Retention period should be at least until the next inspection is due</li>
            <li>Electronic copies are acceptable if secure and retrievable</li>
          </ul>
        </LessonContent>
        
        <ContentSection
          title="Documentation Requirements - Key Points"
          content={
            <ul className="list-disc pl-6 space-y-2">
              <li>All documentation must be completed in full - no blank entries</li>
              <li>Documentation must be signed by competent persons</li>
              <li>Records must be kept for future reference and legal purposes</li>
              <li>The type of documentation required depends on the nature of the work</li>
              <li>Building regulations and other statutory requirements may require specific additional documentation</li>
            </ul>
          }
        />
      </div>
    )
  },
  
  "2.1": {
    title: "2.1 Correct procedure for safe isolation",
    description: "Step-by-step process for safely isolating electrical installations.",
    content: (
      <div className="space-y-6">
        <LessonContent title="Safe Isolation Procedures">
          <p>Safe isolation is a fundamental procedure that all electrical personnel must master to ensure safety before working on electrical installations.</p>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">The 'Lock Out, Tag Out' Principle</h3>
          <p>This is the foundation of safe isolation, ensuring that once a circuit is isolated, it cannot be reconnected while work is in progress.</p>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Safe Isolation Procedure - Step by Step</h3>
          <ol className="list-decimal pl-6 space-y-3">
            <li><strong>Identify the circuit to be isolated</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Use diagrams and distribution board schedules</li>
                <li>Confirm with premises owner if necessary</li>
                <li>Trace cables if identification is unclear</li>
              </ul>
            </li>
            <li><strong>Test voltage indicator on known live source</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Use a proving unit or confirmed live outlet</li>
                <li>Verify all functions of the voltage indicator</li>
                <li>Ensure indicator is suitable for the voltage level</li>
              </ul>
            </li>
            <li><strong>Isolate the supply</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Switch off the appropriate circuit breaker/isolator</li>
                <li>Remove fuse if applicable</li>
                <li>Use the main switch if isolating the entire installation</li>
              </ul>
            </li>
            <li><strong>Secure the isolation</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Apply lock to prevent reconnection</li>
                <li>Keep the key with you at all times</li>
                <li>Attach warning tag with your name and contact information</li>
                <li>If multiple people are working, each should apply their own lock</li>
              </ul>
            </li>
            <li><strong>Verify the isolation</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Test between all conductors (L-N, L-E, N-E)</li>
                <li>Test at the point of work, not just at the isolator</li>
                <li>Ensure all potential sources are isolated (watch for backfeeds)</li>
              </ul>
            </li>
            <li><strong>Test voltage indicator again on known live source</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Confirm indicator is still functioning correctly</li>
                <li>Complete the "test-isolate-test" process</li>
              </ul>
            </li>
          </ol>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Approved Test Equipment</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Voltage indicators:</strong> Must meet GS38 requirements and BS EN 61243-3 standards</li>
            <li><strong>Test leads:</strong> Must be adequately insulated and fused where required</li>
            <li><strong>Proving units:</strong> Used to verify test equipment functionality</li>
            <li><strong>Locking devices:</strong> Compatible with the isolation points being used</li>
            <li><strong>Warning tags:</strong> Clear, durable, and with appropriate information</li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Common Isolation Failures</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Failure to identify all supplies:</strong> Multiple supplies, generator backfeeds</li>
            <li><strong>Inadequate testing:</strong> Not testing at the point of work</li>
            <li><strong>Failure to secure isolation:</strong> Not applying locks or tags</li>
            <li><strong>Premature reconnection:</strong> Other workers restoring supply</li>
            <li><strong>Incorrect identification:</strong> Working on wrong circuit</li>
          </ul>
        </LessonContent>
        
        <ContentSection
          title="Safe Isolation - Critical Points to Remember"
          content={
            <div>
              <p className="font-medium">Remember these critical points to ensure safe isolation:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Never rely on memory for circuit identification</li>
                <li>Always follow the complete "test-isolate-test" procedure</li>
                <li>Never lend your keys to anyone while your lock is in use</li>
                <li>Always test at the point of work, not just at the isolator</li>
                <li>If in doubt about complete isolation, do not proceed with the work</li>
                <li>Consider all conductors as potentially live until proven dead</li>
              </ul>
            </div>
          }
        />
      </div>
    ),
    detailedContent: (
      <div className="space-y-6">
        <h3 className="text-2xl font-medium text-[#FFC900] mb-4">Special Isolation Considerations</h3>
        
        <div className="bg-[#353a2c] p-4 rounded-lg mb-6">
          <h4 className="text-xl font-medium text-[#FFC900] mb-2">Capacitor Discharge</h4>
          <p className="text-[#FFC900]/80">Even after isolation, some equipment may contain stored energy in capacitors. Always allow adequate discharge time and verify with test equipment before working.</p>
        </div>
        
        <div className="bg-[#353a2c] p-4 rounded-lg mb-6">
          <h4 className="text-xl font-medium text-[#FFC900] mb-2">Induction Hazards</h4>
          <p className="text-[#FFC900]/80">Long cables run alongside live cables can develop induced voltages even when isolated. Apply temporary bonds to discharge these voltages safely.</p>
        </div>
        
        <div className="bg-[#353a2c] p-4 rounded-lg mb-6">
          <h4 className="text-xl font-medium text-[#FFC900] mb-2">Backup Supplies</h4>
          <p className="text-[#FFC900]/80">UPS systems, generators, and dual supplies can create hazards if not all sources are isolated. Always check system diagrams carefully and isolate all possible sources.</p>
        </div>
        
        <div className="bg-[#353a2c] p-4 rounded-lg">
          <h4 className="text-xl font-medium text-[#FFC900] mb-2">Documentation of Isolation</h4>
          <p className="text-[#FFC900]/80">In complex systems, create a written isolation plan listing all points of isolation, verification methods, and responsible persons. This becomes especially important in team environments.</p>
        </div>
      </div>
    )
  },
  
  "2.2": {
    title: "2.2 Visual inspection procedures",
    description: "Conducting and recording visual inspections before testing.",
    content: (
      <div className="space-y-6">
        <LessonContent title="Visual Inspection Procedures">
          <p>Visual inspection is the first and one of the most important steps in the verification process. Many defects can be identified by careful visual inspection before any testing takes place.</p>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Visual Inspection Checklist</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Conductor Identification:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Line conductors - Brown (single phase) or Brown/Black/Grey (three phase)</li>
                <li>Neutral conductors - Blue</li>
                <li>Protective conductors - Green/Yellow</li>
                <li>Switch wires - Any color except Green/Yellow</li>
              </ul>
            </li>
            <li><strong>Main and supplementary bonding:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Presence and condition of main bonding conductors</li>
                <li>Correct sizing of bonding conductors</li>
                <li>Proper connection to main earthing terminal</li>
                <li>Bonding of gas, water, and other services</li>
                <li>Supplementary bonding in special locations (bathrooms, etc.)</li>
              </ul>
            </li>
            <li><strong>IP ratings:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Appropriate for environment/location</li>
                <li>Correct rating for wet areas (bathrooms, outdoors)</li>
                <li>Integrity of seals and gaskets</li>
                <li>Correct equipment for zone classification</li>
              </ul>
            </li>
            <li><strong>Labeling:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Warning notices at appropriate locations</li>
                <li>Circuit identification at distribution boards</li>
                <li>Presence of RCD periodic test notices</li>
                <li>Maximum Zs values displayed</li>
                <li>Dual supply warnings where applicable</li>
              </ul>
            </li>
            <li><strong>Cable routes and installation methods:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Appropriate support and fixing methods</li>
                <li>Correct separation from other services</li>
                <li>Protection from mechanical damage</li>
                <li>Appropriate use of containment systems</li>
                <li>Bending radii within limits</li>
              </ul>
            </li>
            <li><strong>Connection and terminations:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Secure and correct termination of conductors</li>
                <li>No exposed live parts</li>
                <li>Correct connector types for conductor material/size</li>
                <li>Evidence of correct torque settings where required</li>
              </ul>
            </li>
            <li><strong>Accessibility for operation and maintenance:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Access to distribution boards and isolation points</li>
                <li>Adequate working space around equipment</li>
                <li>Functional access for future maintenance</li>
              </ul>
            </li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Recording Inspection Results</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use Schedule of Inspections form from BS 7671</li>
            <li>Mark each item as:
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>✓ (tick) - Satisfactory</li>
                <li>✗ (cross) - Unsatisfactory</li>
                <li>N/A - Not applicable</li>
              </ul>
            </li>
            <li>Record any defects or omissions in detail</li>
            <li>Complete before electrical testing begins</li>
            <li>Include all required sections (no blank entries)</li>
            <li>Sign and date the inspection schedule</li>
          </ul>
        </LessonContent>
        
        <ContentSection
          title="Common Installation Defects"
          content={
            <div>
              <p className="font-medium">Inspections frequently reveal certain types of defects that compromise safety or compliance:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Dangerous Defects (Code C1):</strong> Exposed live parts, absence of earthing, incorrect polarity</li>
                <li><strong>Potentially Dangerous Defects (Code C2):</strong> Inadequate IP ratings, broken accessories, overloaded circuits</li>
                <li><strong>Improvement Recommended (Code C3):</strong> Lack of RCD protection (in some cases), outdated but safe equipment</li>
              </ul>
              <p className="mt-3 italic">Note: C1 defects require immediate action, C2 defects require urgent action, and C3 defects should be addressed when practical.</p>
            </div>
          }
        />
      </div>
    ),
    detailedContent: (
      <div className="space-y-6">
        <h3 className="text-2xl font-medium text-[#FFC900] mb-4">Visual Inspection Tools and Equipment</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#353a2c] p-4 rounded-lg">
            <h4 className="text-xl font-medium text-[#FFC900] mb-2">Basic Inspection Tools</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Torch with focused beam</li>
              <li>Inspection mirrors</li>
              <li>Digital camera for documentation</li>
              <li>Steel tape measure</li>
              <li>Cable detector</li>
              <li>Thermal imaging camera (for advanced inspections)</li>
            </ul>
          </div>
          
          <div className="bg-[#353a2c] p-4 rounded-lg">
            <h4 className="text-xl font-medium text-[#FFC900] mb-2">Documentation Required</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Installation drawings</li>
              <li>Distribution board schedules</li>
              <li>Previous inspection reports (if available)</li>
              <li>Schedule of Inspections form</li>
              <li>Reference copy of BS 7671</li>
              <li>Manufacturer's instructions for special equipment</li>
            </ul>
          </div>
        </div>
        
        <h3 className="text-2xl font-medium text-[#FFC900] mt-6 mb-4">Special Locations - Additional Inspection Requirements</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-[#FFC900]/80">
            <thead>
              <tr className="border-b border-[#FFC900]/20">
                <th className="py-2 px-4 text-left">Location Type</th>
                <th className="py-2 px-4 text-left">Additional Inspection Requirements</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-2 px-4">Bathrooms</td>
                <td className="py-2 px-4">Zone classification compliance, supplementary bonding, IPX ratings</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-2 px-4">Swimming Pools</td>
                <td className="py-2 px-4">Zone measurements, SELV lighting, separated circuits</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-2 px-4">Agricultural Locations</td>
                <td className="py-2 px-4">Animal-proof equipment, RCD protection, equipotential bonding grids</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Construction Sites</td>
                <td className="py-2 px-4">Robust equipment, mechanical protection, reduced voltage systems</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  
  "3.1": {
    title: "3.1 Dead Testing",
    description: "Continuity, insulation resistance, and polarity tests.",
    content: (
      <div className="space-y-6">
        <LessonContent title="Dead Testing Procedures">
          <p>Dead testing is performed with the installation disconnected from the supply to verify safety before energization.</p>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Continuity of Protective Conductors</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Purpose:</strong> Ensure complete earth paths exist throughout the installation</li>
            <li><strong>Method:</strong>
              <ol className="list-decimal pl-6 space-y-1 mt-1">
                <li>Connect low-resistance ohmmeter between main earthing terminal and exposed conductive parts</li>
                <li>Measure resistance value and record</li>
                <li>Test all accessible exposed conductive parts</li>
                <li>Check all main and supplementary bonding conductors</li>
              </ol>
            </li>
            <li><strong>Expected Results:</strong> Low resistance (typically &lt;0.05Ω plus the resistance of the conductor)</li>
            <li><strong>Common Issues:</strong> Poor connections, damaged conductors, incorrect terminations, high-resistance joints</li>
            <li><strong>Tips:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Null test leads before testing to remove their resistance from readings</li>
                <li>Use R₁+R₂ method for longer circuits</li>
                <li>Record highest resistance value found</li>
              </ul>
            </li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Ring Final Circuit Continuity</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Purpose:</strong> Verify correct wiring of ring final circuits and identify any interconnections</li>
            <li><strong>Method:</strong>
              <ol className="list-decimal pl-6 space-y-1 mt-1">
                <li>Measure end-to-end resistance of Line conductors</li>
                <li>Measure end-to-end resistance of Neutral conductors</li>
                <li>Measure end-to-end resistance of CPC conductors</li>
                <li>Measure L-N loop resistance at each socket</li>
                <li>Measure L-CPC loop resistance at each socket</li>
              </ol>
            </li>
            <li><strong>Expected Results:</strong> End-to-end readings approximately half of cross-connection readings</li>
            <li><strong>Common Issues:</strong> Broken rings, interconnected rings, uneven conductor sizing, reversed polarity</li>
            <li><strong>Tips:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Make a table of readings to help identify anomalies</li>
                <li>Calculate expected values based on cable length and CSA</li>
                <li>Check for consistency of readings around the ring</li>
              </ul>
            </li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Insulation Resistance Testing</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Purpose:</strong> Ensure no leakage between conductors or to earth</li>
            <li><strong>Method:</strong>
              <ol className="list-decimal pl-6 space-y-1 mt-1">
                <li>Disconnect sensitive electronic equipment</li>
                <li>Apply test voltage between all conductors and between conductors and earth</li>
                <li>Test Line-Neutral, Line-Earth, and Neutral-Earth</li>
                <li>Test with all switches closed or link out switches</li>
                <li>Record lowest readings for each circuit</li>
              </ol>
            </li>
            <li><strong>Test Voltage:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>500V DC for installations up to 500V AC</li>
                <li>1000V DC for installations up to 1000V AC</li>
                <li>250V DC for SELV and PELV circuits</li>
              </ul>
            </li>
            <li><strong>Expected Results:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>At least 1MΩ for circuits up to 500V (typically much higher)</li>
                <li>At least 1MΩ for circuits above 500V</li>
                <li>At least 0.5MΩ for SELV and PELV circuits</li>
              </ul>
            </li>
            <li><strong>Common Issues:</strong> Moisture, damaged insulation, connected equipment affecting readings</li>
            <li><strong>Safety:</strong> Disconnect sensitive electronic equipment before testing</li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Polarity Testing</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Purpose:</strong> Check correct connection of line, neutral, and earth</li>
            <li><strong>Method:</strong>
              <ol className="list-decimal pl-6 space-y-1 mt-1">
                <li>Use continuity testing to verify correct connections</li>
                <li>Check center contact of lampholders is connected to line</li>
                <li>Check switched line in correct pole of switched accessories</li>
                <li>Check single-pole devices only break the line conductor</li>
              </ol>
            </li>
            <li><strong>Expected Results:</strong> Continuity between expected points, no reversed connections</li>
            <li><strong>Common Issues:</strong> Reversed L/N, switched neutral instead of line, incorrect wiring of two-way switches</li>
            <li><strong>Critical Points:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Edison screw lampholders (center pin must be line)</li>
                <li>Single-pole switches (must break line only)</li>
                <li>Socket outlets (correct orientation of L/N/E)</li>
                <li>FCUs and connection units (correct orientation)</li>
              </ul>
            </li>
          </ul>
        </LessonContent>
        
        <ContentSection
          title="Dead Testing Sequence - Important!"
          content={
            <div>
              <p className="font-medium">Tests must be performed in this exact order:</p>
              <ol className="list-decimal pl-6 space-y-2 mt-3">
                <li>Continuity of Protective Conductors (CPCs)</li>
                <li>Continuity of Ring Final Circuits</li>
                <li>Insulation Resistance</li>
                <li>Polarity Testing</li>
              </ol>
              <p className="mt-3 text-[#FFC900]/70 italic">This sequence ensures safety and prevents damage to equipment. Never perform insulation resistance tests before checking continuity, as damaged earth conductors could leave equipment cases dangerously live during testing.</p>
            </div>
          }
        />
      </div>
    ),
    detailedContent: (
      <div className="space-y-6">
        <h3 className="text-2xl font-medium text-[#FFC900] mb-4">Test Instrument Requirements</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full text-[#FFC900]/80">
            <thead>
              <tr className="border-b border-[#FFC900]/20">
                <th className="py-2 px-4 text-left">Test</th>
                <th className="py-2 px-4 text-left">Instrument Requirements</th>
                <th className="py-2 px-4 text-left">Applicable Standards</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-2 px-4">Continuity</td>
                <td className="py-2 px-4">Low-resistance ohmmeter, test current of at least 200mA</td>
                <td className="py-2 px-4">BS EN 61557-4</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-2 px-4">Insulation Resistance</td>
                <td className="py-2 px-4">Insulation tester capable of providing 250V, 500V, or 1000V DC test voltage</td>
                <td className="py-2 px-4">BS EN 61557-2</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Polarity</td>
                <td className="py-2 px-4">Low-resistance ohmmeter or continuity tester</td>
                <td className="py-2 px-4">BS EN 61557-7</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-2xl font-medium text-[#FFC900] mt-6 mb-4">Detailed Testing Methods</h3>
        
        <div className="bg-[#353a2c] p-4 rounded-lg mb-6">
          <h4 className="text-xl font-medium text-[#FFC900] mb-2">R₁+R₂ Method for Continuity</h4>
          <p className="text-[#FFC900]/80 mb-3">For circuits where direct access to the earth terminal of the accessory is not possible:</p>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Temporarily connect line and CPC together at the distribution board</li>
            <li>Measure continuity between line and earth terminals at the accessory</li>
            <li>This measures the loop resistance (R₁+R₂) of both conductors</li>
            <li>The measurement must be less than the maximum permitted for the circuit protection</li>
          </ol>
        </div>
        
        <div className="bg-[#353a2c] p-4 rounded-lg">
          <h4 className="text-xl font-medium text-[#FFC900] mb-2">Determining Ring Circuit Interconnections</h4>
          <p className="text-[#FFC900]/80 mb-3">If you suspect interconnected rings:</p>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Disconnect both ends of one conductor (e.g., line conductor)</li>
            <li>Test for continuity between the disconnected ends</li>
            <li>If continuity exists, there is an interconnection</li>
            <li>Repeat for other conductors to identify all interconnections</li>
            <li>Interconnections must be removed as they can cause uneven loading and overheating</li>
          </ol>
        </div>
      </div>
    )
  },
  
  "3.2": {
    title: "3.2 Live Testing",
    description: "Earth fault loop impedance, PFC, and RCD testing.",
    content: (
      <div className="space-y-6">
        <LessonContent title="Live Testing Procedures">
          <p>Live testing is performed with the installation energized to verify protection performance under fault conditions.</p>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Earth Fault Loop Impedance Testing</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Purpose:</strong> Check that fault current will trip protection quickly enough</li>
            <li><strong>Method:</strong>
              <ol className="list-decimal pl-6 space-y-1 mt-1">
                <li>Connect loop impedance tester between line conductor and protective conductor</li>
                <li>The tester applies a load between these conductors</li>
                <li>Measure at the origin of the installation (Ze)</li>
                <li>Measure at the furthest point of each circuit (Zs)</li>
                <li>Record values for each circuit</li>
              </ol>
            </li>
            <li><strong>External Impedance (Ze):</strong> Measured at origin of installation</li>
            <li><strong>Circuit Impedance (Zs):</strong> Measured at furthest point of each circuit</li>
            <li><strong>Expected Results:</strong> Values below maximum permitted for circuit protection type</li>
            <li><strong>Safety:</strong> Use non-trip testers where RCDs are installed to prevent nuisance tripping</li>
            <li><strong>Key Formulas:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Zs = Ze + (R₁ + R₂)</li>
                <li>Maximum Zs values depend on disconnection times and protective device</li>
              </ul>
            </li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Prospective Fault Current (PFC) Testing</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Purpose:</strong> Measure potential fault currents to ensure protection can handle them</li>
            <li><strong>Method:</strong>
              <ol className="list-decimal pl-6 space-y-1 mt-1">
                <li>Use PFC tester at distribution point</li>
                <li>Measure between line and neutral (PSCC)</li>
                <li>Measure between line and earth (PEFC)</li>
                <li>Record highest value found</li>
              </ol>
            </li>
            <li><strong>Expected Results:</strong> Values within breaking capacity of protective devices</li>
            <li><strong>Critical Points:</strong> Origin of installation and all distribution boards</li>
            <li><strong>Safety:</strong> Ensure test equipment is rated for expected fault currents</li>
            <li><strong>Important Notes:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Record the higher of PSCC and PEFC values</li>
                <li>Ensure all protective devices have adequate breaking capacity</li>
                <li>Consider the effect of supply impedance variations</li>
              </ul>
            </li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">RCD Testing</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Purpose:</strong> Verify RCDs operate within required times at rated current</li>
            <li><strong>Method:</strong>
              <ol className="list-decimal pl-6 space-y-1 mt-1">
                <li>Connect RCD tester to protected circuit</li>
                <li>Apply test current at both 0° and 180° phase angles</li>
                <li>Record the slower of the two results</li>
                <li>Perform tests at different current multiples</li>
              </ol>
            </li>
            <li><strong>Test Currents:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>50% rated current (no trip expected)</li>
                <li>100% rated current (must trip)</li>
                <li>5× rated current (fast trip required)</li>
              </ul>
            </li>
            <li><strong>Expected Results:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>General RCDs: ≤300ms at rated current, ≤40ms at 5× rated current</li>
                <li>S-type RCDs: 130-500ms at rated current, ≤150ms at 5× rated current</li>
                <li>No trip at 50% of rated current</li>
              </ul>
            </li>
            <li><strong>Documentation:</strong> Record worst-case trip time for each test</li>
            <li><strong>Additional Considerations:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Test integral test button operation</li>
                <li>Consider RCD type (AC, A, B, F) for compatibility with load</li>
                <li>Check selectivity between cascaded RCDs</li>
              </ul>
            </li>
          </ul>
        </LessonContent>
        
        <ContentSection
          title="Live Testing Sequence - Important!"
          content={
            <div>
              <p className="font-medium">Live tests must be performed in this order after dead testing is complete:</p>
              <ol className="list-decimal pl-6 space-y-2 mt-3">
                <li>Earth Fault Loop Impedance (Zs)</li>
                <li>Prospective Fault Current (PFC)</li>
                <li>RCD Trip Testing</li>
                <li>Functional Tests</li>
              </ol>
              <p className="mt-3 text-[#FFC900]/70 italic">Always follow safe isolation procedures before and after live testing. When performing live testing, ensure that you have appropriate safety measures in place and that no one is working on the circuits being tested.</p>
            </div>
          }
        />
      </div>
    ),
    detailedContent: (
      <div className="space-y-6">
        <h3 className="text-2xl font-medium text-[#FFC900] mb-4">Maximum Earth Fault Loop Impedance Values</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full text-[#FFC900]/80">
            <thead>
              <tr className="border-b border-[#FFC900]/20">
                <th className="py-2 px-4 text-left">Device Rating</th>
                <th className="py-2 px-4 text-left">BS 3036 Fuse</th>
                <th className="py-2 px-4 text-left">BS 1361 Fuse</th>
                <th className="py-2 px-4 text-left">BS 88-3 Fuse</th>
                <th className="py-2 px-4 text-left">Type B MCB</th>
                <th className="py-2 px-4 text-left">Type C MCB</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-2 px-4">6A</td>
                <td className="py-2 px-4">7.15Ω</td>
                <td className="py-2 px-4">6.45Ω</td>
                <td className="py-2 px-4">10.99Ω</td>
                <td className="py-2 px-4">7.67Ω</td>
                <td className="py-2 px-4">3.83Ω</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-2 px-4">16A</td>
                <td className="py-2 px-4">2.39Ω</td>
                <td className="py-2 px-4">2.07Ω</td>
                <td className="py-2 px-4">3.39Ω</td>
                <td className="py-2 px-4">2.87Ω</td>
                <td className="py-2 px-4">1.44Ω</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-2 px-4">32A</td>
                <td className="py-2 px-4">0.96Ω</td>
                <td className="py-2 px-4">0.86Ω</td>
                <td className="py-2 px-4">1.54Ω</td>
                <td className="py-2 px-4">1.44Ω</td>
                <td className="py-2 px-4">0.72Ω</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-[#353a2c] p-4 rounded-lg mt-6">
          <h4 className="text-xl font-medium text-[#FFC900] mb-2">RCD Testing Requirements Summary</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full text-[#FFC900]/80">
              <thead>
                <tr className="border-b border-[#FFC900]/20">
                  <th className="py-2 px-4 text-left">RCD Type</th>
                  <th className="py-2 px-4 text-left">Test Current</th>
                  <th className="py-2 px-4 text-left">Maximum Trip Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-4" rowSpan={2}>General RCD</td>
                  <td className="py-2 px-4">1× IΔn</td>
                  <td className="py-2 px-4">300ms</td>
                </tr>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-4">5× IΔn</td>
                  <td className="py-2 px-4">40ms</td>
                </tr>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-4" rowSpan={2}>S-type RCD</td>
                  <td className="py-2 px-4">1× IΔn</td>
                  <td className="py-2 px-4">130-500ms</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">5× IΔn</td>
                  <td className="py-2 px-4">50-150ms</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[#FFC900]/70 italic">Note: IΔn is the rated residual operating current of the RCD (e.g., 30mA, 100mA)</p>
        </div>
      </div>
    )
  },
  
  "4.1": {
    title: "4.1 Correct testing sequence",
    description: "From visual inspection through to functional testing.",
    content: (
      <div className="space-y-6">
        <LessonContent title="Sequence of Testing">
          <p>Following the correct testing sequence is essential for safety and to ensure accurate test results.</p>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Complete Testing Sequence</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Visual Inspection</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Must be completed before any electrical testing</li>
                <li>Identify visible defects that could make testing unsafe</li>
                <li>Check connections, identification, and installation methods</li>
                <li>Complete Schedule of Inspections form</li>
                <li>Address any serious defects before proceeding</li>
              </ul>
            </li>
            <li><strong>Dead Tests</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Continuity of protective conductors</li>
                <li>Continuity of ring final circuits</li>
                <li>Insulation resistance</li>
                <li>Polarity</li>
                <li>Note: installation must be completely isolated during these tests</li>
                <li>Record all results before proceeding to live tests</li>
              </ul>
            </li>
            <li><strong>Live Tests</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Earth fault loop impedance (Zs)</li>
                <li>Prospective fault current (PFC)</li>
                <li>RCD operation</li>
                <li>Note: installation must be energized safely before these tests</li>
                <li>Ensure circuit protection is reinstated between tests</li>
              </ul>
            </li>
            <li><strong>Functional Testing</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Check operation of all switches, controls, and interlocks</li>
                <li>Test RCD manual test buttons</li>
                <li>Verify operation of all intended electrical equipment</li>
                <li>Check emergency systems (where applicable)</li>
                <li>Verify correct operation of any special installations</li>
              </ul>
            </li>
          </ol>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Why Sequence Matters</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Safety:</strong> Early tests identify issues that could make later tests hazardous</li>
            <li><strong>Test Integrity:</strong> Some tests can affect the results of others if performed out of sequence</li>
            <li><strong>Efficiency:</strong> Logical progression minimizes time spent on testing</li>
            <li><strong>Damage Prevention:</strong> Ensures issues are found before they can damage connected equipment</li>
            <li><strong>Regulatory Compliance:</strong> Required by BS 7671 to follow this specific sequence</li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Transition Between Dead and Live Testing</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Completion of Dead Tests</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Ensure all test results are satisfactory</li>
                <li>Record all results in appropriate schedules</li>
              </ul>
            </li>
            <li><strong>Preparation for Live Testing</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Ensure all test equipment disconnected</li>
                <li>Check for any temporary connections made for testing and remove them</li>
                <li>Reinstall any devices temporarily removed (fuses, etc.)</li>
                <li>Inform all relevant personnel that the circuit will be energized</li>
              </ul>
            </li>
            <li><strong>Energizing the Circuit</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Remove locks and tags used for isolation</li>
                <li>Energize the installation in a controlled manner</li>
                <li>Observe for any immediate issues (sparks, unusual sounds, etc.)</li>
              </ul>
            </li>
            <li><strong>Verification</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Verify voltage at appropriate test points</li>
                <li>Check for correct polarity at outlets</li>
                <li>Confirm voltage levels are within expected ranges</li>
              </ul>
            </li>
          </ol>
        </LessonContent>
        
        <ContentSection
          title="Safety First: Key Reminders"
          content={
            <div>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Never bypass the visual inspection – it's your first line of defense</li>
                <li>Always complete all dead tests before any live testing</li>
                <li>Follow proper safe isolation procedures when switching between dead and live testing</li>
                <li>Record all test results immediately after each test</li>
                <li>If any test fails, stop and investigate before proceeding</li>
                <li>Always use appropriate PPE for live testing</li>
                <li>Never work alone when conducting live tests</li>
              </ul>
            </div>
          }
        />
      </div>
    ),
    detailedContent: (
      <div className="space-y-6">
        <h3 className="text-2xl font-medium text-[#FFC900] mb-4">Testing Documentation and Record Keeping</h3>
        
        <div className="bg-[#353a2c] p-4 rounded-lg mb-6">
          <h4 className="text-xl font-medium text-[#FFC900] mb-2">Test Results Organization</h4>
          <p className="text-[#FFC900]/80 mb-3">For efficient documentation and future reference:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Use dedicated testing software or pre-printed forms where possible</li>
            <li>Create a systematic approach to recording results (e.g., by circuit number)</li>
            <li>Take photographs of unusual installations or defects</li>
            <li>Record ambient conditions that may affect test results</li>
            <li>Include manufacturer's data for specialized equipment</li>
          </ul>
        </div>
        
        <h3 className="text-2xl font-medium text-[#FFC900] mb-4">Testing Considerations for Special Installations</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full text-[#FFC900]/80">
            <thead>
              <tr className="border-b border-[#FFC900]/20">
                <th className="py-2 px-4 text-left">Installation Type</th>
                <th className="py-2 px-4 text-left">Special Testing Considerations</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-2 px-4">Medical Locations</td>
                <td className="py-2 px-4">Additional microshock protection tests, UPS testing, equipotential zone verification</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-2 px-4">Photovoltaic Systems</td>
                <td className="py-2 px-4">DC insulation tests, functional tests under varying light conditions, special polarity checks</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-2 px-4">Hazardous Areas</td>
                <td className="py-2 px-4">Special certification requirements, verification of protection methods, additional documentation</td>
              </tr>
              <tr>
                <td className="py-2 px-4">High-Risk Areas</td>
                <td className="py-2 px-4">Additional testing of backup systems, emergency lighting tests, comprehensive functional testing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  
  "5.1": {
    title: "5.1 Forms and certificates",
    description: "Completing EICs, Minor Works Certificates, and test schedules.",
    content: (
      <div className="space-y-6">
        <LessonContent title="Certification and Documentation">
          <p>Proper documentation is a legal requirement and provides evidence of compliance with standards.</p>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Types of Certification</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Electrical Installation Certificate (EIC):</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Required for all new installations</li>
                <li>Required for major alterations or additions to existing installations</li>
                <li>Contains declaration by designer, constructor, and inspector/tester</li>
                <li>Must include particulars of installation and departures from standards</li>
                <li>Must state recommended interval until next inspection</li>
              </ul>
            </li>
            <li><strong>Minor Electrical Installation Works Certificate (MEIWC):</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>For small alterations or additions that do not include a new circuit</li>
                <li>Examples: adding a socket to an existing circuit, relocating switches</li>
                <li>Simpler form but still requires test results</li>
                <li>Does not require schedule of inspections or test results</li>
              </ul>
            </li>
            <li><strong>Electrical Installation Condition Report (EICR):</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>For periodic inspections of existing installations</li>
                <li>Records the condition of an installation at a point in time</li>
                <li>Identifies any defects or non-compliances</li>
                <li>Classifies issues by urgency (C1, C2, C3)</li>
                <li>Recommends date for next inspection</li>
              </ul>
            </li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Schedule of Inspections</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Lists all items inspected visually before testing</li>
            <li>Records compliance of each item with regulations</li>
            <li>Uses tick boxes for:
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>✓ - Satisfactory</li>
                <li>✗ - Unsatisfactory</li>
                <li>N/A - Not Applicable</li>
              </ul>
            </li>
            <li>Includes checks on:
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Connection of conductors</li>
                <li>Identification and notices</li>
                <li>Routing of cables</li>
                <li>Selection of conductors</li>
                <li>Presence of fire barriers</li>
                <li>Protection against thermal effects</li>
                <li>Methods of protection against electric shock</li>
              </ul>
            </li>
            <li>Must be completed in full with no items left blank</li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Schedule of Test Results</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Documents measured values from all tests performed</li>
            <li>Records circuit details and protective device information</li>
            <li>Includes:
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Circuit description and reference number</li>
                <li>Type and rating of protective device</li>
                <li>Conductor details (type, size)</li>
                <li>Continuity test results</li>
                <li>Insulation resistance values</li>
                <li>Polarity confirmation</li>
                <li>Earth fault loop impedance values</li>
                <li>Prospective fault current readings</li>
                <li>RCD operation times</li>
              </ul>
            </li>
            <li>Values must be compared against maximum permitted values</li>
            <li>Must include all circuits - no exceptions</li>
          </ul>
        </LessonContent>
        
        <ContentSection
          title="Documentation Requirements"
          content={
            <div>
              <p className="font-medium">Key documentation requirements for different types of work:</p>
              <div className="overflow-x-auto mt-3">
                <table className="min-w-full text-[#FFC900]/80">
                  <thead>
                    <tr className="border-b border-[#FFC900]/20">
                      <th className="py-2 px-4 text-left">Type of Work</th>
                      <th className="py-2 px-4 text-left">Required Certification</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#FFC900]/20">
                      <td className="py-2 px-4">New installation</td>
                      <td className="py-2 px-4">EIC + Schedules + DB Schedules</td>
                    </tr>
                    <tr className="border-b border-[#FFC900]/20">
                      <td className="py-2 px-4">Major alteration</td>
                      <td className="py-2 px-4">EIC + Schedules + DB Schedules</td>
                    </tr>
                    <tr className="border-b border-[#FFC900]/20">
                      <td className="py-2 px-4">Minor alteration</td>
                      <td className="py-2 px-4">MEIWC</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Periodic inspection</td>
                      <td className="py-2 px-4">EICR + Schedules</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          }
        />
      </div>
    ),
    detailedContent: (
      <div className="space-y-6">
        <h3 className="text-2xl font-medium text-[#FFC900] mb-4">Common Certificate Completion Errors</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full text-[#FFC900]/80">
            <thead>
              <tr className="border-b border-[#FFC900]/20">
                <th className="py-2 px-4 text-left">Error</th>
                <th className="py-2 px-4 text-left">Potential Consequence</th>
                <th className="py-2 px-4 text-left">Correct Approach</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-2 px-4">Missing signatures</td>
                <td className="py-2 px-4">Certificate legally invalid</td>
                <td className="py-2 px-4">Ensure all relevant sections signed by qualified persons</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-2 px-4">Incomplete test results</td>
                <td className="py-2 px-4">Cannot verify compliance</td>
                <td className="py-2 px-4">Complete all test fields, mark N/A if genuinely not applicable</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-2 px-4">Incorrect certificate used</td>
                <td className="py-2 px-4">Legal non-compliance</td>
                <td className="py-2 px-4">Use EIC for new work, MEIWC for minor work, EICR for inspection</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-2 px-4">Missing "extent and limitations"</td>
                <td className="py-2 px-4">Ambiguity about what was tested</td>
                <td className="py-2 px-4">Clearly state exactly what work was done and what was excluded</td>
              </tr>
              <tr>
                <td className="py-2 px-4">No next inspection date</td>
                <td className="py-2 px-4">Future safety checks missed</td>
                <td className="py-2 px-4">Always include recommended date based on installation type and usage</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-2xl font-medium text-[#FFC900] mt-6 mb-4">Sample Schedule Format</h3>
        
        <div className="bg-[#353a2c] p-4 rounded-lg">
          <h4 className="text-xl font-medium text-[#FFC900] mb-2">Circuit Test Results Schedule Example</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full text-[#FFC900]/80">
              <thead>
                <tr className="border-b border-[#FFC900]/20">
                  <th className="py-2 px-4 text-left">Circuit No.</th>
                  <th className="py-2 px-4 text-left">Description</th>
                  <th className="py-2 px-4 text-left">Type/Rating</th>
                  <th className="py-2 px-4 text-left">R₁+R₂ (Ω)</th>
                  <th className="py-2 px-4 text-left">IR (MΩ)</th>
                  <th className="py-2 px-4 text-left">Polarity</th>
                  <th className="py-2 px-4 text-left">Zs (Ω)</th>
                  <th className="py-2 px-4 text-left">RCD (ms)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-4">1</td>
                  <td className="py-2 px-4">Lighting</td>
                  <td className="py-2 px-4">B6 MCB</td>
                  <td className="py-2 px-4">0.65</td>
                  <td className="py-2 px-4">200+</td>
                  <td className="py-2 px-4">✓</td>
                  <td className="py-2 px-4">0.85</td>
                  <td className="py-2 px-4">23</td>
                </tr>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-4">2</td>
                  <td className="py-2 px-4">Sockets</td>
                  <td className="py-2 px-4">B32 MCB</td>
                  <td className="py-2 px-4">0.45</td>
                  <td className="py-2 px-4">200+</td>
                  <td className="py-2 px-4">✓</td>
                  <td className="py-2 px-4">0.65</td>
                  <td className="py-2 px-4">21</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  },
  
  "5.2": {
    title: "5.2 Recording inspection and test results",
    description: "Properly documenting all test findings and observations.",
    content: (
      <div className="space-y-6">
        <LessonContent title="Recording Inspection and Test Results">
          <p>Accurate recording of inspection and test results is essential for certification and future reference.</p>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Key Documentation Principles</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Accuracy:</strong> All recorded values must be precise and reflect actual test results</li>
            <li><strong>Completeness:</strong> Every required field must be filled in with no omissions</li>
            <li><strong>Clarity:</strong> Information must be legible and unambiguous</li>
            <li><strong>Consistency:</strong> Use standard units and formats throughout documentation</li>
            <li><strong>Integrity:</strong> Never falsify or estimate results - always perform the actual tests</li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Certificate Completion</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Client and Installation Details:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Full name and address of client</li>
                <li>Exact address of installation (if different)</li>
                <li>Date of completion of installation</li>
                <li>Description of installation (domestic, commercial, etc.)</li>
              </ul>
            </li>
            <li><strong>Extent and Limitations:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Clear description of what work was carried out</li>
                <li>Identification of any areas not covered</li>
                <li>Specification of any circuits not tested and why</li>
                <li>Note any agreed limitations to the inspection</li>
              </ul>
            </li>
            <li><strong>Departures from Standards:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>List any permitted departures from BS 7671</li>
                <li>Reference the relevant regulation permitting the departure</li>
                <li>Provide justification for each departure</li>
                <li>If none, state "None" (don't leave blank)</li>
              </ul>
            </li>
            <li><strong>Next Inspection Recommendation:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Based on installation type, environment, and usage</li>
                <li>Consider IET Guidance Note 3 recommendations</li>
                <li>Typical periods:
                  <ul className="list-disc pl-6 space-y-1 mt-1">
                    <li>Domestic: 10 years</li>
                    <li>Commercial: 5 years</li>
                    <li>Industrial: 3 years</li>
                    <li>Special installations: 1 year</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><strong>Declarations and Signatures:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Designer: responsible for the design aspects</li>
                <li>Constructor: responsible for the installation work</li>
                <li>Inspector/tester: responsible for inspection and testing</li>
                <li>Each must be signed by a competent person</li>
                <li>All signatures must be dated</li>
                <li>Single person can sign multiple declarations if qualified to do so</li>
              </ul>
            </li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Circuit Details Recording</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Circuit References:</strong> Unique identification for each circuit</li>
            <li><strong>Circuit Description:</strong> Clear description of what the circuit supplies</li>
            <li><strong>Conductor Details:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Type (e.g., PVC, XLPE)</li>
                <li>Cross-sectional area in mm²</li>
                <li>Number of cores</li>
                <li>Live conductor material (copper, aluminum)</li>
              </ul>
            </li>
            <li><strong>Overcurrent Device:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Type (MCB, RCBO, fuse, etc.)</li>
                <li>Rating (amperes)</li>
                <li>Breaking capacity (kA)</li>
                <li>BS standard (e.g., BS EN 60898)</li>
              </ul>
            </li>
            <li><strong>Test Results:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Record actual measured values, not just "Pass/Fail"</li>
                <li>Include units of measurement (Ω, MΩ, ms, etc.)</li>
                <li>For insulation resistance, indicate if value exceeds meter range (e.g., >500MΩ)</li>
                <li>Record worst-case values for each test</li>
              </ul>
            </li>
          </ul>
        </LessonContent>
        
        <ContentSection
          title="Document Retention Requirements"
          content={
            <div>
              <p className="font-medium">Understanding legal and practical requirements for record keeping:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Original to Client:</strong> The original certificate must be given to the person ordering the work</li>
                <li><strong>Contractor Copy:</strong> The contractor must retain a duplicate for at least the recommended period to next inspection</li>
                <li><strong>Building Control Copy:</strong> For notifiable work under Building Regulations, a copy must be submitted to Building Control</li>
                <li><strong>Electronic Records:</strong> Electronic copies are acceptable if secure, retrievable, and backed up</li>
                <li><strong>Retention Period:</strong> Minimum of 6 years (legal requirement), but recommended to keep until at least next inspection</li>
              </ul>
            </div>
          }
        />
      </div>
    ),
    detailedContent: (
      <div className="space-y-6">
        <h3 className="text-2xl font-medium text-[#FFC900] mb-4">Defect Coding and Reporting</h3>
        
        <div className="bg-[#353a2c] p-4 rounded-lg mb-6">
          <h4 className="text-xl font-medium text-[#FFC900] mb-2">Understanding Defect Codes</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Code C1 (Danger Present):</strong> Risk of injury - immediate action required</li>
            <li><strong>Code C2 (Potentially Dangerous):</strong> Urgent remedial action required</li>
            <li><strong>Code C3 (Improvement Recommended):</strong> Not dangerous but improvement desirable</li>
            <li><strong>Code FI (Further Investigation):</strong> Additional investigation needed urgently</li>
          </ul>
        </div>
        
        <h3 className="text-2xl font-medium text-[#FFC900] mb-4">Example Defects by Category</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full text-[#FFC900]/80">
            <thead>
              <tr className="border-b border-[#FFC900]/20">
                <th className="py-2 px-4 text-left">Code</th>
                <th className="py-2 px-4 text-left">Example Defects</th>
                <th className="py-2 px-4 text-left">Required Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-2 px-4">C1</td>
                <td className="py-2 px-4">Exposed live parts, missing earthing, damaged insulation causing shock risk</td>
                <td className="py-2 px-4">Immediate disconnection until repaired</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-2 px-4">C2</td>
                <td className="py-2 px-4">Inadequate IP rating, missing RCD protection where required, overloaded circuits</td>
                <td className="py-2 px-4">Urgent action but immediate disconnection may not be needed</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-2 px-4">C3</td>
                <td className="py-2 px-4">Minor non-compliances, outdated but safe equipment, lack of identification</td>
                <td className="py-2 px-4">Improvement recommended when practical</td>
              </tr>
              <tr>
                <td className="py-2 px-4">FI</td>
                <td className="py-2 px-4">Unusual readings, inconsistent test results, suspected hidden defects</td>
                <td className="py-2 px-4">Further investigation required before final assessment</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h3 className="text-2xl font-medium text-[#FFC900] mt-6 mb-4">Digital Documentation Methods</h3>
        
        <div className="bg-[#353a2c] p-4 rounded-lg">
          <h4 className="text-xl font-medium text-[#FFC900] mb-2">Modern Documentation Approaches</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Electronic Test Instruments:</strong> Many modern instruments can store test results and download to software</li>
            <li><strong>Mobile Apps:</strong> Available for recording results on-site and generating certificates</li>
            <li><strong>Digital Signatures:</strong> Acceptable on certificates if compliant with Electronic Communications Act</li>
            <li><strong>Cloud Storage:</strong> Secure backup for all certification documents</li>
            <li><strong>Client Portals:</strong> Allow clients secure access to their documentation</li>
          </ul>
        </div>
      </div>
    )
  },
  
  "6.1": {
    title: "6.1 Final checks and client handover",
    description: "Functional testing and client instructions.",
    content: (
      <div className="space-y-6">
        <LessonContent title="Final Checks and Client Handover">
          <p>The commissioning process confirms that the installation functions as intended and includes proper handover to the client.</p>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Final Functional Checks</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Switch Operation:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Verify all switches control appropriate circuits/equipment</li>
                <li>Check two-way and intermediate switching functions correctly</li>
                <li>Test dimmer switches through their full range</li>
                <li>Ensure switched socket outlets function as expected</li>
              </ul>
            </li>
            <li><strong>Safety Devices:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Confirm operation of all circuit breakers</li>
                <li>Test operation of isolation switches</li>
                <li>Check proper function of interlocks where present</li>
                <li>Verify operation of thermal protection devices</li>
              </ul>
            </li>
            <li><strong>RCD Testing:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Press test buttons on all RCDs to verify mechanical trip mechanism</li>
                <li>Check that tripping occurs promptly</li>
                <li>Verify that the correct circuits are protected by each RCD</li>
                <li>Ensure RCD test notices are in place</li>
              </ul>
            </li>
            <li><strong>Special Equipment:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Test operation of heating systems and controls</li>
                <li>Verify air conditioning and ventilation systems</li>
                <li>Check motor direction and operation</li>
                <li>Test any specialized equipment as required</li>
              </ul>
            </li>
            <li><strong>Emergency Systems:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Test operation of emergency lighting systems</li>
                <li>Verify function of fire alarm interfaces (where applicable)</li>
                <li>Check backup/standby supplies where installed</li>
                <li>Test any safety interlocks</li>
              </ul>
            </li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Client Handover Process</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Certificate Presentation:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Provide all required certification documents</li>
                <li>Explain the purpose and importance of each document</li>
                <li>Advise on safe storage of certificates</li>
                <li>Note any recommended reinspection date</li>
              </ul>
            </li>
            <li><strong>User Instructions:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Demonstrate how to reset circuit breakers and RCDs</li>
                <li>Explain the purpose of each circuit</li>
                <li>Show location of main isolation points</li>
                <li>Provide emergency contact information</li>
                <li>Explain any special controls or systems</li>
              </ul>
            </li>
            <li><strong>Documentation Handover:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Complete Electrical Installation Certificate</li>
                <li>Schedules of Inspection and Test Results</li>
                <li>Distribution board schedules (clearly labeled)</li>
                <li>Manufacturer's instructions for installed equipment</li>
                <li>Warranty information for equipment and workmanship</li>
              </ul>
            </li>
            <li><strong>Client Demonstration:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Walk through the installation with the client</li>
                <li>Explain the function of key components</li>
                <li>Show operation of specialized equipment</li>
                <li>Address any questions or concerns</li>
                <li>Record any remaining items to be addressed</li>
              </ul>
            </li>
          </ul>
        </LessonContent>
        
        <ContentSection
          title="Professional Client Handover - Key Points"
          content={
            <div>
              <p className="font-medium">Ensure a thorough and professional handover by addressing these key points:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Use clear, non-technical language when explaining to clients</li>
                <li>Demonstrate RCD testing and explain their purpose</li>
                <li>Explain which circuits are protected by which devices</li>
                <li>Point out location of all distribution boards and isolators</li>
                <li>Advise on safe use and limitations of the installation</li>
                <li>Leave contact information for future service or questions</li>
                <li>Document the handover process to prevent future disputes</li>
                <li>Arrange any follow-up visits if necessary</li>
              </ul>
            </div>
          }
        />
      </div>
    ),
    detailedContent: (
      <div className="space-y-6">
        <h3 className="text-2xl font-medium text-[#FFC900] mb-4">Commissioning Checklist</h3>
        
        <div className="bg-[#353a2c] p-4 rounded-lg mb-6">
          <h4 className="text-xl font-medium text-[#FFC900] mb-2">Final Verification Checklist</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>All inspection and testing complete with satisfactory results</li>
            <li>All certification documentation completed and signed</li>
            <li>All accessories and fixtures properly secured and aligned</li>
            <li>All labels and circuit identification in place</li>
            <li>All covers and safety barriers fitted</li>
            <li>All tools and testing equipment removed from site</li>
            <li>Site left clean and tidy with no debris</li>
            <li>Any cosmetic repairs or making good completed</li>
          </ul>
        </div>
        
        <h3 className="text-2xl font-medium text-[#FFC900] mb-4">Client Feedback and Follow-up</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full text-[#FFC900]/80">
            <thead>
              <tr className="border-b border-[#FFC900]/20">
                <th className="py-2 px-4 text-left">Follow-up Activity</th>
                <th className="py-2 px-4 text-left">Purpose</th>
                <th className="py-2 px-4 text-left">Typical Timing</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-2 px-4">Initial check-in call</td>
                <td className="py-2 px-4">Address any immediate questions or issues</td>
                <td className="py-2 px-4">1-2 days after handover</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-2 px-4">First operation verification</td>
                <td className="py-2 px-4">Ensure all systems functioning as expected</td>
                <td className="py-2 px-4">1-2 weeks after handover</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Formal feedback request</td>
                <td className="py-2 px-4">Gather client satisfaction data and testimonials</td>
                <td className="py-2 px-4">1 month after handover</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  
  "6.2": {
    title: "6.2 Maintenance requirements",
    description: "Explaining ongoing maintenance needs to clients.",
    content: (
      <div className="space-y-6">
        <LessonContent title="Maintenance Requirements and Client Instructions">
          <p>Proper maintenance ensures the continued safety and performance of electrical installations over time.</p>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Explaining Maintenance Needs to Clients</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Regular Testing Requirements:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>RCD test button operation - recommended monthly by user</li>
                <li>Emergency lighting tests - monthly function test, annual full duration test</li>
                <li>Fire alarm interface testing (where applicable)</li>
                <li>Periodic inspection and testing as recommended on EIC</li>
              </ul>
            </li>
            <li><strong>Visual Inspections:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Regular checks for damage to accessories</li>
                <li>Looking for signs of overheating (discoloration)</li>
                <li>Checking security of fixings and connections</li>
                <li>Monitoring for any unusual sounds or smells</li>
                <li>Ensuring ventilation grilles remain unobstructed</li>
              </ul>
            </li>
            <li><strong>Client Responsibilities:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Not overloading circuits or extension leads</li>
                <li>Reporting any faults promptly</li>
                <li>Not tampering with or modifying the installation</li>
                <li>Maintaining access to distribution boards</li>
                <li>Keeping documentation safe and accessible</li>
                <li>Following manufacturer's maintenance instructions</li>
              </ul>
            </li>
            <li><strong>Warranty Information:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Duration of workmanship warranty</li>
                <li>Manufacturer warranties on installed equipment</li>
                <li>Conditions that could void warranties</li>
                <li>Process for reporting warranty issues</li>
                <li>Records of warranty periods for different components</li>
              </ul>
            </li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Recommended Maintenance Schedule</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-[#FFC900]/80">
              <thead>
                <tr className="border-b border-[#FFC900]/20">
                  <th className="py-2 px-4 text-left">Component</th>
                  <th className="py-2 px-4 text-left">Maintenance Task</th>
                  <th className="py-2 px-4 text-left">Frequency</th>
                  <th className="py-2 px-4 text-left">By Whom</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-4">RCDs</td>
                  <td className="py-2 px-4">Press test button</td>
                  <td className="py-2 px-4">Monthly</td>
                  <td className="py-2 px-4">User</td>
                </tr>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-4">Distribution boards</td>
                  <td className="py-2 px-4">Visual inspection for damage/heat</td>
                  <td className="py-2 px-4">Annually</td>
                  <td className="py-2 px-4">User</td>
                </tr>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-4">Accessories</td>
                  <td className="py-2 px-4">Check for damage/loose fixings</td>
                  <td className="py-2 px-4">Annually</td>
                  <td className="py-2 px-4">User</td>
                </tr>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-4">Emergency lighting</td>
                  <td className="py-2 px-4">Function test</td>
                  <td className="py-2 px-4">Monthly</td>
                  <td className="py-2 px-4">Responsible person</td>
                </tr>
                <tr className="border-b border-[#FFC900]/20">
                  <td className="py-2 px-4">Emergency lighting</td>
                  <td className="py-2 px-4">Full duration test</td>
                  <td className="py-2 px-4">Annually</td>
                  <td className="py-2 px-4">Qualified technician</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Entire installation</td>
                  <td className="py-2 px-4">Periodic inspection and testing</td>
                  <td className="py-2 px-4">As per EIC</td>
                  <td className="py-2 px-4">Qualified electrician</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Documentation for Future Maintenance</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Record keeping recommendations:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Maintain a log of all maintenance activities</li>
                <li>Record dates of RCD tests</li>
                <li>Document any modifications to the installation</li>
                <li>Keep records of any issues reported and actions taken</li>
                <li>Store copies of all certificates and reports</li>
              </ul>
            </li>
            <li><strong>Future modification guidance:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Always use qualified electricians for modifications</li>
                <li>Ensure appropriate certification for any changes</li>
                <li>Update distribution board schedules when circuits change</li>
                <li>Maintain record of changes in a log book</li>
                <li>Consider impact on existing installation when planning changes</li>
              </ul>
            </li>
          </ul>
        </LessonContent>
        
        <ContentSection
          title="Frequency of Periodic Inspection and Testing"
          content={
            <div>
              <p className="font-medium">BS 7671 and IET Guidance Note 3 recommend these maximum intervals between inspections:</p>
              <div className="overflow-x-auto mt-3">
                <table className="min-w-full text-[#FFC900]/80">
                  <thead>
                    <tr className="border-b border-[#FFC900]/20">
                      <th className="py-2 px-4 text-left">Installation Type</th>
                      <th className="py-2 px-4 text-left">Maximum Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#FFC900]/20">
                      <td className="py-2 px-4">Domestic premises (general)</td>
                      <td className="py-2 px-4">10 years</td>
                    </tr>
                    <tr className="border-b border-[#FFC900]/20">
                      <td className="py-2 px-4">Domestic premises (rented)</td>
                      <td className="py-2 px-4">5 years</td>
                    </tr>
                    <tr className="border-b border-[#FFC900]/20">
                      <td className="py-2 px-4">Commercial premises</td>
                      <td className="py-2 px-4">5 years</td>
                    </tr>
                    <tr className="border-b border-[#FFC900]/20">
                      <td className="py-2 px-4">Industrial premises</td>
                      <td className="py-2 px-4">3 years</td>
                    </tr>
                    <tr className="border-b border-[#FFC900]/20">
                      <td className="py-2 px-4">Public buildings</td>
                      <td className="py-2 px-4">5 years</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Special installations (swimming pools, etc.)</td>
                      <td className="py-2 px-4">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-[#FFC900]/70 italic">Note: These are maximum recommended periods. More frequent inspection may be necessary depending on usage, environment, and risk.</p>
            </div>
          }
        />
      </div>
    ),
    detailedContent: (
      <div className="space-y-6">
        <h3 className="text-2xl font-medium text-[#FFC900] mb-4">Specialized Equipment Maintenance</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#353a2c] p-4 rounded-lg">
            <h4 className="text-xl font-medium text-[#FFC900] mb-2">UPS Systems</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Monthly: Visual inspection and check event logs</li>
              <li>Quarterly: Functional test of transfer to battery</li>
              <li>Annually: Full load test and battery assessment</li>
              <li>As recommended: Battery replacement (typically 3-5 years)</li>
            </ul>
          </div>
          
          <div className="bg-[#353a2c] p-4 rounded-lg">
            <h4 className="text-xl font-medium text-[#FFC900] mb-2">Backup Generators</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Weekly: No-load test run for 5-10 minutes</li>
              <li>Monthly: Fluid level checks and visual inspection</li>
              <li>Annually: Load bank testing and full servicing</li>
              <li>Every 3 years: Comprehensive overhaul</li>
            </ul>
          </div>
        </div>
        
        <h3 className="text-2xl font-medium text-[#FFC900] mt-6 mb-4">Client Maintenance Instructions</h3>
        
        <div className="bg-[#353a2c] p-4 rounded-lg">
          <h4 className="text-xl font-medium text-[#FFC900] mb-2">Sample Client Instructions for RCD Testing</h4>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Locate the RCD in your consumer unit (fuse box)</li>
            <li>Press the button marked 'T' or 'Test'</li>
            <li>The switch should immediately trip to the off position</li>
            <li>If it doesn't trip, contact a qualified electrician immediately</li>
            <li>After successful testing, reset the RCD by moving the switch back to the on position</li>
            <li>Record the date of testing in your electrical log book</li>
            <li>Repeat this test monthly</li>
          </ol>
          <p className="mt-3 text-[#FFC900]/70">Note: Some circuits may lose power during testing. Consider this when planning test timing.</p>
        </div>
      </div>
    )
  }
};
