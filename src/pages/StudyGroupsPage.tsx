
import React, { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import StudyGroupCard from "@/components/apprentices/StudyGroupCard";
import CreateStudyGroupDialog from "@/components/apprentices/CreateStudyGroupDialog";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Search } from "lucide-react";
import { useErrorHandler } from "@/hooks/useErrorHandler";

const StudyGroupsPage = () => {
  const [groups, setGroups] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState<string>("all");
  const [memberCounts, setMemberCounts] = useState<Record<string, number>>({});
  const [userMemberships, setUserMemberships] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();
  const { handleError } = useErrorHandler();

  const fetchGroups = async () => {
    try {
      setIsLoading(true);
      
      const { data: groups, error } = await supabase
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
      
      setGroups(groups || []);

      const counts: Record<string, number> = {};
      for (const group of groups || []) {
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

  useEffect(() => {
    fetchGroups();
  }, [user]);

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

  const filteredGroups = groups.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         group.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (group.description && group.description.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesLevel = levelFilter === "all" || group.level === levelFilter;
    return matchesSearch && matchesLevel;
  });

  return (
    <MainLayout>
      <div className="container px-4 py-6">
        <PageHeader
          title="Study Groups"
          description="Join or create study groups to learn together with fellow apprentices"
        />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex-1 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#FFC900]/40" />
              <Input
                placeholder="Search groups..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] w-full"
              />
            </div>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <Select onValueChange={setLevelFilter} value={levelFilter}>
              <SelectTrigger className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] w-[200px]">
                <SelectValue placeholder="Filter by level" />
              </SelectTrigger>
              <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
            <CreateStudyGroupDialog onGroupCreated={fetchGroups} />
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="h-8 w-8 rounded-full border-2 border-[#FFC900]/80 border-t-transparent animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGroups.map(group => (
              <StudyGroupCard
                key={group.id}
                id={group.id}
                name={group.name}
                description={group.description || ""}
                topic={group.topic}
                level={group.level}
                max_participants={group.max_participants}
                created_by={group.created_by}
                next_meeting_at={group.next_meeting_at}
                meeting_link={group.meeting_link}
                tags={group.tags}
                is_private={group.is_private}
                study_materials={group.study_materials || []}
                memberCount={memberCounts[group.id] || 0}
                isMember={userMemberships.has(group.id)}
                onJoinLeave={() => handleJoinLeave(group.id, userMemberships.has(group.id))}
              />
            ))}
            {filteredGroups.length === 0 && !isLoading && (
              <div className="col-span-full text-center py-8 text-[#FFC900]/60">
                No study groups found matching your criteria
              </div>
            )}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default StudyGroupsPage;
