
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FileText, Book } from "lucide-react";

const MOETCoreKnowledgePage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/content');
  };

  const topics = [
    {
      title: "Electrical Principles",
      description: "Understanding fundamental electrical theories, components, and circuit analysis.",
      icon: <Book className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Maintenance Practices",
      description: "Best practices for electrical maintenance, testing procedures, and safety protocols.",
      icon: <FileText className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Engineering Operations",
      description: "Core principles of engineering operations in electrical installations and systems.",
      icon: <BookOpen className="h-6 w-6 text-[#FFC900]" />
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="MOET Core Knowledge"
          description="Essential knowledge covering electrical principles, maintenance practices, and engineering operations"
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

export default MOETCoreKnowledgePage;
