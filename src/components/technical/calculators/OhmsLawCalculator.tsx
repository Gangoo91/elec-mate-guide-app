
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select";
import { Calculator } from "lucide-react";

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
    
    if (solveFor === 'voltage' && !isNaN(i) && !isNaN(r)) {
      newResult.voltage = i * r;
    } else if (solveFor === 'current' && !isNaN(v) && !isNaN(r)) {
      newResult.current = v / r;
    } else if (solveFor === 'resistance' && !isNaN(v) && !isNaN(i)) {
      newResult.resistance = v / i;
    }
    
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
    setValues(prev => ({ ...prev, [value]: '' }));
  };

  return (
    <div className="bg-[#1A1F1C] rounded-lg border border-[#FFC900]/20 p-6">
      <div className="flex items-center gap-3 mb-4">
        <Calculator className="h-6 w-6 text-[#FFC900]" />
        <h2 className="text-xl font-semibold text-[#FFC900]">Ohm's Law Calculator</h2>
      </div>

      <div className="space-y-5">
        <div className="w-full">
          <label className="block text-[#FFC900] mb-2">I want to calculate:</label>
          <Select value={solveFor} onValueChange={handleSolveForChange}>
            <SelectTrigger className="w-full bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/5 rounded-md h-10">
              <SelectValue placeholder="Select value to calculate" />
            </SelectTrigger>
            <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
              <SelectItem value="voltage" className="text-[#FFC900] focus:bg-[#FFC900]/10">Voltage (V)</SelectItem>
              <SelectItem value="current" className="text-[#FFC900] focus:bg-[#FFC900]/10">Current (A)</SelectItem>
              <SelectItem value="resistance" className="text-[#FFC900] focus:bg-[#FFC900]/10">Resistance (Ω)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-4">
          {solveFor !== 'current' && (
            <div>
              <label className="block text-[#FFC900] mb-2 text-sm">Current (A)</label>
              <Input
                type="number"
                value={values.current}
                onChange={(e) => setValues({ ...values, current: e.target.value })}
                className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] h-10 rounded-md focus:ring-[#FFC900]/30 placeholder:text-[#FFC900]/30"
                placeholder="Enter current"
              />
            </div>
          )}
          
          {solveFor !== 'resistance' && (
            <div>
              <label className="block text-[#FFC900] mb-2 text-sm">Resistance (Ω)</label>
              <Input
                type="number"
                value={values.resistance}
                onChange={(e) => setValues({ ...values, resistance: e.target.value })}
                className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] h-10 rounded-md focus:ring-[#FFC900]/30 placeholder:text-[#FFC900]/30"
                placeholder="Enter resistance"
              />
            </div>
          )}
          
          {solveFor !== 'voltage' && (
            <div>
              <label className="block text-[#FFC900] mb-2 text-sm">Voltage (V)</label>
              <Input
                type="number"
                value={values.voltage}
                onChange={(e) => setValues({ ...values, voltage: e.target.value })}
                className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] h-10 rounded-md focus:ring-[#FFC900]/30 placeholder:text-[#FFC900]/30"
                placeholder="Enter voltage"
              />
            </div>
          )}

          <Button 
            onClick={handleCalculate}
            className="w-full bg-[#FFC900] text-black hover:bg-[#FFC900]/90 h-10 font-medium rounded-md mt-2"
          >
            Calculate
          </Button>
        </div>

        {result && Object.keys(result).length > 0 && (
          <div className="mt-4 pt-4 border-t border-[#FFC900]/10">
            <h3 className="text-[#FFC900] mb-2 font-medium">Results:</h3>
            <div className="space-y-1 text-sm">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default OhmsLawCalculator;
