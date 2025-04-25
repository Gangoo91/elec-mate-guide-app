
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SolarContentLayout from '@/components/solar/SolarContentLayout';
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const SystemComponentsPage = () => {
  const navigate = useNavigate();
  
  const sections = [
    {
      title: "Solar Panels",
      content: (
        <Card 
          className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer"
          onClick={() => navigate('/electricians/solar-pv-installation/system-components/panels')}
        >
          <CardContent className="pt-6">
            <p className="text-[#FFC900]/70 mb-4">Solar panels (photovoltaic modules) are the primary components that convert sunlight into electricity. Key aspects include:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/70">
              <li>Types of solar cells (monocrystalline, polycrystalline, thin-film)</li>
              <li>Panel efficiency and power ratings</li>
              <li>Temperature coefficients and performance factors</li>
              <li>Standard Test Conditions (STC) ratings</li>
            </ul>
          </CardContent>
        </Card>
      )
    },
    {
      title: "Inverters",
      content: (
        <Card 
          className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer"
          onClick={() => navigate('/electricians/solar-pv-installation/system-components/inverters')}
        >
          <CardContent className="pt-6">
            <p className="text-[#FFC900]/70 mb-4">Inverters convert DC power from solar panels into AC power for use in buildings. Types include:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/70">
              <li>String inverters for larger installations</li>
              <li>Microinverters for individual panel optimization</li>
              <li>Power optimizers with string inverters</li>
              <li>Hybrid inverters for battery storage systems</li>
            </ul>
          </CardContent>
        </Card>
      )
    },
    {
      title: "Mounting Systems",
      content: (
        <Card 
          className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer"
          onClick={() => navigate('/electricians/solar-pv-installation/system-components/mounting')}
        >
          <CardContent className="pt-6">
            <p className="text-[#FFC900]/70 mb-4">Mounting systems secure solar panels to roofs or ground-based structures:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/70">
              <li>Roof mounting brackets and rails</li>
              <li>Ground mount frameworks</li>
              <li>Ballasted mounting systems</li>
              <li>Building Integrated PV (BIPV) systems</li>
            </ul>
          </CardContent>
        </Card>
      )
    },
    {
      title: "Electrical Components",
      content: (
        <Card 
          className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer"
          onClick={() => navigate('/electricians/solar-pv-installation/system-components/electrical')}
        >
          <CardContent className="pt-6">
            <p className="text-[#FFC900]/70 mb-4">Essential electrical components for system operation include:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#FFC900]/70">
              <li>DC isolators and circuit breakers</li>
              <li>AC isolators and circuit breakers</li>
              <li>Solar cables and connectors</li>
              <li>Generation meters and monitoring systems</li>
              <li>Surge protection devices</li>
            </ul>
          </CardContent>
        </Card>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Solar PV System Components"
      description="Detailed overview of the main components in a solar PV system installation. Click on each section to learn more."
      sections={sections}
    />
  );
};

export default SystemComponentsPage;
