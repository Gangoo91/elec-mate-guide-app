
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Settings, Wrench, Shield, FileText, Network } from "lucide-react";

const EVInfrastructurePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleBackClick = () => {
    // Check if we came from specialisations page
    if (location.pathname === '/electricians/specialisations/ev') {
      navigate('/electricians/development/specialisations');
    } else {
      navigate('/electricians', { state: { from: 'study-guide' } });
    }
  };

  const modules = [
    {
      title: "EV Charging Types",
      description: "Overview of different charging speeds, connectors, and standards.",
      icon: <Zap className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Installation Standards",
      description: "Regulatory requirements and installation standards for EV charging points.",
      icon: <FileText className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Load Management",
      description: "Managing electrical load and demand when installing charging points.",
      icon: <Settings className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Installation Process",
      description: "Step-by-step installation guide for domestic and commercial charging points.",
      icon: <Wrench className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Safety Considerations",
      description: "Safety requirements and protection methods for EV charging systems.",
      icon: <Shield className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Network Integration",
      description: "Smart charging, grid integration, and communication protocols.",
      icon: <Network className="h-6 w-6 text-[#FFC900]" />
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader 
          title="EV Infrastructure"
          description="Electric vehicle charging points, load management, and installation standards for modern transport solutions."
          hideBackButton={false}
          customBackAction={handleBackClick}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {modules.map((module, index) => (
            <Card 
              key={index} 
              className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer"
              onClick={() => console.log(`Module ${index + 1} clicked: ${module.title}`)}
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

export default EVInfrastructurePage;
