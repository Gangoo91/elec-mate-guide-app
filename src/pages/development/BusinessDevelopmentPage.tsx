
import React from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

const BusinessDevelopmentPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians/development');
  };

  const businessTopics = [
    {
      title: "Starting Your Business",
      points: [
        "Business Planning and Strategy",
        "Legal Requirements and Registration",
        "Insurance and Liability Coverage",
        "Setting Up Business Accounts"
      ]
    },
    {
      title: "Growing Your Business",
      points: [
        "Marketing and Client Acquisition",
        "Pricing Strategies",
        "Hiring and Team Management",
        "Project Management"
      ]
    },
    {
      title: "Financial Management",
      points: [
        "Bookkeeping and Accounting",
        "Tax Compliance",
        "Cash Flow Management",
        "Investment Planning"
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <PageHeader 
          title="Business Development"
          description="Essential resources and guidance for starting and growing your electrical contracting business."
          customBackAction={handleBackClick}
        />
        
        <div className="grid gap-6 mt-6">
          {businessTopics.map((topic, index) => (
            <Card key={index} className="bg-[#22251e] border-[#FFC900]/20">
              <CardContent className="pt-6">
                <h3 className="text-[#FFC900] text-xl font-medium mb-4">{topic.title}</h3>
                <ul className="space-y-2">
                  {topic.points.map((point, i) => (
                    <li key={i} className="text-[#FFC900]/70 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFC900]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default BusinessDevelopmentPage;
