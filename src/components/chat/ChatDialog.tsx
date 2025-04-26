
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useChat } from "@/contexts/ChatContext";
import { useState, useEffect, useCallback, useMemo } from "react";
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
  
  // Use a proper UUID format instead of "some-user-id", and make it stable with useMemo
  const recipientId = useMemo(() => "00000000-0000-0000-0000-000000000000", []);

  // Use useEffect with proper dependencies
  useEffect(() => {
    if (open) {
      markAllAsReadByType(activeChatType);
    }
  }, [open, activeChatType, markAllAsReadByType]);

  // Memoize unread counts to prevent unnecessary recalculations
  const unreadCounts = useMemo(() => ({
    private: getUnreadCountByType("private"),
    team: getUnreadCountByType("team"),
    mental_health: getUnreadCountByType("mental_health"),
    mentor: getUnreadCountByType("mentor"),
  }), [getUnreadCountByType]);

  // Memoize chat type titles to prevent object recreation
  const chatTypeTitles = useMemo(() => ({
    private: "Private Chat",
    team: "Team Chat",
    mental_health: "Mental Health Mate",
    mentor: "Mentor Connect"
  }), []);

  // Memoize filtered messages to prevent unnecessary refiltering
  const filteredMessages = useMemo(() => 
    filterMessagesByType(activeChatType),
  [filterMessagesByType, activeChatType]);

  // Use useCallback for event handlers
  const handleSendMessage = useCallback((message: string) => {
    sendMessage(recipientId, message, activeChatType);
  }, [sendMessage, recipientId, activeChatType]);

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
