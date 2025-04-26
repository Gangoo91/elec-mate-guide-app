
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { NotificationBadge } from "@/components/projects/NotificationBadge";
import { TeamMemberList } from "@/components/projects/dialog/TeamMemberList";
import { TeamMemberDialog } from "@/components/projects/dialog/TeamMemberDialog";
import { AddTeamMemberDialog } from "@/components/projects/dialog/AddTeamMemberDialog";
import { useTeamMembers, TeamMember } from "@/hooks/useTeamMembers";
import { useTeamPresence } from "@/hooks/useTeamPresence";

const TeamManagementPage = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { teamMembers, loading, addTeamMember } = useTeamMembers();
  const { presenceData } = useTeamPresence();

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
    setDialogOpen(true);
  };

  return (
    <MainLayout>
      <div className="container py-8">
        <div className="flex justify-between items-center mb-6">
          <PageHeader
            title="Team Management"
            description="Manage your team members and their availability"
            hideBackButton={false}
          />
          <NotificationBadge />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-end mb-6">
            <AddTeamMemberDialog onAddMember={addTeamMember} />
          </div>
          
          <div className="space-y-4">
            <TeamMemberList 
              teamMembers={teamMembers}
              presenceData={presenceData}
              onMemberClick={handleMemberClick}
            />
          </div>

          {selectedMember && (
            <TeamMemberDialog 
              member={selectedMember}
              presence={presenceData.find(p => p.user_id === selectedMember.id)}
              open={dialogOpen}
              onOpenChange={setDialogOpen}
            />
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default TeamManagementPage;
