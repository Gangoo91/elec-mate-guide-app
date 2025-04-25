
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, FileText, Speaker, Wifi, Clipboard, Settings } from "lucide-react";

const FireAlarmSystemsPage = () => {
  const navigate = useNavigate();
  
  const modules = [
    {
      title: "System Categories",
      description: "Understanding BS 5839 system categories and design requirements.",
      icon: <FileText className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Detection Technologies",
      description: "Heat, smoke, and multi-sensor detection principles and applications.",
      icon: <Wifi className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Alarm Systems",
      description: "Sounders, beacons, and voice alarm system design and installation.",
      icon: <Speaker className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Installation Practices",
      description: "Cable types, wiring methods, and system installation requirements.",
      icon: <Settings className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Testing & Commissioning",
      description: "System testing, certification, and handover procedures.",
      icon: <Clipboard className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Maintenance",
      description: "Routine testing, maintenance schedules, and fault finding.",
      icon: <Bell className="h-6 w-6 text-[#FFC900]" />
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader 
          title="Fire Alarm Systems"
          description="Fire detection and alarm systems design, installation and maintenance to BS 5839 standards."
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

export default FireAlarmSystemsPage;
