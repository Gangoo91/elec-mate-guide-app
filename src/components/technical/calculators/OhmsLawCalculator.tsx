
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select";

interface CalculationResult {
  voltage?: number;
  current?: number;
  resistance?: number;
  power?: number;
}

const OhmsLawCalculator = () => {
  const [values, setValues] = useState({
    voltage: '',
    current: '',
    resistance: ''
  });
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [solveFor, setSolveFor] = useState<'voltage' | 'current' | 'resistance'>('voltage');

  const handleCalculate = () => {
    const v = parseFloat(values.voltage);
    const i = parseFloat(values.current);
    const r = parseFloat(values.resistance);
    
    const newResult: CalculationResult = {};
    
    // Calculate missing value based on provided inputs and what user wants to solve for
    if (solveFor === 'voltage' && !isNaN(i) && !isNaN(r)) {
      newResult.voltage = i * r;
    } else if (solveFor === 'current' && !isNaN(v) && !isNaN(r)) {
      newResult.current = v / r;
    } else if (solveFor === 'resistance' && !isNaN(v) && !isNaN(i)) {
      newResult.resistance = v / i;
    }
    
    // Calculate power if possible
    if ((solveFor === 'voltage' && !isNaN(newResult.voltage) && !isNaN(i)) || 
        (solveFor === 'current' && !isNaN(newResult.current) && !isNaN(v)) ||
        (!isNaN(v) && !isNaN(i))) {
      const voltage = solveFor === 'voltage' ? newResult.voltage! : v;
      const current = solveFor === 'current' ? newResult.current! : i;
      newResult.power = voltage * current;
    }
    
    setResult(newResult);
  };

  const handleSolveForChange = (value: 'voltage' | 'current' | 'resistance') => {
    setSolveFor(value);
    // Clear the related field when changing what to solve for
    setValues(prev => ({ ...prev, [value]: '' }));
  };

  return (
    <div className="space-y-6">
      <div className="text-2xl font-bold text-[#FFC900] mb-4">Ohm's Law Solver</div>
      
      <div className="mb-4">
        <Label className="text-[#FFC900] mb-2 block">Solve for</Label>
        <Select value={solveFor} onValueChange={handleSolveForChange}>
          <SelectTrigger className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
            <SelectValue placeholder="Select what to solve for" />
          </SelectTrigger>
          <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
            <SelectItem value="voltage" className="text-[#FFC900] focus:bg-[#FFC900]/10">Voltage (V)</SelectItem>
            <SelectItem value="current" className="text-[#FFC900] focus:bg-[#FFC900]/10">Current (A)</SelectItem>
            <SelectItem value="resistance" className="text-[#FFC900] focus:bg-[#FFC900]/10">Resistance (Ω)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-4">
        {solveFor !== 'current' && (
          <div>
            <Label className="text-[#FFC900]">Current (A)</Label>
            <Input
              type="number"
              value={values.current}
              onChange={(e) => setValues({ ...values, current: e.target.value })}
              className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]"
              placeholder="Enter current"
            />
          </div>
        )}
        
        {solveFor !== 'resistance' && (
          <div>
            <Label className="text-[#FFC900]">Resistance (Ω)</Label>
            <Input
              type="number"
              value={values.resistance}
              onChange={(e) => setValues({ ...values, resistance: e.target.value })}
              className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]"
              placeholder="Enter resistance"
            />
          </div>
        )}
        
        {solveFor !== 'voltage' && (
          <div>
            <Label className="text-[#FFC900]">Voltage (V)</Label>
            <Input
              type="number"
              value={values.voltage}
              onChange={(e) => setValues({ ...values, voltage: e.target.value })}
              className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]"
              placeholder="Enter voltage"
            />
          </div>
        )}

        <Button 
          onClick={handleCalculate}
          className="w-full bg-[#FFC900] text-black hover:bg-[#FFF200]"
        >
          Calculate
        </Button>

        {result && Object.keys(result).length > 0 && (
          <div className="mt-4 p-4 rounded-lg bg-[#22251e] border border-[#FFC900]/20">
            {result.voltage && (
              <div className="text-[#FFC900]">Voltage = {result.voltage.toFixed(2)} V</div>
            )}
            {result.current && (
              <div className="text-[#FFC900]">Current = {result.current.toFixed(2)} A</div>
            )}
            {result.resistance && (
              <div className="text-[#FFC900]">Resistance = {result.resistance.toFixed(2)} Ω</div>
            )}
            {result.power && (
              <div className="text-[#FFC900]">Power = {result.power.toFixed(2)} W</div>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="p-4 rounded-lg bg-[#22251e] border border-[#FFC900]/20">
            <div className="text-[#FFC900] text-sm">Ohm's Law</div>
            <div className="text-[#FFC900]/80">V = I × R</div>
          </div>
          <div className="p-4 rounded-lg bg-[#22251e] border border-[#FFC900]/20">
            <div className="text-[#FFC900] text-sm">Power</div>
            <div className="text-[#FFC900]/80">P = V × I</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OhmsLawCalculator;
