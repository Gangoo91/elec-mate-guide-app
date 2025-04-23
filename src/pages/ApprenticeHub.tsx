import React from "react";
import { BookOpen, FileText, Video, Lightbulb, Notebook, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ApprenticeHub = () => {
  const learningResources = [
    {
      title: "Basic Electrical Theory",
      description: "Understand the fundamentals of electrical current, voltage, and resistance",
      icon: <Lightbulb className="h-8 w-8 text-[#FFC900]" />,
      type: "Reading",
      typeIcon: <FileText className="h-4 w-4" />,
      progress: 0,
    },
    {
      title: "Safety Procedures",
      description: "Essential safety protocols every apprentice should know",
      icon: <Notebook className="h-8 w-8 text-[#FFC900]" />,
      type: "Course",
      typeIcon: <Video className="h-4 w-4" />,
      progress: 0,
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#FFC900] mb-2">Apprentice Hub</h1>
            <p className="text-[#FFC900]/80">Your personal learning and development center</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]">
              Track Progress
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card className="bg-[#22251e] border-[#FFC900]/20 md:col-span-2">
            <CardHeader>
              <CardTitle className="text-[#FFC900] text-xl">Welcome to Your Apprentice Journey</CardTitle>
            </CardHeader>
            <CardContent className="text-[#FFC900]/80">
              <p>
                Welcome to the Apprentice Hub! This is your personalized learning center where you can track your progress, 
                access educational resources, and connect with mentors in the electrical industry.
              </p>
              <div className="mt-4 p-4 bg-[#151812] rounded-lg border border-[#FFC900]/10">
                <h3 className="text-[#FFC900] font-semibold mb-2">Getting Started</h3>
                <ul className="list-disc list-inside text-[#FFC900]/70 space-y-1">
                  <li>Complete your apprentice profile</li>
                  <li>Browse available learning modules</li>
                  <li>Connect with potential mentors</li>
                  <li>Track your certification progress</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardHeader>
              <CardTitle className="text-[#FFC900] text-xl">Your Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-4">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      className="text-[#151812] stroke-current"
                      strokeWidth="10"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                    ></circle>
                    <circle
                      className="text-[#FFC900] stroke-current"
                      strokeWidth="10"
                      strokeLinecap="round"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      strokeDasharray="251.2"
                      strokeDashoffset="251.2"
                      style={{
                        strokeDashoffset: 251.2 - (251.2 * 0) / 100,
                        transition: "stroke-dashoffset 1s",
                      }}
                    ></circle>
                  </svg>
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#FFC900]">0%</span>
                  </div>
                </div>
                <p className="text-[#FFC900]/70 mt-4">Begin your learning journey</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold text-[#FFC900] mb-4">Learning Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {learningResources.map((resource, index) => (
            <Card key={index} className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="bg-[#151812] p-2 rounded-lg">
                  {resource.icon}
                </div>
                <div>
                  <CardTitle className="text-[#FFC900]">{resource.title}</CardTitle>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="flex items-center text-xs text-[#FFC900]/60 gap-1">
                      {resource.typeIcon} {resource.type}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#FFC900]/70">{resource.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10">
                  Start Learning <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="bg-[#22251e] rounded-xl p-6 border border-[#FFC900]/20">
          <h2 className="text-2xl font-bold text-[#FFC900] mb-4">Find a Mentor</h2>
          <p className="text-[#FFC900]/80 mb-4">
            Connect with experienced electricians who can help guide your apprenticeship journey.
          </p>
          <Button className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]">
            Browse Mentors
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default ApprenticeHub;
