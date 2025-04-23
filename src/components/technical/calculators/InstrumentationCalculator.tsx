import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select";

const InstrumentationCalculator = () => {
  const [result, setResult] = useState<string | null>(null);

  const calculateResult = () => {
    setResult("Calculation completed successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="instrument-type" className="text-[#FFC900]">Instrument Type</Label>
          <Select>
            <SelectTrigger className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
              <SelectItem value="pressure" className="text-[#FFC900] focus:bg-[#FFC900]/10">Pressure Transmitter</SelectItem>
              <SelectItem value="temperature" className="text-[#FFC900] focus:bg-[#FFC900]/10">Temperature Sensor</SelectItem>
              <SelectItem value="flow" className="text-[#FFC900] focus:bg-[#FFC900]/10">Flow Meter</SelectItem>
              <SelectItem value="level" className="text-[#FFC900] focus:bg-[#FFC900]/10">Level Sensor</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="input-range" className="text-[#FFC900]">Input Range (mA)</Label>
          <Select>
            <SelectTrigger className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
              <SelectItem value="4-20" className="text-[#FFC900] focus:bg-[#FFC900]/10">4-20mA</SelectItem>
              <SelectItem value="0-20" className="text-[#FFC900] focus:bg-[#FFC900]/10">0-20mA</SelectItem>
              <SelectItem value="0-10" className="text-[#FFC900] focus:bg-[#FFC900]/10">0-10V</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="measured-value" className="text-[#FFC900]">Measured Value</Label>
          <Input 
            id="measured-value" 
            type="number" 
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
            placeholder="Enter value"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="scale-min" className="text-[#FFC900]">Scale Minimum</Label>
          <Input 
            id="scale-min" 
            type="number" 
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
            placeholder="Enter minimum"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="scale-max" className="text-[#FFC900]">Scale Maximum</Label>
          <Input 
            id="scale-max" 
            type="number" 
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
            placeholder="Enter maximum"
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

export default InstrumentationCalculator;
