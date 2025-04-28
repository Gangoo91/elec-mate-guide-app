import React from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, GraduationCap, Award, Factory, Users } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import ResourceCard from "@/components/shared/ResourceCard";

const ProfessionalDevelopmentPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians');
  };

  const resources = [
    {
      title: "Career Pathways",
      description: "Explore various specialisation routes within the electrical industry, from commercial to industrial roles.",
      icon: <Briefcase className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/development/career-pathways"
    },
    {
      title: "Higher Education",
      description: "Discover degree programmes and advanced qualifications to enhance your electrical engineering expertise.",
      icon: <GraduationCap className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/development/higher-education"
    },
    {
      title: "Courses & Certifications",
      description: "Access specialised courses and certification programmes to expand your professional credentials.",
      icon: <Award className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/development/courses"
    },
    {
      title: "Industry Specialisations",
      description: "Find opportunities in emerging sectors like renewable energy, smart home automation, and industrial controls.",
      icon: <Factory className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/development/specialisations"
    },
    {
      title: "Business Development",
      description: "Get resources and guidance for starting and growing your own electrical contracting business.",
      icon: <Briefcase className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/development/business"
    },
    {
      title: "Professional Associations",
      description: "Connect with industry organisations and unlock networking opportunities and member benefits.",
      icon: <Users className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/development/associations"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <PageHeader 
          title="Professional Development"
          description="Advance your electrical career with specialised training, education, and industry connections."
          customBackAction={handleBackClick}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              {...resource}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ProfessionalDevelopmentPage;
