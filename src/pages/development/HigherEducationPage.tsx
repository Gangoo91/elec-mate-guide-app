
import React from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

const HigherEducationPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians/development');
  };

  const educationPaths = [
    {
      title: "Bachelor's Degree in Electrical Engineering",
      description: "Full-time or part-time university programs focusing on electrical engineering principles and advanced theory.",
      duration: "3-4 years full-time"
    },
    {
      title: "HNC/HND in Electrical Engineering",
      description: "Higher National qualifications combining practical skills with theoretical knowledge.",
      duration: "1-2 years"
    },
    {
      title: "Foundation Degree",
      description: "Work-based learning combining practical skills with academic study.",
      duration: "2 years"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <PageHeader 
          title="Higher Education"
          description="Advance your career with higher education qualifications in electrical engineering."
          customBackAction={handleBackClick}
        />
        
        <div className="grid gap-6 mt-6">
          {educationPaths.map((path, index) => (
            <Card key={index} className="bg-[#22251e] border-[#FFC900]/20">
              <CardContent className="pt-6">
                <h3 className="text-[#FFC900] text-xl font-medium mb-2">{path.title}</h3>
                <p className="text-[#FFC900]/70 mb-2">{path.description}</p>
                <p className="text-[#FFC900]/50 text-sm">Duration: {path.duration}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default HigherEducationPage;
