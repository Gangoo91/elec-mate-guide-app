
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
              <p>An electrical circuit is a complete path through which electricity can flow. It must include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>A power source (battery, generator, etc.)</li>
                <li>Conductors (wires)</li>
                <li>A load (resistance)</li>
                <li>A control device (switch)</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Circuit Components">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Essential Components</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Resistors - Control current flow</li>
                <li>Capacitors - Store electrical charge</li>
                <li>Inductors - Store energy in magnetic fields</li>
                <li>Diodes - Allow current flow in one direction</li>
                <li>Transistors - Amplify or switch electronic signals</li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Circuit Laws">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Fundamental Laws</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ohm's Law - Relationship between voltage, current, and resistance</li>
                <li>Kirchhoff's Current Law - Sum of currents entering a node equals sum leaving</li>
                <li>Kirchhoff's Voltage Law - Sum of all voltages around any closed loop is zero</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default CircuitTheoryPage;
