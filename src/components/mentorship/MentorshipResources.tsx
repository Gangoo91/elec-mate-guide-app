
import React from "react";
import ResourceCard from "@/components/shared/ResourceCard";
import { MessageCircle, Users, GraduationCap, Calendar, CheckCircle } from "lucide-react";

interface MentorshipResourcesProps {
  isElectriciansSection: boolean;
}

const MentorshipResources = ({ isElectriciansSection }: MentorshipResourcesProps) => {
  const electricianResources = [
    {
      title: "Pending Requests",
      description: "Review and respond to mentorship requests from apprentices",
      icon: <MessageCircle className="h-6 w-6 text-[#FFC900]" />,
      path: "/electricians/mentorship/pending-requests"
    },
    {
      title: "Active Mentorships",
      description: "Manage your ongoing mentorship relationships",
      icon: <Users className="h-6 w-6 text-[#FFC900]" />,
      path: "/electricians/mentorship/active"
    },
    {
      title: "Mentoring Guide",
      description: "Best practices and resources for effective mentoring",
      icon: <GraduationCap className="h-6 w-6 text-[#FFC900]" />,
      path: "/electricians/mentorship/guide"
    }
  ];

  const apprenticeResources = [
    {
      title: "Find Mentors",
      description: "Browse available mentors and connect with professionals in your field",
      icon: <Users className="h-6 w-6 text-[#FFC900]" />,
      path: "/apprentices/mentorship/find-mentors"
    },
    {
      title: "My Mentors",
      description: "Manage your mentor relationships and scheduled sessions",
      icon: <CheckCircle className="h-6 w-6 text-[#FFC900]" />,
      path: "/apprentices/mentorship/my-mentors"
    },
    {
      title: "Mentorship Guide",
      description: "Learn how to make the most of your mentorship experience",
      icon: <GraduationCap className="h-6 w-6 text-[#FFC900]" />,
      path: "/apprentices/mentorship/guide"
    },
    {
      title: "Schedule Sessions",
      description: "Book time with your mentors for guidance and advice",
      icon: <Calendar className="h-6 w-6 text-[#FFC900]" />,
      path: "/apprentices/mentorship/schedule"
    }
  ];

  const resources = isElectriciansSection ? electricianResources : apprenticeResources;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {resources.map((resource, index) => (
        <ResourceCard
          key={index}
          title={resource.title}
          description={resource.description}
          icon={resource.icon}
          fullCardLink={resource.path}
        />
      ))}
    </div>
  );
};

export default MentorshipResources;
