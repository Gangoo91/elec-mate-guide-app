
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import { useTeamPresence } from "@/hooks/useTeamPresence";
import { OnlineIndicator } from "./OnlineIndicator";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { ChatPopover } from "../ChatPopover";
import { TeamMemberDialog } from "./TeamMemberDialog";
import { useToast } from "@/hooks/use-toast";

export function ProjectTeamSection() {
  const { presenceData } = useTeamPresence();
  const { user } = useAuth();
  const { toast } = useToast();
  const [selectedMember, setSelectedMember] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const teamMembers = [
    { id: "1", name: "John Smith", role: "Project Manager" },
    { id: "2", name: "Sarah Wilson", role: "Lead Electrician" },
    { id: "3", name: "Mike Johnson", role: "Apprentice" },
  ];

  const getPresenceForMember = (memberId: string) => {
    return presenceData.find(p => p.user_id === memberId);
  };

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

  return (
    <Card className="bg-[#333] border-[#444]">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-[#FFC900]">
          <Users className="inline-block w-4 h-4 mr-2" /> Team Members
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="space-y-3">
          {teamMembers.map((member) => {
            const presence = getPresenceForMember(member.id);
            return (
              <div 
                key={member.id} 
                className="flex items-center justify-between p-2 rounded-md hover:bg-[#444]/30 cursor-pointer transition-colors"
                role="button"
                tabIndex={0}
                onClick={() => {
                  setSelectedMember(member);
                  setIsDialogOpen(true);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedMember(member);
                    setIsDialogOpen(true);
                  }
                }}
              >
                <div>
                  <p className="text-sm text-[#FFC900]">{member.name}</p>
                  <p className="text-xs text-[#FFC900]/70">{member.role}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <OnlineIndicator online={presence?.online} />
                  <ChatPopover 
                    recipientId={member.id} 
                    data-member-id={member.id}
                  />
                </div>
              </div>
            );
          })}
        </div>
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
