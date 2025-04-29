
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { CheckCircle, BookOpen } from "lucide-react";
import LessonContent from "@/components/units/LessonContent";

// Section interface for type safety and consistency
interface SectionProps {
  id: string;
  title: string;
  description: string;
  onStudy: (id: string) => void;
}

// Component for each section item (1.1, 1.2, etc.)
const SectionItem: React.FC<SectionProps> = ({ id, title, description, onStudy }) => {
  return (
    <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-medium text-[#FFC900]">
            <span className="mr-2">{id}</span>
            {title}
          </h3>
          <p className="text-[#FFC900]/70 mt-2">
            {description}
          </p>
        </div>
        <Button 
          variant="outline" 
          className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
          onClick={() => onStudy(id)}
        >
          <BookOpen className="h-4 w-4" />
          Study
        </Button>
      </div>
    </div>
  );
};

// Section group component (e.g., "1. Three-Phase Systems")
interface SectionGroupProps {
  number: string;
  title: string;
  sections: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  onStudy: (id: string) => void;
}

const SectionGroup: React.FC<SectionGroupProps> = ({ number, title, sections, onStudy }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#FFC900] mb-6">{number}. {title}</h2>
      <div className="grid grid-cols-1 gap-4">
        {sections.map((section) => (
          <SectionItem
            key={section.id}
            id={section.id}
            title={section.title}
            description={section.description}
            onStudy={onStudy}
          />
        ))}
      </div>
    </div>
  );
};

