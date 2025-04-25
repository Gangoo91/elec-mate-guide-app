
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Power } from "lucide-react";

const FaultCurrentCalculator = () => {
  const [values, setValues] = useState({
    voltage: '',
    impedance: '',
  });
  const [result, setResult] = useState<number | null>(null);

  const calculateFaultCurrent = () => {
    const v = parseFloat(values.voltage);
    const z = parseFloat(values.impedance);
    
    if (!isNaN(v) && !isNaN(z) && z !== 0) {
      const faultCurrent = v / z;
      setResult(faultCurrent);
    }
  };

  return (
    <div className="bg-[#1A1F1C] rounded-lg border border-[#FFC900]/20 p-6">
      <div className="flex items-center gap-3 mb-4">
        <Power className="h-6 w-6 text-[#FFC900]" />
        <h2 className="text-xl font-semibold text-[#FFC900]">Fault Current Calculator</h2>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="voltage" className="text-[#FFC900]">System Voltage (V)</Label>
          <Input
            id="voltage"
            type="number"
            value={values.voltage}
            onChange={(e) => setValues({ ...values, voltage: e.target.value })}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]"
            placeholder="Enter system voltage"
          />
        </div>

        <div>
          <Label htmlFor="impedance" className="text-[#FFC900]">Total Circuit Impedance (Ω)</Label>
          <Input
            id="impedance"
            type="number"
            value={values.impedance}
            onChange={(e) => setValues({ ...values, impedance: e.target.value })}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]"
            placeholder="Enter circuit impedance"
          />
        </div>

        <Button 
          onClick={calculateFaultCurrent}
          className="w-full bg-[#FFC900] text-black hover:bg-[#FFC900]/90"
        >
          Calculate
        </Button>

        {result !== null && (
          <div className="mt-4 p-4 rounded-lg bg-[#22251e] border border-[#FFC900]/20">
            <p className="text-[#FFC900]">
              Prospective Fault Current: {result.toFixed(2)} A
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FaultCurrentCalculator;
