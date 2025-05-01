
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Book, GraduationCap, FileText, TestTube, Wrench, ShieldCheck, Plug, Settings } from "lucide-react";

const EALQualificationsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials');
  };

  const topics = [
    {
      title: "Level 2 EAL Courses",
      description: "Foundation learning in electrical installation covering basic principles and practices.",
      icon: <Book className="h-6 w-6 text-[#FFC900]" />,
      onClick: () => navigate('/apprentices/study-materials/eal/level-2')
    },
    {
      title: "Level 3 EAL Courses",
      description: "Advanced electrical installation techniques and theoretical concepts.",
      icon: <GraduationCap className="h-6 w-6 text-[#FFC900]" />,
      onClick: () => navigate('/apprentices/study-materials/eal/level-3')
    },
    {
      title: "MOET Electrical Courses",
      description: "Maintenance and Operations Engineering Technician courses focused on electrical systems.",
      icon: <Wrench className="h-6 w-6 text-[#FFC900]" />,
      onClick: () => navigate('/apprentices/study-materials/eal/moet')
    },
    {
      title: "Inspection & Testing",
      description: "Specialized courses for electrical inspection and testing certifications.",
      icon: <TestTube className="h-6 w-6 text-[#FFC900]" />,
      onClick: () => navigate('/apprentices/study-materials/eal/inspection-testing')
    },
    {
      title: "Electric Vehicle Installation",
      description: "Training for EV charging point installation and maintenance.",
      icon: <Plug className="h-6 w-6 text-[#FFC900]" />,
      onClick: () => navigate('/apprentices/study-materials/eal/ev-installation')
    },
    {
      title: "Hazardous Areas",
      description: "Specialized training for working with electrical systems in hazardous environments.",
      icon: <ShieldCheck className="h-6 w-6 text-[#FFC900]" />,
      onClick: () => navigate('/apprentices/study-materials/eal/hazardous-areas')
    },
    {
      title: "Building Controls",
      description: "Courses focused on building management systems and smart controls.",
      icon: <Settings className="h-6 w-6 text-[#FFC900]" />,
      onClick: () => navigate('/apprentices/study-materials/eal/building-controls')
    },
    {
      title: "Assessment Preparation",
      description: "Preparation materials for EAL assessments and examinations.",
      icon: <FileText className="h-6 w-6 text-[#FFC900]" />,
      onClick: () => navigate('/apprentices/study-materials/eal/assessment')
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="EAL Qualifications"
          description="Comprehensive study materials for EAL electrical qualifications"
          customBackAction={handleBackClick}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {topics.map((topic, index) => (
            <Card 
              key={index} 
              className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer"
              onClick={topic.onClick}
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  {topic.icon}
                  <div>
                    <h3 className="text-[#FFC900] font-medium text-lg mb-2">{topic.title}</h3>
                    <p className="text-[#FFC900]/70 text-sm">{topic.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default EALQualificationsPage;
