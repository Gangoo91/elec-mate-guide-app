
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { useLocation } from "react-router-dom";
import BecomeMentorToggle from "@/components/mentorship/BecomeMentorToggle";
import { useDataCaching } from "@/hooks/useDataCaching";
import { useToast } from "@/hooks/use-toast";
import { Mentor } from "@/types/mentor";
import { MentorshipHero } from "@/components/mentorship/MentorshipHero";
import { MentorshipSkeleton } from "@/components/mentorship/MentorshipSkeleton";
import { MentorshipError } from "@/components/mentorship/MentorshipError";
import { MentorList } from "@/components/mentorship/MentorList";
import { MentorshipRequestList } from "@/components/mentorship/MentorshipRequestList";
import { MentorshipGuide } from "@/components/mentorship/MentorshipGuide";
import { MentorshipRequestDialog } from "@/components/mentorship/MentorshipRequestDialog";
import { demoMentors, demoMentorshipRequests } from "@/components/mentorship/demoData";

const Mentorship = () => {
  const location = useLocation();
  const isElectriciansSection = location.pathname.startsWith('/electricians');
  const { data: mentors, isLoading, error } = useDataCaching<Mentor>("mentors", "mentorships");
  const { toast } = useToast();
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [requestMessage, setRequestMessage] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [mentorshipRequests, setMentorshipRequests] = useState(demoMentorshipRequests);

  const handleOpenRequestDialog = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setDialogOpen(true);
  };

  const handleMentorshipRequest = () => {
    if (!selectedMentor) return;

    toast({
      title: "Request Sent",
      description: `Your mentorship request has been submitted to ${selectedMentor.name}. You'll be notified when they respond.`,
      variant: "default",
    });

    setDialogOpen(false);
    setRequestMessage("");
    setSelectedMentor(null);
  };

  const handleAcceptRequest = (request: any) => {
    setMentorshipRequests(prev => 
      prev.map(r => r.id === request.id ? {...r, status: "accepted"} : r)
    );
    
    toast({
      title: "Request Accepted",
      description: `You have accepted the mentorship request from ${request.apprenticeName}. You can now chat with them.`,
    });
  };

  const handleRejectRequest = (request: any) => {
    setMentorshipRequests(prev => 
      prev.map(r => r.id === request.id ? {...r, status: "rejected"} : r)
    );
    
    toast({
      title: "Request Declined",
      description: `You have declined the mentorship request from ${request.apprenticeName}.`,
    });
  };

  const handleScheduleSession = (request: any) => {
    toast({
      title: "Schedule a Session",
      description: `Opening calendar to schedule a session with ${request.apprenticeName}.`,
    });
  };
  
  // Define a function to handle stopping mentorship
  const handleStopMentoring = (request: any) => {
    setMentorshipRequests(prev => 
      prev.map(r => r.id === request.id ? {...r, status: "rejected"} : r)
    );
    
    toast({
      title: "Mentorship Ended",
      description: `You have ended mentorship with ${request.apprenticeName}.`,
    });
  };

  if (isLoading) return <MentorshipSkeleton />;
  if (error) return <MentorshipError />;

  const displayMentors = mentors || demoMentors;
  const pendingRequestsCount = mentorshipRequests.filter(r => r.status === "pending").length;

  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Mentor Connect"
          description={isElectriciansSection 
            ? "Share your expertise and guide the next generation of electrical professionals"
            : "Connect with experienced professionals in the electrical industry for guidance, support, and career advice"}
        />
        
        {isElectriciansSection && (
          <div className="mb-8">
            <BecomeMentorToggle />
          </div>
        )}
        
        <MentorshipHero 
          isElectriciansSection={isElectriciansSection} 
          mentorsCount={displayMentors.length}
          requestsCount={isElectriciansSection ? pendingRequestsCount : undefined}
        />
        
        {isElectriciansSection ? (
          <MentorshipRequestList 
            requests={mentorshipRequests}
            onAcceptRequest={handleAcceptRequest}
            onRejectRequest={handleRejectRequest}
            onScheduleSession={handleScheduleSession}
            onStopMentoring={handleStopMentoring}
          />
        ) : (
          <MentorList 
            mentors={displayMentors}
            isLoading={isLoading}
            onRequestMentorship={handleOpenRequestDialog}
          />
        )}

        <MentorshipGuide isElectriciansSection={isElectriciansSection} />

        {!isElectriciansSection && (
          <MentorshipRequestDialog
            mentor={selectedMentor}
            open={dialogOpen}
            onOpenChange={setDialogOpen}
            requestMessage={requestMessage}
            onMessageChange={setRequestMessage}
            onSubmit={handleMentorshipRequest}
          />
        )}
      </div>
    </MainLayout>
  );
};

export default Mentorship;
