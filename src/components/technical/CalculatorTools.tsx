
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const CalculatorTools = () => {
  const [calculationType, setCalculationType] = useState('voltage-drop');
  const [result, setResult] = useState<string | null>(null);
  
  // Example calculation function
  const calculateResult = (event: React.FormEvent) => {
    event.preventDefault();
    // This is a placeholder for actual calculation logic
    toast.success("Calculation completed");
    setResult("Result would be shown here based on the selected calculation type");
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="calc-type" className="text-[#FFC900]">Calculation Type</Label>
        <Select 
          value={calculationType} 
          onValueChange={setCalculationType}
        >
          <SelectTrigger id="calc-type" className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
            <SelectValue placeholder="Select calculation type" />
          </SelectTrigger>
          <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
            <SelectItem value="voltage-drop" className="text-[#FFC900] focus:bg-[#FFC900]/10">
              Voltage Drop
            </SelectItem>
            <SelectItem value="cable-size" className="text-[#FFC900] focus:bg-[#FFC900]/10">
              Cable Size
            </SelectItem>
            <SelectItem value="load" className="text-[#FFC900] focus:bg-[#FFC900]/10">
              Load Calculator
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <form onSubmit={calculateResult} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="value1" className="text-[#FFC900]">Current (A)</Label>
          <Input 
            id="value1" 
            type="number" 
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
            placeholder="Enter current"
          />
        </div>

        <Button 
          type="submit"
          className="w-full bg-[#FFC900] text-black hover:bg-[#FFF200]"
        >
          Calculate
        </Button>

        {result && (
          <div className="mt-4 p-3 bg-[#2C2F24] rounded">
            <p className="text-[#FFC900]/80">{result}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default CalculatorTools;
