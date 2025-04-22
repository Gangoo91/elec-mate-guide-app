
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react";

const CoreUnitsPage = () => {
  const navigate = useNavigate();

  const units = [
    {
      id: "201",
      title: "Unit 201: Health & Safety",
      description: "Learn about electrical safety, risk assessment, PPE, and safety protocols",
      path: "/apprentices/study-materials/nvq2/core-units/201"
    },
    {
      id: "202",
      title: "Unit 202: Electrical Scientific Principles",
      description: "Understanding Ohm's law, AC/DC theory, and circuit fundamentals",
      path: "/apprentices/study-materials/nvq2/core-units/202"
    },
    {
      id: "203",
      title: "Unit 203: Electrical Installation Technology",
      description: "Explore wiring systems, cable selection, and installation methods",
      path: "/apprentices/study-materials/nvq2/core-units/203"
    },
    {
      id: "204",
      title: "Unit 204: Installation of Wiring Systems",
      description: "Master conduit and trunking installation, testing, and verification",
      path: "/apprentices/study-materials/nvq2/core-units/204"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-16">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#FFC900] mb-6 text-center">NVQ Level 2 Core Units</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
          {units.map((unit) => (
            <Card 
              key={unit.id}
              className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all cursor-pointer"
              onClick={() => navigate(unit.path)}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BookOpen className="text-[#FFC900] h-6 w-6" />
                  <CardTitle className="text-[#FFC900]">{unit.title}</CardTitle>
                </div>
                <CardDescription className="text-[#FFC900]/70">
                  {unit.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[#FFC900]/70">Click to start learning</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default CoreUnitsPage;
