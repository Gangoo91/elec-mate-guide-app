
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';
import { useMessageFetching } from './chat/useMessageFetching';
import { useReactions } from './chat/useReactions';
import { ChatMessage, ChatComment, ChatReaction } from '@/types/chat-room';

export function useChatRoom() {
  const { user } = useAuth();
  const { toast } = useToast();
  const {
    messages,
    comments,
    reactions,
    loading,
    setMessages,
    setComments,
    setReactions,
    fetchMessages
  } = useMessageFetching();

  const { toggleReaction } = useReactions(setReactions);

  // Create a separate subscription for chat room messages that doesn't try to convert types
  useEffect(() => {
    if (!user) return;
    
    const channel = supabase
      .channel('public:chat_messages')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'chat_messages'
      }, async (payload: any) => {
        if (payload.eventType === 'INSERT') {
          setMessages(prev => [payload.new as ChatMessage, ...prev]);
        }
        if (payload.eventType === 'DELETE') {
          setMessages(prev => prev.filter(msg => msg.id !== payload.old.id));
        }
      })
      .subscribe();
    
    return () => {
      supabase.removeChannel(channel);
    };
  }, [user, setMessages]);

  const sendMessage = async (content: string) => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('chat_messages')
        .insert([{ content, user_id: user.id }])
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

  const addComment = async (messageId: string, content: string) => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('chat_comments')
        .insert([{
          message_id: messageId,
          user_id: user.id,
          content
        }])
        .select();

      if (error) throw error;

      setComments(prev => ({
        ...prev,
        [messageId]: [...(prev[messageId] || []), data[0]]
      }));
    } catch (error) {
      console.error('Error adding comment:', error);
      toast({
        title: "Error",
        description: "Failed to add comment",
        variant: "destructive",
      });
    }
  };

  return {
    messages,
    comments,
    reactions,
    loading,
    sendMessage,
    toggleReaction: (messageId: string, type: 'upvote' | 'downvote') => 
      user && toggleReaction(messageId, type, user.id),
    addComment
  };
}
