
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CalculatorTools = () => {
  const [calculationType, setCalculationType] = useState('voltage-drop');
  const [result, setResult] = useState<string | null>(null);
  
  // Example calculation function
  const calculateResult = (event: React.FormEvent) => {
    event.preventDefault();
    // Placeholder for actual calculation logic
    toast.success("Calculation completed");
    setResult("Result would be shown here based on the selected calculation type");
  };

  return (
    <div className="space-y-4">
      <Tabs defaultValue="voltage-drop" className="w-full">
        <TabsList className="w-full bg-[#22251e] border-[#FFC900]/20">
          <TabsTrigger 
            value="voltage-drop"
            className="text-[#FFC900] data-[state=active]:bg-[#FFC900] data-[state=active]:text-black"
          >
            Voltage Drop
          </TabsTrigger>
          <TabsTrigger 
            value="instrumentation"
            className="text-[#FFC900] data-[state=active]:bg-[#FFC900] data-[state=active]:text-black"
          >
            Instrumentation
          </TabsTrigger>
          <TabsTrigger 
            value="cable-sizing"
            className="text-[#FFC900] data-[state=active]:bg-[#FFC900] data-[state=active]:text-black"
          >
            Cable Sizing
          </TabsTrigger>
        </TabsList>

        <TabsContent value="voltage-drop" className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
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

        <TabsContent value="instrumentation" className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
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

        <TabsContent value="cable-sizing" className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="load-current" className="text-[#FFC900]">Load Current (A)</Label>
              <Input 
                id="load-current" 
                type="number" 
                className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]" 
                placeholder="Enter current"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="installation-method" className="text-[#FFC900]">Installation Method</Label>
              <Select>
                <SelectTrigger className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
                  <SelectValue placeholder="Select method" />
                </SelectTrigger>
                <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
                  <SelectItem value="A" className="text-[#FFC900] focus:bg-[#FFC900]/10">Method A (Enclosed)</SelectItem>
                  <SelectItem value="B" className="text-[#FFC900] focus:bg-[#FFC900]/10">Method B (Conduit)</SelectItem>
                  <SelectItem value="C" className="text-[#FFC900] focus:bg-[#FFC900]/10">Method C (Surface)</SelectItem>
                  <SelectItem value="D" className="text-[#FFC900] focus:bg-[#FFC900]/10">Method D (Ground)</SelectItem>
                </SelectContent>
              </Select>
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

