
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select";

const CableSizeCalculator = () => {
  const [values, setValues] = useState({
    current: '',
    length: '',
    material: 'copper',
    insulation: 'pvc',
  });
  const [result, setResult] = useState<string | null>(null);

  const calculateCableSize = () => {
    const current = parseFloat(values.current);
    const length = parseFloat(values.length);

    if (!isNaN(current) && !isNaN(length)) {
      let baseSize = current / 5; // Simplified calculation for demo
      
      // Adjust for cable length (voltage drop consideration)
      if (length > 50) {
        baseSize *= 1.2;
      }

      // Adjust for material
      if (values.material === 'aluminum') {
        baseSize *= 1.6;
      }

      // Adjust for insulation
      if (values.insulation === 'xlpe') {
        baseSize *= 0.9;
      }

      // Round up to nearest standard size
      let recommendedSize;
      if (baseSize <= 1.5) recommendedSize = 1.5;
      else if (baseSize <= 2.5) recommendedSize = 2.5;
      else if (baseSize <= 4) recommendedSize = 4;
      else if (baseSize <= 6) recommendedSize = 6;
      else if (baseSize <= 10) recommendedSize = 10;
      else if (baseSize <= 16) recommendedSize = 16;
      else if (baseSize <= 25) recommendedSize = 25;
      else recommendedSize = 35;

      setResult(`${recommendedSize} mm²`);
    }
  };

  return (
    <div className="bg-[#1A1F1C] rounded-lg border border-[#FFC900]/20 p-6">
      <div className="flex items-center gap-3 mb-4">
        <Calculator className="h-6 w-6 text-[#FFC900]" />
        <h2 className="text-xl font-semibold text-[#FFC900]">Cable Size Calculator</h2>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="current" className="text-[#FFC900]">Current Rating (A)</Label>
          <Input
            id="current"
            type="number"
            value={values.current}
            onChange={(e) => setValues({ ...values, current: e.target.value })}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]"
            placeholder="Enter current rating"
          />
        </div>

        <div>
          <Label htmlFor="length" className="text-[#FFC900]">Cable Length (m)</Label>
          <Input
            id="length"
            type="number"
            value={values.length}
            onChange={(e) => setValues({ ...values, length: e.target.value })}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]"
            placeholder="Enter cable length"
          />
        </div>

        <div>
          <Label htmlFor="material" className="text-[#FFC900]">Conductor Material</Label>
          <Select
            value={values.material}
            onValueChange={(value) => setValues({ ...values, material: value })}
          >
            <SelectTrigger className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
              <SelectValue placeholder="Select material" />
            </SelectTrigger>
            <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
              <SelectItem value="copper" className="text-[#FFC900]">Copper</SelectItem>
              <SelectItem value="aluminum" className="text-[#FFC900]">Aluminum</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="insulation" className="text-[#FFC900]">Insulation Type</Label>
          <Select
            value={values.insulation}
            onValueChange={(value) => setValues({ ...values, insulation: value })}
          >
            <SelectTrigger className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
              <SelectValue placeholder="Select insulation" />
            </SelectTrigger>
            <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
              <SelectItem value="pvc" className="text-[#FFC900]">PVC</SelectItem>
              <SelectItem value="xlpe" className="text-[#FFC900]">XLPE</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button 
          onClick={calculateCableSize}
          className="w-full bg-[#FFC900] text-black hover:bg-[#FFC900]/90"
        >
          Calculate
        </Button>

        {result && (
          <div className="mt-4 p-4 rounded-lg bg-[#22251e] border border-[#FFC900]/20">
            <p className="text-[#FFC900]">
              Recommended Cable Size: {result}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CableSizeCalculator;
