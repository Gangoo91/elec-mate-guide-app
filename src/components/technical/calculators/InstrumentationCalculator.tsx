
import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const InstrumentationCalculator = () => {
  const { toast } = useToast();
  const [instrumentType, setInstrumentType] = useState<string>('');
  const [inputRange, setInputRange] = useState<string>('');
  const [measuredValue, setMeasuredValue] = useState<string>('');
  const [scaleMin, setScaleMin] = useState<string>('');
  const [scaleMax, setScaleMax] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);

  const calculateResult = () => {
    // Validate inputs
    if (!instrumentType || !inputRange || !measuredValue || !scaleMin || !scaleMax) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to perform the calculation.",
        variant: "destructive"
      });
      return;
    }

    const measured = parseFloat(measuredValue);
    const min = parseFloat(scaleMin);
    const max = parseFloat(scaleMax);

    if (isNaN(measured) || isNaN(min) || isNaN(max)) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid numbers for measured value, scale minimum and maximum.",
        variant: "destructive"
      });
      return;
    }

    // Calculate based on input range
    let calculatedValue: number;
    let unit = '';

    switch (instrumentType) {
      case 'pressure':
        unit = 'bar';
        break;
      case 'temperature':
        unit = '°C';
        break;
      case 'flow':
        unit = 'L/min';
        break;
      case 'level':
        unit = 'm';
        break;
      default:
        unit = 'units';
    }

    if (inputRange === '4-20') {
      // 4-20mA calculation
      calculatedValue = ((measured - 4) / 16) * (max - min) + min;
    } else if (inputRange === '0-20') {
      // 0-20mA calculation
      calculatedValue = (measured / 20) * (max - min) + min;
    } else if (inputRange === '0-10') {
      // 0-10V calculation
      calculatedValue = (measured / 10) * (max - min) + min;
    } else {
      toast({
        title: "Calculation Error",
        description: "Invalid input range selected.",
        variant: "destructive"
      });
      return;
    }

    setResult(`Calculated ${instrumentType} value: ${calculatedValue.toFixed(2)} ${unit}`);
    
    // Show success toast
    toast({
      title: "Calculation Complete",
      description: `${instrumentType} value calculated successfully!`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="instrument-type" className="text-[#FFC900]">Instrument Type</Label>
          <Select onValueChange={setInstrumentType} value={instrumentType}>
            <SelectTrigger className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
              <SelectItem value="pressure" className="text-[#FFC900] focus:bg-[#FFC900]/10">Pressure Transmitter</SelectItem>
              <SelectItem value="temperature" className="text-[#FFC900] focus:bg-[#FFC900]/10">Temperature Sensor</SelectItem>
              <SelectItem value="flow" className="text-[#FFC900] focus:bg-[#FFC900]/10">Flow Meter</SelectItem>
              <SelectItem value="level" className="text-[#FFC900] focus:bg-[#FFC900]/10">Level Sensor</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="input-range" className="text-[#FFC900]">Input Range (mA)</Label>
          <Select onValueChange={setInputRange} value={inputRange}>
            <SelectTrigger className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
              <SelectItem value="4-20" className="text-[#FFC900] focus:bg-[#FFC900]/10">4-20mA</SelectItem>
              <SelectItem value="0-20" className="text-[#FFC900] focus:bg-[#FFC900]/10">0-20mA</SelectItem>
              <SelectItem value="0-10" className="text-[#FFC900] focus:bg-[#FFC900]/10">0-10V</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="measured-value" className="text-[#FFC900]">Measured Value</Label>
          <Input 
            id="measured-value" 
            type="number" 
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
            placeholder="Enter value"
            value={measuredValue}
            onChange={(e) => setMeasuredValue(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="scale-min" className="text-[#FFC900]">Scale Minimum</Label>
          <Input 
            id="scale-min" 
            type="number" 
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
            placeholder="Enter minimum"
            value={scaleMin}
            onChange={(e) => setScaleMin(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="scale-max" className="text-[#FFC900]">Scale Maximum</Label>
          <Input 
            id="scale-max" 
            type="number" 
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
            placeholder="Enter maximum"
            value={scaleMax}
            onChange={(e) => setScaleMax(e.target.value)}
          />
        </div>
      </div>
      
      <Button 
        onClick={calculateResult}
        className="w-full bg-[#FFC900] text-black hover:bg-[#FFF200]"
      >
        Calculate
      </Button>

      {result && (
        <div className="mt-4 p-4 rounded-lg bg-[#22251e] border border-[#FFC900]/20">
          <p className="text-[#FFC900]">{result}</p>
        </div>
      )}
    </div>
  );
};

export default InstrumentationCalculator;
