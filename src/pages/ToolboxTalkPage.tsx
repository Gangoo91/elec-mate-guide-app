
import React from "react";
import { MessageSquare, Box, Wrench, Shield, PoundSterling, Rss } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import ResourceCard from "@/components/shared/ResourceCard";
import IndustryResources from "@/components/IndustryResources";

const ToolboxTalkPage = () => {
  const resources = [
    {
      title: "Chat Room",
      description: "Connect with fellow electricians, share experiences, and discuss industry topics.",
      icon: <MessageSquare className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/toolbox-talk/chat"
    },
    {
      title: "Materials",
      description: "Access information about the latest materials, specifications, and best practices.",
      icon: <Box className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/toolbox-talk/materials"
    },
    {
      title: "Tools",
      description: "Explore recommended tools, reviews, and usage guidelines.",
      icon: <Wrench className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/toolbox-talk/tools"
    },
    {
      title: "Safety",
      description: "Stay updated with safety protocols, regulations, and best practices.",
      icon: <Shield className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/toolbox-talk/safety"
    },
    {
      title: "Live Pricing",
      description: "Get real-time updates on material costs and market prices.",
      icon: <PoundSterling className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/toolbox-talk/pricing"
    },
    {
      title: "Industry Updates",
      description: "Stay informed with the latest UK electrical industry news, regulations, and developments.",
      icon: <Rss className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/toolbox-talk/updates"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <PageHeader 
          title="Toolbox Talk"
          description="Connect, share knowledge, and stay updated with industry resources."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              {...resource}
            />
          ))}
        </div>

        <IndustryResources />
      </div>
    </MainLayout>
  );
};

export default ToolboxTalkPage;
