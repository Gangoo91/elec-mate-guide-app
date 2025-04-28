
import { useState, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { ChatReaction } from '@/types/chat-room';
import { useErrorHandler } from '@/hooks/useErrorHandler';

export const useReactions = (
  setReactions: React.Dispatch<React.SetStateAction<Record<string, ChatReaction[]>>>
) => {
  const { handleError } = useErrorHandler();
  const [isProcessing, setIsProcessing] = useState(false);
  const processingRef = useRef(false); // Use ref to prevent race conditions

  const toggleReaction = async (messageId: string, type: 'upvote' | 'downvote', userId: string) => {
    // Double protection: check both state and ref to prevent multiple calls
    if (isProcessing || processingRef.current) return; 
    
    try {
      setIsProcessing(true);
      processingRef.current = true;
      
      // Check if user has already reacted
      const { data: existingReaction, error } = await supabase
        .from('chat_reactions')
        .select('*')
        .eq('message_id', messageId)
        .eq('user_id', userId)
        .single();

      if (error && error.code !== 'PGRST116') { // PGRST116 is "no rows returned" error code
        throw error;
      }

      if (existingReaction) {
        // Remove reaction if same type, otherwise update
        if (existingReaction.reaction_type === type) {
          await supabase
            .from('chat_reactions')
            .delete()
            .eq('id', existingReaction.id);

          setReactions(prev => {
            const updatedReactions = {...prev};
            if (updatedReactions[messageId]) {
              updatedReactions[messageId] = updatedReactions[messageId].filter(r => r.id !== existingReaction.id);
            }
            return updatedReactions;
          });
        } else {
          const { data: updatedReaction, error: updateError } = await supabase
            .from('chat_reactions')
            .update({ reaction_type: type })
            .eq('id', existingReaction.id)
            .select()
            .single();

          if (updateError) throw updateError;

          if (updatedReaction) {
            setReactions(prev => {
              const updatedReactions = {...prev};
              if (updatedReactions[messageId]) {
                updatedReactions[messageId] = updatedReactions[messageId].map(r =>
                  r.id === updatedReaction.id ? updatedReaction as ChatReaction : r
                );
              }
              return updatedReactions;
            });
          }
        }
      } else {
        // Add new reaction
        const { data: newReaction, error: insertError } = await supabase
          .from('chat_reactions')
          .insert([{ message_id: messageId, user_id: userId, reaction_type: type }])
          .select()
          .single();

        if (insertError) throw insertError;

        if (newReaction) {
          setReactions(prev => {
            const updatedReactions = {...prev};
            updatedReactions[messageId] = [...(updatedReactions[messageId] || []), newReaction as ChatReaction];
            return updatedReactions;
          });
        }
      }
    } catch (error) {
      handleError(error, 'Failed to update reaction');
    } finally {
      // Small delay to prevent accidental double-clicks
      setTimeout(() => {
        setIsProcessing(false);
        processingRef.current = false;
      }, 300);
    }
  };

  return { toggleReaction };
};
