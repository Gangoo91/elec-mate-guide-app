
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { SafetyQuiz } from "@/components/units/SafetyQuiz";
import LessonContent from "@/components/units/LessonContent";
import { ContentSection } from "@/components/units/ContentSection";
import { Separator } from "@/components/ui/separator";

const Level3Unit303Page = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3');
  };
  
  const handleAssessmentClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/303/assessment');
  };
  
  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Unit 303: Electrical Installations: Fault Diagnosis and Rectification"
          description="Develop skills in finding and fixing electrical faults using advanced testing equipment and procedures."
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="1. Types of Electrical Faults">
            <div className="space-y-4">
              <p>
                Understanding different types of electrical faults is essential for effective diagnosis and repair.
                Here are the main types of faults you'll encounter:
              </p>
              
              <ContentSection 
                title="Short Circuits" 
                content={
                  <div className="space-y-2">
                    <p>Direct unintended connections between live conductors or between live and neutral:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Live-to-neutral short circuits cause excessive current flow</li>
                      <li>Live-to-earth shorts activate protective devices</li>
                      <li>Often caused by damaged insulation, water ingress, or physical damage</li>
                      <li>Typically results in immediate tripping of circuit breakers</li>
                    </ul>
                  </div>
                }
              />
              
              <ContentSection 
                title="Open Circuits" 
                content={
                  <div className="space-y-2">
                    <p>Breaks in the electrical path that prevent current flow:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Broken wires or conductors</li>
                      <li>Loose or disconnected terminals</li>
                      <li>Failed components interrupting the circuit</li>
                      <li>Results in non-functioning equipment or systems</li>
                    </ul>
                  </div>
                }
              />
              
              <ContentSection 
                title="Earth Faults" 
                content={
                  <div className="space-y-2">
                    <p>Unintentional connections between live conductors and earth:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Often caused by insulation breakdown</li>
                      <li>Can create dangerous touch voltages on equipment</li>
                      <li>Protected by RCDs (Residual Current Devices)</li>
                      <li>May develop gradually over time due to deterioration</li>
                    </ul>
                  </div>
                }
              />
              
              <ContentSection 
                title="Overloads" 
                content={
                  <div className="space-y-2">
                    <p>Excessive current flow through circuits without short circuits:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Too many devices connected to one circuit</li>
                      <li>Equipment drawing more current than design specifications</li>
                      <li>Causes overheating of conductors and components</li>
                      <li>May trigger thermal protection in MCBs</li>
                    </ul>
                  </div>
                }
              />
              
              <ContentSection 
                title="Equipment Failure" 
                content={
                  <div className="space-y-2">
                    <p>Internal component failures within electrical equipment:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Failed motors, transformers, or electronic components</li>
                      <li>Worn mechanical parts causing electrical issues</li>
                      <li>Thermal damage to equipment</li>
                      <li>Manufacturing defects manifesting over time</li>
                    </ul>
                  </div>
                }
              />
              
              <ContentSection 
                title="High Resistance Connections" 
                content={
                  <div className="space-y-2">
                    <p>Connections with excessive resistance causing localized heating:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Loose terminations that have begun to arc</li>
                      <li>Corroded or oxidized connection points</li>
                      <li>Improper crimping or termination techniques</li>
                      <li>Often detected through thermal imaging before catastrophic failure</li>
                      <li>Can lead to fire hazards if undetected</li>
                    </ul>
                  </div>
                }
              />
            </div>
          </LessonContent>
          
          <LessonContent title="2. Fault Diagnosis Techniques">
            <div className="space-y-4">
              <p>
                Effective fault diagnosis requires systematic approaches and proper use of testing equipment.
                The following techniques are essential for professional electricians:
              </p>
              
              <ContentSection 
                title="Logical Step-by-Step Fault Finding" 
                content={
                  <div className="space-y-2">
                    <p>A methodical approach to identifying faults:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Visual inspection first:</strong> Look for obvious signs of damage, burning, discoloration</li>
                      <li><strong>Asking questions:</strong> Gather information from users/clients about when the problem started and any related events</li>
                      <li><strong>Testing in sequence:</strong> Start with safe isolation procedures before progressing through systematic tests</li>
                      <li><strong>Elimination process:</strong> Rule out potential causes one by one</li>
                      <li><strong>Documentation:</strong> Record all findings and test results methodically</li>
                    </ul>
                  </div>
                }
              />
              
              <ContentSection 
                title="Use of Test Equipment" 
                content={
                  <div className="space-y-4">
                    <p>Proper selection and use of testing instruments:</p>
                    
                    <h4 className="font-medium text-[#FFC900]">Continuity Tester</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Testing for complete circuits and identifying breaks in conductors</li>
                      <li>Verifying correct terminations and connections</li>
                      <li>Checking protective conductor continuity</li>
                    </ul>
                    
                    <h4 className="font-medium text-[#FFC900] mt-2">Insulation Resistance Tester</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Testing insulation integrity between live conductors and earth</li>
                      <li>Identifying breakdown of insulation</li>
                      <li>Testing at higher voltages (250V-1000V) to verify insulation quality</li>
                      <li>Identifying hidden faults that don't show under normal voltage</li>
                    </ul>
                    
                    <h4 className="font-medium text-[#FFC900] mt-2">Loop Impedance Tester</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Measuring earth fault loop impedance</li>
                      <li>Verifying protection will operate within required disconnection times</li>
                      <li>Confirming compliance with BS 7671 requirements</li>
                    </ul>
                    
                    <h4 className="font-medium text-[#FFC900] mt-2">RCD Testers</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Verifying RCD trip times at different test currents</li>
                      <li>Testing RCD functionality and sensitivity</li>
                      <li>Checking for correct RCD operation under fault conditions</li>
                    </ul>
                    
                    <h4 className="font-medium text-[#FFC900] mt-2">Voltage Indicators and Proving Units</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Safe confirmation of voltage presence/absence</li>
                      <li>Essential part of safe isolation procedures</li>
                      <li>Always test-before-touch approach</li>
                      <li>Verification of indicator functionality with proving unit before and after use</li>
                    </ul>
                  </div>
                }
              />
            </div>
          </LessonContent>
          
          <LessonContent title="3. Safe Working Procedures">
            <div className="space-y-4">
              <p>
                Safety is paramount when diagnosing and repairing electrical faults. 
                Following established procedures ensures protection for the electrician and others.
              </p>
              
              <ContentSection 
                title="Safe Isolation Process" 
                content={
                  <div className="space-y-2">
                    <p>The mandatory procedure for working on electrical systems:</p>
                    <ol className="list-decimal pl-6 space-y-1">
                      <li>Identify the circuit or equipment to be worked on</li>
                      <li>Obtain permission to isolate if required</li>
                      <li>Isolate the supply using appropriate isolation devices</li>
                      <li>Secure the isolation using locks and/or warning tags</li>
                      <li>Prove the supply is dead using approved voltage indicator</li>
                      <li>Verify the voltage indicator works using a proving unit before and after testing</li>
                    </ol>
                    <p className="mt-2 font-semibold">This procedure must never be bypassed or abbreviated.</p>
                  </div>
                }
              />
              
              <ContentSection 
                title="Risk Assessment" 
                content={
                  <div className="space-y-2">
                    <p>Evaluate potential hazards before beginning work:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Identify all potential hazards in the work area</li>
                      <li>Assess risks to yourself and others</li>
                      <li>Determine appropriate control measures</li>
                      <li>Document the assessment process and findings</li>
                      <li>Communicate risks and controls to all affected parties</li>
                    </ul>
                  </div>
                }
              />
              
              <ContentSection 
                title="Circuit Identification and Isolation" 
                content={
                  <div className="space-y-2">
                    <p>Ensuring the correct circuit is identified and safely isolated:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Use circuit diagrams and distribution board schedules</li>
                      <li>Verify circuit identification through testing</li>
                      <li>Consider impacts of isolation on other systems</li>
                      <li>Ensure isolation points are accessible and clearly identified</li>
                      <li>Confirm isolation affects only the intended circuit</li>
                    </ul>
                  </div>
                }
              />
              
              <ContentSection 
                title="Lock-off Devices and Warning Signs" 
                content={
                  <div className="space-y-2">
                    <p>Preventing accidental re-energization of circuits:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Apply personal padlocks to isolation points</li>
                      <li>Use multi-lock hasps for team working environments</li>
                      <li>Display appropriate warning signs and notices</li>
                      <li>Implement permit-to-work systems for complex situations</li>
                      <li>Maintain possession of keys throughout the work period</li>
                      <li>Communicate isolation status to all affected personnel</li>
                    </ul>
                  </div>
                }
              />
            </div>
          </LessonContent>
          
          <LessonContent title="4. Recording and Reporting">
            <div className="space-y-4">
              <p>
                Proper documentation is essential for effective fault management and regulatory compliance.
              </p>
              
              <ContentSection 
                title="Recording Fault Diagnosis Findings" 
                content={
                  <div className="space-y-2">
                    <p>Maintaining accurate records of diagnostic processes:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Document all test results with values and testing conditions</li>
                      <li>Record the sequence of diagnostic steps taken</li>
                      <li>Note observations about equipment condition</li>
                      <li>Photograph evidence of faults where appropriate</li>
                      <li>Maintain time-stamped records of when tests were performed</li>
                    </ul>
                  </div>
                }
              />
              
              <ContentSection 
                title="Completing Required Paperwork" 
                content={
                  <div className="space-y-2">
                    <p>Necessary documentation for compliance and record-keeping:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Minor Electrical Installation Works Certificates for small repairs</li>
                      <li>Electrical Installation Certificates for more extensive work</li>
                      <li>Detailed fault reports describing findings and actions</li>
                      <li>Risk assessment documentation</li>
                      <li>Method statements for complex repair procedures</li>
                      <li>Updates to installation logbooks and maintenance records</li>
                    </ul>
                  </div>
                }
              />
              
              <ContentSection 
                title="Communication with Clients and Managers" 
                content={
                  <div className="space-y-2">
                    <p>Effectively conveying technical information to non-technical individuals:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Clear explanation of fault causes in understandable terms</li>
                      <li>Detailed description of repair options with pros and cons</li>
                      <li>Cost estimates and timeframes for repairs</li>
                      <li>Recommendations for preventing future issues</li>
                      <li>Documentation of conversations and agreements</li>
                      <li>Follow-up communication after repairs are completed</li>
                    </ul>
                  </div>
                }
              />
            </div>
          </LessonContent>
          
          <LessonContent title="5. Rectification (Fixing Faults)">
            <div className="space-y-4">
              <p>
                Properly repairing electrical faults requires appropriate techniques and adherence to regulations.
              </p>
              
              <ContentSection 
                title="Repair Methods for Different Faults" 
                content={
                  <div className="space-y-4">
                    <h4 className="font-medium text-[#FFC900]">Tightening Loose Connections</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Use calibrated torque tools where specified</li>
                      <li>Ensure proper contact area in terminations</li>
                      <li>Check for signs of previous overheating</li>
                      <li>Verify conductor strands are undamaged</li>
                    </ul>
                    
                    <h4 className="font-medium text-[#FFC900] mt-2">Replacing Damaged Cables</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Select correct cable type, size and rating</li>
                      <li>Ensure proper route and support for replacement cables</li>
                      <li>Maintain correct separation from other services</li>
                      <li>Proper termination techniques for new conductors</li>
                      <li>Testing of new cables before energizing</li>
                    </ul>
                    
                    <h4 className="font-medium text-[#FFC900] mt-2">Replacing Faulty Accessories</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Selection of equivalent or upgraded replacement parts</li>
                      <li>Ensuring compatibility with existing installation</li>
                      <li>Proper installation of switches, sockets, MCBs, RCDs, etc.</li>
                      <li>Verification of correct operation after replacement</li>
                      <li>Updates to circuit diagrams and schedules</li>
                    </ul>
                    
                    <h4 className="font-medium text-[#FFC900] mt-2">Correctly Re-terminating Conductors</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Proper stripping techniques to avoid damage</li>
                      <li>Correct insertion depth into terminals</li>
                      <li>Secure termination with appropriate tightening</li>
                      <li>Verification that no stray strands are exposed</li>
                      <li>Color coding and identification maintained</li>
                    </ul>
                  </div>
                }
              />
              
              <ContentSection 
                title="Post-Rectification Testing" 
                content={
                  <div className="space-y-2">
                    <p>Ensuring the repair meets regulatory requirements:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Dead testing before re-energization:</li>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Continuity of protective conductors</li>
                        <li>Continuity of ring final circuit conductors (if applicable)</li>
                        <li>Insulation resistance testing</li>
                      </ul>
                      <li>Live testing after re-energization:</li>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Polarity verification</li>
                        <li>Earth fault loop impedance measurement</li>
                        <li>RCD operation testing (where applicable)</li>
                        <li>Functional testing of repaired equipment</li>
                      </ul>
                      <li>Documentation of all test results</li>
                      <li>Comparison with BS 7671 requirements to ensure compliance</li>
                    </ul>
                  </div>
                }
              />
            </div>
          </LessonContent>
          
          <div>
            <Separator className="my-8 bg-[#FFC900]/20" />
            
            <div className="space-y-6 mb-8">
              <h2 className="text-2xl font-semibold text-[#FFC900]">Key Learning Outcomes</h2>
              
              <ContentSection 
                title="Summary of What 303 Covers" 
                content={
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Find the fault safely</li>
                    <li>Fix the fault correctly</li>
                    <li>Test the installation again to prove it's safe</li>
                    <li>Record and report everything properly</li>
                  </ul>
                }
              />
              
              <ContentSection 
                title="Typical Exam Questions" 
                content={
                  <ul className="list-disc pl-6 space-y-1">
                    <li>"Describe three common causes of short circuit faults in electrical installations."</li>
                    <li>"Outline the procedure for safely isolating a circuit before carrying out fault-finding."</li>
                    <li>"Explain the use of insulation resistance testing during fault diagnosis."</li>
                    <li>"State two possible faults that could cause an RCD to trip."</li>
                  </ul>
                }
              />
              
              <ContentSection 
                title="Important Skills in Unit 303" 
                content={
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Correct use of test equipment</li>
                    <li>Logical, safe fault-finding process</li>
                    <li>Good communication and record-keeping</li>
                    <li>Knowledge of common faults and their symptoms</li>
                  </ul>
                }
              />
              
              <ContentSection 
                title="Quick Tip" 
                content={
                  <div>
                    <p className="mb-2">In the practical assessments for 303, you will likely have to:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Diagnose a fault in a rig or simulated setup</li>
                      <li>Explain what caused it</li>
                      <li>Repair it</li>
                      <li>Prove it's been fixed (by retesting)</li>
                      <li>Fill in a basic report</li>
                    </ul>
                  </div>
                }
              />
            </div>
          </div>
          
          <div className="mt-12 mb-16">
            <h2 className="text-2xl font-semibold text-[#FFC900] mb-6">Unit Assessment</h2>
            <p className="text-[#FFC900]/80 mb-8">
              Test your knowledge of fault diagnosis and rectification techniques with this assessment.
              Questions are randomly selected from a pool of 50 questions to provide a fresh experience each time.
            </p>
            <SafetyQuiz unitId="303" timeLimit={900} questionsToShow={10} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Level3Unit303Page;
