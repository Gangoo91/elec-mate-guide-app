
import React from 'react';

interface SectionData {
  title: string;
  description: string;
  content: React.ReactNode;
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
        
        <h4 className="text-lg font-semibold mb-3">Basic Electrical Concepts</h4>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Electric Charge: The basic unit of electricity, measured in Coulombs (C)</li>
          <li>Current: The flow of electric charge, measured in Amperes (A)</li>
          <li>Voltage: The electrical pressure driving current flow, measured in Volts (V)</li>
          <li>Resistance: Opposition to current flow, measured in Ohms (Ω)</li>
        </ul>

        <h4 className="text-lg font-semibold mb-3">How Electricity Works</h4>
        <p className="mb-4">
          Think of electricity like water flowing through a pipe:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Voltage is like the water pressure</li>
          <li>Current is like the rate of water flow</li>
          <li>Resistance is like the size of the pipe</li>
        </ul>

        <h4 className="text-lg font-semibold mb-3">Practical Applications</h4>
        <p className="mb-4">
          Understanding these basics helps you:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Troubleshoot electrical problems</li>
          <li>Choose the right materials and components</li>
          <li>Work safely with electrical systems</li>
          <li>Design effective electrical installations</li>
        </ul>
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
