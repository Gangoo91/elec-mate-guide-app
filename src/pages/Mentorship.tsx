import React, { useState, useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquare, Calendar, Clock, Inbox } from "lucide-react";
import { useDataCaching } from "@/hooks/useDataCaching";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import MentorshipInbox from "@/components/mentorship/MentorshipInbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MentorRequestDialog from "@/components/mentorship/MentorRequestDialog";

interface Mentor {
  id: string;
  user_id: string;
  name: string;
  title: string;
  experience: string;
  specialties: string[];
  availability: "High" | "Medium" | "Low";
}

interface Mentorship {
  id: string;
  mentee_id: string;
  mentor_id: string;
  status: string;
  created_at: string;
}

const Mentorship = () => {
  const { data: mentors, isLoading, error } = useDataCaching<Mentor>("mentors", "mentorships");
  const { toast } = useToast();
  const { user } = useAuth();
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [mentorships, setMentorships] = useState<Mentorship[]>([]);
  const [activeTab, setActiveTab] = useState("browse");

  useEffect(() => {
    if (!user) return;
    
    // Fetch existing mentorship requests
    const fetchMentorships = async () => {
      const { data, error } = await supabase
        .from("mentorships")
        .select("*")
        .eq("mentee_id", user.id);
        
      if (!error && data) {
        setMentorships(data);
      }
    };
    
    fetchMentorships();
  }, [user]);

  const handleOpenRequestDialog = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setDialogOpen(true);
  };

  const handleMentorshipRequestSent = (mentorshipData: any) => {
    // Add the new mentorship to state
    setMentorships(prev => [...prev, mentorshipData]);
    
    // Switch to inbox tab
    setActiveTab("inbox");
  };

  const isMentorRequested = (mentorId: string) => {
    return mentorships.some(m => m.mentor_id === mentorId);
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
          <div className="text-center text-[#FFC900]">
            <h2 className="text-xl">Unable to load mentors</h2>
            <p className="text-[#FFC900]/80">Please try again later</p>
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

  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Mentor Connect"
          description="Connect with experienced professionals in the electrical industry for guidance, support, and career advice"
        />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
          <div className="flex items-center justify-between gap-4 mb-6">
            <TabsList className="bg-[#151812] border border-[#FFC900]/20">
              <TabsTrigger 
                value="browse" 
                className="data-[state=active]:bg-[#FFC900]/10 data-[state=active]:text-[#FFC900]"
              >
                <Users className="h-4 w-4 mr-2" />
                Browse Mentors
              </TabsTrigger>
              <TabsTrigger 
                value="inbox" 
                className="data-[state=active]:bg-[#FFC900]/10 data-[state=active]:text-[#FFC900]"
              >
                <Inbox className="h-4 w-4 mr-2" />
                Messages
              </TabsTrigger>
            </TabsList>
            <Badge variant="outline" className="border-[#FFC900]/20 text-[#FFC900]">
              {displayMentors.length} Mentors Available
            </Badge>
          </div>

          <TabsContent value="browse" className="focus-visible:outline-none focus-visible:ring-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {displayMentors.map((mentor) => (
                <Card key={mentor.id} className="border-[#FFC900]/20 transition-all hover:border-[#FFC900]/40 flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-[#FFC900]">{mentor.name}</CardTitle>
                      <Badge 
                        variant="outline" 
                        className={`
                          ${mentor.availability === 'High' ? 'border-green-500 text-green-500' : ''} 
                          ${mentor.availability === 'Medium' ? 'border-yellow-500 text-yellow-500' : ''} 
                          ${mentor.availability === 'Low' ? 'border-red-500 text-red-500' : ''}
                        `}
                      >
                        {mentor.availability} Availability
                      </Badge>
                    </div>
                    <p className="font-medium text-gray-400">{mentor.title}</p>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{mentor.experience} experience</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {mentor.specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary" className="bg-[#FFC900]/10 text-[#FFC900]">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    {isMentorRequested(mentor.user_id) ? (
                      <Button 
                        variant="secondary" 
                        className="w-full bg-[#FFC900]/10 text-[#FFC900] cursor-not-allowed"
                        disabled
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Request Sent
                      </Button>
                    ) : (
                      <Button 
                        variant="outline" 
                        className="w-full border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10"
                        onClick={() => handleOpenRequestDialog(mentor)}
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Request Mentorship
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-[#22251e] rounded-xl p-6 border border-[#FFC900]/20">
              <h3 className="text-xl font-bold text-[#FFC900] mb-3">How Mentorship Works</h3>
              <div className="grid gap-6 md:grid-cols-3 mt-6">
                <Card className="border-[#FFC900]/20 bg-[#151812]">
                  <CardHeader>
                    <div className="rounded-full bg-[#FFC900]/10 p-3 w-12 h-12 flex items-center justify-center mb-2">
                      <MessageSquare className="h-6 w-6 text-[#FFC900]" />
                    </div>
                    <CardTitle className="text-base text-[#FFC900]">1. Send a Request</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[#FFC900]/80">
                      Select a mentor who matches your interests and send them a request with your goals and questions.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-[#FFC900]/20 bg-[#151812]">
                  <CardHeader>
                    <div className="rounded-full bg-[#FFC900]/10 p-3 w-12 h-12 flex items-center justify-center mb-2">
                      <Calendar className="h-6 w-6 text-[#FFC900]" />
                    </div>
                    <CardTitle className="text-base text-[#FFC900]">2. Schedule Sessions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[#FFC900]/80">
                      Once accepted, arrange meetings that work for both of you - online, phone call, or in person.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-[#FFC900]/20 bg-[#151812]">
                  <CardHeader>
                    <div className="rounded-full bg-[#FFC900]/10 p-3 w-12 h-12 flex items-center justify-center mb-2">
                      <Users className="h-6 w-6 text-[#FFC900]" />
                    </div>
                    <CardTitle className="text-base text-[#FFC900]">3. Grow Together</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[#FFC900]/80">
                      Build a valuable professional relationship and gain insights that will help advance your career.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="inbox" className="focus-visible:outline-none focus-visible:ring-0">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="md:col-span-2">
                <MentorshipInbox />
              </div>
              <div>
                <Card className="border-[#FFC900]/20">
                  <CardHeader>
                    <CardTitle className="text-[#FFC900] flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Your Mentorships
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {mentorships.length > 0 ? (
                      <div className="space-y-4">
                        {mentorships.map(mentorship => {
                          const mentor = displayMentors.find(m => m.user_id === mentorship.mentor_id);
                          return (
                            <div 
                              key={mentorship.id} 
                              className="p-3 border border-[#FFC900]/20 rounded-md bg-[#151812]/80"
                            >
                              <div className="flex items-center gap-2">
                                <div className="h-8 w-8 bg-[#FFC900]/20 text-[#FFC900] rounded-full flex items-center justify-center">
                                  {mentor?.name.charAt(0) || 'M'}
                                </div>
                                <div>
                                  <p className="font-medium text-[#FFC900]">{mentor?.name || "Mentor"}</p>
                                  <div className="flex items-center gap-1">
                                    <Badge 
                                      className={`text-xs ${
                                        mentorship.status === 'accepted' 
                                          ? 'bg-green-500/20 text-green-500' 
                                          : mentorship.status === 'pending'
                                            ? 'bg-yellow-500/20 text-yellow-500'
                                            : 'bg-red-500/20 text-red-500'
                                      }`}
                                    >
                                      {mentorship.status.charAt(0).toUpperCase() + mentorship.status.slice(1)}
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="text-center py-4 text-[#FFC900]/60">
                        <p>No mentorships yet</p>
                        <Button
                          variant="link"
                          onClick={() => setActiveTab('browse')}
                          className="text-[#FFC900] mt-2"
                        >
                          Browse mentors to connect
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <MentorRequestDialog 
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          selectedMentor={selectedMentor}
          onRequestSent={handleMentorshipRequestSent}
        />
      </div>
    </MainLayout>
  );
};

export default Mentorship;
