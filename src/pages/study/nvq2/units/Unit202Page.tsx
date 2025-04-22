
import React, { useState } from 'react';
import UnitPage from './UnitPage';
import CourseContentSection from '@/components/study/CourseContentSection';
import UnitQuiz from '@/components/study/UnitQuiz';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookText, FileQuestion } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

const Unit202Page = () => {
  const [activeTab, setActiveTab] = useState('content');
  const { toast } = useToast();
  const { user } = useAuth();

  const electricalPrinciplesContent = {
    key_points: [
      "Ohm's Law defines the relationship between voltage, current and resistance",
      "Understanding AC and DC theory is fundamental to electrical work",
      "Series and parallel circuits behave differently in terms of voltage and current distribution",
      "Power calculation is essential for cable sizing and circuit protection",
      "Impedance in AC circuits includes both resistance and reactance components"
    ],
    main_content: [
      {
        type: "text",
        content: "Electrical scientific principles form the foundation of all electrical work. Understanding these principles allows electricians to safely design, install, and maintain electrical systems."
      },
      {
        type: "regulation",
        content: "Ohm's Law states that the current flowing through a conductor is directly proportional to the voltage and inversely proportional to the resistance. Mathematically, this is expressed as I = V/R, where I is current (amps), V is voltage (volts), and R is resistance (ohms)."
      },
      {
        type: "text",
        content: "Direct Current (DC) flows in one direction only, while Alternating Current (AC) periodically reverses direction. In the UK, the mains supply is 230V AC at 50Hz, meaning the current completes 50 complete cycles per second."
      },
      {
        type: "text",
        content: "Resistance is the opposition to current flow in a circuit. Materials with high resistance are insulators, while those with low resistance are conductors. Resistance is measured in ohms (Ω) and is affected by four key factors: material type, length, cross-sectional area, and temperature."
      },
      {
        type: "checklist",
        items: [
          "Circuit calculations always need to use appropriate units (volts, amps, ohms)",
          "Power (watts) = Voltage (volts) × Current (amps)",
          "In series circuits, the current is the same throughout the circuit",
          "In parallel circuits, the voltage is the same across each branch",
          "Total resistance in series: R_total = R₁ + R₂ + R₃ + ...",
          "Total resistance in parallel: 1/R_total = 1/R₁ + 1/R₂ + 1/R₃ + ..."
        ]
      },
      {
        type: "text",
        content: "Impedance (Z) is the total opposition to current flow in AC circuits, combining resistance and reactance. Reactance is the opposition to current flow due to inductors and capacitors. Impedance is measured in ohms, just like resistance, but accounts for phase differences in AC circuits."
      },
      {
        type: "important_note",
        content: "Always remember that power loss in a circuit is proportional to the square of the current (P = I²R). This is why transmitting electricity at high voltage and low current reduces energy losses in transmission lines."
      }
    ],
    practical_tips: [
      "When troubleshooting, measure voltage first, then current, and finally resistance (with the power off)",
      "Use a multimeter to test continuity before energizing new circuits",
      "Remember that actual resistance of conductors increases with temperature",
      "For precise calculations, always use exact values rather than rounded figures",
      "When calculating power, be aware of the power factor in AC circuits"
    ]
  };

  const electricalPrinciplesQuizQuestions = [
    {
      id: 1,
      text: "What is the formula for Ohm's Law?",
      options: [
        { id: "a", text: "V = IR", isCorrect: true },
        { id: "b", text: "I = VR", isCorrect: false },
        { id: "c", text: "R = I/V", isCorrect: false },
        { id: "d", text: "V = I/R", isCorrect: false }
      ],
      explanation: "Ohm's Law states that voltage (V) equals current (I) multiplied by resistance (R), which can be written as V = IR. This formula is fundamental to electrical calculations."
    },
    {
      id: 2,
      text: "What happens to the total resistance in a series circuit when more resistors are added?",
      options: [
        { id: "a", text: "It decreases", isCorrect: false },
        { id: "b", text: "It increases", isCorrect: true },
        { id: "c", text: "It remains the same", isCorrect: false },
        { id: "d", text: "It becomes zero", isCorrect: false }
      ],
      explanation: "In a series circuit, resistances are additive. The total resistance increases when more resistors are added to the circuit."
    },
    {
      id: 3,
      text: "What is the formula for calculating electrical power?",
      options: [
        { id: "a", text: "P = I/V", isCorrect: false },
        { id: "b", text: "P = I²R", isCorrect: false },
        { id: "c", text: "P = V²/R", isCorrect: false },
        { id: "d", text: "All of the above are valid power formulas", isCorrect: true }
      ],
      explanation: "Power can be calculated using multiple formulas: P = VI, P = I²R, and P = V²/R. All are valid and can be derived from each other using Ohm's Law."
    },
    {
      id: 4,
      text: "In a parallel circuit, what remains constant across all branches?",
      options: [
        { id: "a", text: "Current", isCorrect: false },
        { id: "b", text: "Resistance", isCorrect: false },
        { id: "c", text: "Voltage", isCorrect: true },
        { id: "d", text: "Power", isCorrect: false }
      ],
      explanation: "In a parallel circuit, the voltage remains constant across all branches. The current divides between the branches according to the resistance in each path."
    },
    {
      id: 5,
      text: "What is the difference between impedance and resistance?",
      options: [
        { id: "a", text: "There is no difference; they are identical", isCorrect: false },
        { id: "b", text: "Resistance applies to DC circuits only, while impedance applies to both AC and DC", isCorrect: false },
        { id: "c", text: "Impedance includes reactance effects in AC circuits, while resistance does not", isCorrect: true },
        { id: "d", text: "Impedance is measured in watts, while resistance is measured in ohms", isCorrect: false }
      ],
      explanation: "Impedance is the total opposition to current flow in an AC circuit, combining both resistance and reactance (from inductors and capacitors). Resistance only accounts for the opposition that results in energy dissipation as heat."
    }
  ];

  const handleQuizComplete = async (score: number, totalQuestions: number) => {
    const percentage = (score / totalQuestions) * 100;
    
    toast({
      title: percentage >= 70 ? "Quiz Passed!" : "Quiz Results",
      description: `You scored ${score} out of ${totalQuestions} questions (${percentage}%)`,
      variant: percentage >= 70 ? "default" : "destructive",
    });

    if (user) {
      try {
        // Record the quiz result to track user progress
        const { error } = await supabase
          .from('user_progress')
          .upsert({
            user_id: user.id,
            content_id: '202-quiz', // Identifier for this quiz
            progress: {
              score: percentage,
              completed: percentage >= 70,
              date_completed: new Date().toISOString()
            }
          });
          
        if (error) throw error;
      } catch (error) {
        console.error("Error saving quiz results:", error);
      }
    }
  };

  return (
    <UnitPage
      unitNumber="202"
      title="Electrical Scientific Principles"
      description="Master the essential scientific principles that underpin electrical engineering"
      content={[
        "Basic electrical units and quantities",
        "Ohm's law and basic circuit calculations",
        "AC and DC theory and applications",
        "Series and parallel circuit principles",
        "Resistance, reactance, and impedance",
        "Power calculations and efficiency",
        "Magnetism and electromagnetic principles"
      ]}
      learningOutcomes={[
        "Apply Ohm's Law to solve electrical problems",
        "Calculate power in AC and DC circuits",
        "Understand the difference between series and parallel circuits",
        "Explain resistance, reactance and impedance in electrical systems",
        "Apply scientific principles to practical electrical applications"
      ]}
    >
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-[#151812]">
          <TabsTrigger 
            value="content" 
            className="flex items-center gap-2 data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#151812]"
          >
            <BookText className="h-4 w-4" />
            Learning Content
          </TabsTrigger>
          <TabsTrigger 
            value="quiz" 
            className="flex items-center gap-2 data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#151812]"
          >
            <FileQuestion className="h-4 w-4" />
            Unit Quiz
          </TabsTrigger>
        </TabsList>
        <TabsContent value="content" className="mt-4">
          <CourseContentSection content={electricalPrinciplesContent} />
        </TabsContent>
        <TabsContent value="quiz" className="mt-4">
          <UnitQuiz 
            unitNumber="202" 
            unitTitle="Electrical Scientific Principles" 
            questions={electricalPrinciplesQuizQuestions} 
            onComplete={handleQuizComplete}
          />
        </TabsContent>
      </Tabs>
    </UnitPage>
  );
};

export default Unit202Page;
