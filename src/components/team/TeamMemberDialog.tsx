
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { TeamMember } from "@/types/team";
import { User, Phone, Mail, Briefcase, Calendar } from "lucide-react";

interface TeamMemberDialogProps {
  member: TeamMember | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TeamMemberDialog({ member, open, onOpenChange }: TeamMemberDialogProps) {
  if (!member) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center gap-2">
            <User className="h-5 w-5" />
            {member.name}
          </DialogTitle>
        </DialogHeader>

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
              <span>{member.availability}</span>
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
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
