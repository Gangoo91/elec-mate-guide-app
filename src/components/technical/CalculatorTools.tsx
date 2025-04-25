import React, { useState } from 'react';
import { Calculator } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import OhmsLawCalculator from './calculators/OhmsLawCalculator';
import PowerCalculator from './calculators/PowerCalculator';
import ResistanceInParallelCalculator from './calculators/ResistanceInParallelCalculator';
import MotorCurrentCalculator from './calculators/MotorCurrentCalculator';
import VoltageDropCalculator from './calculators/VoltageDropCalculator';
import ImpedanceCalculator from './calculators/ImpedanceCalculator';
import InstrumentationCalculator from './calculators/InstrumentationCalculator';
import VoltageRegulationCalculator from './calculators/VoltageRegulationCalculator';
import FaultCurrentCalculator from './calculators/FaultCurrentCalculator';
import CableSizeCalculator from './calculators/CableSizeCalculator';
import TransformerCalculator from './calculators/TransformerCalculator';

const CalculatorTools = () => {
  const [selectedCalculator, setSelectedCalculator] = useState<string>('ohms-law');

  const calculators = {
    // Basic Electrical Calculators
    'ohms-law': { title: "Ohm's Law", component: <OhmsLawCalculator />, type: 'basic' },
    'power': { title: "Power Equations", component: <PowerCalculator />, type: 'basic' },
    'parallel-resistance': { title: "Parallel Resistance", component: <ResistanceInParallelCalculator />, type: 'basic' },
    'motor-current': { title: "Motor Current", component: <MotorCurrentCalculator />, type: 'basic' },
    
    // Advanced Electrical Calculators
    'voltage-drop': { title: "Cable Voltage Drop", component: <VoltageDropCalculator />, type: 'advanced' },
    'impedance': { title: "Circuit Impedance", component: <ImpedanceCalculator />, type: 'advanced' },
    'voltage-regulation': { title: "Voltage Regulation", component: <VoltageRegulationCalculator />, type: 'advanced' },
    'fault-current': { title: "Fault Current", component: <FaultCurrentCalculator />, type: 'advanced' },
    'cable-size': { title: "Cable Size", component: <CableSizeCalculator />, type: 'advanced' },
    'transformer': { title: "Transformer", component: <TransformerCalculator />, type: 'advanced' },
    
    // Instrumentation Calculators
    'instrumentation': { title: "Instrumentation Scaling", component: <InstrumentationCalculator />, type: 'instrumentation' },
  };

  return (
    <div className="w-full">
      <div className="flex justify-center mb-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/10">
              <Calculator className="mr-2 h-4 w-4" />
              {calculators[selectedCalculator].title}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#22251e] border-[#FFC900]/20">
            <ScrollArea className="h-[300px]">
              <div className="p-2">
                <div className="text-[#FFC900] text-sm font-semibold mb-2 px-2">Basic Calculations</div>
                {Object.entries(calculators)
                  .filter(([_, calc]) => calc.type === 'basic')
                  .map(([key, { title }]) => (
                    <DropdownMenuItem
                      key={key}
                      onClick={() => setSelectedCalculator(key)}
                      className="text-[#FFC900] focus:bg-[#FFC900]/10 cursor-pointer hover:bg-[#FFC900]/5"
                    >
                      {title}
                    </DropdownMenuItem>
                  ))}

                <DropdownMenuSeparator className="my-2 bg-[#FFC900]/20" />
                
                <div className="text-[#FFC900] text-sm font-semibold mb-2 px-2">Advanced Calculations</div>
                {Object.entries(calculators)
                  .filter(([_, calc]) => calc.type === 'advanced')
                  .map(([key, { title }]) => (
                    <DropdownMenuItem
                      key={key}
                      onClick={() => setSelectedCalculator(key)}
                      className="text-[#FFC900] focus:bg-[#FFC900]/10 cursor-pointer hover:bg-[#FFC900]/5"
                    >
                      {title}
                    </DropdownMenuItem>
                  ))}

                <DropdownMenuSeparator className="my-2 bg-[#FFC900]/20" />
                
                <div className="text-[#FFC900] text-sm font-semibold mb-2 px-2">Instrumentation</div>
                {Object.entries(calculators)
                  .filter(([_, calc]) => calc.type === 'instrumentation')
                  .map(([key, { title }]) => (
                    <DropdownMenuItem
                      key={key}
                      onClick={() => setSelectedCalculator(key)}
                      className="text-[#FFC900] focus:bg-[#FFC900]/10 cursor-pointer hover:bg-[#FFC900]/5"
                    >
                      {title}
                    </DropdownMenuItem>
                  ))}
              </div>
            </ScrollArea>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="animate-fade-in">
        {calculators[selectedCalculator].component}
      </div>
    </div>
  );
};

export default CalculatorTools;
