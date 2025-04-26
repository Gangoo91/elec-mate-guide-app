
import { OnlineIndicator } from "./OnlineIndicator";
import { ChatPopover } from "../ChatPopover";
import { TeamMemberPresence } from "@/hooks/useTeamPresence";
import { useState } from "react";

interface TeamMemberCardProps {
  member: {
    id: string;
    name: string;
    role: string;
  };
  presence?: TeamMemberPresence;
  onClick: () => void;
}

export function TeamMemberCard({ member, presence, onClick }: TeamMemberCardProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsChatOpen(!isChatOpen);
  };

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
        <div onClick={handleChatClick}>
          <ChatPopover 
            recipientId={member.id} 
            data-member-id={member.id}
          />
        </div>
      </div>
    </div>
  );
}
