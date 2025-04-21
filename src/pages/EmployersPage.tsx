
import React from "react";
import { Briefcase, Search, Users, ChartBar } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import ResourceCard from "@/components/shared/ResourceCard";

const EmployersPage = () => {
  const employerResources = [
    {
      title: "Talent Recruitment",
      description: "Find qualified electrical professionals",
      icon: <Search className="h-6 w-6 text-[#FFC900]" />,
      action: { label: "Learn more", href: "#recruitment" }
    },
    {
      title: "Workforce Management",
      description: "Tools for managing electrical teams",
      icon: <Users className="h-6 w-6 text-[#FFC900]" />,
      action: { label: "Learn more", href: "#management" }
    },
    {
      title: "Project Listing",
      description: "Post projects and contract opportunities",
      icon: <Briefcase className="h-6 w-6 text-[#FFC900]" />,
      action: { label: "Learn more", href: "#projects" }
    },
    {
      title: "Industry Insights",
      description: "Market data and industry trends",
      icon: <ChartBar className="h-6 w-6 text-[#FFC900]" />,
      action: { label: "Learn more", href: "#insights" }
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-12">
        <PageHeader 
          title="Employers Portal"
          description="Resources and tools for electrical contractors, companies, and organizations looking to hire electrical professionals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {employerResources.map((resource, index) => (
            <ResourceCard 
              key={index}
              {...resource}
            />
          ))}
        </div>
        
        <div className="bg-[#22251e] rounded-xl p-4 md:p-8 border border-[#FFC900]/20">
          <h2 className="text-xl md:text-2xl font-bold text-[#FFC900] mb-4">Hiring & Managing Electrical Professionals</h2>
          <p className="text-[#FFC900]/80 mb-6 text-sm md:text-base">
            Find the right talent for your electrical projects and manage your workforce effectively with our employer resources.
          </p>
          <div className="space-y-4">
            <p className="text-[#FFC900]/80 text-sm md:text-base">
              Content for employers will be expanded soon with talent matching algorithms, project management tools, 
              and compliance resources.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default EmployersPage;
