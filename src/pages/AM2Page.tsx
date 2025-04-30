
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Book, Clipboard, Activity, Settings } from "lucide-react";

const AM2Page = () => {
  const navigate = useNavigate();
  
  const handleBackToCityGuilds = () => {
    navigate('/apprentices/study-materials/city-guilds');
  };

  const mainComponents = [
    {
      title: "Installation",
      description: "Complete a full installation including consumer unit, containment systems, wiring and accessories to industry standards.",
      icon: <Settings className="h-10 w-10 text-[#FFC900] mb-4" />,
      key_points: [
        "Circuit installation and wiring",
        "Consumer unit assembly",
        "Cable containment systems",
        "Termination techniques"
      ]
    },
    {
      title: "Inspection & Testing",
      description: "Perform comprehensive testing and inspection of electrical installations according to BS 7671.",
      icon: <Clipboard className="h-10 w-10 text-[#FFC900] mb-4" />,
      key_points: [
        "Initial verification",
        "Continuity testing",
        "Insulation resistance tests",
        "Documentation completion"
      ]
    },
    {
      title: "Fault Diagnosis",
      description: "Identify and rectify faults within electrical systems using systematic troubleshooting.",
      icon: <Activity className="h-10 w-10 text-[#FFC900] mb-4" />,
      key_points: [
        "Analytical fault finding",
        "Safe isolation procedures",
        "Component replacement",
        "System restoration"
      ]
    },
    {
      title: "Safe Isolation",
      description: "Demonstrate correct procedures for safely isolating electrical circuits before work begins.",
      icon: <Settings className="h-10 w-10 text-[#FFC900] mb-4" />,
      key_points: [
        "Proving tools functionality",
        "Lock-off procedures",
        "Warning signage",
        "Testing for dead circuit"
      ]
    }
  ];

  const sections = [
    {
      title: "Core Units",
      description: "Essential learning materials covering the core AM2 assessment units and requirements.",
      icon: <BookOpen className="h-6 w-6 text-[#FFC900]" />,
      onClick: () => navigate('/apprentices/study-materials/city-guilds/am2/core-units')
    },
    {
      title: "Mock Exams",
      description: "Practice tests and mock assessments to prepare for your AM2 qualification.",
      icon: <Book className="h-6 w-6 text-[#FFC900]" />,
      onClick: () => navigate('/apprentices/study-materials/city-guilds/am2/mock-exams')
    },
    {
      title: "Assessment Guidelines",
      description: "Understand the standards and criteria that assessors will use to evaluate your performance.",
      icon: <FileText className="h-6 w-6 text-[#FFC900]" />
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
        
        <div className="mt-8 mb-12">
          <h2 className="text-2xl font-bold text-[#FFC900] mb-6">AM2 Main Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainComponents.map((component, index) => (
              <Card key={index} className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    {component.icon}
                    <h3 className="text-[#FFC900] font-semibold text-xl mb-3">{component.title}</h3>
                  </div>
                  <p className="text-[#FFC900]/70 text-sm mb-4">{component.description}</p>
                  <div className="bg-[#1a1c16] p-4 rounded-md">
                    <h4 className="text-[#FFC900] font-medium mb-2">Key Elements:</h4>
                    <ul className="list-disc list-inside text-[#FFC900]/70 text-sm space-y-1">
                      {component.key_points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-[#FFC900] mb-6">Study Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <Card 
              key={index} 
              className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer"
              onClick={section.onClick}
            >
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
        
        <div className="mt-8 flex justify-center">
          <Button 
            variant="outline" 
            className="border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
            onClick={() => navigate('/apprentices/study-materials/city-guilds/nvq3')}
          >
            Explore Related NVQ3 Materials
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default AM2Page;
