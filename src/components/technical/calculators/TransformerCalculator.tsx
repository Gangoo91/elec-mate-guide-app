
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";

interface CalculationResult {
  secondaryCurrent?: number;
  secondaryVoltage?: number;
  power?: number;
}

const TransformerCalculator = () => {
  const [values, setValues] = useState({
    primaryVoltage: '',
    primaryCurrent: '',
    ratio: '',
    efficiency: '98',
  });
  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculateTransformer = () => {
    const vp = parseFloat(values.primaryVoltage);
    const ip = parseFloat(values.primaryCurrent);
    const ratio = parseFloat(values.ratio);
    const efficiency = parseFloat(values.efficiency) / 100;

    if (!isNaN(vp) && !isNaN(ip) && !isNaN(ratio) && !isNaN(efficiency)) {
      const secondaryVoltage = vp / ratio;
      const power = vp * ip * efficiency;
      const secondaryCurrent = power / secondaryVoltage;

      setResult({
        secondaryVoltage,
        secondaryCurrent,
        power
      });
    }
  };

  return (
    <div className="bg-[#1A1F1C] rounded-lg border border-[#FFC900]/20 p-6">
      <div className="flex items-center gap-3 mb-4">
        <Calculator className="h-6 w-6 text-[#FFC900]" />
        <h2 className="text-xl font-semibold text-[#FFC900]">Transformer Calculator</h2>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="primaryVoltage" className="text-[#FFC900]">Primary Voltage (V)</Label>
          <Input
            id="primaryVoltage"
            type="number"
            value={values.primaryVoltage}
            onChange={(e) => setValues({ ...values, primaryVoltage: e.target.value })}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]"
            placeholder="Enter primary voltage"
          />
        </div>

        <div>
          <Label htmlFor="primaryCurrent" className="text-[#FFC900]">Primary Current (A)</Label>
          <Input
            id="primaryCurrent"
            type="number"
            value={values.primaryCurrent}
            onChange={(e) => setValues({ ...values, primaryCurrent: e.target.value })}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]"
            placeholder="Enter primary current"
          />
        </div>

        <div>
          <Label htmlFor="ratio" className="text-[#FFC900]">Transformation Ratio</Label>
          <Input
            id="ratio"
            type="number"
            value={values.ratio}
            onChange={(e) => setValues({ ...values, ratio: e.target.value })}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]"
            placeholder="Enter transformation ratio"
          />
        </div>

        <div>
          <Label htmlFor="efficiency" className="text-[#FFC900]">Efficiency (%)</Label>
          <Input
            id="efficiency"
            type="number"
            value={values.efficiency}
            onChange={(e) => setValues({ ...values, efficiency: e.target.value })}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]"
            placeholder="Enter efficiency percentage"
            min="0"
            max="100"
          />
        </div>

        <Button 
          onClick={calculateTransformer}
          className="w-full bg-[#FFC900] text-black hover:bg-[#FFC900]/90"
        >
          Calculate
        </Button>

        {result && (
          <div className="mt-4 p-4 rounded-lg bg-[#22251e] border border-[#FFC900]/20">
            <div className="space-y-2 text-[#FFC900]">
              <p>Secondary Voltage: {result.secondaryVoltage?.toFixed(2)} V</p>
              <p>Secondary Current: {result.secondaryCurrent?.toFixed(2)} A</p>
              <p>Power: {result.power?.toFixed(2)} W</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransformerCalculator;
