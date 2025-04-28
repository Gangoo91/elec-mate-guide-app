
import React from 'react';
import { SectionData } from './interfaces';
import { EnhancedLearningSection } from "@/components/units/EnhancedLearningSection";
import { InteractiveDiagram } from "@/components/units/InteractiveDiagram";
import { FormativeAssessment } from "@/components/units/FormativeAssessment";

export const section1_1: SectionData = {
  title: "What Is Electricity?",
  description: "Understanding the fundamentals of electrical energy and charge",
  content: (
    <>
      <EnhancedLearningSection
        title="Understanding Electrical Fundamentals"
        description="Learn about the nature of electricity and electrical charges"
        illustration="/images/electricity-intro.png"
        content={
          <>
            <h3 className="text-xl font-semibold mb-4">The Nature of Electricity</h3>
            <p className="mb-4">
              Electricity is a form of energy resulting from the existence of charged particles (electrons and protons). 
              In electrical work, we're mainly concerned with the movement of electrons through conductors.
            </p>
            
            <div className="bg-[#353a2c] p-4 rounded-lg my-4">
              <h4 className="text-lg font-medium mb-2">Key Electrical Concepts</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Charge:</strong> Electrical charge is measured in coulombs (C) and can be positive or negative.
                </li>
                <li>
                  <strong>Current:</strong> The flow of electrical charge, measured in amperes (A).
                </li>
                <li>
                  <strong>Voltage:</strong> The electrical pressure that drives current, measured in volts (V).
                </li>
                <li>
                  <strong>Resistance:</strong> Opposition to current flow, measured in ohms (Ω).
                </li>
              </ul>
            </div>
            
            <p className="my-4">
              Think of electricity like water flowing through a pipe system:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="bg-[#353a2c] p-4 rounded-lg">
                <h5 className="font-medium mb-2">The Water Analogy</h5>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Voltage is like water pressure</li>
                  <li>Current is like water flow rate</li>
                  <li>Resistance is like pipe narrowing</li>
                  <li>Conductors are like pipes</li>
                </ul>
              </div>
              
              <div className="bg-[#353a2c] p-4 rounded-lg">
                <h5 className="font-medium mb-2">Electron Movement</h5>
                <p className="text-sm">
                  In metals, the outer electrons of atoms can move freely, creating a "sea of electrons." 
                  When voltage is applied, these electrons flow through the metal, creating an electric current.
                </p>
              </div>
            </div>
            
            <InteractiveDiagram
              imageSrc="/images/electrical-components/circuit-components.jpg"
              altText="Basic electrical circuit components"
              title="Basic Circuit Components"
              hotspots={[
                {
                  id: "1", 
                  x: 15, 
                  y: 50, 
                  label: "Power Source", 
                  description: "Provides the electrical energy (voltage) that drives the current through the circuit."
                },
                {
                  id: "2", 
                  x: 50, 
                  y: 30, 
                  label: "Conductor", 
                  description: "Wires that allow electrical current to flow with minimal resistance."
                },
                {
                  id: "3", 
                  x: 85, 
                  y: 50, 
                  label: "Load", 
                  description: "The component that uses electrical energy to perform work (like a light bulb)."
                },
                {
                  id: "4", 
                  x: 50, 
                  y: 70, 
                  label: "Control", 
                  description: "Components like switches that can interrupt or allow current flow."
                }
              ]}
            />
          </>
        }
        examples={
          <>
            <h4 className="text-lg font-medium mb-3">Real-World Applications</h4>
            
            <div className="space-y-4">
              <div className="bg-[#353a2c] p-4 rounded-lg">
                <h5 className="font-medium mb-2">Home Electrical Systems</h5>
                <p>
                  In your home, electricity originates from the power grid at 230V AC, enters through the consumer unit, 
                  and is distributed to various circuits. The current through each device depends on its resistance and 
                  the voltage applied.
                </p>
              </div>
              
              <div className="bg-[#353a2c] p-4 rounded-lg">
                <h5 className="font-medium mb-2">Battery-Powered Devices</h5>
                <p>
                  Portable devices use DC electricity from batteries. For example, a 1.5V battery powering an LED might 
                  provide 20mA of current through the LED's resistance (approximately 75Ω).
                </p>
              </div>
              
              <div className="bg-[#353a2c] p-4 rounded-lg">
                <h5 className="font-medium mb-2">Static Electricity</h5>
                <p>
                  When you experience a shock after walking on carpet, you're experiencing the discharge of static electricity. 
                  This happens when electrons build up on your body and then rapidly discharge.
                </p>
              </div>
            </div>
          </>
        }
        practice={
          <>
            <h4 className="text-lg font-medium mb-3">Test Your Understanding</h4>
            
            <FormativeAssessment
              questions={[
                {
                  question: "What is the unit of electrical current?",
                  options: ["Volt", "Ampere", "Ohm", "Watt"],
                  correctAnswer: "Ampere",
                  explanation: "Current is measured in amperes (A), which represents the rate of flow of electrical charge."
                },
                {
                  question: "Using the water analogy, what does voltage correspond to?",
                  options: ["Water volume", "Water flow rate", "Water pressure", "Pipe diameter"],
                  correctAnswer: "Water pressure",
                  explanation: "Voltage is like water pressure, providing the force that drives the flow of electricity through a circuit."
                },
                {
                  question: "What particles are primarily responsible for electric current in metals?",
                  options: ["Protons", "Neutrons", "Electrons", "Atoms"],
                  correctAnswer: "Electrons",
                  explanation: "Electric current in metals is caused by the movement of free electrons in the metal's structure."
                }
              ]}
            />
          </>
        }
      />
    </>
  ),
  detailedContent: (
    <>
      <h3 className="text-2xl font-bold mb-6">Comprehensive Guide to Electricity</h3>
      
      <section className="mb-8">
        <h4 className="text-xl font-semibold mb-4">Fundamental Concepts</h4>
        <p className="mb-4">
          Electricity is a fascinating phenomenon that forms the backbone of modern technology. At its core, 
          electricity is about the movement and interaction of charged particles, primarily electrons.
        </p>
        
        <div className="bg-[#22251e] p-6 rounded-lg mb-4">
          <h5 className="text-lg font-semibold mb-3">Key Components of Electricity</h5>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Electrons:</strong> Negatively charged particles that move through conductors</li>
            <li><strong>Protons:</strong> Positively charged particles found in the nucleus of atoms</li>
            <li><strong>Neutrons:</strong> Neutral particles that stabilize the atomic nucleus</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h4 className="text-xl font-semibold mb-4">How Electricity Flows</h4>
        <p className="mb-4">
          Electricity flows from areas of high potential (voltage) to areas of low potential, similar to how water 
          flows from a high point to a low point. This flow of electrons is what we call electric current.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#22251e] p-6 rounded-lg">
            <h5 className="text-lg font-semibold mb-3">Conductors</h5>
            <p>Materials that allow easy flow of electrons, such as metals like copper and aluminum.</p>
          </div>
          <div className="bg-[#22251e] p-6 rounded-lg">
            <h5 className="text-lg font-semibold mb-3">Insulators</h5>
            <p>Materials that resist the flow of electrons, like rubber, plastic, and glass.</p>
          </div>
        </div>
      </section>

      <section>
        <h4 className="text-xl font-semibold mb-4">Practical Implications</h4>
        <p>
          Understanding electricity is crucial for electricians. It allows you to:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Design safe and efficient electrical systems</li>
          <li>Troubleshoot complex electrical problems</li>
          <li>Select appropriate materials and components</li>
          <li>Ensure the safety of electrical installations</li>
        </ul>
      </section>
    </>
  )
};
