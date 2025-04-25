
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Fingerprint, Camera, Network, Smartphone, Settings } from "lucide-react";

const AccessControlPage = () => {
  const navigate = useNavigate();
  
  const modules = [
    {
      title: "Access Systems",
      description: "Types of access control systems and their applications in different environments.",
      icon: <Lock className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Biometric Technologies",
      description: "Fingerprint, facial recognition, and other biometric access solutions.",
      icon: <Fingerprint className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "CCTV Integration",
      description: "Integrating access control with video surveillance systems.",
      icon: <Camera className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Network Security",
      description: "IP-based access control systems and cybersecurity considerations.",
      icon: <Network className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Mobile Access",
      description: "Smartphone-based access credentials and management systems.",
      icon: <Smartphone className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "BMS Integration",
      description: "Integrating access control with building management systems.",
      icon: <Settings className="h-6 w-6 text-[#FFC900]" />
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader 
          title="Access Control"
          description="Security systems, access control technologies and integration with building management systems."
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

export default AccessControlPage;
