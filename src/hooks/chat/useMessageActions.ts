
import { useCallback } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { ChatType } from "@/config/chatTypes";
import { Message } from "@/types/chat";

export function useMessageActions(
  userId: string | undefined,
  recipientId: string,
  chatType: ChatType,
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
) {
  const { toast } = useToast();

  // Use useCallback to memoize functions
  const sendMessage = useCallback(async (content: string) => {
    if (!userId || !content.trim()) return;

    try {
      const newMessage = {
        content: content.trim(),
        sender_id: userId,
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
  }, [userId, recipientId, chatType, setMessages, toast]);

  // Memoize blockUser function
  const blockUser = useCallback(async () => {
    if (!userId || !recipientId) return false;

    try {
      // First update the messages in the database
      const { error } = await supabase
        .from('team_messages')
        .update({ read: true }) // Mark as read
        .eq('sender_id', recipientId)
        .eq('recipient_id', userId);

      if (error) throw error;
      
      // Update the UI 
      setMessages(prev => prev.map(msg => 
        msg.sender_id === recipientId ? {...msg, read: true} : msg
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
  }, [userId, recipientId, setMessages, toast]);

  // Memoize reportUser function
  const reportUser = useCallback(async (reason: string) => {
    if (!userId || !recipientId) return false;

    try {
      // Update the messages in the database
      const { error } = await supabase
        .from('team_messages')
        .update({ read: true })
        .eq('sender_id', recipientId)
        .eq('recipient_id', userId);

      if (error) throw error;
      
      // Update the UI
      setMessages(prev => prev.map(msg => 
        msg.sender_id === recipientId ? {...msg, read: true} : msg
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
  }, [userId, recipientId, setMessages, toast]);

  return { sendMessage, blockUser, reportUser };
}
