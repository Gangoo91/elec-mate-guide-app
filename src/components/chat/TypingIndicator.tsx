
import { MessageSquare } from "lucide-react";
import { useProfiles } from "@/hooks/useProfiles";
import { useEffect, useState } from "react";

interface TypingUser {
  userId: string;
  username?: string;
  isTyping: boolean;
}

interface TypingIndicatorProps {
  isTyping: boolean;
  typingUsers?: TypingUser[];
}

export function TypingIndicator({ isTyping, typingUsers = [] }: TypingIndicatorProps) {
  const { profiles } = useProfiles();
  const [displayNames, setDisplayNames] = useState<string[]>([]);

  useEffect(() => {
    if (profiles && typingUsers && typingUsers.length > 0) {
      const names = typingUsers.map(user => {
        if (user.username) return user.username;
        
        const profile = profiles.find(p => p.id === user.userId);
        return profile?.first_name || "Someone";
      });
      
      setDisplayNames(names);
    } else {
      setDisplayNames(["Someone"]);
    }
  }, [typingUsers, profiles]);

  if (!isTyping) return null;

  let typingMessage: string;
  if (displayNames.length === 1) {
    typingMessage = `${displayNames[0]} is typing`;
  } else if (displayNames.length === 2) {
    typingMessage = `${displayNames.join(' and ')} are typing`;
  } else if (displayNames.length > 2) {
    typingMessage = `${displayNames.length} people are typing`;
  } else {
    typingMessage = "Someone is typing";
  }

  return (
    <div className="flex items-center gap-2 text-xs text-[#FFC900]/70 p-2 bg-[#22251e]/50 rounded-lg">
      <MessageSquare className="h-3 w-3 animate-pulse" />
      <span>{typingMessage}</span>
      <div className="flex">
        <span className="dot-pulse">.</span>
        <span className="dot-pulse" style={{ animationDelay: '0.2s' }}>.</span>
        <span className="dot-pulse" style={{ animationDelay: '0.4s' }}>.</span>
      </div>
      <style>
        {`
        .dot-pulse {
          animation: pulse 1.4s infinite ease-in-out;
          display: inline-block;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-2px); }
        }
        `}
      </style>
    </div>
  );
}
