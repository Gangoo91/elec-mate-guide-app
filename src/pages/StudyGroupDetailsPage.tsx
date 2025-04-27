
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { format, parseISO } from "date-fns";
import { Calendar, Users, Tag, ArrowLeft, Link, ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useErrorHandler } from "@/hooks/useErrorHandler";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import type { StudyGroup, StudyGroupSchedule } from '@/types/studyGroups';

const StudyGroupDetailsPage = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const { handleError } = useErrorHandler();
  const [group, setGroup] = useState<StudyGroup | null>(null);
  const [schedules, setSchedules] = useState<StudyGroupSchedule[]>([]);
  const [memberCount, setMemberCount] = useState(0);
  const [isMember, setIsMember] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (groupId) {
      fetchGroupDetails();
    }
  }, [groupId, user]);

  const fetchGroupDetails = async () => {
    try {
      setIsLoading(true);
      
      // Fetch group details
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

        // Fetch schedules
        const { data: schedulesData, error: schedulesError } = await supabase
          .from('study_group_schedules')
          .select('*')
          .eq('group_id', groupId);
        
        if (schedulesError) throw schedulesError;
        setSchedules(schedulesData || []);

        // Fetch member count
        const { count, error: countError } = await supabase
          .from('study_group_members')
          .select('*', { count: 'exact' })
          .eq('group_id', groupId);
        
        if (countError) throw countError;
        setMemberCount(count || 0);

        // Check if user is a member
        if (user) {
          const { data: memberData, error: memberError } = await supabase
            .from('study_group_members')
            .select('*')
            .eq('group_id', groupId)
            .eq('user_id', user.id)
            .maybeSingle();
          
          if (memberError) throw memberError;
          setIsMember(!!memberData);
        }
      }
    } catch (error) {
      handleError(error, "Failed to load study group details");
      navigate('/apprentices/study-groups');
    } finally {
      setIsLoading(false);
    }
  };

  const handleJoinLeave = async () => {
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
        setIsMember(false);
        setMemberCount(prev => prev - 1);
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
        setIsMember(true);
        setMemberCount(prev => prev + 1);
      }
    } catch (error) {
      handleError(error, "Failed to update group membership");
    }
  };

  if (isLoading) {
    return (
      <MainLayout>
        <div className="container px-4 py-6">
          <div className="flex justify-center py-8">
            <div className="h-8 w-8 rounded-full border-2 border-[#FFC900]/80 border-t-transparent animate-spin"></div>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (!group) {
    return (
      <MainLayout>
        <div className="container px-4 py-6">
          <PageHeader 
            title="Study Group Not Found" 
            description="The study group you're looking for doesn't exist"
          />
          <Button 
            onClick={() => navigate('/apprentices/study-groups')} 
            className="bg-[#FFC900] text-black hover:bg-[#FFC900]/90"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Study Groups
          </Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container px-4 py-6">
        <div className="mb-6">
          <Button 
            onClick={() => navigate('/apprentices/study-groups')} 
            variant="outline"
            className="border-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Study Groups
          </Button>
        </div>
        
        <PageHeader
          title={group.name}
          description={group.description}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <Card className="bg-[#22251e] border-[#FFC900]/20">
              <CardHeader>
                <CardTitle className="text-[#FFC900]">Group Details</CardTitle>
                <CardDescription className="text-[#FFC900]/70">Topic: {group.topic}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-[#FFC900] mb-2">Level</h3>
                  <p className="text-[#FFC900]/80">{group.level}</p>
                </div>
                
                <div>
                  <h3 className="text-[#FFC900] mb-2">Members</h3>
                  <p className="text-[#FFC900]/80">{memberCount} / {group.max_participants}</p>
                </div>
                
                {group.tags && group.tags.length > 0 && (
                  <div>
                    <h3 className="text-[#FFC900] mb-2">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.tags.map(tag => (
                        <span key={tag} className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-[#FFC900]/10 text-[#FFC900]">
                          <Tag size={12} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card className="bg-[#22251e] border-[#FFC900]/20 mt-6">
              <CardHeader>
                <CardTitle className="text-[#FFC900]">Upcoming Meetings</CardTitle>
              </CardHeader>
              <CardContent>
                {schedules.length > 0 ? (
                  <div className="space-y-4">
                    {schedules.map((schedule) => (
                      <div key={schedule.id} className="p-4 border border-[#FFC900]/20 rounded-md">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="text-[#FFC900]">{schedule.day_of_week}</h4>
                          <span className="text-[#FFC900]/80">{schedule.start_time} ({schedule.duration_minutes} minutes)</span>
                        </div>
                        {schedule.meeting_link && (
                          <div className="mt-2">
                            <a 
                              href={schedule.meeting_link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-[#FFC900] hover:underline"
                            >
                              <ExternalLink size={16} />
                              Join Meeting
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6 text-[#FFC900]/60">
                    <Calendar className="mx-auto h-12 w-12 mb-2 opacity-50" />
                    <p>No meetings scheduled yet.</p>
                    {isOwner && (
                      <p className="mt-2 text-sm">Click the calendar icon on the group card to schedule a meeting.</p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="bg-[#22251e] border-[#FFC900]/20 sticky top-6">
              <CardHeader>
                <CardTitle className="text-[#FFC900]">Membership</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {group.meeting_link && isMember && (
                  <div className="mb-4">
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => window.open(group.meeting_link, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Join Next Meeting
                    </Button>
                  </div>
                )}
                
                <Button 
                  onClick={handleJoinLeave}
                  className={`w-full ${isMember ? 'bg-red-500 hover:bg-red-600' : 'bg-[#FFC900] hover:bg-[#FFC900]/90 text-black'}`}
                >
                  {isMember ? 'Leave Group' : 'Join Group'}
                </Button>
                
                {isMember && (
                  <div className="text-center mt-4">
                    <p className="text-[#FFC900]/70 text-sm">
                      You're currently a member of this group
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
            
            {isOwner && (
              <div className="mt-6 text-center p-4 border border-[#FFC900]/20 rounded-md">
                <p className="text-[#FFC900]/90 mb-2">You are the owner of this group</p>
                <p className="text-[#FFC900]/70 text-sm">
                  Go to the main Study Groups page and click on the calendar icon on your group's card to schedule meetings.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StudyGroupDetailsPage;
