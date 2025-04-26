
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

export type TeamMemberPresence = {
  id: string;
  user_id: string;
  online: boolean;
  last_seen: string;
  status: string;
};

export function useTeamPresence() {
  const [presenceData, setPresenceData] = useState<TeamMemberPresence[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    // Insert or update presence record when component mounts
    const updatePresence = async () => {
      await supabase
        .from('team_member_presence')
        .upsert({ 
          user_id: user.id,
          online: true,
          last_seen: new Date().toISOString(),
        });
    };
    
    updatePresence();

    // Subscribe to presence changes
    const channel = supabase
      .channel('team_presence')
      .on(
        'postgres_changes',
        { 
          event: '*', 
          schema: 'public',
          table: 'team_member_presence'
        },
        (payload) => {
          console.log('Presence update:', payload);
          fetchPresenceData();
        }
      )
      .subscribe();

    // Fetch initial presence data
    const fetchPresenceData = async () => {
      const { data } = await supabase
        .from('team_member_presence')
        .select('*')
        .order('last_seen', { ascending: false });
      
      if (data) {
        setPresenceData(data);
      }
    };

    fetchPresenceData();

    // Update presence every minute and before user leaves
    const interval = setInterval(() => updatePresence(), 60000);
    
    const handleBeforeUnload = () => {
      if (user) {
        supabase
          .from('team_member_presence')
          .upsert({ 
            user_id: user.id,
            online: false,
            last_seen: new Date().toISOString(),
          });
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearInterval(interval);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      supabase.removeChannel(channel);
      handleBeforeUnload();
    };
  }, [user]);

  return { presenceData };
}
