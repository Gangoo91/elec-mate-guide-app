
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
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Mentorship = () => {
  const location = useLocation();
  const isElectriciansSection = location.pathname.startsWith('/electricians');
  const isApprenticeSection = location.pathname.startsWith('/apprentices');
  const { data: mentors, isLoading, error } = useDataCaching<Mentor>("mentors", "mentorships");
  const { toast } = useToast();
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [requestMessage, setRequestMessage] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [mentorshipRequests, setMentorshipRequests] = useState(demoMentorshipRequests);
  const [activeTab, setActiveTab] = useState<string>("mentors");

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
        
        {isElectriciansSection ? (
          <Tabs defaultValue="pending" className="mb-8">
            <TabsList className="bg-[#22251e] border border-[#FFC900]/20">
              <TabsTrigger value="pending" className="data-[state=active]:bg-[#FFC900]/20 data-[state=active]:text-[#FFC900]">
                Pending Requests 
                {pendingRequestsCount > 0 && (
                  <span className="ml-2 bg-[#FFC900] text-[#22251e] text-xs rounded-full px-2 py-1">
                    {pendingRequestsCount}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="active" className="data-[state=active]:bg-[#FFC900]/20 data-[state=active]:text-[#FFC900]">
                Active Mentorships
              </TabsTrigger>
              <TabsTrigger value="guide" className="data-[state=active]:bg-[#FFC900]/20 data-[state=active]:text-[#FFC900]">
                Mentoring Guide
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="pending" className="mt-4">
              <MentorshipRequestList 
                requests={mentorshipRequests.filter(r => r.status === "pending")}
                onAcceptRequest={handleAcceptRequest}
                onRejectRequest={handleRejectRequest}
                onScheduleSession={handleScheduleSession}
                onStopMentoring={handleStopMentoring}
              />
            </TabsContent>
            
            <TabsContent value="active" className="mt-4">
              <MentorshipRequestList 
                requests={mentorshipRequests.filter(r => r.status === "accepted")}
                onAcceptRequest={handleAcceptRequest}
                onRejectRequest={handleRejectRequest}
                onScheduleSession={handleScheduleSession}
                onStopMentoring={handleStopMentoring}
              />
            </TabsContent>
            
            <TabsContent value="guide" className="mt-4">
              <MentorshipGuide isElectriciansSection={true} />
            </TabsContent>
          </Tabs>
        ) : (
          <>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <TabsList className="bg-[#22251e] border border-[#FFC900]/20">
                <TabsTrigger value="mentors" className="data-[state=active]:bg-[#FFC900]/20 data-[state=active]:text-[#FFC900]">
                  Find Mentors
                </TabsTrigger>
                <TabsTrigger value="guide" className="data-[state=active]:bg-[#FFC900]/20 data-[state=active]:text-[#FFC900]">
                  Mentorship Guide
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="mentors" className="mt-4">
                <MentorList 
                  mentors={displayMentors}
                  isLoading={isLoading}
                  onRequestMentorship={handleOpenRequestDialog}
                />
              </TabsContent>
              
              <TabsContent value="guide" className="mt-4">
                <MentorshipGuide isElectriciansSection={false} />
              </TabsContent>
            </Tabs>
            
            <MentorshipRequestDialog
              mentor={selectedMentor}
              open={dialogOpen}
              onOpenChange={setDialogOpen}
              requestMessage={requestMessage}
              onMessageChange={setRequestMessage}
              onSubmit={handleMentorshipRequest}
            />
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default Mentorship;
