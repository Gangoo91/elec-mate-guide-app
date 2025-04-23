
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Power } from "lucide-react";

const ResistanceInSeriesCalculator = () => {
  const [resistances, setResistances] = useState(['', '', '']);
  const [result, setResult] = useState<number | null>(null);

  const handleResistanceChange = (index: number, value: string) => {
    const newResistances = [...resistances];
    newResistances[index] = value;
    setResistances(newResistances);
  };

  const addResistor = () => {
    setResistances([...resistances, '']);
  };

  const removeResistor = (index: number) => {
    if (resistances.length > 2) {
      const newResistances = resistances.filter((_, i) => i !== index);
      setResistances(newResistances);
    }
  };

  const calculateTotalResistance = () => {
    const total = resistances.reduce((sum, resistance) => {
      const value = parseFloat(resistance);
      return sum + (isNaN(value) ? 0 : value);
    }, 0);
    setResult(total);
  };

  return (
    <div className="bg-[#1A1F1C] rounded-lg border border-[#FFC900]/20 p-6">
      <div className="flex items-center gap-3 mb-4">
        <Power className="h-6 w-6 text-[#FFC900]" />
        <h2 className="text-xl font-semibold text-[#FFC900]">Series Resistance Calculator</h2>
      </div>

      <div className="space-y-4">
        {resistances.map((resistance, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="flex-1">
              <label className="block text-[#FFC900] mb-2 text-sm">R{index + 1} (Ω)</label>
              <Input
                type="number"
                value={resistance}
                onChange={(e) => handleResistanceChange(index, e.target.value)}
                className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] h-10 rounded-md"
                placeholder={`Enter R${index + 1}`}
              />
            </div>
            {resistances.length > 2 && (
              <Button
                onClick={() => removeResistor(index)}
                variant="outline"
                className="mt-8 bg-red-500/10 hover:bg-red-500/20 text-red-500 border-red-500/20"
              >
                Remove
              </Button>
            )}
          </div>
        ))}

        <div className="flex gap-2">
          <Button
            onClick={addResistor}
            variant="outline"
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/10"
          >
            Add Resistor
          </Button>
          <Button
            onClick={calculateTotalResistance}
            className="flex-1 bg-[#FFC900] text-black hover:bg-[#FFC900]/90 font-medium"
          >
            Calculate Total
          </Button>
        </div>

        {result !== null && (
          <div className="mt-4 pt-4 border-t border-[#FFC900]/10">
            <h3 className="text-[#FFC900] mb-2 font-medium">Result:</h3>
            <div className="text-[#FFC900]">
              Total Resistance = {result.toFixed(2)} Ω
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResistanceInSeriesCalculator;
