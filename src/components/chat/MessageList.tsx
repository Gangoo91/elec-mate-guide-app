
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth } from "@/hooks/useAuth";
import { Message } from "@/types/chat";
import { useEffect, useRef } from "react";
import { MessageTime } from "./MessageTime";
import { TypingIndicator } from "./TypingIndicator";
import { Check } from "lucide-react";
import { useReadReceipts } from "@/hooks/useReadReceipts";

interface MessageListProps {
  messages: Message[];
  loading?: boolean;
  typingUsers?: Record<string, boolean>;
  showReadReceipts?: boolean;
}

export function MessageList({ 
  messages, 
  loading = false,
  typingUsers = {},
  showReadReceipts = false
}: MessageListProps) {
  const { user } = useAuth();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { readReceipts } = useReadReceipts(messages);
  
  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Get if anyone is typing
  const isAnyoneTyping = Object.values(typingUsers).some(Boolean);

  return (
    <ScrollArea className="h-[300px] pr-4 mt-2">
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
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender_id === user?.id ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`rounded-lg p-3 max-w-[80%] ${
                  message.sender_id === user?.id
                    ? "bg-[#FFC900] text-black ml-8"
                    : "bg-[#444] text-[#FFC900] mr-8"
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <div className="flex items-center justify-end gap-1 mt-1">
                  <MessageTime timestamp={message.created_at} className="text-[10px]" />
                  
                  {/* Read receipt indicator */}
                  {showReadReceipts && message.sender_id === user?.id && (
                    <span className="text-[10px] opacity-70">
                      {message.read || readReceipts[message.id] ? (
                        <Check className="h-3 w-3" />
                      ) : null}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))
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
