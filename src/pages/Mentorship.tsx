
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquare, Calendar, Clock } from "lucide-react";
import { useDataCaching } from "@/hooks/useDataCaching";
import { useToast } from "@/hooks/use-toast";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

interface Mentor {
  id: string;
  user_id: string;
  name: string;
  title: string;
  experience: string;
  specialties: string[];
  availability: "High" | "Medium" | "Low";
}

const Mentorship = () => {
  const { data: mentors, isLoading, error } = useDataCaching<Mentor>("mentors", "mentorships");
  const { toast } = useToast();
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [requestMessage, setRequestMessage] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenRequestDialog = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setDialogOpen(true);
  };

  const handleMentorshipRequest = () => {
    if (!selectedMentor) return;

    // Here we would integrate with Supabase to send the mentorship request
    toast({
      title: "Request Sent",
      description: `Your mentorship request has been submitted to ${selectedMentor.name}. You'll be notified when they respond.`,
    });

    // Reset state
    setDialogOpen(false);
    setRequestMessage("");
    setSelectedMentor(null);
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
        
        <div className="flex items-center justify-between gap-2 mt-6 mb-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-[#FFC900]" />
            <h2 className="text-xl font-semibold text-[#FFC900]">Available Mentors</h2>
          </div>
          <Badge variant="outline" className="border-[#FFC900]/20 text-[#FFC900]">
            {displayMentors.length} Mentors
          </Badge>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayMentors.map((mentor) => (
            <Card key={mentor.id} className="border-[#FFC900]/20 transition-all hover:border-[#FFC900]/40">
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
              <CardContent>
                <p className="text-sm mb-2">Specialties:</p>
                <div className="flex flex-wrap gap-2">
                  {mentor.specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary" className="bg-[#FFC900]/10 text-[#FFC900]">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="w-full border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10"
                  onClick={() => handleOpenRequestDialog(mentor)}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Request Mentorship
                </Button>
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

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Request Mentorship</DialogTitle>
              <DialogDescription className="text-[#FFC900]/80">
                Send a message to {selectedMentor?.name} explaining why you'd like to connect and what you hope to learn.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-2">
              <div className="space-y-2">
                <p className="text-sm font-medium text-[#FFC900]">Your message</p>
                <Textarea
                  placeholder="Hello! I'm interested in learning more about your expertise in..."
                  className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900] placeholder:text-[#FFC900]/50 resize-none"
                  rows={5}
                  value={requestMessage}
                  onChange={(e) => setRequestMessage(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button 
                variant="outline" 
                onClick={() => setDialogOpen(false)} 
                className="border-[#FFC900]/20 text-[#FFC900]"
              >
                Cancel
              </Button>
              <Button 
                variant="default" 
                onClick={handleMentorshipRequest} 
                disabled={!requestMessage.trim()}
                className="bg-[#FFC900] text-black hover:bg-[#FFC900]/80"
              >
                Send Request
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </MainLayout>
  );
};

export default Mentorship;
