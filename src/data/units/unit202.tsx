
import React from 'react';
import { UnitContent } from './interfaces';

export const unit202: UnitContent = {
  title: "Principles of Electrical Science",
  description: "Get to know the basics of electricity - how it works, what voltage and current mean, and how to measure them. Think of it as learning the ABC's of electrical work!",
  sections: [
    {
      title: "What Is Electricity?",
      content: (
        <>
          <p>Electricity is the flow of tiny particles called electrons. Think of it like water flowing through a pipe.</p>
          <p className="mt-2">The key things you'll learn about are:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Voltage: The pressure pushing the electrons (measured in volts, V)</li>
            <li>Current: How many electrons are flowing (measured in amps, A)</li>
            <li>Resistance: What slows down the flow (measured in ohms, Ω)</li>
          </ul>
        </>
      )
    },
    {
      title: "Ohm's Law - The Basic Rule",
      content: (
        <>
          <p>Ohm's Law is a simple but important rule: Voltage = Current × Resistance</p>
          <p className="mt-2">Or written as: V = I × R</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>If you know any two values, you can find the third</li>
            <li>This helps you work out what's happening in a circuit</li>
            <li>It's used every day by electricians to solve problems</li>
          </ul>
          <p className="mt-2">Example: If the voltage is 230V and the resistance is 23Ω, the current is 10A</p>
        </>
      )
    },
    {
      title: "AC and DC Electricity",
      content: (
        <>
          <p>There are two main types of electricity:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Direct Current (DC): Electricity that flows in one direction only (like in batteries)</li>
            <li>Alternating Current (AC): Electricity that changes direction many times per second (what comes from wall sockets)</li>
          </ul>
          <p className="mt-2">In the UK, mains electricity is AC at 230V and changes direction 50 times per second (50Hz).</p>
        </>
      )
    },
    {
      title: "Measuring Electricity",
      content: (
        <>
          <p>As an electrician, you'll use different tools to measure electricity:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Voltmeter: Measures voltage</li>
            <li>Ammeter: Measures current</li>
            <li>Ohmmeter: Measures resistance</li>
            <li>Multimeter: Can measure all three</li>
          </ul>
          <p className="mt-2">Learning to use these tools correctly is an important part of this unit.</p>
        </>
      )
    }
  ]
};
