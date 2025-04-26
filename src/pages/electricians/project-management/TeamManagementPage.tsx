
import React, { useState, useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { useToast } from "@/hooks/use-toast";
import { NotificationBadge } from "@/components/projects/NotificationBadge";
import { TeamSearch } from "@/components/team/TeamSearch";
import { TeamMemberList } from "@/components/team/TeamMemberList";
import { TeamMemberDialog } from "@/components/team/TeamMemberDialog";
import { AddTeamMemberDialog } from "@/components/projects/dialog/AddTeamMemberDialog";
import { TeamMember } from "@/types/team";
import { supabase } from "@/integrations/supabase/client";

const TeamManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const { data, error } = await supabase
        .from('team_members')
        .select('*');

      if (error) throw error;

      setTeamMembers(data);
    } catch (error) {
      console.error('Error fetching team members:', error);
      toast({
        title: "Error",
        description: "Failed to load team members",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddMember = async (newMember: { name: string; role: string; email?: string; phone?: string }) => {
    try {
      const { data, error } = await supabase
        .from('team_members')
        .insert([{
          name: newMember.name,
          role: newMember.role,
          email: newMember.email || null,
          phone: newMember.phone || null,
        }])
        .select()
        .single();

      if (error) throw error;

      setTeamMembers(prev => [...prev, data]);
      
      toast({
        title: "Success",
        description: "Team member added successfully",
      });
    } catch (error) {
      console.error('Error adding team member:', error);
      toast({
        title: "Error",
        description: "Failed to add team member",
        variant: "destructive",
      });
    }
  };

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
    setDialogOpen(true);
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
              onMemberClick={handleMemberClick}
            />
          </div>

          <TeamMemberDialog 
            member={selectedMember}
            open={dialogOpen}
            onOpenChange={setDialogOpen}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default TeamManagementPage;
