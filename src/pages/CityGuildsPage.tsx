
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Book, BookOpen, Award, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CityGuildsPage = () => {
  const navigate = useNavigate();
  
  const materials = [
    {
      title: "Level 2 Electrical Installation",
      description: "Essential materials for Level 2 qualification including practical tasks, theory modules, and assessment preparation.",
      icon: <Book className="h-8 w-8 text-[#FFC900]" />,
      onClick: () => {
        navigate('/apprentices/study-materials/city-guilds/level-2');
      }
    },
    {
      title: "Level 3 Electrical Installation",
      description: "Advanced materials covering complex installations, fault finding, and inspection & testing preparations.",
      icon: <GraduationCap className="h-8 w-8 text-[#FFC900]" />,
      onClick: () => {
        navigate('/apprentices/study-materials/city-guilds/level-3');
      }
    },
    {
      title: "MOET Level 3",
      description: "Maintenance and Operations Engineering Technician (Electrical) qualification materials, covering industrial maintenance and operations.",
      icon: <Award className="h-8 w-8 text-[#FFC900]" />,
      onClick: () => {
        navigate('/apprentices/study-materials/city-guilds/moet');
      }
    },
    {
      title: "AM2 Assessment Materials",
      description: "Comprehensive preparation materials for the AM2 assessment, including practical scenarios and mock tests.",
      icon: <BookOpen className="h-8 w-8 text-[#FFC900]" />,
      onClick: () => {
        navigate('/apprentices/study-materials/city-guilds/am2');
      }
    }
  ];

  // Add custom back navigation function
  const handleBackClick = () => {
    navigate('/apprentices/study-materials');
  };

  // Simple animation variants for card entrance
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="City & Guilds Study Materials"
          description="Access comprehensive study materials for City & Guilds electrical qualifications."
          customBackAction={handleBackClick}
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {materials.map((material, index) => (
            <motion.div key={index} variants={item}>
              <Card 
                className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer h-full"
                onClick={material.onClick}
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="p-3 bg-[#FFC900]/10 rounded-lg mb-2 sm:mb-0">
                      {material.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[#FFC900] font-medium text-lg mb-2">{material.title}</h3>
                      <p className="text-[#FFC900]/70 text-sm mb-4">{material.description}</p>
                      <Button 
                        className="w-full bg-[#FFC900] hover:bg-[#e5b700] text-[#151812] transition-all duration-300"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent double navigation
                          material.onClick();
                        }}
                      >
                        Access Materials
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default CityGuildsPage;
