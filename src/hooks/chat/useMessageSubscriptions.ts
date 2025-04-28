
import { supabase } from '@/integrations/supabase/client';
import { useEffect } from 'react';
import { ChatMessage, ChatComment, ChatReaction } from '@/types/chat-room';
import { useToast } from '@/hooks/use-toast';

export const useMessageSubscriptions = (
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>,
  setComments: React.Dispatch<React.SetStateAction<Record<string, ChatComment[]>>>,
  setReactions: React.Dispatch<React.SetStateAction<Record<string, ChatReaction[]>>>
) => {
  const { toast } = useToast();

  // Function to fetch comments and reactions for a message
  const fetchCommentsAndReactions = async (messageId: string) => {
    // Fetch comments
    const { data: comments } = await supabase
      .from('chat_comments')
      .select('*')
      .eq('message_id', messageId)
      .order('created_at', { ascending: true });

    if (comments && comments.length > 0) {
      setComments(prev => ({
        ...prev,
        [messageId]: comments as ChatComment[]
      }));
    }

    // Fetch reactions
    const { data: reactions } = await supabase
      .from('chat_reactions')
      .select('*')
      .eq('message_id', messageId);

    if (reactions && reactions.length > 0) {
      setReactions(prev => ({
        ...prev,
        [messageId]: reactions as ChatReaction[]
      }));
    }
  };

  // Subscribe to changes
  useEffect(() => {
    // Messages subscription
    const messagesChannel = supabase
      .channel('messages-changes')
      .on(
        'postgres_changes',
        { 
          event: '*', 
          schema: 'public',
          table: 'chat_messages'
        },
        async (payload) => {
          try {
            if (payload.eventType === 'INSERT') {
              const newMessage = payload.new as ChatMessage;
              setMessages(prev => [newMessage, ...prev]);
              // No need to fetch additional data for new messages
            } else if (payload.eventType === 'UPDATE') {
              const updatedMessage = payload.new as ChatMessage;
              setMessages(prev => 
                prev.map(msg => msg.id === updatedMessage.id ? updatedMessage : msg)
              );
            } else if (payload.eventType === 'DELETE') {
              const deletedMessage = payload.old as ChatMessage;
              setMessages(prev => prev.filter(msg => msg.id !== deletedMessage.id));
              // Clean up comments and reactions for deleted message
              setComments(prev => {
                const updated = {...prev};
                delete updated[deletedMessage.id];
                return updated;
              });
              setReactions(prev => {
                const updated = {...prev};
                delete updated[deletedMessage.id];
                return updated;
              });
            }
          } catch (error) {
            console.error('Error handling message change:', error);
          }
        }
      )
      .subscribe();

    // Comments subscription
    const commentsChannel = supabase
      .channel('comments-changes')
      .on(
        'postgres_changes',
        { 
          event: '*', 
          schema: 'public',
          table: 'chat_comments'
        },
        (payload) => {
          try {
            if (payload.eventType === 'INSERT') {
              const newComment = payload.new as ChatComment;
              setComments(prev => ({
                ...prev,
                [newComment.message_id]: [
                  ...(prev[newComment.message_id] || []),
                  newComment
                ]
              }));
            } else if (payload.eventType === 'UPDATE') {
              const updatedComment = payload.new as ChatComment;
              setComments(prev => {
                const updated = {...prev};
                if (updated[updatedComment.message_id]) {
                  updated[updatedComment.message_id] = updated[updatedComment.message_id].map(
                    comment => comment.id === updatedComment.id ? updatedComment : comment
                  );
                }
                return updated;
              });
            } else if (payload.eventType === 'DELETE') {
              const deletedComment = payload.old as ChatComment;
              setComments(prev => {
                const updated = {...prev};
                if (updated[deletedComment.message_id]) {
                  updated[deletedComment.message_id] = updated[deletedComment.message_id].filter(
                    comment => comment.id !== deletedComment.id
                  );
                }
                return updated;
              });
            }
          } catch (error) {
            console.error('Error handling comment change:', error);
          }
        }
      )
      .subscribe();

    // Reactions subscription with optimized handler to prevent duplicate state updates
    const reactionsChannel = supabase
      .channel('reactions-changes')
      .on(
        'postgres_changes',
        { 
          event: '*', 
          schema: 'public',
          table: 'chat_reactions'
        },
        (payload) => {
          try {
            if (payload.eventType === 'INSERT') {
              const newReaction = payload.new as ChatReaction;
              setReactions(prev => {
                // Don't update if we already have this reaction (prevent duplicates)
                if (prev[newReaction.message_id]?.some(r => r.id === newReaction.id)) {
                  return prev;
                }
                return {
                  ...prev,
                  [newReaction.message_id]: [
                    ...(prev[newReaction.message_id] || []),
                    newReaction
                  ]
                };
              });
            } else if (payload.eventType === 'UPDATE') {
              const updatedReaction = payload.new as ChatReaction;
              setReactions(prev => {
                const updated = {...prev};
                if (updated[updatedReaction.message_id]) {
                  // Only update if the reaction exists and has changed
                  updated[updatedReaction.message_id] = updated[updatedReaction.message_id].map(
                    reaction => reaction.id === updatedReaction.id ? updatedReaction : reaction
                  );
                }
                return updated;
              });
            } else if (payload.eventType === 'DELETE') {
              const deletedReaction = payload.old as ChatReaction;
              setReactions(prev => {
                const updated = {...prev};
                if (updated[deletedReaction.message_id]) {
                  updated[deletedReaction.message_id] = updated[deletedReaction.message_id].filter(
                    reaction => reaction.id !== deletedReaction.id
                  );
                }
                return updated;
              });
            }
          } catch (error) {
            console.error('Error handling reaction change:', error);
          }
        }
      )
      .subscribe();

    return () => {
      // Clean up subscriptions when component unmounts
      supabase.removeChannel(messagesChannel);
      supabase.removeChannel(commentsChannel);
      supabase.removeChannel(reactionsChannel);
    };
  }, [setMessages, setComments, setReactions, toast]);

  return { fetchCommentsAndReactions };
};
