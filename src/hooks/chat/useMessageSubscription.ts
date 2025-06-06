
import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Message } from '@/types/chat';

// Ensure our generic type T extends object and has an id property
export const useMessageSubscription = <T extends { id: string }>(
  setMessages: React.Dispatch<React.SetStateAction<T[]>>
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
            setMessages(prev => [payload.new as T, ...prev]);
          }
          if (payload.eventType === 'DELETE') {
            // Now we're safe to access id because T is constrained
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
