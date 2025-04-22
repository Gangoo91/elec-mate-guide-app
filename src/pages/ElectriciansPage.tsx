
import React from "react";
import { Award, Handshake, Lightbulb, Briefcase, Heart, Wrench } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import ResourceCard from "@/components/shared/ResourceCard";
import CommunityCounter from "@/components/dashboard/CommunityCounter";

const ElectriciansPage = () => {
  // All links now use fullCardLink for card-wide navigation
  const electricianResources = [
    {
      title: "Professional Development",
      description: "Advanced training and specialization courses.",
      icon: <Award className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "#"
    },
    {
      title: "Mentor Connect",
      description: "Guide apprentices and earn recognition.",
      icon: <Handshake className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "#"
    },
    {
      title: "Technical Resources",
      description: "Code updates and technical information.",
      icon: <Lightbulb className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "#"
    },
    {
      title: "Job Opportunities",
      description: "Find projects and permanent positions.",
      icon: <Briefcase className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "#"
    }
  ];

  const electricianHubs = [
    {
      title: "Mental Health Hub",
      description:
        "Resources and support for mental wellbeing tailored to the challenges faced by electrical professionals.",
      icon: <Heart className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/mental-health"
    },
    {
      title: "Toolbox Talk",
      description: "Focused safety topics, best practices, and community conversations.",
      icon: <Wrench className="h-7 w-7 text-[#FFC900]" />,
      fullCardLink: "/electricians/toolbox-talk"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-12">
        <PageHeader
          title="Electricians Portal"
          description="Best-in-class professional resources, safety, and community opportunities for licensed electricians."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {electricianResources.map((resource, idx) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {electricianHubs.map(hub => (
            <ResourceCard key={hub.title} {...hub} />
          ))}
        </div>

        <div className="bg-[#22251e] rounded-xl p-4 md:p-8 border border-[#FFC900]/20 mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#FFC900] mb-4">Community Stats</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 bg-[#151812] p-4 rounded-lg">
              <CommunityCounter />
              <span className="text-[#FFC900] font-semibold ml-3">Community Size</span>
            </div>
            <div className="flex items-center gap-3 bg-[#151812] p-4 rounded-lg">
              <Heart className="h-8 w-8 text-[#FFC900]" />
              <div>
                <p className="text-[#FFC900] font-semibold">Wellbeing Initiatives</p>
                <p className="text-[#FFC900]/70">Support and peer engagement</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#22251e] rounded-xl p-4 md:p-8 border border-[#FFC900]/20">
          <h2 className="text-xl md:text-2xl font-bold text-[#FFC900] mb-4">Continuing Education for Electricians</h2>
          <p className="text-[#FFC900]/80 mb-6 text-sm md:text-base">
            Stay current with the latest electrical codes, technologies, and best practices with our continuing education resources.
          </p>
          <div className="space-y-4">
            <p className="text-[#FFC900]/80 text-sm md:text-base">
              New content is coming soon. Explore the resources above for more!
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ElectriciansPage;
