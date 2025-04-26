
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

export type TeamNotification = {
  id: string;
  sender_id: string;
  content: string;
  created_at: string;
  read: boolean;
};

export const useTeamNotifications = () => {
  const [notifications, setNotifications] = useState<TeamNotification[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (!user) return;

    const fetchNotifications = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('team_messages')
        .select('*')
        .eq('recipient_id', user.id)
        .eq('read', false)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching notifications:', error);
      } else {
        setNotifications(data || []);
      }
      setLoading(false);
    };

    fetchNotifications();

    // Subscribe to new notifications
    const channel = supabase
      .channel('new_team_messages')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'team_messages',
          filter: `recipient_id=eq.${user.id}`
        },
        (payload) => {
          const newNotification = payload.new as TeamNotification;
          setNotifications(prev => [newNotification, ...prev]);
          
          // Show a toast notification
          toast({
            title: "New message",
            description: `${newNotification.content.substring(0, 30)}${newNotification.content.length > 30 ? '...' : ''}`,
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user, toast]);

  const markAsRead = async (id: string) => {
    try {
      const { error } = await supabase
        .from('team_messages')
        .update({ read: true })
        .eq('id', id);

      if (error) throw error;
      
      // Remove from local notifications
      setNotifications(prev => prev.filter(notif => notif.id !== id));
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  const markAllAsRead = async () => {
    if (notifications.length === 0) return;
    
    try {
      const { error } = await supabase
        .from('team_messages')
        .update({ read: true })
        .eq('recipient_id', user?.id)
        .eq('read', false);

      if (error) throw error;
      
      // Clear local notifications
      setNotifications([]);
    } catch (error) {
      console.error('Error marking all notifications as read:', error);
    }
  };

  return {
    notifications,
    loading,
    markAsRead,
    markAllAsRead,
    unreadCount: notifications.length,
  };
};
