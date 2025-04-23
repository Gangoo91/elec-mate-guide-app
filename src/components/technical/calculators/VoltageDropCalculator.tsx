
import React, { useState, useEffect } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CableData {
  resistivity: number;
  reactance: number;
}

const VoltageDropCalculator = () => {
  const [cableType, setCableType] = useState<string>("");
  const [conductorMaterial, setConductorMaterial] = useState<string>("");
  const [current, setCurrent] = useState<string>("");
  const [length, setLength] = useState<string>("");
  const [csa, setCsa] = useState<string>("");
  const [voltage, setVoltage] = useState<string>("230");
  const [result, setResult] = useState<{ drop: number; percentage: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Clear error when any input changes
  useEffect(() => {
    setError(null);
  }, [cableType, conductorMaterial, current, length, csa, voltage]);

  const calculateVoltageDrop = () => {
    // Validate inputs
    if (!cableType || !conductorMaterial || !current || !length || !csa) {
      setError("All fields are required");
      return;
    }

    const currentVal = parseFloat(current);
    const lengthVal = parseFloat(length);
    const csaVal = parseFloat(csa);
    const voltageVal = parseFloat(voltage);

    if (isNaN(currentVal) || isNaN(lengthVal) || isNaN(csaVal) || isNaN(voltageVal)) {
      setError("Please enter valid numbers");
      return;
    }

    // Cable resistivity values (milliohms per meter) based on material and type
    // These are approximate values for calculation purposes
    const cableData: Record<string, Record<string, CableData>> = {
      'single-core': {
        'copper': { resistivity: 17.241, reactance: 0.08 },
        'aluminium': { resistivity: 28.264, reactance: 0.08 }
      },
      'twin-earth': {
        'copper': { resistivity: 18.1, reactance: 0.075 },
        'aluminium': { resistivity: 29.41, reactance: 0.075 }
      },
      'armoured': {
        'copper': { resistivity: 19.51, reactance: 0.09 },
        'aluminium': { resistivity: 32.2, reactance: 0.09 }
      }
    };

    // Get resistivity and reactance for selected cable type and material
    const { resistivity, reactance } = cableData[cableType][conductorMaterial];
    
    // Calculate voltage drop (single phase formula)
    // Vd = I × L × 2 × (R cos φ + X sin φ) / 1000
    // For simplicity, assuming power factor of 1 (cos φ = 1, sin φ = 0)
    const voltageDrop = (currentVal * lengthVal * 2 * resistivity) / (1000 * csaVal);
    const percentageDrop = (voltageDrop / voltageVal) * 100;

    setResult({
      drop: voltageDrop,
      percentage: percentageDrop
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="cable-type" className="text-[#FFC900]">Cable Type</Label>
          <Select value={cableType} onValueChange={setCableType}>
            <SelectTrigger className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
              <SelectValue placeholder="Select cable type" />
            </SelectTrigger>
            <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
              <SelectItem value="single-core" className="text-[#FFC900] focus:bg-[#FFC900]/10">Single Core</SelectItem>
              <SelectItem value="twin-earth" className="text-[#FFC900] focus:bg-[#FFC900]/10">Twin and Earth</SelectItem>
              <SelectItem value="armoured" className="text-[#FFC900] focus:bg-[#FFC900]/10">SWA (Armoured)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="conductor-material" className="text-[#FFC900]">Conductor Material</Label>
          <Select value={conductorMaterial} onValueChange={setConductorMaterial}>
            <SelectTrigger className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
              <SelectValue placeholder="Select material" />
            </SelectTrigger>
            <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
              <SelectItem value="copper" className="text-[#FFC900] focus:bg-[#FFC900]/10">Copper</SelectItem>
              <SelectItem value="aluminium" className="text-[#FFC900] focus:bg-[#FFC900]/10">Aluminium</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="current" className="text-[#FFC900]">Current (A)</Label>
          <Input 
            id="current" 
            type="number" 
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
            placeholder="Enter current"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="length" className="text-[#FFC900]">Cable Length (m)</Label>
          <Input 
            id="length" 
            type="number" 
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
            placeholder="Enter length"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="csa" className="text-[#FFC900]">CSA (mm²)</Label>
          <Input 
            id="csa" 
            type="number" 
            value={csa}
            onChange={(e) => setCsa(e.target.value)}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
            placeholder="Enter CSA"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="voltage" className="text-[#FFC900]">System Voltage (V)</Label>
          <Input 
            id="voltage" 
            type="number" 
            value={voltage}
            onChange={(e) => setVoltage(e.target.value)}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
            placeholder="Enter voltage"
          />
        </div>
      </div>
      
      <Button 
        onClick={calculateVoltageDrop}
        className="w-full bg-[#FFC900] text-black hover:bg-[#FFF200]"
      >
        Calculate
      </Button>
      
      {error && (
        <div className="mt-4 p-4 rounded-lg bg-red-900/20 border border-red-500/20">
          <p className="text-red-500">{error}</p>
        </div>
      )}

      {result && (
        <div className="mt-4 p-4 rounded-lg bg-[#22251e] border border-[#FFC900]/20">
          <h3 className="text-[#FFC900] font-medium mb-2">Results:</h3>
          <div className="space-y-2 text-[#FFC900]">
            <p>Voltage Drop: {result.drop.toFixed(2)} V</p>
            <p>Percentage Drop: {result.percentage.toFixed(2)}%</p>
            <p className={result.percentage > 3 ? "text-red-400" : "text-green-400"}>
              {result.percentage > 3 
                ? "Warning: Voltage drop exceeds recommended 3% limit."
                : "✓ Voltage drop within acceptable range (< 3%)."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoltageDropCalculator;
