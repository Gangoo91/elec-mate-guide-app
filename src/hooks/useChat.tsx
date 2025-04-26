
import { useCallback } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { ChatType } from "@/config/chatTypes";
import { Message } from "@/types/chat";

export const useChatActions = (
  messages: Message[], 
  setMessages: (messages: Message[]) => void
) => {
  const { toast } = useToast();
  const { user } = useAuth();

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
      
      setMessages(prevMessages =>
        prevMessages.map(msg =>
          msg.id === messageId ? { ...msg, read: true } : msg
        )
      );
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  }, [setMessages]);

  return {
    sendMessage,
    markAsRead,
  };
};
