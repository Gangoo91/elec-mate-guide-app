
import React from "react";
import { Star, User, MessageCircle, Calendar, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const MentorshipGuide = () => {
  const steps = [
    {
      title: "Browse Profiles",
      description: "View profiles of experienced professionals in the electrical industry",
      icon: <User className="h-5 w-5 text-[#FFC900]" />
    },
    {
      title: "Send a Request",
      description: "Reach out with your specific questions or areas where you need guidance",
      icon: <MessageCircle className="h-5 w-5 text-[#FFC900]" />
    },
    {
      title: "Schedule Session",
      description: "Find a mutually convenient time for virtual or in-person mentoring",
      icon: <Calendar className="h-5 w-5 text-[#FFC900]" />
    },
    {
      title: "Learn & Grow",
      description: "Gain insights, develop skills, and advance your career with expert guidance",
      icon: <BookOpen className="h-5 w-5 text-[#FFC900]" />
    }
  ];

  return (
    <div className="mt-16 mb-6">
      <div className="flex items-center gap-2 mb-6">
        <Star className="h-5 w-5 text-[#FFC900]" />
        <h3 className="text-xl font-semibold text-[#FFC900]">How Mentorship Works</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step, index) => (
          <Card key={index} className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/40 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="bg-[#FFC900]/10 p-3 rounded-full">
                  {step.icon}
                </div>
                <CardTitle className="text-lg font-medium text-[#FFC900]">
                  {step.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-[#FFC900]/70 text-sm">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
