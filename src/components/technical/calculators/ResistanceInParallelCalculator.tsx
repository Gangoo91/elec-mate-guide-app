
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Power, Trash2 } from "lucide-react";

const ResistanceInParallelCalculator = () => {
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
    const totalInverse = resistances.reduce((sum, resistance) => {
      const value = parseFloat(resistance);
      return sum + (isNaN(value) || value === 0 ? 0 : 1 / value);
    }, 0);
    
    if (totalInverse === 0) {
      setResult(0);
    } else {
      setResult(1 / totalInverse);
    }
  };

  return (
    <div className="bg-[#1A1F1C] rounded-lg border border-[#FFC900]/20 p-6">
      <div className="flex items-center gap-3 mb-4">
        <Power className="h-6 w-6 text-[#FFC900]" />
        <h2 className="text-xl font-semibold text-[#FFC900]">Parallel Resistance Calculator</h2>
      </div>

      <div className="space-y-4">
        {resistances.map((resistance, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="flex-grow">
              <label className="block text-[#FFC900] mb-2 text-sm">R{index + 1} (Ω)</label>
              <div className="flex items-center space-x-2">
                <Input
                  type="number"
                  value={resistance}
                  onChange={(e) => handleResistanceChange(index, e.target.value)}
                  className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] h-10 flex-grow"
                  placeholder={`Enter R${index + 1}`}
                />
                {resistances.length > 2 && (
                  <Button
                    onClick={() => removeResistor(index)}
                    variant="ghost"
                    size="icon"
                    className="text-red-500 hover:bg-red-500/10 w-8 h-8"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="space-y-2 mt-4">
          <Button
            onClick={addResistor}
            variant="outline"
            className="w-full bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/10"
          >
            Add Resistor
          </Button>
          <Button
            onClick={calculateTotalResistance}
            className="w-full bg-[#FFC900] text-black hover:bg-[#FFC900]/90 font-medium"
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

export default ResistanceInParallelCalculator;

