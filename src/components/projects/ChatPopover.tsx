
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

interface Message {
  id: string;
  content: string;
  sender_id: string;
  created_at: string;
}

export function ChatPopover({ recipientId }: { recipientId: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const { user } = useAuth();

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !newMessage.trim()) return;

    await supabase.from('team_messages').insert({
      content: newMessage.trim(),
      sender_id: user.id,
      recipient_id: recipientId,
    });

    setNewMessage("");
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className="text-[#FFC900] hover:bg-[#FFC900]/10"
        >
          <MessageCircle className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0 bg-[#333] border-[#444]">
        <div className="p-4 space-y-4">
          <div className="h-48 overflow-y-auto space-y-2">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`p-2 rounded-lg text-sm ${
                  msg.sender_id === user?.id
                    ? "bg-[#FFC900] text-black ml-8"
                    : "bg-[#444] text-[#FFC900] mr-8"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>
          <form onSubmit={sendMessage} className="flex gap-2">
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
        </div>
      </PopoverContent>
    </Popover>
  );
}
