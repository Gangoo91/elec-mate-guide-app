
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

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

  const handleCalculate = () => {
    const v = parseFloat(values.voltage);
    const i = parseFloat(values.current);
    const r = parseFloat(values.resistance);
    
    const newResult: CalculationResult = {};
    
    // Calculate missing value based on provided inputs
    if (!isNaN(i) && !isNaN(r) && !values.voltage) {
      newResult.voltage = i * r;
    } else if (!isNaN(v) && !isNaN(r) && !values.current) {
      newResult.current = v / r;
    } else if (!isNaN(v) && !isNaN(i) && !values.resistance) {
      newResult.resistance = v / i;
    }
    
    // Calculate power if possible
    if (!isNaN(v) && !isNaN(i)) {
      newResult.power = v * i;
    }
    
    setResult(newResult);
  };

  return (
    <div className="space-y-6">
      <div className="text-2xl font-bold text-[#FFC900] mb-4">Equation Solver</div>
      <div className="space-y-4">
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
            <div className="text-[#FFC900] text-sm">Power =</div>
            <div className="text-[#FFC900]/80">Current × Voltage</div>
          </div>
          <div className="p-4 rounded-lg bg-[#22251e] border border-[#FFC900]/20">
            <div className="text-[#FFC900] text-sm">Voltage =</div>
            <div className="text-[#FFC900]/80">Current × Resistance</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OhmsLawCalculator;
