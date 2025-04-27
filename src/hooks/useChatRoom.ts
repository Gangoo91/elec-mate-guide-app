
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { ChatMessage, ChatComment, ChatReaction } from '@/types/chat-room';

export function useChatRoom() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [comments, setComments] = useState<Record<string, ChatComment[]>>({});
  const [reactions, setReactions] = useState<Record<string, ChatReaction[]>>({});
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    fetchMessages();
    const channelName = setupSubscription();
    
    return () => {
      if (channelName) {
        supabase.removeChannel(supabase.channel(channelName));
      }
    };
  }, []);

  const fetchMessages = async () => {
    try {
      // Use the REST API endpoint directly
      const { data: messages, error } = await supabase
        .from('chat_messages')
        .select('*')
        .order('created_at', { ascending: false }) as any;

      if (error) throw error;
      
      setMessages(messages || []);
      await fetchCommentsAndReactions(messages || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching messages:', error);
      toast({
        title: "Error",
        description: "Failed to load messages",
        variant: "destructive",
      });
    }
  };

  const fetchCommentsAndReactions = async (messages: ChatMessage[]) => {
    try {
      const messageIds = messages.map(m => m.id);
      
      // Use the REST API endpoint directly
      const { data: comments } = await supabase
        .from('chat_comments')
        .select('*')
        .in('message_id', messageIds) as any;

      // Use the REST API endpoint directly
      const { data: reactions } = await supabase
        .from('chat_reactions')
        .select('*')
        .in('message_id', messageIds) as any;

      const commentsByMessage = (comments || []).reduce((acc, comment) => {
        acc[comment.message_id] = [...(acc[comment.message_id] || []), comment];
        return acc;
      }, {} as Record<string, ChatComment[]>);

      const reactionsByMessage = (reactions || []).reduce((acc, reaction) => {
        acc[reaction.message_id] = [...(acc[reaction.message_id] || []), reaction];
        return acc;
      }, {} as Record<string, ChatReaction[]>);

      setComments(commentsByMessage);
      setReactions(reactionsByMessage);
    } catch (error) {
      console.error('Error fetching comments and reactions:', error);
    }
  };

  const setupSubscription = () => {
    const channelName = 'public:chat_messages';
    
    try {
      supabase
        .channel(channelName)
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
      
      return channelName;
    } catch (error) {
      console.error('Error setting up subscription:', error);
      return null;
    }
  };

  const sendMessage = async (content: string) => {
    if (!user) return;
    
    try {
      // Use the REST API endpoint directly
      const { data, error } = await supabase
        .from('chat_messages')
        .insert([{ content, user_id: user.id }])
        .select() as any;

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

  const toggleReaction = async (messageId: string, type: 'upvote' | 'downvote') => {
    if (!user) return;

    try {
      const existingReaction = reactions[messageId]?.find(r => r.user_id === user.id);

      if (existingReaction) {
        if (existingReaction.reaction_type === type) {
          // Remove reaction
          await supabase
            .from('chat_reactions')
            .delete()
            .eq('id', existingReaction.id) as any;
        } else {
          // Update reaction
          await supabase
            .from('chat_reactions')
            .update({ reaction_type: type })
            .eq('id', existingReaction.id) as any;
        }
      } else {
        // Add new reaction
        await supabase
          .from('chat_reactions')
          .insert([{
            message_id: messageId,
            user_id: user.id,
            reaction_type: type
          }]) as any;
      }

      // Refresh reactions for this message
      const { data: updatedReactions } = await supabase
        .from('chat_reactions')
        .select('*')
        .eq('message_id', messageId) as any;

      setReactions(prev => ({
        ...prev,
        [messageId]: updatedReactions || []
      }));
    } catch (error) {
      console.error('Error toggling reaction:', error);
      toast({
        title: "Error",
        description: "Failed to update reaction",
        variant: "destructive",
      });
    }
  };

  const addComment = async (messageId: string, content: string) => {
    if (!user) return;

    try {
      // Use the REST API endpoint directly
      const { data, error } = await supabase
        .from('chat_comments')
        .insert([{
          message_id: messageId,
          user_id: user.id,
          content
        }])
        .select() as any;

      if (error) throw error;

      setComments(prev => ({
        ...prev,
        [messageId]: [...(prev[messageId] || []), data[0] as ChatComment]
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
    toggleReaction,
    addComment
  };
}
