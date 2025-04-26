
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useChat } from "@/contexts/ChatContext";
import { useState, useEffect } from "react";
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
    filterMessagesByType,
    markAllAsReadByType,
    loading
  } = useChat();
  
  // Use a proper UUID format instead of "some-user-id"
  const [recipientId] = useState("00000000-0000-0000-0000-000000000000"); // Default system recipient

  // Mark messages as read when chat type is viewed
  useEffect(() => {
    if (open) {
      markAllAsReadByType(activeChatType);
    }
  }, [open, activeChatType, markAllAsReadByType]);

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
        <DialogTitle className="sr-only">{chatTypeTitles[activeChatType]}</DialogTitle>
        
        <ChatHeader title={chatTypeTitles[activeChatType]} />
        
        <ChatTypeSelector 
          activeType={activeChatType}
          onTypeChange={setActiveChatType}
          unreadCounts={unreadCounts}
        />
        
        <MessageList messages={filteredMessages} loading={loading} />
        
        <ChatInput 
          onSendMessage={handleSendMessage}
          chatTitle={chatTypeTitles[activeChatType]}
          placeholder={`Type a message in ${chatTypeTitles[activeChatType]}...`}
        />
      </DialogContent>
    </Dialog>
  );
}
