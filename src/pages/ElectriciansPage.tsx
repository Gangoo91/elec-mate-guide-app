
import React from "react";
import { Lightbulb, Users, Award, Briefcase, Heart, Handshake, Wrench } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import ResourceCard from "@/components/shared/ResourceCard";
import CommunityCounter from "@/components/dashboard/CommunityCounter";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ElectriciansPage = () => {
  const navigate = useNavigate();

  const electricianResources = [
    {
      title: "Professional Development",
      description: "Advanced training and specialization courses",
      icon: <Award className="h-6 w-6 text-[#FFC900]" />,
      action: { label: "Learn more", href: "#" }
    },
    {
      title: "Mentor Connect",
      description: "Guide apprentices and earn recognition",
      icon: <Handshake className="h-6 w-6 text-[#FFC900]" />,
      action: { label: "Learn more", href: "#" }
    },
    {
      title: "Technical Resources",
      description: "Code updates and technical information",
      icon: <Lightbulb className="h-6 w-6 text-[#FFC900]" />,
      action: { label: "Learn more", href: "#" }
    },
    {
      title: "Job Opportunities",
      description: "Find projects and permanent positions",
      icon: <Briefcase className="h-6 w-6 text-[#FFC900]" />,
      action: { label: "Learn more", href: "#" }
    }
  ];

  // Use ResourceCard for the two new hub sections
  const electricianHubs = [
    {
      title: "Mental Health Hub",
      description: "Resources and support for mental wellbeing tailored to the challenges faced by electrical professionals.",
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
          description="Professional resources and opportunities for licensed electricians to advance their career and expertise."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {electricianResources.map((resource, idx) => (
            <ResourceCard key={idx} {...resource} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {electricianHubs.map((hub, idx) => (
            <ResourceCard key={hub.title} {...hub} />
          ))}
        </div>

        <div className="bg-[#22251e] rounded-xl p-4 md:p-8 border border-[#FFC900]/20 mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#FFC900] mb-4">Community Stats</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 bg-[#151812] p-4 rounded-lg">
              <Users className="h-8 w-8 text-[#FFC900]" />
              <div>
                <p className="text-[#FFC900] font-semibold">Community Size</p>
                <CommunityCounter />
              </div>
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
