import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Book, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CityGuildsPage = () => {
  const navigate = useNavigate();
  
  const materials = [
    {
      title: "Level 2 Electrical Installation",
      description: "Essential materials for Level 2 qualification including practical tasks, theory modules, and assessment preparation.",
      icon: <Book className="h-6 w-6 text-[#FFC900]" />,
      onClick: () => navigate('/apprentices/study-materials/city-guilds/level-2')
    },
    {
      title: "Level 3 Electrical Installation",
      description: "Advanced materials covering complex installations, fault finding, and inspection & testing preparations.",
      icon: <Book className="h-6 w-6 text-[#FFC900]" />,
      onClick: () => navigate('/apprentices/study-materials/city-guilds/level-3')
    },
    {
      title: "MOET Level 3",
      description: "Maintenance and Operations Engineering Technician (Electrical) qualification materials, covering industrial maintenance and operations.",
      icon: <Book className="h-6 w-6 text-[#FFC900]" />,
      onClick: () => navigate('/apprentices/study-materials/city-guilds/moet')
    },
    {
      title: "AM2 Assessment Materials",
      description: "Comprehensive preparation materials for the AM2 assessment, including practical scenarios and mock tests.",
      icon: <BookOpen className="h-6 w-6 text-[#FFC900]" />,
      onClick: () => navigate('/apprentices/study-materials/city-guilds/am2')
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="City & Guilds Study Materials"
          description="Access comprehensive study materials for City & Guilds electrical qualifications."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {materials.map((material, index) => (
            <Card key={index} className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  {material.icon}
                  <div>
                    <h3 className="text-[#FFC900] font-medium text-lg mb-2">{material.title}</h3>
                    <p className="text-[#FFC900]/70 text-sm mb-4">{material.description}</p>
                    <Button 
                      className="w-full bg-[#FFC900] hover:bg-[#e5b700] text-[#151812]"
                      onClick={material.onClick}
                    >
                      Access Materials
                    </Button>
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

export default CityGuildsPage;
