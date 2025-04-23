
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Power } from "lucide-react";

interface CalculationResult {
  power?: number;
  apparentPower?: number;
  reactivePower?: number;
}

const PowerCalculator = () => {
  const [values, setValues] = useState({
    voltage: '',
    current: '',
    powerFactor: ''
  });
  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleCalculate = () => {
    const v = parseFloat(values.voltage);
    const i = parseFloat(values.current);
    const pf = parseFloat(values.powerFactor) || 1;

    if (!isNaN(v) && !isNaN(i)) {
      const apparentPower = v * i;
      const power = apparentPower * pf;
      const reactivePower = apparentPower * Math.sqrt(1 - pf * pf);

      setResult({
        power,
        apparentPower,
        reactivePower: pf !== 1 ? reactivePower : undefined
      });
    }
  };

  return (
    <div className="bg-[#1A1F1C] rounded-lg border border-[#FFC900]/20 p-6">
      <div className="flex items-center gap-3 mb-4">
        <Power className="h-6 w-6 text-[#FFC900]" />
        <h2 className="text-xl font-semibold text-[#FFC900]">Power Calculator</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-[#FFC900] mb-2 text-sm">Voltage (V)</label>
          <Input
            type="number"
            value={values.voltage}
            onChange={(e) => setValues({ ...values, voltage: e.target.value })}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] h-10 rounded-md"
            placeholder="Enter voltage"
          />
        </div>

        <div>
          <label className="block text-[#FFC900] mb-2 text-sm">Current (A)</label>
          <Input
            type="number"
            value={values.current}
            onChange={(e) => setValues({ ...values, current: e.target.value })}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] h-10 rounded-md"
            placeholder="Enter current"
          />
        </div>

        <div>
          <label className="block text-[#FFC900] mb-2 text-sm">Power Factor (optional)</label>
          <Input
            type="number"
            value={values.powerFactor}
            onChange={(e) => setValues({ ...values, powerFactor: e.target.value })}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] h-10 rounded-md"
            placeholder="Enter power factor (0-1)"
            min="0"
            max="1"
            step="0.01"
          />
        </div>

        <Button 
          onClick={handleCalculate}
          className="w-full bg-[#FFC900] text-black hover:bg-[#FFC900]/90 h-10 font-medium"
        >
          Calculate
        </Button>

        {result && (
          <div className="mt-4 pt-4 border-t border-[#FFC900]/10">
            <h3 className="text-[#FFC900] mb-2 font-medium">Results:</h3>
            <div className="space-y-1 text-sm">
              <div className="text-[#FFC900]">True Power (P) = {result.power?.toFixed(2)} W</div>
              <div className="text-[#FFC900]">Apparent Power (S) = {result.apparentPower?.toFixed(2)} VA</div>
              {result.reactivePower && (
                <div className="text-[#FFC900]">Reactive Power (Q) = {result.reactivePower.toFixed(2)} VAR</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PowerCalculator;
