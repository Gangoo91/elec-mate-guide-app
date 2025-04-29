import React from 'react';
import { Section302 } from './unit302/interfaces';
import LessonContent from "@/components/units/LessonContent";
import { ContentSection } from "@/components/units/ContentSection";

export const sections302: Record<string, Section302> = {
  "1.1": {
    title: "Ohm's Law and Power Formulas",
    description: "Understanding V = IR and power formulas: P = VI, P = I²R, P = V²/R",
    content: (
      <div className="space-y-4">
        <p className="text-[#FFC900]/90">
          Ohm's Law and power formulas are fundamental to understanding electrical circuits. They allow us to 
          calculate and predict how circuits will behave under different conditions.
        </p>
        
        <LessonContent title="Ohm's Law">
          <p className="mb-4">
            Ohm's Law states that the current flowing through a conductor is directly proportional to the voltage
            applied across it, and inversely proportional to the resistance.
          </p>
          
          <div className="bg-[#1a1d17] p-4 rounded-md font-mono text-center text-xl my-4">
            V = I × R
          </div>
          
          <p>Where:</p>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>V = Voltage in volts (V)</li>
            <li>I = Current in amperes (A)</li>
            <li>R = Resistance in ohms (Ω)</li>
          </ul>
          
          <div className="mt-4">
            <p className="font-medium">We can rearrange Ohm's Law to solve for any of the three values:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80 mt-2">
              <li>I = V ÷ R (Current equals voltage divided by resistance)</li>
              <li>R = V ÷ I (Resistance equals voltage divided by current)</li>
            </ul>
          </div>
        </LessonContent>
        
        <LessonContent title="Power Formulas">
          <p className="mb-4">
            Power in electrical circuits is the rate at which energy is transferred or consumed. It's measured 
            in watts (W) and can be calculated using several equivalent formulas.
          </p>
          
          <div className="space-y-4 mb-4">
            <div className="bg-[#1a1d17] p-4 rounded-md font-mono text-center text-xl">
              P = V × I
            </div>
            
            <div className="bg-[#1a1d17] p-4 rounded-md font-mono text-center text-xl">
              P = I² × R
            </div>
            
            <div className="bg-[#1a1d17] p-4 rounded-md font-mono text-center text-xl">
              P = V² ÷ R
            </div>
          </div>
          
          <p>Where:</p>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>P = Power in watts (W)</li>
            <li>V = Voltage in volts (V)</li>
            <li>I = Current in amperes (A)</li>
            <li>R = Resistance in ohms (Ω)</li>
          </ul>
          
          <div className="mt-4">
            <p className="font-medium">Each formula is useful in different scenarios:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80 mt-2">
              <li>P = V × I is useful when you know voltage and current</li>
              <li>P = I² × R is useful when you know current and resistance</li>
              <li>P = V² ÷ R is useful when you know voltage and resistance</li>
            </ul>
          </div>
        </LessonContent>
        
        <ContentSection
          title="Application Example"
          content={
            <>
              <p>
                For a circuit with a 240V supply and a 120Ω resistor:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80 mt-2">
                <li>Current: I = V ÷ R = 240V ÷ 120Ω = 2A</li>
                <li>Power: P = V × I = 240V × 2A = 480W</li>
                <li>Alternatively: P = V² ÷ R = 240² ÷ 120 = 57600 ÷ 120 = 480W</li>
              </ul>
            </>
          }
        />
      </div>
    ),
    detailedContent: (
      <div className="space-y-6">
        <h4 className="text-xl font-medium text-[#FFC900]">Practical Applications</h4>
        <p className="text-[#FFC900]/80">
          These formulas form the foundation for electrical design and fault finding:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Using Ohm's Law to determine wire size based on expected current</li>
          <li>Calculating power consumption of appliances to determine load requirements</li>
          <li>Determining heat generation in resistive elements</li>
          <li>Sizing power supplies for various applications</li>
          <li>Troubleshooting voltage drops in circuits</li>
        </ul>
        
        <h4 className="text-xl font-medium text-[#FFC900] mt-6">Limitations</h4>
        <p className="text-[#FFC900]/80">
          Ohm's Law has some limitations to be aware of:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>It only applies to resistive components with linear behavior</li>
          <li>It doesn't apply directly to capacitors or inductors without modification</li>
          <li>In AC circuits, impedance (Z) must be used instead of resistance (R)</li>
          <li>Temperature can affect resistance, changing the relationship</li>
        </ul>
        
        <h4 className="text-xl font-medium text-[#FFC900] mt-6">Advanced Calculations</h4>
        <p className="text-[#FFC900]/80">
          For more complex circuits:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Total power in a circuit is the sum of power consumed by each component</li>
          <li>For DC circuits with multiple paths, current divides according to the resistance of each path</li>
          <li>For circuits with multiple voltage sources, superposition theorem can be applied</li>
          <li>For three-phase systems, phase relationships must be considered</li>
        </ul>
      </div>
    )
  },
  "1.2": {
    title: "Energy Calculations",
    description: "Calculating energy consumption using Energy = Power × Time (kWh)",
    content: (
      <div className="space-y-4">
        <p className="text-[#FFC900]/90">
          Energy calculations are essential for determining electrical consumption, costs, 
          and system requirements. In electrical systems, energy is the power consumed over a period of time.
        </p>
        
        <LessonContent title="Basic Energy Formula">
          <p className="mb-4">
            Electrical energy is calculated using the formula:
          </p>
          
          <div className="bg-[#1a1d17] p-4 rounded-md font-mono text-center text-xl my-4">
            Energy = Power × Time
          </div>
          
          <p>Where:</p>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>Energy is measured in watt-hours (Wh) or kilowatt-hours (kWh)</li>
            <li>Power is measured in watts (W) or kilowatts (kW)</li>
            <li>Time is measured in hours (h)</li>
          </ul>
          
          <div className="mt-4">
            <p className="font-medium">Converting units:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80 mt-2">
              <li>1 kilowatt (kW) = 1000 watts (W)</li>
              <li>1 kilowatt-hour (kWh) = 1000 watt-hours (Wh)</li>
            </ul>
          </div>
        </LessonContent>
        
        <ContentSection
          title="Example Calculations"
          content={
            <>
              <p className="mb-4">For a 2000W electric heater running for 5 hours:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Energy = 2000W × 5h = 10,000Wh = 10kWh</li>
              </ul>
              
              <p className="mt-4 mb-2">For a 100W light bulb running for 24 hours:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
                <li>Energy = 100W × 24h = 2,400Wh = 2.4kWh</li>
              </ul>
            </>
          }
        />
        
        <LessonContent title="Cost Calculations">
          <p className="mb-4">
            To calculate the cost of electricity:
          </p>
          
          <div className="bg-[#1a1d17] p-4 rounded-md font-mono text-center text-xl my-4">
            Cost = Energy (kWh) × Rate (£/kWh)
          </div>
          
          <p className="mt-4 mb-2">Example: If electricity costs £0.15 per kWh, the cost of running the 2000W heater for 5 hours would be:</p>
          <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
            <li>Cost = 10kWh × £0.15/kWh = £1.50</li>
          </ul>
        </LessonContent>
      </div>
    ),
    detailedContent: (
      <div className="space-y-6">
        <h4 className="text-xl font-medium text-[#FFC900]">Energy Efficiency</h4>
        <p className="text-[#FFC900]/80">
          Understanding energy calculations helps with efficiency considerations:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>Comparing energy usage of different appliances or systems</li>
          <li>Calculating return on investment for energy-efficient upgrades</li>
          <li>Sizing renewable energy systems like solar panels</li>
          <li>Determining battery storage requirements</li>
        </ul>
        
        <h4 className="text-xl font-medium text-[#FFC900] mt-6">Advanced Energy Concepts</h4>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li><strong>Demand charges:</strong> Based on maximum power demand rather than total energy</li>
          <li><strong>Power factor correction:</strong> Improving efficiency by reducing reactive power</li>
          <li><strong>Load profiles:</strong> Understanding how energy usage varies over time</li>
          <li><strong>Energy monitoring:</strong> Real-time measurement to identify inefficiencies</li>
        </ul>
        
        <h4 className="text-xl font-medium text-[#FFC900] mt-6">Energy in Three-Phase Systems</h4>
        <p className="text-[#FFC900]/80">
          For balanced three-phase systems:
        </p>
        <div className="bg-[#1a1d17] p-4 rounded-md font-mono text-center text-xl my-4">
          P = √3 × VL × IL × cosφ
        </div>
        <p className="text-[#FFC900]/80">
          Where:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/80">
          <li>P = Power in watts (W)</li>
          <li>VL = Line voltage in volts (V)</li>
          <li>IL = Line current in amperes (A)</li>
          <li>cosφ = Power factor</li>
        </ul>
        <p className="text-[#FFC900]/80 mt-4">
          Energy would still be calculated by multiplying this power by time.
        </p>
      </div>
    )
  },
};

export default sections302;
