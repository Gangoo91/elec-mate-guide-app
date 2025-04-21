
import React from "react";
import { Book, Search, CalendarCheck, Award } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ApprenticesPage = () => {
  const apprenticeResources = [
    {
      title: "Learning Paths",
      description: "Structured curriculum for electrical apprentices",
      icon: <Book className="h-6 w-6 text-[#FFC900]" />,
      link: "#paths"
    },
    {
      title: "Skill Assessments",
      description: "Test your knowledge and track progress",
      icon: <Award className="h-6 w-6 text-[#FFC900]" />,
      link: "#assessments"
    },
    {
      title: "Finding Mentors",
      description: "Connect with experienced electricians",
      icon: <Search className="h-6 w-6 text-[#FFC900]" />,
      link: "#mentors"
    },
    {
      title: "Training Events",
      description: "Workshops and training opportunities",
      icon: <CalendarCheck className="h-6 w-6 text-[#FFC900]" />,
      link: "#events"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#FFC900] mb-4">Apprentices Portal</h1>
          <p className="text-lg text-[#FFC900]/80 max-w-2xl mx-auto">
            Resources, training, and opportunities designed specifically for electrical apprentices at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {apprenticeResources.map((resource, index) => (
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
          <h2 className="text-2xl font-bold text-[#FFC900] mb-4">Getting Started as an Apprentice</h2>
          <p className="text-[#FFC900]/80 mb-6">
            The path to becoming a licensed electrician starts with a strong apprenticeship. 
            Here's what you need to know to begin your journey in the electrical trade.
          </p>
          <div className="space-y-4">
            <p className="text-[#FFC900]/80">
              Content for apprentices will be expanded soon with interactive learning modules, progress tracking, 
              and certification preparation resources.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ApprenticesPage;
