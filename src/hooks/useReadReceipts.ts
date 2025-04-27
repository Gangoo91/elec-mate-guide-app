
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Message } from '@/types/chat';
import { useAuth } from '@/hooks/useAuth';

/**
 * Hook to manage read receipts for messages
 */
export function useReadReceipts(messages: Message[]) {
  const [readReceipts, setReadReceipts] = useState<Record<string, boolean>>({});
  const { user } = useAuth();
  
  // Mark messages as read when they appear in the UI
  useEffect(() => {
    if (!user) return;
    
    const unreadMessages = messages.filter(
      msg => msg.recipient_id === user.id && !msg.read
    );
    
    if (unreadMessages.length === 0) return;
    
    const markAsRead = async () => {
      try {
        const messageIds = unreadMessages.map(msg => msg.id);
        
        // Update in the database
        const { error } = await supabase
          .from('team_messages')
          .update({ read: true })
          .in('id', messageIds);
          
        if (error) throw error;
        
        // Update local state
        const newReceipts = { ...readReceipts };
        messageIds.forEach(id => {
          newReceipts[id] = true;
        });
        setReadReceipts(newReceipts);
        
      } catch (error) {
        console.error('Error marking messages as read:', error);
      }
    };
    
    // Slight delay to ensure messages are rendered and visible to user
    const timer = setTimeout(markAsRead, 1000);
    return () => clearTimeout(timer);
  }, [messages, user]);

  return {
    readReceipts,
    isRead: (messageId: string) => readReceipts[messageId] || false
  };
}
