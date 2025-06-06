
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Battery, FileText, Book, BookOpen } from "lucide-react";

const SolarPVInstallationPage = () => {
  const navigate = useNavigate();
  
  const modules = [
    {
      title: "System Components",
      description: "Learn about solar panels, inverters, mounting systems, and electrical components.",
      icon: <Battery className="h-6 w-6 text-[#FFC900]" />,
      path: "/electricians/solar-pv-installation/system-components"
    },
    {
      title: "Installation Process",
      description: "Step-by-step guide to installing solar PV systems safely and efficiently.",
      icon: <Book className="h-6 w-6 text-[#FFC900]" />,
      path: "/electricians/solar-pv-installation/installation-process"
    },
    {
      title: "Electrical Integration",
      description: "Connection to existing electrical systems, grid integration, and earthing requirements.",
      icon: <BookOpen className="h-6 w-6 text-[#FFC900]" />,
      path: "/electricians/solar-pv-installation/electrical-integration"
    },
    {
      title: "Wiring and Connections",
      description: "DC and AC wiring methods, cable sizing, and connection techniques.",
      icon: <FileText className="h-6 w-6 text-[#FFC900]" />,
      path: "/electricians/solar-pv-installation/wiring-connections"
    },
    {
      title: "Safety Procedures",
      description: "Working at height, electrical safety, and risk assessment protocols.",
      icon: <Book className="h-6 w-6 text-[#FFC900]" />,
      path: "/electricians/solar-pv-installation/safety-procedures"
    },
    {
      title: "Documentation",
      description: "System certification, handover documents, and maintenance records.",
      icon: <FileText className="h-6 w-6 text-[#FFC900]" />,
      path: "/electricians/solar-pv-installation/documentation"
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
              onClick={() => navigate(module.path)}
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
