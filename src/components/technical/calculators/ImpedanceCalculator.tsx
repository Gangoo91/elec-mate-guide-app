
import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ImpedanceCalculator = () => {
  const { toast } = useToast();
  const [ze, setZe] = useState<string>('');
  const [r1, setR1] = useState<string>('');
  const [r2, setR2] = useState<string>('');
  const [xL, setXL] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);

  const calculateResult = () => {
    // Validate inputs
    if (!ze && !r1 && !r2 && !xL) {
      toast({
        title: "Missing Information",
        description: "Please fill in at least one field to perform the calculation.",
        variant: "destructive"
      });
      return;
    }

    try {
      // Parse values (default to 0 if empty)
      const zeVal = ze ? parseFloat(ze) : 0;
      const r1Val = r1 ? parseFloat(r1) : 0;
      const r2Val = r2 ? parseFloat(r2) : 0;
      const xLVal = xL ? parseFloat(xL) : 0;

      if (isNaN(zeVal) || isNaN(r1Val) || isNaN(r2Val) || isNaN(xLVal)) {
        toast({
          title: "Invalid Input",
          description: "Please enter valid numbers for all fields.",
          variant: "destructive"
        });
        return;
      }

      // Calculate total impedance: Z = sqrt((R1 + R2)^2 + XL^2) + Ze
      const totalResistance = r1Val + r2Val;
      const totalImpedance = Math.sqrt(Math.pow(totalResistance, 2) + Math.pow(xLVal, 2)) + zeVal;
      
      setResult(`Total Circuit Impedance (Z): ${totalImpedance.toFixed(2)} Ω`);
      
      // Show success toast
      toast({
        title: "Calculation Complete",
        description: "Circuit impedance calculated successfully!",
      });
    } catch (error) {
      toast({
        title: "Calculation Error",
        description: "An error occurred during calculation.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="space-y-1">
          <Label htmlFor="ze" className="text-[#FFC900]">External Impedance (Ze)</Label>
          <Input 
            id="ze" 
            type="number" 
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
            placeholder="Enter Ze value"
            value={ze}
            onChange={(e) => setZe(e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="r1" className="text-[#FFC900]">Phase Conductor (R1)</Label>
          <Input 
            id="r1" 
            type="number" 
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
            placeholder="Enter R1 value"
            value={r1}
            onChange={(e) => setR1(e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="r2" className="text-[#FFC900]">Circuit Protective Conductor (R2)</Label>
          <Input 
            id="r2" 
            type="number" 
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
            placeholder="Enter R2 value"
            value={r2}
            onChange={(e) => setR2(e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="xL" className="text-[#FFC900]">Circuit Reactance (XL)</Label>
          <Input 
            id="xL" 
            type="number" 
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
            placeholder="Enter XL value"
            value={xL}
            onChange={(e) => setXL(e.target.value)}
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
        <div className="mt-2 p-3 rounded-lg bg-[#22251e] border border-[#FFC900]/20">
          <p className="text-[#FFC900]">{result}</p>
        </div>
      )}
    </div>
  );
};

export default ImpedanceCalculator;
