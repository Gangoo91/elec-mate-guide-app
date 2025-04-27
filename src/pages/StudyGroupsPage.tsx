
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

const StudyGroupsPage = () => {
  const [groups, setGroups] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState<string>("");
  const [memberCounts, setMemberCounts] = useState<Record<string, number>>({});
  const [userMemberships, setUserMemberships] = useState<Set<string>>(new Set());
  const { user } = useAuth();
  const { toast } = useToast();

  const fetchGroups = async () => {
    try {
      const { data: groups, error } = await supabase
        .from('study_groups')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setGroups(groups || []);

      // Fetch member counts for each group
      const counts: Record<string, number> = {};
      for (const group of groups || []) {
        const { count } = await supabase
          .from('study_group_members')
          .select('*', { count: 'exact' })
          .eq('group_id', group.id);
        counts[group.id] = count || 0;
      }
      setMemberCounts(counts);

      // Fetch user memberships
      if (user) {
        const { data: memberships } = await supabase
          .from('study_group_members')
          .select('group_id')
          .eq('user_id', user.id);
        
        setUserMemberships(new Set((memberships || []).map(m => m.group_id)));
      }
    } catch (error) {
      console.error('Error fetching study groups:', error);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, [user]);

  const handleJoinLeave = async (groupId: string, isMember: boolean) => {
    if (!user) return;

    try {
      if (isMember) {
        const { error } = await supabase
          .from('study_group_members')
          .delete()
          .eq('group_id', groupId)
          .eq('user_id', user.id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('study_group_members')
          .insert({
            group_id: groupId,
            user_id: user.id
          });

        if (error) throw error;
      }

      fetchGroups();
      toast({
        title: isMember ? "Left group" : "Joined group",
        description: isMember ? "You have left the study group" : "You have joined the study group",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update group membership",
        variant: "destructive",
      });
    }
  };

  const filteredGroups = groups.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         group.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         group.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = !levelFilter || group.level === levelFilter;
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
                <SelectItem value="">All Levels</SelectItem>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
            <CreateStudyGroupDialog onGroupCreated={fetchGroups} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map(group => (
            <StudyGroupCard
              key={group.id}
              id={group.id}
              name={group.name}
              description={group.description}
              topic={group.topic}
              level={group.level}
              maxParticipants={group.max_participants}
              createdBy={group.created_by}
              nextMeetingAt={group.next_meeting_at}
              meetingLink={group.meeting_link}
              memberCount={memberCounts[group.id] || 0}
              isMember={userMemberships.has(group.id)}
              onJoinLeave={() => handleJoinLeave(group.id, userMemberships.has(group.id))}
            />
          ))}
          {filteredGroups.length === 0 && (
            <div className="col-span-full text-center py-8 text-[#FFC900]/60">
              No study groups found matching your criteria
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default StudyGroupsPage;
