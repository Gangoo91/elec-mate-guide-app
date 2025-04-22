
import React from 'react';
import UnitPage from './UnitPage';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';
import { CourseContent } from '@/types/study';

const Unit202Page = () => {
  // Unit content
  const unitNumber = "202";
  const title = "Electrical Scientific Principles";
  const description = "Understanding the fundamental scientific principles of electricity and electrical systems";
  
  const content = [
    "Basic electrical principles",
    "Circuit theory and calculations",
    "Magnetism and electromagnetism",
    "AC and DC theory",
    "Electrical materials and their properties"
  ];
  
  const learningOutcomes = [
    "Understand the basic principles of electrical science",
    "Be able to apply Ohm's Law and power calculations",
    "Understand the principles of magnetism and electromagnetism",
    "Know the difference between AC and DC systems and their applications",
    "Be able to select appropriate materials based on their electrical properties"
  ];

  // Detailed course content for the unit
  const courseContent: CourseContent = {
    key_points: [
      "Ohm's Law is the foundation of electrical calculations",
      "Understanding the relationship between voltage, current, and resistance is essential",
      "Series and parallel circuits behave differently and require different calculation methods",
      "Electromagnetism is the principle behind motors, generators, and transformers",
      "The selection of appropriate materials affects the efficiency and safety of electrical installations"
    ],
    main_content: [
      {
        type: "paragraph",
        content: "Electrical scientific principles form the foundation of all electrical work. Understanding these principles is essential for designing, installing, and maintaining electrical systems safely and efficiently."
      },
      {
        type: "heading",
        content: "Basic Electrical Principles"
      },
      {
        type: "paragraph",
        content: "Electricity is the flow of electric charge. The most basic principles in electricity are voltage (the potential difference that causes electrons to flow), current (the rate at which charge flows), and resistance (opposition to current flow)."
      },
      {
        type: "paragraph",
        content: "Ohm's Law states that the current flowing through a conductor is directly proportional to the voltage across it and inversely proportional to its resistance. This is expressed by the formula: I = V/R, where I is current in amperes, V is voltage in volts, and R is resistance in ohms."
      },
      {
        type: "list",
        content: "Key electrical formulas:",
        items: [
          "Ohm's Law: V = IR",
          "Power: P = VI",
          "Resistance in series: Rtotal = R1 + R2 + R3 + ...",
          "Resistance in parallel: 1/Rtotal = 1/R1 + 1/R2 + 1/R3 + ...",
          "Energy: E = Pt (Power × time)"
        ]
      },
      {
        type: "heading",
        content: "Circuit Theory"
      },
      {
        type: "paragraph",
        content: "Electrical circuits can be arranged in series, parallel, or a combination of both. In a series circuit, components are connected end-to-end, and the same current flows through each component. In a parallel circuit, components are connected across the same voltage source, and the current divides among the various paths."
      },
      {
        type: "paragraph",
        content: "Kirchhoff's laws are fundamental for analyzing circuits:"
      },
      {
        type: "list",
        content: "Kirchhoff's laws:",
        items: [
          "Kirchhoff's Current Law (KCL): The sum of currents entering a node equals the sum of currents leaving that node",
          "Kirchhoff's Voltage Law (KVL): The sum of all voltage drops around any closed loop in a circuit equals zero"
        ]
      },
      {
        type: "heading",
        content: "Magnetism and Electromagnetism"
      },
      {
        type: "paragraph",
        content: "Electromagnetism is the relationship between electricity and magnetism. When current flows through a conductor, a magnetic field is created around it. This principle is used in devices such as motors, generators, transformers, and relays."
      }
    ],
    practical_tips: [
      "Use Ohm's Law to troubleshoot circuit problems",
      "Always check polarity when working with DC circuits",
      "Remember that power factor affects calculations in AC circuits",
      "Use the right instruments for different types of measurements",
      "Consider temperature effects on resistance when designing circuits"
    ]
  };

  return (
    <UnitPage
      unitNumber={unitNumber}
      title={title}
      description={description}
      content={content}
      learningOutcomes={learningOutcomes}
    >
      <div className="space-y-6 text-[#FFC900]/80">
        {/* Key Points */}
        <section>
          <h3 className="text-xl font-medium text-[#FFC900] mb-3">Key Points</h3>
          <ul className="list-disc pl-5 space-y-1">
            {courseContent.key_points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </section>
        
        {/* Main Content */}
        <section className="space-y-4">
          {courseContent.main_content.map((block, index) => {
            if (block.type === "paragraph") {
              return <p key={index}>{block.content}</p>;
            } else if (block.type === "heading") {
              return <h4 key={index} className="text-lg font-medium text-[#FFC900] mt-4">{block.content}</h4>;
            } else if (block.type === "list" && block.items) {
              return (
                <div key={index}>
                  <p>{block.content}</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            }
            return null;
          })}
        </section>
        
        {/* Practical Tips */}
        <section className="bg-[#151812] p-4 rounded-md border border-[#FFC900]/20">
          <h3 className="text-xl font-medium text-[#FFC900] mb-3">Practical Tips</h3>
          <ul className="list-disc pl-5 space-y-1">
            {courseContent.practical_tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </section>
        
        {/* Downloads and Resources */}
        <section className="pt-4">
          <h3 className="text-xl font-medium text-[#FFC900] mb-3">Resources</h3>
          <div className="space-y-2">
            <Button variant="outline" className="w-full sm:w-auto flex items-center gap-2 border-[#FFC900]/40 text-[#FFC900] hover:bg-[#FFC900]/10">
              <FileText className="h-4 w-4" />
              <span>Electrical Formulas Cheat Sheet</span>
              <Download className="h-4 w-4 ml-auto" />
            </Button>
            <Button variant="outline" className="w-full sm:w-auto flex items-center gap-2 border-[#FFC900]/40 text-[#FFC900] hover:bg-[#FFC900]/10">
              <FileText className="h-4 w-4" />
              <span>Circuit Calculation Practice Problems</span>
              <Download className="h-4 w-4 ml-auto" />
            </Button>
          </div>
        </section>
      </div>
    </UnitPage>
  );
};

export default Unit202Page;
