
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import ResourceCard from "@/components/shared/ResourceCard";
import { Briefcase, Factory, Wrench, Settings, ClipboardCheck } from "lucide-react";

const CareerPathwaysPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians/development');
  };

  const careers = [
    {
      title: "Design Engineer",
      description: "Specialise in electrical system design, creating detailed plans and specifications for installations.",
      icon: <Briefcase className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/development/career-pathways/design"
    },
    {
      title: "Commissioning Engineer",
      description: "Focus on testing and commissioning of electrical systems in commercial and industrial settings.",
      icon: <Wrench className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/development/career-pathways/commissioning"
    },
    {
      title: "Project Manager",
      description: "Lead electrical projects from planning to completion, managing teams and resources.",
      icon: <Briefcase className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/development/career-pathways/project-management"
    },
    {
      title: "Control Systems Engineer",
      description: "Specialise in industrial automation, PLC programming, and control system integration.",
      icon: <Settings className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/development/career-pathways/control-systems"
    },
    {
      title: "Electrical Inspector",
      description: "Become certified to inspect and test electrical installations for safety and compliance.",
      icon: <ClipboardCheck className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/development/career-pathways/inspection"
    },
    {
      title: "Building Services Engineer",
      description: "Focus on electrical systems within buildings, including lighting, power, and building management systems.",
      icon: <Factory className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/development/career-pathways/building-services"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <PageHeader 
          title="Career Pathways"
          description="Explore specialised career paths and advancement opportunities in the electrical industry."
          customBackAction={handleBackClick}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {careers.map((career, index) => (
            <ResourceCard
              key={index}
              {...career}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default CareerPathwaysPage;
