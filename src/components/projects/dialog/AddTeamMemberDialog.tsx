
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus, User, Briefcase } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
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
    setEmail('');
    setPhone('');
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
          <div className="space-y-2">
            <Label className="text-[#FFC900]">
              <User className="h-4 w-4 inline-block mr-2" />
              Name *
            </Label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter team member name"
              className="w-full p-2 bg-[#444] border border-[#555] text-[#FFC900] placeholder:text-[#FFC900]/50"
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-[#FFC900]">
              <Briefcase className="h-4 w-4 inline-block mr-2" />
              Role *
            </Label>
            <Input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Enter team member role"
              className="w-full p-2 bg-[#444] border border-[#555] text-[#FFC900] placeholder:text-[#FFC900]/50"
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-[#FFC900]">Email</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full p-2 bg-[#444] border border-[#555] text-[#FFC900] placeholder:text-[#FFC900]/50"
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-[#FFC900]">Phone</Label>
            <Input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
              className="w-full p-2 bg-[#444] border border-[#555] text-[#FFC900] placeholder:text-[#FFC900]/50"
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
