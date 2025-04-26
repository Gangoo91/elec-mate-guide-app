
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  chatTitle: string;
  placeholder?: string;
  disabled?: boolean;
}

export function ChatInput({ 
  onSendMessage, 
  chatTitle, 
  placeholder = "Type a message...", 
  disabled = false 
}: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    onSendMessage(message.trim());
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 border-t border-[#444] pt-4">
      <div className="flex items-center gap-2">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className="flex-1 bg-[#444] border-[#555] text-[#FFC900] placeholder:text-[#FFC900]/50 focus-visible:ring-[#FFC900]"
        />
        <Button 
          type="submit" 
          size="icon"
          className="bg-[#FFC900] text-black hover:bg-[#FFC900]/90"
          disabled={!message.trim() || disabled}
        >
          <Send className="h-4 w-4" />
          <span className="sr-only">Send message</span>
        </Button>
      </div>
    </form>
  );
}
