
import React from "react";
import { Book, Search, CalendarCheck, Award, Heart, Handshake } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
      title: "Mentor Connect",
      description: "Connect with experienced electricians",
      icon: <Handshake className="h-6 w-6 text-[#FFC900]" />,
      link: "#mentor-connect"
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
        
        {/* Mental Health Hub Section */}
        <div className="bg-[#22251e] rounded-xl p-8 border border-[#FFC900]/20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="h-8 w-8 text-[#FFC900]" />
            <h2 className="text-2xl font-bold text-[#FFC900]">Mental Health Hub</h2>
          </div>
          <p className="text-[#FFC900]/80 mb-6">
            Support for apprentices dealing with the unique stresses and challenges of the electrical trade. 
            Building mental resilience is as important as building technical skills.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#151812] rounded-lg p-5 border border-[#FFC900]/10">
              <h3 className="text-[#FFC900] font-semibold mb-2">Apprenticeship Stress</h3>
              <p className="text-[#FFC900]/70 mb-4">Strategies to manage the pressures of learning while working in a demanding field.</p>
              <Button variant="outline" className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10">
                Learn More
              </Button>
            </div>
            <div className="bg-[#151812] rounded-lg p-5 border border-[#FFC900]/10">
              <h3 className="text-[#FFC900] font-semibold mb-2">Peer Support</h3>
              <p className="text-[#FFC900]/70 mb-4">Connect with fellow apprentices who understand what you're going through.</p>
              <Button variant="outline" className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10">
                Join Community
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mentor Connect Section - More detailed than card above */}
        <div className="bg-[#22251e] rounded-xl p-8 border border-[#FFC900]/20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Handshake className="h-8 w-8 text-[#FFC900]" />
            <h2 className="text-2xl font-bold text-[#FFC900]">Mentor Connect</h2>
          </div>
          <p className="text-[#FFC900]/80 mb-6">
            Find an experienced electrician who can guide your career development, offer practical advice,
            and help you navigate the challenges of the electrical trade.
          </p>
          <div className="bg-[#151812] rounded-lg p-5 border border-[#FFC900]/10">
            <h3 className="text-[#FFC900] font-semibold mb-3">How Mentor Connect Works</h3>
            <ol className="list-decimal list-inside text-[#FFC900]/70 space-y-2 mb-4">
              <li>Complete your apprentice profile highlighting your goals</li>
              <li>Browse available mentors based on expertise and experience</li>
              <li>Request a mentorship connection</li>
              <li>Schedule regular check-ins and learning sessions</li>
            </ol>
            <Button className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]">
              Find a Mentor
            </Button>
          </div>
        </div>

        {/* Getting Started Section (original section) */}
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
