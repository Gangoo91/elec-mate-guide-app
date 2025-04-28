
import { useMessagesData } from './useMessagesData';
import { useMessageSubscriptions } from './useMessageSubscriptions';

export const useMessageFetching = () => {
  const {
    messages,
    comments,
    reactions,
    loading,
    setMessages,
    setComments,
    setReactions,
    fetchMessages,
  } = useMessagesData();

  const { fetchCommentsAndReactions } = useMessageSubscriptions(
    setMessages,
    setComments,
    setReactions
  );

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
