
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowLeft, Tag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useStudyGroupDetails } from "@/hooks/useStudyGroupDetails";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useErrorHandler } from "@/hooks/useErrorHandler";
import StudyGroupMembership from "@/components/apprentices/study-groups/StudyGroupMembership";
import StudyGroupSchedules from "@/components/apprentices/study-groups/StudyGroupSchedules";

const StudyGroupDetailsPage = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const { handleError } = useErrorHandler();
  const {
    group,
    schedules,
    memberCount,
    isMember,
    isOwner,
    isLoading,
    fetchGroupDetails
  } = useStudyGroupDetails(groupId);

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
      
      fetchGroupDetails();
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
            
            <StudyGroupSchedules schedules={schedules} isOwner={isOwner} />
          </div>
          
          <div>
            <StudyGroupMembership 
              isMember={isMember}
              isOwner={isOwner}
              meetingLink={group.meeting_link}
              onJoinLeave={handleJoinLeave}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StudyGroupDetailsPage;
