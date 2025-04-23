
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
import PowerCalculator from './calculators/PowerCalculator';
import ResistanceInSeriesCalculator from './calculators/ResistanceInSeriesCalculator';
import ResistanceInParallelCalculator from './calculators/ResistanceInParallelCalculator';

const CalculatorTools = () => {
  const [selectedCalculator, setSelectedCalculator] = useState<string>('ohms-law');

  const calculators = {
    'ohms-law': { title: "Ohm's Law", component: <OhmsLawCalculator /> },
    'power': { title: "Power Equations", component: <PowerCalculator /> },
    'series-resistance': { title: "Series Resistance", component: <ResistanceInSeriesCalculator /> },
    'parallel-resistance': { title: "Parallel Resistance", component: <ResistanceInParallelCalculator /> }
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
