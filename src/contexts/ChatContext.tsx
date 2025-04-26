
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { ChatType } from "@/config/chatTypes";
import { useChatActions } from "@/hooks/useChat";
import { useToast } from "@/hooks/use-toast";

export interface Message {
  id: string;
  sender_id: string;
  recipient_id: string;
  content: string;
  created_at: string;
  read: boolean;
  chat_type: ChatType;
}

interface ChatContextType {
  messages: Message[];
  sendMessage: (recipientId: string, content: string, chatType: ChatType) => Promise<void>;
  markAsRead: (messageId: string) => Promise<void>;
  unreadCount: number;
  getUnreadCountByType: (chatType: ChatType) => number;
  filterMessagesByType: (chatType: ChatType) => Message[];
  activeChatType: ChatType;
  setActiveChatType: (chatType: ChatType) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeChatType, setActiveChatType] = useState<ChatType>("private");
  const { user } = useAuth();
  const { toast } = useToast();
  
  // Use our custom hook for chat actions
  const chatActions = useChatActions(messages, setMessages);
  
  useEffect(() => {
    if (!user) return;

    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('team_messages')
        .select('*')
        .or(`recipient_id.eq.${user.id},sender_id.eq.${user.id}`)
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching messages:', error);
        return;
      }

      setMessages(data || []);
    };

    fetchMessages();

    const channel = supabase
      .channel('chat_messages')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'team_messages',
          filter: `recipient_id=eq.${user.id}`
        },
        (payload) => {
          const newMessage = payload.new as Message;
          setMessages(prev => [...prev, newMessage]);
          
          toast({
            title: getChatTitle(newMessage.chat_type as ChatType),
            description: newMessage.content.substring(0, 50) + (newMessage.content.length > 50 ? "..." : ""),
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user, toast]);

  const unreadCount = messages.filter(
    msg => !msg.read && msg.recipient_id === user?.id
  ).length;

  return (
    <ChatContext.Provider value={{ 
      messages, 
      ...chatActions,
      unreadCount,
      activeChatType,
      setActiveChatType
    }}>
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};
