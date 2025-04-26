
import { useCallback } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { ChatType, getChatTitle } from "@/config/chatTypes";

export const useChatActions = (messages: any[], setMessages: (messages: any[]) => void) => {
  const { toast } = useToast();

  const sendMessage = useCallback(async (recipientId: string, content: string, chatType: ChatType) => {
    try {
      const { error } = await supabase.from('team_messages').insert({
        sender_id: user?.id,
        recipient_id: recipientId,
        content,
        read: false,
        chat_type: chatType
      });

      if (error) throw error;
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message",
        variant: "destructive",
      });
    }
  }, [user, toast]);

  const markAsRead = useCallback(async (messageId: string) => {
    try {
      const { error } = await supabase
        .from('team_messages')
        .update({ read: true })
        .eq('id', messageId);

      if (error) throw error;
      
      setMessages(prev =>
        prev.map(msg =>
          msg.id === messageId ? { ...msg, read: true } : msg
        )
      );
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  }, [setMessages]);

  const getUnreadCountByType = useCallback((chatType: ChatType): number => {
    return messages.filter(
      msg => !msg.read && msg.recipient_id === user?.id && msg.chat_type === chatType
    ).length;
  }, [messages, user]);

  const filterMessagesByType = useCallback((chatType: ChatType): Message[] => {
    return messages.filter(msg => msg.chat_type === chatType);
  }, [messages]);

  return {
    sendMessage,
    markAsRead,
    getUnreadCountByType,
    filterMessagesByType,
  };
};
