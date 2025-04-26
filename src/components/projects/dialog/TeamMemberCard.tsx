
import { OnlineIndicator } from "./OnlineIndicator";
import { ChatPopover } from "../ChatPopover";
import { TeamPresence } from "@/hooks/useTeamPresence";

interface TeamMemberCardProps {
  member: {
    id: string;
    name: string;
    role: string;
  };
  presence?: TeamPresence;
  onClick: () => void;
}

export function TeamMemberCard({ member, presence, onClick }: TeamMemberCardProps) {
  return (
    <div 
      className="flex items-center justify-between p-2 rounded-md hover:bg-[#444]/30 cursor-pointer transition-colors"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
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
}
