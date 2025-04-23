
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookText, FileVideo, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface UnitTopic {
  title: string;
  content: string[];
  unitNumber: string;
  path: string;
}

const coreUnits: UnitTopic[] = [
  {
    unitNumber: "Unit 201",
    title: "Health & Safety",
    content: [
      "Electrical safety fundamentals",
      "Risk assessment procedures",
      "PPE and safety equipment",
      "First aid requirements",
      "Fire safety protocols"
    ],
    path: "/apprentices/study-materials/nvq2/core-units/201"
  },
  {
    unitNumber: "Unit 202",
    title: "Electrical Scientific Principles",
    content: [
      "Ohm's law and basic circuits",
      "AC and DC theory",
      "Resistance and impedance",
      "Power calculations",
      "Circuit diagrams and symbols"
    ],
    path: "/apprentices/study-materials/nvq2/core-units/202"
  },
  {
    unitNumber: "Unit 203",
    title: "Electrical Installation Technology",
    content: [
      "Wiring systems and methods",
      "Cable selection and sizing",
      "Earthing and bonding",
      "Protection devices",
      "Testing and verification"
    ],
    path: "/apprentices/study-materials/nvq2/core-units/203"
  },
  {
    unitNumber: "Unit 204",
    title: "Installation of Wiring Systems",
    content: [
      "Conduit and trunking",
      "Cable installation techniques",
      "Fixing methods and tools",
      "Circuit arrangements",
      "Inspection and testing"
    ],
    path: "/apprentices/study-materials/nvq2/core-units/204"
  }
];

const CoreUnitsList = () => {
  const navigate = useNavigate();
  
  const handleUnitClick = (path: string) => {
    navigate(path);
  };
  
  return (
    <div className="grid gap-6">
      {coreUnits.map((unit, index) => (
        <Card 
          key={index} 
          className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 hover:scale-105 transition-all cursor-pointer"
          onClick={() => handleUnitClick(unit.path)}
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <BookText className="text-[#FFC900] h-6 w-6" />
              <CardTitle className="text-[#FFC900]">{unit.unitNumber}: {unit.title}</CardTitle>
            </div>
            <CardDescription className="text-[#FFC900]/70">
              Core requirements for electrical installation qualification
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-[#22251e]/50 border-[#FFC900]/10 hover:border-[#FFC900]/30 transition-all p-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="text-[#FFC900] h-5 w-5" />
                    <span className="text-[#FFC900]">Study Materials</span>
                  </div>
                </Card>
                <Card className="bg-[#22251e]/50 border-[#FFC900]/10 hover:border-[#FFC900]/30 transition-all p-4">
                  <div className="flex items-center gap-2">
                    <FileVideo className="text-[#FFC900] h-5 w-5" />
                    <span className="text-[#FFC900]">Video Lessons</span>
                  </div>
                </Card>
                <Card className="bg-[#22251e]/50 border-[#FFC900]/10 hover:border-[#FFC900]/30 transition-all p-4">
                  <div className="flex items-center gap-2">
                    <BookText className="text-[#FFC900] h-5 w-5" />
                    <span className="text-[#FFC900]">Assessment</span>
                  </div>
                </Card>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-[#FFC900] font-medium mb-2">Key Topics</h4>
                <ul className="space-y-2">
                  {unit.content.map((topic, topicIndex) => (
                    <li key={topicIndex} className="text-[#FFC900]/70 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFC900]/70"></span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#FFC900]/70 text-sm">Progress</span>
                  <span className="text-[#FFC900]/70 text-sm">0%</span>
                </div>
                <Progress value={0} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CoreUnitsList;
