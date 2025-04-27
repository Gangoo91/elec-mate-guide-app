
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

interface TypingState {
  userId: string;
  isTyping: boolean;
  chatId?: string;
}

/**
 * Hook to manage typing indicators in chats
 */
export function useTypingIndicator(chatId?: string) {
  const [typingUsers, setTypingUsers] = useState<Record<string, boolean>>({});
  const { user } = useAuth();
  
  // Subscribe to typing indicators on mount
  useEffect(() => {
    if (!user) return;
    
    const channel = supabase
      .channel('typing_indicators')
      .on('broadcast', { event: 'typing' }, (payload: { typing: TypingState }) => {
        if (payload.typing.userId !== user.id && (!chatId || payload.typing.chatId === chatId)) {
          setTypingUsers(prev => ({
            ...prev,
            [payload.typing.userId]: payload.typing.isTyping
          }));
          
          // Auto-clear typing indicator after 3 seconds of inactivity
          if (payload.typing.isTyping) {
            setTimeout(() => {
              setTypingUsers(prev => ({
                ...prev,
                [payload.typing.userId]: false
              }));
            }, 3000);
          }
        }
      })
      .subscribe();
    
    return () => {
      supabase.removeChannel(channel);
    };
  }, [chatId, user]);
  
  // Send typing indicator
  const setTyping = async (isTyping: boolean) => {
    if (!user) return;
    
    await supabase.channel('typing_indicators').send({
      type: 'broadcast',
      event: 'typing',
      payload: {
        typing: {
          userId: user.id,
          isTyping,
          chatId
        }
      }
    });
  };

  return {
    typingUsers,
    setTyping,
    isAnyoneTyping: Object.values(typingUsers).some(Boolean)
  };
}
