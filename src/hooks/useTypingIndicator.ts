
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useProfiles } from '@/hooks/useProfiles';

interface TypingState {
  userId: string;
  isTyping: boolean;
  chatId?: string;
  username?: string;
}

interface TypingUserInfo {
  userId: string;
  username?: string;
  isTyping: boolean;
  lastTyped: number;
}

/**
 * Hook to manage typing indicators in chats
 */
export function useTypingIndicator(chatId?: string) {
  const [typingUsers, setTypingUsers] = useState<Record<string, TypingUserInfo>>({});
  const { user } = useAuth();
  const { profiles } = useProfiles();
  
  // Subscribe to typing indicators on mount
  useEffect(() => {
    if (!user) return;
    
    const channel = supabase
      .channel('typing_indicators')
      .on('broadcast', { event: 'typing' }, (payload: { payload: { typing: TypingState } }) => {
        if (payload.payload.typing.userId !== user.id && (!chatId || payload.payload.typing.chatId === chatId)) {
          const profile = profiles?.find(p => p.id === payload.payload.typing.userId);
          const username = profile ? profile.first_name : payload.payload.typing.username;
          
          setTypingUsers(prev => ({
            ...prev,
            [payload.payload.typing.userId]: {
              userId: payload.payload.typing.userId,
              username: username || 'Someone',
              isTyping: payload.payload.typing.isTyping,
              lastTyped: Date.now()
            }
          }));
        }
      })
      .subscribe();
    
    // Auto-clean inactive typing indicators
    const cleanupTimer = setInterval(() => {
      const now = Date.now();
      setTypingUsers(prev => {
        const updated = { ...prev };
        Object.keys(updated).forEach(userId => {
          // Remove typing indicators older than 5 seconds
          if (now - updated[userId].lastTyped > 5000) {
            updated[userId] = {
              ...updated[userId],
              isTyping: false
            };
          }
        });
        return updated;
      });
    }, 1000); 
    
    return () => {
      supabase.removeChannel(channel);
      clearInterval(cleanupTimer);
    };
  }, [chatId, user, profiles]);
  
  // Send typing indicator
  const setTyping = async (isTyping: boolean) => {
    if (!user) return;
    
    const profile = profiles?.find(p => p.id === user.id);
    const username = profile?.first_name || 'User';
    
    await supabase.channel('typing_indicators').send({
      type: 'broadcast',
      event: 'typing',
      payload: {
        typing: {
          userId: user.id,
          username,
          isTyping,
          chatId
        }
      }
    });
  };

  const typingUsersArray = Object.values(typingUsers).filter(u => u.isTyping);

  return {
    typingUsers,
    typingUsersArray,
    setTyping,
    isAnyoneTyping: typingUsersArray.length > 0
  };
}
