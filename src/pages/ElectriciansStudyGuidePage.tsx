
import React from 'react';
import { Book } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ElectriciansStudyGuidePage = () => {
  const topics = [
    {
      title: "Solar PV Installation",
      description: "Installation, maintenance and troubleshooting of solar photovoltaic systems.",
      comingSoon: false
    },
    {
      title: "Energy Storage Systems",
      description: "Battery technologies, sizing, installation and integration with renewable energy systems.",
      comingSoon: false
    },
    {
      title: "Building Management Systems",
      description: "BMS architecture, protocols, programming and maintenance for electrical control systems.",
      comingSoon: false
    },
    {
      title: "Smart Home Technologies",
      description: "Home automation, IoT device integration, and smart control systems.",
      comingSoon: false
    },
    {
      title: "EV Infrastructure",
      description: "Electric vehicle charging points, load management and installation standards.",
      comingSoon: false
    },
    {
      title: "Data Networks",
      description: "Structured cabling, network architecture and fiber optic installations for electricians.",
      comingSoon: false
    },
    {
      title: "Energy Efficiency",
      description: "Heat pumps, energy monitoring and management systems for commercial and domestic applications.",
      comingSoon: false
    },
    {
      title: "Emergency Lighting",
      description: "Design, installation and testing of emergency lighting systems to BS 5266.",
      comingSoon: false
    },
    {
      title: "Fire Alarm Systems",
      description: "Fire detection and alarm systems design, installation and maintenance to BS 5839.",
      comingSoon: false
    },
    {
      title: "Access Control",
      description: "Security systems, access control technologies and integration with building management systems.",
      comingSoon: false
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader 
          title="Professional Study Materials"
          description="Comprehensive learning resources for electricians to expand knowledge and skills in specialized areas."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {topics.map((topic, index) => (
            <Card key={index} className="bg-[#22251e] border-[#FFC900]/20 h-full">
              <CardHeader>
                <CardTitle className="text-[#FFC900] flex items-center gap-2 text-xl">
                  <Book className="h-5 w-5" />
                  {topic.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#FFC900]/70 mb-4 text-sm">
                  {topic.description}
                </p>
                {topic.comingSoon ? (
                  <div className="text-[#FFC900]/50 text-sm italic">
                    Coming soon
                  </div>
                ) : (
                  <button className="bg-[#FFC900] text-black px-4 py-2 rounded-md hover:bg-[#FFC900]/90 transition-colors text-sm">
                    View Materials
                  </button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ElectriciansStudyGuidePage;
