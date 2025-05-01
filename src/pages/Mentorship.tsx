
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { useLocation } from "react-router-dom";
import { useDataCaching } from "@/hooks/useDataCaching";
import { useToast } from "@/hooks/use-toast";
import { Mentor } from "@/types/mentor";
import { MentorshipSkeleton } from "@/components/mentorship/MentorshipSkeleton";
import { MentorshipError } from "@/components/mentorship/MentorshipError";
import MentorshipHeroCard from "@/components/mentorship/MentorshipHeroCard";
import MentorshipResources from "@/components/mentorship/MentorshipResources";
import { demoMentors, demoMentorshipRequests } from "@/components/mentorship/demoData";

const Mentorship = () => {
  const location = useLocation();
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

  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title={pageTitle}
          description={pageDescription}
        />
        
        <MentorshipHeroCard 
          isElectriciansSection={isElectriciansSection}
          mentorsCount={displayMentors.length}
          pendingRequestsCount={pendingRequestsCount}
        />
        
        <MentorshipResources isElectriciansSection={isElectriciansSection} />
      </div>
    </MainLayout>
  );
};

export default Mentorship;
