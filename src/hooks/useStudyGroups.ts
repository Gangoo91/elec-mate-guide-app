
import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useErrorHandler } from "@/hooks/useErrorHandler";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import type { StudyGroup } from '@/types/studyGroups';

export const useStudyGroups = () => {
  const [groups, setGroups] = useState<StudyGroup[]>([]);
  const [memberCounts, setMemberCounts] = useState<Record<string, number>>({});
  const [userMemberships, setUserMemberships] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();
  const { handleError } = useErrorHandler();

  const fetchGroups = async () => {
    try {
      setIsLoading(true);
      
      const { data: groupsData, error } = await supabase
        .from('study_groups')
        .select(`
          *,
          study_group_schedules (
            day_of_week,
            start_time,
            duration_minutes,
            meeting_link
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      // Convert the fetched data to match the StudyGroup type
      const typedGroups: StudyGroup[] = groupsData?.map(group => ({
        id: group.id,
        name: group.name,
        description: group.description || '',
        topic: group.topic,
        level: group.level,
        max_participants: group.max_participants,
        created_by: group.created_by,
        next_meeting_at: group.next_meeting_at,
        meeting_link: group.meeting_link,
        tags: group.tags || [],
        is_private: group.is_private || false,
        study_materials: Array.isArray(group.study_materials) ? group.study_materials : []
      })) || [];
      
      setGroups(typedGroups);

      const counts: Record<string, number> = {};
      for (const group of groupsData || []) {
        const { count, error: countError } = await supabase
          .from('study_group_members')
          .select('*', { count: 'exact' })
          .eq('group_id', group.id);
          
        if (countError) {
          console.error("Error fetching member count:", countError);
        }
        
        counts[group.id] = count || 0;
      }
      setMemberCounts(counts);

      if (user) {
        const { data: memberships, error: membershipError } = await supabase
          .from('study_group_members')
          .select('group_id')
          .eq('user_id', user.id);
        
        if (membershipError) {
          console.error("Error fetching user memberships:", membershipError);
        }
        
        setUserMemberships(new Set((memberships || []).map(m => m.group_id)));
      }
    } catch (error) {
      handleError(error, "Failed to load study groups");
    } finally {
      setIsLoading(false);
    }
  };

  const handleJoinLeave = async (groupId: string, isMember: boolean) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to join study groups",
        variant: "destructive",
      });
      return;
    }

    try {
      if (isMember) {
        const { error } = await supabase
          .from('study_group_members')
          .delete()
          .eq('group_id', groupId)
          .eq('user_id', user.id);

        if (error) throw error;
        
        toast({
          title: "Left group",
          description: "You have left the study group",
        });
      } else {
        const { error } = await supabase
          .from('study_group_members')
          .insert({
            group_id: groupId,
            user_id: user.id
          });

        if (error) throw error;
        
        toast({
          title: "Joined group",
          description: "You have joined the study group",
        });
      }

      fetchGroups();
    } catch (error) {
      handleError(error, "Failed to update group membership");
    }
  };

  useEffect(() => {
    fetchGroups();
  }, [user]);

  return {
    groups,
    memberCounts,
    userMemberships,
    isLoading,
    fetchGroups,
    handleJoinLeave
  };
};
