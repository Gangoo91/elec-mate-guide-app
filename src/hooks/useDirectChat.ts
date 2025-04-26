
import { useState, useEffect, useCallback } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { ChatType } from "@/config/chatTypes";
import { Message, ChatReport } from "@/types/chat";

export function useDirectChat(recipientId: string, chatType: ChatType) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

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

    const channel = supabase
      .channel('direct_messages')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'team_messages',
          filter: `recipient_id=eq.${user.id}`,
        },
        async (payload) => {
          if (payload.eventType === 'INSERT') {
            const newMessage = payload.new as Message;
            if (newMessage.sender_id === recipientId && newMessage.chat_type === chatType) {
              setMessages(prev => [...prev, newMessage]);
              
              try {
                await supabase
                  .from('team_messages')
                  .update({ read: true })
                  .eq('id', newMessage.id);
              } catch (err) {
                console.error("Error marking message as read:", err);
              }
            }
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user, recipientId, chatType, toast]);

  const sendMessage = useCallback(async (content: string) => {
    if (!user?.id || !content.trim()) return;

    try {
      const newMessage = {
        content: content.trim(),
        sender_id: user.id,
        recipient_id: recipientId,
        chat_type: chatType,
        read: false,
        is_group_message: false
      };
      
      const { data, error } = await supabase
        .from('team_messages')
        .insert(newMessage)
        .select();

      if (error) throw error;
      
      if (data && data[0]) {
        setMessages(prev => [...prev, data[0] as Message]);
      }
      
      return data;
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  }, [user, recipientId, chatType, toast]);

  const blockUser = useCallback(async () => {
    if (!user?.id || !recipientId) return;

    try {
      // Update all messages from this user with blocked flag
      const { error } = await supabase
        .from('team_messages')
        .update({ blocked: true })
        .eq('sender_id', recipientId)
        .eq('recipient_id', user.id);

      if (error) throw error;
      
      // Also update local state
      setMessages(prev => prev.map(msg => 
        msg.sender_id === recipientId ? {...msg, blocked: true} : msg
      ));

      return true;
    } catch (error) {
      console.error("Error blocking user:", error);
      toast({
        title: "Error",
        description: "Failed to block user. Please try again.",
        variant: "destructive",
      });
      return false;
    }
  }, [user, recipientId, toast]);

  const reportUser = useCallback(async (reason: string) => {
    if (!user?.id || !recipientId) return;

    try {
      // Create a report
      const report: Partial<ChatReport> = {
        reporter_id: user.id,
        reported_id: recipientId,
        reason,
        created_at: new Date().toISOString()
      };
      
      // Mark messages from this user as reported
      const { error: updateError } = await supabase
        .from('team_messages')
        .update({ reported: true })
        .eq('sender_id', recipientId)
        .eq('recipient_id', user.id);

      if (updateError) throw updateError;
      
      // Update local state
      setMessages(prev => prev.map(msg => 
        msg.sender_id === recipientId ? {...msg, reported: true} : msg
      ));

      return true;
    } catch (error) {
      console.error("Error reporting user:", error);
      toast({
        title: "Error",
        description: "Failed to report user. Please try again.",
        variant: "destructive",
      });
      return false;
    }
  }, [user, recipientId, toast]);

  return {
    messages,
    loading,
    sendMessage,
    blockUser,
    reportUser
  };
}
