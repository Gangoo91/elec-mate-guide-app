
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { ChatComment } from '@/types/chat-room';

export function useCommentOperations(
  setComments: React.Dispatch<React.SetStateAction<Record<string, ChatComment[]>>>
) {
  const { toast } = useToast();

  const addComment = async (messageId: string, content: string, userId: string) => {
    try {
      const { data, error } = await supabase
        .from('chat_comments')
        .insert([{
          message_id: messageId,
          user_id: userId,
          content
        }])
        .select();

      if (error) throw error;

      setComments(prev => ({
        ...prev,
        [messageId]: [...(prev[messageId] || []), data[0]]
      }));

      toast({
        title: "Success",
        description: "Comment added successfully",
      });
    } catch (error) {
      console.error('Error adding comment:', error);
      toast({
        title: "Error",
        description: "Failed to add comment",
        variant: "destructive",
      });
    }
  };

  const editComment = async (commentId: string, content: string, userId: string) => {
    try {
      const { error } = await supabase
        .from('chat_comments')
        .update({ content, updated_at: new Date().toISOString() })
        .eq('id', commentId)
        .eq('user_id', userId);

      if (error) throw error;

      setComments(prev => {
        const newComments = { ...prev };
        Object.keys(newComments).forEach(messageId => {
          newComments[messageId] = newComments[messageId].map(
            comment => comment.id === commentId 
              ? { ...comment, content, updated_at: new Date().toISOString() } 
              : comment
          );
        });
        return newComments;
      });

      toast({
        title: "Success",
        description: "Comment updated successfully",
      });
    } catch (error) {
      console.error('Error editing comment:', error);
      toast({
        title: "Error",
        description: "Failed to update comment",
        variant: "destructive",
      });
    }
  };

  const deleteComment = async (commentId: string, userId: string) => {
    try {
      const { error } = await supabase
        .from('chat_comments')
        .delete()
        .eq('id', commentId)
        .eq('user_id', userId);

      if (error) throw error;

      setComments(prev => {
        const newComments = { ...prev };
        Object.keys(newComments).forEach(messageId => {
          newComments[messageId] = newComments[messageId].filter(
            comment => comment.id !== commentId
          );
        });
        return newComments;
      });

      toast({
        title: "Success",
        description: "Comment deleted successfully",
      });
    } catch (error) {
      console.error('Error deleting comment:', error);
      toast({
        title: "Error",
        description: "Failed to delete comment",
        variant: "destructive",
      });
    }
  };

  return {
    addComment,
    editComment,
    deleteComment
  };
}
