
import React, { useState } from 'react';
import { Calculator } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    <Card className="w-full max-w-4xl mx-auto bg-[#22251e] border-[#FFC900]/20">
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Header section with title and dropdown */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-2xl font-bold text-[#FFC900]">Calculator Tools</h2>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/10">
                  <Calculator className="mr-2 h-4 w-4" />
                  Select Calculator
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-[#22251e] border-[#FFC900]/20">
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

          {/* Calculator content section */}
          <div className="mt-8">
            <div className="mb-6 pb-4 border-b border-[#FFC900]/10">
              <h3 className="text-xl font-semibold text-[#FFC900]">
                {calculators[selectedCalculator].title}
              </h3>
            </div>
            <div className="animate-fade-in">
              {calculators[selectedCalculator].component}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalculatorTools;
