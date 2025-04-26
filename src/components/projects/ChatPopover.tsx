
import { useState, useEffect } from "react";
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
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  content: string;
  sender_id: string;
  created_at: string;
}

export function ChatPopover({ recipientId }: { recipientId: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  // Make sure recipientId is a valid UUID
  const validRecipientId = recipientId || "00000000-0000-0000-0000-000000000000";

  // Fetch messages when the component mounts or when recipientId changes
  useEffect(() => {
    if (!user || !validRecipientId) return;
    
    const fetchMessages = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('team_messages')
          .select('*')
          .or(`sender_id.eq.${user.id},recipient_id.eq.${user.id}`)
          .order('created_at', { ascending: true });
        
        if (error) throw error;
        setMessages(data || []);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();

    // Subscribe to new messages
    const channel = supabase
      .channel('team_messages_changes')
      .on(
        'postgres_changes',
        { 
          event: '*', 
          schema: 'public',
          table: 'team_messages',
          filter: `sender_id=eq.${validRecipientId},recipient_id=eq.${user.id}`
        },
        (payload) => {
          console.log('New message:', payload);
          if (payload.eventType === 'INSERT') {
            setMessages(prev => [...prev, payload.new as Message]);
            
            // Show a notification for the new message
            toast({
              title: "New message",
              description: `${payload.new.content.substring(0, 30)}${payload.new.content.length > 30 ? '...' : ''}`,
            });
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user, validRecipientId, toast]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !newMessage.trim()) return;

    try {
      const { error } = await supabase.from('team_messages').insert({
        content: newMessage.trim(),
        sender_id: user.id,
        recipient_id: validRecipientId,
        chat_type: 'private', // Default to private chat type
        read: false,
      });

      if (error) throw error;
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
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
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-[#FFC900]/70">Loading messages...</p>
              </div>
            ) : messages.length > 0 ? (
              messages.map((msg) => (
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
              ))
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-[#FFC900]/50">No messages yet</p>
              </div>
            )}
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
