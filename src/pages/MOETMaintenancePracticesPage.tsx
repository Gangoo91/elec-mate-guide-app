
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Shield, FileCheck } from "lucide-react";

const MOETMaintenancePracticesPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge');
  };

  const topics = [
    {
      title: "Preventive Maintenance",
      description: "Scheduled maintenance procedures and best practices.",
      icon: <Wrench className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Safety Protocols",
      description: "Essential safety procedures and regulations in maintenance.",
      icon: <Shield className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Documentation",
      description: "Maintenance records, reports, and documentation procedures.",
      icon: <FileCheck className="h-6 w-6 text-[#FFC900]" />
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Maintenance Practices"
          description="Best practices for electrical maintenance and safety procedures"
          customBackAction={handleBackClick}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {topics.map((topic, index) => (
            <Card 
              key={index} 
              className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300"
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  {topic.icon}
                  <div>
                    <h3 className="text-[#FFC900] font-medium text-lg mb-2">{topic.title}</h3>
                    <p className="text-[#FFC900]/70 text-sm">{topic.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default MOETMaintenancePracticesPage;
