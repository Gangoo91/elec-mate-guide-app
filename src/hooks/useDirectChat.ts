
import { useAuth } from "@/hooks/useAuth";
import { ChatType } from "@/config/chatTypes";
import { useMessageFetching } from "./chat/useMessageFetching";
import { useMessageSubscription } from "./chat/useMessageSubscription";
import { useMessageActions } from "./chat/useMessageActions";
import { ChatMessage } from "@/types/chat-room";
import { useState } from "react";

export function useDirectChat(recipientId: string, chatType: ChatType) {
  const { user } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const { loading } = useMessageFetching();
  const { sendMessage, blockUser, reportUser } = useMessageActions(user?.id, recipientId, chatType, setMessages);

  useMessageSubscription(setMessages);

  return {
    messages,
    loading,
    sendMessage,
    blockUser,
    reportUser
  };
}
