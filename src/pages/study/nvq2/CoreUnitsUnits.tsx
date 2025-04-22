
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookText, FileVideo, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface UnitTopic {
  title: string;
  content: string[];
}

const coreUnits: UnitTopic[] = [
  {
    title: "Unit 201: Health & Safety",
    content: [
      "Electrical safety fundamentals",
      "Risk assessment procedures",
      "PPE and safety equipment",
      "First aid requirements",
      "Fire safety protocols"
    ]
  },
  {
    title: "Unit 202: Electrical Scientific Principles",
    content: [
      "Ohm's law and basic circuits",
      "AC and DC theory",
      "Resistance and impedance",
      "Power calculations",
      "Circuit diagrams and symbols"
    ]
  },
  {
    title: "Unit 203: Electrical Installation Technology",
    content: [
      "Wiring systems and methods",
      "Cable selection and sizing",
      "Earthing and bonding",
      "Protection devices",
      "Testing and verification"
    ]
  },
  {
    title: "Unit 204: Installation of Wiring Systems",
    content: [
      "Conduit and trunking",
      "Cable installation techniques",
      "Fixing methods and tools",
      "Circuit arrangements",
      "Inspection and testing"
    ]
  }
];

const CoreUnitsUnits = () => {
  const navigate = useNavigate();
  
  return (
    <div className="grid gap-6">
      {coreUnits.map((unit, index) => (
        <Card 
          key={index} 
          className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all cursor-pointer"
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <BookText className="text-[#FFC900] h-6 w-6" />
              <CardTitle className="text-[#FFC900]">{unit.title}</CardTitle>
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

export default CoreUnitsUnits;
