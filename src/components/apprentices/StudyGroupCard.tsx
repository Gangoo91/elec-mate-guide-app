
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar, Users, Tag, Info } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { formatDistanceToNow } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';
import ScheduleDialog from "./study-groups/ScheduleDialog";
import type { StudyGroup } from "@/types/studyGroups";

interface StudyGroupProps extends StudyGroup {
  memberCount: number;
  isMember: boolean;
  onJoinLeave: () => void;
}

const StudyGroupCard = ({
  id,
  name,
  description,
  topic,
  level,
  max_participants,
  next_meeting_at,
  meeting_link,
  memberCount,
  isMember,
  onJoinLeave,
  tags = [],
  is_private,
  created_by
}: StudyGroupProps) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const isOwner = user?.id === created_by;

  const handleJoinLeave = async () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to join study groups",
        variant: "destructive",
      });
      return;
    }

    onJoinLeave();
  };

  const handleScheduleCreated = () => {
    toast({
      title: "Success",
      description: "Meeting schedule has been created",
    });
  };

  const viewGroupDetails = () => {
    navigate(`/apprentices/study-groups/${id}`);
  };

  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-[#FFC900] cursor-pointer hover:underline" onClick={viewGroupDetails}>{name}</h3>
              {is_private && (
                <span className="px-2 py-1 text-xs rounded-full bg-[#FFC900]/10 text-[#FFC900]">
                  Private
                </span>
              )}
            </div>
            <p className="text-sm text-[#FFC900]/70">{topic}</p>
          </div>
          <span className="px-2 py-1 text-xs rounded-full bg-[#FFC900]/10 text-[#FFC900]">
            Level: {level}
          </span>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-[#FFC900]/80 text-sm mb-3">{description}</p>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-[#FFC900]/10 text-[#FFC900]">
                <Tag size={12} />
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-[#FFC900]/60 flex items-center gap-2">
              <Users size={16} />
              Members
            </span>
            <span className="text-[#FFC900]">{memberCount} / {max_participants}</span>
          </div>
          {next_meeting_at && (
            <div className="flex justify-between text-sm">
              <span className="text-[#FFC900]/60 flex items-center gap-2">
                <Calendar size={16} />
                Next Meeting
              </span>
              <span className="text-[#FFC900]">
                {formatDistanceToNow(new Date(next_meeting_at), { addSuffix: true })}
              </span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button 
          onClick={handleJoinLeave}
          className={`flex-1 ${isMember ? 'bg-red-500 hover:bg-red-600' : 'bg-[#FFC900] hover:bg-[#FFC900]/90'} text-black`}
        >
          {isMember ? 'Leave Group' : 'Join Group'}
        </Button>
        
        <Button
          onClick={viewGroupDetails}
          variant="outline"
          className="border-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/10"
        >
          <Info size={16} />
        </Button>
        
        {(isOwner || isMember) && (
          <Button
            onClick={() => setIsScheduleOpen(true)}
            variant="outline"
            className="border-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/10"
          >
            <Calendar size={16} />
          </Button>
        )}
      </CardFooter>

      <ScheduleDialog
        open={isScheduleOpen}
        onOpenChange={setIsScheduleOpen}
        groupId={id}
        onScheduleCreated={handleScheduleCreated}
      />
    </Card>
  );
};

export default StudyGroupCard;
