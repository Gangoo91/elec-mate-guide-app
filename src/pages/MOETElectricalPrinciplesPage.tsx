
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { CircuitBoard, Bolt, Battery } from "lucide-react";

const MOETElectricalPrinciplesPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge');
  };

  const topics = [
    {
      title: "Circuit Theory",
      description: "Understanding electrical circuits, components, and their interactions.",
      icon: <CircuitBoard className="h-6 w-6 text-[#FFC900]" />,
      path: "/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/circuit-theory"
    },
    {
      title: "Power Systems",
      description: "Power generation, distribution, and transmission fundamentals.",
      icon: <Bolt className="h-6 w-6 text-[#FFC900]" />,
      path: "/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/power-systems"
    },
    {
      title: "Basic Electronics",
      description: "Electronic components, semiconductors, and basic electronic circuits.",
      icon: <Battery className="h-6 w-6 text-[#FFC900]" />,
      path: "/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/basic-electronics"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Electrical Principles"
          description="Fundamental electrical theories and concepts for MOET qualification"
          customBackAction={handleBackClick}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {topics.map((topic, index) => (
            <Card 
              key={index} 
              className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer"
              onClick={() => navigate(topic.path)}
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

export default MOETElectricalPrinciplesPage;
