
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useMessageFetching } from './chat/useMessageFetching';
import { useReactions } from './chat/useReactions';
import { useMessageSubscription } from './chat/useMessageSubscription';

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

  // Set up realtime subscription
  useMessageSubscription(setMessages);

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
