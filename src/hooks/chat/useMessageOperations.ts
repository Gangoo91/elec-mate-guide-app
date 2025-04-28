
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { ChatMessage } from '@/types/chat-room';

export function useMessageOperations(setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>) {
  const { toast } = useToast();
  const [originalMessages, setOriginalMessages] = useState<ChatMessage[]>([]);

  const searchMessages = (query: string) => {
    if (!query.trim()) {
      setMessages(originalMessages);
      return;
    }
    
    const filtered = originalMessages.filter(message => 
      message.content.toLowerCase().includes(query.toLowerCase())
    );
    
    setMessages(filtered);
  };

  const sendMessage = async (content: string, userId: string) => {
    try {
      const { data, error } = await supabase
        .from('chat_messages')
        .insert([{ content, user_id: userId }])
        .select();

      if (error) throw error;
      
      return data;
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message",
        variant: "destructive",
      });
    }
  };

  const editMessage = async (messageId: string, content: string, userId: string) => {
    try {
      const { error } = await supabase
        .from('chat_messages')
        .update({ content, updated_at: new Date().toISOString() })
        .eq('id', messageId)
        .eq('user_id', userId);

      if (error) throw error;

      setMessages(prev => 
        prev.map(msg => msg.id === messageId ? { ...msg, content, updated_at: new Date().toISOString() } : msg)
      );
      
      setOriginalMessages(prev => 
        prev.map(msg => msg.id === messageId ? { ...msg, content, updated_at: new Date().toISOString() } : msg)
      );

      toast({
        title: "Success",
        description: "Message updated successfully",
      });
    } catch (error) {
      console.error('Error editing message:', error);
      toast({
        title: "Error",
        description: "Failed to update message",
        variant: "destructive",
      });
    }
  };

  const deleteMessage = async (messageId: string, userId: string) => {
    try {
      const { error } = await supabase
        .from('chat_messages')
        .delete()
        .eq('id', messageId)
        .eq('user_id', userId);

      if (error) throw error;

      setMessages(prev => prev.filter(msg => msg.id !== messageId));
      setOriginalMessages(prev => prev.filter(msg => msg.id !== messageId));

      toast({
        title: "Success",
        description: "Message deleted successfully",
      });
    } catch (error) {
      console.error('Error deleting message:', error);
      toast({
        title: "Error",
        description: "Failed to delete message",
        variant: "destructive",
      });
    }
  };

  return {
    searchMessages,
    sendMessage,
    editMessage,
    deleteMessage,
    setOriginalMessages
  };
}
