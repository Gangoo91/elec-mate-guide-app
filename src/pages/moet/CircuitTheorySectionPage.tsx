
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import LessonContent from "@/components/units/LessonContent";

const CircuitTheorySectionPage = () => {
  const { sectionId = "" } = useParams<{ sectionId: string }>();
  const navigate = useNavigate();
  
  // Define the sections data
  const sectionsData: Record<string, {
    title: string;
    description: string;
    content: React.ReactNode;
  }> = {
    "1.1": {
      title: "Electrical Circuit Fundamentals",
      description: "Understanding components of electrical circuits and their functions",
      content: (
        <div className="space-y-4">
          <p>An electrical circuit is a complete path through which electricity can flow. It consists of several essential components:</p>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>Power source (battery, generator, or power supply)</li>
            <li>Conductors (wires that carry the electrical current)</li>
            <li>Load (device that consumes electrical energy)</li>
            <li>Control device (switch to control current flow)</li>
          </ul>
        </div>
      )
    },
    "1.2": {
      title: "Types of Circuits",
      description: "Series, parallel, and series-parallel circuit configurations",
      content: (
        <div className="space-y-4">
          <h4 className="text-md font-semibold text-[#FFC900]">Types of Circuits</h4>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>Series Circuits - Components connected end-to-end in a single path
              <ul className="list-disc pl-6 mt-2">
                <li>Current is the same throughout the circuit</li>
                <li>Voltage is divided across components</li>
                <li>Total resistance is the sum of individual resistances</li>
              </ul>
            </li>
            <li>Parallel Circuits - Components connected across multiple paths
              <ul className="list-disc pl-6 mt-2">
                <li>Voltage is the same across all branches</li>
                <li>Current divides through different paths</li>
                <li>Total resistance decreases with more parallel paths</li>
              </ul>
            </li>
            <li>Series-Parallel Circuits - Combination of both series and parallel connections
              <ul className="list-disc pl-6 mt-2">
                <li>Requires step-by-step analysis</li>
                <li>Combines rules from series and parallel circuits</li>
                <li>Common in practical electronic devices</li>
              </ul>
            </li>
          </ul>
        </div>
      )
    },
    "2.1": {
      title: "Passive Components",
      description: "Resistors, capacitors, and inductors in electrical circuits",
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#FFC900]">Passive Components</h3>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
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
        </div>
      )
    },
    "2.2": {
      title: "Active Components",
      description: "Diodes, transistors, and their applications in circuits",
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#FFC900]">Active Components</h3>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
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
      )
    },
    "3.1": {
      title: "Ohm's Law",
      description: "Relationship between voltage, current, and resistance",
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#FFC900]">Ohm's Law</h3>
          <p>The relationship between voltage (V), current (I), and resistance (R):</p>
          <div className="bg-[#1a1d17] p-4 rounded-md font-mono text-center text-xl my-4">
            V = I × R
          </div>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>V = I × R</li>
            <li>I = V ÷ R</li>
            <li>R = V ÷ I</li>
          </ul>
        </div>
      )
    },
    "3.2": {
      title: "Kirchhoff's Laws",
      description: "Understanding current and voltage laws in complex circuits",
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#FFC900]">Kirchhoff's Laws</h3>
          <p><strong>Kirchhoff's Current Law (KCL):</strong></p>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>Sum of currents entering a node equals sum of currents leaving</li>
            <li>∑I(in) = ∑I(out)</li>
          </ul>

          <p className="mt-4"><strong>Kirchhoff's Voltage Law (KVL):</strong></p>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>Sum of all voltages around any closed loop is zero</li>
            <li>∑V = 0</li>
          </ul>
        </div>
      )
    },
    "3.3": {
      title: "Power in Circuits",
      description: "Calculating and measuring electrical power",
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#FFC900]">Power in Circuits</h3>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>Power (P) = Voltage (V) × Current (I)</li>
            <li>P = I² × R</li>
            <li>P = V² ÷ R</li>
          </ul>
        </div>
      )
    },
    "4.1": {
      title: "Series Circuits Analysis",
      description: "Methods for analyzing series circuit configurations",
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#FFC900]">Series Circuit Analysis</h3>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>Total resistance: Rtotal = R1 + R2 + R3 + ...</li>
            <li>Same current flows through all components</li>
            <li>Voltage divides across components</li>
          </ul>
        </div>
      )
    },
    "4.2": {
      title: "Parallel Circuits Analysis",
      description: "Techniques for analyzing parallel circuit configurations",
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#FFC900]">Parallel Circuit Analysis</h3>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>Total resistance: 1/Rtotal = 1/R1 + 1/R2 + 1/R3 + ...</li>
            <li>Same voltage across all branches</li>
            <li>Current divides between branches</li>
          </ul>
        </div>
      )
    },
    "4.3": {
      title: "Troubleshooting",
      description: "Identifying and resolving common circuit issues",
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#FFC900]">Troubleshooting</h3>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>Open circuits - Break in the current path</li>
            <li>Short circuits - Unintended low-resistance path</li>
            <li>High resistance connections</li>
            <li>Component failure analysis</li>
          </ul>
        </div>
      )
    }
  };
  
  // Get the section data based on the section ID
  const section = sectionsData[sectionId];
  
  // Get all section IDs for navigation
  const sectionKeys = Object.keys(sectionsData).sort();
  const currentSectionIndex = sectionKeys.indexOf(sectionId);
  const prevSection = currentSectionIndex > 0 ? sectionKeys[currentSectionIndex - 1] : null;
  const nextSection = currentSectionIndex < sectionKeys.length - 1 ? sectionKeys[currentSectionIndex + 1] : null;
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/circuit-theory');
  };
  
  const navigateToSection = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/circuit-theory/${sectionId}`);
  };

  if (!section) {
    return (
      <MainLayout>
        <div className="container px-4 py-8">
          <PageHeader 
            title="Section Not Found"
            description="Sorry, we couldn't find the content for this section"
            customBackAction={handleBackClick}
          />
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title={section.title}
          description={section.description || ""}
          customBackAction={handleBackClick}
        />
        <div className="mt-8">
          <div className="mb-12">
            <LessonContent title={section.title}>
              {section.content}
            </LessonContent>
          </div>
          
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <div>
                {prevSection && (
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
                    onClick={() => navigateToSection(prevSection)}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Previous Section
                  </Button>
                )}
              </div>
              <div>
                {nextSection && (
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
                    onClick={() => navigateToSection(nextSection)}
                  >
                    Next Section
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CircuitTheorySectionPage;
