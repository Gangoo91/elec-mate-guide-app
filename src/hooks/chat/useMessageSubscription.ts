
import { useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Message } from "@/types/chat";
import { useToast } from "@/hooks/use-toast";
import { ChatType, getChatTitle } from "@/config/chatTypes";

export function useMessageSubscription(
  recipientId: string, 
  chatType: ChatType,
  userId: string | undefined,
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
) {
  const { toast } = useToast();

  useEffect(() => {
    if (!userId) return;

    const channel = supabase
      .channel('direct_messages')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'team_messages',
          filter: `recipient_id=eq.${userId}`,
        },
        async (payload) => {
          if (payload.eventType === 'INSERT') {
            const newMessage = payload.new as Message;
            if (newMessage.sender_id === recipientId && newMessage.chat_type === chatType) {
              setMessages(prev => [...prev, newMessage]);
              
              try {
                await supabase
                  .from('team_messages')
                  .update({ read: true })
                  .eq('id', newMessage.id);
              } catch (err) {
                console.error("Error marking message as read:", err);
              }

              toast({
                title: getChatTitle(chatType),
                description: newMessage.content.substring(0, 50) + (newMessage.content.length > 50 ? "..." : ""),
              });
            }
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [userId, recipientId, chatType, setMessages, toast]);
}
