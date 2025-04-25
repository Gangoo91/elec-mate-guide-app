import React from 'react';
import { SectionData } from '../interfaces';

export const section1_2: SectionData = {
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
  ),
  detailedContent: (
    <>
      <h3 className="text-2xl font-bold mb-6">Master Ohm's Law</h3>
      
      <section className="mb-8">
        <h4 className="text-xl font-semibold mb-4">Complete Understanding of Ohm's Law</h4>
        <p className="mb-4">
          Ohm's Law is one of the most fundamental principles in electrical theory. It establishes the relationship 
          between voltage (V), current (I), and resistance (R) in an electrical circuit.
        </p>
        
        <div className="bg-[#22251e] p-6 rounded-lg mb-4">
          <h5 className="text-lg font-semibold mb-3">The Three Forms of Ohm's Law</h5>
          <ul className="list-disc pl-6 space-y-2">
            <li>V = I × R (To find voltage)</li>
            <li>I = V ÷ R (To find current)</li>
            <li>R = V ÷ I (To find resistance)</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h4 className="text-xl font-semibold mb-4">The Ohm's Law Triangle</h4>
        <p className="mb-4">
          Many electricians remember Ohm's Law using a triangle diagram. Cover the quantity you want to find, 
          and the remaining values show you how to calculate it.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#22251e] p-6 rounded-lg">
            <h5 className="text-lg font-semibold mb-3">Power and Ohm's Law</h5>
            <p>
              Ohm's Law can be extended to calculate power (P) in a circuit:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>P = V × I (Power = Voltage × Current)</li>
              <li>P = I² × R (Power = Current² × Resistance)</li>
              <li>P = V² ÷ R (Power = Voltage² × Resistance)</li>
            </ul>
          </div>
          <div className="bg-[#22251e] p-6 rounded-lg">
            <h5 className="text-lg font-semibold mb-3">Limitations of Ohm's Law</h5>
            <p>
              Ohm's Law has some limitations:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Only applies to purely resistive circuits</li>
              <li>Doesn't apply to non-linear components (diodes, etc.)</li>
              <li>Temperature changes can affect resistance values</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h4 className="text-xl font-semibold mb-4">Real-World Applications</h4>
        <p>
          Electricians use Ohm's Law daily to:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Calculate voltage drops in circuits</li>
          <li>Size conductors appropriately for current loads</li>
          <li>Troubleshoot circuit problems</li>
          <li>Verify protection device ratings</li>
        </ul>
      </section>
    </>
  )
};
