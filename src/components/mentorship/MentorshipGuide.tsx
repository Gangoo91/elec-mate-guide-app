
import React from "react";
import { Star, MessageCircle, Calendar, BookOpen, LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MentorshipGuideProps {
  isElectriciansSection?: boolean;
}

export const MentorshipGuide = ({ isElectriciansSection = false }: MentorshipGuideProps) => {
  const electricianSteps = [
    {
      title: "Review Requests",
      description: "Browse mentorship requests from apprentices seeking your expertise and guidance",
      icon: <Star className="h-5 w-5 text-[#FFC900]" />
    },
    {
      title: "Connect & Respond",
      description: "Engage with apprentices and offer your knowledge to help them grow in their career",
      icon: <MessageCircle className="h-5 w-5 text-[#FFC900]" />
    },
    {
      title: "Schedule Sessions",
      description: "Set up mentoring sessions that work with your schedule and availability",
      icon: <Calendar className="h-5 w-5 text-[#FFC900]" />
    },
    {
      title: "Share Knowledge",
      description: "Guide the next generation of electricians by sharing your expertise and experience",
      icon: <BookOpen className="h-5 w-5 text-[#FFC900]" />
    }
  ];

  const apprenticeSteps = [
    {
      title: "Choose Your Mentor",
      description: "Find the right mentor based on your learning goals and their expertise in electrical work",
      icon: <Star className="h-5 w-5 text-[#FFC900]" />
    },
    {
      title: "Connect & Discuss",
      description: "Share your challenges, ask questions about your apprenticeship, and get expert guidance",
      icon: <MessageCircle className="h-5 w-5 text-[#FFC900]" />
    },
    {
      title: "Schedule Learning",
      description: "Set up regular mentoring sessions that fit around your apprenticeship schedule",
      icon: <Calendar className="h-5 w-5 text-[#FFC900]" />
    },
    {
      title: "Grow Your Skills",
      description: "Get practical advice, study tips, and insider knowledge to excel in your apprenticeship",
      icon: <BookOpen className="h-5 w-5 text-[#FFC900]" />
    }
  ];

  const steps = isElectriciansSection ? electricianSteps : apprenticeSteps;
  
  return (
    <div className="mt-16 mb-6">
      <div className="flex items-center gap-2 mb-6">
        <Star className="h-5 w-5 text-[#FFC900]" />
        <h3 className="text-xl font-semibold text-[#FFC900]">
          {isElectriciansSection ? "Your Mentoring Journey" : "Your Mentorship Journey"}
        </h3>
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
