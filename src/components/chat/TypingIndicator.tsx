
import { MessageSquare } from "lucide-react";

interface TypingIndicatorProps {
  isTyping: boolean;
  username?: string;
}

export function TypingIndicator({ isTyping, username = "Someone" }: TypingIndicatorProps) {
  if (!isTyping) return null;

  return (
    <div className="flex items-center gap-2 text-xs text-[#FFC900]/70 animate-pulse p-2">
      <MessageSquare className="h-3 w-3" />
      <span>{username} is typing...</span>
      <span className="typing-animation">
        <span className="dot">.</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
      </span>
    </div>
  );
}
