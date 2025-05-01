
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import GlassCard from "@/components/shared/GlassCard";
import { useDataCaching } from "@/hooks/useDataCaching";
import { MentorshipSkeleton } from "@/components/mentorship/MentorshipSkeleton";
import { MentorshipError } from "@/components/mentorship/MentorshipError";
import { demoMentorshipRequests } from "@/components/mentorship/demoData";
import { MentorshipRequestList } from "@/components/mentorship/MentorshipRequestList";

const PendingRequests = () => {
  const { isLoading, error } = useDataCaching("mentorship-requests", "mentorships");
  const [mentorshipRequests] = React.useState(demoMentorshipRequests);
  
  if (isLoading) return <MentorshipSkeleton />;
  if (error) return <MentorshipError />;

  const pendingRequests = mentorshipRequests.filter(req => req.status === "pending");

  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Pending Mentorship Requests"
          description="Review and respond to mentorship requests from apprentices"
        />
        
        <GlassCard className="mb-6">
          {pendingRequests.length > 0 ? (
            <MentorshipRequestList requests={pendingRequests} isElectriciansSection={true} />
          ) : (
            <div className="text-center py-8">
              <p className="text-[#FFC900]/70">You don't have any pending mentorship requests at this time.</p>
            </div>
          )}
        </GlassCard>
      </div>
    </MainLayout>
  );
};

export default PendingRequests;
