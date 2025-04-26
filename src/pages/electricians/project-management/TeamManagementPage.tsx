import React, { useState, useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { useToast } from "@/hooks/use-toast";
import { NotificationBadge } from "@/components/projects/NotificationBadge";
import { TeamSearch } from "@/components/team/TeamSearch";
import { TeamMemberList } from "@/components/team/TeamMemberList";
import { AddTeamMemberDialog } from "@/components/projects/dialog/AddTeamMemberDialog";
import { TeamMember } from "@/types/team";

const TeamManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
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
  }, []);

  const handleAddMember = (newMember: { name: string; role: string; email?: string; phone?: string }) => {
    const id = `${Date.now()}`; 
    const newTeamMember: TeamMember = {
      id,
      name: newMember.name,
      role: newMember.role,
      phone: newMember.phone || null,
      email: newMember.email || null,
      skills: [],
      availability: "Monday-Friday"
    };
    
    setTeamMembers(prev => [...prev, newTeamMember]);
    
    toast({
      title: "Success",
      description: "Team member added successfully",
    });
  };

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
            <TeamSearch 
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
            <AddTeamMemberDialog onAddMember={handleAddMember} />
          </div>
          
          <div className="space-y-4">
            <TeamMemberList 
              teamMembers={filteredTeamMembers}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TeamManagementPage;
