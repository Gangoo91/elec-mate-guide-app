
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Thermometer, BarChart, Lightbulb, Gauge, Home, Settings } from "lucide-react";

const EnergyEfficiencyPage = () => {
  const navigate = useNavigate();
  
  const modules = [
    {
      title: "Heat Pumps",
      description: "Installation and configuration of air and ground source heat pump systems.",
      icon: <Thermometer className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Energy Monitoring",
      description: "System design and installation for energy usage monitoring and management.",
      icon: <BarChart className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Efficient Lighting",
      description: "LED lighting solutions and smart control systems for energy optimization.",
      icon: <Lightbulb className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Energy Management",
      description: "Building energy management systems and controls for commercial buildings.",
      icon: <Gauge className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Home Energy Solutions",
      description: "Domestic energy saving technologies and smart home integration.",
      icon: <Home className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "System Integration",
      description: "Integrating renewable technologies with conventional building services.",
      icon: <Settings className="h-6 w-6 text-[#FFC900]" />
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader 
          title="Energy Efficiency"
          description="Heat pumps, energy monitoring and management systems for commercial and domestic applications."
          hideBackButton={false}
          customBackAction={() => navigate('/electricians/study-guide')}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {modules.map((module, index) => (
            <Card 
              key={index} 
              className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  {module.icon}
                  <CardTitle className="text-[#FFC900] text-xl">
                    {module.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#FFC900]/70">
                  {module.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default EnergyEfficiencyPage;
