
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Book, FileText } from "lucide-react";

const HigherLearningPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials');
  };

  const topics = [
    {
      title: "HNC Resources",
      description: "Higher National Certificate study materials and course content.",
      icon: <Book className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "HND Materials",
      description: "Higher National Diploma advanced electrical engineering topics.",
      icon: <GraduationCap className="h-6 w-6 text-[#FFC900]" />
    },
    {
      title: "Degree Pathways",
      description: "Information about progression to electrical engineering degrees.",
      icon: <FileText className="h-6 w-6 text-[#FFC900]" />
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Higher Learning"
          description="Advanced electrical engineering education resources"
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

export default HigherLearningPage;
