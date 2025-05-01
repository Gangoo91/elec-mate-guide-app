
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { useLocation, useNavigate } from "react-router-dom";
import BecomeMentorToggle from "@/components/mentorship/BecomeMentorToggle";
import { useDataCaching } from "@/hooks/useDataCaching";
import { useToast } from "@/hooks/use-toast";
import { Mentor } from "@/types/mentor";
import { MentorshipHero } from "@/components/mentorship/MentorshipHero";
import { MentorshipSkeleton } from "@/components/mentorship/MentorshipSkeleton";
import { MentorshipError } from "@/components/mentorship/MentorshipError";
import ResourceCard from "@/components/shared/ResourceCard";
import { Card, CardContent } from "@/components/ui/card";
import { demoMentors, demoMentorshipRequests } from "@/components/mentorship/demoData";
import { GraduationCap, MessageCircle, Users, CheckCircle, Calendar } from "lucide-react";

const Mentorship = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isElectriciansSection = location.pathname.startsWith('/electricians');
  const isApprenticeSection = location.pathname.startsWith('/apprentices');
  const { data: mentors, isLoading, error } = useDataCaching<Mentor>("mentors", "mentorships");
  const { toast } = useToast();
  const [mentorshipRequests] = React.useState(demoMentorshipRequests);
  
  if (isLoading) return <MentorshipSkeleton />;
  if (error) return <MentorshipError />;

  const displayMentors = mentors || demoMentors;
  const pendingRequestsCount = mentorshipRequests.filter(r => r.status === "pending").length;

  const pageTitle = isApprenticeSection ? "Find A Mentor" : "Mentor Connect";
  const pageDescription = isElectriciansSection 
    ? "Share your expertise and guide the next generation of electrical professionals"
    : "Connect with experienced professionals in the electrical industry for guidance, support, and career advice";

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
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title={pageTitle}
          description={pageDescription}
        />
        
        <Card className="mb-6 bg-gradient-to-r from-[#22251e] to-[#22251e]/80 border-[#FFC900]/20">
          <CardContent className="p-6">
            <MentorshipHero 
              isElectriciansSection={isElectriciansSection} 
              mentorsCount={displayMentors.length}
              requestsCount={isElectriciansSection ? pendingRequestsCount : undefined}
            />
            
            {isElectriciansSection && (
              <div className="mt-6">
                <BecomeMentorToggle />
              </div>
            )}
          </CardContent>
        </Card>
        
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
      </div>
    </MainLayout>
  );
};

export default Mentorship;