const Level3Unit302Page = () => {
  const navigate = useNavigate();
  
  // Add custom back navigation function
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/core-units');
  };

  // Study function
  const handleStudy = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/level-3/302/${sectionId}`);
  };

  // Take quiz function
  const handleTakeQuiz = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/302/assessment');
  };

  // Section data - expanded to include all the content you provided
  const sectionGroups = [
    {
      number: "1",
      title: "Basic Electrical Theory",
      sections: [
        {
          id: "1.1",
          title: "Ohm's Law and Power Formulas",
          description: "Understanding V = IR and power formulas: P = VI, P = I²R, P = V²/R"
        },
        {
          id: "1.2",
          title: "Energy Calculations",
          description: "Calculating energy consumption using Energy = Power × Time (kWh)"
        },
        {
          id: "1.3",
          title: "Series and Parallel Circuits",
          description: "How voltage, current, and resistance behave in series vs parallel circuits"
        }
      ]
    },
    {
      number: "2",
      title: "Electromagnetic Effects",
      sections: [
        {
          id: "2.1",
          title: "Magnetism and Electromagnetism",
          description: "How electricity creates magnetism and principles of electromagnets"
        },
        {
          id: "2.2",
          title: "Electromagnetic Induction",
          description: "How moving magnetic fields generate electricity (generators and transformers)"
        },
        {
          id: "2.3",
          title: "Applications",
          description: "Practical applications in motors, generators, relays, and transformers"
        }
      ]
    },
    {
      number: "3",
      title: "DC Theory",
      sections: [
        {
          id: "3.1",
          title: "DC Circuit Behavior",
          description: "Understanding how direct current behaves in electrical circuits"
        },
        {
          id: "3.2",
          title: "Batteries and DC Supplies",
          description: "Principles of DC power sources and their characteristics"
        },
        {
          id: "3.3",
          title: "DC Calculations",
          description: "Calculations for resistance, voltage drop, and current in DC circuits"
        }
      ]
    },
    {
      number: "4",
      title: "AC Theory",
      sections: [
        {
          id: "4.1",
          title: "AC vs DC",
          description: "Understanding the fundamental differences between AC and DC"
        },
        {
          id: "4.2",
          title: "Sine Waves",
          description: "Understanding amplitude, frequency, period and waveform characteristics"
        },
        {
          id: "4.3",
          title: "RMS Values",
          description: "Root Mean Square values and calculations (Vrms = 0.707 × Vpeak)"
        },
        {
          id: "4.4",
          title: "Phase Relationships",
          description: "Understanding voltage and current phase relationships in AC circuits"
        }
      ]
    },
    {
      number: "5",
      title: "Capacitance",
      sections: [
        {
          id: "5.1",
          title: "Capacitor Principles",
          description: "How capacitors store electric charge and their construction"
        },
        {
          id: "5.2",
          title: "Capacitor Behavior",
          description: "Charging and discharging of capacitors in circuits"
        },
        {
          id: "5.3",
          title: "Capacitor Calculations",
          description: "Using formulas like Q = CV for capacitance calculations"
        }
      ]
    },
    {
      number: "6",
      title: "Inductance",
      sections: [
        {
          id: "6.1",
          title: "Inductor Principles",
          description: "How coils store energy in magnetic fields and inductor construction"
        },
        {
          id: "6.2",
          title: "Inductance in AC Circuits",
          description: "Effects of inductance on alternating current circuits"
        },
        {
          id: "6.3",
          title: "Types of Inductance",
          description: "Understanding self-inductance and mutual inductance principles"
        }
      ]
    },
    {
      number: "7",
      title: "Power in AC Circuits",
      sections: [
        {
          id: "7.1",
          title: "Power Types",
          description: "True Power (Watts), Reactive Power (VARs), Apparent Power (VA)"
        },
        {
          id: "7.2",
          title: "Power Factor",
          description: "Understanding power factor and its calculation (True Power ÷ Apparent Power)"
        },
        {
          id: "7.3",
          title: "Power Factor Correction",
          description: "Methods and importance of improving power factor in electrical systems"
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Unit 302: Principles of Electrical Science"
          description="Advanced electrical theory, including electrical fundamentals, electromagnetic principles, DC/AC theory, capacitance, inductance, and power calculations."
          customBackAction={handleBackClick}
        />
        
        {/* Unit Overview */}
        <LessonContent title="What You Learn in Unit 302">
          <p className="font-medium">
            This unit is heavy on theory — it builds on the basic electrical science you learned at Level 2 but goes much deeper.
          </p>
          
          <div className="mt-4 space-y-4">
            <h3 className="text-lg font-medium text-[#FFC900]">Summary of What Unit 302 Covers:</h3>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>The science behind electricity</li>
              <li>How electricity behaves in different types of circuits</li>
              <li>How electrical machines (like motors and transformers) work</li>
              <li>Mathematical calculations to solve real-world electrical problems</li>
            </ul>
            
            <h3 className="text-lg font-medium text-[#FFC900] mt-4">Typical Exam Questions Could Include:</h3>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
              <li>"State Ohm's Law and calculate the resistance when voltage = 240V and current = 2A."</li>
              <li>"Describe what happens when a conductor cuts through magnetic lines of force."</li>
              <li>"Explain the difference between true power and apparent power in an AC circuit."</li>
              <li>"Sketch a sine wave and label the peak voltage and time period."</li>
            </ul>
            
            <h3 className="text-lg font-medium text-[#FFC900] mt-4">Important Formulas You MUST Know:</h3>
            <div className="bg-[#1a1d17] p-4 rounded-md mt-2">
              <table className="w-full text-[#FFC900]/90">
                <thead>
                  <tr>
                    <th className="text-left pb-2 border-b border-[#FFC900]/30">Formula</th>
                    <th className="text-left pb-2 border-b border-[#FFC900]/30">Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 border-b border-[#FFC900]/10">V = IR</td>
                    <td className="py-2 border-b border-[#FFC900]/10">Ohm's Law</td>
                  </tr>
                  <tr>
                    <td className="py-2 border-b border-[#FFC900]/10">P = VI</td>
                    <td className="py-2 border-b border-[#FFC900]/10">Power</td>
                  </tr>
                  <tr>
                    <td className="py-2 border-b border-[#FFC900]/10">Energy = P × t</td>
                    <td className="py-2 border-b border-[#FFC900]/10">Energy consumption (in kWh)</td>
                  </tr>
                  <tr>
                    <td className="py-2 border-b border-[#FFC900]/10">Vrms = 0.707 × Vpeak</td>
                    <td className="py-2 border-b border-[#FFC900]/10">RMS Voltage</td>
                  </tr>
                  <tr>
                    <td className="py-2 border-b border-[#FFC900]/10">Apparent Power (VA) = Voltage × Current</td>
                    <td className="py-2 border-b border-[#FFC900]/10"></td>
                  </tr>
                  <tr>
                    <td className="py-2">Power Factor = True Power / Apparent Power</td>
                    <td className="py-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </LessonContent>
        
        <div className="mt-8 space-y-8">
          {/* Map through section groups */}
          {sectionGroups.map((group) => (
            <SectionGroup
              key={group.number}
              number={group.number}
              title={group.title}
              sections={group.sections}
              onStudy={handleStudy}
            />
          ))}
          
          {/* Unit Quiz Button */}
          <div className="mt-12">
            <Button 
              className="w-full py-6 bg-[#FFC900] hover:bg-[#e5b700] text-[#22251e] font-semibold text-lg"
              onClick={handleTakeQuiz}
            >
              <CheckCircle className="h-5 w-5 mr-2" />
              Take Unit 302 Assessment
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Level3Unit302Page;
