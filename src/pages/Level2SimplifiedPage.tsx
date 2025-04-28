
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import GlassCard from "@/components/shared/GlassCard";
import { Book, BookOpen, List, BookText, CheckCircle } from "lucide-react";
import ResourceCard from "@/components/shared/ResourceCard";

const Level2SimplifiedPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-2');
  };

  const simplifiedTopics = [
    {
      title: "Electrical Basics - Plain and Simple",
      description: "The fundamentals of electricity explained with everyday examples and clear illustrations.",
      icon: <Book className="h-6 w-6 text-[#FFC900]" />,
      link: "/apprentices/study-materials/city-guilds/level-2/simplified/basics"
    },
    {
      title: "Circuits Made Easy",
      description: "Learn about series and parallel circuits through interactive diagrams and real-world comparisons.",
      icon: <List className="h-6 w-6 text-[#FFC900]" />,
      link: "/apprentices/study-materials/city-guilds/level-2/simplified/circuits"
    },
    {
      title: "Wiring Regulations - The Key Points",
      description: "Break down complicated regulations into simple rules you can remember and apply.",
      icon: <BookOpen className="h-6 w-6 text-[#FFC900]" />,
      link: "/apprentices/study-materials/city-guilds/level-2/simplified/regulations"
    },
    {
      title: "Practical Installation Steps",
      description: "Step-by-step guides with photos and diagrams for common installation tasks.",
      icon: <CheckCircle className="h-6 w-6 text-[#FFC900]" />,
      link: "/apprentices/study-materials/city-guilds/level-2/simplified/installation"
    },
    {
      title: "Troubleshooting Without the Stress",
      description: "Simple approaches to finding and fixing common electrical problems.",
      icon: <BookText className="h-6 w-6 text-[#FFC900]" />,
      link: "/apprentices/study-materials/city-guilds/level-2/simplified/troubleshooting"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Level 2 Simplified Learning"
          description="Easy-to-understand modules with practical examples and step-by-step guides."
          customBackAction={handleBackClick}
        />
        
        <div className="mb-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h3 className="text-[#FFC900] font-medium text-xl mb-4">Why Simplified Learning?</h3>
          <p className="text-[#FFC900]/80 mb-4">
            Sometimes electrical theory can feel overwhelming. Our simplified learning modules break down 
            complex topics into bite-sized, easy-to-understand content designed specifically for visual 
            and practical learners.
          </p>
          <p className="text-[#FFC900]/80">
            Each section uses everyday examples, clear illustrations, and step-by-step instructions to 
            help you master the essential concepts without getting lost in technical jargon.
          </p>
        </div>
        
        <h3 className="text-[#FFC900] font-medium text-xl mb-6">Simplified Learning Topics</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {simplifiedTopics.map((topic, index) => (
            <ResourceCard
              key={index}
              title={topic.title}
              description={topic.description}
              icon={topic.icon}
              fullCardLink={topic.link}
            />
          ))}
        </div>
        
        <GlassCard className="mt-8 p-6">
          <div className="text-center">
            <h3 className="text-[#FFC900] font-medium text-xl mb-4">Learning Your Way</h3>
            <p className="text-[#FFC900]/80 max-w-2xl mx-auto">
              These simplified modules complement your formal training by providing alternative explanations 
              and practical approaches. Use them alongside your core unit studies to reinforce your understanding
              and build confidence in your electrical knowledge.
            </p>
          </div>
        </GlassCard>
      </div>
    </MainLayout>
  );
};

export default Level2SimplifiedPage;
