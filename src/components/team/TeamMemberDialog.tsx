
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { User, Phone, Mail, Briefcase, Calendar, Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import { TeamMember, TeamMemberDialogProps } from "@/types/team";
import { useToast } from "@/hooks/use-toast";

export function TeamMemberDialog({ 
  member, 
  open, 
  onOpenChange, 
  onEdit,
  onDelete 
}: TeamMemberDialogProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [availability, setAvailability] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  // Update local state when member changes
  if (member && member.name !== name) {
    setName(member.name);
  }
  if (member && member.role !== role) {
    setRole(member.role);
  }
  if (member && member.skills !== skills) {
    setSkills(member.skills || []);
  }
  if (member && member.availability !== availability) {
    setAvailability(member.availability || '');
  }
  if (member && member.phone !== phone) {
    setPhone(member.phone || '');
  }
  if (member && member.email !== email) {
    setEmail(member.email || '');
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
    
    if (onEdit) {
      onEdit({
        ...member,
        name: name.trim(),
        role: role.trim(),
        skills,
        availability,
        phone,
        email
      });
    }
    setIsEditing(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center gap-2">
            <User className="h-5 w-5" />
            {isEditing ? "Edit Team Member" : member.name}
          </DialogTitle>
        </DialogHeader>

        {isEditing ? (
          <div className="space-y-4 py-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 bg-[#2a2e24] border border-[#FFC900]/30 rounded text-[#FFC900]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Role</label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-2 bg-[#2a2e24] border border-[#FFC900]/30 rounded text-[#FFC900]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 bg-[#2a2e24] border border-[#FFC900]/30 rounded text-[#FFC900]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 bg-[#2a2e24] border border-[#FFC900]/30 rounded text-[#FFC900]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Availability</label>
              <input
                type="text"
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                className="w-full p-2 bg-[#2a2e24] border border-[#FFC900]/30 rounded text-[#FFC900]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Skills (comma separated)</label>
              <input
                type="text"
                value={skills.join(', ')}
                onChange={(e) => setSkills(e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
                className="w-full p-2 bg-[#2a2e24] border border-[#FFC900]/30 rounded text-[#FFC900]"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button
                variant="outline"
                onClick={() => setIsEditing(false)}
                className="border-[#FFC900]/30 text-[#FFC900]"
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
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-[#FFC900]/70" />
                <span>{member.role}</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#FFC900]/70" />
                  <span>{member.phone || "No phone number"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#FFC900]/70" />
                  <span>{member.email || "No email"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#FFC900]/70" />
                  <span>{member.availability || "No availability set"}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Skills:</h3>
                <div className="flex flex-wrap gap-2">
                  {member.skills?.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-[#FFC900]/10 text-[#FFC900] text-xs px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  )) || <span className="text-[#FFC900]/50">No skills listed</span>}
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-2">
              {onEdit && (
                <Button
                  variant="outline"
                  onClick={() => setIsEditing(true)}
                  className="border-[#FFC900]/30 text-[#FFC900]"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              )}
              {onDelete && (
                <Button
                  variant="outline"
                  onClick={() => onDelete(member.id)}
                  className="border-[#FFC900]/30 text-red-500 hover:text-red-400"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Remove
                </Button>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
