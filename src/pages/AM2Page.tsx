
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FileText, Book } from "lucide-react";

const AM2Page = () => {
  const navigate = useNavigate();
  
  const handleBackToCityGuilds = () => {
    navigate('/apprentices/study-materials/city-guilds');
  };

  const sections = [
    {
      title: "Core Units",
      description: "Essential units covering installation, inspection & testing, and fault finding required for AM2 assessment.",
      icon: <BookOpen className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Mock Exams",
      description: "Practice assessments to help you prepare for the AM2 examination.",
      icon: <FileText className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Simplified Learning",
      description: "Break down of complex topics into easy-to-understand modules with practical examples.",
      icon: <Book className="h-6 w-6 text-[#FFC900]" />
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="AM2 Assessment Materials"
          description="Comprehensive preparation materials for the AM2 assessment"
          customBackAction={handleBackToCityGuilds}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {sections.map((section, index) => (
            <Card key={index} className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  {section.icon}
                  <div>
                    <h3 className="text-[#FFC900] font-medium text-lg mb-2">{section.title}</h3>
                    <p className="text-[#FFC900]/70 text-sm">{section.description}</p>
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

export default AM2Page;
