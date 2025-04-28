
import React from 'react';
import { SectionData } from './interfaces';
import { EnhancedLearningSection } from "@/components/units/EnhancedLearningSection";
import { FormativeAssessment } from "@/components/units/FormativeAssessment";

export const section1_2: SectionData = {
  title: "Ohm's Law - The Basic Rule",
  description: "Understanding the relationship between voltage, current, and resistance",
  content: (
    <>
      <EnhancedLearningSection
        title="Ohm's Law Explained"
        description="Learn the fundamental relationship between voltage, current, and resistance"
        illustration="/images/ohms-law-triangle.png"
        content={
          <>
            <h3 className="text-xl font-semibold mb-4">The Foundation of Electrical Theory</h3>
            <p className="mb-4">
              Ohm's Law is one of the most fundamental principles in electrical theory, establishing the 
              relationship between voltage (V), current (I), and resistance (R).
            </p>
            
            <div className="bg-[#353a2c] p-4 rounded-lg my-4">
              <h4 className="text-lg font-medium mb-2">Ohm's Law Formula</h4>
              <div className="text-center p-3">
                <div className="text-2xl font-bold mb-2">V = I × R</div>
                <p className="text-sm">Where:</p>
                <ul className="inline-block text-left">
                  <li>V = Voltage in volts (V)</li>
                  <li>I = Current in amperes (A)</li>
                  <li>R = Resistance in ohms (Ω)</li>
                </ul>
              </div>
            </div>
            
            <p className="my-4">
              From the basic formula, we can derive two additional equations:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="bg-[#353a2c] p-4 rounded-lg text-center">
                <div className="text-xl font-bold mb-1">I = V ÷ R</div>
                <p className="text-sm">
                  To find current when you know voltage and resistance
                </p>
              </div>
              
              <div className="bg-[#353a2c] p-4 rounded-lg text-center">
                <div className="text-xl font-bold mb-1">R = V ÷ I</div>
                <p className="text-sm">
                  To find resistance when you know voltage and current
                </p>
              </div>
            </div>
            
            <h4 className="text-lg font-semibold mt-6 mb-2">The Ohm's Law Triangle</h4>
            <p className="mb-4">
              Many electricians remember Ohm's Law using a triangle diagram. Cover the quantity you want to 
              find, and the remaining values show you how to calculate it.
            </p>
            
            <div className="bg-[#353a2c] p-4 rounded-lg my-4">
              <h4 className="text-lg font-medium mb-2">How to Use the Triangle</h4>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Locate the quantity you want to find on the triangle</li>
                <li>Cover that quantity with your finger</li>
                <li>The remaining visible quantities show you how to calculate the covered quantity:
                  <ul className="list-disc pl-5 mt-1">
                    <li>Side-by-side means multiply</li>
                    <li>One above the other means divide (top ÷ bottom)</li>
                  </ul>
                </li>
              </ol>
            </div>
          </>
        }
        examples={
          <>
            <h4 className="text-lg font-medium mb-3">Practical Examples</h4>
            
            <div className="space-y-4">
              <div className="bg-[#353a2c] p-4 rounded-lg">
                <h5 className="font-medium mb-2">Example 1: Finding Current</h5>
                <div className="mb-2">
                  <strong>Problem:</strong> A light bulb connected to a 230V power supply has a resistance of 529Ω. What current flows through it?
                </div>
                <div className="mb-2">
                  <strong>Formula:</strong> I = V ÷ R
                </div>
                <div className="mb-2">
                  <strong>Calculation:</strong> I = 230V ÷ 529Ω = 0.435A
                </div>
                <div>
                  <strong>Answer:</strong> The current flowing through the light bulb is 0.435 amperes.
                </div>
              </div>
              
              <div className="bg-[#353a2c] p-4 rounded-lg">
                <h5 className="font-medium mb-2">Example 2: Finding Voltage</h5>
                <div className="mb-2">
                  <strong>Problem:</strong> A motor draws 5A of current and has a resistance of 24Ω. What voltage is applied to it?
                </div>
                <div className="mb-2">
                  <strong>Formula:</strong> V = I × R
                </div>
                <div className="mb-2">
                  <strong>Calculation:</strong> V = 5A × 24Ω = 120V
                </div>
                <div>
                  <strong>Answer:</strong> The voltage applied to the motor is 120 volts.
                </div>
              </div>
              
              <div className="bg-[#353a2c] p-4 rounded-lg">
                <h5 className="font-medium mb-2">Example 3: Finding Resistance</h5>
                <div className="mb-2">
                  <strong>Problem:</strong> An electrical heater connected to a 230V supply draws a current of 10A. What is its resistance?
                </div>
                <div className="mb-2">
                  <strong>Formula:</strong> R = V ÷ I
                </div>
                <div className="mb-2">
                  <strong>Calculation:</strong> R = 230V ÷ 10A = 23Ω
                </div>
                <div>
                  <strong>Answer:</strong> The resistance of the heater is 23 ohms.
                </div>
              </div>
            </div>
          </>
        }
        practice={
          <>
            <h4 className="text-lg font-medium mb-3">Apply Your Knowledge</h4>
            
            <FormativeAssessment
              questions={[
                {
                  question: "If a circuit has a voltage of 12V and a resistance of 4Ω, what is the current?",
                  options: ["3A", "4A", "8A", "16A"],
                  correctAnswer: "3A",
                  explanation: "Using Ohm's Law: I = V ÷ R = 12V ÷ 4Ω = 3A"
                },
                {
                  question: "An electric shower draws 25A from a 230V supply. What is its resistance?",
                  options: ["5.75Ω", "9.2Ω", "25Ω", "230Ω"],
                  correctAnswer: "9.2Ω",
                  explanation: "Using Ohm's Law: R = V ÷ I = 230V ÷ 25A = 9.2Ω"
                },
                {
                  question: "A device with a resistance of 50Ω draws a current of 0.1A. What voltage is applied to it?",
                  options: ["0.5V", "5V", "10V", "500V"],
                  correctAnswer: "5V",
                  explanation: "Using Ohm's Law: V = I × R = 0.1A × 50Ω = 5V"
                },
                {
                  question: "If the resistance in a circuit increases while the voltage remains constant, what happens to the current?",
                  options: ["Increases", "Decreases", "Stays the same", "Becomes zero"],
                  correctAnswer: "Decreases",
                  explanation: "According to Ohm's Law (I = V ÷ R), if R increases while V remains constant, then I must decrease."
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
