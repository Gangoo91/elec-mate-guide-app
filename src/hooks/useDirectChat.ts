
import { useAuth } from "@/hooks/useAuth";
import { ChatType } from "@/config/chatTypes";
import { useMessageFetching } from "./chat/useMessageFetching";
import { useMessageSubscription } from "./chat/useMessageSubscription";
import { useMessageActions } from "./chat/useMessageActions";
import { Message } from "@/types/chat";
import { useState } from "react";

export function useDirectChat(recipientId: string, chatType: ChatType) {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const { loading } = useMessageFetching();
  const { sendMessage, blockUser, reportUser } = useMessageActions(user?.id, recipientId, chatType, setMessages);

  // Use the generic version of useMessageSubscription
  useMessageSubscription<Message>(setMessages);

  return {
    messages,
    loading,
    sendMessage,
    blockUser,
    reportUser
  };
}
