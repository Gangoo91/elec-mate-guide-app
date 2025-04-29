
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
    title: "1. Initial Verification",
    description: "What to check before you power up",
    content: (
      <div className="space-y-6">
        <LessonContent title="Initial Verification">
          <p>Initial verification is a crucial step in ensuring that new electrical installations comply with regulations and are safe to use.</p>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">What to Check Before You Power Up</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Correct wiring: proper connections, appropriate cable sizes</li>
            <li>Correct protection devices: properly rated MCBs, RCDs, fuses</li>
            <li>No signs of damage: cables, accessories, enclosures</li>
            <li>No missing components: all required parts installed</li>
            <li>Ensuring compliance with BS 7671, Part 6</li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Documentation Requirements</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Electrical Installation Certificate (EIC)</li>
            <li>Schedule of Inspections</li>
            <li>Schedule of Test Results</li>
            <li>Distribution board schedules</li>
            <li>Circuit charts and diagrams</li>
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
        </LessonContent>
        
        <ContentSection
          title="Learning Objectives - Initial Verification"
          content={
            <ul className="list-disc pl-6 space-y-2">
              <li>Understand the purpose of initial verification</li>
              <li>Know the documentation required by BS 7671</li>
              <li>Understand the importance of inspection before testing</li>
              <li>Recognize defects that can be identified through visual inspection</li>
              <li>Know when initial verification is required</li>
            </ul>
          }
        />
      </div>
    )
  },
  "1.2": {
    title: "2. Safe Isolation and Inspection",
    description: "Correct procedure for safe isolation",
    content: (
      <div className="space-y-6">
        <LessonContent title="Safe Isolation and Inspection">
          <p>Safe isolation is essential before working on electrical installations, and visual inspection is the first critical step in verification.</p>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Correct Procedure for Safe Isolation</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Identify circuit to be isolated</strong></li>
            <li><strong>Test voltage indicator on known live source</strong> before use</li>
            <li><strong>Isolate supply</strong> by switching off and locking off if possible</li>
            <li><strong>Secure isolation</strong> with locks and warning signs</li>
            <li><strong>Verify isolation</strong> by testing with voltage indicator on all conductors</li>
            <li><strong>Test voltage indicator again</strong> on known live source after use</li>
          </ol>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Visual Inspection Checklist</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Conductor Identification:</strong> Verify correct color coding (brown - line, blue - neutral, green/yellow - earth)</li>
            <li><strong>Main and supplementary bonding:</strong> Check presence and condition</li>
            <li><strong>IP ratings:</strong> Appropriate for environment/location</li>
            <li><strong>Labeling:</strong> Warning notices, circuit identification</li>
            <li><strong>Cable routes:</strong> Appropriate support, separation from other services</li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Recording Inspection Results</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use Schedule of Inspections form</li>
            <li>Mark each item as satisfactory, unsatisfactory, or not applicable</li>
            <li>Record any defects or omissions</li>
            <li>Complete before electrical testing begins</li>
            <li>Include all required sections (no blank entries)</li>
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
            </div>
          }
        />
      </div>
    )
  },
  "2.1": {
    title: "3. Testing Procedures - Dead Testing",
    description: "Continuity, insulation resistance, and polarity tests",
    content: (
      <div className="space-y-6">
        <LessonContent title="Dead Testing Procedures">
          <p>Dead testing is performed with the installation disconnected from the supply to verify safety before energization.</p>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Continuity of Protective Conductors</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Purpose:</strong> Ensure complete earth paths exist throughout the installation</li>
            <li><strong>Method:</strong> Low-resistance ohmmeter between main earthing terminal and exposed conductive parts</li>
            <li><strong>Expected Results:</strong> Low resistance (typically &lt;0.05Ω plus the resistance of the conductor)</li>
            <li><strong>Common Issues:</strong> Poor connections, damaged conductors, incorrect terminations</li>
            <li><strong>Tips:</strong> Null test leads before testing to remove their resistance from readings</li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Ring Final Circuit Continuity</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Purpose:</strong> Verify correct wiring of ring final circuits and identify any interconnections</li>
            <li><strong>Method:</strong> End-to-end resistance measurement plus cross-connection measurements</li>
            <li><strong>Expected Results:</strong> End-to-end readings approximately half of cross-connection readings</li>
            <li><strong>Common Issues:</strong> Broken rings, interconnected rings, uneven conductor sizing</li>
            <li><strong>Tips:</strong> Make a table of readings to help identify anomalies</li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Insulation Resistance Testing</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Purpose:</strong> Ensure no leakage between conductors or to earth</li>
            <li><strong>Method:</strong> Apply test voltage between all conductors and between conductors and earth</li>
            <li><strong>Test Voltage:</strong> 500V for installations up to 500V</li>
            <li><strong>Expected Results:</strong> At least 1MΩ for circuits up to 500V (typically much higher)</li>
            <li><strong>Common Issues:</strong> Moisture, damaged insulation, connected equipment affecting readings</li>
            <li><strong>Safety:</strong> Disconnect sensitive electronic equipment before testing</li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Polarity Testing</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Purpose:</strong> Check correct connection of line, neutral, and earth</li>
            <li><strong>Method:</strong> Continuity testing to verify correct connections at switches, fuses, etc.</li>
            <li><strong>Expected Results:</strong> Continuity between expected points, no reversed connections</li>
            <li><strong>Common Issues:</strong> Reversed L/N, switched neutral instead of line</li>
            <li><strong>Critical Points:</strong> Edison screw lampholders, single-pole switches, socket outlets</li>
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
              <p className="mt-3 text-[#FFC900]/70 italic">This sequence ensures safety and prevents damage to equipment.</p>
            </div>
          }
        />
      </div>
    )
  },
  "2.2": {
    title: "3. Testing Procedures - Live Testing",
    description: "Earth fault loop impedance, PFC, and RCD testing",
    content: (
      <div className="space-y-6">
        <LessonContent title="Live Testing Procedures">
          <p>Live testing is performed with the installation energized to verify protection performance under fault conditions.</p>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Earth Fault Loop Impedance Testing</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Purpose:</strong> Check that fault current will trip protection quickly enough</li>
            <li><strong>Method:</strong> Connect loop impedance tester between line conductor and protective conductor</li>
            <li><strong>External Impedance (Ze):</strong> Measured at origin of installation</li>
            <li><strong>Circuit Impedance (Zs):</strong> Measured at furthest point of each circuit</li>
            <li><strong>Expected Results:</strong> Values below maximum permitted for circuit protection type</li>
            <li><strong>Safety:</strong> Use non-trip testers where RCDs are installed to prevent nuisance tripping</li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Prospective Fault Current (PFC) Testing</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Purpose:</strong> Measure potential fault currents to ensure protection can handle them</li>
            <li><strong>Method:</strong> Measure between line and neutral (PSCC) and line and earth (PEFC)</li>
            <li><strong>Expected Results:</strong> Values within breaking capacity of protective devices</li>
            <li><strong>Critical Points:</strong> Origin of installation and all distribution boards</li>
            <li><strong>Safety:</strong> Ensure test equipment is rated for expected fault currents</li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">RCD Testing</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Purpose:</strong> Verify RCDs operate within required times at rated current</li>
            <li><strong>Method:</strong> Apply test current at both 0° and 180° phase angles</li>
            <li><strong>Test Currents:</strong> 50% (no trip), 100% (must trip), 5× rated current (fast trip)</li>
            <li><strong>Expected Results:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>General RCDs: ≤300ms at rated current, ≤40ms at 5× rated current</li>
                <li>S-type RCDs: 130-500ms at rated current, ≤150ms at 5× rated current</li>
              </ul>
            </li>
            <li><strong>Documentation:</strong> Record worst-case trip time for each test</li>
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
              <p className="mt-3 text-[#FFC900]/70 italic">Always follow safe isolation procedures before and after live testing.</p>
            </div>
          }
        />
      </div>
    )
  },
  "3.1": {
    title: "4. Sequence of Testing",
    description: "From visual inspection through to functional testing",
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
              </ul>
            </li>
            <li><strong>Dead Tests</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Continuity of protective conductors</li>
                <li>Continuity of ring final circuits</li>
                <li>Insulation resistance</li>
                <li>Polarity</li>
                <li>Note: installation must be completely isolated during these tests</li>
              </ul>
            </li>
            <li><strong>Live Tests</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Earth fault loop impedance (Zs)</li>
                <li>Prospective fault current (PFC)</li>
                <li>RCD operation</li>
                <li>Note: installation must be energized safely before these tests</li>
              </ul>
            </li>
            <li><strong>Functional Testing</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Check operation of all switches, controls, and interlocks</li>
                <li>Test RCD manual test buttons</li>
                <li>Verify operation of all intended electrical equipment</li>
                <li>Check emergency systems (where applicable)</li>
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
              </ul>
            </div>
          }
        />
      </div>
    )
  },
  "3.2": {
    title: "5. Certification and Documentation",
    description: "Completing EICs, Minor Works Certificates, and test schedules",
    content: (
      <div className="space-y-6">
        <LessonContent title="Certification and Documentation">
          <p>Proper documentation is a legal requirement and provides evidence of compliance with standards.</p>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Types of Certification</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Electrical Installation Certificate (EIC):</strong> For new installations or major alterations</li>
            <li><strong>Minor Electrical Installation Works Certificate (MEIWC):</strong> For small alterations or additions</li>
            <li><strong>Electrical Installation Condition Report (EICR):</strong> For periodic inspections of existing installations</li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Schedule of Inspections</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Lists all items inspected visually before testing</li>
            <li>Records compliance of each item with regulations</li>
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
                <li>Continuity test results</li>
                <li>Insulation resistance values</li>
                <li>Polarity confirmation</li>
                <li>Earth fault loop impedance values</li>
                <li>Prospective fault current readings</li>
                <li>RCD operation times</li>
              </ul>
            </li>
            <li>Values must be compared against maximum permitted values</li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Certificate Completion</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Must include details of client and installation address</li>
            <li>Requires description of work carried out</li>
            <li>Must include departures from standards (if any)</li>
            <li>Requires recommended date for next inspection</li>
            <li>Must include declarations signed by:
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Designer (where design work was involved)</li>
                <li>Constructor (installer)</li>
                <li>Inspector/tester</li>
              </ul>
            </li>
            <li>Single person can sign multiple declarations if qualified to do so</li>
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
    )
  },
  "3.3": {
    title: "6. Commissioning the Installation",
    description: "Final checks and client handover",
    content: (
      <div className="space-y-6">
        <LessonContent title="Commissioning the Installation">
          <p>Commissioning is the final verification that an installation is ready for safe use.</p>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Final Functional Checks</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Switch Operation:</strong> Verify all switches control appropriate circuits</li>
            <li><strong>Safety Devices:</strong> Confirm proper operation of all protective devices</li>
            <li><strong>RCD Testing:</strong> Press test buttons to verify mechanical trip mechanism</li>
            <li><strong>Special Equipment:</strong> Test operation of specific equipment like heating systems, controls</li>
            <li><strong>Emergency Systems:</strong> Verify emergency lighting, fire alarms where applicable</li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Client Handover Process</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Certificate Presentation:</strong> Provide all required certification</li>
            <li><strong>User Instructions:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Demonstrate how to reset circuit breakers and RCDs</li>
                <li>Explain the purpose of each circuit</li>
                <li>Show location of main isolation points</li>
                <li>Provide emergency contact information</li>
              </ul>
            </li>
            <li><strong>Maintenance Requirements:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Advise on periodic testing of RCDs</li>
                <li>Explain when re-inspection is required</li>
                <li>Outline owner responsibilities for maintenance</li>
              </ul>
            </li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Additional Handover Items</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Distribution board schedules (clearly labeled)</li>
            <li>Manufacturer's instructions for installed equipment</li>
            <li>Warranty information (if applicable)</li>
            <li>Contact details for future maintenance</li>
            <li>Log book for recording future modifications</li>
          </ul>
        </LessonContent>
        
        <ContentSection
          title="Assessment Preparation"
          content={
            <div>
              <p className="font-medium">Understanding how you will be assessed on inspection, testing, and commissioning skills:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Safe Isolation:</strong> Demonstrate the complete safe isolation procedure</li>
                <li><strong>Dead Testing:</strong> Perform and record results for continuity, insulation resistance, etc.</li>
                <li><strong>Live Testing:</strong> Under supervision, perform earth fault loop impedance tests, etc.</li>
                <li><strong>Documentation:</strong> Complete an Electrical Installation Certificate with all supporting schedules</li>
                <li><strong>Visual Inspection:</strong> Identify defects such as missing cable glands or incorrect bonding</li>
                <li><strong>Handover:</strong> Give a verbal explanation of findings and certificates</li>
              </ul>
            </div>
          }
        />
      </div>
    )
  },
};
