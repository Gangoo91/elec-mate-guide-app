
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import { useTeamPresence } from "@/hooks/useTeamPresence";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { TeamMemberDialog } from "./TeamMemberDialog";
import { TeamMemberList } from "./TeamMemberList";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function ProjectTeamSection() {
  const { presenceData } = useTeamPresence();
  const { toast } = useToast();
  const [selectedMember, setSelectedMember] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

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
    setIsSheetOpen(true);
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

      {/* Member Details Sheet/Sidebar */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="bg-[#333] border-[#444] text-[#FFC900]">
          <SheetHeader>
            <SheetTitle className="text-[#FFC900]">Team Member Details</SheetTitle>
            <SheetDescription className="text-[#FFC900]/70">
              View team member information and activity
            </SheetDescription>
          </SheetHeader>
          
          {selectedMember && (
            <div className="py-6 space-y-6">
              <div className="space-y-2">
                <h3 className="text-[#FFC900] text-sm font-medium">Profile</h3>
                <div className="bg-[#444]/30 p-4 rounded-md space-y-3">
                  <div>
                    <p className="text-xs text-[#FFC900]/70">Name</p>
                    <p className="text-sm text-[#FFC900]">{selectedMember.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#FFC900]/70">Role</p>
                    <p className="text-sm text-[#FFC900]">{selectedMember.role}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#FFC900]/70">Status</p>
                    <p className="text-sm text-[#FFC900]">
                      {presenceData.find(p => p.user_id === selectedMember.id)?.online 
                        ? 'Online' 
                        : 'Offline'}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-[#FFC900]/70">Last active</p>
                    <p className="text-sm text-[#FFC900]">
                      {presenceData.find(p => p.user_id === selectedMember.id)?.last_seen 
                        ? new Date(presenceData.find(p => p.user_id === selectedMember.id)?.last_seen).toLocaleString()
                        : 'Unknown'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-[#FFC900] text-sm font-medium">Recent Activity</h3>
                <div className="bg-[#444]/30 p-4 rounded-md">
                  <ul className="space-y-2">
                    <li className="text-xs text-[#FFC900]/70">Updated task "Install lighting" - 1 day ago</li>
                    <li className="text-xs text-[#FFC900]/70">Completed job #1234 - 3 days ago</li>
                    <li className="text-xs text-[#FFC900]/70">Added comment to Project XYZ - 5 days ago</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex justify-end space-x-2 pt-4">
                <Button 
                  variant="outline" 
                  className="border-[#444] text-[#FFC900]"
                  onClick={() => {
                    setIsDialogOpen(true);
                    setIsSheetOpen(false);
                  }}
                >
                  Edit Member
                </Button>
                <Button 
                  variant="outline"
                  className="border-[#444] text-[#FFC900] bg-red-500/10 hover:bg-red-500/20"
                  onClick={() => handleDelete(selectedMember.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>

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
