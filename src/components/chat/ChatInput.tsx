
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChatType } from "@/contexts/ChatContext";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  chatTitle: string;
}

export function ChatInput({ onSendMessage, chatTitle }: ChatInputProps) {
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    onSendMessage(newMessage.trim());
    setNewMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <Input
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder={`Type a message in ${chatTitle.toLowerCase()}...`}
        className="flex-1 bg-[#444] border-[#555] text-[#FFC900]"
      />
      <Button type="submit" className="bg-[#FFC900] text-black hover:bg-[#FFC900]/90">
        Send
      </Button>
    </form>
  );
}
