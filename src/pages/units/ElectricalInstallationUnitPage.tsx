
import React, { useState } from 'react';
import LearningContentLayout from '@/components/learning/LearningContentLayout';
import InteractiveLearningModule from '@/components/level2/InteractiveLearningModule';
import { FormativeAssessment } from '@/components/units/FormativeAssessment';
import { Button } from '@/components/ui/button';
import { SafetyQuiz } from '@/components/units/SafetyQuiz';
import { InteractiveDiagram } from '@/components/units/InteractiveDiagram';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from '@/hooks/use-toast';

const ElectricalInstallationUnitPage = () => {
  const [unitProgress, setUnitProgress] = useState({
    completed: 2,
    total: 5,
    timeSpent: 180, // 3 hours in minutes
    estimatedTime: 300 // 5 hours in minutes
  });
  
  const { toast } = useToast();
  
  // Sample sections for the sidebar navigation
  const unitSections = [
    { id: '1', title: 'Introduction to Electrical Installations', isCompleted: true },
    { id: '2', title: 'Safety Regulations and Standards', isCompleted: true },
    { id: '3', title: 'Installation Methods', isCompleted: false },
    { id: '4', title: 'Testing and Certification', isCompleted: false },
    { id: '5', title: 'Unit Assessment', isCompleted: false }
  ];
  
  // Navigation between sections
  const prevSection = { title: 'Previous: Health and Safety', path: '/apprentices/study-materials/eal/level-2/health-safety' };
  const nextSection = { title: 'Next: Installation Methods', path: '/apprentices/study-materials/eal/level-2/installation-technology/methods' };
  
  // Sample assessment questions
  const sampleQuestions = [
    {
      question: 'Which regulation governs electrical installations in the UK?',
      options: ['Building Regulations', 'BS 7671', 'Health and Safety Act', 'Electricity at Work Act'],
      correctAnswer: 'BS 7671',
      explanation: 'BS 7671 (IET Wiring Regulations) is the national standard for electrical installations in the UK.'
    },
    {
      question: 'What is the standard voltage for domestic electrical installations in the UK?',
      options: ['110V', '230V', '400V', '415V'],
      correctAnswer: '230V',
      explanation: 'The standard nominal voltage for single-phase supplies in the UK is 230V with a tolerance of +10% / -6%.'
    },
    {
      question: 'What type of cable is commonly used for fixed wiring in domestic installations?',
      options: ['SWA cable', 'PVC/PVC twin and earth', 'FP200', 'MICC'],
      correctAnswer: 'PVC/PVC twin and earth',
      explanation: 'PVC/PVC twin and earth cable is the most commonly used cable for fixed wiring in domestic installations.'
    }
  ];
  
  // Handle time updates
  const handleTimeUpdate = async (minutes: number) => {
    // In a real application, this would update the database
    setUnitProgress(prev => ({
      ...prev,
      timeSpent: prev.timeSpent + minutes
    }));
    
    // Example of how this would be saved to Supabase in a real implementation
    try {
      // This is just a demonstration - in a real app you'd implement this with proper auth
      console.log(`Recording ${minutes} minutes of training time`);
      
      // Example of how this would be implemented
      /*
      const user = supabase.auth.getUser();
      if (user) {
        const { error } = await supabase
          .from('user_progress')
          .upsert({
            user_id: user.id,
            unit_id: 'ELEC2/05A',
            time_spent: minutes,
            last_accessed: new Date()
          });
          
        if (error) throw error;
      }
      */
      
      toast({
        title: "Training time recorded",
        description: `${minutes} minutes of study time has been added to your training record`,
      });
    } catch (error) {
      console.error('Error updating training time:', error);
      toast({
        title: "Error recording time",
        description: "There was a problem updating your training record",
        variant: "destructive"
      });
    }
  };
  
  return (
    <LearningContentLayout
      unitNumber="ELEC2/05A"
      unitTitle="Electrical Installation Methods, Procedures and Requirements"
      unitDescription="Focuses on standard methods and procedures for electrical installations, ensuring compliance with regulations."
      backPath="/apprentices/study-materials/eal/level-2"
      progress={unitProgress}
      sections={unitSections}
      prevSection={prevSection}
      nextSection={nextSection}
      onTimeUpdate={handleTimeUpdate}
    >
      <div className="space-y-8">
        <InteractiveLearningModule
          title="Introduction to Electrical Installation Methods"
          description="Learn the fundamental methods and practices for electrical installations"
          theory={
            <div>
              <p className="mb-4">
                Electrical installation work must be carried out in accordance with the IET Wiring Regulations BS 7671. These regulations ensure that electrical installations are safe and fit for purpose.
              </p>
              
              <h3 className="text-lg font-medium mt-6 mb-3">Key Installation Methods</h3>
              <p className="mb-4">
                There are several key methods for installing electrical systems in buildings:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Surface mounting - cables and equipment attached to the surface of walls and ceilings</li>
                <li>Flush mounting - cables and equipment installed within the building structure</li>
                <li>Conduit systems - metal or plastic tubes that protect cables</li>
                <li>Trunking systems - rectangular enclosures for multiple cables</li>
                <li>Cable tray systems - open support systems for multiple cables</li>
              </ul>
              
              <p className="mt-4">
                The selection of installation method depends on several factors including building construction, environmental conditions, aesthetic requirements, and budget constraints.
              </p>
            </div>
          }
          examples={
            <div>
              <h3 className="text-lg font-medium mb-4">Example: Domestic Consumer Unit Installation</h3>
              
              <p className="mb-4">
                A typical domestic consumer unit installation follows these steps:
              </p>
              
              <ol className="list-decimal pl-6 space-y-2">
                <li>Position the consumer unit at least 1.4m from the floor level</li>
                <li>Ensure the location is accessible but not in a bathroom or kitchen</li>
                <li>Mount securely to the wall using appropriate fixings</li>
                <li>Connect the main earth terminal to the main earthing conductor</li>
                <li>Install MCBs according to circuit requirements</li>
                <li>Connect circuit cables to appropriate MCBs</li>
                <li>Label all circuits clearly on the consumer unit</li>
                <li>Test the installation according to BS 7671 requirements</li>
              </ol>
              
              <p className="mt-4">
                This example demonstrates the systematic approach required for a safe and compliant electrical installation.
              </p>
            </div>
          }
          practice={
            <div>
              <h3 className="text-lg font-medium mb-4">Practice Exercise: Cable Selection</h3>
              
              <p className="mb-4">
                For each of the following scenarios, identify the most appropriate cable type:
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <p><strong>Scenario 1:</strong> Fixed wiring for lighting circuits in a domestic property</p>
                  <p className="mt-2 text-sm text-primary/70">Think about current capacity and ease of installation</p>
                  <Button variant="outline" className="mt-3">Reveal Answer</Button>
                </div>
                
                <div className="p-4 bg-primary/5 rounded-lg">
                  <p><strong>Scenario 2:</strong> Underground supply to an outdoor garage</p>
                  <p className="mt-2 text-sm text-primary/70">Consider protection against mechanical damage and moisture</p>
                  <Button variant="outline" className="mt-3">Reveal Answer</Button>
                </div>
                
                <div className="p-4 bg-primary/5 rounded-lg">
                  <p><strong>Scenario 3:</strong> Wiring in a high temperature environment (boiler room)</p>
                  <p className="mt-2 text-sm text-primary/70">Think about temperature ratings and fire resistance</p>
                  <Button variant="outline" className="mt-3">Reveal Answer</Button>
                </div>
              </div>
            </div>
          }
          assessment={
            <FormativeAssessment
              questions={sampleQuestions}
              questionsToShow={3}
              unitId="ELEC2/05A"
            />
          }
          onComplete={() => {
            setUnitProgress(prev => ({
              ...prev,
              completed: Math.min(prev.completed + 1, prev.total)
            }));
          }}
        />

        <InteractiveDiagram
          imageSrc="/images/electrical-components/consumer-unit-diagram.png"
          altText="Diagram of a modern consumer unit with labeled components"
          title="Modern Consumer Unit Components"
          hotspots={[
            {
              id: "1",
              x: 20,
              y: 30,
              label: "Main Switch",
              description: "The main double-pole switch that isolates the entire installation from the supply."
            },
            {
              id: "2",
              x: 50,
              y: 40,
              label: "RCD Protection",
              description: "Residual Current Device that provides protection against electric shock."
            },
            {
              id: "3",
              x: 75,
              y: 50,
              label: "MCBs",
              description: "Miniature Circuit Breakers that protect individual circuits against overload and short circuit."
            }
          ]}
        />

        <div className="bg-secondary p-6 rounded-lg border border-primary/20">
          <h3 className="text-xl font-medium text-primary mb-4">Knowledge Check: Electrical Installation Safety</h3>
          <p className="mb-4 text-primary/70">
            Test your understanding of safety requirements in electrical installations with this short quiz.
          </p>
          
          <SafetyQuiz
            unitId="ELEC2/05A"
            timeLimit={300}
            questionsToShow={5}
            questions={[
              {
                question: "What is the minimum IP rating required for an outdoor socket?",
                options: ["IP44", "IP55", "IP65", "IP68"],
                correctAnswer: "IP65",
                explanation: "Outdoor sockets need at least IP65 protection to ensure they are dust-tight and protected against water jets."
              },
              {
                question: "What is the maximum disconnection time for a TN system with a nominal voltage of 230V?",
                options: ["0.2 seconds", "0.4 seconds", "0.8 seconds", "5 seconds"],
                correctAnswer: "0.4 seconds",
                explanation: "For a TN system with 230V, the maximum disconnection time is 0.4 seconds for circuits up to 32A."
              },
              {
                question: "Which of the following cable types has the highest temperature rating?",
                options: ["PVC", "XLPE", "LSF", "MICC"],
                correctAnswer: "MICC",
                explanation: "Mineral Insulated Copper Clad (MICC) cable can withstand temperatures up to 250°C, much higher than PVC (70°C), XLPE (90°C) or LSF (Low Smoke and Fume, 85°C)."
              }
            ]}
          />
        </div>
      </div>
    </LearningContentLayout>
  );
};

export default ElectricalInstallationUnitPage;
