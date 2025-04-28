
import React from 'react';
import { SectionData } from './interfaces';
import { EnhancedLearningSection } from "@/components/units/EnhancedLearningSection";
import { FormativeAssessment } from "@/components/units/FormativeAssessment";

const healthAndSafetyQuestions = [
  {
    question: "Which regulation specifically addresses electrical safety in the workplace?",
    options: ["Health and Safety at Work Act 1974", "Electricity at Work Regulations 1989", "The Workplace (Health, Safety and Welfare) Regulations 1992", "Construction (Design and Management) Regulations 2015"],
    correctAnswer: "Electricity at Work Regulations 1989",
    explanation: "The Electricity at Work Regulations 1989 specifically addresses electrical safety in the workplace, covering the safe use and maintenance of electrical equipment and systems."
  },
  {
    question: "What is the first step in the safe isolation procedure?",
    options: ["Apply lock-off devices", "Verify the system is dead", "Identify the circuit to be worked on", "Post warning signs"],
    correctAnswer: "Identify the circuit to be worked on",
    explanation: "The safe isolation procedure begins with correctly identifying the circuit or equipment to be worked on to ensure the right system is isolated."
  },
  {
    question: "Which of these is NOT typically considered PPE for electrical work?",
    options: ["Insulated gloves", "Safety helmet", "Voltage detector", "Eye protection"],
    correctAnswer: "Voltage detector",
    explanation: "A voltage detector is a test instrument, not Personal Protective Equipment (PPE). PPE includes items worn to protect the body, such as gloves, helmets, and eye protection."
  },
  {
    question: "What is the main purpose of the Health and Safety at Work Act 1974?",
    options: ["To regulate working hours", "To ensure workplace safety and health", "To set minimum wage standards", "To manage employee benefits"],
    correctAnswer: "To ensure workplace safety and health",
    explanation: "The Health and Safety at Work Act 1974 is the primary piece of legislation covering occupational health and safety in Great Britain, setting out the general duties employers have towards employees and members of the public."
  },
  {
    question: "When should you test your voltage indicator?",
    options: ["Only before use", "Only after use", "Before and after use", "Weekly during inspection"],
    correctAnswer: "Before and after use",
    explanation: "You should always test your voltage indicator both before and after use to ensure it was working correctly throughout the testing process. This is known as the 'prove, test, prove' method."
  },
  {
    question: "What should you do if you notice a potential safety hazard?",
    options: ["Ignore it if it seems minor", "Fix it yourself immediately", "Report it to your supervisor", "Wait to see if someone else notices"],
    correctAnswer: "Report it to your supervisor",
    explanation: "All potential safety hazards should be reported to your supervisor immediately, regardless of their perceived severity. This ensures proper assessment and handling of the situation."
  },
  {
    question: "Which document records the findings of a risk assessment?",
    options: ["Method Statement", "Work Permit", "Risk Assessment Form", "Job Sheet"],
    correctAnswer: "Risk Assessment Form",
    explanation: "A Risk Assessment Form is used to document identified hazards, who might be harmed, existing control measures, and any additional controls required."
  }
];

