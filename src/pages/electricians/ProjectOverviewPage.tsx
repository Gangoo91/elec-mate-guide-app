
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import ResourceCard from "@/components/shared/ResourceCard";
import { Calendar, FolderOpen, FileText, Calculator, GraduationCap } from "lucide-react";

const ProjectOverviewPage = () => {
  const resources = [
    {
      title: "Job Scheduling",
      description: "Manage appointments, track work hours, and organize your job calendar efficiently.",
      icon: <Calendar className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/job-scheduling"
    },
    {
      title: "Project Management",
      description: "Track, manage, and collaborate on your electrical projects with comprehensive tools.",
      icon: <FolderOpen className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/project-management"
    },
    {
      title: "Templates & Documents",
      description: "Access and customize professional templates for invoices, quotes, and important documentation.",
      icon: <FileText className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/templates"
    },
    {
      title: "Job Price Estimator",
      description: "Generate accurate price estimates for electrical jobs based on detailed specifications.",
      icon: <Calculator className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/technical-tools/job-price-estimator"
    },
    {
      title: "Career Pathways",
      description: "Explore specialised career paths and advancement opportunities in the electrical industry.",
      icon: <GraduationCap className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/development/career-pathways"
    }
  ];

  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader 
          title="Project Overview" 
          description="Access all your project management tools, job scheduling, and document templates in one place."
          hideBackButton={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-6">
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

export default ProjectOverviewPage;
