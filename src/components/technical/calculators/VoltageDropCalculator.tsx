import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select";

const VoltageDropCalculator = () => {
  const [result, setResult] = useState<string | null>(null);

  const calculateResult = () => {
    setResult("Calculation completed successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="cable-type" className="text-[#FFC900]">Cable Type</Label>
          <Select>
            <SelectTrigger className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
              <SelectValue placeholder="Select cable type" />
            </SelectTrigger>
            <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
              <SelectItem value="single-core" className="text-[#FFC900] focus:bg-[#FFC900]/10">Single Core</SelectItem>
              <SelectItem value="twin-earth" className="text-[#FFC900] focus:bg-[#FFC900]/10">Twin and Earth</SelectItem>
              <SelectItem value="armoured" className="text-[#FFC900] focus:bg-[#FFC900]/10">SWA (Armoured)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="conductor-material" className="text-[#FFC900]">Conductor Material</Label>
          <Select>
            <SelectTrigger className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
              <SelectValue placeholder="Select material" />
            </SelectTrigger>
            <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
              <SelectItem value="copper" className="text-[#FFC900] focus:bg-[#FFC900]/10">Copper</SelectItem>
              <SelectItem value="aluminium" className="text-[#FFC900] focus:bg-[#FFC900]/10">Aluminium</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="current" className="text-[#FFC900]">Current (A)</Label>
          <Input 
            id="current" 
            type="number" 
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
            placeholder="Enter current"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="length" className="text-[#FFC900]">Cable Length (m)</Label>
          <Input 
            id="length" 
            type="number" 
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
            placeholder="Enter length"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="csa" className="text-[#FFC900]">CSA (mm²)</Label>
          <Input 
            id="csa" 
            type="number" 
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
            placeholder="Enter CSA"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="voltage" className="text-[#FFC900]">System Voltage (V)</Label>
          <Input 
            id="voltage" 
            type="number" 
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
            placeholder="Enter voltage"
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

export default VoltageDropCalculator;
