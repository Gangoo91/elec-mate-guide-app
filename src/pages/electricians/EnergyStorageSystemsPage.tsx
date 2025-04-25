
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, Settings, Wrench, Shield, Book } from "lucide-react";

const EnergyStorageSystemsPage = () => {
  const navigate = useNavigate();
  
  const modules = [
    {
      title: "Battery Technologies",
      description: "Understanding different battery types, chemistries, and their applications in energy storage.",
      icon: <Battery className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "System Design",
      description: "Sizing calculations, component selection, and system architecture planning.",
      icon: <Settings className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Installation Practices",
      description: "Best practices for installing battery systems, including safety considerations.",
      icon: <Wrench className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Safety and Standards",
      description: "Safety requirements, regulations, and industry standards for energy storage.",
      icon: <Shield className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Integration",
      description: "Connecting with renewable energy systems and grid integration requirements.",
      icon: <Book className="h-6 w-6 text-[#FFC900]" />
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader 
          title="Energy Storage Systems"
          description="Comprehensive guide to battery technologies, system design, installation, and integration with renewable energy systems."
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

export default EnergyStorageSystemsPage;
