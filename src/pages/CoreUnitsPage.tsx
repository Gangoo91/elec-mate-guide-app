
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/navigation/BackButton";

const CoreUnitsPage = () => {
  const navigate = useNavigate();

  const units = [
    {
      id: "201",
      title: "Unit 201",
      description: "Health & Safety",
      path: "/apprentices/study-materials/nvq2/core-units/201"
    },
    {
      id: "202",
      title: "Unit 202",
      description: "Electrical Scientific Principles",
      path: "/apprentices/study-materials/nvq2/core-units/202"
    },
    {
      id: "203",
      title: "Unit 203",
      description: "Electrical Installation Technology",
      path: "/apprentices/study-materials/nvq2/core-units/203"
    },
    {
      id: "204",
      title: "Unit 204",
      description: "Installation of Wiring Systems",
      path: "/apprentices/study-materials/nvq2/core-units/204"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <div className="mb-4">
          <BackButton />
        </div>
        
        <PageHeader 
          title="Core Units"
          description="Essential units for NVQ Level 2 Electrical Installation"
          hideBackButton={true}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {units.map((unit) => (
            <Card 
              key={unit.id}
              className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all cursor-pointer transform hover:scale-105 duration-200"
              onClick={() => navigate(unit.path)}
            >
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="text-[#FFC900] h-6 w-6" />
                  <CardTitle className="text-[#FFC900] text-xl md:text-2xl">{unit.title}</CardTitle>
                </div>
                <CardDescription className="text-[#FFC900]/70 text-base md:text-lg">
                  {unit.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <p className="text-[#FFC900]/70 text-sm">Click to view unit details</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default CoreUnitsPage;
