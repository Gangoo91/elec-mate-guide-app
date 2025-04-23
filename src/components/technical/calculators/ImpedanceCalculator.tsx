
import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ImpedanceCalculator = () => {
  const [result, setResult] = useState<string | null>(null);

  const calculateResult = () => {
    setResult("Calculation completed successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="ze" className="text-[#FFC900]">External Impedance (Ze)</Label>
          <Input 
            id="ze" 
            type="number" 
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
            placeholder="Enter Ze value"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="r1" className="text-[#FFC900]">Phase Conductor (R1)</Label>
          <Input 
            id="r1" 
            type="number" 
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
            placeholder="Enter R1 value"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="r2" className="text-[#FFC900]">Circuit Protective Conductor (R2)</Label>
          <Input 
            id="r2" 
            type="number" 
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
            placeholder="Enter R2 value"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="xL" className="text-[#FFC900]">Circuit Reactance (XL)</Label>
          <Input 
            id="xL" 
            type="number" 
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
            placeholder="Enter XL value"
          />
        </div>
      </div>
      
      <Button 
        onClick={calculateResult}
        className="w-full bg-[#FFC900] text-black hover:bg-[#FFF200]"
      >
        Calculate
      </Button>

      {result && (
        <div className="mt-4 p-4 rounded-lg bg-[#22251e] border border-[#FFC900]/20">
          <p className="text-[#FFC900]">{result}</p>
        </div>
      )}
    </div>
  );
};

export default ImpedanceCalculator;
