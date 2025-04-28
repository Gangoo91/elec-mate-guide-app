
import { useAuth } from '@/hooks/useAuth';
import { useMessageFetching } from './chat/useMessageFetching';
import { useReactions } from './chat/useReactions';
import { useMessageOperations } from './chat/useMessageOperations';
import { useCommentOperations } from './chat/useCommentOperations';

export function useChatRoom() {
  const { user } = useAuth();
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
  
  const {
    searchMessages,
    sendMessage,
    editMessage,
    deleteMessage,
    setOriginalMessages
  } = useMessageOperations(setMessages);

  const {
    addComment,
    editComment,
    deleteComment
  } = useCommentOperations(setComments);

  const fetchMessages = async () => {
    const result = await fetchMessagesBase();
    if (result) {
      setOriginalMessages(result);
    }
    return result;
  };

  return {
    messages,
    comments,
    reactions,
    loading,
    sendMessage: (content: string) => user && sendMessage(content, user.id),
    editMessage: (messageId: string, content: string) => user && editMessage(messageId, content, user.id),
    deleteMessage: (messageId: string) => user && deleteMessage(messageId, user.id),
    toggleReaction: (messageId: string, type: 'upvote' | 'downvote') => 
      user && toggleReaction(messageId, type, user.id),
    addComment: (messageId: string, content: string) => user && addComment(messageId, content, user.id),
    editComment: (commentId: string, content: string) => user && editComment(commentId, content, user.id),
    deleteComment: (commentId: string) => user && deleteComment(commentId, user.id),
    fetchMessages,
    searchMessages
  };
}
