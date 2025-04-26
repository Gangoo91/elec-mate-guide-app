
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, MessageCircle, User, UserCheck, Clock } from "lucide-react";
import { useState } from "react";
import { TeamMemberPresence } from "@/hooks/useTeamPresence";
import { useToast } from "@/hooks/use-toast";

interface TeamMember {
  id: string;
  name: string;
  role: string;
}

interface TeamMemberDialogProps {
  member: TeamMember | null;
  presence?: TeamMemberPresence;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onEdit: (member: TeamMember) => void;
  onDelete: (id: string) => void;
}

export function TeamMemberDialog({
  member,
  presence,
  open,
  onOpenChange,
  onEdit,
  onDelete,
}: TeamMemberDialogProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const { toast } = useToast();

  // Update local state when member changes
  if (member && member.name !== name) {
    setName(member.name);
  }
  if (member && member.role !== role) {
    setRole(member.role);
  }

  if (!member) return null;

  const handleSave = () => {
    if (name.trim() === '' || role.trim() === '') {
      toast({
        title: "Error",
        description: "Name and role cannot be empty",
        variant: "destructive"
      });
      return;
    }
    
    onEdit({
      ...member,
      name: name.trim(),
      role: role.trim()
    });
    setIsEditing(false);
  };

  const formatLastSeen = (timestamp?: string) => {
    if (!timestamp) return 'Unknown';
    
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#333] border-[#444] sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-[#FFC900]">Team Member Details</DialogTitle>
        </DialogHeader>

        {isEditing ? (
          <div className="space-y-4 py-4">
            <div>
              <label className="block text-sm font-medium text-[#FFC900] mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 bg-[#444] border border-[#555] rounded text-[#FFC900]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#FFC900] mb-1">Role</label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-2 bg-[#444] border border-[#555] rounded text-[#FFC900]"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button
                variant="outline"
                onClick={() => setIsEditing(false)}
                className="border-[#444] text-[#FFC900]"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSave}
                className="bg-[#FFC900] text-black hover:bg-[#FFC900]/90"
              >
                Save
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 py-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-[#FFC900]" />
                <div>
                  <h4 className="text-sm font-medium text-[#FFC900]">Name</h4>
                  <p className="text-[#FFC900]/70">{member.name}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <UserCheck className="h-5 w-5 text-[#FFC900]" />
                <div>
                  <h4 className="text-sm font-medium text-[#FFC900]">Role</h4>
                  <p className="text-[#FFC900]/70">{member.role}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className={`h-3 w-3 rounded-full ${presence?.online ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                <div>
                  <h4 className="text-sm font-medium text-[#FFC900]">Status</h4>
                  <p className="text-[#FFC900]/70">{presence?.online ? 'Online' : 'Offline'}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-[#FFC900]" />
                <div>
                  <h4 className="text-sm font-medium text-[#FFC900]">Last Seen</h4>
                  <p className="text-[#FFC900]/70">{formatLastSeen(presence?.last_seen)}</p>
                </div>
              </div>
              
              <div className="pt-2 border-t border-[#444]">
                <h4 className="text-sm font-medium text-[#FFC900] mb-2">Team Information</h4>
                <div className="bg-[#444]/30 p-3 rounded-md">
                  <p className="text-[#FFC900]/70 text-sm">Member of Elec-Mate: <span className="text-[#FFC900]">Yes</span></p>
                  <p className="text-[#FFC900]/70 text-sm">Team Since: <span className="text-[#FFC900]">June 2024</span></p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-2">
              <Button
                variant="outline"
                onClick={() => setIsEditing(true)}
                className="border-[#444] text-[#FFC900]"
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
              <Button
                variant="outline"
                className="border-[#444] text-[#FFC900]"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat
              </Button>
              <Button
                variant="outline"
                onClick={() => onDelete(member.id)}
                className="border-[#444] text-red-500"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Remove
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
