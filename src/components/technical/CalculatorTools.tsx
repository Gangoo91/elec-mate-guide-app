
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
    'ohms-law': { title: "Ohm's Law Calculator", component: <OhmsLawCalculator /> },
    'voltage-drop': { title: "Voltage Drop Calculator", component: <VoltageDropCalculator /> },
    'impedance': { title: "Earth Loop Impedance Calculator", component: <ImpedanceCalculator /> },
    'instrumentation': { title: "Instrumentation Calculator", component: <InstrumentationCalculator /> }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-[#FFC900]">Calculator Tools</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
              <Calculator className="mr-2 h-4 w-4" />
              Select Calculator
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-[#22251e] border-[#FFC900]/20">
            {Object.entries(calculators).map(([key, { title }]) => (
              <DropdownMenuItem
                key={key}
                onClick={() => setSelectedCalculator(key)}
                className="text-[#FFC900] focus:bg-[#FFC900]/10 cursor-pointer"
              >
                {title}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-[#FFC900] mb-4">
          {calculators[selectedCalculator].title}
        </h3>
        {calculators[selectedCalculator].component}
      </div>
    </div>
  );
};

export default CalculatorTools;
