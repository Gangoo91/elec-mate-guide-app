
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, Cable, Lightning, Wrench, Shield, FileText } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const SolarPVInstallationPage = () => {
  const navigate = useNavigate();
  
  const modules = [
    {
      title: "System Components",
      description: "Learn about solar panels, inverters, mounting systems, and electrical components.",
      icon: <Battery className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Installation Process",
      description: "Step-by-step guide to installing solar PV systems safely and efficiently.",
      icon: <Wrench className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Electrical Integration",
      description: "Connection to existing electrical systems, grid integration, and earthing requirements.",
      icon: <Lightning className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Wiring and Connections",
      description: "DC and AC wiring methods, cable sizing, and connection techniques.",
      icon: <Cable className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Safety Procedures",
      description: "Working at height, electrical safety, and risk assessment protocols.",
      icon: <Shield className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Documentation",
      description: "System certification, handover documents, and maintenance records.",
      icon: <FileText className="h-6 w-6 text-[#FFC900]" />
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader 
          title="Solar PV Installation"
          description="Comprehensive guide to solar photovoltaic system installation, maintenance, and troubleshooting."
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

export default SolarPVInstallationPage;
