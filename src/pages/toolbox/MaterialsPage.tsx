
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Package, Shield, Lightbulb, Battery, Zap } from 'lucide-react';
import BackButton from "@/components/navigation/BackButton";

const MaterialsPage = () => {
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
            Electrical Materials Guide
          </h1>
          <p className="text-[#FFC900]/80 max-w-2xl mx-auto">
            Comprehensive information about electrical materials, specifications, and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Package className="h-6 w-6 text-[#FFC900]" />
                <h2 className="text-xl font-semibold text-[#FFC900]">Cable Types</h2>
              </div>
              <ul className="space-y-2 text-[#FFC900]/80">
                <li>• Twin and Earth (6242Y)</li>
                <li>• Steel Wire Armoured (SWA)</li>
                <li>• Fire Resistant Cables</li>
                <li>• Data and Network Cables</li>
                <li>• Flexible Cords</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-[#FFC900]" />
                <h2 className="text-xl font-semibold text-[#FFC900]">Protection Devices</h2>
              </div>
              <ul className="space-y-2 text-[#FFC900]/80">
                <li>• Circuit Breakers (MCBs, RCBOs)</li>
                <li>• Consumer Units</li>
                <li>• Surge Protection Devices</li>
                <li>• Isolators and Switches</li>
                <li>• Fuses and Carriers</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="h-6 w-6 text-[#FFC900]" />
                <h2 className="text-xl font-semibold text-[#FFC900]">Lighting Equipment</h2>
              </div>
              <ul className="space-y-2 text-[#FFC900]/80">
                <li>• LED Fixtures and Fittings</li>
                <li>• Emergency Lighting Units</li>
                <li>• Control Gear and Drivers</li>
                <li>• Sensors and Controls</li>
                <li>• Lamps and Light Sources</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-6 w-6 text-[#FFC900]" />
                <h2 className="text-xl font-semibold text-[#FFC900]">Latest Technologies</h2>
              </div>
              <ul className="space-y-2 text-[#FFC900]/80">
                <li>• Smart Home Components</li>
                <li>• EV Charging Equipment</li>
                <li>• Renewable Energy Systems</li>
                <li>• Energy Storage Solutions</li>
                <li>• IoT Devices and Sensors</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-[#FFC900] mb-4">Material Selection Guidelines</h2>
              <div className="space-y-4 text-[#FFC900]/80">
                <p>When selecting electrical materials, consider:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Operating environment and conditions</li>
                  <li>Current carrying capacity requirements</li>
                  <li>Installation method and accessibility</li>
                  <li>Compliance with current regulations</li>
                  <li>Cost-effectiveness and durability</li>
                  <li>Manufacturer warranties and support</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default MaterialsPage;
