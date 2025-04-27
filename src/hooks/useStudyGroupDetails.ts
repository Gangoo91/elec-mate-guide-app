
import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useErrorHandler } from "@/hooks/useErrorHandler";
import { useAuth } from "@/hooks/useAuth";
import type { StudyGroup, StudyGroupSchedule } from '@/types/studyGroups';

export const useStudyGroupDetails = (groupId: string | undefined) => {
  const { user } = useAuth();
  const { handleError } = useErrorHandler();
  const [group, setGroup] = useState<StudyGroup | null>(null);
  const [schedules, setSchedules] = useState<StudyGroupSchedule[]>([]);
  const [memberCount, setMemberCount] = useState(0);
  const [isMember, setIsMember] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchGroupDetails = async () => {
    try {
      setIsLoading(true);
      
      if (!groupId) throw new Error("Group ID is required");

      const { data: groupData, error: groupError } = await supabase
        .from('study_groups')
        .select('*')
        .eq('id', groupId)
        .single();
      
      if (groupError) throw groupError;
      
      if (groupData) {
        const typedGroup: StudyGroup = {
          id: groupData.id,
          name: groupData.name,
          description: groupData.description || '',
          topic: groupData.topic,
          level: groupData.level,
          max_participants: groupData.max_participants,
          created_by: groupData.created_by,
          next_meeting_at: groupData.next_meeting_at,
          meeting_link: groupData.meeting_link,
          tags: groupData.tags || [],
          is_private: groupData.is_private || false,
          study_materials: Array.isArray(groupData.study_materials) ? groupData.study_materials : []
        };
        
        setGroup(typedGroup);
        setIsOwner(user?.id === groupData.created_by);

        await Promise.all([
          fetchSchedules(groupId),
          fetchMemberCount(groupId),
          checkMembership(groupId)
        ]);
      }
    } catch (error) {
      handleError(error, "Failed to load study group details");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSchedules = async (groupId: string) => {
    const { data: schedulesData, error: schedulesError } = await supabase
      .from('study_group_schedules')
      .select('*')
      .eq('group_id', groupId);
    
    if (schedulesError) throw schedulesError;
    setSchedules(schedulesData || []);
  };

  const fetchMemberCount = async (groupId: string) => {
    const { count, error: countError } = await supabase
      .from('study_group_members')
      .select('*', { count: 'exact' })
      .eq('group_id', groupId);
    
    if (countError) throw countError;
    setMemberCount(count || 0);
  };

  const checkMembership = async (groupId: string) => {
    if (!user) {
      setIsMember(false);
      return;
    }

    const { data: memberData, error: memberError } = await supabase
      .from('study_group_members')
      .select('*')
      .eq('group_id', groupId)
      .eq('user_id', user.id)
      .maybeSingle();
    
    if (memberError) throw memberError;
    setIsMember(!!memberData);
  };

  useEffect(() => {
    if (groupId) {
      fetchGroupDetails();
    }
  }, [groupId, user]);

  return {
    group,
    schedules,
    memberCount,
    isMember,
    isOwner,
    isLoading,
    fetchGroupDetails
  };
};
