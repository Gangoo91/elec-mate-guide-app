
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

export type Notification = {
  id: string;
  title: string;
  message: string;
  read: boolean;
  date: Date;
  type?: "info" | "warning" | "success" | "error";
  link?: string;
};

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  // Fetch notifications from database or local storage
  const fetchNotifications = async () => {
    setLoading(true);
    
    // Sample notifications for now
    // In a real implementation, we would fetch from Supabase
    const sampleNotifications = [
      {
        id: "1",
        title: "Complete your profile",
        message: "Add your professional details to make your profile stand out",
        read: false,
        date: new Date(),
        type: "info" as const,
        link: "/profile"
      },
      {
        id: "2",
        title: "New training materials available",
        message: "Check out the new electrical code courses in the training section",
        read: false,
        date: new Date(Date.now() - 86400000), // 1 day ago
        type: "success" as const,
        link: "/training"
      },
      {
        id: "3",
        title: "Subscription active",
        message: "Your Electrician subscription is now active",
        read: true,
        date: new Date(Date.now() - 172800000), // 2 days ago
        type: "success" as const,
        link: "/manage-subscription"
      }
    ];
    
    setNotifications(sampleNotifications);
    setLoading(false);
  };

  // Mark a notification as read
  const markAsRead = async (id: string) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
    
    // In a real implementation, we would update the read status in Supabase
  };

  // Mark all notifications as read
  const markAllAsRead = async () => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({
        ...notification,
        read: true
      }))
    );
    
    // In a real implementation, we would update all read statuses in Supabase
  };

  // Add a new notification
  const addNotification = (notification: Omit<Notification, 'id' | 'date' | 'read'>) => {
    const newNotification = {
      ...notification,
      id: Date.now().toString(),
      date: new Date(),
      read: false
    };
    
    setNotifications(prev => [newNotification, ...prev]);
    
    // In a real implementation, we would add the notification to Supabase
  };

  // Clear all notifications
  const clearNotifications = () => {
    setNotifications([]);
    
    // In a real implementation, we would clear notifications in Supabase
  };

  // Load notifications when user changes
  useEffect(() => {
    if (user) {
      fetchNotifications();
    }
  }, [user]);

  return {
    notifications,
    loading,
    markAsRead,
    markAllAsRead,
    addNotification,
    clearNotifications,
    unreadCount: notifications.filter(n => !n.read).length
  };
};
