import React, { useState, useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Plus, User, Phone, Mail, Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { NotificationBadge } from "@/components/projects/NotificationBadge";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  phone: string | null;
  email: string | null;
  skills: string[] | null;
  availability: string | null;
}

const TeamManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const mockTeamMembers = [
      {
        id: "1",
        name: "John Smith",
        role: "Senior Electrician",
        phone: "07700 900123",
        email: "john.smith@example.com",
        skills: ["Commercial Installations", "Testing & Inspection", "Fault Finding"],
        availability: "Monday-Friday"
      },
      {
        id: "2",
        name: "Sarah Johnson",
        role: "Electrical Engineer",
        phone: "07700 900456",
        email: "sarah.johnson@example.com",
        skills: ["System Design", "CAD", "Project Planning"],
        availability: "Monday, Wednesday, Friday"
      },
      {
        id: "3",
        name: "David Williams",
        role: "Apprentice Electrician",
        phone: "07700 900789",
        email: "david.williams@example.com",
        skills: ["Domestic Wiring", "Basic Fault Finding"],
        availability: "Monday-Thursday"
      }
    ];

    setTimeout(() => {
      setTeamMembers(mockTeamMembers);
      setIsLoading(false);
    }, 500);

    /*
    const fetchTeamMembers = async () => {
      try {
        const { data, error } = await supabase
          .from('team_members')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setTeamMembers(data || []);
      } catch (error) {
        console.error("Error fetching team members:", error);
        toast({
          title: "Error",
          description: "Failed to fetch team members. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeamMembers();
    */
  }, []);

  const filteredTeamMembers = teamMembers.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (member.skills && member.skills.some(skill => 
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    ))
  );

  return (
    <MainLayout>
      <div className="container py-8">
        <div className="flex justify-between items-center mb-6">
          <PageHeader
            title="Team Management"
            description="Manage your electrical team members and their availability"
            hideBackButton={false}
          />
          <NotificationBadge />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div className="relative flex-1 max-w-lg">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-[#FFC900]/50" />
              </div>
              <input
                type="text"
                placeholder="Search team members by name, role, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-[#FFC900]/30 rounded-md bg-[#22251e] text-[#FFC900] focus:outline-none focus:border-[#FFC900]/70"
              />
            </div>
            
            <Button 
              className="bg-[#FFC900] hover:bg-[#e5b700] text-[#151812] ml-4"
              onClick={() => setIsAddDialogOpen(true)}
            >
              <Plus className="mr-2 h-4 w-4" /> Add Team Member
            </Button>
          </div>
          
          <div className="space-y-4">
            {isLoading ? (
              Array(3).fill(0).map((_, index) => (
                <Card key={index} className="bg-[#22251e] border-[#FFC900]/20">
                  <CardContent className="p-6">
                    <div className="w-full h-24 bg-[#333]/20 rounded-md animate-pulse"></div>
                  </CardContent>
                </Card>
              ))
            ) : filteredTeamMembers.length > 0 ? (
              filteredTeamMembers.map(member => (
                <Card 
                  key={member.id} 
                  className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-[#FFC900] font-medium text-lg flex items-center">
                          <User className="h-5 w-5 mr-2" />
                          {member.name}
                        </h3>
                        <p className="text-[#FFC900]/70 text-sm flex items-center mt-1">
                          <Briefcase className="h-4 w-4 mr-2" />
                          {member.role}
                        </p>
                      </div>
                      
                      <div className="flex flex-col space-y-1">
                        <p className="text-[#FFC900]/70 text-sm flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          {member.phone || "No phone number"}
                        </p>
                        <p className="text-[#FFC900]/70 text-sm flex items-center">
                          <Mail className="h-4 w-4 mr-2" />
                          {member.email || "No email"}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <p className="text-[#FFC900]/80 text-sm">
                        <span className="font-medium">Availability:</span> {member.availability}
                      </p>
                      
                      <div className="mt-2">
                        <p className="text-[#FFC900]/80 text-sm font-medium mb-1">Skills:</p>
                        <div className="flex flex-wrap gap-2">
                          {member.skills?.map((skill, index) => (
                            <span 
                              key={index}
                              className="bg-[#FFC900]/10 text-[#FFC900] text-xs px-2 py-1 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-8">
                <User className="h-12 w-12 text-[#FFC900]/50 mx-auto mb-4" />
                <h3 className="text-xl text-[#FFC900]">No Team Members Found</h3>
                <p className="text-[#FFC900]/70 mt-2">Try adjusting your search term or add new team members</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="bg-[#22251e] border-[#FFC900]/20 w-[95%] max-w-lg mx-auto">
          <DialogHeader>
            <DialogTitle className="text-[#FFC900]">Add New Team Member</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-[#FFC900]/70">
              This is a placeholder for the team member form. In a real application, you would implement a form to collect team member details here.
            </p>
            <Button 
              className="bg-[#FFC900] hover:bg-[#e5b700] text-[#151812] mt-4"
              onClick={() => setIsAddDialogOpen(false)}
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
};

export default TeamManagementPage;
