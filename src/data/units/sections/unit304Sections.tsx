
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
    title: "1. Understand Initial Verification Procedures",
    description: "Essential verification procedures before commissioning electrical installations",
    content: (
      <div className="space-y-6">
        <LessonContent title="Initial Verification Procedures">
          <p>Initial verification is a crucial step in ensuring that new electrical installations comply with regulations and are safe to use.</p>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Key Requirements for Initial Verification</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Visual inspection of all accessible components</li>
            <li>Confirmation that equipment complies with relevant standards</li>
            <li>Verification of conductor sizes and protective device ratings</li>
            <li>Checking for fire barriers, protection against thermal effects</li>
            <li>Verification of disconnection times for protective devices</li>
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
    title: "2. Understand How to Perform Inspection Activities",
    description: "Systematic approaches for conducting thorough visual inspections",
    content: (
      <div className="space-y-6">
        <LessonContent title="Visual Inspection Procedures">
          <p>Visual inspection is the first and most critical step in verifying an electrical installation. It must be completed before any testing begins.</p>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Conductor Identification</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Verify correct color coding (brown - line, blue - neutral, green/yellow - earth)</li>
            <li>Check appropriate identification of conductors at terminations</li>
            <li>Ensure consistency of marking throughout the installation</li>
            <li>Confirm phase rotation where applicable</li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Cable Routing Inspection</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Check for appropriate support and fixings</li>
            <li>Ensure adequate separation from non-electrical services</li>
            <li>Verify conformity with zone restrictions in special locations (e.g., bathrooms)</li>
            <li>Check depth of buried cables and mechanical protection</li>
            <li>Ensure cables are not subject to mechanical strain</li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Earthing and Bonding</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Check main earthing terminal is accessible</li>
            <li>Verify presence of main bonding to water, gas, and other services</li>
            <li>Check supplementary bonding in special locations</li>
            <li>Ensure bonding conductor sizes meet requirements</li>
            <li>Verify secure connections and appropriate labeling</li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Equipment Selection and Installation</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Verify appropriate IP ratings for location and external influences</li>
            <li>Check equipment is installed in correct safe zones where required</li>
            <li>Verify presence and condition of mechanical protection</li>
            <li>Check equipment is securely fixed and stable</li>
            <li>Ensure appropriate fire ratings where applicable</li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Building Regulations Compliance</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Check compliance with Part P (safety in dwellings)</li>
            <li>Verify energy efficiency measures meet Part L requirements</li>
            <li>Ensure fire safety considerations are addressed</li>
            <li>Check accessibility requirements are met</li>
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
    title: "3. Understand How to Perform Testing Procedures (Part 1)",
    description: "Dead testing procedures for electrical installations",
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
    title: "3. Understand How to Perform Testing Procedures (Part 2)",
    description: "Live testing procedures for electrical installations",
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
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Functional Testing</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Purpose:</strong> Verify all components operate as intended</li>
            <li><strong>Method:</strong> Manually operate all switches, controls, and protective devices</li>
            <li><strong>Check Points:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Switch operation and correct control of intended circuits</li>
                <li>RCD test button operation</li>
                <li>Operation of isolation devices</li>
                <li>Correct operation of automation and control systems</li>
              </ul>
            </li>
            <li><strong>Documentation:</strong> Note any operational issues or deficiencies</li>
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
    title: "4. Understand How to Record Inspection and Testing Results",
    description: "Documentation and certification requirements for electrical installations",
    content: (
      <div className="space-y-6">
        <LessonContent title="Documentation and Certification">
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
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Additional Documentation</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Distribution board schedules</li>
            <li>Circuit charts and diagrams</li>
            <li>Operation and maintenance manuals</li>
            <li>Risk assessments and method statements</li>
            <li>Manufacturer's instructions and warranties</li>
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
  "3.2": {
    title: "5. Commissioning the Installation",
    description: "Final verification and handover procedures for electrical installations",
    content: (
      <div className="space-y-6">
        <LessonContent title="Commissioning Process">
          <p>Commissioning is the final verification that an installation is ready for safe use.</p>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Pre-commissioning Checks</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Documentation Review:</strong> Verify all design and installation documentation is complete</li>
            <li><strong>Visual Inspection:</strong> Final visual check of the entire installation</li>
            <li><strong>Safety Measures:</strong> Confirm all warning notices and safety equipment are in place</li>
            <li><strong>Pre-power Checks:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Verification of correct phasing</li>
                <li>Confirmation that equipment is ready for energization</li>
                <li>Check that all temporary installations are removed</li>
                <li>Ensure all covers and safety devices are in place</li>
              </ul>
            </li>
            <li><strong>Isolation Procedures:</strong> Verify isolation points are correctly identified and accessible</li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Functional Testing</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Sequential Energization:</strong> Power up circuits in a logical sequence</li>
            <li><strong>Load Testing:</strong> Verify equipment operates correctly under load conditions</li>
            <li><strong>Switching Verification:</strong> Test operation of all switching devices</li>
            <li><strong>Testing Specific Systems:</strong>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li><strong>Lighting:</strong> Operation of all switches, dimmers, sensors</li>
                <li><strong>Power:</strong> Load testing of socket outlets and fixed equipment</li>
                <li><strong>Controls:</strong> Operation of control circuits and interfaces</li>
              </ul>
            </li>
            <li><strong>Specialized Equipment:</strong> Testing according to manufacturer's instructions</li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Final Verification</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Check for Anomalies:</strong> Unusual sounds, vibrations, or heating</li>
            <li><strong>Operating Parameters:</strong> Verify equipment operates within specified parameters</li>
            <li><strong>Final Adjustments:</strong> Make any necessary adjustments to settings</li>
            <li><strong>Documentation:</strong> Record all test results and operational parameters</li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Client Handover</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Certificate Presentation:</strong> Provide all required certification</li>
            <li><strong>User Instructions:</strong> Explain operation of equipment and systems</li>
            <li><strong>Safety Information:</strong> Educate client on safety features and procedures</li>
            <li><strong>Maintenance Requirements:</strong> Advise on ongoing maintenance needs</li>
            <li><strong>Documentation Handover:</strong> Provide complete set of documentation</li>
          </ul>
        </LessonContent>
        
        <ContentSection
          title="Commissioning Sequence"
          content={
            <div>
              <p className="font-medium">The complete commissioning sequence from completion of installation to client handover:</p>
              <ol className="list-decimal pl-6 space-y-2 mt-3">
                <li>Pre-commissioning checks and verification</li>
                <li>Dead testing in correct sequence</li>
                <li>Live testing in correct sequence</li>
                <li>Functional testing of all systems</li>
                <li>Documentation completion</li>
                <li>Client demonstration and handover</li>
              </ol>
              <p className="mt-3 text-[#FFC900]/70 italic">Each step must be completed successfully before proceeding to the next.</p>
            </div>
          }
        />
      </div>
    )
  },
  "3.3": {
    title: "Assessment Preparation",
    description: "Preparing for assessment on Unit 304 content",
    content: (
      <div className="space-y-6">
        <LessonContent title="Assessment Preparation">
          <p>Understanding how you will be assessed on inspection, testing, and commissioning skills.</p>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Typical Assessment Tasks</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Safe Isolation:</strong> Demonstrate the complete safe isolation procedure including:
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Testing the tester before use</li>
                <li>Isolating the circuit or installation</li>
                <li>Securing the isolation</li>
                <li>Verifying the isolation</li>
                <li>Re-testing the tester after use</li>
              </ul>
            </li>
            <li><strong>Dead Testing:</strong> Perform and record results for:
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Continuity of protective conductors</li>
                <li>Continuity of ring final circuits</li>
                <li>Insulation resistance</li>
                <li>Polarity</li>
              </ul>
            </li>
            <li><strong>Live Testing:</strong> Under supervision, perform and record:
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Earth fault loop impedance tests</li>
                <li>Prospective fault current measurements</li>
                <li>RCD testing</li>
              </ul>
            </li>
            <li><strong>Documentation:</strong> Complete an Electrical Installation Certificate with:
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Accurate client and installation details</li>
                <li>Correct description of work</li>
                <li>Appropriate declarations</li>
                <li>Properly completed schedules</li>
              </ul>
            </li>
            <li><strong>Visual Inspection:</strong> Identify defects such as:
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Missing cable glands or grommets</li>
                <li>Incorrect bonding arrangements</li>
                <li>Missing fixings or mechanical protection</li>
                <li>Incorrect cable selection or installation</li>
              </ul>
            </li>
            <li><strong>Handover:</strong> Give a verbal or written explanation of:
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>Inspection and test findings</li>
                <li>Meaning of certificates provided</li>
                <li>Any limitations or restrictions</li>
                <li>Recommendations for remedial work if needed</li>
              </ul>
            </li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Assessment Success Tips</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Safety First:</strong> Always prioritize safety procedures</li>
            <li><strong>Sequence Matters:</strong> Follow the correct testing sequence</li>
            <li><strong>Documentation Clarity:</strong> Complete all documents clearly and accurately</li>
            <li><strong>Equipment Knowledge:</strong> Be familiar with test equipment operation</li>
            <li><strong>Communication Skills:</strong> Practice explaining technical concepts clearly</li>
            <li><strong>Time Management:</strong> Work methodically but efficiently</li>
          </ul>
          
          <h3 className="text-xl font-medium text-[#FFC900] mt-6 mb-3">Common Assessment Errors</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Skipping safety procedures or isolation steps</li>
            <li>Testing in incorrect sequence</li>
            <li>Incomplete documentation</li>
            <li>Incorrect interpretation of test results</li>
            <li>Failing to identify obvious visual defects</li>
            <li>Poor explanation of findings during handover</li>
          </ul>
        </LessonContent>
        
        <ContentSection
          title="Key Points to Remember for Unit 304"
          content={
            <div className="overflow-x-auto">
              <table className="min-w-full text-[#FFC900]/80">
                <thead>
                  <tr className="border-b border-[#FFC900]/20">
                    <th className="py-3 px-4 text-left">Topic</th>
                    <th className="py-3 px-4 text-left">Critical Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#FFC900]/20">
                    <td className="py-3 px-4">Dead Testing Order</td>
                    <td className="py-3 px-4">CPC continuity ➔ Ring Continuity ➔ Insulation Resistance ➔ Polarity</td>
                  </tr>
                  <tr className="border-b border-[#FFC900]/20">
                    <td className="py-3 px-4">Live Testing Order</td>
                    <td className="py-3 px-4">Earth Fault Loop ➔ PFC ➔ RCD Trip Testing</td>
                  </tr>
                  <tr className="border-b border-[#FFC900]/20">
                    <td className="py-3 px-4">Isolation</td>
                    <td className="py-3 px-4">Always use approved procedures: test your tester, isolate, test the circuit is dead, re-test your tester</td>
                  </tr>
                  <tr className="border-b border-[#FFC900]/20">
                    <td className="py-3 px-4">Test Instruments</td>
                    <td className="py-3 px-4">Know how to set up, use, and interpret results from Multifunction Tester (MFT)</td>
                  </tr>
                  <tr className="border-b border-[#FFC900]/20">
                    <td className="py-3 px-4">Legal Compliance</td>
                    <td className="py-3 px-4">Must meet BS 7671 Part 6 standards and record accurately</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Sequence</td>
                    <td className="py-3 px-4">Visual inspection ➔ Dead testing ➔ Live testing ➔ Functional tests</td>
                  </tr>
                </tbody>
              </table>
            </div>
          }
        />
      </div>
    )
  },
};

