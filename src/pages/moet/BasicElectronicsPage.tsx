
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

const BasicElectronicsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles');
  };

  const topics = [
    {
      title: "Semiconductor Basics",
      description: "P-N Junctions, Diodes, Transistors, and Basic Semiconductor Materials",
      onClick: () => navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/basic-electronics/semiconductors')
    },
    {
      title: "Electronic Components",
      description: "Active Components, Passive Components, Sensors and Transducers, Display Devices",
      onClick: () => navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/basic-electronics/components')
    },
    {
      title: "Basic Circuits",
      description: "Amplifier Circuits, Power Supply Circuits, Digital Logic Circuits, Timer Circuits",
      onClick: () => navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/electrical-principles/basic-electronics/circuits')
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Basic Electronics"
          description="Electronic components, semiconductors, and basic electronic circuits"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 space-y-6">
          {topics.map((topic, index) => (
            <Card 
              key={index}
              className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer"
              onClick={topic.onClick}
            >
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-[#FFC900] mb-2">{topic.title}</h3>
                <p className="text-[#FFC900]/80">{topic.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default BasicElectronicsPage;
