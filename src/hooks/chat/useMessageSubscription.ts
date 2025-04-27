
import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Message } from '@/types/chat';

export const useMessageSubscription = (
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
) => {
  useEffect(() => {
    const channelName = 'public:chat_messages';
    
    try {
      const channel = supabase
        .channel(channelName)
        .on('postgres_changes', {
          event: '*',
          schema: 'public',
          table: 'chat_messages'
        }, async (payload: any) => {
          if (payload.eventType === 'INSERT') {
            setMessages(prev => [payload.new as Message, ...prev]);
          }
          if (payload.eventType === 'DELETE') {
            setMessages(prev => prev.filter(msg => msg.id !== payload.old.id));
          }
        })
        .subscribe();
      
      return () => {
        supabase.removeChannel(channel);
      };
    } catch (error) {
      console.error('Error setting up subscription:', error);
      return () => {};
    }
  }, [setMessages]);

  return null;
};
