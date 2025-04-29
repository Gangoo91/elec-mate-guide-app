
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import SectionGroup from "@/components/units/level3/SectionGroup";
import { unitContent } from '@/data/unitContent';
import { SafetyQuiz } from "@/components/units/SafetyQuiz";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Level3Unit303Page = () => {
  const navigate = useNavigate();
  const unitData = unitContent["303"];
  
  const handleStudySection = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/level-3/303/${sectionId}`);
  };
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3');
  };
  
  // Group sections by their main category (based on section number)
  const sectionGroups = {
    "1": {
      title: "Fault Diagnosis Techniques",
      sections: [
        { id: "1.1", title: "Systematic Troubleshooting Methods", description: "Learning structured approaches to electrical fault diagnosis" },
        { id: "1.2", title: "Using Test Equipment Effectively", description: "Learning to select and use appropriate test equipment for fault diagnosis" },
        { id: "1.3", title: "Interpreting Test Results", description: "Understanding how to analyze and interpret electrical test results" },
      ]
    },
    "2": {
      title: "Common Electrical Faults",
      sections: [
        { id: "2.1", title: "Open Circuit Conditions", description: "Understanding causes and diagnosis of open circuit faults" },
        { id: "2.2", title: "Short Circuits and Earth Faults", description: "Identifying and resolving short circuits and earth faults safely" },
        { id: "2.3", title: "High Resistance Connections", description: "Diagnosing and fixing problematic high resistance connections" },
      ]
    },
    "3": {
      title: "Fault Rectification Procedures",
      sections: [
        { id: "3.1", title: "Isolation and Lock-off Procedures", description: "Safety procedures for isolating electrical systems before working on them" },
        { id: "3.2", title: "Component Replacement Techniques", description: "Best practices for replacing faulty electrical components" },
        { id: "3.3", title: "System Restoration and Post-repair Testing", description: "Procedures for safely restoring power and verifying repairs" },
      ]
    }
  };
  
  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Unit 303: Electrical Installations: Fault Diagnosis and Rectification"
          description="Develop skills in finding and fixing electrical faults using advanced testing equipment and procedures."
          customBackAction={handleBackClick}
        />
        
        <Card className="bg-[#22251e] border-[#FFC900]/20 p-6 mt-8">
          <CardContent className="p-0">
            <h2 className="text-xl font-medium text-[#FFC900] mb-4">What You Learn in Unit 303</h2>
            <p className="text-[#FFC900]/90 mb-6">
              This unit teaches you how to find, analyze, and fix faults in electrical systems safely and professionally.
            </p>
            
            <h3 className="text-lg font-medium text-[#FFC900] mb-3">🛠️ Main Topics Covered:</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-[#FFC900] font-medium mb-2">1. Types of Electrical Faults</h4>
                <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80">
                  <li>Short circuits (live-to-neutral, live-to-earth, etc.)</li>
                  <li>Open circuits (broken wires, loose connections)</li>
                  <li>Earth faults</li>
                  <li>Overloads</li>
                  <li>Equipment failure</li>
                  <li>High resistance joints causing overheating</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-[#FFC900] font-medium mb-2">2. Fault Diagnosis Techniques</h4>
                <p className="text-[#FFC900]/80 mb-2">Logical step-by-step fault finding:</p>
                <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80">
                  <li>Visual inspection first</li>
                  <li>Asking questions (talking to user/client)</li>
                  <li>Testing in a sequence (safe isolation first!)</li>
                </ul>
                
                <p className="text-[#FFC900]/80 mt-3 mb-2">Use of test equipment:</p>
                <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80">
                  <li>Continuity tester</li>
                  <li>Insulation resistance tester</li>
                  <li>Loop impedance tester</li>
                  <li>RCD testers</li>
                  <li>Voltage indicators and proving units</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-[#FFC900] font-medium mb-2">3. Safe Working Procedures</h4>
                <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80">
                  <li>Safe isolation process (you must follow the correct steps)</li>
                  <li>Risk assessment before carrying out fault-finding</li>
                  <li>Ensuring circuit is properly identified and isolated</li>
                  <li>Use of lock-off devices and warning signs</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-[#FFC900] font-medium mb-2">4. Recording and Reporting</h4>
                <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80">
                  <li>Accurately recording fault diagnosis findings</li>
                  <li>Completing paperwork (like Minor Electrical Installation Works Certificates or fault reports)</li>
                  <li>Communicating faults and repairs clearly to the customer or site manager</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-[#FFC900] font-medium mb-2">5. Rectification (Fixing Faults)</h4>
                <p className="text-[#FFC900]/80 mb-2">Correct methods to repair different faults:</p>
                <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80">
                  <li>Tightening loose connections</li>
                  <li>Replacing damaged cables</li>
                  <li>Replacing faulty accessories (switches, sockets, MCBs, RCDs, etc.)</li>
                  <li>Correctly re-terminating conductors</li>
                  <li>Testing after rectification to ensure compliance with BS 7671 (IET Wiring Regulations)</li>
                </ul>
              </div>
            </div>
            
            <Separator className="my-6 bg-[#FFC900]/20" />
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-[#FFC900] mb-3">🧠 Summary of What 303 Covers:</h3>
                <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80">
                  <li>Find the fault safely</li>
                  <li>Fix the fault correctly</li>
                  <li>Test the installation again to prove it's safe</li>
                  <li>Record and report everything properly</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-[#FFC900] mb-3">📋 Typical Exam Questions Might Include:</h3>
                <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80">
                  <li>"Describe three common causes of short circuit faults in electrical installations."</li>
                  <li>"Outline the procedure for safely isolating a circuit before carrying out fault-finding."</li>
                  <li>"Explain the use of insulation resistance testing during fault diagnosis."</li>
                  <li>"State two possible faults that could cause an RCD to trip."</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-[#FFC900] mb-3">🔧 Important Skills in Unit 303:</h3>
                <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80">
                  <li>Correct use of test equipment</li>
                  <li>Logical, safe fault-finding process</li>
                  <li>Good communication and record-keeping</li>
                  <li>Knowledge of common faults and their symptoms</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-[#FFC900] mb-3">⚡ Quick Tip:</h3>
                <p className="text-[#FFC900]/80 mb-2">In the practical assessments for 303, you will likely have to:</p>
                <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80">
                  <li>Diagnose a fault in a rig or simulated setup</li>
                  <li>Explain what caused it</li>
                  <li>Repair it</li>
                  <li>Prove it's been fixed (by retesting)</li>
                  <li>Fill in a basic report</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-8 space-y-10">
          {Object.entries(sectionGroups).map(([groupNumber, group]) => (
            <SectionGroup 
              key={groupNumber}
              number={groupNumber}
              title={group.title}
              sections={group.sections}
              onStudy={handleStudySection}
            />
          ))}
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
    </MainLayout>
  );
};

export default Level3Unit303Page;
