
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import GlassCard from "@/components/shared/GlassCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, TestTube, FileText, GraduationCap, CheckSquare } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const PracticeExamsPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleNavigate = (path: string) => {
    if (path === '/apprentices/mock-exams/level2') {
      navigate('/apprentices/mock-exams/level2');
    } else if (path === '/apprentices/study-materials/city-guilds/am2/mock-exams') {
      navigate('/apprentices/study-materials/city-guilds/am2/mock-exams');
    } else {
      toast({
        title: "Coming Soon",
        description: "This exam section is currently being developed. Check back soon!",
        variant: "default",
      });
    }
  };

  const examCategories = [
    {
      title: "Level 2 Exams",
      description: "Practice assessments for Level 2 qualifications including core units and electrical principles.",
      icon: <Book className="h-8 w-8 text-[#FFC900] mb-2" />,
      path: "/apprentices/mock-exams/level2",
      available: true
    },
    {
      title: "Level 3 Exams",
      description: "Assessment preparation for Level 3 qualifications covering advanced principles and practices.",
      icon: <GraduationCap className="h-8 w-8 text-[#FFC900] mb-2" />,
      path: "/apprentices/mock-exams/level3",
      available: false
    },
    {
      title: "MOET Exams",
      description: "Practice tests for Maintenance Operations Engineering Technician modules.",
      icon: <TestTube className="h-8 w-8 text-[#FFC900] mb-2" />,
      path: "/apprentices/mock-exams/moet",
      available: false
    },
    {
      title: "AM2 Mock Assessments",
      description: "Simulation exams to prepare for the AM2 practical assessment requirements.",
      icon: <CheckSquare className="h-8 w-8 text-[#FFC900] mb-2" />,
      path: "/apprentices/study-materials/city-guilds/am2/mock-exams",
      available: true
    },
    {
      title: "Inspection & Testing",
      description: "Practice assessments for 2391, 2394 and 2395 inspection and testing qualifications.",
      icon: <FileText className="h-8 w-8 text-[#FFC900] mb-2" />,
      path: "/apprentices/mock-exams/inspection-testing",
      available: false
    },
    {
      title: "HNC Exams",
      description: "Higher National Certificate electrical engineering practice assessments.",
      icon: <GraduationCap className="h-8 w-8 text-[#FFC900] mb-2" />,
      path: "/apprentices/mock-exams/hnc",
      available: false
    },
    {
      title: "HND Exams",
      description: "Higher National Diploma electrical engineering mock assessments and preparation.",
      icon: <GraduationCap className="h-8 w-8 text-[#FFC900] mb-2" />,
      path: "/apprentices/mock-exams/hnd",
      available: false
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader 
          title="Practice Exams"
          description="Test your knowledge with mock exams and quizzes covering various electrical qualifications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {examCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300"
            >
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center mb-4">
                  {category.icon}
                  <h3 className="text-[#FFC900] font-semibold text-xl mb-2">{category.title}</h3>
                </div>
                <p className="text-[#FFC900]/70 text-sm mb-4">{category.description}</p>
                
                <Button 
                  className="w-full bg-[#FFC900] hover:bg-[#e5b700] text-[#151812]"
                  onClick={() => handleNavigate(category.path)}
                >
                  {category.available ? "View Exams" : "Coming Soon"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <GlassCard className="mt-8">
          <div className="text-center py-4">
            <h3 className="text-[#FFC900] font-medium text-lg mb-2">Mock Exam Benefits</h3>
            <p className="text-[#FFC900]/70">
              Regular practice with our mock exams will help you become familiar with exam formats, 
              identify knowledge gaps, and build confidence before your official assessments.
            </p>
          </div>
        </GlassCard>
      </div>
    </MainLayout>
  );
};

export default PracticeExamsPage;
