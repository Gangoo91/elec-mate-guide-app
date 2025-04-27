
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { ChatReaction } from '@/types/chat-room';
import { isValidChatReaction } from '@/utils/chatTypeGuards';

export const useReactions = (
  setReactions: React.Dispatch<React.SetStateAction<Record<string, ChatReaction[]>>>
) => {
  const { toast } = useToast();

  const toggleReaction = async (messageId: string, type: 'upvote' | 'downvote', userId: string) => {
    try {
      const existingReaction = await supabase
        .from('chat_reactions')
        .select('*')
        .eq('message_id', messageId)
        .eq('user_id', userId)
        .single();

      if (existingReaction.data) {
        if (existingReaction.data.reaction_type === type) {
          // Remove reaction
          await supabase
            .from('chat_reactions')
            .delete()
            .eq('id', existingReaction.data.id);
        } else {
          // Update reaction
          await supabase
            .from('chat_reactions')
            .update({ reaction_type: type })
            .eq('id', existingReaction.data.id);
        }
      } else {
        // Add new reaction
        await supabase
          .from('chat_reactions')
          .insert([{
            message_id: messageId,
            user_id: userId,
            reaction_type: type
          }]);
      }

      // Refresh reactions for this message
      const { data: updatedReactions } = await supabase
        .from('chat_reactions')
        .select('*')
        .eq('message_id', messageId);

      const typedReactions = (updatedReactions || []).filter(isValidChatReaction);

      setReactions(prev => ({
        ...prev,
        [messageId]: typedReactions
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

  return { toggleReaction };
};
