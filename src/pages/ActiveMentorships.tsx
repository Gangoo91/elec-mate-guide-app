
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import GlassCard from "@/components/shared/GlassCard";
import { useDataCaching } from "@/hooks/useDataCaching";
import { MentorshipSkeleton } from "@/components/mentorship/MentorshipSkeleton";
import { MentorshipError } from "@/components/mentorship/MentorshipError";
import { demoMentorshipRequests } from "@/components/mentorship/demoData";
import { MentorshipRequestList, MentorshipRequest } from "@/components/mentorship/MentorshipRequestList";
import { toast } from "sonner";

const ActiveMentorships = () => {
  const { isLoading, error } = useDataCaching("mentorship-requests", "mentorships");
  const [mentorshipRequests] = React.useState(demoMentorshipRequests);
  
  if (isLoading) return <MentorshipSkeleton />;
  if (error) return <MentorshipError />;

  const acceptedRequests = mentorshipRequests.filter(req => req.status === "accepted");
  
  const handleAcceptRequest = (request: MentorshipRequest) => {
    toast.success(`Accepted request from ${request.apprenticeName}`);
  };
  
  const handleRejectRequest = (request: MentorshipRequest) => {
    toast.error(`Rejected request from ${request.apprenticeName}`);
  };
  
  const handleScheduleSession = (request: MentorshipRequest) => {
    toast.success(`Scheduled session with ${request.apprenticeName}`);
  };
  
  const handleStopMentoring = (request: MentorshipRequest) => {
    toast.info(`Stopped mentoring ${request.apprenticeName}`);
  };

  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Active Mentorships"
          description="Manage your ongoing mentorship relationships"
        />
        
        <GlassCard className="mb-6">
          {acceptedRequests.length > 0 ? (
            <MentorshipRequestList 
              requests={acceptedRequests}
              isLoading={false}
              onAcceptRequest={handleAcceptRequest}
              onRejectRequest={handleRejectRequest}
              onScheduleSession={handleScheduleSession}
              onStopMentoring={handleStopMentoring}
            />
          ) : (
            <div className="text-center py-8">
              <p className="text-[#FFC900]/70">You don't have any active mentorship relationships at this time.</p>
            </div>
          )}
        </GlassCard>
      </div>
    </MainLayout>
  );
};

export default ActiveMentorships;
