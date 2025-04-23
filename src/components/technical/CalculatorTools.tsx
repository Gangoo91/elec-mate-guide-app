import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, Zap, CircuitBoard, Ruler } from "lucide-react";
import OhmsLawCalculator from './calculators/OhmsLawCalculator';

const CalculatorTools = () => {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="ohms-law" className="w-full">
        <TabsList className="w-full bg-[#22251e] border-[#FFC900]/20 flex flex-wrap">
          <TabsTrigger 
            value="ohms-law"
            className="text-[#FFC900] data-[state=active]:bg-[#FFC900] data-[state=active]:text-black flex gap-2 items-center"
          >
            <Calculator className="h-4 w-4" />
            Equation Solver
          </TabsTrigger>
          <TabsTrigger 
            value="voltage-drop"
            className="text-[#FFC900] data-[state=active]:bg-[#FFC900] data-[state=active]:text-black flex gap-2 items-center"
          >
            <Zap className="h-4 w-4" />
            Voltage Drop
          </TabsTrigger>
          <TabsTrigger 
            value="impedance"
            className="text-[#FFC900] data-[state=active]:bg-[#FFC900] data-[state=active]:text-black flex gap-2 items-center"
          >
            <CircuitBoard className="h-4 w-4" />
            Impedance (Zs)
          </TabsTrigger>
          <TabsTrigger 
            value="instrumentation"
            className="text-[#FFC900] data-[state=active]:bg-[#FFC900] data-[state=active]:text-black flex gap-2 items-center"
          >
            <Ruler className="h-4 w-4" />
            Instrumentation
          </TabsTrigger>
        </TabsList>

        <TabsContent value="ohms-law" className="mt-4">
          <OhmsLawCalculator />
        </TabsContent>

        <TabsContent value="voltage-drop" className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="cable-type" className="text-[#FFC900]">Cable Type</Label>
              <Select>
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
              <Select>
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
                className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
                placeholder="Enter current"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="length" className="text-[#FFC900]">Cable Length (m)</Label>
              <Input 
                id="length" 
                type="number" 
                className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
                placeholder="Enter length"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="csa" className="text-[#FFC900]">CSA (mm²)</Label>
              <Input 
                id="csa" 
                type="number" 
                className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
                placeholder="Enter CSA"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="voltage" className="text-[#FFC900]">System Voltage (V)</Label>
              <Input 
                id="voltage" 
                type="number" 
                className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
                placeholder="Enter voltage"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="impedance" className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ze" className="text-[#FFC900]">External Impedance (Ze)</Label>
              <Input 
                id="ze" 
                type="number" 
                className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
                placeholder="Enter Ze value"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="r1" className="text-[#FFC900]">Phase Conductor (R1)</Label>
              <Input 
                id="r1" 
                type="number" 
                className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
                placeholder="Enter R1 value"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="r2" className="text-[#FFC900]">Circuit Protective Conductor (R2)</Label>
              <Input 
                id="r2" 
                type="number" 
                className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
                placeholder="Enter R2 value"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="xL" className="text-[#FFC900]">Circuit Reactance (XL)</Label>
              <Input 
                id="xL" 
                type="number" 
                className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
                placeholder="Enter XL value"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="instrumentation" className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="instrument-type" className="text-[#FFC900]">Instrument Type</Label>
              <Select>
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
              <Select>
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
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="scale-min" className="text-[#FFC900]">Scale Minimum</Label>
              <Input 
                id="scale-min" 
                type="number" 
                className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
                placeholder="Enter minimum"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="scale-max" className="text-[#FFC900]">Scale Maximum</Label>
              <Input 
                id="scale-max" 
                type="number" 
                className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
                placeholder="Enter maximum"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <Button 
        type="submit"
        className="w-full bg-[#FFC900] text-black hover:bg-[#FFF200]"
        onClick={calculateResult}
      >
        Calculate
      </Button>

      {result && (
        <div className="mt-4 p-3 bg-[#2C2F24] rounded">
          <p className="text-[#FFC900]/80">{result}</p>
        </div>
      )}
    </div>
  );
};

export default CalculatorTools;
