
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useChat, ChatType } from "@/contexts/ChatContext";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useMemo } from "react";
import { format } from "date-fns";
import { useAuth } from "@/hooks/useAuth";
import { ChatTypeSelector } from "./ChatTypeSelector";
import { DialogTitle } from "@/components/ui/dialog";
import { DialogHeader } from "@/components/ui/dialog";

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
  const [newMessage, setNewMessage] = useState("");
  const { user } = useAuth();
  const [recipientId, setRecipientId] = useState("some-user-id"); // Default recipient

  // Filter messages based on the active chat type
  const filteredMessages = useMemo(() => {
    return filterMessagesByType(activeChatType);
  }, [filterMessagesByType, activeChatType, messages]);

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

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    sendMessage(recipientId, newMessage.trim(), activeChatType);
    setNewMessage("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-[#333] border-[#444] text-[#FFC900]">
        <DialogHeader>
          <DialogTitle className="text-center text-[#FFC900]">
            {chatTypeTitles[activeChatType]}
          </DialogTitle>
        </DialogHeader>
        
        <ChatTypeSelector 
          activeType={activeChatType}
          onTypeChange={setActiveChatType}
          unreadCounts={unreadCounts}
        />
        
        <ScrollArea className="h-[300px] pr-4 mt-2">
          <div className="space-y-4">
            {filteredMessages.length === 0 ? (
              <div className="text-center py-8 text-sm opacity-70">
                No messages in this chat area yet
              </div>
            ) : (
              filteredMessages.map((message) => (
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
                    <p className="text-xs opacity-50 mt-1">
                      {format(new Date(message.created_at), "HH:mm")}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
        
        <form onSubmit={handleSend} className="flex gap-2 mt-4">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder={`Type a message in ${chatTypeTitles[activeChatType].toLowerCase()}...`}
            className="flex-1 bg-[#444] border-[#555] text-[#FFC900]"
          />
          <Button type="submit" className="bg-[#FFC900] text-black hover:bg-[#FFC900]/90">
            Send
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
