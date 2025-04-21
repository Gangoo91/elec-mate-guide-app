
import React from "react";
import { Lightbulb, Users, Award, Briefcase, Heart, Handshake, Tool } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ElectriciansPage = () => {
  const electricianResources = [
    {
      title: "Professional Development",
      description: "Advanced training and specialization courses",
      icon: <Award className="h-6 w-6 text-[#FFC900]" />,
      link: "#development"
    },
    {
      title: "Mentor Connect",
      description: "Guide apprentices and earn recognition",
      icon: <Handshake className="h-6 w-6 text-[#FFC900]" />,
      link: "#mentor-connect"
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
        
        {/* Mental Health Hub Section */}
        <div className="bg-[#22251e] rounded-xl p-8 border border-[#FFC900]/20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="h-8 w-8 text-[#FFC900]" />
            <h2 className="text-2xl font-bold text-[#FFC900]">Mental Health Hub</h2>
          </div>
          <p className="text-[#FFC900]/80 mb-6">
            Resources and support for mental wellbeing tailored to the challenges faced by electrical professionals. 
            Take care of your mental health and find balance in a demanding career.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#151812] rounded-lg p-5 border border-[#FFC900]/10">
              <h3 className="text-[#FFC900] font-semibold mb-2">Stress Management</h3>
              <p className="text-[#FFC900]/70 mb-4">Techniques and practices to manage job-related stress and prevent burnout.</p>
              <Button variant="outline" className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10">
                Access Resources
              </Button>
            </div>
            <div className="bg-[#151812] rounded-lg p-5 border border-[#FFC900]/10">
              <h3 className="text-[#FFC900] font-semibold mb-2">Professional Support</h3>
              <p className="text-[#FFC900]/70 mb-4">Connect with counselors who understand the unique challenges of the electrical trade.</p>
              <Button variant="outline" className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10">
                Find Support
              </Button>
            </div>
          </div>
        </div>

        {/* Toolbox Talk Section */}
        <div className="bg-[#22251e] rounded-xl p-8 border border-[#FFC900]/20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Tool className="h-8 w-8 text-[#FFC900]" />
            <h2 className="text-2xl font-bold text-[#FFC900]">Toolbox Talk</h2>
          </div>
          <p className="text-[#FFC900]/80 mb-6">
            Short, focused safety discussions to promote workplace safety awareness. Lead effective toolbox talks 
            with your team and foster a culture of safety excellence.
          </p>
          <div className="space-y-4">
            <div className="bg-[#151812] rounded-lg p-5 border border-[#FFC900]/10">
              <h3 className="text-[#FFC900] font-semibold mb-2">Latest Toolbox Talk Topics</h3>
              <ul className="list-disc list-inside text-[#FFC900]/70 space-y-1 mb-4">
                <li>Electrical Lockout/Tagout Procedures</li>
                <li>Working at Heights Safely</li>
                <li>Handling New Equipment</li>
                <li>Heat Stress Prevention</li>
              </ul>
              <Button className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]">
                Browse Topics
              </Button>
            </div>
          </div>
        </div>

        {/* Continuing Education Section (original section) */}
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
