
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const FaultFindingPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-skills');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Fault Finding"
          description="Systematic approaches to electrical fault diagnosis and resolution"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Systematic Fault Diagnosis">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Structured Approach</h3>
              <p className="text-[#FFC900]/80">
                A systematic approach to fault finding involves logical steps that help identify the root cause 
                efficiently without overlooking critical factors.
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-[#FFC900]/80">
                <li>Gather information about the fault (symptoms, when it occurred, any recent changes)</li>
                <li>Verify the fault exists and reproduce if possible</li>
                <li>Identify possible causes based on symptoms</li>
                <li>Test each hypothesis systematically</li>
                <li>Isolate the fault location</li>
                <li>Repair or replace faulty components</li>
                <li>Test the system to verify the fault is resolved</li>
                <li>Document findings and solutions</li>
              </ol>
            </div>
          </LessonContent>

          <LessonContent title="Test Equipment Usage">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Essential Tools</h3>
              <p className="text-[#FFC900]/80">
                Using the right test equipment properly is crucial for accurate fault diagnosis. Each tool has 
                specific applications and limitations.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>Multimeter:</strong> Measuring voltage, current, resistance, and continuity</li>
                <li><strong>Oscilloscope:</strong> Observing waveforms and signal analysis</li>
                <li><strong>Insulation tester:</strong> Checking for insulation breakdown</li>
                <li><strong>Earth loop impedance tester:</strong> Verifying earthing effectiveness</li>
                <li><strong>Thermal camera:</strong> Identifying hotspots in connections or components</li>
                <li><strong>Network analyzer:</strong> Diagnosing communication system faults</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Common Fault Patterns">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Recognizing Patterns</h3>
              <p className="text-[#FFC900]/80">
                Experience with common fault patterns helps technicians identify likely causes quickly. Recognizing 
                these patterns speeds up the diagnostic process.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>Open circuits:</strong> Complete loss of current flow, often due to broken conductors or connections</li>
                <li><strong>Short circuits:</strong> Current taking an unintended path, causing overloads and tripping</li>
                <li><strong>High resistance connections:</strong> Causing voltage drop, heating, and intermittent operation</li>
                <li><strong>Insulation breakdown:</strong> Leading to leakage currents and potential shock hazards</li>
                <li><strong>Component failures:</strong> Electronic components failing due to age, stress, or manufacturing defects</li>
                <li><strong>Software/firmware issues:</strong> Programming errors in modern electronic equipment</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default FaultFindingPage;
