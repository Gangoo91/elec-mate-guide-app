
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, FileText, Settings, Clipboard, Clock, Battery } from "lucide-react";

const EmergencyLightingPage = () => {
  const navigate = useNavigate();
  
  const modules = [
    {
      title: "Regulatory Requirements",
      description: "Understanding BS 5266 standards and Building Regulations for emergency lighting.",
      icon: <FileText className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "System Design",
      description: "Emergency lighting design principles, coverage requirements, and risk assessment.",
      icon: <Settings className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Installation Practices",
      description: "Best practices for installing emergency lighting systems and wiring considerations.",
      icon: <Lightbulb className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Testing Procedures",
      description: "Monthly and annual testing routines and documentation requirements.",
      icon: <Clipboard className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Duration Testing",
      description: "Full duration testing procedures and fault-finding techniques.",
      icon: <Clock className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Battery Systems",
      description: "Battery technologies, maintenance requirements, and replacement schedules.",
      icon: <Battery className="h-6 w-6 text-[#FFC900]" />
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader 
          title="Emergency Lighting"
          description="Design, installation and testing of emergency lighting systems to BS 5266 standards."
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

export default EmergencyLightingPage;
