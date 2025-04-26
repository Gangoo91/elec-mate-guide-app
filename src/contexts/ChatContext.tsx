
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

export type ChatType = "private" | "team" | "mental_health" | "mentor";

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
  
  useEffect(() => {
    if (!user) return;

    // Fetch initial messages
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

      // Handle existing messages without chat_type by assigning default "private"
      const processedData = data?.map(msg => ({
        ...msg,
        chat_type: msg.chat_type || "private"
      }));
      
      setMessages(processedData || []);
    };

    fetchMessages();

    // Subscribe to new messages
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
          // Assign default chat_type if not present
          if (!newMessage.chat_type) {
            newMessage.chat_type = "private";
          }
          
          setMessages(prev => [...prev, newMessage]);
          
          // Show toast notification with context about which chat the message is from
          const chatTypeLabels = {
            "private": "Private Message",
            "team": "Team Chat",
            "mental_health": "Mental Health Mate",
            "mentor": "Mentor Connect"
          };
          
          toast({
            title: chatTypeLabels[newMessage.chat_type as ChatType] || "New message",
            description: newMessage.content.substring(0, 50) + (newMessage.content.length > 50 ? "..." : ""),
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user, toast]);

  const sendMessage = async (recipientId: string, content: string, chatType: ChatType = "private") => {
    if (!user) return;

    try {
      const { error } = await supabase.from('team_messages').insert({
        sender_id: user.id,
        recipient_id: recipientId,
        content,
        read: false,
        chat_type: chatType
      });

      if (error) throw error;
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message",
        variant: "destructive",
      });
    }
  };

  const markAsRead = async (messageId: string) => {
    try {
      const { error } = await supabase
        .from('team_messages')
        .update({ read: true })
        .eq('id', messageId);

      if (error) throw error;
      
      setMessages(prev =>
        prev.map(msg =>
          msg.id === messageId ? { ...msg, read: true } : msg
        )
      );
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  };

  const unreadCount = messages.filter(
    msg => !msg.read && msg.recipient_id === user?.id
  ).length;
  
  const getUnreadCountByType = (chatType: ChatType): number => {
    return messages.filter(
      msg => !msg.read && msg.recipient_id === user?.id && msg.chat_type === chatType
    ).length;
  };
  
  const filterMessagesByType = (chatType: ChatType): Message[] => {
    return messages.filter(msg => msg.chat_type === chatType);
  };

  return (
    <ChatContext.Provider value={{ 
      messages, 
      sendMessage, 
      markAsRead, 
      unreadCount,
      getUnreadCountByType,
      filterMessagesByType,
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
