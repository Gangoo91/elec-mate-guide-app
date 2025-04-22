
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";
import { useDataCaching } from "@/hooks/useDataCaching";
import { useToast } from "@/hooks/use-toast";

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

  const handleMentorshipRequest = (mentorId: string) => {
    toast({
      title: "Request Sent",
      description: "Your mentorship request has been submitted. The mentor will review it soon.",
    });
  };

  if (isLoading) {
    return (
      <MainLayout>
        <div className="container py-8">
          <div className="animate-pulse space-y-4">
            <div className="h-12 bg-[#FFC900]/10 rounded-lg w-1/3" />
            <div className="h-6 bg-[#FFC900]/10 rounded-lg w-2/3" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
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
  ];

  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Mentor Connect"
          description="Connect with experienced professionals in the electrical industry"
        />
        
        <div className="flex items-center gap-2 mt-6 mb-4">
          <Users className="h-5 w-5 text-[#FFC900]" />
          <h2 className="text-xl font-semibold text-[#FFC900]">Available Mentors</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayMentors.map((mentor) => (
            <Card key={mentor.id} className="border-[#FFC900]/20">
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
                <p className="text-sm text-gray-500">{mentor.experience} experience</p>
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
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10"
                  onClick={() => handleMentorshipRequest(mentor.id)}
                >
                  Request Mentorship
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Mentorship;
