
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle, Settings, Clipboard, Activity, ShieldAlert } from "lucide-react";

const AM2MockExamsPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/am2');
  };

  const handleStartExam = (examType: string) => {
    toast({
      title: "Coming Soon",
      description: `The ${examType} mock exam will be available soon!`,
      variant: "default",
    });
  };

  const mockExams = [
    {
      title: "Installation Mock Assessment",
      description: "Practice assessment covering consumer unit installation, containment systems, and circuit installation.",
      icon: <Settings className="h-8 w-8 text-[#FFC900] mb-2" />,
      duration: "2.5 hours",
      questions: "Multiple practical tasks"
    },
    {
      title: "Inspection & Testing Mock Assessment",
      description: "Practice testing procedures including continuity, insulation resistance, and documentation.",
      icon: <Clipboard className="h-8 w-8 text-[#FFC900] mb-2" />,
      duration: "1.5 hours",
      questions: "8 practical tests"
    },
    {
      title: "Fault Diagnosis Mock Test",
      description: "Scenario-based fault finding exercises with electrical installation faults.",
      icon: <Activity className="h-8 w-8 text-[#FFC900] mb-2" />,
      duration: "1 hour",
      questions: "5 fault scenarios"
    },
    {
      title: "Safe Isolation Practice Assessment",
      description: "Step-by-step safe isolation procedures and verification.",
      icon: <ShieldAlert className="h-8 w-8 text-[#FFC900] mb-2" />,
      duration: "30 minutes",
      questions: "Practical demonstration"
    },
    {
      title: "Full AM2 Mock Assessment",
      description: "Complete simulation of the AM2 assessment covering all components and time constraints.",
      icon: <CheckCircle className="h-8 w-8 text-[#FFC900] mb-2" />,
      duration: "6 hours",
      questions: "Complete assessment"
    },
    {
      title: "Theory Knowledge Check",
      description: "Multiple-choice questions covering the theoretical knowledge required for the AM2.",
      icon: <FileText className="h-8 w-8 text-[#FFC900] mb-2" />,
      duration: "45 minutes",
      questions: "40 questions"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="AM2 Mock Exams"
          description="Practice assessments to prepare for your AM2 qualification"
          customBackAction={handleBackClick}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {mockExams.map((exam, index) => (
            <Card key={index} className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center mb-4">
                  {exam.icon}
                  <h3 className="text-[#FFC900] font-semibold text-xl mb-2">{exam.title}</h3>
                </div>
                <p className="text-[#FFC900]/70 text-sm mb-4">{exam.description}</p>
                
                <div className="flex justify-between text-[#FFC900]/70 text-sm mb-4">
                  <span>Duration: {exam.duration}</span>
                  <span>{exam.questions}</span>
                </div>
                
                <Button 
                  className="w-full bg-[#FFC900] hover:bg-[#e5b700] text-[#151812]"
                  onClick={() => handleStartExam(exam.title)}
                >
                  Start Mock Exam
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 bg-[#22251e] border-[#FFC900]/20 rounded-lg border p-6">
          <h3 className="text-[#FFC900] font-medium text-lg mb-2">About AM2 Mock Exams</h3>
          <p className="text-[#FFC900]/70">
            These mock exams are designed to simulate the actual AM2 assessment conditions and requirements.
            Regular practice with these assessments will help you become comfortable with the format, timing,
            and expectations of the official AM2 qualification.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default AM2MockExamsPage;
