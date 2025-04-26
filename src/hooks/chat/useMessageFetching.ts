
import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Message } from "@/types/chat";
import { useAuth } from "@/hooks/useAuth";
import { ChatType } from "@/config/chatTypes";

export function useMessageFetching(recipientId: string, chatType: ChatType) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (!user?.id || !recipientId) return;
    
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
        setMessages((data || []) as Message[]);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
    
    const markAsRead = async () => {
      try {
        const { error } = await supabase
          .from('team_messages')
          .update({ read: true })
          .eq('sender_id', recipientId)
          .eq('recipient_id', user.id)
          .eq('read', false);
          
        if (error) console.error("Error marking messages as read:", error);
      } catch (err) {
        console.error("Error marking messages as read:", err);
      }
    };
    
    markAsRead();

    return () => {
      // Cleanup
    };
  }, [user, recipientId, chatType]);

  return { messages, setMessages, loading };
}
