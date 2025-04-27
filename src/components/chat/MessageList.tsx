
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth } from "@/hooks/useAuth";
import { Message } from "@/types/chat";
import { useEffect, useRef, useState } from "react";
import { MessageTime } from "./MessageTime";
import { TypingIndicator } from "./TypingIndicator";
import { Check, RefreshCw } from "lucide-react";
import { useReadReceipts } from "@/hooks/useReadReceipts";
import { useProfiles } from "@/hooks/useProfiles"; 
import { cn } from "@/lib/utils";

interface MessageListProps {
  messages: Message[];
  loading?: boolean;
  typingUsers?: Record<string, boolean>;
  showReadReceipts?: boolean;
  onRefresh?: () => Promise<void>;
}

export function MessageList({ 
  messages, 
  loading = false,
  typingUsers = {},
  showReadReceipts = false,
  onRefresh
}: MessageListProps) {
  const { user } = useAuth();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { readReceipts } = useReadReceipts(messages);
  const { profiles } = useProfiles();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pullStartY, setPullStartY] = useState(0);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Get if anyone is typing
  const isAnyoneTyping = Object.values(typingUsers).some(Boolean);

  // Handle pull to refresh
  const handleTouchStart = (e: React.TouchEvent) => {
    if (scrollAreaRef.current?.scrollTop === 0) {
      setPullStartY(e.touches[0].clientY);
    }
  };

  const handleTouchMove = async (e: React.TouchEvent) => {
    if (pullStartY === 0) return;

    const pullDistance = e.touches[0].clientY - pullStartY;
    if (pullDistance > 100 && !isRefreshing && onRefresh) {
      setIsRefreshing(true);
      await onRefresh();
      setIsRefreshing(false);
      setPullStartY(0);
    }
  };

  const handleTouchEnd = () => {
    setPullStartY(0);
  };

  return (
    <ScrollArea 
      className="h-[300px] pr-4 mt-2" 
      ref={scrollAreaRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {isRefreshing && (
        <div className="flex justify-center p-2">
          <RefreshCw className="animate-spin text-[#FFC900]" />
        </div>
      )}
      
      <div className="space-y-4">
        {loading ? (
          <div className="text-center py-8 text-sm opacity-70">
            Loading messages...
          </div>
        ) : messages.length === 0 ? (
          <div className="text-center py-8 text-sm opacity-70">
            No messages in this chat area yet
          </div>
        ) : (
          messages.map((message) => {
            const isCurrentUser = message.sender_id === user?.id;
            const senderProfile = profiles?.find(p => p.id === message.sender_id);
            const senderName = senderProfile ? `${senderProfile.first_name || 'Unknown'} ${senderProfile.last_name || ''}`.trim() : 'Unknown';
            
            return (
              <div
                key={message.id}
                className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={cn(
                    "rounded-lg p-3 max-w-[80%]",
                    isCurrentUser ? "bg-[#FFC900] text-black ml-8" : "bg-[#444] text-[#FFC900] mr-8"
                  )}
                >
                  <div className="text-xs opacity-70 mb-1">{senderName}</div>
                  <p className="text-sm">{message.content}</p>
                  <div className="flex items-center justify-end gap-1 mt-1">
                    <MessageTime timestamp={message.created_at} className="text-[10px]" />
                    
                    {/* Read receipt indicator */}
                    {showReadReceipts && isCurrentUser && (
                      <span className="text-[10px] opacity-70">
                        {message.read || readReceipts[message.id] ? (
                          <Check className="h-3 w-3" />
                        ) : null}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
        
        {/* Show typing indicator */}
        {isAnyoneTyping && (
          <TypingIndicator isTyping={true} />
        )}
        
        <div ref={messagesEndRef} />
      </div>
    </ScrollArea>
  );
}