export const section1_1: SectionData = {
  title: "Introduction to Health and Safety",
  description: "Understanding the importance of health and safety in electrical installations",
  content: (
    <>
      <EnhancedLearningSection
        title="Health and Safety Fundamentals"
        description="Learn about the core principles of health and safety in electrical work"
        illustration="/images/safety-illustration.png"
        content={
          <>
            <h3 className="text-xl font-semibold mb-4">Why Health and Safety Matters</h3>
            <p className="mb-4">
              Health and safety is critical in electrical work due to the serious risks involved. 
              As an electrician, you need to understand these risks and how to mitigate them to protect 
              yourself, colleagues, and the public.
            </p>
            
            <div className="bg-[#353a2c] p-4 rounded-lg my-4">
              <h4 className="text-lg font-medium mb-2">Key Health and Safety Concepts</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Risk Assessment:</strong> Identifying hazards and implementing controls.
                </li>
                <li>
                  <strong>PPE (Personal Protective Equipment):</strong> Using appropriate protective gear.
                </li>
                <li>
                  <strong>Safe Isolation:</strong> Ensuring electrical systems are safely disconnected.
                </li>
                <li>
                  <strong>Regulations:</strong> Following key legislation like the Electricity at Work Regulations.
                </li>
              </ul>
            </div>
            
            <p className="my-4">
              Electrical safety is governed by various regulations and standards:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="bg-[#353a2c] p-4 rounded-lg">
                <h5 className="font-medium mb-2">Key Regulations</h5>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Health and Safety at Work Act 1974</li>
                  <li>Electricity at Work Regulations 1989</li>
                  <li>BS 7671 (Wiring Regulations)</li>
                  <li>The Management of Health and Safety at Work Regulations 1999</li>
                </ul>
              </div>
              
              <div className="bg-[#353a2c] p-4 rounded-lg">
                <h5 className="font-medium mb-2">Consequences of Non-Compliance</h5>
                <p className="text-sm">
                  Failing to follow health and safety procedures can lead to serious injuries, fatalities, 
                  legal prosecution, fines, and damage to reputation. Every year, numerous incidents occur 
                  due to improper safety practices.
                </p>
              </div>
            </div>
          </>
        }
        examples={
          <>
            <h4 className="text-lg font-medium mb-3">Real-World Examples</h4>
            
            <div className="space-y-4">
              <div className="bg-[#353a2c] p-4 rounded-lg">
                <h5 className="font-medium mb-2">Case Study: Improper Isolation</h5>
                <p>
                  An electrician working on a circuit breaker failed to properly isolate the system and 
                  verify it was dead before starting work. This resulted in an electric shock that caused 
                  severe burns and hospitalization. The investigation found that proper lock-off procedures 
                  were not followed.
                </p>
              </div>
              
              <div className="bg-[#353a2c] p-4 rounded-lg">
                <h5 className="font-medium mb-2">Safety Equipment in Action</h5>
                <p>
                  During a routine repair, an electrician's insulated tools prevented injury when they 
                  accidentally contacted a live part that had been incorrectly labeled. This demonstrates the 
                  importance of always using proper PPE and insulated tools, even when systems are thought to be isolated.
                </p>
              </div>
            </div>
          </>
        }
        practice={
          <>
            <h4 className="text-lg font-medium mb-3">Test Your Understanding</h4>
            
            <FormativeAssessment
              questions={healthAndSafetyQuestions}
              questionsToShow={3}
            />
          </>
        }
      />
    </>
  ),
  detailedContent: (
    <>
      <h3 className="text-2xl font-bold mb-6">Comprehensive Guide to Electrical Health and Safety</h3>
      
      <section className="mb-8">
        <h4 className="text-xl font-semibold mb-4">Legal Framework</h4>
        <p className="mb-4">
          Understanding the legal framework surrounding electrical work is essential for any electrician. 
          These regulations are designed to protect workers and the public from the dangers of electricity.
        </p>
        
        <div className="bg-[#22251e] p-6 rounded-lg mb-4">
          <h5 className="text-lg font-semibold mb-3">Key Legislation</h5>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Health and Safety at Work Act 1974:</strong> The overarching legislation that places duties on employers and employees</li>
            <li><strong>Electricity at Work Regulations 1989:</strong> Specific regulations covering electrical safety</li>
            <li><strong>BS 7671:</strong> The IET Wiring Regulations, currently in their 18th Edition</li>
            <li><strong>The Provision and Use of Work Equipment Regulations 1998 (PUWER):</strong> Covering the safe use of electrical equipment</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h4 className="text-xl font-semibold mb-4">Risk Assessment Process</h4>
        <p className="mb-4">
          Risk assessment is a systematic process of evaluating the potential risks that may be involved 
          in an activity or undertaking.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#22251e] p-6 rounded-lg">
            <h5 className="text-lg font-semibold mb-3">Five Steps to Risk Assessment</h5>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Identify the hazards</li>
              <li>Decide who might be harmed and how</li>
              <li>Evaluate the risks and decide on precautions</li>
              <li>Record your findings and implement them</li>
              <li>Review your assessment and update if necessary</li>
            </ol>
          </div>
          <div className="bg-[#22251e] p-6 rounded-lg">
            <h5 className="text-lg font-semibold mb-3">ERIC PD Hierarchy of Control</h5>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>E</strong>liminate the hazard</li>
              <li><strong>R</strong>educe the risk</li>
              <li><strong>I</strong>solate people from the hazard</li>
              <li><strong>C</strong>ontrol the risk</li>
              <li><strong>P</strong>ersonal protective equipment</li>
              <li><strong>D</strong>iscipline and training</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h4 className="text-xl font-semibold mb-4">Safe Isolation Procedure</h4>
        <p>
          Safe isolation is a critical procedure that ensures electrical systems are safely disconnected 
          before work begins:
        </p>
        <ol className="list-decimal pl-6 mt-2 space-y-2">
          <li>Identify the circuit or equipment to be worked on</li>
          <li>Identify means of isolation</li>
          <li>Isolate the supply</li>
          <li>Secure the isolation (lock-off)</li>
          <li>Verify the system is dead using a suitable voltage indicator</li>
          <li>Prove the voltage indicator is working before and after use</li>
          <li>Post warning signs</li>
        </ol>
      </section>
    </>
  )
};

