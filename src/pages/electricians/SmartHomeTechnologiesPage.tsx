
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wifi, Smartphone, Monitor, Shield, Lightbulb, Lock } from "lucide-react";

const SmartHomeTechnologiesPage = () => {
  const navigate = useNavigate();
  
  const modules = [
    {
      title: "Home Automation",
      description: "Principles of home automation and integration of smart systems.",
      icon: <Wifi className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Smart Controls",
      description: "Smart thermostats, lighting controls, and energy management systems.",
      icon: <Smartphone className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Entertainment Systems",
      description: "Multi-room audio, home cinema, and integrated entertainment solutions.",
      icon: <Monitor className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Security Integration",
      description: "Smart security cameras, alarms, and monitoring systems.",
      icon: <Shield className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Lighting Solutions",
      description: "Smart lighting design, installation, and programming.",
      icon: <Lightbulb className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Access Controls",
      description: "Smart locks, entry systems, and automated gates.",
      icon: <Lock className="h-6 w-6 text-[#FFC900]" />
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader 
          title="Smart Home Technologies"
          description="Home automation, IoT device integration, and smart control systems for modern living environments."
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

export default SmartHomeTechnologiesPage;
