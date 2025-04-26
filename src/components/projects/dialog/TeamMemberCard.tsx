
import { memo, useState, useCallback } from "react";
import { OnlineIndicator } from "./OnlineIndicator";
import { ChatPopover } from "../ChatPopover";
import { TeamMemberPresence } from "@/hooks/useTeamPresence";

interface TeamMemberCardProps {
  member: {
    id: string;
    name: string;
    role: string;
  };
  presence?: TeamMemberPresence;
  onClick: () => void;
}

// Use React.memo to prevent unnecessary re-renders
export const TeamMemberCard = memo(function TeamMemberCard({ member, presence, onClick }: TeamMemberCardProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Memoize event handlers
  const handleChatClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsChatOpen(prev => !prev);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onClick();
    }
  }, [onClick]);

  return (
    <div 
      className="flex items-center justify-between p-2 rounded-md hover:bg-[#444]/30 cursor-pointer transition-colors"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
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
});
