
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { ChatReaction } from '@/types/chat-room';
import { useErrorHandler } from '@/hooks/useErrorHandler';

export const useReactions = (
  setReactions: React.Dispatch<React.SetStateAction<Record<string, ChatReaction[]>>>
) => {
  const { handleError } = useErrorHandler();

  const toggleReaction = async (messageId: string, type: 'upvote' | 'downvote', userId: string) => {
    try {
      // Check if user has already reacted
      const { data: existingReaction } = await supabase
        .from('chat_reactions')
        .select('*')
        .eq('message_id', messageId)
        .eq('user_id', userId)
        .single();

      if (existingReaction) {
        // Remove reaction if same type, otherwise update
        if (existingReaction.reaction_type === type) {
          await supabase
            .from('chat_reactions')
            .delete()
            .eq('id', existingReaction.id);

          setReactions(prev => ({
            ...prev,
            [messageId]: prev[messageId]?.filter(r => r.id !== existingReaction.id) || []
          }));
        } else {
          const { data: updatedReaction } = await supabase
            .from('chat_reactions')
            .update({ reaction_type: type })
            .eq('id', existingReaction.id)
            .select()
            .single();

          if (updatedReaction) {
            setReactions(prev => ({
              ...prev,
              [messageId]: prev[messageId]?.map(r =>
                r.id === updatedReaction.id ? updatedReaction as ChatReaction : r
              ) || []
            }));
          }
        }
      } else {
        // Add new reaction
        const { data: newReaction } = await supabase
          .from('chat_reactions')
          .insert([{ message_id: messageId, user_id: userId, reaction_type: type }])
          .select()
          .single();

        if (newReaction) {
          setReactions(prev => ({
            ...prev,
            [messageId]: [...(prev[messageId] || []), newReaction as ChatReaction]
          }));
        }
      }
    } catch (error) {
      handleError(error, 'Failed to update reaction');
    }
  };

  return { toggleReaction };
};
