
import { useAuth } from "@/hooks/useAuth";
import { ChatType } from "@/config/chatTypes";
import { useMessageFetching } from "./chat/useMessageFetching";
import { useMessageSubscription } from "./chat/useMessageSubscription";
import { useMessageActions } from "./chat/useMessageActions";

export function useDirectChat(recipientId: string, chatType: ChatType) {
  const { user } = useAuth();
  const { messages, setMessages, loading } = useMessageFetching(recipientId, chatType);
  const { sendMessage, blockUser, reportUser } = useMessageActions(user?.id, recipientId, chatType, setMessages);

  useMessageSubscription(recipientId, chatType, user?.id, setMessages);

  return {
    messages,
    loading,
    sendMessage,
    blockUser,
    reportUser
  };
}
