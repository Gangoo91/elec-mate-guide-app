
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Plug } from "lucide-react";

const VoltageRegulationCalculator = () => {
  const [values, setValues] = useState({
    supplyVoltage: '',
    loadVoltage: '',
  });
  const [result, setResult] = useState<number | null>(null);

  const calculateVoltageRegulation = () => {
    const vs = parseFloat(values.supplyVoltage);
    const vl = parseFloat(values.loadVoltage);
    
    if (!isNaN(vs) && !isNaN(vl) && vs !== 0) {
      const regulation = ((vs - vl) / vs) * 100;
      setResult(regulation);
    }
  };

  return (
    <div className="bg-[#1A1F1C] rounded-lg border border-[#FFC900]/20 p-6">
      <div className="flex items-center gap-3 mb-4">
        <Plug className="h-6 w-6 text-[#FFC900]" />
        <h2 className="text-xl font-semibold text-[#FFC900]">Voltage Regulation Calculator</h2>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="supply-voltage" className="text-[#FFC900]">Supply Voltage (V)</Label>
          <Input
            id="supply-voltage"
            type="number"
            value={values.supplyVoltage}
            onChange={(e) => setValues({ ...values, supplyVoltage: e.target.value })}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]"
            placeholder="Enter supply voltage"
          />
        </div>

        <div>
          <Label htmlFor="load-voltage" className="text-[#FFC900]">Load Voltage (V)</Label>
          <Input
            id="load-voltage"
            type="number"
            value={values.loadVoltage}
            onChange={(e) => setValues({ ...values, loadVoltage: e.target.value })}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]"
            placeholder="Enter load voltage"
          />
        </div>

        <Button 
          onClick={calculateVoltageRegulation}
          className="w-full bg-[#FFC900] text-black hover:bg-[#FFC900]/90"
        >
          Calculate
        </Button>

        {result !== null && (
          <div className="mt-4 p-4 rounded-lg bg-[#22251e] border border-[#FFC900]/20">
            <p className="text-[#FFC900]">
              Voltage Regulation: {result.toFixed(2)}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoltageRegulationCalculator;
