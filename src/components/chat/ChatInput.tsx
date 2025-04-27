
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { useTypingIndicator } from "@/hooks/useTypingIndicator";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  chatTitle: string;
  placeholder?: string;
  disabled?: boolean;
  chatId?: string;
}

export function ChatInput({ 
  onSendMessage, 
  chatTitle, 
  placeholder = "Type a message...", 
  disabled = false,
  chatId
}: ChatInputProps) {
  const [message, setMessage] = useState("");
  const { setTyping } = useTypingIndicator(chatId);
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    onSendMessage(message.trim());
    setMessage("");
    
    // Clear typing indicator when message is sent
    setTyping(false);
  };
  
  // Handle typing indicator
  useEffect(() => {
    if (!message) {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
        setTypingTimeout(null);
      }
      setTyping(false);
      return;
    }
    
    // If user is typing, send typing indicator
    setTyping(true);
    
    // Clear previous timeout
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    
    // Set timeout to clear typing indicator after 3 seconds of inactivity
    const timeout = setTimeout(() => {
      setTyping(false);
    }, 3000);
    
    setTypingTimeout(timeout);
    
    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [message, setTyping]);

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
