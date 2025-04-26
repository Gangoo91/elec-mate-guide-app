
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import { useState } from "react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
}

interface TeamMemberDialogProps {
  member: TeamMember | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onEdit: (member: TeamMember) => void;
  onDelete: (id: string) => void;
}

export function TeamMemberDialog({
  member,
  open,
  onOpenChange,
  onEdit,
  onDelete,
}: TeamMemberDialogProps) {
  const [isEditing, setIsEditing] = useState(false);

  if (!member) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#333] border-[#444] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-[#FFC900]">Team Member Details</DialogTitle>
        </DialogHeader>

        {isEditing ? (
          <div className="space-y-4 py-4">
            <input
              type="text"
              value={member.name}
              className="w-full p-2 bg-[#444] border border-[#555] rounded text-[#FFC900]"
              // Add onChange handler when implementing edit functionality
            />
            <input
              type="text"
              value={member.role}
              className="w-full p-2 bg-[#444] border border-[#555] rounded text-[#FFC900]"
              // Add onChange handler when implementing edit functionality
            />
            <div className="flex justify-end space-x-2">
              <Button
                variant="outline"
                onClick={() => setIsEditing(false)}
                className="border-[#444] text-[#FFC900]"
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  onEdit(member);
                  setIsEditing(false);
                }}
                className="bg-[#FFC900] text-black hover:bg-[#FFC900]/90"
              >
                Save
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-[#FFC900]">Name</h4>
              <p className="text-[#FFC900]/70">{member.name}</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-[#FFC900]">Role</h4>
              <p className="text-[#FFC900]/70">{member.role}</p>
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
                onClick={() => onDelete(member.id)}
                className="border-[#444] text-red-500"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
