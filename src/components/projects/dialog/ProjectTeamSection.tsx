
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import { useTeamPresence } from "@/hooks/useTeamPresence";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { TeamMemberDialog } from "./TeamMemberDialog";
import { TeamMemberList } from "./TeamMemberList";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { AddTeamMemberDialog } from "./AddTeamMemberDialog";

interface TeamMember {
  id: string;
  name: string;
  role: string;
}

export function ProjectTeamSection() {
  const { presenceData } = useTeamPresence();
  const { toast } = useToast();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { id: "1", name: "John Smith", role: "Project Manager" },
    { id: "2", name: "Sarah Wilson", role: "Lead Electrician" },
    { id: "3", name: "Mike Johnson", role: "Apprentice" },
  ]);

  const handleEdit = (member: TeamMember) => {
    setTeamMembers(prev => 
      prev.map(m => m.id === member.id ? member : m)
    );
    
    toast({
      title: "Success",
      description: "Team member updated successfully",
    });
    setIsDialogOpen(false);
    setIsSheetOpen(false);
  };

  const handleDelete = (id: string) => {
    setTeamMembers(prev => prev.filter(m => m.id !== id));
    
    toast({
      title: "Success",
      description: "Team member removed successfully",
    });
    setIsDialogOpen(false);
    setIsSheetOpen(false);
  };

  const handleAddMember = (newMember: Omit<TeamMember, 'id'>) => {
    const id = `${teamMembers.length + 1}`; // In a real app, this would be handled by the backend
    setTeamMembers(prev => [...prev, { ...newMember, id }]);
  };

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
    setIsDialogOpen(true);
  };

  const getMemberPresence = (memberId: string) => {
    return presenceData.find(p => p.user_id === memberId);
  };

  return (
    <Card className="bg-[#333] border-[#444]">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-medium text-[#FFC900]">
          <Users className="inline-block w-4 h-4 mr-2" /> Team Members
        </CardTitle>
        <AddTeamMemberDialog onAddMember={handleAddMember} />
      </CardHeader>
      <CardContent className="pt-2">
        <TeamMemberList
          teamMembers={teamMembers}
          presenceData={presenceData}
          onMemberClick={handleMemberClick}
        />
      </CardContent>

      {/* Member Details Dialog */}
      {selectedMember && (
        <TeamMemberDialog
          member={selectedMember}
          presence={getMemberPresence(selectedMember.id)}
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </Card>
  );
}
