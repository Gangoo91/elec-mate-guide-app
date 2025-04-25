
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const CircuitTheoryPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Circuit Theory"
          description="Understanding electrical circuits, components, and their interactions"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Basic Circuit Concepts">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Electrical Circuit Fundamentals</h3>
              <p>An electrical circuit is a complete path through which electricity can flow. It consists of several essential components:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Power source (battery, generator, or power supply)</li>
                <li>Conductors (wires that carry the electrical current)</li>
                <li>Load (device that consumes electrical energy)</li>
                <li>Control device (switch to control current flow)</li>
              </ul>
              
              <h4 className="text-md font-semibold text-[#FFC900] mt-6">Types of Circuits</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Series Circuits - Components connected end-to-end in a single path</li>
                <li>Parallel Circuits - Components connected across multiple paths</li>
                <li>Series-Parallel Circuits - Combination of both series and parallel connections</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Circuit Components and Their Functions">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Essential Components</h3>
              <h4 className="text-md font-semibold text-[#FFC900]/80">Passive Components</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Resistors:</strong> Control current flow and voltage drop
                  <ul className="list-disc pl-6 mt-2">
                    <li>Fixed resistors</li>
                    <li>Variable resistors (potentiometers)</li>
                    <li>Temperature-dependent resistors</li>
                  </ul>
                </li>
                <li><strong>Capacitors:</strong> Store electrical charge
                  <ul className="list-disc pl-6 mt-2">
                    <li>Electrolytic capacitors</li>
                    <li>Ceramic capacitors</li>
                    <li>Film capacitors</li>
                  </ul>
                </li>
                <li><strong>Inductors:</strong> Store energy in magnetic fields
                  <ul className="list-disc pl-6 mt-2">
                    <li>Air core inductors</li>
                    <li>Iron core inductors</li>
                    <li>Ferrite core inductors</li>
                  </ul>
                </li>
              </ul>

              <h4 className="text-md font-semibold text-[#FFC900]/80 mt-6">Active Components</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Diodes:</strong> Allow current flow in one direction
                  <ul className="list-disc pl-6 mt-2">
                    <li>Rectifier diodes</li>
                    <li>Zener diodes</li>
                    <li>Light-emitting diodes (LEDs)</li>
                  </ul>
                </li>
                <li><strong>Transistors:</strong> Amplify or switch electronic signals
                  <ul className="list-disc pl-6 mt-2">
                    <li>Bipolar Junction Transistors (BJT)</li>
                    <li>Field-Effect Transistors (FET)</li>
                    <li>Metal-Oxide-Semiconductor FET (MOSFET)</li>
                  </ul>
                </li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Circuit Laws and Analysis">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Fundamental Laws</h3>
              
              <h4 className="text-md font-semibold text-[#FFC900]/80">Ohm's Law</h4>
              <p>The relationship between voltage (V), current (I), and resistance (R):</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>V = I × R</li>
                <li>I = V ÷ R</li>
                <li>R = V ÷ I</li>
              </ul>

              <h4 className="text-md font-semibold text-[#FFC900]/80 mt-6">Kirchhoff's Laws</h4>
              <p><strong>Kirchhoff's Current Law (KCL):</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sum of currents entering a node equals sum of currents leaving</li>
                <li>∑I(in) = ∑I(out)</li>
              </ul>

              <p className="mt-4"><strong>Kirchhoff's Voltage Law (KVL):</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sum of all voltages around any closed loop is zero</li>
                <li>∑V = 0</li>
              </ul>

              <h4 className="text-md font-semibold text-[#FFC900]/80 mt-6">Power in Circuits</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Power (P) = Voltage (V) × Current (I)</li>
                <li>P = I² × R</li>
                <li>P = V² ÷ R</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Circuit Analysis Techniques">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Analysis Methods</h3>
              
              <h4 className="text-md font-semibold text-[#FFC900]/80">Series Circuits</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Total resistance: Rtotal = R1 + R2 + R3 + ...</li>
                <li>Same current flows through all components</li>
                <li>Voltage divides across components</li>
              </ul>

              <h4 className="text-md font-semibold text-[#FFC900]/80 mt-6">Parallel Circuits</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Total resistance: 1/Rtotal = 1/R1 + 1/R2 + 1/R3 + ...</li>
                <li>Same voltage across all branches</li>
                <li>Current divides between branches</li>
              </ul>

              <h4 className="text-md font-semibold text-[#FFC900]/80 mt-6">Troubleshooting</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Open circuits - Break in the current path</li>
                <li>Short circuits - Unintended low-resistance path</li>
                <li>High resistance connections</li>
                <li>Component failure analysis</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default CircuitTheoryPage;
