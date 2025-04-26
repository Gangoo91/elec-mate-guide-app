
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { NotificationBadge } from "@/components/projects/NotificationBadge";
import { TeamSearch } from "@/components/team/TeamSearch";
import { TeamMemberList } from "@/components/team/TeamMemberList";
import { TeamMemberDialog } from "@/components/team/TeamMemberDialog";
import { AddTeamMemberDialog } from "@/components/projects/dialog/AddTeamMemberDialog";
import { TeamMember } from "@/types/team";
import { useTeamMembers } from "@/hooks/useTeamMembers";

const TeamManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const { 
    teamMembers, 
    isLoading, 
    addTeamMember, 
    updateTeamMember, 
    deleteTeamMember 
  } = useTeamMembers();

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
    setDialogOpen(true);
  };

  const handleDeleteMember = async (id: string) => {
    await deleteTeamMember(id);
    setDialogOpen(false);
    setSelectedMember(null);
  };

  const handleEditMember = async (member: TeamMember) => {
    await updateTeamMember(member.id, member);
    setSelectedMember(member);
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
            <AddTeamMemberDialog onAddMember={addTeamMember} />
          </div>
          
          <div className="space-y-4">
            <TeamMemberList 
              teamMembers={filteredTeamMembers}
              isLoading={isLoading}
              onMemberClick={handleMemberClick}
            />
          </div>

          {selectedMember && (
            <TeamMemberDialog 
              member={selectedMember}
              open={dialogOpen}
              onOpenChange={setDialogOpen}
              onEdit={handleEditMember}
              onDelete={handleDeleteMember}
            />
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default TeamManagementPage;
