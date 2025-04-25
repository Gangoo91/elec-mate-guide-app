import React from 'react';

interface SectionData {
  title: string;
  description: string;
  content: React.ReactNode;
  detailedContent?: React.ReactNode;
}

export const sections202: Record<string, SectionData> = {
  "1.1": {
    title: "What Is Electricity?",
    description: "Understanding the fundamentals of electrical energy and charge",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-4">The Nature of Electricity</h3>
        <p className="mb-4">
          Electricity is a form of energy resulting from the existence of charged particles (electrons and protons). 
          In electrical work, we're mainly concerned with the movement of electrons through conductors.
        </p>
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
  },
  "1.2": {
    title: "Ohm's Law - The Basic Rule",
    description: "Understanding the relationship between voltage, current, and resistance",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-4">Ohm's Law in Detail</h3>
        <p className="mb-4">
          Ohm's Law states that the current flowing through a conductor is directly proportional to the voltage 
          and inversely proportional to the resistance.
        </p>
        
        <h4 className="text-lg font-semibold mb-3">The Formula</h4>
        <div className="bg-gray-800 p-4 rounded-lg mb-4">
          <p className="text-lg font-mono">V = I × R</p>
          <p>Where:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>V = Voltage (in Volts)</li>
            <li>I = Current (in Amperes)</li>
            <li>R = Resistance (in Ohms)</li>
          </ul>
        </div>

        <h4 className="text-lg font-semibold mb-3">Practical Examples</h4>
        <div className="space-y-3">
          <p>Example 1: Finding Current</p>
          <ul className="list-disc pl-6 mb-3">
            <li>If voltage = 230V and resistance = 23Ω</li>
            <li>Current = 230V ÷ 23Ω = 10A</li>
          </ul>

          <p>Example 2: Finding Resistance</p>
          <ul className="list-disc pl-6">
            <li>If voltage = 12V and current = 2A</li>
            <li>Resistance = 12V ÷ 2A = 6Ω</li>
          </ul>
        </div>
      </>
    )
  }
};

export default sections202;
