
import React from "react";
import { Lightbulb, Users, Certificate, Briefcase } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ElectriciansPage = () => {
  const electricianResources = [
    {
      title: "Professional Development",
      description: "Advanced training and specialization courses",
      icon: <Certificate className="h-6 w-6 text-[#FFC900]" />,
      link: "#development"
    },
    {
      title: "Mentorship Program",
      description: "Guide apprentices and earn recognition",
      icon: <Users className="h-6 w-6 text-[#FFC900]" />,
      link: "#mentorship"
    },
    {
      title: "Technical Resources",
      description: "Code updates and technical information",
      icon: <Lightbulb className="h-6 w-6 text-[#FFC900]" />,
      link: "#resources"
    },
    {
      title: "Job Opportunities",
      description: "Find projects and permanent positions",
      icon: <Briefcase className="h-6 w-6 text-[#FFC900]" />,
      link: "#jobs"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#FFC900] mb-4">Electricians Portal</h1>
          <p className="text-lg text-[#FFC900]/80 max-w-2xl mx-auto">
            Professional resources and opportunities for licensed electricians to advance their career and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {electricianResources.map((resource, index) => (
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
          <h2 className="text-2xl font-bold text-[#FFC900] mb-4">Continuing Education for Electricians</h2>
          <p className="text-[#FFC900]/80 mb-6">
            Stay current with the latest electrical codes, technologies, and best practices with our continuing education resources.
          </p>
          <div className="space-y-4">
            <p className="text-[#FFC900]/80">
              Content for licensed electricians will be expanded soon with code update courses, certification management, 
              and advanced technical resources.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ElectriciansPage;
