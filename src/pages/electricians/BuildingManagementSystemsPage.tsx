
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Book, Tool, Shield } from "lucide-react";

const BuildingManagementSystemsPage = () => {
  const navigate = useNavigate();
  
  const modules = [
    {
      title: "BMS Architecture",
      description: "Understanding building management system components and architecture.",
      icon: <Settings className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Control Systems",
      description: "Programming and configuring BMS control systems and protocols.",
      icon: <Tool className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Integration",
      description: "Integrating different building systems and protocols.",
      icon: <Book className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Maintenance",
      description: "System maintenance, troubleshooting, and optimization.",
      icon: <Shield className="h-6 w-6 text-[#FFC900]" />
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader 
          title="Building Management Systems"
          description="Learn about BMS architecture, protocols, programming, and maintenance for electrical control systems."
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

export default BuildingManagementSystemsPage;
