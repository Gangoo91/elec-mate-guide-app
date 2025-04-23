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
    <div className="w-full max-w-lg mx-auto p-6">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="h-8 w-8 text-[#FFC900]" />
        <h2 className="text-2xl font-semibold text-[#FFC900]">Ohm's Law</h2>
      </div>

      <div className="space-y-6 bg-[#1A1F1C] rounded-xl p-6 border border-[#FFC900]/10">
        <Select value={solveFor} onValueChange={handleSolveForChange}>
          <SelectTrigger className="w-full bg-[#1A1F1C] border border-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/5 rounded-lg h-12">
            <SelectValue placeholder="Voltage (V)" />
          </SelectTrigger>
          <SelectContent className="bg-[#1A1F1C] border-[#FFC900]/20">
            <SelectItem value="voltage" className="text-[#FFC900] focus:bg-[#FFC900]/10">Voltage (V)</SelectItem>
            <SelectItem value="current" className="text-[#FFC900] focus:bg-[#FFC900]/10">Current (A)</SelectItem>
            <SelectItem value="resistance" className="text-[#FFC900] focus:bg-[#FFC900]/10">Resistance (Ω)</SelectItem>
          </SelectContent>
        </Select>

        <div className="space-y-5">
          {solveFor !== 'current' && (
            <div>
              <div className="text-[#FFC900] mb-2 text-lg">Current (A)</div>
              <Input
                type="number"
                value={values.current}
                onChange={(e) => setValues({ ...values, current: e.target.value })}
                className="bg-[#1A1F1C] border-[#FFC900]/20 text-[#FFC900] h-12 text-lg rounded-lg focus:ring-[#FFC900]/30 placeholder:text-[#FFC900]/30"
                placeholder="Enter current"
              />
            </div>
          )}
          
          {solveFor !== 'resistance' && (
            <div>
              <div className="text-[#FFC900] mb-2 text-lg">Resistance (Ω)</div>
              <Input
                type="number"
                value={values.resistance}
                onChange={(e) => setValues({ ...values, resistance: e.target.value })}
                className="bg-[#1A1F1C] border-[#FFC900]/20 text-[#FFC900] h-12 text-lg rounded-lg focus:ring-[#FFC900]/30 placeholder:text-[#FFC900]/30"
                placeholder="Enter resistance"
              />
            </div>
          )}
          
          {solveFor !== 'voltage' && (
            <div>
              <div className="text-[#FFC900] mb-2 text-lg">Voltage (V)</div>
              <Input
                type="number"
                value={values.voltage}
                onChange={(e) => setValues({ ...values, voltage: e.target.value })}
                className="bg-[#1A1F1C] border-[#FFC900]/20 text-[#FFC900] h-12 text-lg rounded-lg focus:ring-[#FFC900]/30 placeholder:text-[#FFC900]/30"
                placeholder="Enter voltage"
              />
            </div>
          )}

          <Button 
            onClick={handleCalculate}
            className="w-full bg-[#FFC900] text-black hover:bg-[#FFC900]/90 h-12 text-lg font-medium rounded-lg mt-4"
          >
            Calculate
          </Button>
        </div>

        {result && Object.keys(result).length > 0 && (
          <div className="space-y-2 pt-4 border-t border-[#FFC900]/10">
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
      </div>
    </div>
  );
};

export default OhmsLawCalculator;
