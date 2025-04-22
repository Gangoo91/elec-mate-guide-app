import React from "react";
import { Award, Handshake, Lightbulb, Briefcase, Heart, Wrench } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import ResourceCard from "@/components/shared/ResourceCard";
import CommunityCounter from "@/components/dashboard/CommunityCounter";
import { useIsMobile } from "@/hooks/use-mobile";

const ElectriciansPage = () => {
  const isMobile = useIsMobile();
  
  // Hub links - prioritized first
  const electricianHubs = [
    {
      title: "Toolbox Talk",
      description: "Safety topics and community conversations.",
      icon: <Wrench className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/toolbox-talk"
    },
    {
      title: "Mental Health Hub",
      description: "Support and resources for wellbeing.",
      icon: <Heart className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/mental-health"
    }
  ];

  // Technical resources and other links
  const electricianResources = [
    {
      title: "On the Job Tooling",
      description: "All-in-one toolbox for electricians",
      icon: <Lightbulb className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "#"
    },
    {
      title: "Mentor Connect",
      description: "Guide apprentices and earn recognition.",
      icon: <Handshake className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "#"
    },
    {
      title: "Courses",
      description: "Advanced training courses.",
      icon: <Award className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "#"
    },
    {
      title: "Job Listings",
      description: "Find projects and positions.",
      icon: <Briefcase className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "#"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8">
        <PageHeader
          title="Electricians Portal"
          description="Professional resources, safety, and community for licensed electricians."
        />

        {/* Community Stats - Smaller version at top */}
        <div className="bg-[#22251e] rounded-xl p-4 mb-6 border border-[#FFC900]/20">
          <h2 className="text-lg font-bold text-[#FFC900] mb-2">Community Stats</h2>
          <div className="flex items-center gap-3 bg-[#151812] p-3 rounded-lg">
            <CommunityCounter />
          </div>
        </div>

        {/* Hub links - prioritized and more prominent */}
        <h2 className="text-lg font-bold text-[#FFC900] mb-3">Community Hubs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {electricianHubs.map(hub => (
            <ResourceCard key={hub.title} {...hub} />
          ))}
        </div>

        {/* Technical resources and other links - in a compact grid */}
        <h2 className="text-lg font-bold text-[#FFC900] mb-3">Resources & Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {electricianResources.map(resource => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>

        {/* Continuing Education - simplified */}
        <div className="bg-[#22251e] rounded-xl p-4 border border-[#FFC900]/20">
          <h2 className="text-lg font-bold text-[#FFC900] mb-2">Continuing Education</h2>
          <p className="text-[#FFC900]/80 text-sm">
            Stay current with the latest electrical codes and technologies. New content coming soon.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default ElectriciansPage;
