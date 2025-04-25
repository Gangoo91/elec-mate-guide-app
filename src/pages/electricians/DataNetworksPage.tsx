
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Network, Cable, Wifi, FileText, Server, Settings } from "lucide-react";

const DataNetworksPage = () => {
  const navigate = useNavigate();
  
  const modules = [
    {
      title: "Structured Cabling",
      description: "Design and installation of structured cabling systems for commercial buildings.",
      icon: <Cable className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Network Architecture",
      description: "Understanding network layouts, topologies, and infrastructure requirements.",
      icon: <Network className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Fiber Optics",
      description: "Fiber optic cable types, termination methods, and testing procedures.",
      icon: <Settings className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Wireless Networks",
      description: "Installation and configuration of wireless access points and networks.",
      icon: <Wifi className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Server Rooms",
      description: "Power, cooling, and infrastructure requirements for server and comms rooms.",
      icon: <Server className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Standards & Testing",
      description: "Regulatory requirements, testing protocols, and certification processes.",
      icon: <FileText className="h-6 w-6 text-[#FFC900]" />
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader 
          title="Data Networks"
          description="Structured cabling, network architecture, and fiber optic installations for modern building infrastructure."
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

export default DataNetworksPage;
