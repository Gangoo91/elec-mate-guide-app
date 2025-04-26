
import { Message } from "@/types/chat";
import { ChatType } from "@/config/chatTypes";
import { useAuth } from "@/hooks/useAuth";

export const useMessageFilter = (messages: Message[]) => {
  const { user } = useAuth();

  const getUnreadCountByType = (chatType: ChatType): number => {
    return messages.filter(
      msg => !msg.read && msg.recipient_id === user?.id && msg.chat_type === chatType
    ).length;
  };

  const filterMessagesByType = (chatType: ChatType): Message[] => {
    return messages.filter(msg => msg.chat_type === chatType);
  };

  return {
    getUnreadCountByType,
    filterMessagesByType,
  };
};
