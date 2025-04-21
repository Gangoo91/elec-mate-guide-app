import React from "react";
import { Briefcase, Search, Users, ChartBar } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import BackButton from "@/components/navigation/BackButton";

const EmployersPage = () => {
  const employerResources = [
    {
      title: "Talent Recruitment",
      description: "Find qualified electrical professionals",
      icon: <Search className="h-6 w-6 text-[#FFC900]" />,
      link: "#recruitment"
    },
    {
      title: "Workforce Management",
      description: "Tools for managing electrical teams",
      icon: <Users className="h-6 w-6 text-[#FFC900]" />,
      link: "#management"
    },
    {
      title: "Project Listing",
      description: "Post projects and contract opportunities",
      icon: <Briefcase className="h-6 w-6 text-[#FFC900]" />,
      link: "#projects"
    },
    {
      title: "Industry Insights",
      description: "Market data and industry trends",
      icon: <ChartBar className="h-6 w-6 text-[#FFC900]" />,
      link: "#insights"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-12">
        <BackButton />
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#FFC900] mb-4">Employers Portal</h1>
          <p className="text-lg text-[#FFC900]/80 max-w-2xl mx-auto">
            Resources and tools for electrical contractors, companies, and organizations looking to hire electrical professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {employerResources.map((resource, index) => (
            <Card key={index} className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#FFC900]/10">
              <CardHeader>
                <div className="flex items-center gap-3">
                  {resource.icon}
                  <CardTitle className="text-[#FFC900]">{resource.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#FFC900]/70">{resource.description}</CardDescription>
                <a href={resource.link} className="mt-4 inline-block text-[#FFC900] font-medium hover:underline">
                  Learn more →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-[#22251e] rounded-xl p-8 border border-[#FFC900]/20">
          <h2 className="text-2xl font-bold text-[#FFC900] mb-4">Hiring & Managing Electrical Professionals</h2>
          <p className="text-[#FFC900]/80 mb-6">
            Find the right talent for your electrical projects and manage your workforce effectively with our employer resources.
          </p>
          <div className="space-y-4">
            <p className="text-[#FFC900]/80">
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
