
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import { useTeamPresence } from "@/hooks/useTeamPresence";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { TeamMemberDialog } from "./TeamMemberDialog";
import { TeamMemberList } from "./TeamMemberList";

export function ProjectTeamSection() {
  const { presenceData } = useTeamPresence();
  const { toast } = useToast();
  const [selectedMember, setSelectedMember] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const teamMembers = [
    { id: "1", name: "John Smith", role: "Project Manager" },
    { id: "2", name: "Sarah Wilson", role: "Lead Electrician" },
    { id: "3", name: "Mike Johnson", role: "Apprentice" },
  ];

  const handleEdit = (member) => {
    toast({
      title: "Success",
      description: "Team member updated successfully",
    });
    setIsDialogOpen(false);
  };

  const handleDelete = (id: string) => {
    toast({
      title: "Success",
      description: "Team member deleted successfully",
    });
    setIsDialogOpen(false);
  };

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setIsDialogOpen(true);
  };

  return (
    <Card className="bg-[#333] border-[#444]">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-[#FFC900]">
          <Users className="inline-block w-4 h-4 mr-2" /> Team Members
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <TeamMemberList
          teamMembers={teamMembers}
          presenceData={presenceData}
          onMemberClick={handleMemberClick}
        />
      </CardContent>

      <TeamMemberDialog
        member={selectedMember}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </Card>
  );
}
