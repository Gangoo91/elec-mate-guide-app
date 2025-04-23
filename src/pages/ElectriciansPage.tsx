
import React from "react";
import { MessageSquare, Heart, Book, Handshake, Users } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import BackButton from "@/components/navigation/BackButton";
import ResourceCard from "@/components/shared/ResourceCard";

const ElectriciansPage = () => {
  const resources = [
    {
      title: "Toolbox Talk",
      description: "Join our community forum to discuss best practices, share experiences, and connect with fellow electricians.",
      icon: <MessageSquare className="h-7 w-7 text-[#FFC900]" />,
      action: {
        label: "Join Discussion",
        href: "/electricians/toolbox-talk"
      }
    },
    {
      title: "Mental Health Hub",
      description: "Resources and support for mental wellbeing tailored to the unique challenges faced by electrical professionals.",
      icon: <Heart className="h-7 w-7 text-[#FFC900]" />,
      action: {
        label: "Visit Mental Health Hub",
        href: "/electricians/mental-health"
      }
    },
    {
      title: "Technical Tools",
      description: "Access the latest technical resources, code updates, and specialized tools for electrical installations.",
      icon: <Book className="h-7 w-7 text-[#FFC900]" />,
      action: {
        label: "View Technical Tools",
        href: "/electricians/technical-tools"
      }
    },
    {
      title: "Mentor Connect",
      description: "Guide apprentices, share your expertise, and earn recognition while helping shape the next generation of electricians.",
      icon: <Handshake className="h-7 w-7 text-[#FFC900]" />,
      action: {
        label: "Join Mentor Connect",
        href: "/electricians/mentor-connect"
      }
    },
    {
      title: "Professional Development",
      description: "Advanced training courses, certifications, and specialization opportunities to enhance your career.",
      icon: <Users className="h-7 w-7 text-[#FFC900]" />,
      action: {
        label: "Explore Development",
        href: "/electricians/development"
      }
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <BackButton />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              {...resource}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ElectriciansPage;
