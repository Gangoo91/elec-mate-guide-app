
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";

const ElectronicComponentsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/basic-electronics');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Electronic Components"
          description="Understanding active and passive electronic components and their applications"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-8">
          <LessonContent title="Active Components">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Components That Control Current Flow</h3>
              <p className="text-[#FFC900]/80">
                Active components require a power source to function and can amplify or process electrical signals.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>Diodes:</strong> Allow current flow in one direction only.
                  <ul className="list-disc pl-6 mt-2">
                    <li>Rectifier diodes, Zener diodes, LEDs, photodiodes, Schottky diodes</li>
                    <li>Applications: Rectification, voltage regulation, light emission/detection</li>
                  </ul>
                </li>
                <li><strong>Transistors:</strong> Used for switching and amplification.
                  <ul className="list-disc pl-6 mt-2">
                    <li>BJTs (NPN, PNP), FETs (JFET, MOSFET), IGBTs</li>
                    <li>Applications: Amplifiers, switches, digital logic</li>
                  </ul>
                </li>
                <li><strong>Integrated Circuits (ICs):</strong> Complex circuits containing multiple components on a single chip.
                  <ul className="list-disc pl-6 mt-2">
                    <li>Operational amplifiers (op-amps)</li>
                    <li>Voltage regulators</li>
                    <li>Timer ICs (555 timer)</li>
                    <li>Logic gates and microcontrollers</li>
                  </ul>
                </li>
                <li><strong>Thyristors and Triacs:</strong> Power control devices.
                  <ul className="list-disc pl-6 mt-2">
                    <li>SCRs (Silicon Controlled Rectifiers)</li>
                    <li>Triacs (bidirectional current control)</li>
                    <li>Applications: Power control, motor speed control, light dimmers</li>
                  </ul>
                </li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Passive Components">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Components That Don't Amplify or Generate Energy</h3>
              <p className="text-[#FFC900]/80">
                Passive components do not require power to function and cannot amplify signals.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>Resistors:</strong> Limit current flow.
                  <ul className="list-disc pl-6 mt-2">
                    <li>Fixed resistors: Carbon film, metal film, wirewound</li>
                    <li>Variable resistors: Potentiometers, rheostats, trimmers</li>
                    <li>Special types: Thermistors (temperature sensitive), LDRs (light sensitive), VDRs (voltage sensitive)</li>
                    <li>Specifications: Resistance value, power rating, tolerance, temperature coefficient</li>
                  </ul>
                </li>
                <li><strong>Capacitors:</strong> Store and release electrical energy.
                  <ul className="list-disc pl-6 mt-2">
                    <li>Electrolytic capacitors: High capacitance, polarized</li>
                    <li>Ceramic capacitors: Compact, non-polarized, good for high-frequency</li>
                    <li>Film capacitors: Polyester, polypropylene, stable and reliable</li>
                    <li>Specifications: Capacitance, voltage rating, leakage current, ESR</li>
                  </ul>
                </li>
                <li><strong>Inductors and Transformers:</strong> Store energy in magnetic fields.
                  <ul className="list-disc pl-6 mt-2">
                    <li>Air-core inductors: No magnetic core, low inductance, high frequency</li>
                    <li>Iron-core inductors: Higher inductance, used in power applications</li>
                    <li>Ferrite-core inductors: High frequency applications</li>
                    <li>Transformers: Power transformation, isolation, impedance matching</li>
                  </ul>
                </li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Sensors and Transducers">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Devices That Convert Physical Quantities into Electrical Signals</h3>
              <p className="text-[#FFC900]/80">
                Sensors and transducers detect physical changes and convert them into electrical signals.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>Temperature Sensors:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Thermistors: Resistance changes with temperature</li>
                    <li>Thermocouples: Generate voltage proportional to temperature difference</li>
                    <li>RTDs (Resistance Temperature Detectors): Precise temperature measurement</li>
                    <li>IC temperature sensors: Digital output, calibrated</li>
                  </ul>
                </li>
                <li><strong>Light Sensors:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Photoresistors (LDRs): Resistance decreases with light</li>
                    <li>Photodiodes: Convert light to current</li>
                    <li>Phototransistors: Light-activated transistors</li>
                    <li>Solar cells: Generate voltage from light</li>
                  </ul>
                </li>
                <li><strong>Pressure and Force Sensors:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Strain gauges: Resistance changes under mechanical deformation</li>
                    <li>Piezoelectric sensors: Generate voltage when deformed</li>
                    <li>Load cells: Force measurement using strain gauges</li>
                  </ul>
                </li>
                <li><strong>Position and Motion Sensors:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Potentiometric sensors: Position measurement using variable resistors</li>
                    <li>Encoders: Convert motion to digital signals</li>
                    <li>Accelerometers: Measure acceleration forces</li>
                    <li>Gyroscopes: Measure orientation and angular velocity</li>
                  </ul>
                </li>
              </ul>
            </div>
          </LessonContent>

          <LessonContent title="Display Devices">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#FFC900]">Components for Visual Output</h3>
              <p className="text-[#FFC900]/80">
                Display devices provide visual feedback in electronic systems.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li><strong>LED Indicators:</strong> Single LEDs for status indication</li>
                <li><strong>Seven-segment Displays:</strong> For numeric display (and limited alphanumeric)</li>
                <li><strong>LCD Displays:</strong> Liquid crystal displays for text and graphics</li>
                <li><strong>OLED Displays:</strong> Organic LED displays with higher contrast and response time</li>
                <li><strong>E-paper Displays:</strong> Low power, paper-like readability</li>
              </ul>
            </div>
          </LessonContent>
        </div>
      </div>
    </MainLayout>
  );
};

export default ElectronicComponentsPage;
