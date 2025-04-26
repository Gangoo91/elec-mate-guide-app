import React, { useState, useMemo } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { useLocation } from "react-router-dom";
import BecomeMentorToggle from "@/components/mentorship/BecomeMentorToggle";
import { useDataCaching } from "@/hooks/useDataCaching";
import { useToast } from "@/hooks/use-toast";
import { Mentor } from "@/types/mentor";
import { MentorshipHero } from "@/components/mentorship/MentorshipHero";
import { MentorList } from "@/components/mentorship/MentorList";
import { MentorshipRequestList, MentorshipRequest } from "@/components/mentorship/MentorshipRequestList";
import { MentorshipGuide } from "@/components/mentorship/MentorshipGuide";
import { MentorshipRequestDialog } from "@/components/mentorship/MentorshipRequestDialog";
import { Button } from "@/components/ui/button";

const Mentorship = () => {
  const location = useLocation();
  const isElectriciansSection = location.pathname.startsWith('/electricians');
  const { data: mentors, isLoading, error } = useDataCaching<Mentor>("mentors", "mentorships");
  const { toast } = useToast();
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [requestMessage, setRequestMessage] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const demoMentorshipRequests: MentorshipRequest[] = [
    {
      id: "1",
      apprenticeName: "Thomas Johnson",
      apprenticeId: "user-123",
      message: "I'm currently in my second year of apprenticeship and struggling with three-phase systems. I'd love some guidance on practical applications and common troubleshooting techniques.",
      requestDate: "2025-04-15T14:30:00Z",
      status: "pending",
      expertise: ["Three-Phase Systems", "Troubleshooting"]
    },
    {
      id: "2",
      apprenticeName: "Sarah Williams",
      apprenticeId: "user-456",
      message: "I'm preparing for my NVQ Level 3 assessment and would appreciate some mentoring on motor control circuits and industrial installations. I have my practical exam in 6 weeks.",
      requestDate: "2025-04-18T09:15:00Z",
      status: "pending",
      expertise: ["Industrial", "Motor Control"]
    },
    {
      id: "3",
      apprenticeName: "Michael Chen",
      apprenticeId: "user-789",
      message: "I've been working on residential installations but want to transition to commercial projects. Could you share insights on the main differences and what additional skills I should focus on?",
      requestDate: "2025-04-10T11:45:00Z",
      status: "accepted",
      expertise: ["Commercial", "Career Development"]
    },
  ];

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
    // Here you would integrate with a calendar or scheduling system
  };

  if (isLoading) {
    return (
      <MainLayout>
        <div className="container py-8">
          <div className="animate-pulse space-y-4">
            <div className="h-12 bg-[#FFC900]/10 rounded-lg w-1/3" />
            <div className="h-6 bg-[#FFC900]/10 rounded-lg w-2/3" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-64 bg-[#FFC900]/10 rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div className="container py-8">
          <div className="text-center text-[#FFC900] p-8 bg-[#22251e] rounded-lg border border-[#FFC900]/20">
            <h2 className="text-xl">Unable to load mentors</h2>
            <p className="text-[#FFC900]/80 mt-2">Please try again later</p>
            <Button 
              variant="outline" 
              onClick={() => window.location.reload()} 
              className="mt-4 border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10"
            >
              Refresh Page
            </Button>
          </div>
        </div>
      </MainLayout>
    );
  }

  const displayMentors = mentors || [
    {
      id: "1",
      user_id: "1",
      name: "Sarah Johnson",
      title: "Master Electrician",
      experience: "15+ years",
      specialties: ["Commercial", "Industrial"],
      availability: "High",
    },
    {
      id: "2",
      user_id: "2",
      name: "David Miller",
      title: "Electrical Engineer",
      experience: "12 years",
      specialties: ["Renewable Energy", "Smart Home"],
      availability: "Medium",
    },
    {
      id: "3",
      user_id: "3",
      name: "Michael Chen",
      title: "Project Manager",
      experience: "8 years",
      specialties: ["Residential", "Lighting"],
      availability: "Low",
    },
    {
      id: "4",
      user_id: "4",
      name: "Emily Rodriguez",
      title: "Licensed Electrician",
      experience: "10 years",
      specialties: ["Safety", "Code Compliance"],
      availability: "High",
    },
    {
      id: "5",
      user_id: "5",
      name: "James Wilson",
      title: "Solar Installation Expert",
      experience: "6 years",
      specialties: ["Solar", "Renewable Systems"],
      availability: "Medium",
    },
    {
      id: "6",
      user_id: "6",
      name: "Alexandra Kim",
      title: "Systems Designer",
      experience: "9 years",
      specialties: ["Building Automation", "Smart Systems"],
      availability: "Low",
    },
  ];

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
