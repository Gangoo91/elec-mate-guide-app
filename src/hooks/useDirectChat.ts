
import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  content: string;
  sender_id: string;
  created_at: string;
}

export function useDirectChat(recipientId: string, chatType: 'mentor' | 'mental_health' | 'team') {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  // Fetch messages on component mount
  useEffect(() => {
    if (!user || !recipientId) return;
    
    const fetchMessages = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('team_messages')
          .select('*')
          .or(`and(sender_id.eq.${user.id},recipient_id.eq.${recipientId}),and(sender_id.eq.${recipientId},recipient_id.eq.${user.id})`)
          .eq('chat_type', chatType)
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
      .channel('direct_messages')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'team_messages',
          filter: `recipient_id=eq.${user.id}`
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            const newMessage = payload.new as Message;
            if (newMessage.sender_id === recipientId) {
              setMessages(prev => [...prev, newMessage]);
              toast({
                title: "New message",
                description: `${newMessage.content.substring(0, 30)}${newMessage.content.length > 30 ? '...' : ''}`,
              });
            }
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user, recipientId, chatType, toast]);

  const sendMessage = async (content: string) => {
    if (!user || !content.trim()) return;

    try {
      const { error } = await supabase.from('team_messages').insert({
        content: content.trim(),
        sender_id: user.id,
        recipient_id: recipientId,
        chat_type: chatType,
        read: false,
      });

      if (error) throw error;
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return {
    messages,
    loading,
    sendMessage
  };
}
