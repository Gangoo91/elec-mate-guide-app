
import React, { useState } from 'react';
import { Calculator } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import OhmsLawCalculator from './calculators/OhmsLawCalculator';
import VoltageDropCalculator from './calculators/VoltageDropCalculator';
import ImpedanceCalculator from './calculators/ImpedanceCalculator';
import InstrumentationCalculator from './calculators/InstrumentationCalculator';

const CalculatorTools = () => {
  const [selectedCalculator, setSelectedCalculator] = useState<string>('ohms-law');

  const calculators = {
    'ohms-law': { title: "Ohm's Law", component: <OhmsLawCalculator /> },
    'voltage-drop': { title: "Voltage Drop", component: <VoltageDropCalculator /> },
    'impedance': { title: "Loop Impedance", component: <ImpedanceCalculator /> },
    'instrumentation': { title: "Instrumentation", component: <InstrumentationCalculator /> }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-[#FFC900]">Calculator Tools</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/10">
              <Calculator className="mr-2 h-4 w-4" />
              {calculators[selectedCalculator].title}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#22251e] border-[#FFC900]/20">
            {Object.entries(calculators).map(([key, { title }]) => (
              <DropdownMenuItem
                key={key}
                onClick={() => setSelectedCalculator(key)}
                className="text-[#FFC900] focus:bg-[#FFC900]/10 cursor-pointer hover:bg-[#FFC900]/5"
              >
                {title}
              </DropdownMenuItem>
            ))}
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
