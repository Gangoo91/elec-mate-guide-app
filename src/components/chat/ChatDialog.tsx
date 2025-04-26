
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useChat } from "@/contexts/ChatContext";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { format } from "date-fns";
import { useAuth } from "@/hooks/useAuth";

interface ChatDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ChatDialog({ open, onOpenChange }: ChatDialogProps) {
  const { messages, sendMessage } = useChat();
  const [newMessage, setNewMessage] = useState("");
  const { user } = useAuth();

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    // For demo purposes, sending to a fixed recipient
    // In a real app, you'd have a selected recipient
    const recipientId = "some-user-id";
    sendMessage(recipientId, newMessage.trim());
    setNewMessage("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-[#333] border-[#444] text-[#FFC900]">
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {messages.map((message) => (
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
            ))}
          </div>
        </ScrollArea>
        
        <form onSubmit={handleSend} className="flex gap-2 mt-4">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
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
