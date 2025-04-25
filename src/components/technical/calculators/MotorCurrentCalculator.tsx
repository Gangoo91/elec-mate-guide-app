
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select";

const MotorCurrentCalculator = () => {
  const [values, setValues] = useState({
    power: '',
    voltage: '',
    efficiency: '85',
    powerFactor: '0.85',
    phase: 'three',
  });
  const [result, setResult] = useState<number | null>(null);

  const calculateMotorCurrent = () => {
    const power = parseFloat(values.power);
    const voltage = parseFloat(values.voltage);
    const efficiency = parseFloat(values.efficiency) / 100;
    const powerFactor = parseFloat(values.powerFactor);

    if (!isNaN(power) && !isNaN(voltage) && !isNaN(efficiency) && !isNaN(powerFactor)) {
      let current;
      
      if (values.phase === 'three') {
        current = (power * 1000) / (Math.sqrt(3) * voltage * powerFactor * efficiency);
      } else {
        current = (power * 1000) / (voltage * powerFactor * efficiency);
      }
      
      setResult(current);
    }
  };

  return (
    <div className="bg-[#1A1F1C] rounded-lg border border-[#FFC900]/20 p-6">
      <div className="flex items-center gap-3 mb-4">
        <Calculator className="h-6 w-6 text-[#FFC900]" />
        <h2 className="text-xl font-semibold text-[#FFC900]">Motor Current Calculator</h2>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="power" className="text-[#FFC900]">Motor Power (kW)</Label>
          <Input
            id="power"
            type="number"
            value={values.power}
            onChange={(e) => setValues({ ...values, power: e.target.value })}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]"
            placeholder="Enter motor power"
          />
        </div>

        <div>
          <Label htmlFor="voltage" className="text-[#FFC900]">Voltage (V)</Label>
          <Input
            id="voltage"
            type="number"
            value={values.voltage}
            onChange={(e) => setValues({ ...values, voltage: e.target.value })}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]"
            placeholder="Enter voltage"
          />
        </div>

        <div>
          <Label htmlFor="phase" className="text-[#FFC900]">Phase</Label>
          <Select
            value={values.phase}
            onValueChange={(value) => setValues({ ...values, phase: value })}
          >
            <SelectTrigger className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
              <SelectValue placeholder="Select phase" />
            </SelectTrigger>
            <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
              <SelectItem value="three" className="text-[#FFC900]">Three Phase</SelectItem>
              <SelectItem value="single" className="text-[#FFC900]">Single Phase</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="efficiency" className="text-[#FFC900]">Efficiency (%)</Label>
          <Input
            id="efficiency"
            type="number"
            value={values.efficiency}
            onChange={(e) => setValues({ ...values, efficiency: e.target.value })}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]"
            placeholder="Enter efficiency"
            min="0"
            max="100"
          />
        </div>

        <div>
          <Label htmlFor="powerFactor" className="text-[#FFC900]">Power Factor</Label>
          <Input
            id="powerFactor"
            type="number"
            value={values.powerFactor}
            onChange={(e) => setValues({ ...values, powerFactor: e.target.value })}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]"
            placeholder="Enter power factor"
            min="0"
            max="1"
            step="0.01"
          />
        </div>

        <Button 
          onClick={calculateMotorCurrent}
          className="w-full bg-[#FFC900] text-black hover:bg-[#FFC900]/90"
        >
          Calculate
        </Button>

        {result !== null && (
          <div className="mt-4 p-4 rounded-lg bg-[#22251e] border border-[#FFC900]/20">
            <p className="text-[#FFC900]">
              Motor Full Load Current: {result.toFixed(2)} A
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MotorCurrentCalculator;
