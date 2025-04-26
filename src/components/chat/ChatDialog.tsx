
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useChat } from "@/contexts/ChatContext";
import { useState } from "react";
import { ChatTypeSelector } from "./ChatTypeSelector";
import { MessageList } from "./MessageList";
import { ChatInput } from "./ChatInput";
import { ChatHeader } from "./ChatHeader";

interface ChatDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ChatDialog({ open, onOpenChange }: ChatDialogProps) {
  const { 
    messages, 
    sendMessage, 
    getUnreadCountByType, 
    activeChatType,
    setActiveChatType, 
    filterMessagesByType 
  } = useChat();
  
  // Use a proper UUID format instead of "some-user-id"
  const [recipientId] = useState("00000000-0000-0000-0000-000000000000"); // Default system recipient

  // Get unread counts for each chat type
  const unreadCounts = {
    private: getUnreadCountByType("private"),
    team: getUnreadCountByType("team"),
    mental_health: getUnreadCountByType("mental_health"),
    mentor: getUnreadCountByType("mentor"),
  };

  // Chat type titles for the header
  const chatTypeTitles = {
    private: "Private Chat",
    team: "Team Chat",
    mental_health: "Mental Health Mate",
    mentor: "Mentor Connect"
  };

  const handleSendMessage = (message: string) => {
    sendMessage(recipientId, message, activeChatType);
  };

  // Filter messages based on the active chat type
  const filteredMessages = filterMessagesByType(activeChatType);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-[#333] border-[#444] text-[#FFC900]">
        <ChatHeader title={chatTypeTitles[activeChatType]} />
        
        <ChatTypeSelector 
          activeType={activeChatType}
          onTypeChange={setActiveChatType}
          unreadCounts={unreadCounts}
        />
        
        <MessageList messages={filteredMessages} />
        
        <ChatInput 
          onSendMessage={handleSendMessage}
          chatTitle={chatTypeTitles[activeChatType]}
        />
      </DialogContent>
    </Dialog>
  );
}
