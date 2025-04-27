
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
      return messages || [];
    } catch (error) {
      console.error('Error fetching messages:', error);
      toast({
        title: "Error",
        description: "Failed to load messages",
        variant: "destructive",
      });
      setLoading(false);
      return [];
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
        if (payload.eventType === 'UPDATE') {
          setMessages(prev => prev.map(msg => 
            msg.id === payload.new.id ? { ...msg, ...payload.new } : msg
          ));
        }
      })
      .subscribe();
    
    // Also subscribe to comment changes
    const commentChannel = supabase
      .channel('public:chat_comments')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'chat_comments'
      }, async (payload: any) => {
        if (payload.eventType === 'INSERT') {
          const comment = payload.new as ChatComment;
          setComments(prev => ({
            ...prev,
            [comment.message_id]: [...(prev[comment.message_id] || []), comment]
          }));
        }
        if (payload.eventType === 'DELETE') {
          setComments(prev => {
            const newComments = { ...prev };
            Object.keys(newComments).forEach(messageId => {
              newComments[messageId] = newComments[messageId].filter(
                comment => comment.id !== payload.old.id
              );
            });
            return newComments;
          });
        }
        if (payload.eventType === 'UPDATE') {
          setComments(prev => {
            const newComments = { ...prev };
            Object.keys(newComments).forEach(messageId => {
              newComments[messageId] = newComments[messageId].map(
                comment => comment.id === payload.new.id ? { ...comment, ...payload.new } : comment
              );
            });
            return newComments;
          });
        }
      })
      .subscribe();

    // And reactions changes
    const reactionChannel = supabase
      .channel('public:chat_reactions')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'chat_reactions'
      }, async (payload: any) => {
        if (payload.eventType === 'INSERT' && isValidChatReaction(payload.new)) {
          const reaction = payload.new as ChatReaction;
          setReactions(prev => ({
            ...prev,
            [reaction.message_id]: [...(prev[reaction.message_id] || []), reaction]
          }));
        }
        if (payload.eventType === 'DELETE') {
          setReactions(prev => {
            const newReactions = { ...prev };
            Object.keys(newReactions).forEach(messageId => {
              newReactions[messageId] = newReactions[messageId].filter(
                reaction => reaction.id !== payload.old.id
              );
            });
            return newReactions;
          });
        }
        if (payload.eventType === 'UPDATE' && isValidChatReaction(payload.new)) {
          setReactions(prev => {
            const newReactions = { ...prev };
            Object.keys(newReactions).forEach(messageId => {
              newReactions[messageId] = newReactions[messageId].map(
                reaction => reaction.id === payload.new.id ? { ...reaction, ...payload.new } : reaction
              );
            });
            return newReactions;
          });
        }
      })
      .subscribe();
    
    return () => {
      supabase.removeChannel(channel);
      supabase.removeChannel(commentChannel);
      supabase.removeChannel(reactionChannel);
    };
  }, []);

  const fetchCommentsAndReactions = async (messages: ChatMessage[]) => {
    try {
      const messageIds = messages.map(m => m.id);
      
      if (messageIds.length === 0) return;
      
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
