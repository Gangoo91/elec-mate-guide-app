
import { useCallback } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { ChatType } from "@/config/chatTypes";
import { Message } from "@/types/chat";

export const useChatActions = (
  messages: Message[], 
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
) => {
  const { toast } = useToast();
  const { user } = useAuth();

  const sendMessage = useCallback(async (recipientId: string, content: string, chatType: ChatType) => {
    if (!user?.id || !content.trim()) return;
    
    try {
      const newMessage = {
        sender_id: user.id,
        recipient_id: recipientId,
        content: content.trim(),
        read: false,
        chat_type: chatType,
        is_group_message: false
      };

      const { data, error } = await supabase.from('team_messages').insert(newMessage).select();

      if (error) throw error;
      
      // Optimistically add the message to the local state
      if (data && data[0]) {
        setMessages(prev => [...prev, data[0] as Message]);
      }
      
      return data;
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message",
        variant: "destructive",
      });
    }
  }, [user, toast, setMessages]);

  const markAsRead = useCallback(async (messageId: string) => {
    try {
      const { error } = await supabase
        .from('team_messages')
        .update({ read: true })
        .eq('id', messageId);

      if (error) throw error;
      
      setMessages(prevMessages =>
        prevMessages.map(msg =>
          msg.id === messageId ? { ...msg, read: true } : msg
        )
      );
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  }, [setMessages]);

  const markAllAsReadByType = useCallback(async (chatType: ChatType) => {
    if (!user?.id) return;
    
    try {
      const { error } = await supabase
        .from('team_messages')
        .update({ read: true })
        .eq('recipient_id', user.id)
        .eq('chat_type', chatType)
        .eq('read', false);

      if (error) throw error;
      
      setMessages(prevMessages =>
        prevMessages.map(msg =>
          msg.chat_type === chatType && msg.recipient_id === user.id && !msg.read
            ? { ...msg, read: true }
            : msg
        )
      );
    } catch (error) {
      console.error('Error marking messages as read:', error);
    }
  }, [user, setMessages]);

  return {
    sendMessage,
    markAsRead,
    markAllAsReadByType
  };
};
