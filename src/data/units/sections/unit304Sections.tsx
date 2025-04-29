
import React from 'react';

export const sections304 = {
  "1.1": {
    title: "Initial Verification: What to check before you power up",
    description: "Understanding the critical pre-power checks needed for compliance with BS 7671.",
    content: (
      <div className="space-y-6">
        <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h3 className="text-xl font-medium text-[#FFC900] mb-4">Learning Objectives</h3>
          <ul className="list-disc list-inside text-[#FFC900]/80 space-y-2">
            <li>Understand the requirements of BS 7671 regarding initial verification</li>
            <li>Identify critical components that must be checked before energizing an installation</li>
            <li>Recognize common installation defects that can be identified visually</li>
          </ul>
        </div>

        <div className="prose prose-invert max-w-none">
          <h3 className="text-[#FFC900]">What is Initial Verification?</h3>
          <p className="text-[#FFC900]/80">
            Initial verification is the process of inspecting and testing a new installation, or an addition or alteration 
            to an existing installation, to ensure it complies with BS 7671 before it is put into service.
          </p>
          
          <h4 className="text-[#FFC900]">Pre-Power Checks</h4>
          <p className="text-[#FFC900]/80">
            Before applying power to any installation, the following must be verified:
          </p>
          
          <div className="mt-4 bg-[#353a2c] p-4 rounded-md">
            <h5 className="font-medium text-[#FFC900]">Critical Pre-Power Checks:</h5>
            <ul className="list-disc list-inside text-[#FFC900]/80 mt-2 space-y-1">
              <li>Correct wiring connections in all accessories and distribution boards</li>
              <li>Correct selection and installation of protective devices</li>
              <li>No visible damage to electrical components or enclosures</li>
              <li>No missing parts that would compromise safety</li>
              <li>Adequate IP ratings for the environment</li>
              <li>Correct identification and labeling of circuits</li>
            </ul>
          </div>
          
          <h4 className="text-[#FFC900] mt-6">BS 7671 Requirements</h4>
          <p className="text-[#FFC900]/80">
            Part 6 of BS 7671 (18th Edition Wiring Regulations) specifies that:
          </p>
          <ul className="list-disc list-inside text-[#FFC900]/80 mt-2 space-y-1">
            <li>Every installation must be verified during erection and on completion before being put into service</li>
            <li>Precautions must be taken to avoid danger to persons and livestock and to prevent damage to property and equipment</li>
            <li>The verification must be carried out by a competent person</li>
          </ul>
        </div>

        <div className="bg-[#353a2c] p-6 rounded-lg border border-[#FFC900]/30">
          <h4 className="text-[#FFC900] text-lg font-medium mb-4">Common Installation Defects Found During Initial Verification</h4>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#FFC900]/20">
                <th className="py-2 px-4 text-left text-[#FFC900]">Defect Type</th>
                <th className="py-2 px-4 text-left text-[#FFC900]">Potential Issues</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">Incorrect Wiring</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Cross polarity, reversed connections, incorrect color coding</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">Protection Issues</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Incorrect MCB ratings, wrong type of RCD, improper discrimination</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">Physical Damage</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Damaged insulation, broken enclosures, exposed conductors</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-[#FFC900]/80">Identification</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Missing or incorrect labeling, improper warning notices</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    detailedContent: (
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#FFC900]">Detailed BS 7671 Requirements for Initial Verification</h3>
        
        <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h4 className="text-xl font-medium text-[#FFC900] mb-4">Regulation 641.2</h4>
          <p className="text-[#FFC900]/80">
            The initial verification must include, where relevant:
          </p>
          <ul className="list-disc list-inside text-[#FFC900]/80 mt-2 space-y-1">
            <li>A visual inspection (Regulation 643)</li>
            <li>Testing of the installation (Regulation 644)</li>
            <li>Documentation of the results (Regulation 645)</li>
          </ul>
          
          <h4 className="text-xl font-medium text-[#FFC900] mt-6 mb-4">Regulation 642.1</h4>
          <p className="text-[#FFC900]/80">
            The extent and requirements of the verification shall be determined, taking account of:
          </p>
          <ul className="list-disc list-inside text-[#FFC900]/80 mt-2 space-y-1">
            <li>The type of installation (domestic, commercial, industrial, etc.)</li>
            <li>Whether it is a new installation, alteration, or addition</li>
            <li>The frequency of verification based on statutory requirements</li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-4">Pre-Power Safety Checklist</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="min-w-5 mt-1">
                  <div className="h-5 w-5 rounded border border-[#FFC900] flex items-center justify-center">
                    <div className="h-3 w-3 rounded-sm bg-[#FFC900]"></div>
                  </div>
                </div>
                <p className="text-[#FFC900]/80">Verify all connections are tight and secure</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="min-w-5 mt-1">
                  <div className="h-5 w-5 rounded border border-[#FFC900] flex items-center justify-center">
                    <div className="h-3 w-3 rounded-sm bg-[#FFC900]"></div>
                  </div>
                </div>
                <p className="text-[#FFC900]/80">Check protective devices match design specifications</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="min-w-5 mt-1">
                  <div className="h-5 w-5 rounded border border-[#FFC900] flex items-center justify-center">
                    <div className="h-3 w-3 rounded-sm bg-[#FFC900]"></div>
                  </div>
                </div>
                <p className="text-[#FFC900]/80">Inspect main equipotential bonding</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="min-w-5 mt-1">
                  <div className="h-5 w-5 rounded border border-[#FFC900] flex items-center justify-center">
                    <div className="h-3 w-3 rounded-sm bg-[#FFC900]"></div>
                  </div>
                </div>
                <p className="text-[#FFC900]/80">Verify warning notices are correctly placed</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="min-w-5 mt-1">
                  <div className="h-5 w-5 rounded border border-[#FFC900] flex items-center justify-center">
                    <div className="h-3 w-3 rounded-sm bg-[#FFC900]"></div>
                  </div>
                </div>
                <p className="text-[#FFC900]/80">Check all accessories are properly secured</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-4">Documentation Required</h4>
            <ul className="list-disc list-inside text-[#FFC900]/80 space-y-2">
              <li>Installation design specifications</li>
              <li>Schematic diagrams</li>
              <li>Cable sizing calculations</li>
              <li>Distribution board schedules</li>
              <li>Manufacturer's instructions for equipment</li>
              <li>Previous inspection reports (for alterations)</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  "1.2": {
    title: "Documentation Requirements",
    description: "Understanding the necessary paperwork for installation verification.",
    content: (
      <div className="space-y-6">
        <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h3 className="text-xl font-medium text-[#FFC900] mb-4">Learning Objectives</h3>
          <ul className="list-disc list-inside text-[#FFC900]/80 space-y-2">
            <li>Identify the required documentation for initial verification</li>
            <li>Understand how to properly complete verification documentation</li>
            <li>Recognize the legal importance of accurate record-keeping</li>
          </ul>
        </div>

        <div className="prose prose-invert max-w-none">
          <h3 className="text-[#FFC900]">Documentation for Initial Verification</h3>
          <p className="text-[#FFC900]/80">
            Proper documentation is a legal requirement for all electrical installations. These documents form 
            part of the "health record" of the installation and serve as evidence that the work has been designed, 
            installed, and verified to comply with BS 7671.
          </p>
          
          <h4 className="text-[#FFC900]">Key Documentation Requirements</h4>
          <ul className="list-disc list-inside text-[#FFC900]/80 mt-2 space-y-1">
            <li>Electrical Installation Certificate (EIC)</li>
            <li>Schedule of Inspections</li>
            <li>Schedule of Test Results</li>
            <li>Risk assessments</li>
            <li>Design calculations</li>
            <li>As-built drawings</li>
          </ul>
          
          <h4 className="text-[#FFC900] mt-6">Legal Implications</h4>
          <p className="text-[#FFC900]/80">
            Accurate documentation provides evidence of compliance with:
          </p>
          <ul className="list-disc list-inside text-[#FFC900]/80 mt-2 space-y-1">
            <li>The Electricity at Work Regulations 1989</li>
            <li>Building Regulations (Part P for domestic installations)</li>
            <li>Health and Safety at Work Act 1974</li>
            <li>BS 7671 Requirements for Electrical Installations</li>
          </ul>
        </div>

        <div className="bg-[#353a2c] p-6 rounded-lg border border-[#FFC900]/30">
          <h4 className="text-[#FFC900] text-lg font-medium mb-4">Documentation Requirements by Installation Type</h4>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#FFC900]/20">
                <th className="py-2 px-4 text-left text-[#FFC900]">Installation Type</th>
                <th className="py-2 px-4 text-left text-[#FFC900]">Required Documentation</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">New Installation</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Full EIC, Schedule of Inspections, Schedule of Test Results</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">Addition or Alteration</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Minor Works Certificate or EIC (depending on extent)</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">Periodic Inspection</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Electrical Installation Condition Report (EICR)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    detailedContent: (
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#FFC900]">Detailed Documentation Requirements</h3>
        
        <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h4 className="text-xl font-medium text-[#FFC900] mb-4">The Electrical Installation Certificate (EIC)</h4>
          <p className="text-[#FFC900]/80">
            The EIC must contain the following information:
          </p>
          <ul className="list-disc list-inside text-[#FFC900]/80 mt-2 space-y-1">
            <li>Details of the client</li>
            <li>Address of the installation</li>
            <li>Description of the installation</li>
            <li>Declaration of design, construction, inspection, and testing</li>
            <li>Details and signatures of the designer, constructor, and inspector/tester</li>
            <li>Next inspection recommendation date</li>
            <li>Supply characteristics and earthing arrangements</li>
          </ul>
          
          <h4 className="text-xl font-medium text-[#FFC900] mt-6 mb-4">Schedule of Inspections</h4>
          <p className="text-[#FFC900]/80">
            Must include inspection results for:
          </p>
          <ul className="list-disc list-inside text-[#FFC900]/80 mt-2 space-y-1">
            <li>Connection of conductors</li>
            <li>Identification of conductors</li>
            <li>Routing of cables in safe zones</li>
            <li>Selection of conductors for current-carrying capacity and voltage drop</li>
            <li>Connection of equipment and accessories</li>
            <li>Presence of fire barriers, protective devices, signs, etc.</li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-4">Schedule of Test Results</h4>
            <p className="text-[#FFC900]/80">
              Must record results for each circuit including:
            </p>
            <ul className="list-disc list-inside text-[#FFC900]/80 mt-2 space-y-1">
              <li>Circuit description and reference number</li>
              <li>Continuity test results (R₁+R₂)</li>
              <li>Insulation resistance</li>
              <li>Polarity</li>
              <li>Earth fault loop impedance (Zs)</li>
              <li>RCD operation times</li>
              <li>Prospective fault current (PFC)</li>
              <li>Details of test instruments used</li>
            </ul>
          </div>
          
          <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-4">Minor Works Certificate</h4>
            <p className="text-[#FFC900]/80">
              Used for small-scale additions or alterations that do not include a new circuit. Must include:
            </p>
            <ul className="list-disc list-inside text-[#FFC900]/80 mt-2 space-y-1">
              <li>Description of the work undertaken</li>
              <li>Declaration that the work complies with BS 7671</li>
              <li>Details of inspections and tests carried out</li>
              <li>Installer's details and signature</li>
              <li>Date of work completion</li>
              <li>Any departures from BS 7671</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  "2.1": {
    title: "Correct procedure for safe isolation",
    description: "Step-by-step process for safely isolating electrical installations.",
    content: (
      <div className="space-y-6">
        <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h3 className="text-xl font-medium text-[#FFC900] mb-4">Learning Objectives</h3>
          <ul className="list-disc list-inside text-[#FFC900]/80 space-y-2">
            <li>Understand the legal requirements for safe isolation</li>
            <li>Learn the safe isolation procedure step-by-step</li>
            <li>Identify appropriate equipment for secure isolation</li>
          </ul>
        </div>

        <div className="prose prose-invert max-w-none">
          <h3 className="text-[#FFC900]">Legal Requirements for Safe Isolation</h3>
          <p className="text-[#FFC900]/80">
            The Electricity at Work Regulations 1989 requires that all electrical systems must be 
            "dead" when work is carried out, unless it is unreasonable to work dead. Regulation 
            13 specifically mandates adequate precautions to prevent electrical equipment, which 
            has been made dead, from becoming live while work is carried out.
          </p>
          
          <h4 className="text-[#FFC900]">The Safe Isolation Procedure</h4>
          <ol className="list-decimal list-inside text-[#FFC900]/80 mt-2 space-y-2">
            <li><strong>Identify</strong> - Correctly identify the circuit or equipment to be isolated</li>
            <li><strong>Test Voltage Indicator</strong> - Check your voltage indicator works on a known live source</li>
            <li><strong>Isolate</strong> - Switch off and lock off the supply</li>
            <li><strong>Prove Dead</strong> - Use voltage indicator to prove the circuit is dead</li>
            <li><strong>Re-test Voltage Indicator</strong> - Check your voltage indicator still works on a known live source</li>
          </ol>
          
          <h4 className="text-[#FFC900] mt-6">Equipment for Safe Isolation</h4>
          <ul className="list-disc list-inside text-[#FFC900]/80 mt-2 space-y-1">
            <li>Approved voltage indicator (GS38 compliant)</li>
            <li>Proving unit (to test the voltage indicator)</li>
            <li>Locking off devices (padlocks, MCB locks, etc.)</li>
            <li>Warning notices</li>
            <li>Personal protective equipment (PPE)</li>
          </ul>
        </div>

        <div className="bg-[#353a2c] p-6 rounded-lg border border-[#FFC900]/30">
          <h4 className="text-[#FFC900] text-lg font-medium mb-4">Common Methods of Isolation</h4>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#FFC900]/20">
                <th className="py-2 px-4 text-left text-[#FFC900]">Isolation Method</th>
                <th className="py-2 px-4 text-left text-[#FFC900]">Suitable For</th>
                <th className="py-2 px-4 text-left text-[#FFC900]">Security Measures</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">Main Switch</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Whole installation</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Padlock through hasp or dedicated lock-off device</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">Circuit Breaker</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Individual circuit</td>
                <td className="py-3 px-4 text-[#FFC900]/80">MCB lock-off device</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-[#FFC900]/80">Fused Connection Unit</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Individual appliance</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Remove fuse and retain</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    detailedContent: (
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#FFC900]">Safe Isolation in Detail</h3>
        
        <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h4 className="text-xl font-medium text-[#FFC900] mb-4">Step-by-Step Safe Isolation Procedure</h4>
          
          <div className="space-y-4">
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Step 1: Identify</h5>
              <p className="text-[#FFC900]/80 mt-1">
                Correctly identify the circuit or equipment to be isolated using drawings, 
                distribution board schedules, or labels. Always check the identification is correct 
                before proceeding to the next step.
              </p>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Step 2: Test Voltage Indicator</h5>
              <p className="text-[#FFC900]/80 mt-1">
                Use a proving unit to verify that your voltage indicator is functioning 
                correctly. If a proving unit is not available, test on a known live source, 
                but the proving unit is the preferred method.
              </p>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Step 3: Isolate</h5>
              <p className="text-[#FFC900]/80 mt-1">
                Switch off the appropriate isolation device. Apply a lock and keep the 
                key with you. If multiple people are working on the system, a multi-lock hasp 
                should be used so that each person can apply their own lock.
              </p>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Step 4: Prove Dead</h5>
              <p className="text-[#FFC900]/80 mt-1">
                Use the voltage indicator to prove the conductors are dead. For three-phase 
                systems, check between all phases and from each phase to neutral and earth. 
                For single-phase systems, check between line, neutral, and earth.
              </p>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Step 5: Re-test Voltage Indicator</h5>
              <p className="text-[#FFC900]/80 mt-1">
                Verify that your voltage indicator is still functioning correctly by testing 
                it on the proving unit again or a known live source. This ensures the indicator 
                was working when you proved the circuit dead.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-4">Safe Isolation Equipment</h4>
            
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-[#FFC900]">Voltage Indicator</h5>
                <p className="text-[#FFC900]/80 mt-1">
                  Must comply with HSE Guidance Note GS38. Features should include:
                </p>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>Clear display</li>
                  <li>Suitable voltage range</li>
                  <li>CAT III or CAT IV rating for electrical installations</li>
                  <li>Finger guards and insulated probes</li>
                  <li>Maximum of 4mm of metal exposed at probe tips</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-medium text-[#FFC900]">Proving Unit</h5>
                <p className="text-[#FFC900]/80 mt-1">
                  Used to check voltage indicators are working. Provides a known voltage source 
                  to verify operation of the indicator before and after proving dead.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-4">Lock-Off Devices</h4>
            
            <div className="space-y-4">
              <p className="text-[#FFC900]/80">
                Different isolation points require different lock-off devices:
              </p>
              
              <div>
                <h5 className="font-medium text-[#FFC900]">MCB Lock-Off</h5>
                <p className="text-[#FFC900]/80 mt-1">
                  Specially designed clips that fit over MCBs to prevent them being switched on.
                </p>
              </div>
              
              <div>
                <h5 className="font-medium text-[#FFC900]">Multi-Lock Hasps</h5>
                <p className="text-[#FFC900]/80 mt-1">
                  Allows multiple padlocks to be fitted to a single isolation point, ensuring 
                  the circuit cannot be re-energized until all locks are removed.
                </p>
              </div>
              
              <div>
                <h5 className="font-medium text-[#FFC900]">Warning Tags</h5>
                <p className="text-[#FFC900]/80 mt-1">
                  Should be attached to all isolation points with details of:
                </p>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>Who isolated the circuit</li>
                  <li>Why it was isolated</li>
                  <li>Contact details</li>
                  <li>Date and time of isolation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  "2.2": {
    title: "Visual inspection procedures",
    description: "Conducting and recording visual inspections before testing.",
    content: (
      <div className="space-y-6">
        <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h3 className="text-xl font-medium text-[#FFC900] mb-4">Learning Objectives</h3>
          <ul className="list-disc list-inside text-[#FFC900]/80 space-y-2">
            <li>Understand the importance and scope of visual inspection</li>
            <li>Learn what to check during a visual inspection</li>
            <li>Be able to document inspection findings correctly</li>
          </ul>
        </div>

        <div className="prose prose-invert max-w-none">
          <h3 className="text-[#FFC900]">Purpose of Visual Inspection</h3>
          <p className="text-[#FFC900]/80">
            Visual inspection is the first step in the verification process and often reveals up to 
            80% of installation defects. It must be completed before any testing begins. A thorough 
            visual inspection checks that the installation complies with the design specifications 
            and the requirements of BS 7671.
          </p>
          
          <h4 className="text-[#FFC900]">What to Check During Visual Inspection</h4>
          <ul className="list-disc list-inside text-[#FFC900]/80 mt-2 space-y-1">
            <li>Connection and identification of conductors</li>
            <li>Presence of protective devices</li>
            <li>Segregation of circuits</li>
            <li>Accessibility of equipment for operation and maintenance</li>
            <li>Presence of fire barriers and seals</li>
            <li>Protection against thermal effects</li>
            <li>Methods of protection against electric shock</li>
            <li>Circuit identification and labeling</li>
          </ul>
          
          <h4 className="text-[#FFC900] mt-6">Recording Visual Inspection Results</h4>
          <p className="text-[#FFC900]/80">
            Results must be recorded on the Schedule of Inspections. Each item should be marked as:
          </p>
          <ul className="list-disc list-inside text-[#FFC900]/80 mt-2 space-y-1">
            <li>"✓" (tick) - When the item complies</li>
            <li>"✗" (cross) - When the item does not comply</li>
            <li>"N/A" - When the item is not applicable</li>
            <li>"LIM" - When inspection was limited for some reason</li>
          </ul>
        </div>

        <div className="bg-[#353a2c] p-6 rounded-lg border border-[#FFC900]/30">
          <h4 className="text-[#FFC900] text-lg font-medium mb-4">Common Visual Inspection Items</h4>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#FFC900]/20">
                <th className="py-2 px-4 text-left text-[#FFC900]">Inspection Item</th>
                <th className="py-2 px-4 text-left text-[#FFC900]">What to Look For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">Cable Routing</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Cables in safe zones, appropriate support, no visible damage</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">Bonding</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Main and supplementary bonding conductors correctly installed and sized</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">IP Ratings</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Equipment has appropriate IP rating for location/environment</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-[#FFC900]/80">Identification</td>
                <td className="py-3 px-4 text-[#FFC900]/80">All circuits, protective devices, switches properly labeled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    detailedContent: (
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#FFC900]">Comprehensive Visual Inspection Checklist</h3>
        
        <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h4 className="text-xl font-medium text-[#FFC900] mb-4">Basic Protection (Protection Against Direct Contact)</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="min-w-5 mt-1">
                <div className="h-5 w-5 rounded border border-[#FFC900] flex items-center justify-center">
                  <div className="h-3 w-3 rounded-sm bg-[#FFC900]"></div>
                </div>
              </div>
              <p className="text-[#FFC900]/80">Insulation of live parts is complete with no exposed live parts</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="min-w-5 mt-1">
                <div className="h-5 w-5 rounded border border-[#FFC900] flex items-center justify-center">
                  <div className="h-3 w-3 rounded-sm bg-[#FFC900]"></div>
                </div>
              </div>
              <p className="text-[#FFC900]/80">Barriers or enclosures are secure and have appropriate IP rating</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="min-w-5 mt-1">
                <div className="h-5 w-5 rounded border border-[#FFC900] flex items-center justify-center">
                  <div className="h-3 w-3 rounded-sm bg-[#FFC900]"></div>
                </div>
              </div>
              <p className="text-[#FFC900]/80">Obstacles (where used) prevent unintentional contact with live parts</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="min-w-5 mt-1">
                <div className="h-5 w-5 rounded border border-[#FFC900] flex items-center justify-center">
                  <div className="h-3 w-3 rounded-sm bg-[#FFC900]"></div>
                </div>
              </div>
              <p className="text-[#FFC900]/80">SELV or PELV systems have correct separation and identification</p>
            </div>
          </div>
          
          <h4 className="text-xl font-medium text-[#FFC900] mt-6 mb-4">Fault Protection (Protection Against Indirect Contact)</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="min-w-5 mt-1">
                <div className="h-5 w-5 rounded border border-[#FFC900] flex items-center justify-center">
                  <div className="h-3 w-3 rounded-sm bg-[#FFC900]"></div>
                </div>
              </div>
              <p className="text-[#FFC900]/80">Presence of earthing conductor and connections</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="min-w-5 mt-1">
                <div className="h-5 w-5 rounded border border-[#FFC900] flex items-center justify-center">
                  <div className="h-3 w-3 rounded-sm bg-[#FFC900]"></div>
                </div>
              </div>
              <p className="text-[#FFC900]/80">Protective conductors are correctly sized and identified</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="min-w-5 mt-1">
                <div className="h-5 w-5 rounded border border-[#FFC900] flex items-center justify-center">
                  <div className="h-3 w-3 rounded-sm bg-[#FFC900]"></div>
                </div>
              </div>
              <p className="text-[#FFC900]/80">RCDs are correctly installed and appropriate type/rating</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="min-w-5 mt-1">
                <div className="h-5 w-5 rounded border border-[#FFC900] flex items-center justify-center">
                  <div className="h-3 w-3 rounded-sm bg-[#FFC900]"></div>
                </div>
              </div>
              <p className="text-[#FFC900]/80">Main and supplementary bonding conductors are correctly installed</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-4">Circuit Protection and Accessories</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="min-w-5 mt-1">
                  <div className="h-5 w-5 rounded border border-[#FFC900] flex items-center justify-center">
                    <div className="h-3 w-3 rounded-sm bg-[#FFC900]"></div>
                  </div>
                </div>
                <p className="text-[#FFC900]/80">Protective devices are correctly rated for fault and overload protection</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="min-w-5 mt-1">
                  <div className="h-5 w-5 rounded border border-[#FFC900] flex items-center justify-center">
                    <div className="h-3 w-3 rounded-sm bg-[#FFC900]"></div>
                  </div>
                </div>
                <p className="text-[#FFC900]/80">Suitability of protective devices for prospective fault current</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="min-w-5 mt-1">
                  <div className="h-5 w-5 rounded border border-[#FFC900] flex items-center justify-center">
                    <div className="h-3 w-3 rounded-sm bg-[#FFC900]"></div>
                  </div>
                </div>
                <p className="text-[#FFC900]/80">Switchgear and controlgear correctly selected and installed</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="min-w-5 mt-1">
                  <div className="h-5 w-5 rounded border border-[#FFC900] flex items-center justify-center">
                    <div className="h-3 w-3 rounded-sm bg-[#FFC900]"></div>
                  </div>
                </div>
                <p className="text-[#FFC900]/80">Isolators and emergency switches present and accessible</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-4">Conductors and Cables</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="min-w-5 mt-1">
                  <div className="h-5 w-5 rounded border border-[#FFC900] flex items-center justify-center">
                    <div className="h-3 w-3 rounded-sm bg-[#FFC900]"></div>
                  </div>
                </div>
                <p className="text-[#FFC900]/80">Conductors are correctly sized for current-carrying capacity</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="min-w-5 mt-1">
                  <div className="h-5 w-5 rounded border border-[#FFC900] flex items-center justify-center">
                    <div className="h-3 w-3 rounded-sm bg-[#FFC900]"></div>
                  </div>
                </div>
                <p className="text-[#FFC900]/80">Cables correctly supported and fixed</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="min-w-5 mt-1">
                  <div className="h-5 w-5 rounded border border-[#FFC900] flex items-center justify-center">
                    <div className="h-3 w-3 rounded-sm bg-[#FFC900]"></div>
                  </div>
                </div>
                <p className="text-[#FFC900]/80">Cables routed in safe zones and protected from damage</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="min-w-5 mt-1">
                  <div className="h-5 w-5 rounded border border-[#FFC900] flex items-center justify-center">
                    <div className="h-3 w-3 rounded-sm bg-[#FFC900]"></div>
                  </div>
                </div>
                <p className="text-[#FFC900]/80">Correct identification of conductors (colors, markings, etc.)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  "3.1": {
    title: "Dead Testing",
    description: "Continuity, insulation resistance, and polarity tests.",
    content: (
      <div className="space-y-6">
        <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h3 className="text-xl font-medium text-[#FFC900] mb-4">Learning Objectives</h3>
          <ul className="list-disc list-inside text-[#FFC900]/80 space-y-2">
            <li>Understand the sequence and purpose of dead testing</li>
            <li>Learn how to conduct continuity, insulation resistance, and polarity tests</li>
            <li>Be able to interpret and record dead test results correctly</li>
          </ul>
        </div>

        <div className="prose prose-invert max-w-none">
          <h3 className="text-[#FFC900]">Dead Testing Overview</h3>
          <p className="text-[#FFC900]/80">
            Dead testing is performed with the installation isolated from the supply. These tests 
            verify the integrity of the installation's conductors and insulation before applying power.
          </p>
          
          <h4 className="text-[#FFC900]">The Order of Dead Tests</h4>
          <p className="text-[#FFC900]/80">
            Dead tests must be performed in the following sequence:
          </p>
          <ol className="list-decimal list-inside text-[#FFC900]/80 mt-2 space-y-1">
            <li>Continuity of protective conductors (CPCs)</li>
            <li>Continuity of ring final circuit conductors</li>
            <li>Insulation resistance</li>
            <li>Polarity</li>
            <li>Protection by separation of circuits (where applicable)</li>
            <li>Protection by barriers or enclosures (where applicable)</li>
            <li>Protection by SELV or PELV (where applicable)</li>
            <li>Functional testing of switchgear and control gear (mechanical operation)</li>
          </ol>
        </div>

        <div className="bg-[#353a2c] p-6 rounded-lg border border-[#FFC900]/30">
          <h4 className="text-[#FFC900] text-lg font-medium mb-4">Key Dead Tests</h4>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#FFC900]/20">
                <th className="py-2 px-4 text-left text-[#FFC900]">Test</th>
                <th className="py-2 px-4 text-left text-[#FFC900]">Purpose</th>
                <th className="py-2 px-4 text-left text-[#FFC900]">Acceptable Results</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">CPC Continuity</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Verify earth path integrity</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Low resistance proportional to length</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">Ring Circuit Continuity</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Check ring is complete with no breaks</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Balanced readings at each socket</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">Insulation Resistance</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Check integrity of insulation</td>
                <td className="py-3 px-4 text-[#FFC900]/80">{'≥1 MΩ (≤500V); ≥2 MΩ (>500V)'}</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-[#FFC900]/80">Polarity</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Ensure correct connection of conductors</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Continuity on switching devices</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    detailedContent: (
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#FFC900]">Detailed Dead Testing Procedures</h3>
        
        <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h4 className="text-xl font-medium text-[#FFC900] mb-4">Continuity of Protective Conductors</h4>
          
          <div className="space-y-4">
            <p className="text-[#FFC900]/80">
              This test verifies that all protective conductors (including main and supplementary bonding 
              conductors) are correctly connected and have adequate conductance.
            </p>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Test Method</h5>
              <ol className="list-decimal list-inside text-[#FFC900]/80 mt-1 space-y-1">
                <li>Use a low-reading ohmmeter or continuity tester</li>
                <li>Connect one lead to the main earthing terminal</li>
                <li>Test each exposed-conductive-part in turn with the other lead</li>
                <li>Record the resistance value (R₂)</li>
              </ol>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Alternative "Long Lead" Method</h5>
              <ol className="list-decimal list-inside text-[#FFC900]/80 mt-1 space-y-1">
                <li>Use a temporary connection and known resistance test lead</li>
                <li>Measure resistance of the lead plus the CPC</li>
                <li>Subtract the resistance of the lead to find R₂</li>
              </ol>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Expected Results</h5>
              <p className="text-[#FFC900]/80 mt-1">
                Resistance should be proportional to the length of the cable. For bonding conductors, 
                the maximum values are specified in Table 54.8 of BS 7671. Generally, main bonding 
                conductor resistance should not exceed 0.05Ω.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-4">Insulation Resistance Testing</h4>
            
            <div className="space-y-4">
              <p className="text-[#FFC900]/80">
                This test verifies there are no breakdowns in insulation and no cross-connections 
                between conductors.
              </p>
              
              <div>
                <h5 className="font-medium text-[#FFC900]">Test Method</h5>
                <ol className="list-decimal list-inside text-[#FFC900]/80 mt-1 space-y-1">
                  <li>Use an insulation resistance tester (normally 500V for installations up to 500V)</li>
                  <li>Test between live conductors (phase to neutral)</li>
                  <li>Test between all live conductors and earth</li>
                  <li>For 3-phase, test between all phases</li>
                </ol>
              </div>
              
              <div>
                <h5 className="font-medium text-[#FFC900]">Expected Results</h5>
                <table className="w-full border-collapse mt-2">
                  <thead>
                    <tr className="border-b border-[#FFC900]/20">
                      <th className="py-2 px-4 text-left text-[#FFC900]">Circuit Voltage</th>
                      <th className="py-2 px-4 text-left text-[#FFC900]">Test Voltage</th>
                      <th className="py-2 px-4 text-left text-[#FFC900]">Minimum Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#FFC900]/20">
                      <td className="py-2 px-4 text-[#FFC900]/80">SELV/PELV</td>
                      <td className="py-2 px-4 text-[#FFC900]/80">250V DC</td>
                      <td className="py-2 px-4 text-[#FFC900]/80">0.5 MΩ</td>
                    </tr>
                    <tr className="border-b border-[#FFC900]/20">
                      <td className="py-2 px-4 text-[#FFC900]/80">{'≤500V'}</td>
                      <td className="py-2 px-4 text-[#FFC900]/80">500V DC</td>
                      <td className="py-2 px-4 text-[#FFC900]/80">1.0 MΩ</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 text-[#FFC900]/80">{'>500V'}</td>
                      <td className="py-2 px-4 text-[#FFC900]/80">1000V DC</td>
                      <td className="py-2 px-4 text-[#FFC900]/80">2.0 MΩ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-4">Ring Circuit Continuity</h4>
            
            <div className="space-y-4">
              <p className="text-[#FFC900]/80">
                This test confirms that ring final circuits are correctly connected with no breaks 
                or interconnections.
              </p>
              
              <div>
                <h5 className="font-medium text-[#FFC900]">Test Method</h5>
                <ol className="list-decimal list-inside text-[#FFC900]/80 mt-1 space-y-1">
                  <li>Disconnect the circuit from the supply</li>
                  <li>Join phase and CPC conductors at the distribution board</li>
                  <li>Measure resistance between phase and CPC at each socket</li>
                  <li>Repeat for neutral and CPC (join neutral and CPC)</li>
                  <li>Measure between phase and neutral at each socket</li>
                </ol>
              </div>
              
              <div>
                <h5 className="font-medium text-[#FFC900]">Expected Results</h5>
                <p className="text-[#FFC900]/80 mt-1">
                  The readings should be approximately the same at each socket if 
                  the ring is continuous and correctly wired. The "mesh" method 
                  allows calculation of the resistance of each conductor segment.
                </p>
              </div>
              
              <div>
                <h5 className="font-medium text-[#FFC900]">Common Issues</h5>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>Variations in readings indicate broken conductors</li>
                  <li>Very low readings may indicate cross connections</li>
                  <li>Unusually high readings suggest poor connections</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  "3.2": {
    title: "Live Testing",
    description: "Earth fault loop impedance, PFC, and RCD testing.",
    content: (
      <div className="space-y-6">
        <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h3 className="text-xl font-medium text-[#FFC900] mb-4">Learning Objectives</h3>
          <ul className="list-disc list-inside text-[#FFC900]/80 space-y-2">
            <li>Understand when and how to perform live testing safely</li>
            <li>Learn how to measure earth fault loop impedance and prospective fault current</li>
            <li>Be able to test RCDs correctly according to regulations</li>
          </ul>
        </div>

        <div className="prose prose-invert max-w-none">
          <h3 className="text-[#FFC900]">Live Testing Overview</h3>
          <p className="text-[#FFC900]/80">
            Live testing is conducted with the installation connected to the supply. These tests verify 
            the effectiveness of protective measures and the capability of protective devices to operate 
            correctly in fault conditions.
          </p>
          
          <h4 className="text-[#FFC900]">Key Live Tests</h4>
          <p className="text-[#FFC900]/80">
            The following tests must be carried out with the installation energized:
          </p>
          <ol className="list-decimal list-inside text-[#FFC900]/80 mt-2 space-y-1">
            <li>Earth fault loop impedance (Zs)</li>
            <li>Prospective fault current (PFC)</li>
            <li>RCD operation</li>
            <li>Phase rotation (for 3-phase systems)</li>
            <li>Functional testing</li>
          </ol>
          
          <h4 className="text-[#FFC900] mt-6">Safety During Live Testing</h4>
          <p className="text-[#FFC900]/80">
            Live testing presents significant risks. Always:
          </p>
          <ul className="list-disc list-inside text-[#FFC900]/80 mt-2 space-y-1">
            <li>Use appropriate PPE</li>
            <li>Use instruments complying with relevant standards</li>
            <li>Work methodically and avoid rushed decisions</li>
            <li>Ensure good communication if working with others</li>
            <li>Have emergency procedures in place</li>
          </ul>
        </div>

        <div className="bg-[#353a2c] p-6 rounded-lg border border-[#FFC900]/30">
          <h4 className="text-[#FFC900] text-lg font-medium mb-4">Live Test Summary</h4>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#FFC900]/20">
                <th className="py-2 px-4 text-left text-[#FFC900]">Test</th>
                <th className="py-2 px-4 text-left text-[#FFC900]">Purpose</th>
                <th className="py-2 px-4 text-left text-[#FFC900]">Typical Values</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">Earth Fault Loop Impedance (Zs)</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Verify protective device operation in fault</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Depends on circuit and device type</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">Prospective Fault Current</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Check for adequate breaking capacity</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Varies with supply - 6kA is common minimum</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-[#FFC900]/80">RCD Testing</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Verify RCD trips within required time</td>
                <td className="py-3 px-4 text-[#FFC900]/80">{'≤300ms at 1×IΔn, ≤150ms at 5×IΔn'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    detailedContent: (
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#FFC900]">Detailed Live Testing Procedures</h3>
        
        <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h4 className="text-xl font-medium text-[#FFC900] mb-4">Earth Fault Loop Impedance Testing</h4>
          
          <div className="space-y-4">
            <p className="text-[#FFC900]/80">
              Earth fault loop impedance (Zs) is the impedance of the earth fault current path from the point 
              of fault back to the supply. This test verifies that protective devices will operate quickly 
              enough in the event of a fault.
            </p>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Test Method</h5>
              <ol className="list-decimal list-inside text-[#FFC900]/80 mt-1 space-y-1">
                <li>Connect the loop impedance tester to the circuit</li>
                <li>For final circuits, measure at the furthest point</li>
                <li>For distribution circuits, measure at the distribution board</li>
                <li>Press the test button and record the impedance value</li>
              </ol>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Expected Results</h5>
              <p className="text-[#FFC900]/80 mt-1">
                The measured Zs value must be less than the maximum stated in BS 7671 for the 
                specific protective device. For MCBs, refer to Tables 41.2-41.4 and for fuses, 
                Tables 41.5-41.7.
              </p>
              <p className="text-[#FFC900]/80 mt-2">
                Example maximum values for Type B MCBs:
              </p>
              <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                <li>6A: 7.67Ω</li>
                <li>16A: 2.87Ω</li>
                <li>32A: 1.44Ω</li>
                <li>40A: 1.15Ω</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-4">Prospective Fault Current (PFC) Testing</h4>
            
            <div className="space-y-4">
              <p className="text-[#FFC900]/80">
                This test measures the maximum current that would flow during a short-circuit or earth fault 
                condition. It verifies that protective devices have adequate breaking capacity.
              </p>
              
              <div>
                <h5 className="font-medium text-[#FFC900]">Test Method</h5>
                <ol className="list-decimal list-inside text-[#FFC900]/80 mt-1 space-y-1">
                  <li>Ensure the installation is isolated</li>
                  <li>Connect the PFC tester to the relevant points:</li>
                  <li>Between phase and neutral for PSCC (Prospective Short Circuit Current)</li>
                  <li>Between phase and earth for PEFC (Prospective Earth Fault Current)</li>
                  <li>Between phases for 3-phase systems</li>
                  <li>Record the highest value measured</li>
                </ol>
              </div>
              
              <div>
                <h5 className="font-medium text-[#FFC900]">Expected Results</h5>
                <p className="text-[#FFC900]/80 mt-1">
                  The breaking capacity of all protective devices must exceed the measured PFC value. 
                  For domestic installations, devices with 6kA breaking capacity are typically used. 
                  Commercial and industrial installations often require 10kA or higher.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-4">RCD Testing</h4>
            
            <div className="space-y-4">
              <p className="text-[#FFC900]/80">
                RCD testing verifies that residual current devices operate within the specified time 
                and at the correct current threshold.
              </p>
              
              <div>
                <h5 className="font-medium text-[#FFC900]">Test Method</h5>
                <ol className="list-decimal list-inside text-[#FFC900]/80 mt-1 space-y-1">
                  <li>Connect the RCD tester to a socket protected by the RCD</li>
                  <li>For non-socket circuits, connect at appropriate test points</li>
                  <li>Test at 50% of rated tripping current (should not trip)</li>
                  <li>Test at 100% of rated tripping current (must trip)</li>
                  <li>Test at 5× rated tripping current (must trip faster)</li>
                  <li>For types S and time-delayed RCDs, adjust expectations accordingly</li>
                </ol>
              </div>
              
              <div>
                <h5 className="font-medium text-[#FFC900]">Maximum Disconnection Times</h5>
                <table className="w-full border-collapse mt-2">
                  <thead>
                    <tr className="border-b border-[#FFC900]/20">
                      <th className="py-2 px-2 text-left text-[#FFC900]">RCD Rating</th>
                      <th className="py-2 px-2 text-left text-[#FFC900]">At 1×IΔn</th>
                      <th className="py-2 px-2 text-left text-[#FFC900]">At 5×IΔn</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#FFC900]/20">
                      <td className="py-2 px-2 text-[#FFC900]/80">General (non-delayed)</td>
                      <td className="py-2 px-2 text-[#FFC900]/80">300ms</td>
                      <td className="py-2 px-2 text-[#FFC900]/80">40ms</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-2 text-[#FFC900]/80">Type S (selective)</td>
                      <td className="py-2 px-2 text-[#FFC900]/80">300-500ms</td>
                      <td className="py-2 px-2 text-[#FFC900]/80">150ms</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div>
                <h5 className="font-medium text-[#FFC900] mt-3">Additional RCD Tests</h5>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>Test with 0° and 180° phase angles</li>
                  <li>Test the manual trip button operation</li>
                  <li>For special RCDs (Type A, F, B), ensure appropriate testing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  "4.1": {
    title: "Correct testing sequence",
    description: "From visual inspection through to functional testing.",
    content: (
      <div className="space-y-6">
        <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h3 className="text-xl font-medium text-[#FFC900] mb-4">Learning Objectives</h3>
          <ul className="list-disc list-inside text-[#FFC900]/80 space-y-2">
            <li>Understand the recommended sequence for initial verification</li>
            <li>Learn why tests must be performed in a specific order</li>
            <li>Recognize how to adjust the testing sequence for different installation types</li>
          </ul>
        </div>

        <div className="prose prose-invert max-w-none">
          <h3 className="text-[#FFC900]">The Complete Verification Sequence</h3>
          <p className="text-[#FFC900]/80">
            Following the correct testing sequence is crucial for safety and effectiveness. The sequence 
            ensures that potentially dangerous conditions are identified before applying power to the installation.
          </p>
          
          <h4 className="text-[#FFC900]">Complete Verification Sequence</h4>
          <ol className="list-decimal list-inside text-[#FFC900]/80 mt-2 space-y-2">
            <li><strong>Visual Inspection</strong> - Before any testing begins</li>
            <li><strong>Dead Testing</strong>
              <ul className="list-disc list-inside ml-6 mt-1">
                <li>Continuity of protective conductors</li>
                <li>Continuity of ring final circuits</li>
                <li>Insulation resistance</li>
                <li>Polarity (initial verification using dead testing)</li>
                <li>Protection by SELV, PELV or electrical separation</li>
              </ul>
            </li>
            <li><strong>Connect to Supply</strong> - Only after satisfactory completion of dead tests</li>
            <li><strong>Live Testing</strong>
              <ul className="list-disc list-inside ml-6 mt-1">
                <li>Polarity (verification using live testing)</li>
                <li>Earth fault loop impedance</li>
                <li>Prospective fault current</li>
                <li>RCD testing</li>
                <li>Phase rotation (for 3-phase installations)</li>
              </ul>
            </li>
            <li><strong>Functional Testing</strong> - Operation of switches, controls, interlocks, etc.</li>
            <li><strong>Verification of Voltage Drop</strong> - Where required</li>
          </ol>
          
          <h4 className="text-[#FFC900] mt-6">Why the Sequence Matters</h4>
          <ul className="list-disc list-inside text-[#FFC900]/80 mt-2 space-y-1">
            <li>Dead tests identify issues before live testing prevents dangerous situations</li>
            <li>Visual inspection can detect 80% of potential defects</li>
            <li>Insulation testing must be performed before connecting to supply</li>
            <li>Continuity testing ensures protective conductors are effective before energizing</li>
          </ul>
        </div>

        <div className="bg-[#353a2c] p-6 rounded-lg border border-[#FFC900]/30">
          <h4 className="text-[#FFC900] text-lg font-medium mb-4">Testing Sequence Flow Diagram</h4>
          <div className="flex flex-col space-y-6">
            <div className="bg-[#22251e] p-4 rounded-md border border-[#FFC900]/20">
              <h5 className="text-[#FFC900]">1. Visual Inspection</h5>
              <p className="text-[#FFC900]/60">Check compliance with regulations and safety requirements</p>
            </div>
            <div className="flex justify-center">
              <div className="h-6 w-0.5 bg-[#FFC900]/30"></div>
            </div>
            <div className="bg-[#22251e] p-4 rounded-md border border-[#FFC900]/20">
              <h5 className="text-[#FFC900]">2. Dead Testing</h5>
              <p className="text-[#FFC900]/60">Continuity, insulation resistance, polarity tests</p>
            </div>
            <div className="flex justify-center">
              <div className="h-6 w-0.5 bg-[#FFC900]/30"></div>
            </div>
            <div className="bg-[#22251e] p-4 rounded-md border border-[#FFC900]/20">
              <h5 className="text-[#FFC900]">3. Connect to Supply</h5>
              <p className="text-[#FFC900]/60">Only if dead tests are satisfactory</p>
            </div>
            <div className="flex justify-center">
              <div className="h-6 w-0.5 bg-[#FFC900]/30"></div>
            </div>
            <div className="bg-[#22251e] p-4 rounded-md border border-[#FFC900]/20">
              <h5 className="text-[#FFC900]">4. Live Testing</h5>
              <p className="text-[#FFC900]/60">Earth fault loop impedance, PFC, RCD operation</p>
            </div>
            <div className="flex justify-center">
              <div className="h-6 w-0.5 bg-[#FFC900]/30"></div>
            </div>
            <div className="bg-[#22251e] p-4 rounded-md border border-[#FFC900]/20">
              <h5 className="text-[#FFC900]">5. Functional Testing</h5>
              <p className="text-[#FFC900]/60">Verify operation of all equipment and controls</p>
            </div>
          </div>
        </div>
      </div>
    ),
    detailedContent: (
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#FFC900]">Detailed Testing Sequence Guidelines</h3>
        
        <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h4 className="text-xl font-medium text-[#FFC900] mb-4">Visual Inspection in Detail</h4>
          
          <p className="text-[#FFC900]/80">
            Visual inspection must be performed first and should be comprehensive. It includes checking:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Connection and Routing</h5>
              <ul className="list-disc list-inside text-[#FFC900]/80 mt-1 space-y-1">
                <li>Correct connections of all conductors</li>
                <li>Cable routing in safe zones</li>
                <li>Adequate support and protection</li>
                <li>Segregation of circuits where required</li>
              </ul>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Protection Measures</h5>
              <ul className="list-disc list-inside text-[#FFC900]/80 mt-1 space-y-1">
                <li>Fire barriers and seals</li>
                <li>Protection against thermal effects</li>
                <li>Protection against electric shock</li>
                <li>Protection against overcurrent</li>
              </ul>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Identification and Access</h5>
              <ul className="list-disc list-inside text-[#FFC900]/80 mt-1 space-y-1">
                <li>Circuit identification and labeling</li>
                <li>Presence of diagrams and instructions</li>
                <li>Warning notices where required</li>
                <li>Accessibility for operation and maintenance</li>
              </ul>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">General Condition</h5>
              <ul className="list-disc list-inside text-[#FFC900]/80 mt-1 space-y-1">
                <li>No damage to conductors or equipment</li>
                <li>IP ratings appropriate for location</li>
                <li>Presence and condition of earthing arrangements</li>
                <li>Selection of equipment suitable for conditions</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-4">Dead Testing Sequence Rationale</h4>
            
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-[#FFC900]">1. Continuity of Protective Conductors</h5>
                <p className="text-[#FFC900]/80 mt-1">
                  Always test protective conductors first to ensure the earth path is intact before 
                  other tests. This is crucial for safety during subsequent testing and when the 
                  installation is energized.
                </p>
              </div>
              
              <div>
                <h5 className="font-medium text-[#FFC900]">2. Continuity of Ring Final Circuits</h5>
                <p className="text-[#FFC900]/80 mt-1">
                  Performed next to verify the integrity of ring circuits. If there are breaks or interconnections 
                  in the ring, it could affect later insulation resistance tests and the overall safety of the installation.
                </p>
              </div>
              
              <div>
                <h5 className="font-medium text-[#FFC900]">3. Insulation Resistance</h5>
                <p className="text-[#FFC900]/80 mt-1">
                  Only after confirming continuity is correct should insulation resistance be tested. This prevents 
                  potentially damaging test voltages from being applied to sensitive equipment through unexpected paths.
                </p>
              </div>
              
              <div>
                <h5 className="font-medium text-[#FFC900]">4. Polarity (Dead Testing)</h5>
                <p className="text-[#FFC900]/80 mt-1">
                  Verification that line conductors are connected to the correct terminals in single-pole devices. 
                  This must be confirmed before the installation is energized.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-4">Live Testing Sequence Rationale</h4>
            
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-[#FFC900]">1. Polarity (Live Verification)</h5>
                <p className="text-[#FFC900]/80 mt-1">
                  Final verification of polarity using live testing confirms what was checked during dead testing.
                </p>
              </div>
              
              <div>
                <h5 className="font-medium text-[#FFC900]">2. Earth Fault Loop Impedance</h5>
                <p className="text-[#FFC900]/80 mt-1">
                  Measures the impedance of the earth fault current path to confirm that protective devices 
                  will operate within the required disconnection times.
                </p>
              </div>
              
              <div>
                <h5 className="font-medium text-[#FFC900]">3. Prospective Fault Current</h5>
                <p className="text-[#FFC900]/80 mt-1">
                  Confirms that protective devices have adequate breaking capacity for the maximum fault 
                  current that could flow.
                </p>
              </div>
              
              <div>
                <h5 className="font-medium text-[#FFC900]">4. RCD Testing</h5>
                <p className="text-[#FFC900]/80 mt-1">
                  Verifies that RCDs operate correctly at their rated residual operating current and within 
                  the required time limits.
                </p>
              </div>
              
              <div>
                <h5 className="font-medium text-[#FFC900]">5. Functional Testing</h5>
                <p className="text-[#FFC900]/80 mt-1">
                  Final verification that all equipment operates as intended, including switches, controls, 
                  interlocks, and any special functions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  "5.1": {
    title: "Forms and certificates",
    description: "Completing EICs, Minor Works Certificates, and test schedules.",
    content: (
      <div className="space-y-6">
        <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h3 className="text-xl font-medium text-[#FFC900] mb-4">Learning Objectives</h3>
          <ul className="list-disc list-inside text-[#FFC900]/80 space-y-2">
            <li>Understand the different types of certification required</li>
            <li>Learn how to complete certification documents correctly</li>
            <li>Recognize the legal importance of accurate certification</li>
          </ul>
        </div>

        <div className="prose prose-invert max-w-none">
          <h3 className="text-[#FFC900]">Types of Certification</h3>
          <p className="text-[#FFC900]/80">
            The type of certificate required depends on the nature of the work carried out:
          </p>
          
          <ul className="list-disc list-inside text-[#FFC900]/80 mt-2 space-y-1">
            <li><strong>Electrical Installation Certificate (EIC)</strong> - For new installations or major alterations/additions</li>
            <li><strong>Minor Electrical Installation Works Certificate (MEIWC)</strong> - For additions or alterations that do not extend to a new circuit</li>
            <li><strong>Electrical Installation Condition Report (EICR)</strong> - For periodic inspection of existing installations</li>
          </ul>
          
          <h4 className="text-[#FFC900] mt-6">Electrical Installation Certificate Components</h4>
          <p className="text-[#FFC900]/80">
            A complete EIC consists of:
          </p>
          <ol className="list-decimal list-inside text-[#FFC900]/80 mt-2 space-y-1">
            <li>The main certificate with details of the installation and signatories</li>
            <li>Schedule of Inspections</li>
            <li>Schedule of Test Results</li>
          </ol>
          
          <h4 className="text-[#FFC900] mt-6">Legal Implications</h4>
          <p className="text-[#FFC900]/80">
            Electrical certification has significant legal importance:
          </p>
          <ul className="list-disc list-inside text-[#FFC900]/80 mt-2 space-y-1">
            <li>It's a legal requirement under the Electricity at Work Regulations</li>
            <li>For domestic work, it demonstrates compliance with Building Regulations</li>
            <li>It can be evidence in case of disputes or insurance claims</li>
            <li>Fraudulent certification is a criminal offense</li>
          </ul>
        </div>

        <div className="bg-[#353a2c] p-6 rounded-lg border border-[#FFC900]/30">
          <h4 className="text-[#FFC900] text-lg font-medium mb-4">Certificate Comparison</h4>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#FFC900]/20">
                <th className="py-2 px-4 text-left text-[#FFC900]">Feature</th>
                <th className="py-2 px-4 text-left text-[#FFC900]">EIC</th>
                <th className="py-2 px-4 text-left text-[#FFC900]">MEIWC</th>
                <th className="py-2 px-4 text-left text-[#FFC900]">EICR</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">Used for</td>
                <td className="py-3 px-4 text-[#FFC900]/80">New installations or major changes</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Minor works/alterations</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Periodic inspection</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">Signatories</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Designer, constructor, tester</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Single person</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Inspector</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">Schedules</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Inspection and test results</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Basic test results only</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Observations and recommendations</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-[#FFC900]/80">Validity</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Permanent record</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Permanent record</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Until next inspection date</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    detailedContent: (
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#FFC900]">Detailed Certificate Requirements</h3>
        
        <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h4 className="text-xl font-medium text-[#FFC900] mb-4">Electrical Installation Certificate (EIC)</h4>
          
          <div className="space-y-4">
            <p className="text-[#FFC900]/80">
              The Electrical Installation Certificate must include the following sections and information:
            </p>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Part 1: Details of the Client</h5>
              <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                <li>Name</li>
                <li>Address</li>
                <li>Description of installation</li>
                <li>Whether it's a new installation, addition, or alteration</li>
              </ul>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Part 2: Description and Extent</h5>
              <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                <li>Precise description of the work covered by the certificate</li>
                <li>Clear statement of any limitations</li>
                <li>For additions/alterations, statement on condition of existing installation</li>
              </ul>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Part 3: Design</h5>
              <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                <li>Declaration that design meets BS 7671</li>
                <li>Details of any departures from BS 7671</li>
                <li>Details of any applicable special requirements</li>
                <li>Designer's name, qualification, and signature</li>
              </ul>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Part 4: Construction</h5>
              <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                <li>Declaration that construction meets the design</li>
                <li>Details of departures from design</li>
                <li>Constructor's name, qualification, and signature</li>
              </ul>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Part 5: Inspection and Testing</h5>
              <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                <li>Declaration that inspection and testing has been carried out</li>
                <li>Inspector's name, qualification, and signature</li>
                <li>Next inspection recommendation date</li>
              </ul>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Part 6: Supply Characteristics</h5>
              <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                <li>Number of phases</li>
                <li>Nature of supply parameters</li>
                <li>Nominal voltage</li>
                <li>Frequency</li>
                <li>Prospective fault current</li>
                <li>External earth loop impedance</li>
                <li>Details of supply protective device</li>
              </ul>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Part 7: Particulars of Installation</h5>
              <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                <li>Earthing arrangements</li>
                <li>Type and composition of circuit protective conductors</li>
                <li>Main equipotential bonding conductors</li>
                <li>Main switch or circuit breaker details</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-4">Schedule of Inspections</h4>
            
            <div className="space-y-4">
              <p className="text-[#FFC900]/80">
                The Schedule of Inspections is a comprehensive checklist covering:
              </p>
              
              <div>
                <h5 className="font-medium text-[#FFC900]">Connection of Conductors</h5>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>All connections are mechanically and electrically sound</li>
                  <li>Properly inserted into terminals</li>
                  <li>Correct torque applied where specified</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h5 className="font-medium text-[#FFC900]">Identification and Notices</h5>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>Correct identification of conductors</li>
                  <li>Presence of danger notices</li>
                  <li>Circuit identification at distribution boards</li>
                  <li>Presence of periodic inspection notice</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h5 className="font-medium text-[#FFC900]">Cable Installation Methods</h5>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>Routing of cables in prescribed zones</li>
                  <li>Selection of cable types for environmental conditions</li>
                  <li>Adequate support and fixing</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h5 className="font-medium text-[#FFC900]">How to Complete</h5>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>Use ✓ for compliance</li>
                  <li>Use ✗ for non-compliance</li>
                  <li>Use N/A for not applicable</li>
                  <li>Use LIM for when inspection was limited</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-4">Schedule of Test Results</h4>
            
            <div className="space-y-4">
              <p className="text-[#FFC900]/80">
                The Schedule of Test Results must record the following for each circuit:
              </p>
              
              <div>
                <h5 className="font-medium text-[#FFC900]">Circuit Details</h5>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>Circuit description</li>
                  <li>Cable reference method</li>
                  <li>Cable size (mm²)</li>
                  <li>Type of wiring</li>
                  <li>Reference method</li>
                  <li>Number of points served</li>
                  <li>Circuit protective device type and rating</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h5 className="font-medium text-[#FFC900]">Test Results</h5>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>Continuity: R₁+R₂ or R₂</li>
                  <li>Insulation resistance (MΩ)</li>
                  <li>Polarity</li>
                  <li>Earth fault loop impedance (Zs)</li>
                  <li>RCD operation time at IΔn</li>
                  <li>RCD operation time at 5IΔn</li>
                  <li>Functional testing confirmation</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h5 className="font-medium text-[#FFC900]">Test Instrument Details</h5>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>Continuity tester: make, serial number, calibration date</li>
                  <li>Insulation resistance tester: make, serial number, calibration date</li>
                  <li>Earth fault loop impedance tester: make, serial number, calibration date</li>
                  <li>RCD tester: make, serial number, calibration date</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  "5.2": {
    title: "Recording inspection and test results",
    description: "Properly documenting all test findings and observations.",
    content: (
      <div className="space-y-6">
        <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h3 className="text-xl font-medium text-[#FFC900] mb-4">Learning Objectives</h3>
          <ul className="list-disc list-inside text-[#FFC900]/80 space-y-2">
            <li>Understand the importance of accurate documentation</li>
            <li>Learn best practices for recording test results</li>
            <li>Know how to complete the Schedule of Test Results correctly</li>
          </ul>
        </div>

        <div className="prose prose-invert max-w-none">
          <h3 className="text-[#FFC900]">Importance of Accurate Recording</h3>
          <p className="text-[#FFC900]/80">
            Accurate recording of inspection and test results is essential for several reasons:
          </p>
          
          <ul className="list-disc list-inside text-[#FFC900]/80 mt-2 space-y-1">
            <li>Provides evidence that the installation has been properly tested</li>
            <li>Creates a baseline for future maintenance and periodic inspection</li>
            <li>May be required for legal or insurance purposes</li>
            <li>Demonstrates compliance with regulations and standards</li>
            <li>Enables troubleshooting if problems arise later</li>
          </ul>
          
          <h4 className="text-[#FFC900] mt-6">Best Practices for Documentation</h4>
          <ul className="list-disc list-inside text-[#FFC900]/80 mt-2 space-y-1">
            <li>Record actual values, not just "pass" or "fail"</li>
            <li>Use clear, legible handwriting or electronic recording</li>
            <li>Include all required information fields</li>
            <li>Describe any limitations to testing</li>
            <li>Take photographs of any unusual conditions or special arrangements</li>
            <li>Record test instrument details including calibration dates</li>
          </ul>
        </div>

        <div className="bg-[#353a2c] p-6 rounded-lg border border-[#FFC900]/30">
          <h4 className="text-[#FFC900] text-lg font-medium mb-4">Common Documentation Errors</h4>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#FFC900]/20">
                <th className="py-2 px-4 text-left text-[#FFC900]">Common Error</th>
                <th className="py-2 px-4 text-left text-[#FFC900]">Potential Consequence</th>
                <th className="py-2 px-4 text-left text-[#FFC900]">Best Practice</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">Missing values</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Incomplete record, could invalidate certificate</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Complete all fields, mark N/A if truly not applicable</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">Recording "Pass" instead of values</td>
                <td className="py-3 px-4 text-[#FFC900]/80">No baseline for future comparison</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Always record actual measured values</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">Incorrect circuit descriptions</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Difficulty identifying circuits later</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Use clear, specific descriptions that match labels</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-[#FFC900]/80">Missing test instrument details</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Questions about validity of results</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Record make, model, serial number, calibration date</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    detailedContent: (
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#FFC900]">Detailed Documentation Guidelines</h3>
        
        <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h4 className="text-xl font-medium text-[#FFC900] mb-4">Recording Test Results in Detail</h4>
          
          <div className="space-y-4">
            <p className="text-[#FFC900]/80">
              When recording test results, consider the following guidance for different test types:
            </p>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Continuity of Protective Conductors</h5>
              <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                <li>Record the actual measured R₂ value for each circuit</li>
                <li>For main and supplementary bonding, record the resistance value</li>
                <li>Note test method used (e.g., "long lead method")</li>
                <li>Include test current used for the measurement</li>
              </ul>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Insulation Resistance</h5>
              <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                <li>Record the test voltage used (e.g., 500V)</li>
                <li>Record the lowest value measured for phase-neutral</li>
                <li>Record the lowest value measured for phase-earth</li>
                <li>Record the lowest value measured for neutral-earth</li>
                <li>Note any disconnected equipment during testing</li>
              </ul>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Polarity</h5>
              <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                <li>Mark as "✓" if satisfactory</li>
                <li>Note any issues found and how they were corrected</li>
              </ul>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Earth Fault Loop Impedance</h5>
              <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                <li>Record the actual measured Zs value</li>
                <li>Include the maximum permitted value for comparison</li>
                <li>Note if applied Ze + (R₁+R₂) method used instead of direct measurement</li>
              </ul>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">RCD Testing</h5>
              <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                <li>Record the RCD type (e.g., general, Type S, Type A)</li>
                <li>Record the rated residual operating current (IΔn)</li>
                <li>Record actual disconnection times at both 1×IΔn and 5×IΔn</li>
                <li>Note which test was performed first (0° or 180°)</li>
                <li>Include manual test button operation result</li>
              </ul>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Prospective Fault Current</h5>
              <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                <li>Record the highest measured value</li>
                <li>Note whether it was measured at origin or elsewhere</li>
                <li>Include the breaking capacity of protective devices for comparison</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-4">Schedule of Inspections Documentation</h4>
            
            <div className="space-y-4">
              <p className="text-[#FFC900]/80">
                When completing the Schedule of Inspections:
              </p>
              
              <div>
                <h5 className="font-medium text-[#FFC900]">Marking System</h5>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>✓ (tick) - Item inspected and satisfactory</li>
                  <li>✗ (cross) - Item inspected and unsatisfactory</li>
                  <li>N/A - Item not applicable to this installation</li>
                  <li>LIM - Inspection was limited for some reason</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h5 className="font-medium text-[#FFC900]">Comments Section</h5>
                <p className="text-[#FFC900]/80 mt-1">
                  Use the comments section to explain:
                </p>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>Why any inspections were limited</li>
                  <li>Details of any unsatisfactory items</li>
                  <li>Actions taken to remedy unsatisfactory items</li>
                  <li>Any unusual aspects of the installation</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h5 className="font-medium text-[#FFC900]">Photographs and Additional Evidence</h5>
                <p className="text-[#FFC900]/80 mt-1">
                  Consider attaching:
                </p>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>Photographs of main earthing and bonding arrangements</li>
                  <li>Photos of distribution boards with covers removed</li>
                  <li>Images of any special installations or arrangements</li>
                  <li>Pictures of any defects that were remedied</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-4">Electronic Documentation</h4>
            
            <div className="space-y-4">
              <p className="text-[#FFC900]/80">
                Modern testing often uses electronic recording systems with several advantages:
              </p>
              
              <div>
                <h5 className="font-medium text-[#FFC900]">Benefits</h5>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>Automatic transfer of measurements from test instruments</li>
                  <li>Reduced transcription errors</li>
                  <li>Built-in validation of entered data</li>
                  <li>Easy integration of photographs and diagrams</li>
                  <li>Professional presentation</li>
                  <li>Secure electronic storage and backup</li>
                  <li>Easy sharing with clients and building control</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h5 className="font-medium text-[#FFC900]">Best Practices for Electronic Records</h5>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>Always back up electronic records</li>
                  <li>Use software from reputable providers</li>
                  <li>Ensure data is stored securely (GDPR compliance)</li>
                  <li>Consider providing both electronic and hard copy to clients</li>
                  <li>Maintain records for at least the recommended period (minimum 7 years)</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h5 className="font-medium text-[#FFC900]">Electronic Signatures</h5>
                <p className="text-[#FFC900]/80 mt-1">
                  Electronic signatures are generally acceptable if they:
                </p>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>Uniquely identify the signatory</li>
                  <li>Are under the sole control of the signatory</li>
                  <li>Can detect any changes made after signing</li>
                  <li>Comply with relevant electronic signature regulations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  "6.1": {
    title: "Final checks and client handover",
    description: "Functional testing and client instructions.",
    content: (
      <div className="space-y-6">
        <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h3 className="text-xl font-medium text-[#FFC900] mb-4">Learning Objectives</h3>
          <ul className="list-disc list-inside text-[#FFC900]/80 space-y-2">
            <li>Understand the importance of functional testing</li>
            <li>Learn what information must be provided to clients</li>
            <li>Know how to properly hand over an installation</li>
          </ul>
        </div>

        <div className="prose prose-invert max-w-none">
          <h3 className="text-[#FFC900]">Commissioning Process</h3>
          <p className="text-[#FFC900]/80">
            Commissioning is the final stage of the installation process, ensuring that the system operates 
            correctly and that the client understands how to use and maintain it. It includes functional 
            testing and formal handover to the client.
          </p>
          
          <h4 className="text-[#FFC900]">Functional Testing</h4>
          <p className="text-[#FFC900]/80">
            Functional testing confirms that all components and systems operate as intended:
          </p>
          <ul className="list-disc list-inside text-[#FFC900]/80 mt-2 space-y-1">
            <li>All switches operate correctly</li>
            <li>RCDs trip when tested with the test button</li>
            <li>Dimmer switches function through their full range</li>
            <li>Sensors and automated systems respond appropriately</li>
            <li>Emergency systems operate as designed</li>
            <li>Control systems are properly programmed</li>
          </ul>
          
          <h4 className="text-[#FFC900] mt-6">Client Handover</h4>
          <p className="text-[#FFC900]/80">
            The handover should provide the client with all necessary information:
          </p>
          <ul className="list-disc list-inside text-[#FFC900]/80 mt-2 space-y-1">
            <li>All certification documents</li>
            <li>Operation and maintenance instructions</li>
            <li>Manufacturer's literature and warranties</li>
            <li>Emergency procedures</li>
            <li>Contact information for maintenance and emergencies</li>
            <li>Recommendations for periodic testing and maintenance</li>
          </ul>
        </div>

        <div className="bg-[#353a2c] p-6 rounded-lg border border-[#FFC900]/30">
          <h4 className="text-[#FFC900] text-lg font-medium mb-4">Client Handover Checklist</h4>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#FFC900]/20">
                <th className="py-2 px-4 text-left text-[#FFC900]">Item</th>
                <th className="py-2 px-4 text-left text-[#FFC900]">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">Documentation</td>
                <td className="py-3 px-4 text-[#FFC900]/80">EIC with schedules, as-built drawings, warranties, operation manuals</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">Demonstration</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Show operation of main switches, RCDs, controls, special features</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">Safety Information</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Emergency procedures, isolation points, RCD testing instructions</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-[#FFC900]/80">Future Requirements</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Periodic inspection intervals, maintenance requirements</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    detailedContent: (
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#FFC900]">Detailed Commissioning Process</h3>
        
        <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h4 className="text-xl font-medium text-[#FFC900] mb-4">Comprehensive Functional Testing</h4>
          
          <div className="space-y-4">
            <p className="text-[#FFC900]/80">
              Functional testing must be comprehensive to ensure all aspects of the installation operate correctly:
            </p>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Switchgear and Control Gear</h5>
              <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                <li>Check mechanical operation of switches and circuit breakers</li>
                <li>Verify all locking mechanisms function properly</li>
                <li>Test operation under load conditions</li>
                <li>Check that all switching positions are clearly identified</li>
                <li>Verify operation of mechanical interlocks</li>
              </ul>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Protective Devices</h5>
              <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                <li>Test all RCDs using the integral test button</li>
                <li>Verify correct operation of thermal-magnetic circuit breakers</li>
                <li>Check operation of overvoltage protection devices (if fitted)</li>
                <li>Test any AFDDs (Arc Fault Detection Devices) using test function</li>
                <li>Verify operation of any special protection devices</li>
              </ul>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Special Installations and Equipment</h5>
              <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                <li>Test fire alarm interfaces (if present)</li>
                <li>Check operation of emergency lighting systems</li>
                <li>Verify operation of any standby supplies or UPS systems</li>
                <li>Test security systems and interfaces</li>
                <li>Check heating and cooling control systems</li>
              </ul>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Control Systems</h5>
              <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                <li>Test all programmable features and settings</li>
                <li>Verify operation of timers and scheduling functions</li>
                <li>Check sensor operations (motion, light, temperature, etc.)</li>
                <li>Test automated scenarios and scenes</li>
                <li>Verify remote control functions</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-4">Client Training and Demonstration</h4>
            
            <div className="space-y-4">
              <p className="text-[#FFC900]/80">
                Thorough client training is essential to ensure proper operation and maintenance:
              </p>
              
              <div>
                <h5 className="font-medium text-[#FFC900]">Basic Operations</h5>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>Location and operation of main switches</li>
                  <li>How to isolate the installation in an emergency</li>
                  <li>Circuit identification and distribution board layout</li>
                  <li>How to reset circuit breakers after a trip</li>
                  <li>Testing RCDs using the test button</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h5 className="font-medium text-[#FFC900]">Advanced Systems (if applicable)</h5>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>Programming controls and timers</li>
                  <li>Adjusting settings on electronic devices</li>
                  <li>Using special features of installed systems</li>
                  <li>Accessing remote control functions</li>
                  <li>Software interfaces and updates</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h5 className="font-medium text-[#FFC900]">Verification of Understanding</h5>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>Ask the client to demonstrate operations</li>
                  <li>Check they can locate important documentation</li>
                  <li>Ensure they know who to contact for issues</li>
                  <li>Verify they understand maintenance requirements</li>
                  <li>Provide written instructions for complex procedures</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-4">Documentation Handover</h4>
            
            <div className="space-y-4">
              <p className="text-[#FFC900]/80">
                The complete documentation package should include:
              </p>
              
              <div>
                <h5 className="font-medium text-[#FFC900]">Certification and Compliance</h5>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>Electrical Installation Certificate (EIC)</li>
                  <li>Schedule of Inspections</li>
                  <li>Schedule of Test Results</li>
                  <li>Building Regulations compliance certificate (where applicable)</li>
                  <li>Any specialist certification (e.g., hazardous areas)</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h5 className="font-medium text-[#FFC900]">Drawings and Specifications</h5>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>As-built drawings showing actual installation details</li>
                  <li>Schematic diagrams</li>
                  <li>Distribution board schedules</li>
                  <li>Cable routes and containment systems</li>
                  <li>Location of concealed services</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h5 className="font-medium text-[#FFC900]">Operation and Maintenance</h5>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>Manufacturer's operation manuals</li>
                  <li>Maintenance schedules</li>
                  <li>Spare parts information</li>
                  <li>Warranty documentation</li>
                  <li>Servicing requirements</li>
                  <li>Troubleshooting guides</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h5 className="font-medium text-[#FFC900]">Contact Information</h5>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>Installing contractor details</li>
                  <li>Emergency contact numbers</li>
                  <li>Maintenance contractor details</li>
                  <li>Manufacturer support contacts</li>
                  <li>Warranty claim procedures</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  "6.2": {
    title: "Maintenance requirements",
    description: "Explaining ongoing maintenance needs to clients.",
    content: (
      <div className="space-y-6">
        <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h3 className="text-xl font-medium text-[#FFC900] mb-4">Learning Objectives</h3>
          <ul className="list-disc list-inside text-[#FFC900]/80 space-y-2">
            <li>Understand maintenance requirements for electrical installations</li>
            <li>Learn how to communicate maintenance needs to clients</li>
            <li>Recognize the importance of periodic inspection and testing</li>
          </ul>
        </div>

        <div className="prose prose-invert max-w-none">
          <h3 className="text-[#FFC900]">Maintenance Requirements</h3>
          <p className="text-[#FFC900]/80">
            All electrical installations require ongoing maintenance to ensure continued safe operation. 
            BS 7671 requires that installations are maintained in a safe condition, and recommends periodic 
            inspection and testing.
          </p>
          
          <h4 className="text-[#FFC900]">Types of Maintenance</h4>
          <ul className="list-disc list-inside text-[#FFC900]/80 mt-2 space-y-1">
            <li><strong>Preventive Maintenance</strong>: Regular scheduled checks and servicing</li>
            <li><strong>Predictive Maintenance</strong>: Condition monitoring to predict failures</li>
            <li><strong>Corrective Maintenance</strong>: Repair or replacement when failures occur</li>
            <li><strong>Condition-Based Maintenance</strong>: Maintenance based on actual condition assessment</li>
          </ul>
          
          <h4 className="text-[#FFC900] mt-6">Periodic Inspection and Testing</h4>
          <p className="text-[#FFC900]/80">
            BS 7671 provides recommended maximum intervals between inspections:
          </p>
          <ul className="list-disc list-inside text-[#FFC900]/80 mt-2 space-y-1">
            <li>Domestic premises: 10 years</li>
            <li>Commercial premises: 5 years</li>
            <li>Industrial premises: 3 years</li>
            <li>Places of public entertainment: 1 year</li>
            <li>Fire alarm and emergency lighting systems: As manufacturer's instructions</li>
          </ul>
        </div>

        <div className="bg-[#353a2c] p-6 rounded-lg border border-[#FFC900]/30">
          <h4 className="text-[#FFC900] text-lg font-medium mb-4">Client Maintenance Instructions</h4>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#FFC900]/20">
                <th className="py-2 px-4 text-left text-[#FFC900]">Maintenance Task</th>
                <th className="py-2 px-4 text-left text-[#FFC900]">Frequency</th>
                <th className="py-2 px-4 text-left text-[#FFC900]">Who Can Perform</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">RCD test button operation</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Quarterly</td>
                <td className="py-3 px-4 text-[#FFC900]/80">User</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">Visual inspection for damage</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Annually</td>
                <td className="py-3 px-4 text-[#FFC900]/80">User/Owner</td>
              </tr>
              <tr className="border-b border-[#FFC900]/20">
                <td className="py-3 px-4 text-[#FFC900]/80">Emergency lighting tests</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Monthly</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Responsible Person</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-[#FFC900]/80">Full periodic inspection and testing</td>
                <td className="py-3 px-4 text-[#FFC900]/80">As recommended</td>
                <td className="py-3 px-4 text-[#FFC900]/80">Qualified Electrician</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    detailedContent: (
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#FFC900]">Detailed Maintenance Requirements</h3>
        
        <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h4 className="text-xl font-medium text-[#FFC900] mb-4">Legal Requirements for Maintenance</h4>
          
          <div className="space-y-4">
            <p className="text-[#FFC900]/80">
              Several regulations and legislation require ongoing maintenance of electrical installations:
            </p>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Electricity at Work Regulations 1989</h5>
              <p className="text-[#FFC900]/80 mt-1">
                Regulation 4(2) requires that "As may be necessary to prevent danger, all systems shall be maintained 
                so as to prevent, so far as is reasonably practicable, such danger." This places a legal obligation 
                on duty holders to maintain electrical systems.
              </p>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Health and Safety at Work Act 1974</h5>
              <p className="text-[#FFC900]/80 mt-1">
                Requires employers to ensure the safety of electrical systems affecting employees and others. 
                This includes the need for regular maintenance to ensure continued safety.
              </p>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Management of Health and Safety at Work Regulations 1999</h5>
              <p className="text-[#FFC900]/80 mt-1">
                Requires risk assessment that should include consideration of risks from electrical installations 
                and the maintenance needed to control those risks.
              </p>
            </div>
            
            <div className="bg-[#353a2c] p-4 rounded-md">
              <h5 className="font-medium text-[#FFC900]">Provision and Use of Work Equipment Regulations 1998</h5>
              <p className="text-[#FFC900]/80 mt-1">
                Requires that work equipment (including electrical installations) is maintained in an efficient 
                state, in efficient working order and in good repair.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-4">Periodic Inspection and Testing Details</h4>
            
            <div className="space-y-4">
              <p className="text-[#FFC900]/80">
                Periodic inspection and testing should be carried out by a competent person and includes:
              </p>
              
              <div>
                <h5 className="font-medium text-[#FFC900]">Visual Inspection</h5>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>Checking for signs of damage or deterioration</li>
                  <li>Identifying any changes to the installation since last inspection</li>
                  <li>Verifying compliance with current regulations</li>
                  <li>Checking for any obvious defects</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h5 className="font-medium text-[#FFC900]">Testing</h5>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>Insulation resistance testing</li>
                  <li>Continuity testing of protective conductors</li>
                  <li>Earth fault loop impedance testing</li>
                  <li>RCD operation testing</li>
                  <li>Functional testing of equipment</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h5 className="font-medium text-[#FFC900]">Documentation</h5>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>Electrical Installation Condition Report (EICR)</li>
                  <li>Schedule of inspections</li>
                  <li>Schedule of test results</li>
                  <li>List of observations and recommendations</li>
                  <li>Classification of defects found (C1, C2, C3, FI)</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h5 className="font-medium text-[#FFC900]">Special Considerations</h5>
                <p className="text-[#FFC900]/80 mt-1">
                  Some installations require more frequent or specialized inspection:
                </p>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>Swimming pools: Annually</li>
                  <li>Caravan parks: Annually</li>
                  <li>Marinas: Annually</li>
                  <li>Construction sites: 3 months</li>
                  <li>Agricultural installations: 3 years</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
            <h4 className="text-lg font-medium text-[#FFC900] mb-4">Developing a Maintenance Plan</h4>
            
            <div className="space-y-4">
              <p className="text-[#FFC900]/80">
                Advise clients on developing a comprehensive maintenance plan:
              </p>
              
              <div>
                <h5 className="font-medium text-[#FFC900]">Regular User Checks</h5>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>Monthly visual inspection for damage</li>
                  <li>Quarterly RCD test button operation</li>
                  <li>Checking for warning signs (flickering lights, warm sockets)</li>
                  <li>Monitoring for tripping circuit breakers</li>
                  <li>Looking for discoloration around outlets or connections</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h5 className="font-medium text-[#FFC900]">Professional Maintenance</h5>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>Annual inspection of critical systems</li>
                  <li>Thermal imaging to identify hotspots</li>
                  <li>Tightening of connections in distribution boards</li>
                  <li>Cleaning of equipment and ventilation</li>
                  <li>Testing of emergency systems</li>
                  <li>Full periodic inspection and testing at recommended intervals</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h5 className="font-medium text-[#FFC900]">Specialist Equipment Maintenance</h5>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>HVAC systems: As per manufacturer's guidelines</li>
                  <li>Fire alarm systems: Quarterly and annual testing</li>
                  <li>Emergency lighting: Monthly function test, annual duration test</li>
                  <li>UPS systems: As per manufacturer's guidelines</li>
                  <li>Generators: Regular testing under load</li>
                </ul>
              </div>
              
              <div className="mt-3">
                <h5 className="font-medium text-[#FFC900]">Maintenance Records</h5>
                <p className="text-[#FFC900]/80 mt-1">
                  Advise clients on maintaining comprehensive records:
                </p>
                <ul className="list-disc list-inside text-[#FFC900]/80 mt-1">
                  <li>Log of all user checks</li>
                  <li>Records of professional maintenance visits</li>
                  <li>Details of any repairs or modifications</li>
                  <li>Copies of test certificates and reports</li>
                  <li>Schedule for future maintenance activities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
};

