
// This file exists to provide compatibility with the SafetyQuiz component
// It reuses the interface from the electricalInstallationsQuestions file

import { ElectricalInstallationQuestion } from "./electricalInstallationsQuestions";

export const healthAndSafetyQuestions: ElectricalInstallationQuestion[] = [
  {
    id: 1,
    text: "What is the main purpose of the Health and Safety at Work Act?",
    options: [
      "To ensure all employers provide free safety equipment",
      "To secure the health, safety and welfare of people at work",
      "To reduce working hours in hazardous environments",
      "To provide compensation for work-related injuries"
    ],
    correctAnswer: "To secure the health, safety and welfare of people at work",
    explanation: "The Health and Safety at Work Act aims to ensure workplace safety by placing responsibilities on both employers and employees to maintain safe working environments."
  },
  {
    id: 2,
    text: "What is the correct procedure for safely isolating an electrical circuit?",
    options: [
      "Switch off the circuit breaker and begin work immediately",
      "Inform others and switch off the main power supply",
      "Isolate, lock off, prove dead, and place warning signs",
      "Test for voltage with a screwdriver before proceeding"
    ],
    correctAnswer: "Isolate, lock off, prove dead, and place warning signs",
    explanation: "Safe isolation requires: identifying the circuit, switching it off, locking it off, proving it's dead with an approved voltage tester, and placing warning signs to prevent accidental re-energization."
  },
  {
    id: 3,
    text: "What PPE item is most important when working on live electrical equipment in an emergency?",
    options: [
      "Safety boots",
      "High-visibility vest",
      "Insulated gloves",
      "Hard hat"
    ],
    correctAnswer: "Insulated gloves",
    explanation: "Insulated gloves provide protection against electric shock when handling live electrical components, which is essential in emergency situations where live working cannot be avoided."
  }
];
