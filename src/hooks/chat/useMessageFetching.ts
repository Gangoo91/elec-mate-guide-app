
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { ChatMessage, ChatComment, ChatReaction } from '@/types/chat-room';
import { useToast } from '@/hooks/use-toast';
import { isValidChatReaction } from '@/utils/chatTypeGuards';

export const useMessageFetching = () => {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [comments, setComments] = useState<Record<string, ChatComment[]>>({});
  const [reactions, setReactions] = useState<Record<string, ChatReaction[]>>({});
  const { toast } = useToast();

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const { data: messages, error } = await supabase
        .from('chat_messages')
        .select('*')
        .order('created_at', { ascending: false });

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
      setLoading(false);
    }
  };

  useEffect(() => {
    const channel = supabase
      .channel('public:chat_messages')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'chat_messages'
      }, async (payload: any) => {
        if (payload.eventType === 'INSERT') {
          setMessages(prev => [payload.new as ChatMessage, ...prev]);
          await fetchCommentsAndReactions([payload.new as ChatMessage]);
        }
        if (payload.eventType === 'DELETE') {
          setMessages(prev => prev.filter(msg => msg.id !== payload.old.id));
        }
      })
      .subscribe();
    
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchCommentsAndReactions = async (messages: ChatMessage[]) => {
    try {
      const messageIds = messages.map(m => m.id);
      
      const { data: comments } = await supabase
        .from('chat_comments')
        .select('*')
        .in('message_id', messageIds);

      const { data: reactions } = await supabase
        .from('chat_reactions')
        .select('*')
        .in('message_id', messageIds);

      const commentsByMessage = (comments || []).reduce((acc, comment) => {
        acc[comment.message_id] = [...(acc[comment.message_id] || []), comment as ChatComment];
        return acc;
      }, {} as Record<string, ChatComment[]>);

      const reactionsByMessage = (reactions || []).reduce((acc, reaction) => {
        if (isValidChatReaction(reaction)) {
          acc[reaction.message_id] = [...(acc[reaction.message_id] || []), reaction];
        }
        return acc;
      }, {} as Record<string, ChatReaction[]>);

      setComments(prev => ({...prev, ...commentsByMessage}));
      setReactions(prev => ({...prev, ...reactionsByMessage}));
    } catch (error) {
      console.error('Error fetching comments and reactions:', error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return {
    messages,
    comments,
    reactions,
    loading,
    setMessages,
    setComments,
    setReactions,
    fetchMessages,
  };
};
