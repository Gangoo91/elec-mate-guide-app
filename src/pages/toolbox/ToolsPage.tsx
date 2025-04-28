
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Gauge, Search, Shield } from 'lucide-react';
import BackButton from "@/components/navigation/BackButton";

const ToolsPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/electricians/toolbox-talk');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-6">
        <BackButton customAction={handleBackClick} />
        
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#FFC900] mb-4">
            Essential Electrical Tools
          </h1>
          <p className="text-[#FFC900]/80 max-w-2xl mx-auto">
            Comprehensive guide to electrical tools, testing equipment, and their proper usage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="h-6 w-6 text-[#FFC900]" />
                <h2 className="text-xl font-semibold text-[#FFC900]">Hand Tools</h2>
              </div>
              <ul className="space-y-2 text-[#FFC900]/80">
                <li>• Wire Strippers and Cutters</li>
                <li>• Insulated Screwdrivers</li>
                <li>• Cable Installation Tools</li>
                <li>• Pliers and Crimpers</li>
                <li>• Cable Identification Tools</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Gauge className="h-6 w-6 text-[#FFC900]" />
                <h2 className="text-xl font-semibold text-[#FFC900]">Test Equipment</h2>
              </div>
              <ul className="space-y-2 text-[#FFC900]/80">
                <li>• Multifunction Testers</li>
                <li>• Voltage Indicators</li>
                <li>• Earth Loop Impedance Testers</li>
                <li>• RCD Testers</li>
                <li>• Insulation Resistance Testers</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Search className="h-6 w-6 text-[#FFC900]" />
                <h2 className="text-xl font-semibold text-[#FFC900]">Diagnostic Tools</h2>
              </div>
              <ul className="space-y-2 text-[#FFC900]/80">
                <li>• Thermal Imaging Cameras</li>
                <li>• Circuit Tracers</li>
                <li>• Cable Locators</li>
                <li>• Oscilloscopes</li>
                <li>• Network Cable Testers</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-[#FFC900]" />
                <h2 className="text-xl font-semibold text-[#FFC900]">Safety Equipment</h2>
              </div>
              <ul className="space-y-2 text-[#FFC900]/80">
                <li>• Personal Protective Equipment (PPE)</li>
                <li>• Voltage Detectors</li>
                <li>• Lock-out/Tag-out Devices</li>
                <li>• Safety Signs and Barriers</li>
                <li>• First Aid Equipment</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-[#FFC900] mb-4">Tool Maintenance Guidelines</h2>
              <div className="space-y-4 text-[#FFC900]/80">
                <p>Regular maintenance ensures tool safety and reliability:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Clean tools after each use</li>
                  <li>Inspect for damage before use</li>
                  <li>Calibrate test equipment regularly</li>
                  <li>Store in appropriate conditions</li>
                  <li>Replace damaged or worn tools</li>
                  <li>Keep maintenance records</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default ToolsPage;
