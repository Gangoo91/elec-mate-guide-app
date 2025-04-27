
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useMessageFetching } from './chat/useMessageFetching';
import { useReactions } from './chat/useReactions';

export function useChatRoom() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [originalMessages, setOriginalMessages] = useState<any[]>([]);
  const {
    messages,
    comments,
    reactions,
    loading,
    setMessages,
    setComments,
    setReactions,
    fetchMessages: fetchMessagesBase
  } = useMessageFetching();

  const { toggleReaction } = useReactions(setReactions);

  const fetchMessages = async () => {
    const result = await fetchMessagesBase();
    if (result) {
      setOriginalMessages(result);
    }
    return result;
  };

  const searchMessages = (query: string) => {
    if (!query.trim()) {
      setMessages(originalMessages);
      return;
    }
    
    const filtered = originalMessages.filter(message => 
      message.content.toLowerCase().includes(query.toLowerCase())
    );
    
    setMessages(filtered);
  };

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

  const editMessage = async (messageId: string, content: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('chat_messages')
        .update({ content, updated_at: new Date().toISOString() })
        .eq('id', messageId)
        .eq('user_id', user.id);

      if (error) throw error;

      setMessages(prev => 
        prev.map(msg => msg.id === messageId ? { ...msg, content, updated_at: new Date().toISOString() } : msg)
      );
      
      // Also update in original messages for search functionality
      setOriginalMessages(prev => 
        prev.map(msg => msg.id === messageId ? { ...msg, content, updated_at: new Date().toISOString() } : msg)
      );

      toast({
        title: "Success",
        description: "Message updated successfully",
      });
    } catch (error) {
      console.error('Error editing message:', error);
      toast({
        title: "Error",
        description: "Failed to update message",
        variant: "destructive",
      });
    }
  };

  const deleteMessage = async (messageId: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('chat_messages')
        .delete()
        .eq('id', messageId)
        .eq('user_id', user.id);

      if (error) throw error;

      setMessages(prev => prev.filter(msg => msg.id !== messageId));
      setOriginalMessages(prev => prev.filter(msg => msg.id !== messageId));
      
      // Also clear related comments and reactions from state
      setComments(prev => {
        const newComments = { ...prev };
        delete newComments[messageId];
        return newComments;
      });
      
      setReactions(prev => {
        const newReactions = { ...prev };
        delete newReactions[messageId];
        return newReactions;
      });

      toast({
        title: "Success",
        description: "Message deleted successfully",
      });
    } catch (error) {
      console.error('Error deleting message:', error);
      toast({
        title: "Error",
        description: "Failed to delete message",
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

  const editComment = async (commentId: string, content: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('chat_comments')
        .update({ content, updated_at: new Date().toISOString() })
        .eq('id', commentId)
        .eq('user_id', user.id);

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

  const deleteComment = async (commentId: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('chat_comments')
        .delete()
        .eq('id', commentId)
        .eq('user_id', user.id);

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
    messages,
    comments,
    reactions,
    loading,
    sendMessage,
    editMessage,
    deleteMessage,
    toggleReaction: (messageId: string, type: 'upvote' | 'downvote') => 
      user && toggleReaction(messageId, type, user.id),
    addComment,
    editComment,
    deleteComment,
    fetchMessages,
    searchMessages
  };
}
