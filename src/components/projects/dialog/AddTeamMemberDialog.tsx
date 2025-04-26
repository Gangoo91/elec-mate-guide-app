
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus, User, Briefcase } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface TeamMember {
  id: string;
  name: string;
  role: string;
}

interface AddTeamMemberDialogProps {
  onAddMember: (member: Omit<TeamMember, 'id'>) => void;
}

export function AddTeamMemberDialog({ onAddMember }: AddTeamMemberDialogProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (name.trim() === '' || role.trim() === '') {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    onAddMember({
      name: name.trim(),
      role: role.trim()
    });
    
    // Reset form
    setName('');
    setRole('');
    setOpen(false);
    
    toast({
      title: "Success",
      description: "Team member added successfully"
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#FFC900] hover:bg-[#e5b700] text-[#151812]">
          <Plus className="mr-2 h-4 w-4" /> Add Team Member
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#333] border-[#444] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-[#FFC900]">Add Team Member</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div>
            <label className="block text-sm font-medium text-[#FFC900] mb-1">
              <User className="h-4 w-4 inline-block mr-1" /> Name *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter team member name"
              className="w-full p-2 bg-[#444] border border-[#555] rounded text-[#FFC900]"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#FFC900] mb-1">
              <Briefcase className="h-4 w-4 inline-block mr-1" /> Role *
            </label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Enter team member role"
              className="w-full p-2 bg-[#444] border border-[#555] rounded text-[#FFC900]"
            />
          </div>
          
          <div className="flex justify-end space-x-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="border-[#444] text-[#FFC900]"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[#FFC900] text-black hover:bg-[#FFC900]/90"
            >
              Add Member
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
